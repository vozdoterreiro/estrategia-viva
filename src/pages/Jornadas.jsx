import React from 'react'
import { Routes, Route, Link, useLocation } from 'react-router-dom'
import Header from '../components/Header'
import Footer from '../components/Footer'
import HeroSection from '../components/HeroSection'

function JornadasHome() {
  const jornadas = [
    {
      path: '/jornadas/diagnostico',
      title: 'Diagnóstico de DNA',
      subtitle: 'Entenda a essência da sua organização',
      description: 'Mapeamos as forças vitais da sua organização, identificando padrões culturais profundos, estruturas invisíveis e o DNA organizacional.',
      icon: (
        <svg className="w-10 h-10 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
        </svg>
      ),
      duration: '4-6 semanas',
      preco: 'A partir de R$ 20.000',
      deliverables: ['Mapa de DNA Organizacional', 'Diagnóstico Cultural', 'Análise de Vitalidade'],
      color: 'from-purple-100 to-purple-50'
    },
    {
      path: '/jornadas/arquitetura',
      title: 'Arquitetura de Ecossistema',
      subtitle: 'Desenhe o futuro da sua organização',
      description: 'Co-criamos a arquitetura organizacional do futuro, desenhando estruturas, processos e relações que sustentam crescimento orgânico.',
      icon: (
        <svg className="w-10 h-10 text-amber-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
        </svg>
      ),
      duration: '3-6 meses',
      preco: 'A partir de R$ 80.000',
      deliverables: ['Blueprint Organizacional', 'Modelo de Governança', 'Plano de Transição'],
      color: 'from-amber-100 to-amber-50'
    },
    {
      path: '/jornadas/cultivo',
      title: 'Ciclo de Cultivo',
      subtitle: 'Cultive vitalidade contínua',
      description: 'Acompanhamento contínuo para cultivar práticas regenerativas, nutrir a cultura e garantir a evolução sustentável do ecossistema.',
      icon: (
        <svg className="w-10 h-10 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      duration: 'Programa anual',
      preco: 'A partir de R$ 300.000/ano',
      deliverables: ['Rituais de Cultivo', 'Métricas de Vitalidade', 'Comunidade de Práticas'],
      color: 'from-green-100 to-green-50'
    }
  ]

  return (
    <>
      <HeroSection
        backgroundImage="/images/hero-jornadas.jpg"
        subtitle="Jornadas de Transformação"
        title="Três caminhos para transformar sua organização"
        description="De máquina rígida a organismo vivo, próspero e resiliente. Escolha a jornada ideal para o momento da sua organização."
        ctaPrimary={{
          text: 'Fale com um Arquiteto',
          href: '/contato'
        }}
      />
      
      <section className="py-16">
        <div className="container mx-auto px-4">

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {jornadas.map((jornada, index) => (
            <Link
              key={index}
              to={jornada.path}
              className="bg-white rounded-xl shadow-soft p-8 hover:shadow-strong transition-all duration-300 group flex flex-col"
            >
              <div className={`w-16 h-16 rounded-full bg-gradient-to-br ${jornada.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                {jornada.icon}
              </div>
              <h3 className="text-2xl font-heading font-bold text-primary mb-2 group-hover:text-secondary transition-colors">
                {jornada.title}
              </h3>
              <p className="text-sm font-semibold text-secondary mb-4">{jornada.subtitle}</p>
              <p className="text-foreground mb-6 flex-1">{jornada.description}</p>
              
              <div className="mb-6 space-y-3">
                <div className="flex items-center justify-between text-sm">
                  <span className="text-muted-foreground font-semibold">Duração:</span>
                  <span className="font-bold text-foreground">{jornada.duration}</span>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-muted-foreground font-semibold">Investimento:</span>
                  <span className="font-bold text-secondary">{jornada.preco}</span>
                </div>
              </div>
              
              <div className="border-t border-gray-200 pt-4 mb-6">
                <p className="text-xs text-muted-foreground font-semibold mb-2">ENTREGAS:</p>
                <ul className="space-y-1">
                  {jornada.deliverables.map((item, idx) => (
                    <li key={idx} className="text-sm text-foreground flex items-start">
                      <svg className="w-4 h-4 text-secondary mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
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
            Qual jornada é ideal para você?
          </h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Agende uma conversa exploratória gratuita para entender o momento da sua organização
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contato"
              className="inline-block px-8 py-4 bg-white text-primary rounded-lg font-semibold hover:bg-gray-100 transition-all shadow-medium"
            >
              📧 Agendar Conversa Gratuita
            </Link>
            <a
              href="https://wa.me/5521959527189?text=Olá!%20Gostaria%20de%20entender%20qual%20jornada%20é%20ideal%20para%20minha%20organização"
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

function Diagnostico() {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <Link to="/jornadas" className="text-secondary hover:text-secondary-dark mb-6 inline-block">
            ← Voltar para Jornadas
          </Link>
          
          <h1 className="text-4xl md:text-5xl font-heading font-bold text-primary mb-6">
            🧬 Diagnóstico de DNA
          </h1>
          
          <p className="text-xl text-muted-foreground mb-12">
            Entenda a essência da sua organização antes de transformá-la
          </p>

          <div className="bg-white rounded-lg shadow-soft p-8 mb-8">
            <h2 className="text-2xl font-heading font-bold text-primary mb-4">O que é?</h2>
            <p className="text-foreground leading-relaxed mb-4">
              O Diagnóstico de DNA é uma imersão profunda na identidade organizacional. 
              Vamos além de pesquisas de clima e análises superficiais para mapear as forças 
              vitais que realmente movem sua organização.
            </p>
            <p className="text-foreground leading-relaxed">
              Identificamos padrões culturais invisíveis, estruturas de poder ocultas, 
              crenças limitantes e potenciais não explorados.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
            <div className="bg-white rounded-lg shadow-soft p-6">
              <h3 className="text-xl font-heading font-bold text-secondary mb-4">Como funciona</h3>
              <ul className="space-y-3 text-foreground">
                <li className="flex items-start">
                  <span className="text-secondary mr-2">•</span>
                  <span>Entrevistas em profundidade com lideranças</span>
                </li>
                <li className="flex items-start">
                  <span className="text-secondary mr-2">•</span>
                  <span>Mapeamento de narrativas organizacionais</span>
                </li>
                <li className="flex items-start">
                  <span className="text-secondary mr-2">•</span>
                  <span>Análise de estruturas e processos</span>
                </li>
                <li className="flex items-start">
                  <span className="text-secondary mr-2">•</span>
                  <span>Workshop de síntese com time executivo</span>
                </li>
              </ul>
            </div>

            <div className="bg-white rounded-lg shadow-soft p-6">
              <h3 className="text-xl font-heading font-bold text-secondary mb-4">O que você recebe</h3>
              <ul className="space-y-3 text-foreground">
                <li className="flex items-start">
                  <span className="text-secondary mr-2">•</span>
                  <span>Mapa completo do DNA Organizacional</span>
                </li>
                <li className="flex items-start">
                  <span className="text-secondary mr-2">•</span>
                  <span>Diagnóstico Cultural em profundidade</span>
                </li>
                <li className="flex items-start">
                  <span className="text-secondary mr-2">•</span>
                  <span>Análise de Vitalidade Organizacional</span>
                </li>
                <li className="flex items-start">
                  <span className="text-secondary mr-2">•</span>
                  <span>Recomendações estratégicas personalizadas</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="bg-gradient-to-r from-secondary to-secondary-dark text-white rounded-xl p-8 text-center mb-8">
            <div className="flex flex-col md:flex-row items-center justify-around gap-6">
              <div>
                <p className="text-sm opacity-80 mb-1">⏱️ Duração</p>
                <p className="text-2xl font-bold">4-6 semanas</p>
              </div>
              <div className="hidden md:block w-px h-16 bg-white/30"></div>
              <div>
                <p className="text-sm opacity-80 mb-1">💰 Investimento</p>
                <p className="text-2xl font-bold">A partir de R$ 20.000</p>
              </div>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <a
              href="https://wa.me/5521959527189?text=Olá!%20Tenho%20interesse%20no%20Diagnóstico%20de%20DNA%20Organizacional"
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
  )
}

function Arquitetura() {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <Link to="/jornadas" className="text-secondary hover:text-secondary-dark mb-6 inline-block">
            ← Voltar para Jornadas
          </Link>
          
          <h1 className="text-4xl md:text-5xl font-heading font-bold text-primary mb-6">
            🏛️ Arquitetura de Ecossistema
          </h1>
          
          <p className="text-xl text-muted-foreground mb-12">
            Desenhe o futuro organizacional que você deseja habitar
          </p>

          <div className="bg-white rounded-lg shadow-soft p-8 mb-8">
            <h2 className="text-2xl font-heading font-bold text-primary mb-4">O que é?</h2>
            <p className="text-foreground leading-relaxed mb-4">
              A Arquitetura de Ecossistema é o processo de co-criar o desenho organizacional 
              do futuro. Não é consultoria tradicional — é design participativo de sistemas vivos.
            </p>
            <p className="text-foreground leading-relaxed">
              Desenhamos estruturas adaptativas, processos regenerativos e relações saudáveis 
              que permitem crescimento orgânico e sustentável.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
            <div className="bg-white rounded-lg shadow-soft p-6">
              <h3 className="text-xl font-heading font-bold text-secondary mb-4">Como funciona</h3>
              <ul className="space-y-3 text-foreground">
                <li className="flex items-start">
                  <span className="text-secondary mr-2">•</span>
                  <span>Workshops de Design Organizacional</span>
                </li>
                <li className="flex items-start">
                  <span className="text-secondary mr-2">•</span>
                  <span>Prototipagem de estruturas e processos</span>
                </li>
                <li className="flex items-start">
                  <span className="text-secondary mr-2">•</span>
                  <span>Modelagem de governança participativa</span>
                </li>
                <li className="flex items-start">
                  <span className="text-secondary mr-2">•</span>
                  <span>Planejamento de transição evolutiva</span>
                </li>
              </ul>
            </div>

            <div className="bg-white rounded-lg shadow-soft p-6">
              <h3 className="text-xl font-heading font-bold text-secondary mb-4">O que você recebe</h3>
              <ul className="space-y-3 text-foreground">
                <li className="flex items-start">
                  <span className="text-secondary mr-2">•</span>
                  <span>Blueprint completo da nova organização</span>
                </li>
                <li className="flex items-start">
                  <span className="text-secondary mr-2">•</span>
                  <span>Modelo de Governança customizado</span>
                </li>
                <li className="flex items-start">
                  <span className="text-secondary mr-2">•</span>
                  <span>Plano de Transição passo a passo</span>
                </li>
                <li className="flex items-start">
                  <span className="text-secondary mr-2">•</span>
                  <span>Ferramentas e rituais de implementação</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="bg-gradient-to-r from-secondary to-secondary-dark text-white rounded-xl p-8 text-center mb-8">
            <div className="flex flex-col md:flex-row items-center justify-around gap-6">
              <div>
                <p className="text-sm opacity-80 mb-1">⏱️ Duração</p>
                <p className="text-2xl font-bold">3-6 meses</p>
              </div>
              <div className="hidden md:block w-px h-16 bg-white/30"></div>
              <div>
                <p className="text-sm opacity-80 mb-1">💰 Investimento</p>
                <p className="text-2xl font-bold">A partir de R$ 80.000</p>
              </div>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <a
              href="https://wa.me/5521959527189?text=Olá!%20Tenho%20interesse%20na%20Arquitetura%20de%20Ecossistema"
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
  )
}

function Cultivo() {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <Link to="/jornadas" className="text-secondary hover:text-secondary-dark mb-6 inline-block">
            ← Voltar para Jornadas
          </Link>
          
          <h1 className="text-4xl md:text-5xl font-heading font-bold text-primary mb-6">
            🌱 Ciclo de Cultivo
          </h1>
          
          <p className="text-xl text-muted-foreground mb-12">
            Cultive vitalidade organizacional de forma contínua e sustentável
          </p>

          <div className="bg-white rounded-lg shadow-soft p-8 mb-8">
            <h2 className="text-2xl font-heading font-bold text-primary mb-4">O que é?</h2>
            <p className="text-foreground leading-relaxed mb-4">
              O Ciclo de Cultivo é um programa contínuo de acompanhamento para organizações 
              que querem manter e evoluir sua vitalidade ao longo do tempo.
            </p>
            <p className="text-foreground leading-relaxed">
              Como um jardineiro cuida de um ecossistema, cultivamos práticas regenerativas, 
              nutrimos a cultura e garantimos que a organização continue crescendo de forma saudável.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
            <div className="bg-white rounded-lg shadow-soft p-6">
              <h3 className="text-xl font-heading font-bold text-secondary mb-4">Como funciona</h3>
              <ul className="space-y-3 text-foreground">
                <li className="flex items-start">
                  <span className="text-secondary mr-2">•</span>
                  <span>Encontros mensais de cultivo cultural</span>
                </li>
                <li className="flex items-start">
                  <span className="text-secondary mr-2">•</span>
                  <span>Rituais organizacionais regenerativos</span>
                </li>
                <li className="flex items-start">
                  <span className="text-secondary mr-2">•</span>
                  <span>Métricas de vitalidade e evolução</span>
                </li>
                <li className="flex items-start">
                  <span className="text-secondary mr-2">•</span>
                  <span>Comunidade de práticas entre pares</span>
                </li>
              </ul>
            </div>

            <div className="bg-white rounded-lg shadow-soft p-6">
              <h3 className="text-xl font-heading font-bold text-secondary mb-4">O que você recebe</h3>
              <ul className="space-y-3 text-foreground">
                <li className="flex items-start">
                  <span className="text-secondary mr-2">•</span>
                  <span>Sessões mensais de facilitação</span>
                </li>
                <li className="flex items-start">
                  <span className="text-secondary mr-2">•</span>
                  <span>Dashboard de vitalidade organizacional</span>
                </li>
                <li className="flex items-start">
                  <span className="text-secondary mr-2">•</span>
                  <span>Acesso a comunidade exclusiva</span>
                </li>
                <li className="flex items-start">
                  <span className="text-secondary mr-2">•</span>
                  <span>Biblioteca de recursos e práticas</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="bg-gradient-to-r from-secondary to-secondary-dark text-white rounded-xl p-8 text-center mb-8">
            <div className="flex flex-col md:flex-row items-center justify-around gap-6">
              <div>
                <p className="text-sm opacity-80 mb-1">⏱️ Duração</p>
                <p className="text-2xl font-bold">Programa Anual</p>
              </div>
              <div className="hidden md:block w-px h-16 bg-white/30"></div>
              <div>
                <p className="text-sm opacity-80 mb-1">💰 Investimento</p>
                <p className="text-2xl font-bold">A partir de R$ 300.000/ano</p>
              </div>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <a
              href="https://wa.me/5521959527189?text=Olá!%20Tenho%20interesse%20no%20Ciclo%20de%20Cultivo"
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
  )
}

export default function Jornadas() {
  const location = useLocation()
  const isSubRoute = location.pathname !== '/jornadas'

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main>
        <Routes>
          <Route index element={<JornadasHome />} />
          <Route path="diagnostico" element={<Diagnostico />} />
          <Route path="arquitetura" element={<Arquitetura />} />
          <Route path="cultivo" element={<Cultivo />} />
        </Routes>
      </main>

      <Footer />
    </div>
  )
}
