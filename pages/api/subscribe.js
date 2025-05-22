import pool from '@/lib/db';

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { email } = req.body;
  
  if (!email || !email.includes('@')) {
    return res.status(400).json({ error: 'Valid email required' });
  }
  
  try {
    // Get client IP address for analytics
    const forwardedFor = req.headers['x-forwarded-for'];
    const ipAddress = forwardedFor ? forwardedFor.split(',')[0] : req.socket.remoteAddress;
    
    // Get referrer for source tracking
    const source = req.headers.referer || 'direct';
    
    // Store email in MySQL database
    try {
      const [result] = await pool.query(
        'INSERT INTO subscribers (email, source, ip_address) VALUES (?, ?, ?)',
        [email, source, ipAddress]
      );
      
      console.log('Subscriber added to database:', result);
      
      return res.status(200).json({ 
        success: true,
        message: 'Thank you for joining our waitlist!'
      });
    } catch (dbError) {
      // Check if it's a duplicate entry error
      if (dbError.code === 'ER_DUP_ENTRY') {
        return res.status(409).json({ 
          error: 'This email is already on our waitlist',
          alreadySubscribed: true
        });
      }
      
      // For other database errors, fall back to file storage
      console.error('Database error:', dbError);
      
      // Fallback to file storage
      const fs = require('fs');
      const path = require('path');
      
      const subscribersPath = path.join(process.cwd(), 'subscribers.json');
      
      // Create or read the existing subscribers file
      let subscribers = [];
      try {
        if (fs.existsSync(subscribersPath)) {
          const fileContent = fs.readFileSync(subscribersPath, 'utf8');
          subscribers = JSON.parse(fileContent);
        }
      } catch (error) {
        console.error('Error reading subscribers file:', error);
      }
      
      // Add the new subscriber with timestamp
      subscribers.push({
        email,
        timestamp: new Date().toISOString(),
        source,
        ip_address: ipAddress
      });
      
      // Write back to the file
      fs.writeFileSync(subscribersPath, JSON.stringify(subscribers, null, 2));
      
      console.log('Subscriber added to file as fallback');
      
      return res.status(200).json({ 
        success: true,
        message: 'Thank you for joining our waitlist!',
        storageMethod: 'file' // Indicate fallback storage was used
      });
    }
  } catch (error) {
    console.error('Error saving email:', error);
    return res.status(500).json({ error: 'Failed to save email' });
  }
}
