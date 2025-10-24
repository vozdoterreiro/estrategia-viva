# 🚀 Guia Rápido de Deploy no Coolify

## ✅ Checklist Pré-Deploy

- [ ] Repositório commitado e enviado ao GitHub
- [ ] Coolify instalado e configurado na VPS
- [ ] Domínio configurado (se aplicável)

## 📝 Passo a Passo

### 1. Preparar o Repositório

```bash
# Adicionar todos os arquivos ao git
git add .

# Commit
git commit -m "Setup projeto React/Vite para Coolify"

# Push para o repositório
git push origin main
```

### 2. Configurar no Coolify

1. **Acessar o Coolify Dashboard**
   - Acesse sua instância Coolify (ex: `https://coolify.seudominio.com`)

2. **Criar Novo Recurso**
   - Click em "New Resource" ou "+"
   - Selecione "Application"

3. **Conectar Repositório**
   - Selecione "GitHub" como fonte
   - Escolha o repositório `vozdoterreiro/estrategia-viva`
   - Branch: `main`

4. **Configurações de Build**
   - **Build Pack:** Dockerfile
   - **Dockerfile Location:** `./Dockerfile` (já detectado automaticamente)
   - **Port:** `80`
   - **Build Command:** (não necessário, usa Dockerfile)
   - **Start Command:** (não necessário, usa Dockerfile)

5. **Configurações de Rede**
   - **Domain:** `estrategiaviva.com.br` (ou seu domínio)
   - **SSL:** Ative "Generate SSL Certificate" (Let's Encrypt automático)

6. **Health Check** (Opcional mas recomendado)
   - **Path:** `/health`
   - **Port:** `80`
   - **Interval:** `30s`

7. **Variáveis de Ambiente** (Opcional)
   ```
   NODE_ENV=production
   ```

### 3. Deploy

- Click em "Deploy" ou "Save & Deploy"
- Aguarde o build (leva ~2-5 minutos na primeira vez)
- Acompanhe os logs em tempo real

### 4. Verificar Deploy

Após o deploy concluir:

```bash
# Testar health check
curl https://seudominio.com.br/health
# Deve retornar: healthy

# Testar site
curl -I https://seudominio.com.br
# Deve retornar 200 OK
```

## 🔄 Atualizações Futuras

### Deploy Automático (CI/CD)

O Coolify já configurará webhooks automaticamente no GitHub. Cada push na branch `main` fará deploy automático!

### Deploy Manual

```bash
# No dashboard do Coolify
1. Vá até a aplicação
2. Click em "Deploy"
3. Aguarde conclusão
```

### Rollback

```bash
# No dashboard do Coolify
1. Vá até "Deployments"
2. Selecione uma versão anterior
3. Click em "Redeploy"
```

## 🐛 Troubleshooting

### Build falha

```bash
# Verificar logs no Coolify
# Comum: problemas de memória

# Aumentar limite de memória:
# No Coolify > Application > Settings > Resources
# Memory Limit: 1024MB (mínimo recomendado)
```

### Site não carrega

```bash
# Verificar:
1. SSL configurado corretamente
2. Port 80 exposto
3. Health check passando
4. DNS apontando para o servidor correto
```

### Erro 502 Bad Gateway

```bash
# Causas comuns:
1. Container não iniciou corretamente
2. Porta incorreta
3. Nginx não rodando

# Verificar logs do container no Coolify
```

### SSL/HTTPS não funciona

```bash
# No Coolify:
1. Settings > Domains
2. "Regenerate SSL Certificate"
3. Aguardar ~1-2 minutos
```

## 📊 Monitoramento

### Logs em Tempo Real

```bash
# No Coolify Dashboard:
1. Acesse a aplicação
2. Click em "Logs"
3. Selecione "Runtime Logs"
```

### Métricas

```bash
# No Coolify:
- CPU Usage
- Memory Usage
- Network I/O
- Disk Usage
```

## 🔐 Segurança

- ✅ SSL/TLS automático
- ✅ Headers de segurança configurados no nginx.conf
- ✅ Gzip compression ativado
- ✅ Cache de assets estáticos
- ✅ Health check endpoint

## 📞 Suporte

- **Documentação Coolify:** https://coolify.io/docs
- **Logs do Coolify:** Sempre verifique os logs para diagnóstico
- **Community:** Discord do Coolify

## ✨ Próximos Passos

Após deploy bem-sucedido:

1. [ ] Configurar domínio customizado
2. [ ] Ativar SSL/HTTPS
3. [ ] Configurar monitoring/alertas
4. [ ] Configurar backups
5. [ ] Testar em dispositivos móveis
6. [ ] Configurar Google Analytics (se necessário)
7. [ ] Adicionar sitemap.xml
8. [ ] Configurar robots.txt

---

**🎉 Seu site estará no ar em poucos minutos!**
