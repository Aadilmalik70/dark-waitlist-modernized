import { NextApiRequest, NextApiResponse } from 'next';
import mysql from 'mysql2/promise';
import { v4 as uuidv4 } from 'uuid';

// Database connection configuration
const dbConfig = {
  host: process.env.DB_HOST || 'localhost',
  user: process.env.DB_USER || 'root',
  password: process.env.DB_PASSWORD || '',
  database: process.env.DB_NAME || 'blog_db',
};

// Initialize database connection
export async function getConnection() {
  try {
    console.log('Attempting to connect to database with config:', {
      host: dbConfig.host,
      user: dbConfig.user,
      database: dbConfig.database,
      // Not logging password for security reasons
    });
    
    return await mysql.createConnection(dbConfig);
  } catch (error) {
    console.error('Error connecting to database:', error);
    // More detailed error message with troubleshooting guidance
    const errorMessage = `Database connection failed: ${error.message}. 
    Please check:
    1. Database credentials in environment variables
    2. Database server is running and accessible
    3. Network/firewall allows connections from this service
    4. SSL requirements for your database provider`;
    
    throw new Error(errorMessage);
  }
}

// Initialize database tables if they don't exist
export async function initializeDatabase() {
  const connection = await getConnection();
  
  try {
    // Create blog_posts table
    await connection.execute(`
      CREATE TABLE IF NOT EXISTS blog_posts (
        id VARCHAR(36) PRIMARY KEY,
        title VARCHAR(255) NOT NULL,
        slug VARCHAR(255) NOT NULL UNIQUE,
        content TEXT,
        excerpt TEXT,
        featured_image VARCHAR(255),
        author_name VARCHAR(100),
        author_avatar VARCHAR(255),
        status ENUM('draft', 'published') DEFAULT 'draft',
        published_at DATETIME,
        updated_at DATETIME NOT NULL,
        created_at DATETIME NOT NULL,
        view_count INT DEFAULT 0,
        seo_title VARCHAR(255),
        seo_description TEXT,
        seo_keywords TEXT
      )
    `);
    
    // Create categories table
    await connection.execute(`
      CREATE TABLE IF NOT EXISTS categories (
        id VARCHAR(36) PRIMARY KEY,
        name VARCHAR(100) NOT NULL,
        slug VARCHAR(100) NOT NULL UNIQUE,
        description TEXT
      )
    `);
    
    // Create post_categories junction table
    await connection.execute(`
      CREATE TABLE IF NOT EXISTS post_categories (
        post_id VARCHAR(36) NOT NULL,
        category_id VARCHAR(36) NOT NULL,
        PRIMARY KEY (post_id, category_id),
        FOREIGN KEY (post_id) REFERENCES blog_posts(id) ON DELETE CASCADE,
        FOREIGN KEY (category_id) REFERENCES categories(id) ON DELETE CASCADE
      )
    `);
    
    // Create tags table
    await connection.execute(`
      CREATE TABLE IF NOT EXISTS tags (
        id VARCHAR(36) PRIMARY KEY,
        name VARCHAR(100) NOT NULL,
        slug VARCHAR(100) NOT NULL UNIQUE
      )
    `);
    
    // Create post_tags junction table
    await connection.execute(`
      CREATE TABLE IF NOT EXISTS post_tags (
        post_id VARCHAR(36) NOT NULL,
        tag_id VARCHAR(36) NOT NULL,
        PRIMARY KEY (post_id, tag_id),
        FOREIGN KEY (post_id) REFERENCES blog_posts(id) ON DELETE CASCADE,
        FOREIGN KEY (tag_id) REFERENCES tags(id) ON DELETE CASCADE
      )
    `);
    
    console.log('Database tables initialized successfully');
  } catch (error) {
    console.error('Error initializing database tables:', error);
    throw error;
  } finally {
    await connection.end();
  }
}

// Helper function to generate slug from title
export function generateSlug(title: string): string {
  return title
    .toLowerCase()
    .replace(/[^\w\s-]/g, '')
    .replace(/\s+/g, '-')
    .replace(/-+/g, '-')
    .trim();
}

// Helper function to format a blog post from database to API response
export function formatBlogPost(post: any) {
  return {
    id: post.id,
    title: post.title,
    slug: post.slug,
    content: post.content,
    excerpt: post.excerpt,
    featuredImage: post.featured_image,
    author: {
      name: post.author_name,
      avatar: post.author_avatar,
    },
    status: post.status,
    publishedAt: post.published_at,
    updatedAt: post.updated_at,
    createdAt: post.created_at,
    viewCount: post.view_count,
    seo: {
      title: post.seo_title,
      description: post.seo_description,
      keywords: post.seo_keywords,
    },
    categories: post.categories || [],
    tags: post.tags || [],
  };
}

export default { initializeDatabase, getConnection, generateSlug, formatBlogPost };
