import React from 'react'
import { Routes, Route, Link, useLocation } from 'react-router-dom'
import Header from '../components/Header'
import Footer from '../components/Footer'
import HeroSection from '../components/HeroSection'

function ProdutosHome() {
  const produtos = [
    {
      path: '/produtos/decodificacao-alma',
      icon: '🔥',
      titulo: 'Decodificação da Alma',
      subtitulo: 'Branding e Identidade Estratégica',
      descricao: 'Não criamos marcas, nós revelamos a identidade pré-existente. Uma micro-imersão antropológica para decodificar a "Alma" da organização.',
      preco: 'R$ 9.000',
      duracao: '5 semanas',
      entregas: ['Logo completo (variações)', 'Paleta de cores + Tipografia', 'Brand Guide', 'Tom de Voz'],
      ideal: ['Startups sem identidade visual', 'Organizações em rebranding', 'Projetos que precisam se posicionar']
    },
    {
      path: '/produtos/ponte-digital',
      icon: '�',
      titulo: 'Construção da Ponte Digital',
      subtitulo: 'Website Institucional Estratégico',
      descricao: 'Não desenvolvemos sites, nós arquitetamos o principal habitat digital de um ecossistema. Cada página serve a um propósito estratégico.',
      preco: 'R$ 15.000',
      duracao: '8 semanas',
      entregas: ['Website responsivo (6 páginas)', 'Design UI/UX customizado', 'SEO on-page', 'Treinamento CMS'],
      ideal: ['Organizações sem presença digital', 'Sites desatualizados ou genéricos', 'Projetos que precisam converter leads']
    },
    {
      path: '/produtos/inteligencia-simbiotica',
      icon: '🌱',
      titulo: 'Inteligência Simbiótica',
      subtitulo: 'Automação com IA para Captação',
      descricao: 'Seguimos o princípio da "Simbiose Digital-Real". IA que amplifica a capacidade humana, não a substitui. Conversas mais profundas e eficazes.',
      preco: 'R$ 12.000',
      duracao: '4 semanas',
      entregas: ['Chat de qualificação OU Sequência de e-mails', 'Personalidade da IA', 'Dashboard de performance', '30 dias de otimização'],
      ideal: ['Alto volume de contatos repetitivos', 'Necessidade de qualificar leads', 'Equipe pequena com muito trabalho']
    }
  ]

  return (
    <>
      <HeroSection
        backgroundImage="/images/hero-produtos.jpg"
        subtitle="Produtos de Entrada"
        title="Serviços acessíveis com qualidade excepcional"
        description="Cada produto é desenhado com nossa filosofia de Simbiose Digital-Real, unindo profundidade antropológica com excelência técnica."
        ctaPrimary={{
          text: 'Fale com Nossa Equipe',
          href: '/contato'
        }}
      />
      
      <section className="py-16 bg-gradient-to-b from-background to-white">
        <div className="container mx-auto px-4">

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {produtos.map((produto, index) => (
            <Link
              key={index}
              to={produto.path}
              className="bg-white rounded-xl shadow-soft p-8 hover:shadow-strong transition-all duration-300 group flex flex-col"
            >
              <div className="text-6xl mb-4 transform group-hover:scale-110 transition-transform">{produto.icon}</div>
              <h3 className="text-2xl font-heading font-bold text-primary mb-2 group-hover:text-secondary transition-colors">
                {produto.titulo}
              </h3>
              <p className="text-sm font-semibold text-secondary mb-4">{produto.subtitulo}</p>
              <p className="text-foreground mb-6 flex-1">{produto.descricao}</p>
              
              <div className="mb-6 space-y-3">
                <div className="flex items-center justify-between text-sm">
                  <span className="text-muted-foreground font-semibold">Duração:</span>
                  <span className="font-bold text-foreground">{produto.duracao}</span>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-muted-foreground font-semibold">Investimento:</span>
                  <span className="font-bold text-secondary">A partir de {produto.preco}</span>
                </div>
              </div>
              
              <div className="border-t border-gray-200 pt-4 mb-6">
                <p className="text-xs text-muted-foreground font-semibold mb-2">ENTREGAS:</p>
                <ul className="space-y-1">
                  {produto.entregas.map((item, idx) => (
                    <li key={idx} className="text-sm text-foreground flex items-start">
                      <span className="text-secondary mr-2 flex-shrink-0">✓</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              <span className="block w-full px-4 py-3 bg-secondary text-secondary-foreground rounded-lg font-semibold text-center group-hover:bg-secondary-dark transition-colors">
                Ver Detalhes
              </span>
            </Link>
          ))}
        </div>

        <div className="bg-gradient-to-r from-primary via-primary-dark to-primary text-white rounded-2xl p-8 md:p-12 text-center shadow-strong">
          <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
            Não tem certeza qual produto é ideal?
          </h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Agende uma conversa exploratória gratuita de 45 minutos para entendermos seu contexto
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contato"
              className="inline-block px-8 py-4 bg-white text-primary rounded-lg font-semibold hover:bg-gray-100 transition-all shadow-medium"
            >
              Agendar Conversa Gratuita
            </Link>
            <a
              href="https://wa.me/5521959527189?text=Olá!%20Tenho%20interesse%20nos%20Produtos%20de%20Entrada%20da%20Estratégia%20Viva"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-8 py-4 bg-green-500 text-white rounded-lg font-semibold hover:bg-green-600 transition-all shadow-medium"
            >
              💬 Falar no WhatsApp
            </a>
          </div>
        </div>
      </div>
    </section>
    </>
  )
}

function DecodificacaoAlma() {
  return (
    <>
      <HeroSection
        backgroundImage="/images/hero-produto-alma.jpg"
        subtitle="Produto de Entrada"
        title="Decodificação da Alma"
        description="Não criamos marcas, nós revelamos a identidade pré-existente. Uma micro-imersão antropológica para decodificar a 'Alma' da organização."
        ctaPrimary={{
          text: 'Quero Decodificar Minha Marca',
          href: '/contato'
        }}
      />
      
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <Link to="/produtos" className="text-secondary hover:text-secondary-dark mb-6 inline-block font-semibold">
              ← Voltar para Produtos
            </Link>
            
            <div className="bg-gradient-to-br from-primary to-primary-dark text-white rounded-2xl p-8 md:p-12 mb-8">
              <div className="flex flex-col md:flex-row items-center justify-between gap-6">
                <div className="flex-1">
                  <div className="text-6xl mb-4">🎨</div>
                  <h1 className="text-3xl md:text-5xl font-heading font-bold mb-4">
                    Decodificação da Alma
                </h1>
                <p className="text-xl opacity-90 mb-4">
                  Branding e Identidade Estratégica
                </p>
                <p className="text-lg opacity-80">
                  Não criamos marcas. Nós revelamos a identidade pré-existente.
                </p>
              </div>
              <div className="text-center md:text-right">
                <div className="bg-white/10 backdrop-blur rounded-xl p-6">
                  <p className="text-sm opacity-80 mb-2">Investimento</p>
                  <p className="text-3xl font-bold mb-4">R$ 9k - R$ 18k</p>
                  <p className="text-sm opacity-80">⏱️ 5 semanas</p>
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
            <div className="bg-white rounded-xl shadow-soft p-8">
              <h2 className="text-2xl font-heading font-bold text-primary mb-4">
                Filosofia do Produto
              </h2>
              <p className="text-foreground leading-relaxed mb-4">
                Conduzimos uma <strong>micro-imersão antropológica</strong> para decodificar a "Alma" 
                da organização – seu arquétipo, valores e narrativa.
              </p>
              <p className="text-foreground leading-relaxed">
                Traduzimos essa essência em um sistema de identidade visual e verbal 
                <strong> coeso, autêntico e poderoso</strong>.
              </p>
            </div>

            <div className="bg-white rounded-xl shadow-soft p-8">
              <h3 className="text-xl font-heading font-bold text-secondary mb-4">
                Para Quem é Ideal?
              </h3>
              <ul className="space-y-3">
                {[
                  'Startups sem identidade visual consolidada',
                  'Organizações em processo de rebranding',
                  'Projetos de impacto que precisam se posicionar',
                  'Empresas que querem marca autêntica, não genérica'
                ].map((item, index) => (
                  <li key={index} className="flex items-start text-foreground">
                    <span className="text-secondary mr-3 text-xl flex-shrink-0">•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-soft p-8 mb-8">
            <h2 className="text-2xl font-heading font-bold text-primary mb-6">
              O Processo (4 Fases)
            </h2>
            <div className="space-y-6">
              {[
                {
                  fase: 1,
                  titulo: 'Imersão & Descoberta',
                  duracao: 'Semana 1',
                  descricao: 'Workshop de 3 horas para mapear arquétipo, valores, público e narrativa de origem. Análise de materiais existentes.'
                },
                {
                  fase: 2,
                  titulo: 'Conceituação & Estratégia',
                  duracao: 'Semana 2',
                  descricao: 'Desenvolvimento do conceito central da marca. Criação de moodboard visual. Apresentação e validação.'
                },
                {
                  fase: 3,
                  titulo: 'Design & Materialização',
                  duracao: 'Semana 3-4',
                  descricao: 'Criação das propostas de identidade visual baseadas no conceito aprovado. Apresentação e 2 rodadas de revisão.'
                },
                {
                  fase: 4,
                  titulo: 'Entrega & Capacitação',
                  duracao: 'Semana 5',
                  descricao: 'Finalização dos arquivos em múltiplos formatos. Montagem do Brand Guide completo. Entrega final.'
                }
              ].map((etapa, index) => (
                <div key={index} className="flex gap-4 group">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 rounded-full bg-secondary text-white font-bold flex items-center justify-center group-hover:scale-110 transition-transform">
                      {etapa.fase}
                    </div>
                  </div>
                  <div className="flex-1">
                    <div className="flex flex-wrap items-baseline gap-2 mb-2">
                      <h4 className="font-bold text-lg text-foreground">{etapa.titulo}</h4>
                      <span className="text-sm text-muted-foreground">({etapa.duracao})</span>
                    </div>
                    <p className="text-foreground leading-relaxed">{etapa.descricao}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
            <div className="bg-green-50 border-2 border-green-200 rounded-xl p-6">
              <h3 className="text-xl font-heading font-bold text-green-900 mb-4 flex items-center gap-2">
                <span className="text-2xl">✓</span> O que ESTÁ incluso
              </h3>
              <ul className="space-y-2">
                {[
                  'Workshop de Imersão (3 horas)',
                  'Conceito de Marca estratégico',
                  'Logo principal + variações (vertical, horizontal, ícone)',
                  'Paleta de cores completa',
                  'Seleção de tipografia',
                  'Definição de Tom de Voz',
                  'Brand Guide completo (PDF)',
                  '2 rodadas de revisão'
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start text-green-900">
                    <span className="text-green-600 mr-2 flex-shrink-0">✓</span>
                    <span className="text-sm">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-red-50 border-2 border-red-200 rounded-xl p-6">
              <h3 className="text-xl font-heading font-bold text-red-900 mb-4 flex items-center gap-2">
                <span className="text-2xl">✗</span> O que NÃO está incluso
              </h3>
              <ul className="space-y-2">
                {[
                  'Processo de Naming (criação de nome)',
                  'Registro de marca',
                  'Design de papelaria (cartões, etc)',
                  'Criação de conteúdo (copywriting)',
                  'Fotografia ou produção de vídeo',
                  'Revisões além das 2 incluídas'
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start text-red-900">
                    <span className="text-red-600 mr-2 flex-shrink-0">✗</span>
                    <span className="text-sm">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="bg-gradient-to-r from-secondary to-secondary-dark text-white rounded-xl p-8 text-center mb-8">
            <h3 className="text-2xl font-heading font-bold mb-4">Entregáveis Finais</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-2xl mx-auto">
              <div className="bg-white/10 backdrop-blur rounded-lg p-4">
                <p className="font-semibold mb-2">📦 Logo Completo</p>
                <p className="text-sm opacity-90">Formatos: AI, EPS, SVG, PNG, JPG</p>
              </div>
              <div className="bg-white/10 backdrop-blur rounded-lg p-4">
                <p className="font-semibold mb-2">📘 Brand Guide</p>
                <p className="text-sm opacity-90">PDF com todas as diretrizes</p>
              </div>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://wa.me/5521959527189?text=Olá!%20Tenho%20interesse%20no%20serviço%20de%20Decodificação%20da%20Alma"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-8 py-4 bg-green-500 text-white rounded-lg font-semibold hover:bg-green-600 transition-all shadow-medium text-center"
            >
              💬 Solicitar Orçamento via WhatsApp
            </a>
            <Link
              to="/contato"
              className="inline-block px-8 py-4 bg-secondary text-secondary-foreground rounded-lg font-semibold hover:bg-secondary-dark transition-all shadow-medium text-center"
            >
              📧 Solicitar Proposta Detalhada
            </Link>
          </div>
        </div>
      </div>
    </section>
    </>
  )
}

function PonteDigital() {
  return (
    <>
      <HeroSection
        backgroundImage="/images/hero-produto-ponte.jpg"
        subtitle="Produto de Entrada"
        title="Construção da Ponte Digital"
        description="Não desenvolvemos sites, nós arquitetamos o principal habitat digital de um ecossistema. Cada página serve a um propósito estratégico."
        ctaPrimary={{
          text: 'Quero um Website Estratégico',
          href: '/contato'
        }}
      />
      
      <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <Link to="/produtos" className="text-secondary hover:text-secondary-dark mb-6 inline-block font-semibold">
            ← Voltar para Produtos
          </Link>
          
          <div className="bg-gradient-to-br from-primary to-primary-dark text-white rounded-2xl p-8 md:p-12 mb-8">
            <div className="flex flex-col md:flex-row items-center justify-between gap-6">
              <div className="flex-1">
                <div className="text-6xl mb-4">🌉</div>
                <h1 className="text-3xl md:text-5xl font-heading font-bold mb-4">
                  Construção da Ponte Digital
                </h1>
                <p className="text-xl opacity-90 mb-4">
                  Website Institucional Estratégico
                </p>
                <p className="text-lg opacity-80">
                  Não desenvolvemos sites. Nós arquitetamos habitats digitais estratégicos.
                </p>
              </div>
              <div className="text-center md:text-right">
                <div className="bg-white/10 backdrop-blur rounded-xl p-6">
                  <p className="text-sm opacity-80 mb-2">Investimento</p>
                  <p className="text-3xl font-bold mb-4">R$ 15k - R$ 35k</p>
                  <p className="text-sm opacity-80">⏱️ 8 semanas</p>
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
            <div className="bg-white rounded-xl shadow-soft p-8">
              <h2 className="text-2xl font-heading font-bold text-primary mb-4">
                Filosofia do Produto
              </h2>
              <p className="text-foreground leading-relaxed mb-4">
                Cada página e cada interação são projetadas para servir a um propósito estratégico:
              </p>
              <ul className="space-y-2">
                {[
                  'Educar o visitante sobre a Alma da organização',
                  'Qualificar o interesse genuíno',
                  'Conectar para uma conversa transformadora'
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start text-foreground">
                    <span className="text-secondary mr-2">→</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <p className="text-foreground leading-relaxed mt-4">
                É sua <strong>tese central transformada em experiência digital</strong>.
              </p>
            </div>

            <div className="bg-white rounded-xl shadow-soft p-8">
              <h3 className="text-xl font-heading font-bold text-secondary mb-4">
                Para Quem é Ideal?
              </h3>
              <ul className="space-y-3">
                {[
                  'Organizações sem presença digital profissional',
                  'Sites desatualizados ou genéricos',
                  'Projetos que precisam converter visitantes em leads',
                  'Quem busca site alinhado com propósito e valores'
                ].map((item, index) => (
                  <li key={index} className="flex items-start text-foreground">
                    <span className="text-secondary mr-3 text-xl flex-shrink-0">•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-soft p-8 mb-8">
            <h2 className="text-2xl font-heading font-bold text-primary mb-6">
              O Processo (4 Fases)
            </h2>
            <div className="space-y-6">
              {[
                {
                  fase: 1,
                  titulo: 'Arquitetura & Estratégia',
                  duracao: 'Semana 1',
                  descricao: 'Workshop de 3 horas para definir objetivos, público-alvo e jornada do usuário. Criação de sitemap e wireframes.'
                },
                {
                  fase: 2,
                  titulo: 'Design da Experiência',
                  duracao: 'Semana 2-3',
                  descricao: 'Criação do design visual (UI/UX) baseado na identidade da marca. Até 6 páginas customizadas. Apresentação e validação.'
                },
                {
                  fase: 3,
                  titulo: 'Desenvolvimento & Construção',
                  duracao: 'Semana 4-7',
                  descricao: 'Programação do site responsivo. Implementação de design, conteúdo, SEO e integrações (Analytics, formulários).'
                },
                {
                  fase: 4,
                  titulo: 'Revisão & Lançamento',
                  duracao: 'Semana 8',
                  descricao: 'Testes finais em múltiplos dispositivos. Ajustes de performance. Treinamento da equipe. Publicação do site.'
                }
              ].map((etapa, index) => (
                <div key={index} className="flex gap-4 group">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 rounded-full bg-secondary text-white font-bold flex items-center justify-center group-hover:scale-110 transition-transform">
                      {etapa.fase}
                    </div>
                  </div>
                  <div className="flex-1">
                    <div className="flex flex-wrap items-baseline gap-2 mb-2">
                      <h4 className="font-bold text-lg text-foreground">{etapa.titulo}</h4>
                      <span className="text-sm text-muted-foreground">({etapa.duracao})</span>
                    </div>
                    <p className="text-foreground leading-relaxed">{etapa.descricao}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
            <div className="bg-green-50 border-2 border-green-200 rounded-xl p-6">
              <h3 className="text-xl font-heading font-bold text-green-900 mb-4 flex items-center gap-2">
                <span className="text-2xl">✓</span> O que ESTÁ incluso
              </h3>
              <ul className="space-y-2">
                {[
                  'Workshop de Arquitetura (3 horas)',
                  'Design UI/UX de até 6 páginas',
                  'Desenvolvimento responsivo (mobile/tablet/desktop)',
                  'SEO on-page (títulos, meta tags, URLs)',
                  'Integração Google Analytics',
                  'Formulários de contato',
                  'Sessão de treinamento (1.5h)',
                  'Gravação do treinamento'
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start text-green-900">
                    <span className="text-green-600 mr-2 flex-shrink-0">✓</span>
                    <span className="text-sm">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-red-50 border-2 border-red-200 rounded-xl p-6">
              <h3 className="text-xl font-heading font-bold text-red-900 mb-4 flex items-center gap-2">
                <span className="text-2xl">✗</span> O que NÃO está incluso
              </h3>
              <ul className="space-y-2">
                {[
                  'Produção de conteúdo (textos e fotos)',
                  'Funcionalidades complexas (e-commerce, membros)',
                  'Hospedagem e domínio',
                  'Licenças de plugins premium',
                  'Manutenção contínua pós-lançamento',
                  'Páginas além das 6 incluídas'
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start text-red-900">
                    <span className="text-red-600 mr-2 flex-shrink-0">✗</span>
                    <span className="text-sm">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="bg-gradient-to-r from-secondary to-secondary-dark text-white rounded-xl p-8 text-center mb-8">
            <h3 className="text-2xl font-heading font-bold mb-4">Entregáveis Finais</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-3xl mx-auto">
              <div className="bg-white/10 backdrop-blur rounded-lg p-4">
                <p className="font-semibold mb-2">🌐 Website Completo</p>
                <p className="text-sm opacity-90">Funcional e no ar</p>
              </div>
              <div className="bg-white/10 backdrop-blur rounded-lg p-4">
                <p className="font-semibold mb-2">🔑 Acesso Admin</p>
                <p className="text-sm opacity-90">Painel do CMS</p>
              </div>
              <div className="bg-white/10 backdrop-blur rounded-lg p-4">
                <p className="font-semibold mb-2">🎥 Treinamento</p>
                <p className="text-sm opacity-90">Gravação completa</p>
              </div>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://wa.me/5521959527189?text=Olá!%20Tenho%20interesse%20no%20serviço%20de%20Construção%20da%20Ponte%20Digital"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-8 py-4 bg-green-500 text-white rounded-lg font-semibold hover:bg-green-600 transition-all shadow-medium text-center"
            >
              💬 Solicitar Orçamento via WhatsApp
            </a>
            <Link
              to="/contato"
              className="inline-block px-8 py-4 bg-secondary text-secondary-foreground rounded-lg font-semibold hover:bg-secondary-dark transition-all shadow-medium text-center"
            >
              📧 Solicitar Proposta Detalhada
            </Link>
          </div>
        </div>
      </div>
    </section>
    </>
  )
}

function InteligenciaSimbiotica() {
  return (
    <>
      <HeroSection
        backgroundImage="/images/hero-produto-ia.jpg"
        subtitle="Produto de Entrada"
        title="Inteligência Simbiótica"
        description="Seguimos o princípio da 'Simbiose Digital-Real'. IA que amplifica a capacidade humana, não a substitui. Conversas mais profundas e eficazes."
        ctaPrimary={{
          text: 'Quero Automação Inteligente',
          href: '/contato'
        }}
      />
      
      <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <Link to="/produtos" className="text-secondary hover:text-secondary-dark mb-6 inline-block font-semibold">
            ← Voltar para Produtos
          </Link>
          
          <div className="bg-gradient-to-br from-primary to-primary-dark text-white rounded-2xl p-8 md:p-12 mb-8">
            <div className="flex flex-col md:flex-row items-center justify-between gap-6">
              <div className="flex-1">
                <div className="text-6xl mb-4">🤖</div>
                <h1 className="text-3xl md:text-5xl font-heading font-bold mb-4">
                  Inteligência Simbiótica
                </h1>
                <p className="text-xl opacity-90 mb-4">
                  Automação com IA para Captação e Conversão
                </p>
                <p className="text-lg opacity-80">
                  IA que amplifica a capacidade humana, não a substitui.
                </p>
              </div>
              <div className="text-center md:text-right">
                <div className="bg-white/10 backdrop-blur rounded-xl p-6">
                  <p className="text-sm opacity-80 mb-2">Investimento</p>
                  <p className="text-3xl font-bold mb-4">A partir de R$ 12k</p>
                  <p className="text-sm opacity-80">⏱️ 4 semanas</p>
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
            <div className="bg-white rounded-xl shadow-soft p-8">
              <h2 className="text-2xl font-heading font-bold text-primary mb-4">
                Filosofia do Produto
              </h2>
              <p className="text-foreground leading-relaxed mb-4">
                Seguimos o princípio da <strong>"Simbiose Digital-Real"</strong>. Não usamos IA para criar 
                barreiras, mas para construir pontes mais eficientes.
              </p>
              <p className="text-foreground leading-relaxed mb-4">
                Desenhamos sistemas inteligentes que cuidam das interações iniciais e repetitivas, 
                <strong> nutrindo e qualificando contatos</strong>.
              </p>
              <p className="text-foreground leading-relaxed">
                No momento da interação humana, a conversa é mais <strong>profunda, significativa e eficaz</strong>.
              </p>
            </div>

            <div className="bg-white rounded-xl shadow-soft p-8">
              <h3 className="text-xl font-heading font-bold text-secondary mb-4">
                Para Quem é Ideal?
              </h3>
              <ul className="space-y-3">
                {[
                  'Alto volume de contatos com perguntas repetitivas',
                  'Necessidade de qualificar leads antes do contato',
                  'Equipe pequena com muito trabalho operacional',
                  'Quem quer escalar atendimento sem perder qualidade'
                ].map((item, index) => (
                  <li key={index} className="flex items-start text-foreground">
                    <span className="text-secondary mr-3 text-xl flex-shrink-0">•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-soft p-8 mb-8">
            <h2 className="text-2xl font-heading font-bold text-primary mb-6">
              Escolha SUA Automação
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="border-2 border-secondary rounded-xl p-6 hover:shadow-medium transition-shadow">
                <h3 className="text-xl font-heading font-bold text-secondary mb-3">
                  Opção A: Chat de Qualificação
                </h3>
                <p className="text-foreground mb-4">
                  Criação de um chat inteligente para o site que:
                </p>
                <ul className="space-y-2">
                  {[
                    'Guia o visitante pelo seu conteúdo',
                    'Responde perguntas frequentes 24/7',
                    'Qualifica o lead antes de encaminhar',
                    'Agenda reuniões automaticamente'
                  ].map((item, idx) => (
                    <li key={idx} className="flex items-start text-foreground text-sm">
                      <span className="text-secondary mr-2">→</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="border-2 border-secondary rounded-xl p-6 hover:shadow-medium transition-shadow">
                <h3 className="text-xl font-heading font-bold text-secondary mb-3">
                  Opção B: Sequência de E-mails
                </h3>
                <p className="text-foreground mb-4">
                  Automação de nutrição por e-mail que:
                </p>
                <ul className="space-y-2">
                  {[
                    'Envia série de e-mails estratégicos',
                    'Educa novos inscritos da newsletter',
                    'Nutre leads que baixaram materiais',
                    'Segmenta por comportamento e interesse'
                  ].map((item, idx) => (
                    <li key={idx} className="flex items-start text-foreground text-sm">
                      <span className="text-secondary mr-2">→</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-soft p-8 mb-8">
            <h2 className="text-2xl font-heading font-bold text-primary mb-6">
              O Processo (4 Fases)
            </h2>
            <div className="space-y-6">
              {[
                {
                  fase: 1,
                  titulo: 'Diagnóstico do Fluxo',
                  duracao: 'Semana 1',
                  descricao: 'Workshop de 2 horas para identificar gargalos e oportunidades. Definição da automação prioritária (Chat ou E-mail).'
                },
                {
                  fase: 2,
                  titulo: 'Desenho da Inteligência',
                  duracao: 'Semana 2',
                  descricao: 'Mapeamento da lógica da automação. Criação da árvore de decisão. Definição da personalidade da IA alinhada à marca.'
                },
                {
                  fase: 3,
                  titulo: 'Implementação & Treinamento',
                  duracao: 'Semana 3',
                  descricao: 'Configuração técnica da ferramenta. Treinamento do modelo de IA com documentos e informações da empresa.'
                },
                {
                  fase: 4,
                  titulo: 'Ativação & Otimização',
                  duracao: 'Semana 4',
                  descricao: 'Lançamento da automação. Acompanhamento por 30 dias para realizar ajustes finos baseados em dados reais.'
                }
              ].map((etapa, index) => (
                <div key={index} className="flex gap-4 group">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 rounded-full bg-secondary text-white font-bold flex items-center justify-center group-hover:scale-110 transition-transform">
                      {etapa.fase}
                    </div>
                  </div>
                  <div className="flex-1">
                    <div className="flex flex-wrap items-baseline gap-2 mb-2">
                      <h4 className="font-bold text-lg text-foreground">{etapa.titulo}</h4>
                      <span className="text-sm text-muted-foreground">({etapa.duracao})</span>
                    </div>
                    <p className="text-foreground leading-relaxed">{etapa.descricao}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
            <div className="bg-green-50 border-2 border-green-200 rounded-xl p-6">
              <h3 className="text-xl font-heading font-bold text-green-900 mb-4 flex items-center gap-2">
                <span className="text-2xl">✓</span> O que ESTÁ incluso
              </h3>
              <ul className="space-y-2">
                {[
                  'Workshop de Mapeamento (2 horas)',
                  '1 automação à escolha (Chat OU E-mail)',
                  'Treinamento da IA com seus dados',
                  'Design da Personalidade da IA',
                  'Dashboard de performance',
                  '30 dias de acompanhamento e ajustes',
                  'Guia de Personalidade da IA (documento)'
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start text-green-900">
                    <span className="text-green-600 mr-2 flex-shrink-0">✓</span>
                    <span className="text-sm">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-red-50 border-2 border-red-200 rounded-xl p-6">
              <h3 className="text-xl font-heading font-bold text-red-900 mb-4 flex items-center gap-2">
                <span className="text-2xl">✗</span> O que NÃO está incluso
              </h3>
              <ul className="space-y-2">
                {[
                  'Custo de licença das ferramentas (variável)',
                  'Criação de todo o conteúdo (e-mails, materiais)',
                  'Gestão de campanhas de tráfego pago',
                  'Monitoramento contínuo após 30 dias',
                  'Integrações complexas com sistemas legados'
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start text-red-900">
                    <span className="text-red-600 mr-2 flex-shrink-0">✗</span>
                    <span className="text-sm">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="bg-blue-50 border-2 border-blue-300 rounded-xl p-6 mb-8">
            <h3 className="text-xl font-heading font-bold text-blue-900 mb-3 flex items-center gap-2">
              <span className="text-2xl">🔄</span> Retenção Opcional
            </h3>
            <p className="text-blue-900 mb-4">
              Ofereça um pacote mensal de <strong>R$ 2.500 - R$ 5.000</strong> para:
            </p>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {[
                'Otimização contínua da IA',
                'Análise mensal de dados',
                'Refinamento de respostas',
                'Expansão de funcionalidades',
                'Suporte prioritário',
                'Relatórios de performance'
              ].map((item, idx) => (
                <li key={idx} className="flex items-start text-blue-900">
                  <span className="text-blue-600 mr-2">→</span>
                  <span className="text-sm">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-gradient-to-r from-secondary to-secondary-dark text-white rounded-xl p-8 text-center mb-8">
            <h3 className="text-2xl font-heading font-bold mb-4">Entregáveis Finais</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-3xl mx-auto">
              <div className="bg-white/10 backdrop-blur rounded-lg p-4">
                <p className="font-semibold mb-2">🤖 Automação Ativa</p>
                <p className="text-sm opacity-90">Chat ou E-mail funcionando</p>
              </div>
              <div className="bg-white/10 backdrop-blur rounded-lg p-4">
                <p className="font-semibold mb-2">📋 Guia de IA</p>
                <p className="text-sm opacity-90">Personalidade documentada</p>
              </div>
              <div className="bg-white/10 backdrop-blur rounded-lg p-4">
                <p className="font-semibold mb-2">📊 Dashboard</p>
                <p className="text-sm opacity-90">Métricas acessíveis</p>
              </div>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://wa.me/5521959527189?text=Olá!%20Tenho%20interesse%20no%20serviço%20de%20Inteligência%20Simbiótica"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-8 py-4 bg-green-500 text-white rounded-lg font-semibold hover:bg-green-600 transition-all shadow-medium text-center"
            >
              💬 Solicitar Orçamento via WhatsApp
            </a>
            <Link
              to="/contato"
              className="inline-block px-8 py-4 bg-secondary text-secondary-foreground rounded-lg font-semibold hover:bg-secondary-dark transition-all shadow-medium text-center"
            >
              📧 Solicitar Proposta Detalhada
            </Link>
          </div>
        </div>
      </div>
    </section>
    </>
  )
}

export default function Produtos() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main>
        <Routes>
          <Route index element={<ProdutosHome />} />
          <Route path="decodificacao-alma" element={<DecodificacaoAlma />} />
          <Route path="ponte-digital" element={<PonteDigital />} />
          <Route path="inteligencia-simbiotica" element={<InteligenciaSimbiotica />} />
        </Routes>
      </main>

      <Footer />
    </div>
  )
}
