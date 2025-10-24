# ⚡ Guia Rápido: Coolify - 1 ou 2 Recursos?

## 🎯 Resposta Rápida

**Você precisa de apenas 1 (UM) recurso no Coolify!**

## Por quê?

Seu projeto já está configurado com uma arquitetura monolítica:
- **1 Container Docker** roda tanto o SPA quanto a API
- **Nginx** serve o frontend e faz proxy para a API
- **Node.js** roda a API internamente na porta 3001
- **Supervisor** gerencia ambos os serviços

## ✅ Configuração Mínima no Coolify

### Build
- **Type**: Dockerfile
- **Port**: 80 ← **Apenas esta porta!**

### Health Check
- **Path**: `/health`
- **Port**: 80

### Variáveis de Ambiente
```bash
NODE_ENV=production
PORT=3001
```

### Volume (IMPORTANTE!)
```bash
Source: estrategia-viva-data
Destination: /app/data
```
↑ Isso salva suas submissões mesmo após redeploy!

## 🧪 Teste Rápido

Após deploy:
```bash
# Health check
curl https://seudominio.com.br/health

# Frontend
curl https://seudominio.com.br

# API
curl https://seudominio.com.br/api/submissions
```

## 📚 Documentação Completa

Veja [`CONFIGURACAO-COOLIFY.md`](./CONFIGURACAO-COOLIFY.md) para guia detalhado.

## 🆘 Problemas?

1. **Build falha**: Verifique memória (mínimo 512MB)
2. **502 Bad Gateway**: Veja logs do Node.js
3. **Dados perdidos**: Configure o volume!

---

**Resumo**: 1 recurso = SPA + API rodando juntos! 🚀
