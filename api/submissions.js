import { readFile } from 'fs/promises';
import { join } from 'path';
import { existsSync } from 'fs';

export default async function handler(req, res) {
  if (req.method !== 'GET') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  try {
    const logPath = join(process.cwd(), 'data', 'submissions.json');
    
    if (!existsSync(logPath)) {
      return res.status(200).json([]);
    }

    const content = await readFile(logPath, 'utf-8');
    const lines = content.trim().split('\n').filter(line => line);
    const submissions = lines.map(line => JSON.parse(line));
    
    // Sort by timestamp descending (newest first)
    submissions.sort((a, b) => new Date(b.timestamp) - new Date(a.timestamp));

    return res.status(200).json(submissions);
  } catch (error) {
    console.error('Submissions fetch error:', error);
    return res.status(500).json({ message: 'Internal server error' });
  }
}
