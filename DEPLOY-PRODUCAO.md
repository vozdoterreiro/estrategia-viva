# 🚀 Deploy para Produção

## Preparação

### 1. Verificar Build
```bash
npm run build
```

Deve gerar `dist/` sem erros.

### 2. Teste Local da Build
```bash
npm run preview
```

Acesse `http://localhost:3000` e teste todas as funcionalidades.

---

## Deploy no Coolify (Recomendado)

O projeto já está configurado para Coolify (veja `coolify.json`).

### Dockerfile para Produção

Atualize o `Dockerfile` para incluir o servidor API:

```dockerfile
FROM node:18-alpine AS builder
WORKDIR /app
COPY package*.json ./
RUN npm ci
COPY . .
RUN npm run build

FROM node:18-alpine
WORKDIR /app
COPY --from=builder /app/dist ./dist
COPY --from=builder /app/server.js ./
COPY --from=builder /app/package*.json ./
RUN npm ci --only=production && npm install express

# Criar pasta data
RUN mkdir -p /app/data && chmod 777 /app/data

EXPOSE 3000 3001

# Script de inicialização
COPY <<EOF /app/start.sh
#!/bin/sh
node server.js &
npx serve -s dist -l 3000
EOF

RUN chmod +x /app/start.sh
CMD ["/app/start.sh"]
```

### Variáveis de Ambiente (Coolify)

Configurar no painel do Coolify:

```env
NODE_ENV=production
PORT=3000
API_PORT=3001
```

---

## Deploy Manual (VPS/Cloud)

### 1. Clonar Repositório
```bash
git clone <repo-url>
cd estrategia-viva
```

### 2. Instalar Dependências
```bash
npm install
```

### 3. Build
```bash
npm run build
```

### 4. Servir com PM2

Instalar PM2:
```bash
npm install -g pm2
```

Criar `ecosystem.config.js`:
```javascript
module.exports = {
  apps: [
    {
      name: 'estrategia-viva-api',
      script: 'server.js',
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: '1G',
      env: {
        NODE_ENV: 'production',
        PORT: 3001
      }
    },
    {
      name: 'estrategia-viva-web',
      script: 'npx',
      args: 'serve -s dist -l 3000',
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: '500M'
    }
  ]
}
```

Iniciar:
```bash
pm2 start ecosystem.config.js
pm2 save
pm2 startup
```

---

## Nginx Reverse Proxy

Configuração para servir via Nginx:

```nginx
server {
    listen 80;
    server_name estrategiaviva.com.br;

    # Frontend
    location / {
        proxy_pass http://localhost:3000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_cache_bypass $http_upgrade;
    }

    # API
    location /api/ {
        proxy_pass http://localhost:3001/api/;
        proxy_http_version 1.1;
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
    }

    # SSL (certbot)
    listen 443 ssl;
    ssl_certificate /etc/letsencrypt/live/estrategiaviva.com.br/fullchain.pem;
    ssl_certificate_key /etc/letsencrypt/live/estrategiaviva.com.br/privkey.pem;
}
```

---

## Backup Automático

### Cron Job para Backup Diário

```bash
crontab -e
```

Adicionar:
```cron
# Backup diário às 2h da manhã
0 2 * * * cd /caminho/para/estrategia-viva && cp data/submissions.json data/backups/submissions-$(date +\%Y\%m\%d).json

# Limpar backups com mais de 30 dias
0 3 * * * find /caminho/para/estrategia-viva/data/backups -name "submissions-*.json" -mtime +30 -delete
```

Criar pasta de backups:
```bash
mkdir -p data/backups
```

---

## Monitoramento

### PM2 Monitoring
```bash
pm2 monit
```

### Logs
```bash
# Ver logs em tempo real
pm2 logs

# Logs específicos
pm2 logs estrategia-viva-api
pm2 logs estrategia-viva-web

# Limpar logs
pm2 flush
```

### Health Check

Criar endpoint de health:

Adicionar em `server.js`:
```javascript
app.get('/api/health', (req, res) => {
  res.status(200).json({ 
    status: 'ok', 
    timestamp: new Date().toISOString(),
    uptime: process.uptime()
  });
});
```

Script de monitoramento:
```bash
#!/bin/bash
# health-check.sh

API_URL="https://estrategiaviva.com.br/api/health"
RESPONSE=$(curl -s -o /dev/null -w "%{http_code}" $API_URL)

if [ $RESPONSE != "200" ]; then
    echo "API down! Restarting..."
    pm2 restart estrategia-viva-api
    # Enviar alerta (email, slack, etc)
fi
```

Adicionar ao cron (cada 5 minutos):
```cron
*/5 * * * * /caminho/para/health-check.sh
```

---

## Segurança em Produção

### 1. Variáveis de Ambiente

Nunca commitar credenciais. Usar `.env`:

```env
# .env (não versionar!)
ADMIN_USER=igor
ADMIN_PASSWORD=igor22
SESSION_SECRET=gere-um-hash-seguro-aqui
```

Atualizar código para usar:
```javascript
const ADMIN_USER = process.env.ADMIN_USER || 'igor';
const ADMIN_PASSWORD = process.env.ADMIN_PASSWORD || 'igor22';
```

### 2. HTTPS Obrigatório

Redirecionar HTTP → HTTPS no Nginx:
```nginx
server {
    listen 80;
    server_name estrategiaviva.com.br;
    return 301 https://$server_name$request_uri;
}
```

### 3. Rate Limiting

Instalar:
```bash
npm install express-rate-limit
```

Em `server.js`:
```javascript
import rateLimit from 'express-rate-limit';

const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutos
  max: 100 // limite de 100 requisições
});

app.use('/api/', limiter);
```

### 4. Helmet.js (Security Headers)

```bash
npm install helmet
```

```javascript
import helmet from 'helmet';
app.use(helmet());
```

---

## Checklist de Deploy

- [ ] Build sem erros (`npm run build`)
- [ ] Teste local funcionando (`npm run preview`)
- [ ] Variáveis de ambiente configuradas
- [ ] Nginx configurado
- [ ] SSL/HTTPS ativo
- [ ] PM2 rodando e persistente
- [ ] Backup automático configurado
- [ ] Health check ativo
- [ ] Rate limiting implementado
- [ ] Logs sendo monitorados
- [ ] Dashboard acessível via `/admin/dashboard`
- [ ] Formulários salvando dados
- [ ] Newsletter funcionando

---

## Manutenção

### Atualizar Site
```bash
git pull origin main
npm install
npm run build
pm2 restart all
```

### Ver Submissões
```bash
# Via dashboard: /admin/dashboard
# Via CLI:
cat data/submissions.json | jq '.'
```

### Limpar Dados Antigos
```bash
# Backup primeiro
cp data/submissions.json data/submissions-backup.json

# Limpar arquivo
> data/submissions.json
```

---

## Suporte

Em caso de problemas:

1. Verificar logs: `pm2 logs`
2. Verificar processos: `pm2 status`
3. Reiniciar: `pm2 restart all`
4. Verificar disco: `df -h`
5. Verificar memória: `free -m`

---

**Site em produção com sucesso! 🚀**
