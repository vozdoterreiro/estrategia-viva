import { appendFile } from 'fs/promises';
import { join } from 'path';

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  try {
    const { email, timestamp } = req.body;
    
    if (!email) {
      return res.status(400).json({ message: 'Email is required' });
    }

    const data = {
      type: 'newsletter',
      email,
      timestamp: timestamp || new Date().toISOString(),
    };

    const logPath = join(process.cwd(), 'data', 'submissions.json');
    await appendFile(logPath, JSON.stringify(data) + '\n');

    return res.status(200).json({ message: 'Success' });
  } catch (error) {
    console.error('Newsletter error:', error);
    return res.status(500).json({ message: 'Internal server error' });
  }
}
