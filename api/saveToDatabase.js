// API para salvar leads no PostgreSQL
// /api/saveToDatabase.js

import { Pool } from 'pg';

// Configuração do PostgreSQL (usar variáveis de ambiente)
const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: process.env.NODE_ENV === 'production' ? { rejectUnauthorized: false } : false
});

export default async function handler(req, res) {
  // Apenas POST é permitido
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const { type, name, email, phone, company, interest, message } = req.body;

    // Validação básica
    if (!type || !email) {
      return res.status(400).json({ error: 'Missing required fields' });
    }

    let result;

    if (type === 'contact') {
      // Inserir lead de contato
      if (!name) {
        return res.status(400).json({ error: 'Name is required for contact leads' });
      }

      const query = `
        INSERT INTO contact_leads (name, email, phone, company, interest, message, source)
        VALUES ($1, $2, $3, $4, $5, $6, $7)
        RETURNING id, created_at
      `;

      result = await pool.query(query, [
        name,
        email,
        phone || null,
        company || null,
        interest || null,
        message || null,
        'website'
      ]);

      return res.status(201).json({
        success: true,
        message: 'Contact lead saved successfully',
        leadId: result.rows[0].id,
        timestamp: result.rows[0].created_at
      });

    } else if (type === 'newsletter') {
      // Inserir inscrição de newsletter
      const query = `
        INSERT INTO newsletter_subscribers (email, source)
        VALUES ($1, $2)
        ON CONFLICT (email) DO UPDATE 
        SET status = 'active', subscribed_at = CURRENT_TIMESTAMP
        RETURNING id, subscribed_at
      `;

      result = await pool.query(query, [email, 'website']);

      return res.status(201).json({
        success: true,
        message: 'Newsletter subscription saved successfully',
        subscriberId: result.rows[0].id,
        timestamp: result.rows[0].subscribed_at
      });

    } else {
      return res.status(400).json({ error: 'Invalid type. Must be "contact" or "newsletter"' });
    }

  } catch (error) {
    console.error('Database error:', error);

    // Tratamento de erro de email duplicado
    if (error.code === '23505') { // unique_violation
      return res.status(409).json({
        error: 'This email is already registered',
        details: error.message
      });
    }

    return res.status(500).json({
      error: 'Failed to save to database',
      details: error.message
    });
  }
}
