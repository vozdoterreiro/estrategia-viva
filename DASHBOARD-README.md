# Dashboard Administrativo - Estratégia Viva

## Acesso

**URL:** `/admin`

**Credenciais:**
- Usuário: `igor`
- Senha: `igor22`

## Funcionalidades

### 📊 Estatísticas em Tempo Real
- Total de submissões
- Número de inscritos na newsletter
- Número de formulários de contato recebidos

### 🔍 Filtros
- Ver todas as submissões
- Filtrar apenas newsletters
- Filtrar apenas formulários de contato

### 📤 Exportação
- Botão para exportar dados filtrados para CSV
- Arquivo gerado: `submissions-{filtro}-{data}.csv`

### 📋 Visualização Detalhada

**Newsletter:**
- Email do inscrito
- Data/hora da inscrição

**Formulário de Contato:**
- Nome
- Email
- Telefone
- Empresa
- Mensagem
- Data/hora do envio

## Armazenamento de Dados

Todos os dados são salvos em `/data/submissions.json` no formato JSON Lines (um JSON por linha).

### Formato Newsletter
```json
{
  "type": "newsletter",
  "email": "exemplo@email.com",
  "timestamp": "2024-10-24T14:30:00.000Z"
}
```

### Formato Contato
```json
{
  "type": "contact",
  "name": "Nome do Cliente",
  "email": "cliente@empresa.com",
  "phone": "(21) 99999-9999",
  "company": "Empresa LTDA",
  "interest": "Diagnóstico de DNA",
  "message": "Gostaria de saber mais sobre...",
  "timestamp": "2024-10-24T14:30:00.000Z"
}
```

## Segurança

⚠️ **Importante:**
- Não compartilhe as credenciais de acesso
- O arquivo `data/submissions.json` está no `.gitignore` e não será versionado
- A autenticação usa sessionStorage (válida apenas durante a sessão do navegador)
- Para produção, considere implementar autenticação mais robusta (JWT, OAuth, etc.)

## Backup

Recomenda-se fazer backup regular do arquivo `data/submissions.json`:

```bash
# Backup manual
cp data/submissions.json data/submissions-backup-$(date +%Y%m%d).json

# Ou exportar via dashboard (botão "Exportar CSV")
```

## Desenvolvimento

O dashboard já está integrado ao sistema de rotas. Não requer configuração adicional.

Para acessar em desenvolvimento:
```
http://localhost:3000/admin
```
