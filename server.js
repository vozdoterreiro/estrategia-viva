import express from 'express';
import { readFile, appendFile, mkdir } from 'fs/promises';
import { existsSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const app = express();
app.use(express.json());

const DATA_DIR = join(__dirname, 'data');
const SUBMISSIONS_FILE = join(DATA_DIR, 'submissions.json');

// Ensure data directory exists
if (!existsSync(DATA_DIR)) {
  await mkdir(DATA_DIR, { recursive: true });
}

// Newsletter endpoint
app.post('/api/newsletter', async (req, res) => {
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

    await appendFile(SUBMISSIONS_FILE, JSON.stringify(data) + '\n');
    return res.status(200).json({ message: 'Success' });
  } catch (error) {
    console.error('Newsletter error:', error);
    return res.status(500).json({ message: 'Internal server error' });
  }
});

// Contact form endpoint
app.post('/api/contact', async (req, res) => {
  try {
    const formData = req.body;
    
    const data = {
      type: 'contact',
      ...formData,
      timestamp: formData.timestamp || new Date().toISOString(),
    };

    await appendFile(SUBMISSIONS_FILE, JSON.stringify(data) + '\n');
    return res.status(200).json({ message: 'Success' });
  } catch (error) {
    console.error('Contact form error:', error);
    return res.status(500).json({ message: 'Internal server error' });
  }
});

// Get all submissions
app.get('/api/submissions', async (req, res) => {
  try {
    if (!existsSync(SUBMISSIONS_FILE)) {
      return res.status(200).json([]);
    }

    const content = await readFile(SUBMISSIONS_FILE, 'utf-8');
    const lines = content.trim().split('\n').filter(line => line);
    const submissions = lines.map(line => JSON.parse(line));
    
    // Sort by timestamp descending (newest first)
    submissions.sort((a, b) => new Date(b.timestamp) - new Date(a.timestamp));

    return res.status(200).json(submissions);
  } catch (error) {
    console.error('Submissions fetch error:', error);
    return res.status(500).json({ message: 'Internal server error' });
  }
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`API server running on port ${PORT}`);
});
