# Dockerfile multi-stage para produção (Frontend + Backend)
FROM node:20-alpine AS build

WORKDIR /app

# Copiar arquivos de dependências
COPY package*.json ./

# Instalar dependências
RUN npm install

# Copiar código fonte
COPY . .

# Build da aplicação frontend
RUN npm run build

# Estágio de produção
FROM node:20-alpine

WORKDIR /app

# Instalar nginx e supervisor
RUN apk add --no-cache nginx supervisor

# Copiar dependências do backend
COPY package*.json ./
RUN npm install --production

# Copiar arquivos necessários
COPY server.js ./
COPY --from=build /app/dist ./dist

# Copiar configuração do nginx
COPY nginx.conf /etc/nginx/http.d/default.conf

# Criar diretório para dados
RUN mkdir -p /app/data

# Criar diretório para logs do nginx
RUN mkdir -p /run/nginx /var/log/nginx

# Criar arquivo de configuração do supervisor
RUN echo '[supervisord]' > /etc/supervisord.conf && \
    echo 'nodaemon=true' >> /etc/supervisord.conf && \
    echo 'user=root' >> /etc/supervisord.conf && \
    echo '' >> /etc/supervisord.conf && \
    echo '[program:nginx]' >> /etc/supervisord.conf && \
    echo 'command=nginx -g "daemon off;"' >> /etc/supervisord.conf && \
    echo 'stdout_logfile=/dev/stdout' >> /etc/supervisord.conf && \
    echo 'stdout_logfile_maxbytes=0' >> /etc/supervisord.conf && \
    echo 'stderr_logfile=/dev/stderr' >> /etc/supervisord.conf && \
    echo 'stderr_logfile_maxbytes=0' >> /etc/supervisord.conf && \
    echo 'autorestart=true' >> /etc/supervisord.conf && \
    echo '' >> /etc/supervisord.conf && \
    echo '[program:node]' >> /etc/supervisord.conf && \
    echo 'command=node server.js' >> /etc/supervisord.conf && \
    echo 'directory=/app' >> /etc/supervisord.conf && \
    echo 'stdout_logfile=/dev/stdout' >> /etc/supervisord.conf && \
    echo 'stdout_logfile_maxbytes=0' >> /etc/supervisord.conf && \
    echo 'stderr_logfile=/dev/stderr' >> /etc/supervisord.conf && \
    echo 'stderr_logfile_maxbytes=0' >> /etc/supervisord.conf && \
    echo 'autorestart=true' >> /etc/supervisord.conf

# Expor portas
EXPOSE 80

# Iniciar supervisor (roda nginx + node)
CMD ["/usr/bin/supervisord", "-c", "/etc/supervisord.conf"]
