# Estratégia Viva

🌱 **Arquitetamos Ecossistemas Organizacionais Vivos**

Site institucional da Estratégia Viva - Consultoria estratégica especializada em transformação organizacional e ecossistemas vivos.

## 🚀 Tecnologias

- **React 18** - Biblioteca JavaScript para construção de interfaces
- **Vite** - Build tool rápido e moderno
- **Tailwind CSS** - Framework CSS utility-first
- **React Router** - Roteamento para aplicações React
- **Docker** - Containerização para deploy
- **Nginx** - Servidor web para produção

## 📋 Pré-requisitos

- Node.js 20+ e npm
- Docker (para deploy)
- Git

## 🛠️ Desenvolvimento Local

### 1. Instalar dependências

```bash
npm install
```

### 2. Rodar em modo desenvolvimento

```bash
npm run dev
```

O site estará disponível em `http://localhost:3000`

### 3. Build para produção

```bash
npm run build
```

Os arquivos otimizados estarão na pasta `dist/`

### 4. Preview do build de produção

```bash
npm run preview
```

## 🐳 Deploy no Coolify

> **⚡ Resposta Rápida**: Você precisa de apenas **1 recurso** no Coolify!  
> Veja: [COOLIFY-RAPIDO.md](./COOLIFY-RAPIDO.md) | [Guia Completo](./CONFIGURACAO-COOLIFY.md)

### Por que 1 recurso?

Este projeto usa uma **arquitetura monolítica** onde SPA e API rodam no mesmo container:
- Nginx (porta 80) serve o frontend e faz proxy para `/api/*`
- Node.js (porta 3001) roda a API internamente
- Supervisor gerencia ambos os processos

### Configuração Rápida

1. **No Coolify, crie um novo recurso:**
   - Build Type: **Dockerfile**
   - Port: **80**
   - Health Check: **`/health`**

2. **Configure as variáveis de ambiente:**
   ```env
   NODE_ENV=production
   PORT=3001
   ```

3. **Configure o volume persistente:**
   ```
   Volume: estrategia-viva-data → /app/data
   ```

4. **Deploy!**

### Documentação Detalhada

- 📖 [Guia Rápido Coolify](./COOLIFY-RAPIDO.md) - Responde: "preciso de 1 ou 2 recursos?"
- 📚 [Configuração Completa](./CONFIGURACAO-COOLIFY.md) - Passo a passo detalhado
- 🚀 [Deploy Geral](./DEPLOY.md) - Outras opções de deploy

### Configuração Automática

O Coolify detectará automaticamente o `Dockerfile` e fará o build.

### Passos para Deploy:

1. **Conecte o repositório ao Coolify:**
   - Acesse seu Coolify
   - Crie um novo projeto
   - Conecte este repositório GitHub

2. **Configurações do Projeto no Coolify:**
   - **Build Type:** Dockerfile
   - **Dockerfile Location:** `./Dockerfile`
   - **Port:** 80
   - **Health Check Path:** `/health`

3. **Variáveis de Ambiente:**
   ```env
   NODE_ENV=production
   PORT=3001
   ```

4. **Volume Persistente (Importante!):**
   - Source: `estrategia-viva-data`
   - Destination: `/app/data`

5. **Deploy:**
   - O Coolify fará automaticamente:
     - Build da aplicação com Vite
     - Criação da imagem Docker
     - Deploy com Nginx + Node.js
     - Configuração de SSL (se configurado)

### Build Manual com Docker

Para testar localmente com Docker:

```bash
# Build da imagem
docker build -t estrategia-viva .

# Rodar container
docker run -p 8080:80 estrategia-viva
```

Acesse: `http://localhost:8080`

## 📁 Estrutura do Projeto

```
estrategia-viva/
├── src/
│   ├── pages/          # Páginas da aplicação
│   │   └── Home.jsx    # Página inicial
│   ├── App.jsx         # Componente raiz
│   ├── main.jsx        # Entry point
│   └── index.css       # Estilos globais + Tailwind
├── public/             # Arquivos estáticos
├── index.html          # HTML template
├── vite.config.js      # Configuração do Vite
├── tailwind.config.js  # Configuração do Tailwind
├── postcss.config.js   # Configuração do PostCSS
├── Dockerfile          # Multi-stage build
├── nginx.conf          # Configuração do Nginx
├── .dockerignore       # Arquivos ignorados no Docker
└── package.json        # Dependências e scripts
```

## 🎨 Customização

### Cores e Tema

As cores do tema estão definidas em `src/index.css` usando CSS custom properties:

```css
:root {
  --primary: 200 100% 11%;
  --secondary: 42 35% 52%;
  /* ... outras cores */
}
```

### Tipografia

- **Headings:** Montserrat (Bold)
- **Body:** Open Sans
- Configurado via Google Fonts no `index.html`

## 📝 Scripts Disponíveis

```bash
npm run dev      # Desenvolvimento com hot reload
npm run build    # Build para produção
npm run preview  # Preview do build
npm run lint     # Lint do código
```

## 🔧 Troubleshooting

### Erro de porta em uso
```bash
# Mude a porta no vite.config.js
server: {
  port: 3001
}
```

### Erro de dependências
```bash
rm -rf node_modules package-lock.json
npm install
```

### Build falha no Docker
```bash
# Limpe o cache do Docker
docker system prune -a
```

## 📄 Licença

© 2025 Estratégia Viva. Todos os direitos reservados.

## 🤝 Suporte

Para questões técnicas ou suporte, entre em contato através do site.

---

**Feito com ❤️ para transformar organizações em ecossistemas vivos**