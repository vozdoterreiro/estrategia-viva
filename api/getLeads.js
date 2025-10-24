// API para buscar dados do dashboard
// /api/getLeads.js

import { Pool } from 'pg';

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: process.env.NODE_ENV === 'production' ? { rejectUnauthorized: false } : false
});

export default async function handler(req, res) {
  // Apenas GET é permitido
  if (req.method !== 'GET') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const { limit = 50, offset = 0 } = req.query;

    // Buscar leads
    const leadsQuery = `
      SELECT 
        id,
        name,
        email,
        phone,
        company,
        interest,
        message,
        created_at as timestamp,
        status
      FROM contact_leads
      WHERE status != 'deleted'
      ORDER BY created_at DESC
      LIMIT $1 OFFSET $2
    `;

    const leadsResult = await pool.query(leadsQuery, [parseInt(limit), parseInt(offset)]);

    // Calcular estatísticas
    const statsQuery = `
      SELECT 
        COUNT(*) as total,
        COUNT(*) FILTER (
          WHERE created_at >= date_trunc('month', CURRENT_DATE)
        ) as this_month,
        COUNT(*) FILTER (
          WHERE created_at >= date_trunc('month', CURRENT_DATE - interval '1 month')
          AND created_at < date_trunc('month', CURRENT_DATE)
        ) as last_month
      FROM contact_leads
      WHERE status != 'deleted'
    `;

    const statsResult = await pool.query(statsQuery);
    const stats = statsResult.rows[0];

    // Calcular variação percentual
    const thisMonth = parseInt(stats.this_month);
    const lastMonth = parseInt(stats.last_month);
    const conversionRate = lastMonth > 0 
      ? ((thisMonth - lastMonth) / lastMonth * 100).toFixed(1)
      : 0;

    return res.status(200).json({
      success: true,
      data: {
        leads: leadsResult.rows,
        stats: {
          totalLeads: parseInt(stats.total),
          thisMonth,
          lastMonth,
          conversionRate: parseFloat(conversionRate)
        },
        pagination: {
          limit: parseInt(limit),
          offset: parseInt(offset),
          total: parseInt(stats.total)
        }
      }
    });

  } catch (error) {
    console.error('Database error:', error);
    return res.status(500).json({
      error: 'Failed to fetch leads from database',
      details: error.message
    });
  }
}
