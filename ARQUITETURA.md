# 🏗️ Arquitetura do Sistema - Estratégia Viva

## Visão Geral

O projeto usa uma **arquitetura monolítica** onde frontend (SPA) e backend (API) rodam no mesmo container Docker.

## Diagrama da Arquitetura

```
┌─────────────────────────────────────────────────────────────┐
│                        INTERNET                             │
└──────────────────────┬──────────────────────────────────────┘
                       │ HTTPS (443)
                       ↓
┌─────────────────────────────────────────────────────────────┐
│                    COOLIFY / VPS                            │
│  ┌───────────────────────────────────────────────────────┐  │
│  │          1 RECURSO (Container Docker)                 │  │
│  │                                                        │  │
│  │  ┌──────────────────────────────────────────────┐    │  │
│  │  │         Nginx (Porta 80)                     │    │  │
│  │  │  ┌────────────────────────────────────────┐  │    │  │
│  │  │  │  Routes:                               │  │    │  │
│  │  │  │  • /           → SPA (index.html)      │  │    │  │
│  │  │  │  • /servicos   → SPA (React Router)    │  │    │  │
│  │  │  │  • /contato    → SPA (React Router)    │  │    │  │
│  │  │  │  • /health     → Health Check          │  │    │  │
│  │  │  │  • /api/*      → Proxy → Node.js:3001  │  │    │  │
│  │  │  │  • *.css,*.js  → Static Assets         │  │    │  │
│  │  │  └────────────────────────────────────────┘  │    │  │
│  │  └──────────────────┬───────────────────────────┘    │  │
│  │                     │ Proxy /api/*                   │  │
│  │                     ↓                                 │  │
│  │  ┌──────────────────────────────────────────────┐    │  │
│  │  │    Node.js + Express (Porta 3001)           │    │  │
│  │  │  ┌────────────────────────────────────────┐  │    │  │
│  │  │  │  API Endpoints:                        │  │    │  │
│  │  │  │  • POST /api/newsletter                │  │    │  │
│  │  │  │  • POST /api/contact                   │  │    │  │
│  │  │  │  • GET  /api/submissions               │  │    │  │
│  │  │  └────────────────────────────────────────┘  │    │  │
│  │  └──────────────────┬───────────────────────────┘    │  │
│  │                     │ Escreve/Lê                     │  │
│  │                     ↓                                 │  │
│  │  ┌──────────────────────────────────────────────┐    │  │
│  │  │    Volume Persistente: /app/data            │    │  │
│  │  │    • submissions.json                       │    │  │
│  │  └──────────────────────────────────────────────┘    │  │
│  │                                                        │  │
│  │  Gerenciado por: Supervisor                          │  │
│  └───────────────────────────────────────────────────────┘  │
└─────────────────────────────────────────────────────────────┘
```

## Fluxo de Requisições

### 1. Acesso à Página Inicial
```
Usuário → https://seudominio.com.br
    ↓
Coolify (SSL/HTTPS)
    ↓
Nginx (porta 80)
    ↓
Serve: /app/dist/index.html (SPA)
    ↓
React Router carrega a página solicitada
```

### 2. Formulário de Newsletter
```
Usuário preenche formulário → Submit
    ↓
React (JavaScript)
    ↓
POST https://seudominio.com.br/api/newsletter
    ↓
Nginx recebe na porta 80
    ↓
Proxy para http://127.0.0.1:3001/api/newsletter
    ↓
Node.js/Express processa
    ↓
Salva em /app/data/submissions.json
    ↓
Retorna: {message: "Success"}
```

### 3. Health Check (Coolify)
```
Coolify Health Check (a cada 30s)
    ↓
GET https://seudominio.com.br/health
    ↓
Nginx (porta 80)
    ↓
Retorna: 200 "healthy"
```

## Componentes

### Frontend (SPA)
- **Framework**: React 18
- **Build**: Vite
- **Styling**: Tailwind CSS
- **Routing**: React Router
- **Localização**: `/app/dist` (após build)

### Backend (API)
- **Runtime**: Node.js 20
- **Framework**: Express.js
- **Porta**: 3001 (interna)
- **Localização**: `/app/server.js`

### Web Server
- **Software**: Nginx
- **Porta**: 80 (exposta)
- **Config**: `/etc/nginx/http.d/default.conf`

### Process Manager
- **Software**: Supervisor
- **Processos**:
  1. Nginx (daemon off)
  2. Node.js (server.js)

### Storage
- **Tipo**: Volume Docker
- **Nome**: estrategia-viva-data
- **Mount**: /app/data
- **Arquivo**: submissions.json

## Variáveis de Ambiente

```bash
NODE_ENV=production       # Ambiente de execução
PORT=3001                # Porta do Node.js (interna)
```

## Portas

| Porta | Serviço | Exposição | Descrição |
|-------|---------|-----------|-----------|
| 80    | Nginx   | Externa   | HTTP (Coolify faz SSL) |
| 3001  | Node.js | Interna   | API (apenas dentro do container) |

## Segurança

### SSL/HTTPS
- Gerenciado automaticamente pelo Coolify
- Certificado Let's Encrypt
- Renovação automática

### Headers de Segurança (Nginx)
- `X-Frame-Options: SAMEORIGIN`
- `X-Content-Type-Options: nosniff`

### Volume Persistente
- Dados não são perdidos em redeploys
- Backup necessário para segurança adicional

## Escalabilidade

### Atual (Monolítico)
- ✅ Simples de gerenciar
- ✅ Menor overhead
- ✅ Ideal para pequeno/médio tráfego
- ⚠️ Escala verticalmente (mais CPU/RAM)

### Futura (Microserviços) - Se necessário
Quando escalar:
- Tráfego > 10k requests/dia
- Times separados frontend/backend
- Necessidade de escala horizontal

Configuração futura:
```
┌─────────────────┐       ┌─────────────────┐
│  Recurso 1      │       │  Recurso 2      │
│  Nginx + SPA    │ ←────→│  Node.js API    │
│  (porta 80)     │       │  (porta 3001)   │
└─────────────────┘       └─────────────────┘
```

## Decisão: 1 ou 2 Recursos?

### ✅ 1 Recurso (Atual - Recomendado)

**Vantagens:**
- Setup mais simples
- Menor custo (1 container)
- Menos complexidade de rede
- Deploy atômico (frontend + backend juntos)
- Ideal para este projeto

**Quando usar:**
- Projetos pequenos/médios
- Time pequeno
- Deploy conjunto preferido
- Recursos limitados

### ❌ 2 Recursos (Não necessário agora)

**Quando considerar:**
- Escala muito diferente (frontend ≠ backend)
- Times separados
- Deploy independente crítico
- Tráfego > 50k requests/dia

## Referências

- [Dockerfile](./Dockerfile) - Build configuration
- [nginx.conf](./nginx.conf) - Nginx configuration
- [server.js](./server.js) - API server
- [coolify.json](./coolify.json) - Coolify configuration
- [docker-compose.yml](./docker-compose.yml) - Local testing

## Troubleshooting

Veja o [CONFIGURACAO-COOLIFY.md](./CONFIGURACAO-COOLIFY.md) para:
- Problemas comuns
- Logs
- Debug
- Monitoramento

---

**Última atualização**: Outubro 2025  
**Versão**: 1.0  
**Status**: Em produção
