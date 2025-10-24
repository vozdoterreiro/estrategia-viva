-- Schema para banco de dados PostgreSQL
-- Estratégia Viva - Lead Management System

-- Tabela de leads de contato
CREATE TABLE IF NOT EXISTS contact_leads (
    id SERIAL PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL,
    phone VARCHAR(50),
    company VARCHAR(255),
    interest VARCHAR(255),
    message TEXT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    status VARCHAR(50) DEFAULT 'new',
    source VARCHAR(100) DEFAULT 'website'
);

-- Tabela de inscrições em newsletter
CREATE TABLE IF NOT EXISTS newsletter_subscribers (
    id SERIAL PRIMARY KEY,
    email VARCHAR(255) UNIQUE NOT NULL,
    subscribed_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    status VARCHAR(50) DEFAULT 'active',
    source VARCHAR(100) DEFAULT 'website'
);

-- Índices para performance
CREATE INDEX IF NOT EXISTS idx_contact_leads_email ON contact_leads(email);
CREATE INDEX IF NOT EXISTS idx_contact_leads_created_at ON contact_leads(created_at DESC);
CREATE INDEX IF NOT EXISTS idx_contact_leads_status ON contact_leads(status);
CREATE INDEX IF NOT EXISTS idx_newsletter_email ON newsletter_subscribers(email);

-- Trigger para atualizar updated_at automaticamente
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
    NEW.updated_at = CURRENT_TIMESTAMP;
    RETURN NEW;
END;
$$ language 'plpgsql';

CREATE TRIGGER update_contact_leads_updated_at BEFORE UPDATE ON contact_leads
    FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

-- View para dashboard (apenas leads de contato ativos)
CREATE OR REPLACE VIEW dashboard_leads AS
SELECT 
    id,
    name,
    email,
    phone,
    company,
    interest,
    created_at,
    status
FROM contact_leads
WHERE status != 'deleted'
ORDER BY created_at DESC;

-- Comentários para documentação
COMMENT ON TABLE contact_leads IS 'Armazena todos os leads capturados via formulário de contato';
COMMENT ON TABLE newsletter_subscribers IS 'Armazena inscrições de newsletter';
COMMENT ON COLUMN contact_leads.status IS 'Status do lead: new, contacted, qualified, converted, archived, deleted';
COMMENT ON COLUMN contact_leads.source IS 'Origem do lead: website, landing_page, referral, etc';
