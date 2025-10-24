# 🚀 Guia Rápido de Uso

## 📖 Deploy no Coolify

**Precisa de 1 ou 2 recursos no Coolify?**

Resposta: **Apenas 1 recurso!** 

👉 Veja o guia completo: [COOLIFY-RAPIDO.md](./COOLIFY-RAPIDO.md) ou [CONFIGURACAO-COOLIFY.md](./CONFIGURACAO-COOLIFY.md)

---

## Iniciar o Site em Desenvolvimento

```bash
# Terminal 1: Iniciar servidor API
node server.js

# Terminal 2: Iniciar frontend
npm run vite-dev

# OU simplesmente (inicia ambos automaticamente):
npm run dev
```

Acesse: `http://localhost:3000`

---

## Acessar o Dashboard Administrativo

1. Navegue para: `http://localhost:3000/admin`
2. Faça login com:
   - **Usuário:** igor
   - **Senha:** igor22

---

## Testar Captura de Dados

### Newsletter (Rodapé)
1. Role até o final de qualquer página
2. Preencha o email no campo "Newsletter"
3. Clique em "Inscrever"
4. Verifique o dashboard: deve aparecer na lista

### Formulário de Contato
1. Vá para `/contato`
2. Preencha todos os campos
3. Clique em "Enviar Mensagem"
4. Será redirecionado ao WhatsApp E salvo no banco
5. Verifique o dashboard: deve aparecer na lista

---

## Exportar Dados

1. No dashboard, selecione o filtro desejado (Todos/Newsletter/Contato)
2. Clique no botão "Exportar CSV"
3. Arquivo será baixado: `submissions-{filtro}-{data}.csv`

---

## Visualizar Dados Salvos

### Via Dashboard
- Acesse `/admin/dashboard` e veja a tabela

### Via Arquivo
```bash
cat data/submissions.json
```

Cada linha é um JSON:
```json
{"type":"newsletter","email":"teste@email.com","timestamp":"2024-10-24T..."}
{"type":"contact","name":"João","email":"joao@empresa.com",...}
```

---

## Build para Produção

```bash
npm run build
```

Gera pasta `dist/` com arquivos otimizados.

---

## Verificar Se Tudo Está Funcionando

✅ **Checklist Rápido:**

```bash
# 1. Servidor API rodando?
curl http://localhost:3001/api/submissions
# Deve retornar: [] ou array com dados

# 2. Frontend carregando?
curl http://localhost:3000
# Deve retornar: HTML da página

# 3. Build sem erros?
npm run build
# Deve mostrar: ✓ built in X.XXs

# 4. Dashboard protegido?
# Abra /admin/dashboard - deve pedir login
```

---

## Problemas Comuns

### "Cannot GET /api/submissions"
- **Solução:** Servidor API não está rodando. Execute: `node server.js`

### "Proxy error"
- **Solução:** Verifique se as portas 3000 e 3001 estão livres

### Login não funciona
- **Solução:** Limpe o sessionStorage do navegador (F12 → Application → Session Storage → Clear)

### Dados não aparecem no dashboard
- **Solução:** Verifique se `data/submissions.json` existe e tem permissões de escrita

---

## Limpar Dados de Teste

```bash
# Backup primeiro
cp data/submissions.json data/submissions-backup.json

# Limpar arquivo
> data/submissions.json

# Ou deletar linhas específicas
# (edite manualmente data/submissions.json)
```

---

## Credenciais de Acesso

**Dashboard:**
- URL: `/admin`
- Login: `igor`
- Senha: `igor22`

⚠️ **Não compartilhe essas credenciais!**

---

Pronto! 🎉 Tudo está configurado e funcionando.
