import { NextApiRequest, NextApiResponse } from 'next';
import { initializeDatabase, getConnection, generateSlug, formatBlogPost } from '../../../lib/blog-db';
import { v4 as uuidv4 } from 'uuid';

// Initialize database on first request
let dbInitialized = false;

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  // Initialize database if not already done
  if (!dbInitialized) {
    try {
      await initializeDatabase();
      dbInitialized = true;
    } catch (error) {
      console.error('Failed to initialize database:', error);
      return res.status(500).json({ error: 'Database initialization failed' });
    }
  }

  // Handle different HTTP methods
  switch (req.method) {
    case 'GET':
      return await getPosts(req, res);
    case 'POST':
      return await createPost(req, res);
    default:
      return res.status(405).json({ error: 'Method not allowed' });
  }
}

// Get all posts with pagination
async function getPosts(req: NextApiRequest, res: NextApiResponse) {
  const connection = await getConnection();
  
  try {
    const page = parseInt(req.query.page as string) || 1;
    const limit = parseInt(req.query.limit as string) || 10;
    const offset = (page - 1) * limit;
    const status = req.query.status || 'published';
    
    // Get total count for pagination
    const [countResult] = await connection.execute(
      'SELECT COUNT(*) as total FROM blog_posts WHERE status = ?',
      [status]
    );
    const total = (countResult as any)[0].total;
    
    // Get posts with pagination
    // Use template literals for LIMIT and OFFSET to avoid parameterization issues
    const [posts] = await connection.execute(
      `SELECT * FROM blog_posts 
       WHERE status = ? 
       ORDER BY published_at DESC, created_at DESC 
       LIMIT ${parseInt(limit.toString())} OFFSET ${parseInt(offset.toString())}`,
      [status]
    );
    
    // Format posts for API response
    const formattedPosts = (posts as any[]).map(post => formatBlogPost(post));
    
    return res.status(200).json({
      posts: formattedPosts,
      pagination: {
        total,
        page,
        limit,
        pages: Math.ceil(total / limit)
      }
    });
  } catch (error) {
    console.error('Error fetching posts:', error);
    return res.status(500).json({ error: 'Failed to fetch posts' });
  } finally {
    await connection.end();
  }
}

// Create a new post
async function createPost(req: NextApiRequest, res: NextApiResponse) {
  const connection = await getConnection();
  
  try {
    console.log('Received post data:', req.body);
    
    const { 
      title, 
      content, 
      excerpt, 
      featuredImage, 
      status = 'draft',
      author = { name: 'Admin' },
      seo = {},
      categories = [],
      tags = []
    } = req.body;
    
    // Validate required fields
    if (!title || title.trim() === '') {
      console.log('Validation failed: Title is required');
      return res.status(400).json({ error: 'Title is required' });
    }
    
    console.log('Creating post with title:', title);
    console.log('Author data:', author);
    console.log('SEO data:', seo);
    
    // Validate and process featured image
    let processedFeaturedImage = null;
    if (featuredImage) {
      if (featuredImage.startsWith('data:image/')) {
        // If it's a base64 image, we'll store it but warn about size
        if (featuredImage.length > 100000) { // ~100KB limit for base64
          console.warn('Base64 image is very large. Consider using a URL instead.');
        }
        processedFeaturedImage = featuredImage;
      } else if (featuredImage.startsWith('http')) {
        // If it's a URL, store it directly
        processedFeaturedImage = featuredImage;
      } else {
        // Invalid format, skip it
        console.warn('Invalid featured image format. Must be base64 or URL.');
        processedFeaturedImage = null;
      }
    }
    
    const id = uuidv4();
    const slug = generateSlug(title);
    const now = new Date();
    const publishedAt = status === 'published' ? now : null;
    
    // Insert post into database (ensure no undefined values)
    await connection.execute(
      `INSERT INTO blog_posts (
        id, title, slug, content, excerpt, featured_image, 
        author_name, author_avatar, status, published_at, 
        updated_at, created_at, seo_title, seo_description, seo_keywords
      ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`,
      [
        id, 
        title, 
        slug, 
        content || null, 
        excerpt || null, 
        processedFeaturedImage,
        author.name || 'Admin', 
        author.avatar || null, 
        status, 
        publishedAt,
        now, 
        now, 
        seo.title || null, 
        seo.description || null, 
        seo.keywords || null
      ]
    );
    
    console.log('Post inserted successfully with ID:', id);
    
    // Get the created post
    const [posts] = await connection.execute(
      'SELECT * FROM blog_posts WHERE id = ?',
      [id]
    );
    
    const post = (posts as any[])[0];
    console.log('Retrieved post from database:', post);
    
    const formattedPost = formatBlogPost(post);
    console.log('Formatted post for response:', formattedPost);
    
    return res.status(201).json(formattedPost);
  } catch (error) {
    console.error('Error creating post:', error);
    return res.status(500).json({ error: 'Failed to create post' });
  } finally {
    await connection.end();
  }
}
