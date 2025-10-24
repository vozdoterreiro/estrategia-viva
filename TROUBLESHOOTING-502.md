# 🔧 Troubleshooting - Erro 502 Bad Gateway

## ✅ Status Atual
- ✅ Build concluído com sucesso
- ✅ Container rodando (`lw8c8kc4ow8g4oss8ck4ossg-162401688371`)
- ✅ Nginx configurado corretamente
- ✅ Health check endpoint disponível (`/health`)
- ❌ Erro 502 ao acessar pelo domínio

## 🎯 Causa do Problema

O erro 502 **não é do container**, mas da **configuração de proxy** no Coolify. O proxy reverso (Traefik/Caddy) não está conseguindo rotear o tráfego para o container.

## 🔍 Checklist de Verificação no Coolify

### 1. Verificar Configuração de Porta

**Caminho:** Configuration → General → Port Mappings

Deve estar configurado:
```
Port: 80
```

**⚠️ IMPORTANTE:** 
- Se a opção "Port" estiver vazia ou diferente de 80, altere para 80
- Salve e faça redeploy

### 2. Verificar Domínio

**Caminho:** Configuration → General → Domains

Verifique se está configurado:
```
https://estrategiaviva.com.br/
```

**Ações:**
- [ ] Domínio está correto?
- [ ] SSL/TLS está ativo?
- [ ] "Generate Domain" foi clicado?

### 3. Verificar Network

**Caminho:** Configuration → Advanced → Network

Deve estar:
```
Network: coolify
```

### 4. Verificar Health Check

**Caminho:** Configuration → Healthcheck

Configure:
```
Enabled: ✓
Path: /health
Port: 80
Interval: 30
Timeout: 3
Retries: 3
```

### 5. Verificar Logs do Container

**Caminho:** Deployments → Logs (aba "Runtime Logs")

Execute no terminal do container (se disponível):
```bash
curl http://localhost:80
curl http://localhost:80/health
```

Deve retornar:
- `/` → HTML da aplicação
- `/health` → "healthy"

## 🚀 Soluções Rápidas

### Solução 1: Reconfigurar Porta
1. Vá em **Configuration → General**
2. Em "Port", digite: `80`
3. Salve
4. Clique em **Redeploy**

### Solução 2: Regenerar Configuração de Proxy
1. Vá em **Configuration → General**
2. Clique em **"Generate Domain"** (mesmo que já tenha domínio)
3. Aguarde alguns segundos
4. Tente acessar novamente

### Solução 3: Reiniciar Container
1. Clique em **"Restart"** (não Redeploy)
2. Aguarde 30 segundos
3. Tente acessar

### Solução 4: Verificar Cloudflare
Se usa Cloudflare:
1. Acesse Cloudflare Dashboard
2. Vá em DNS
3. Verifique se o registro está com proxy **ATIVADO** (nuvem laranja)
4. Vá em SSL/TLS → Overview
5. Configure para **"Full (strict)"** se tiver certificado no Coolify
6. **OU** configure para **"Flexible"** se não tiver

### Solução 5: Verificar Firewall do Servidor
No servidor Coolify:
```bash
# Verificar se a porta 80 está aberta
sudo netstat -tulpn | grep :80

# Verificar se há containers rodando
docker ps | grep lw8c8kc4ow8g4oss8ck4ossg

# Testar conexão local ao container
docker logs lw8c8kc4ow8g4oss8ck4ossg-162401688371

# Testar nginx diretamente
docker exec lw8c8kc4ow8g4oss8ck4ossg-162401688371 nginx -t
docker exec lw8c8kc4ow8g4oss8ck4ossg-162401688371 curl localhost:80/health
```

## 🆘 Última Tentativa: Criar Novo Recurso

Se nada funcionar:

1. No Coolify, **duplique** o recurso atual
2. Configure tudo do zero:
   - Repository: `vozdoterreiro/estrategia-viva`
   - Branch: `fix/css-production`
   - Build Pack: `Dockerfile`
   - Port: `80`
   - Domain: `estrategiaviva.com.br`
3. Faça deploy
4. Se funcionar, delete o recurso antigo

## 📊 Informações Técnicas

**Container ID:** `lw8c8kc4ow8g4oss8ck4ossg-162401688371`
**Image:** `lw8c8kc4ow8g4oss8ck4ossg:76cccb5516077f0f8073c92affdc3174964e79c8`
**Porta Exposta:** `80`
**Health Check:** `/health`
**Nginx Status:** ✅ Validado (nginx -t passed)

## 🔗 Próximos Passos

1. Siga o checklist acima
2. Teste cada solução na ordem
3. Verifique os logs após cada tentativa
4. Se precisar de ajuda, compartilhe:
   - Screenshot da configuração de portas no Coolify
   - Logs de runtime do container
   - Configuração de domínio no Cloudflare (se usar)
