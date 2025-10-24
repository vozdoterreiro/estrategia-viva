# 🚀 Configuração Completa do Coolify para Estratégia Viva

## 📌 Resposta Direta: Preciso de 2 Recursos no Coolify?

**NÃO!** Você precisa de apenas **1 recurso** no Coolify.

### Por quê?

Este projeto usa uma **arquitetura monolítica** onde o SPA (frontend) e a API (backend) rodam no **mesmo container Docker**:

- **Nginx** (porta 80): Serve o frontend estático e faz proxy para a API
- **Node.js** (porta 3001): Roda o servidor Express com as rotas da API
- **Supervisor**: Gerencia ambos os processos no mesmo container

```
┌─────────────────────────────────────┐
│   Container Docker (porta 80)       │
│                                     │
│  ┌────────────────────────────┐    │
│  │   Nginx (porta 80)         │    │
│  │   - Serve /index.html      │    │
│  │   - Proxy /api/* → 3001    │    │
│  │   - Health check /health   │    │
│  └────────────────────────────┘    │
│              ↓                      │
│  ┌────────────────────────────┐    │
│  │   Node.js (porta 3001)     │    │
│  │   - Express API            │    │
│  │   - /api/newsletter        │    │
│  │   - /api/contact           │    │
│  │   - /api/submissions       │    │
│  └────────────────────────────┘    │
│                                     │
│  Gerenciado por Supervisor         │
└─────────────────────────────────────┘
```

## 🎯 Configuração Passo a Passo no Coolify

### 1. Criar Novo Recurso

1. Acesse seu painel do Coolify
2. Clique em **"+ New"** > **"Application"**
3. Selecione **"Public Repository"** ou conecte sua conta GitHub

### 2. Configurar Repositório

- **Repository URL**: `https://github.com/vozdoterreiro/estrategia-viva.git`
- **Branch**: `main`
- **Build Pack**: `Dockerfile`

### 3. Configurações de Build

```yaml
Build Type: Dockerfile
Dockerfile Location: ./Dockerfile
Docker Build Context: .
```

O Coolify detectará automaticamente o Dockerfile.

### 4. Configurações de Rede

```yaml
Port: 80
Protocol: HTTP
```

**Importante**: Exponha apenas a porta **80**. A porta 3001 (Node.js) é interna ao container.

### 5. Health Check (Recomendado)

```yaml
Health Check Enabled: ✓
Path: /health
Port: 80
Interval: 30s
Timeout: 3s
Retries: 3
```

### 6. Variáveis de Ambiente

Configure as seguintes variáveis no Coolify:

#### Obrigatórias

```bash
NODE_ENV=production
```

#### Opcionais

```bash
# Porta da API interna (padrão: 3001)
PORT=3001

# Para debug (não recomendado em produção)
DEBUG=false
```

### 7. Domínio e SSL

```yaml
Domain: seudominio.com.br
Generate SSL Certificate: ✓ (Let's Encrypt)
Force HTTPS: ✓
```

### 8. Recursos do Container

Configurações recomendadas:

```yaml
Memory Limit: 512MB (mínimo) - 1GB (recomendado)
CPU Limit: 1 core (mínimo)
```

### 9. Volumes Persistentes (Importante!)

Para persistir os dados de submissões, configure um volume:

```yaml
Volume Mounts:
  - Source: estrategia-viva-data
    Destination: /app/data
```

Isso garante que o arquivo `data/submissions.json` não seja perdido em redeploys.

## ✅ Checklist Completo de Deploy

- [ ] Repositório conectado ao Coolify
- [ ] Build Pack: Dockerfile
- [ ] Porta: 80
- [ ] Health Check: /health configurado
- [ ] Variável NODE_ENV=production definida
- [ ] Volume para /app/data criado
- [ ] Domínio configurado
- [ ] SSL/HTTPS habilitado
- [ ] Memory limit mínimo de 512MB

## 🧪 Testando a Configuração

Após o deploy, teste os seguintes endpoints:

### 1. Health Check
```bash
curl https://seudominio.com.br/health
# Resposta esperada: healthy
```

### 2. Frontend (SPA)
```bash
curl -I https://seudominio.com.br
# Resposta esperada: HTTP/2 200
```

### 3. API - Newsletter
```bash
curl -X POST https://seudominio.com.br/api/newsletter \
  -H "Content-Type: application/json" \
  -d '{"email":"teste@example.com"}'
# Resposta esperada: {"message":"Success"}
```

### 4. API - Submissions
```bash
curl https://seudominio.com.br/api/submissions
# Resposta esperada: [...] (array de submissões)
```

## 🐛 Troubleshooting

### Build Falha

**Erro**: "ENOENT: no such file or directory, open '/app/data/submissions.json'"

**Solução**: O volume não foi montado corretamente. Verifique:
1. Volume configurado no Coolify
2. Permissões do diretório `/app/data`

### 502 Bad Gateway

**Causas possíveis**:
1. Node.js não iniciou (porta 3001)
2. Supervisor não está rodando
3. Nginx não consegue conectar ao Node.js

**Como verificar**: 
```bash
# No Coolify, vá em Logs e verifique:
# - "API server running on port 3001" (Node.js)
# - Logs do nginx
```

### Health Check Falhando

**Solução**:
1. Verifique se o nginx está rodando
2. Teste manualmente: `curl http://localhost/health` (dentro do container)
3. Verifique os logs do Coolify

### Container Reiniciando Constantemente

**Causas**:
1. Falta de memória (aumente o limit)
2. Erro no código (verifique logs)
3. Porta já em uso (raro no Coolify)

## 📊 Monitoramento

### Logs em Tempo Real

No painel do Coolify:
1. Acesse sua aplicação
2. Clique em **"Logs"**
3. Selecione **"Runtime Logs"**

Você verá:
- Logs do Nginx
- Logs do Node.js (API)
- Logs do Supervisor

### Métricas

O Coolify mostra automaticamente:
- CPU Usage
- Memory Usage
- Network I/O
- Requests/segundo

## 🔄 Deploy Automático (CI/CD)

O Coolify configura webhooks automaticamente no GitHub.

**Resultado**: Cada `git push` na branch `main` fará deploy automático! 🎉

Para desabilitar:
1. Vá em **Settings** > **Webhooks**
2. Desmarque **"Deploy on Push"**

## 📝 Comandos Úteis

### Verificar Logs do Container

No Coolify, use a aba **"Logs"** ou conecte via SSH:

```bash
# Ver logs do supervisor
tail -f /var/log/supervisor/supervisord.log

# Ver processos rodando
ps aux | grep -E "nginx|node"

# Testar health internamente
curl http://localhost/health
```

### Reiniciar Aplicação

No Coolify:
1. Vá até a aplicação
2. Clique em **"Restart"**

Ou via API/CLI se configurado.

## 🔐 Segurança

### Headers de Segurança

Já configurados no `nginx.conf`:
- `X-Frame-Options: SAMEORIGIN`
- `X-Content-Type-Options: nosniff`

### HTTPS

O Coolify gerencia automaticamente:
- Certificado SSL via Let's Encrypt
- Renovação automática
- Redirecionamento HTTP → HTTPS

### Dados Sensíveis

**⚠️ IMPORTANTE**: Nunca commite dados sensíveis!

Use as variáveis de ambiente no Coolify para:
- Credenciais de banco de dados
- API keys
- Secrets

## 🎓 Conceitos Importantes

### Por que não preciso de 2 recursos?

**Opção 1: Monolítico (ATUAL - Recomendado para este projeto)**
- ✅ Um único container
- ✅ Mais simples de gerenciar
- ✅ Menor overhead
- ✅ Ideal para aplicações pequenas/médias

**Opção 2: Microserviços (NÃO necessário aqui)**
- Frontend em um recurso
- API em outro recurso
- Necessário quando:
  - API e Frontend têm escalabilidade diferente
  - Times separados
  - Deploys independentes críticos

Para este projeto, **1 recurso é suficiente e recomendado**.

## 🆘 Suporte

### Documentação Oficial

- **Coolify Docs**: https://coolify.io/docs
- **Docker Docs**: https://docs.docker.com
- **Nginx Docs**: https://nginx.org/en/docs/

### Debug Avançado

Se problemas persistirem:

1. **Baixe os logs** do Coolify
2. **Teste o build localmente**:
   ```bash
   docker build -t estrategia-viva .
   docker run -p 8080:80 estrategia-viva
   ```
3. **Verifique o Dockerfile** está correto
4. **Consulte a comunidade** do Coolify no Discord

## ✨ Próximos Passos

Após deploy bem-sucedido:

- [ ] Configurar backup automático do volume `/app/data`
- [ ] Configurar alertas de downtime
- [ ] Adicionar Google Analytics (opcional)
- [ ] Configurar CDN (Cloudflare) para melhor performance
- [ ] Testar em diferentes dispositivos/navegadores

---

**🎉 Seu site estará no ar com apenas 1 recurso no Coolify!**

*Documentação criada para Estratégia Viva - Última atualização: Outubro 2025*
