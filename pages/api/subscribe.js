import { addSubscriber } from '@/lib/serverless-storage';

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
    
    // Store email using serverless storage
    const result = await addSubscriber(email, {
      source,
      ipAddress,
      userAgent: req.headers['user-agent']
    });
    
    if (!result.success) {
      if (result.code === 'DUPLICATE') {
        return res.status(409).json({ 
          error: 'This email is already on our waitlist',
          alreadySubscribed: true
        });
      }
      
      throw new Error(result.error || 'Failed to save email');
    }
    
    return res.status(200).json({ 
      success: true,
      message: 'Thank you for joining our waitlist!'
    });
  } catch (error) {
    console.error('Error saving email:', error);
    return res.status(500).json({ error: 'Failed to save email' });
  }
}
