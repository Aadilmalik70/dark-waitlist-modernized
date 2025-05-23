// lib/serverless-storage.js
import fs from 'fs';
import path from 'path';

// Simple serverless storage implementation that uses JSON files
// In a production environment, this would be replaced with a real serverless database
// like Vercel KV, Supabase, or Firebase

const STORAGE_FILE = path.join(process.cwd(), 'data', 'subscribers.json');

// Ensure the data directory exists
function ensureDataDirectory() {
  const dataDir = path.join(process.cwd(), 'data');
  if (!fs.existsSync(dataDir)) {
    fs.mkdirSync(dataDir, { recursive: true });
  }
}

// Initialize the storage file if it doesn't exist
function initStorage() {
  ensureDataDirectory();
  if (!fs.existsSync(STORAGE_FILE)) {
    fs.writeFileSync(STORAGE_FILE, JSON.stringify([], null, 2));
  }
}

// Get all subscribers
export async function getSubscribers() {
  try {
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

// Initialize storage on module load
initStorage();
