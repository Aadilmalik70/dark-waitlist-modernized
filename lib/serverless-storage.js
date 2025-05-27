// lib/serverless-storage.js
import { kv } from '@vercel/kv';
import fs from 'fs';
import path from 'path';

// Fallback to file-based storage when KV is not available (local development)
const STORAGE_FILE = path.join(process.cwd(), 'data', 'subscribers.json');

// Ensure the data directory exists for local development fallback
function ensureDataDirectory() {
  const dataDir = path.join(process.cwd(), 'data');
  if (!fs.existsSync(dataDir)) {
    fs.mkdirSync(dataDir, { recursive: true });
  }
}

// Initialize the storage file if it doesn't exist (for local development)
function initStorage() {
  ensureDataDirectory();
  if (!fs.existsSync(STORAGE_FILE)) {
    fs.writeFileSync(STORAGE_FILE, JSON.stringify([], null, 2));
  }
}

// Check if Vercel KV is available
async function isKVAvailable() {
  try {
    // Try a simple operation to check if KV is available
    await kv.ping();
    return true;
  } catch (error) {
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
    
    // Fallback to file-based storage
    initStorage();
    const data = fs.readFileSync(STORAGE_FILE, 'utf8');
    return JSON.parse(data);
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
    
    // Fallback to file-based storage
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
    console.error('Error adding subscriber:', error);
    return { success: false, error: error.message, code: 'SERVER_ERROR' };
  }
}

// Initialize storage on module load (for file-based fallback)
initStorage();
