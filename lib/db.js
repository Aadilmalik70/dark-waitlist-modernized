// lib/db.js
import mysql from 'mysql2/promise';
import dotenv from 'dotenv';

// Load environment variables from .env.local
dotenv.config({ path: '.env.local' });

// Create a connection pool
const pool = mysql.createPool({
  host: process.env.DB_HOST || 'localhost',
  user: process.env.DB_USER || 'root',
  password: process.env.DB_PASSWORD || 'password',
  database: process.env.DB_NAME || 'waitlist_db',
  port: parseInt(process.env.DB_PORT || '3306'),
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0
});

// Initialize the database and tables
export async function initDatabase() {
  try {
    // Create the database if it doesn't exist
    const connection = await mysql.createConnection({
      host: process.env.DB_HOST || 'localhost',
      user: process.env.DB_USER || 'root',
      password: process.env.DB_PASSWORD || 'password',
      port: parseInt(process.env.DB_PORT || '3306')
    });
    
    await connection.query(`CREATE DATABASE IF NOT EXISTS ${process.env.DB_NAME || 'waitlist_db'}`);
    
    // Create the subscribers table if it doesn't exist
    await connection.query(`USE ${process.env.DB_NAME || 'waitlist_db'}`);
    await connection.query(`
      CREATE TABLE IF NOT EXISTS subscribers (
        id INT AUTO_INCREMENT PRIMARY KEY,
        email VARCHAR(255) NOT NULL UNIQUE,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        source VARCHAR(100),
        ip_address VARCHAR(45)
      )
    `);
    
    await connection.end();
    console.log('Database and tables initialized successfully');
  } catch (error) {
    console.error('Error initializing database:', error);
    // Fall back to file-based storage if database initialization fails
  }
}

// Execute the initialization
initDatabase().catch(console.error);

export default pool;
