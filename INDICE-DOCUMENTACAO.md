# 📚 Índice da Documentação - Estratégia Viva

## 🎯 Início Rápido

Se você quer saber **"Preciso de 1 ou 2 recursos no Coolify?"**

➡️ **Resposta: Apenas 1 recurso!** Leia: [COOLIFY-RAPIDO.md](./COOLIFY-RAPIDO.md)

---

## 📖 Documentação por Tópico

### Deploy e Infraestrutura

| Documento | Descrição | Quando Usar |
|-----------|-----------|-------------|
| [COOLIFY-RAPIDO.md](./COOLIFY-RAPIDO.md) | Resposta rápida: 1 ou 2 recursos? | 👈 **Comece aqui** se tem dúvidas sobre Coolify |
| [CONFIGURACAO-COOLIFY.md](./CONFIGURACAO-COOLIFY.md) | Guia completo de configuração do Coolify | Configurando o projeto pela primeira vez |
| [ARQUITETURA.md](./ARQUITETURA.md) | Diagramas e explicação da arquitetura | Entender como o sistema funciona |
| [DEPLOY.md](./DEPLOY.md) | Opções gerais de deploy | Deploy manual ou outras plataformas |
| [DEPLOY-PRODUCAO.md](./DEPLOY-PRODUCAO.md) | Checklist completo para produção | Antes de colocar em produção |

### Desenvolvimento

| Documento | Descrição | Quando Usar |
|-----------|-----------|-------------|
| [README.md](./README.md) | Visão geral do projeto | Primeira leitura sobre o projeto |
| [GUIA-RAPIDO.md](./GUIA-RAPIDO.md) | Como iniciar desenvolvimento local | Rodar o projeto localmente |
| [DASHBOARD-README.md](./DASHBOARD-README.md) | Documentação do dashboard admin | Usar ou modificar o dashboard |

### Planejamento e Especificações

| Documento | Descrição | Quando Usar |
|-----------|-----------|-------------|
| [PLANO-IMPLEMENTACAO.md](./PLANO-IMPLEMENTACAO.md) | Plano completo de implementação | Entender o roadmap |
| [IMPLEMENTACOES.md](./IMPLEMENTACOES.md) | Detalhes das implementações | Ver o que foi implementado |
| [RESUMO-IMPLEMENTACOES.md](./RESUMO-IMPLEMENTACOES.md) | Resumo executivo | Visão geral rápida |
| [SERVICOS-COMPLETO.md](./SERVICOS-COMPLETO.md) | Descrição completa dos serviços | Conhecer todos os serviços |
| [RESUMO-SERVICOS.md](./RESUMO-SERVICOS.md) | Resumo dos serviços | Visão geral dos serviços |
| [SPRINT-1-COMPLETO.md](./SPRINT-1-COMPLETO.md) | Documentação da Sprint 1 | Ver o trabalho da primeira sprint |

### Configuração

| Arquivo | Descrição | Quando Usar |
|---------|-----------|-------------|
| [.env.example](./.env.example) | Variáveis de ambiente | Configurar ambiente |
| [coolify.json](./coolify.json) | Configuração do Coolify | Deploy no Coolify |
| [docker-compose.yml](./docker-compose.yml) | Docker Compose | Testar localmente com Docker |
| [Dockerfile](./Dockerfile) | Build da imagem Docker | Build de produção |
| [nginx.conf](./nginx.conf) | Configuração do Nginx | Customizar servidor web |

---

## 🚀 Fluxos de Trabalho Comuns

### 1️⃣ Primeiro Deploy no Coolify

```
1. Leia: COOLIFY-RAPIDO.md (2 min)
2. Leia: CONFIGURACAO-COOLIFY.md (10 min)
3. Configure no Coolify seguindo o guia
4. Deploy!
```

### 2️⃣ Desenvolvimento Local

```
1. Leia: README.md - Seção "Desenvolvimento Local"
2. Leia: GUIA-RAPIDO.md
3. npm install && npm run dev
```

### 3️⃣ Entender a Arquitetura

```
1. Leia: ARQUITETURA.md
2. Veja os diagramas
3. Entenda: 1 container = nginx + Node.js
```

### 4️⃣ Troubleshooting

```
1. CONFIGURACAO-COOLIFY.md - Seção "Troubleshooting"
2. Verifique logs no Coolify
3. Teste localmente: docker-compose up
```

---

## 🎯 Por Persona

### Sou Desenvolvedor
1. README.md
2. GUIA-RAPIDO.md
3. ARQUITETURA.md

### Sou DevOps/Infra
1. COOLIFY-RAPIDO.md
2. CONFIGURACAO-COOLIFY.md
3. ARQUITETURA.md
4. Dockerfile + nginx.conf

### Sou Product Manager
1. README.md
2. SERVICOS-COMPLETO.md
3. PLANO-IMPLEMENTACAO.md

### Sou novo no projeto
1. README.md
2. GUIA-RAPIDO.md
3. SERVICOS-COMPLETO.md

---

## ❓ Perguntas Frequentes

### Preciso de 1 ou 2 recursos no Coolify?
➡️ [COOLIFY-RAPIDO.md](./COOLIFY-RAPIDO.md)

### Como faço deploy?
➡️ [CONFIGURACAO-COOLIFY.md](./CONFIGURACAO-COOLIFY.md)

### Como funciona a arquitetura?
➡️ [ARQUITETURA.md](./ARQUITETURA.md)

### Como rodar localmente?
➡️ [GUIA-RAPIDO.md](./GUIA-RAPIDO.md)

### Quais são os serviços oferecidos?
➡️ [SERVICOS-COMPLETO.md](./SERVICOS-COMPLETO.md)

### Como acessar o dashboard admin?
➡️ [DASHBOARD-README.md](./DASHBOARD-README.md)

---

## 📂 Estrutura de Pastas

```
estrategia-viva/
├── 📄 README.md                      # ⭐ Comece aqui
├── 📄 COOLIFY-RAPIDO.md             # ⭐ Deploy no Coolify (rápido)
├── 📄 CONFIGURACAO-COOLIFY.md       # Deploy no Coolify (completo)
├── 📄 ARQUITETURA.md                # Diagramas e arquitetura
├── 📄 GUIA-RAPIDO.md                # Desenvolvimento local
├── 📄 DEPLOY.md                     # Opções de deploy
├── 📄 DEPLOY-PRODUCAO.md            # Checklist produção
├── 📄 DASHBOARD-README.md           # Dashboard admin
├── 📄 PLANO-IMPLEMENTACAO.md        # Roadmap
├── 📄 IMPLEMENTACOES.md             # Implementações
├── 📄 RESUMO-IMPLEMENTACOES.md      # Resumo
├── 📄 SERVICOS-COMPLETO.md          # Serviços (completo)
├── 📄 RESUMO-SERVICOS.md            # Serviços (resumo)
├── 📄 SPRINT-1-COMPLETO.md          # Sprint 1
├── 📄 .env.example                  # Variáveis de ambiente
├── 📄 coolify.json                  # Config Coolify
├── 📄 docker-compose.yml            # Docker Compose
├── 📄 Dockerfile                    # Build Docker
├── 📄 nginx.conf                    # Config Nginx
└── 📁 src/                          # Código fonte
```

---

## 🔄 Atualizações

Este índice será atualizado conforme novos documentos forem adicionados.

**Última atualização**: Outubro 2025  
**Total de documentos**: 16

---

**💡 Dica**: Marque este arquivo com ⭐ para fácil acesso!
