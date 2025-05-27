// lib/serverless-storage.js
import { kv } from '@vercel/kv';
import fs from 'fs';
import path from 'path';

// Detect if running in Vercel production environment
const isVercelProduction = process.env.VERCEL === '1';
// Detect if running in development environment
const isDevelopment = process.env.NODE_ENV === 'development';

// Fallback to file-based storage when KV is not available (local development only)
const STORAGE_FILE = path.join(process.cwd(), 'data', 'subscribers.json');

// Ensure the data directory exists for local development fallback
function ensureDataDirectory() {
  // Only run in development environment
  if (!isDevelopment) return;
  
  try {
    const dataDir = path.join(process.cwd(), 'data');
    if (!fs.existsSync(dataDir)) {
      fs.mkdirSync(dataDir, { recursive: true });
    }
  } catch (error) {
    console.log('Unable to create data directory, likely in read-only environment');
  }
}

// Initialize the storage file if it doesn't exist (for local development)
function initStorage() {
  // Only run in development environment
  if (!isDevelopment) return;
  
  try {
    ensureDataDirectory();
    if (!fs.existsSync(STORAGE_FILE)) {
      fs.writeFileSync(STORAGE_FILE, JSON.stringify([], null, 2));
    }
  } catch (error) {
    console.log('Unable to initialize storage file, likely in read-only environment');
  }
}

// Check if Vercel KV is available
async function isKVAvailable() {
  try {
    // Try a simple operation to check if KV is available
    await kv.ping();
    return true;
  } catch (error) {
    // If in Vercel production, KV should be available - this is an error state
    if (isVercelProduction) {
      console.error('ERROR: Vercel KV is not available in production environment. Please ensure KV is properly set up in your Vercel project.');
      return false;
    }
    
    // In development, we can fall back to file storage
    console.log('Vercel KV not available, using file-based storage fallback');
    return false;
  }
}

// Get all subscribers
export async function getSubscribers() {
  try {
    // Try to use Vercel KV if available
    if (await isKVAvailable()) {
      const subscribers = await kv.lrange('all_subscribers', 0, -1);
      return subscribers || [];
    }
    
    // If in Vercel production but KV is not available, return empty array
    if (isVercelProduction) {
      console.error('ERROR: Cannot retrieve subscribers. Vercel KV is not available in production.');
      return [];
    }
    
    // Fallback to file-based storage only in development
    if (isDevelopment) {
      try {
        initStorage();
        const data = fs.readFileSync(STORAGE_FILE, 'utf8');
        return JSON.parse(data);
      } catch (error) {
        console.error('Error reading subscribers from file:', error);
        return [];
      }
    }
    
    // Default fallback
    return [];
  } catch (error) {
    console.error('Error reading subscribers:', error);
    return [];
  }
}

// Add a new subscriber
export async function addSubscriber(email, metadata = {}) {
  try {
    // Try to use Vercel KV if available
    if (await isKVAvailable()) {
      // Check if email already exists
      const existingSubscriber = await kv.get(`subscriber:${email}`);
      if (existingSubscriber) {
        return { success: false, error: 'Email already exists', code: 'DUPLICATE' };
      }
      
      // Add new subscriber
      const newSubscriber = {
        id: Date.now().toString(),
        email,
        createdAt: new Date().toISOString(),
        ...metadata
      };
      
      // Store in KV
      await kv.set(`subscriber:${email}`, newSubscriber);
      
      // Also add to a list of all subscribers
      await kv.lpush('all_subscribers', newSubscriber);
      
      return { success: true, subscriber: newSubscriber };
    }
    
    // If in Vercel production but KV is not available, return error
    if (isVercelProduction) {
      console.error('ERROR: Cannot add subscriber. Vercel KV is not available in production.');
      return { 
        success: false, 
        error: 'Storage service unavailable. Please ensure Vercel KV is properly configured.', 
        code: 'STORAGE_UNAVAILABLE' 
      };
    }
    
    // Fallback to file-based storage only in development
    if (isDevelopment) {
      try {
        initStorage();
        const subscribers = await getSubscribers();
        
        // Check if email already exists
        const existingSubscriber = subscribers.find(sub => sub.email === email);
        if (existingSubscriber) {
          return { success: false, error: 'Email already exists', code: 'DUPLICATE' };
        }
        
        // Add new subscriber
        const newSubscriber = {
          id: Date.now().toString(),
          email,
          createdAt: new Date().toISOString(),
          ...metadata
        };
        
        subscribers.push(newSubscriber);
        fs.writeFileSync(STORAGE_FILE, JSON.stringify(subscribers, null, 2));
        
        return { success: true, subscriber: newSubscriber };
      } catch (error) {
        console.error('Error adding subscriber to file storage:', error);
        return { success: false, error: error.message, code: 'SERVER_ERROR' };
      }
    }
    
    // Default error for non-development environments without KV
    return { 
      success: false, 
      error: 'Storage service unavailable', 
      code: 'STORAGE_UNAVAILABLE' 
    };
  } catch (error) {
    console.error('Error adding subscriber:', error);
    return { success: false, error: error.message, code: 'SERVER_ERROR' };
  }
}

// Only initialize storage in development environment
if (isDevelopment) {
  initStorage();
}
