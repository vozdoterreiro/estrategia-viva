#!/bin/bash

# Script de desenvolvimento e deploy para Estratégia Viva

set -e

# Cores para output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

echo -e "${GREEN}🌱 Estratégia Viva - Dev Helper${NC}\n"

# Função para mostrar menu
show_menu() {
    echo "Escolha uma opção:"
    echo "1) Instalar dependências"
    echo "2) Rodar em desenvolvimento"
    echo "3) Build para produção"
    echo "4) Preview do build"
    echo "5) Testar Docker localmente"
    echo "6) Limpar node_modules e reinstalar"
    echo "7) Commit e push para GitHub"
    echo "0) Sair"
    echo ""
}

# Função para instalar dependências
install_deps() {
    echo -e "${YELLOW}📦 Instalando dependências...${NC}"
    npm install
    echo -e "${GREEN}✅ Dependências instaladas!${NC}\n"
}

# Função para rodar dev
run_dev() {
    echo -e "${YELLOW}🚀 Iniciando servidor de desenvolvimento...${NC}"
    npm run dev
}

# Função para build
run_build() {
    echo -e "${YELLOW}🔨 Fazendo build de produção...${NC}"
    npm run build
    echo -e "${GREEN}✅ Build concluído! Arquivos em ./dist${NC}\n"
}

# Função para preview
run_preview() {
    echo -e "${YELLOW}👀 Iniciando preview do build...${NC}"
    npm run preview
}

# Função para testar Docker
test_docker() {
    echo -e "${YELLOW}🐳 Testando build Docker...${NC}"
    
    # Build da imagem
    echo "Building Docker image..."
    docker build -t estrategia-viva:test .
    
    # Rodar container
    echo "Starting container on port 8080..."
    docker run -d -p 8080:80 --name estrategia-viva-test estrategia-viva:test
    
    echo -e "${GREEN}✅ Container rodando!${NC}"
    echo "Acesse: http://localhost:8080"
    echo ""
    echo "Para parar: docker stop estrategia-viva-test"
    echo "Para remover: docker rm estrategia-viva-test"
    echo ""
}

# Função para limpar e reinstalar
clean_install() {
    echo -e "${YELLOW}🧹 Limpando e reinstalando...${NC}"
    rm -rf node_modules package-lock.json dist
    npm install
    echo -e "${GREEN}✅ Reinstalação concluída!${NC}\n"
}

# Função para commit e push
git_push() {
    echo -e "${YELLOW}📤 Preparando para commit...${NC}"
    
    # Status
    git status
    
    echo ""
    read -p "Mensagem do commit: " commit_msg
    
    if [ -z "$commit_msg" ]; then
        echo -e "${RED}❌ Mensagem do commit não pode ser vazia${NC}"
        return
    fi
    
    git add .
    git commit -m "$commit_msg"
    git push origin main
    
    echo -e "${GREEN}✅ Push concluído! Deploy automático iniciará no Coolify.${NC}\n"
}

# Loop principal
while true; do
    show_menu
    read -p "Opção: " choice
    echo ""
    
    case $choice in
        1)
            install_deps
            ;;
        2)
            run_dev
            ;;
        3)
            run_build
            ;;
        4)
            run_preview
            ;;
        5)
            test_docker
            ;;
        6)
            clean_install
            ;;
        7)
            git_push
            ;;
        0)
            echo -e "${GREEN}👋 Até logo!${NC}"
            exit 0
            ;;
        *)
            echo -e "${RED}❌ Opção inválida${NC}\n"
            ;;
    esac
    
    # Esperar antes de mostrar menu novamente
    if [ "$choice" != "2" ] && [ "$choice" != "4" ]; then
        read -p "Pressione Enter para continuar..."
        clear
    fi
done
