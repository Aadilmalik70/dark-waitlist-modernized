import { NextApiRequest, NextApiResponse } from 'next';
import { getConnection, formatBlogPost } from '../../../lib/blog-db';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { id } = req.query;
  
  if (!id || typeof id !== 'string') {
    return res.status(400).json({ error: 'Post ID is required' });
  }
  
  // Handle different HTTP methods
  switch (req.method) {
    case 'GET':
      return await getPost(req, res, id);
    case 'PUT':
      return await updatePost(req, res, id);
    case 'DELETE':
      return await deletePost(req, res, id);
    case 'PATCH':
      return await updatePostStatus(req, res, id);
    default:
      return res.status(405).json({ error: 'Method not allowed' });
  }
}

// Get a single post by ID
async function getPost(req: NextApiRequest, res: NextApiResponse, id: string) {
  const connection = await getConnection();
  
  try {
    // Get post by ID
    const [posts] = await connection.execute(
      'SELECT * FROM blog_posts WHERE id = ?',
      [id]
    );
    
    if ((posts as any[]).length === 0) {
      return res.status(404).json({ error: 'Post not found' });
    }
    
    const post = (posts as any[])[0];
    
    // Increment view count if post is published
    if (post.status === 'published') {
      await connection.execute(
        'UPDATE blog_posts SET view_count = view_count + 1 WHERE id = ?',
        [id]
      );
    }
    
    return res.status(200).json(formatBlogPost(post));
  } catch (error) {
    console.error('Error fetching post:', error);
    return res.status(500).json({ error: 'Failed to fetch post' });
  } finally {
    await connection.end();
  }
}

// Update an existing post
async function updatePost(req: NextApiRequest, res: NextApiResponse, id: string) {
  const connection = await getConnection();
  
  try {
    // Check if post exists
    const [existingPosts] = await connection.execute(
      'SELECT * FROM blog_posts WHERE id = ?',
      [id]
    );
    
    if ((existingPosts as any[]).length === 0) {
      return res.status(404).json({ error: 'Post not found' });
    }
    
    const { 
      title, 
      content, 
      excerpt, 
      featuredImage,
      seo = {}
    } = req.body;
    
    // Validate required fields
    if (!title) {
      return res.status(400).json({ error: 'Title is required' });
    }
    
    const now = new Date();
    
    // Update post in database
    await connection.execute(
      `UPDATE blog_posts SET 
        title = ?, 
        content = ?, 
        excerpt = ?, 
        featured_image = ?, 
        updated_at = ?,
        seo_title = ?,
        seo_description = ?,
        seo_keywords = ?
      WHERE id = ?`,
      [
        title, 
        content, 
        excerpt, 
        featuredImage, 
        now,
        seo.title,
        seo.description,
        seo.keywords,
        id
      ]
    );
    
    // Get the updated post
    const [posts] = await connection.execute(
      'SELECT * FROM blog_posts WHERE id = ?',
      [id]
    );
    
    const post = (posts as any[])[0];
    
    return res.status(200).json(formatBlogPost(post));
  } catch (error) {
    console.error('Error updating post:', error);
    return res.status(500).json({ error: 'Failed to update post' });
  } finally {
    await connection.end();
  }
}

// Delete a post
async function deletePost(req: NextApiRequest, res: NextApiResponse, id: string) {
  const connection = await getConnection();
  
  try {
    // Check if post exists
    const [existingPosts] = await connection.execute(
      'SELECT * FROM blog_posts WHERE id = ?',
      [id]
    );
    
    if ((existingPosts as any[]).length === 0) {
      return res.status(404).json({ error: 'Post not found' });
    }
    
    // Delete post from database
    await connection.execute(
      'DELETE FROM blog_posts WHERE id = ?',
      [id]
    );
    
    return res.status(200).json({ success: true, message: 'Post deleted successfully' });
  } catch (error) {
    console.error('Error deleting post:', error);
    return res.status(500).json({ error: 'Failed to delete post' });
  } finally {
    await connection.end();
  }
}

// Update post status (publish/unpublish)
async function updatePostStatus(req: NextApiRequest, res: NextApiResponse, id: string) {
  const connection = await getConnection();
  
  try {
    // Check if post exists
    const [existingPosts] = await connection.execute(
      'SELECT * FROM blog_posts WHERE id = ?',
      [id]
    );
    
    if ((existingPosts as any[]).length === 0) {
      return res.status(404).json({ error: 'Post not found' });
    }
    
    const { status } = req.body;
    
    if (!status || (status !== 'published' && status !== 'draft')) {
      return res.status(400).json({ error: 'Valid status (published/draft) is required' });
    }
    
    const now = new Date();
    const publishedAt = status === 'published' ? now : null;
    
    // Update post status in database
    await connection.execute(
      `UPDATE blog_posts SET 
        status = ?, 
        published_at = ?, 
        updated_at = ?
      WHERE id = ?`,
      [status, publishedAt, now, id]
    );
    
    // Get the updated post
    const [posts] = await connection.execute(
      'SELECT * FROM blog_posts WHERE id = ?',
      [id]
    );
    
    const post = (posts as any[])[0];
    
    return res.status(200).json(formatBlogPost(post));
  } catch (error) {
    console.error('Error updating post status:', error);
    return res.status(500).json({ error: 'Failed to update post status' });
  } finally {
    await connection.end();
  }
}
