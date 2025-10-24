# Configuração do Banco de Dados PostgreSQL

Este documento explica como configurar e usar o PostgreSQL para armazenar leads do site Estratégia Viva.

## 📋 Pré-requisitos

- PostgreSQL 12+ instalado
- Node.js 18+ (para as APIs)
- Acesso ao servidor/cloud onde o banco será hospedado

## 🗄️ Criação do Banco de Dados

### 1. Criar o banco de dados

```bash
# Conectar ao PostgreSQL
psql -U postgres

# Criar banco de dados
CREATE DATABASE estrategia_viva;

# Criar usuário (recomendado para produção)
CREATE USER estrategia_user WITH ENCRYPTED PASSWORD 'sua_senha_segura_aqui';

# Dar permissões
GRANT ALL PRIVILEGES ON DATABASE estrategia_viva TO estrategia_user;

# Conectar ao banco
\c estrategia_viva

# Dar permissões no schema public
GRANT ALL ON SCHEMA public TO estrategia_user;
```

### 2. Executar o schema

```bash
# A partir do diretório raiz do projeto
psql -U estrategia_user -d estrategia_viva -f db/schema.sql
```

Ou copie e cole o conteúdo de `db/schema.sql` direto no psql.

## 🔧 Configuração do Ambiente

### 1. Criar arquivo .env

Copie o arquivo de exemplo e preencha com suas credenciais:

```bash
cp .env.example .env
```

### 2. Editar .env

```env
DATABASE_URL=postgresql://estrategia_user:sua_senha@localhost:5432/estrategia_viva
NODE_ENV=production
```

**Para produção (exemplo com serviços cloud):**

```env
# Render.com, Railway, Heroku, etc
DATABASE_URL=postgresql://usuario:senha@host-externo.com:5432/database_name?sslmode=require

# Supabase
DATABASE_URL=postgresql://postgres:senha@db.xxx.supabase.co:5432/postgres
```

## 📦 Instalação de Dependências

```bash
npm install pg
# ou
yarn add pg
```

## 🚀 Estrutura do Banco

### Tabelas Criadas

1. **contact_leads** - Armazena todos os leads de contato
   - `id` - ID único (auto-increment)
   - `name` - Nome do lead
   - `email` - Email do lead
   - `phone` - Telefone (opcional)
   - `company` - Empresa (opcional)
   - `interest` - Serviço de interesse
   - `message` - Mensagem do lead
   - `created_at` - Data de criação
   - `updated_at` - Data de atualização
   - `status` - Status (new, contacted, qualified, converted, archived, deleted)
   - `source` - Origem (website, landing_page, etc)

2. **newsletter_subscribers** - Inscrições de newsletter
   - `id` - ID único
   - `email` - Email (único)
   - `subscribed_at` - Data de inscrição
   - `status` - Status (active, unsubscribed)
   - `source` - Origem

### Views

- **dashboard_leads** - View otimizada para o dashboard (exclui leads deletados)

## 📡 APIs Disponíveis

### 1. Salvar Lead

**Endpoint:** `POST /api/saveToDatabase`

**Body:**
```json
{
  "type": "contact",
  "name": "João Silva",
  "email": "joao@empresa.com",
  "phone": "11999999999",
  "company": "Empresa ABC",
  "interest": "Diagnóstico de DNA",
  "message": "Gostaria de mais informações"
}
```

**Resposta de sucesso:**
```json
{
  "success": true,
  "message": "Contact lead saved successfully",
  "leadId": 123,
  "timestamp": "2025-10-24T12:00:00.000Z"
}
```

### 2. Buscar Leads (Dashboard)

**Endpoint:** `GET /api/getLeads`

**Query Parameters:**
- `limit` (opcional, padrão: 50) - Número de leads por página
- `offset` (opcional, padrão: 0) - Offset para paginação

**Exemplo:**
```
GET /api/getLeads?limit=20&offset=0
```

**Resposta:**
```json
{
  "success": true,
  "data": {
    "leads": [...],
    "stats": {
      "totalLeads": 150,
      "thisMonth": 25,
      "lastMonth": 20,
      "conversionRate": 25.0
    },
    "pagination": {
      "limit": 20,
      "offset": 0,
      "total": 150
    }
  }
}
```

## 🔍 Consultas Úteis

### Ver todos os leads recentes

```sql
SELECT * FROM contact_leads 
ORDER BY created_at DESC 
LIMIT 20;
```

### Contar leads por mês

```sql
SELECT 
  DATE_TRUNC('month', created_at) as month,
  COUNT(*) as total
FROM contact_leads
GROUP BY month
ORDER BY month DESC;
```

### Ver leads por serviço de interesse

```sql
SELECT 
  interest,
  COUNT(*) as total
FROM contact_leads
WHERE interest IS NOT NULL
GROUP BY interest
ORDER BY total DESC;
```

### Atualizar status de um lead

```sql
UPDATE contact_leads 
SET status = 'contacted' 
WHERE id = 123;
```

## 🛡️ Segurança

1. **Nunca** commite o arquivo `.env` no Git
2. Use senhas fortes para o usuário do banco
3. Em produção, use SSL/TLS para conexão
4. Limite as permissões do usuário apenas ao necessário
5. Faça backups regulares do banco

## 📊 Backup

### Criar backup

```bash
pg_dump -U estrategia_user -d estrategia_viva > backup_$(date +%Y%m%d).sql
```

### Restaurar backup

```bash
psql -U estrategia_user -d estrategia_viva < backup_20251024.sql
```

## 🐛 Troubleshooting

### Erro de conexão SSL

Se você receber erro de SSL, adicione `?sslmode=disable` na URL (apenas para desenvolvimento):

```env
DATABASE_URL=postgresql://user:pass@localhost:5432/db?sslmode=disable
```

### Permissões negadas

```sql
-- Dar todas as permissões ao usuário
GRANT ALL PRIVILEGES ON ALL TABLES IN SCHEMA public TO estrategia_user;
GRANT ALL PRIVILEGES ON ALL SEQUENCES IN SCHEMA public TO estrategia_user;
```

### Ver conexões ativas

```sql
SELECT * FROM pg_stat_activity WHERE datname = 'estrategia_viva';
```

## 📞 Suporte

Para dúvidas ou problemas:
- Verifique a documentação do PostgreSQL: https://www.postgresql.org/docs/
- Consulte o time de desenvolvimento
