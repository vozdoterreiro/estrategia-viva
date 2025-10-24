import React from 'react'
import { Link } from 'react-router-dom'
import Header from '../components/Header'
import Footer from '../components/Footer'
import HeroSection from '../components/HeroSection'

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-background/80">
      <Header />
      
      {/* Hero Section */}
      <HeroSection
        backgroundImage="/images/hero-home.jpg"
        subtitle="Estratégia Viva"
        title={
          <>
            Sua organização é uma{' '}
            <span className="text-secondary">máquina</span> ou um{' '}
            <span className="text-secondary">organismo vivo</span>?
          </>
        }
        description="Transformamos organizações em ecossistemas prósperos. Combinamos antropologia cultural, design estratégico e inteligência sistêmica para criar empresas resilientes, regenerativas e verdadeiramente vivas."
        ctaPrimary={{
          text: 'Agende uma Conversa Estratégica',
          href: '/contato'
        }}
        ctaSecondary={{
          text: 'Descubra Seu Serviço Ideal',
          href: '/produtos'
        }}
      />

      {/* Problema - Dor do Cliente */}
      <section className="bg-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <div className="inline-flex items-center justify-center gap-2 bg-red-50 border border-red-200 rounded-full px-6 py-2 mb-6">
                <svg className="w-5 h-5 text-red-600" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                </svg>
                <span className="text-red-700 font-bold text-sm">Problema Crítico</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary mb-4">
                90% das Transformações Organizacionais Fracassam
              </h2>
              <p className="text-xl text-muted-foreground">
                E a causa não é falta de planejamento. É tratar organismos vivos como máquinas.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
              <div className="bg-red-50 border-l-4 border-red-500 p-6 rounded-r-lg hover:shadow-md transition-shadow">
                <div className="flex items-center gap-3 mb-3">
                  <svg className="w-6 h-6 text-red-600 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <h3 className="font-bold text-lg text-gray-900">Mudanças Não Enraízam</h3>
                </div>
                <p className="text-gray-700 text-sm leading-relaxed">
                  Sua equipe resiste, processos não funcionam, e em 6 meses tudo volta ao normal.
                </p>
              </div>
              <div className="bg-red-50 border-l-4 border-red-500 p-6 rounded-r-lg hover:shadow-md transition-shadow">
                <div className="flex items-center gap-3 mb-3">
                  <svg className="w-6 h-6 text-red-600 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                  <h3 className="font-bold text-lg text-gray-900">Cultura x Estratégia</h3>
                </div>
                <p className="text-gray-700 text-sm leading-relaxed">
                  Você tem planos brilhantes, mas a cultura da empresa os engole no café da manhã.
                </p>
              </div>
              <div className="bg-red-50 border-l-4 border-red-500 p-6 rounded-r-lg hover:shadow-md transition-shadow">
                <div className="flex items-center gap-3 mb-3">
                  <svg className="w-6 h-6 text-red-600 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <h3 className="font-bold text-lg text-gray-900">Investimento Perdido</h3>
                </div>
                <p className="text-gray-700 text-sm leading-relaxed">
                  Milhões em consultorias, tecnologia e treinamentos que não geram transformação real.
                </p>
              </div>
            </div>

            <div className="bg-primary/5 border border-primary/20 rounded-xl p-6 mb-8">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-primary rounded-full flex items-center justify-center text-white">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-bold text-lg text-primary mb-2">A Boa Notícia</h4>
                  <p className="text-foreground leading-relaxed">
                    Existe uma forma de fazer transformação que realmente funciona. Uma metodologia que respeita a complexidade dos sistemas vivos e gera mudanças profundas e sustentáveis.
                  </p>
                </div>
              </div>
            </div>

            <div className="text-center">
              <Link
                to="/insights/por-que-transformacoes-fracassam"
                className="inline-flex items-center gap-2 text-primary font-semibold hover:text-secondary transition-colors group"
              >
                <span>Entenda por que isso acontece e como resolver</span>
                <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Nossa Abordagem - As 4 Forças Vitais */}
      <section className="bg-gradient-to-br from-primary/5 to-secondary/5 py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary mb-4">
                As 4 Forças Vitais de Toda Organização
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Organismos prosperam quando suas forças essenciais estão equilibradas. 
                Nossa metodologia trabalha com as quatro dimensões que sustentam qualquer ecossistema organizacional.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
              {[
                {
                  icon: (
                    <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 18.657A8 8 0 016.343 7.343S7 9 9 10c0-2 .5-5 2.986-7C14 5 16.09 5.777 17.656 7.343A7.975 7.975 0 0120 13a7.975 7.975 0 01-2.343 5.657z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.879 16.121A3 3 0 1012.015 11L11 14H9c0 .768.293 1.536.879 2.121z" />
                    </svg>
                  ),
                  title: 'Alma',
                  subtitle: 'Identidade & Propósito',
                  description: 'O código genético da organização. Quem você é, por que existe, e como isso se manifesta em cada decisão.',
                  color: 'from-orange-100 to-orange-50'
                },
                {
                  icon: (
                    <svg className="w-8 h-8 text-secondary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  ),
                  title: 'Conexões',
                  subtitle: 'Relações & Fluxos',
                  description: 'A teia de relacionamentos internos e externos. Como informação, energia e valor circulam pelo sistema.',
                  color: 'from-blue-100 to-blue-50'
                },
                {
                  icon: (
                    <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                    </svg>
                  ),
                  title: 'Nutrição',
                  subtitle: 'Recursos & Processos',
                  description: 'Os sistemas que alimentam o organismo. Estruturas, práticas e tecnologias que sustentam a operação.',
                  color: 'from-green-100 to-green-50'
                },
                {
                  icon: (
                    <svg className="w-8 h-8 text-amber-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  ),
                  title: 'Raízes',
                  subtitle: 'Cultura & Valores',
                  description: 'O substrato invisível que sustenta tudo. Crenças, símbolos, rituais e memória coletiva.',
                  color: 'from-amber-100 to-amber-50'
                }
              ].map((forca, index) => (
                <div
                  key={index}
                  className="bg-white rounded-xl p-8 shadow-soft hover:shadow-medium transition-all group"
                >
                  <div className={`w-16 h-16 rounded-full bg-gradient-to-br ${forca.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                    {forca.icon}
                  </div>
                  <h3 className="text-2xl font-heading font-bold text-primary mb-1 group-hover:text-secondary transition-colors">
                    {forca.title}
                  </h3>
                  <p className="text-sm font-semibold text-secondary mb-3">{forca.subtitle}</p>
                  <p className="text-foreground leading-relaxed">
                    {forca.description}
                  </p>
                </div>
              ))}
            </div>

            <div className="text-center">
              <Link
                to="/filosofia"
                className="inline-block px-8 py-4 bg-primary text-primary-foreground rounded-lg font-semibold hover:bg-primary-dark transition-all shadow-lg"
              >
                Conheça Nossa Filosofia Completa
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Produtos - Serviços de Entrada */}
      <section className="bg-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary mb-4">
                Produtos de Impacto Imediato
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Para empresas que precisam de soluções específicas e tangíveis.
                Entregas focadas que fortalecem uma das forças vitais da sua organização.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              {[
                {
                  icon: (
                    <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
                    </svg>
                  ),
                  title: 'Decodificação da Alma',
                  subtitle: 'Branding Estratégico',
                  description: 'Identidade de marca que emerge da essência verdadeira da sua organização.',
                  deliverables: ['Brand DNA', 'Manifesto de marca', 'Guia visual', 'Tom de voz'],
                  path: '/produtos/branding',
                  color: 'from-orange-100 to-orange-50'
                },
                {
                  icon: (
                    <svg className="w-8 h-8 text-secondary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                    </svg>
                  ),
                  title: 'Ponte Digital',
                  subtitle: 'Website Estratégico',
                  description: 'Site que converte visitantes em clientes, refletindo sua identidade única.',
                  deliverables: ['Design responsivo', 'Copywriting estratégico', 'SEO otimizado', 'CMS fácil'],
                  path: '/produtos/website',
                  color: 'from-blue-100 to-blue-50'
                },
                {
                  icon: (
                    <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                    </svg>
                  ),
                  title: 'Inteligência Simbiótica',
                  subtitle: 'Automação com IA',
                  description: 'Sistemas inteligentes que potencializam sua operação sem desumanizar.',
                  deliverables: ['Análise de processos', 'Agentes de IA', 'Integração sistemas', 'Treinamento'],
                  path: '/produtos/ia',
                  color: 'from-green-100 to-green-50'
                }
              ].map((produto, index) => (
                <div
                  key={index}
                  className="bg-white border border-gray-200 rounded-xl overflow-hidden hover:border-primary hover:shadow-medium transition-all group"
                >
                  <div className="p-8">
                    <div className={`w-16 h-16 rounded-full bg-gradient-to-br ${produto.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                      {produto.icon}
                    </div>
                    <h3 className="text-xl font-heading font-bold text-primary mb-1 group-hover:text-secondary transition-colors">
                      {produto.title}
                    </h3>
                    <p className="text-sm font-semibold text-secondary mb-4">{produto.subtitle}</p>
                    <p className="text-foreground mb-6 text-sm leading-relaxed">
                      {produto.description}
                    </p>
                    <div className="space-y-2 mb-6">
                      {produto.deliverables.map((item, i) => (
                        <div key={i} className="flex items-start text-sm">
                          <svg className="w-4 h-4 text-secondary mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                          </svg>
                          <span className="text-muted-foreground">{item}</span>
                        </div>
                      ))}
                    </div>
                    <Link
                      to={produto.path}
                      className="inline-flex items-center gap-1 text-primary font-semibold hover:text-secondary transition-colors text-sm group/link"
                    >
                      <span>Ver detalhes completos</span>
                      <svg className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                      </svg>
                    </Link>
                  </div>
                </div>
              ))}
            </div>

            <div className="text-center">
              <Link
                to="/produtos"
                className="inline-block px-8 py-4 bg-primary text-primary-foreground rounded-lg font-semibold hover:bg-primary-dark transition-all shadow-lg"
              >
                Explore Todos os Produtos
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Jornadas - Como Trabalhamos */}
      <section className="bg-gradient-to-br from-primary/5 to-secondary/5 py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary mb-4">
                Jornadas de Transformação Profunda
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Três jornadas estratégicas para diferentes estágios de maturidade organizacional.
                Cada uma constrói sobre as forças vitais, gerando transformação sustentável.
              </p>
            </div>

            <div className="space-y-8 mb-12">
              {[
                {
                  number: '01',
                  title: 'Diagnóstico de DNA Organizacional',
                  duration: '4-6 semanas',
                  description: 'Mergulho antropológico profundo na sua cultura. Revelamos o código genético invisível que determina como sua organização realmente funciona.',
                  highlights: ['Mapeamento das 4 Forças Vitais', 'Análise de rituais e símbolos', 'Identificação de padrões inconscientes', 'Relatório estratégico executivo'],
                  path: '/jornadas/diagnostico',
                  color: 'bg-gradient-to-r from-primary/10 to-primary/5',
                  icon: '🔬'
                },
                {
                  number: '02',
                  title: 'Arquitetura de Ecossistema Organizacional',
                  duration: '3-6 meses',
                  description: 'Co-criação de estruturas, processos e práticas que cultivam prosperidade regenerativa. Do diagnóstico à implementação completa.',
                  highlights: ['Redesign de estruturas organizacionais', 'Rituais e práticas culturais', 'Governança participativa', 'Acompanhamento de implementação'],
                  path: '/jornadas/arquitetura',
                  color: 'bg-gradient-to-r from-secondary/10 to-secondary/5',
                  icon: '🏗️'
                },
                {
                  number: '03',
                  title: 'Ciclo de Cultivo Contínuo',
                  duration: 'Recorrente (12 meses)',
                  description: 'Guardiania estratégica permanente. Garantimos que seu investimento floresça ao longo do tempo com evolução adaptativa.',
                  highlights: ['Acompanhamento mensal estratégico', 'Ajustes evolutivos contínuos', 'Medição de vitalidade organizacional', 'Consultoria sob demanda'],
                  path: '/jornadas/cultivo',
                  color: 'bg-gradient-to-r from-primary/10 to-primary/5',
                  icon: '🌿'
                }
              ].map((jornada, index) => (
                <div
                  key={index}
                  className="bg-white border border-gray-200 rounded-xl overflow-hidden hover:border-primary hover:shadow-medium transition-all group"
                >
                  <div className="flex flex-col md:flex-row">
                    <div className={`${jornada.color} p-8 md:w-1/4 flex flex-col justify-center items-center border-r border-gray-200`}>
                      <span className="text-5xl mb-3">{jornada.icon}</span>
                      <span className="text-4xl font-bold text-primary/30 mb-2">{jornada.number}</span>
                      <span className="text-sm font-semibold text-muted-foreground">{jornada.duration}</span>
                    </div>
                    <div className="p-8 md:w-3/4">
                      <h3 className="text-2xl font-heading font-bold text-primary mb-3 group-hover:text-secondary transition-colors">
                        {jornada.title}
                      </h3>
                      <p className="text-foreground mb-6 leading-relaxed">
                        {jornada.description}
                      </p>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-6">
                        {jornada.highlights.map((highlight, i) => (
                          <div key={i} className="flex items-start">
                            <span className="text-secondary mr-2">✓</span>
                            <span className="text-sm text-muted-foreground">{highlight}</span>
                          </div>
                        ))}
                      </div>
                      <Link
                        to={jornada.path}
                        className="inline-flex items-center text-primary font-semibold hover:text-secondary transition-colors"
                      >
                        Ver detalhes completos →
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="text-center">
              <Link
                to="/jornadas"
                className="inline-block px-8 py-4 bg-primary text-primary-foreground rounded-lg font-semibold hover:bg-primary-dark transition-all shadow-lg"
              >
                Compare Todas as Jornadas
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Social Proof / Insights */}
      <section className="bg-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary mb-4">
                Insights que Ninguém Te Ensinou
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Conhecimento profundo sobre cultura organizacional, antropologia corporativa e transformação sustentável.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              {[
                {
                  category: 'Transformação',
                  title: 'Por Que 90% das Transformações Fracassam',
                  excerpt: 'E os 3 erros fatais que você está cometendo agora mesmo.',
                  readTime: '12 min',
                  path: '/insights/por-que-transformacoes-fracassam'
                },
                {
                  category: 'Diagnóstico',
                  title: 'O Diagnóstico Cultural Que Ninguém Te Ensinou',
                  excerpt: 'Como mapear as 4 camadas invisíveis da sua organização.',
                  readTime: '15 min',
                  path: '/insights/diagnostico-cultural-antropologico'
                },
                {
                  category: 'Cultura',
                  title: 'Arquetipos Organizacionais',
                  excerpt: 'Descubra qual é o DNA profundo da sua empresa.',
                  readTime: '10 min',
                  path: '/insights'
                }
              ].map((artigo, index) => (
                <Link
                  key={index}
                  to={artigo.path}
                  className="bg-white border border-gray-200 rounded-xl p-6 hover:border-primary hover:shadow-medium transition-all group"
                >
                  <span className="inline-block px-3 py-1 bg-primary/10 text-primary text-xs font-semibold rounded-full mb-3">
                    {artigo.category}
                  </span>
                  <h3 className="text-lg font-heading font-bold text-primary mb-2 group-hover:text-secondary transition-colors">
                    {artigo.title}
                  </h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    {artigo.excerpt}
                  </p>
                  <span className="text-xs text-secondary font-semibold">
                    {artigo.readTime} de leitura →
                  </span>
                </Link>
              ))}
            </div>

            <div className="text-center">
              <Link
                to="/insights"
                className="inline-flex items-center text-primary font-semibold hover:text-secondary transition-colors"
              >
                Ver todos os artigos →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Final - Conversão */}
      <section className="bg-gradient-to-br from-primary via-primary-dark to-primary text-primary-foreground py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-heading font-bold mb-6">
              Pronto para Cultivar uma Organização Verdadeiramente Viva?
            </h2>
            <p className="text-xl text-primary-foreground/90 mb-10 max-w-2xl mx-auto leading-relaxed">
              Vamos conversar sobre os desafios da sua organização e descobrir qual jornada ou produto pode transformar seu ecossistema.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link
                to="/contato"
                className="inline-block px-10 py-5 bg-secondary text-secondary-foreground rounded-lg font-bold hover:bg-secondary-dark transition-all shadow-xl text-lg w-full sm:w-auto"
              >
                Agende uma Conversa Estratégica
              </Link>
              <Link
                to="/produtos"
                className="inline-block px-10 py-5 bg-white text-primary rounded-lg font-bold hover:bg-gray-100 transition-all shadow-xl text-lg w-full sm:w-auto"
              >
                Descubra Seu Serviço Ideal
              </Link>
            </div>
            <p className="text-sm text-primary-foreground/70 mt-8">
              WhatsApp: +55 21 95952-7189 • Resposta em até 24h
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
