import React from 'react'
import { Link } from 'react-router-dom'
import Header from '../components/Header'
import Footer from '../components/Footer'
import HeroSection from '../components/HeroSection'

export default function Filosofia() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <HeroSection
        backgroundImage="/images/hero-filosofia.jpg"
        subtitle="Nossa Filosofia"
        title="Organismos florescem. Máquinas se desgastam."
        description="A prosperidade de uma organização depende do equilíbrio entre quatro forças vitais. Nosso trabalho é tecer essas forças em um sistema coeso, sustentável e autônomo."
        ctaPrimary={{
          text: 'Conheça Nossas Jornadas',
          href: '/jornadas'
        }}
      />
      
      <main className="py-16">
        {/* Introdução */}
        <section className="container mx-auto px-4 mb-20">
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-2xl shadow-soft p-8 md:p-12">
              <p className="text-2xl text-foreground leading-relaxed mb-6">
                Uma <strong className="text-secondary">máquina</strong> pode ser eficiente, mas apenas um{' '}
                <strong className="text-secondary">organismo</strong> pode ser verdadeiramente próspero.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                Organismos se <strong>adaptam</strong>, <strong>regeneram</strong> e <strong>evoluem</strong>. 
                Máquinas quebram, enferrujam e se tornam obsoletas. Esta não é apenas uma metáfora poética — 
                é uma distinção fundamental que determina o destino de toda organização.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Quando você trata sua organização como máquina, otimiza peças isoladas, implementa processos 
                rígidos e ignora o tecido vivo que conecta as pessoas. O resultado? Cultura empobrecida, 
                turnover alto, inovação paralisada e crescimento insustentável.
              </p>
            </div>
          </div>
        </section>

        {/* As 4 Forças Vitais */}
        <section className="bg-gradient-to-b from-white to-background py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-3xl md:text-5xl font-heading font-bold text-primary mb-6">
                  As Quatro Forças Vitais
                </h2>
                <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                  Todo organismo próspero mantém o equilíbrio entre quatro forças essenciais. 
                  Nosso trabalho é tecer essas forças em um sistema coeso, sustentável e autônomo.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
                {[
                  {
                    icon: '🎭',
                    title: 'Alma',
                    subtitle: 'Propósito e Identidade Cultural',
                    description: 'A essência inegociável da organização. Seus valores profundos, arquétipo dominante e narrativa de origem. É o que define "quem somos" além do que fazemos.',
                    examples: ['Propósito autêntico', 'Valores vividos (não apenas declarados)', 'Arquétipo cultural', 'Narrativa de origem']
                  },
                  {
                    icon: '🕸️',
                    title: 'Conexões',
                    subtitle: 'Tecido Nervoso Social e Digital',
                    description: 'As redes de relacionamento que permitem fluxo de informação, confiança e colaboração. Inclui comunicação interna, externa e os sistemas que conectam as pessoas.',
                    examples: ['Canais de comunicação efetivos', 'Cultura de colaboração', 'Presença digital estratégica', 'Rituais de conexão']
                  },
                  {
                    icon: '🌊',
                    title: 'Nutrição',
                    subtitle: 'Fluxos de Valor e Sustentabilidade',
                    description: 'Os recursos que alimentam o organismo. Dinheiro, conhecimento, energia das pessoas. Garante que a organização pode crescer sem se esgotar.',
                    examples: ['Modelo de negócio sustentável', 'Estratégias de captação', 'Gestão financeira saudável', 'Cuidado com as pessoas']
                  },
                  {
                    icon: '🌳',
                    title: 'Raízes',
                    subtitle: 'Cultura Profunda e Governança',
                    description: 'As estruturas invisíveis que dão estabilidade. Processos, rituais, modelos de tomada de decisão e distribuição de poder que permitem crescimento sem caos.',
                    examples: ['Governança participativa', 'Processos regenerativos', 'Rituais organizacionais', 'Frameworks de decisão']
                  }
                ].map((forca, index) => (
                  <div key={index} className="bg-white rounded-xl shadow-soft p-8 hover:shadow-strong transition-all group">
                    <div className="text-6xl mb-4 group-hover:scale-110 transition-transform">
                      {forca.icon}
                    </div>
                    <h3 className="text-2xl font-heading font-bold text-primary mb-2 group-hover:text-secondary transition-colors">
                      {forca.title}
                    </h3>
                    <p className="text-sm font-semibold text-secondary mb-4 uppercase tracking-wide">
                      {forca.subtitle}
                    </p>
                    <p className="text-foreground mb-6 leading-relaxed">
                      {forca.description}
                    </p>
                    <div className="border-t border-gray-200 pt-4">
                      <p className="text-xs font-semibold text-muted-foreground mb-3">ELEMENTOS-CHAVE:</p>
                      <ul className="space-y-2">
                        {forca.examples.map((example, idx) => (
                          <li key={idx} className="text-sm text-foreground flex items-start">
                            <span className="text-secondary mr-2 flex-shrink-0">•</span>
                            <span>{example}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* O Problema que Resolvemos */}
        <section className="container mx-auto px-4 py-20">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary mb-8 text-center">
              O Que Acontece Quando Essas Forças Estão Desequilibradas?
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
              {[
                {
                  problema: 'Alma fraca ou ausente',
                  consequencias: ['Falta de direção clara', 'Decisões inconsistentes', 'Dificuldade em atrair/reter talentos', 'Cultura tóxica ou superficial']
                },
                {
                  problema: 'Conexões frágeis',
                  consequencias: ['Silos departamentais', 'Comunicação truncada', 'Falta de alinhamento', 'Retrabalho constante']
                },
                {
                  problema: 'Nutrição inadequada',
                  consequencias: ['Crise de caixa recorrente', 'Burnout generalizado', 'Crescimento não sustentável', 'Dependência de poucos clientes']
                },
                {
                  problema: 'Raízes superficiais',
                  consequencias: ['Processos caóticos', 'Decisões centralizadas', 'Falta de autonomia', 'Cultura do "apagar incêndios"']
                }
              ].map((item, index) => (
                <div key={index} className="bg-red-50 border-l-4 border-red-500 rounded-lg p-6">
                  <h4 className="font-heading font-bold text-red-900 mb-3">
                    ⚠️ {item.problema}
                  </h4>
                  <ul className="space-y-2">
                    {item.consequencias.map((consequencia, idx) => (
                      <li key={idx} className="text-sm text-red-800 flex items-start">
                        <span className="mr-2">→</span>
                        <span>{consequencia}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Nossa Abordagem */}
        <section className="bg-white py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary mb-8 text-center">
                Nossa Abordagem: Arquitetura de Ecossistemas Vivos
              </h2>
              
              <div className="space-y-8 mb-12">
                <div className="bg-gradient-to-r from-primary/5 to-secondary/5 rounded-xl p-8">
                  <h3 className="text-2xl font-heading font-bold text-primary mb-4">
                    1. Escuta Profunda (Antropologia Organizacional)
                  </h3>
                  <p className="text-foreground leading-relaxed mb-4">
                    Não fazemos diagnósticos superficiais. Realizamos imersões antropológicas para compreender 
                    a cultura real (não a declarada), os padrões invisíveis e o DNA organizacional autêntico.
                  </p>
                  <p className="text-sm text-muted-foreground italic">
                    → Entrevistas profundas, observação participante, análise narrativa
                  </p>
                </div>

                <div className="bg-gradient-to-r from-secondary/5 to-primary/5 rounded-xl p-8">
                  <h3 className="text-2xl font-heading font-bold text-primary mb-4">
                    2. Co-Criação Estratégica
                  </h3>
                  <p className="text-foreground leading-relaxed mb-4">
                    Não entregamos planos prontos. Facilitamos processos de co-criação onde sua equipe 
                    constrói coletivamente a estratégia, garantindo apropriação real e execução consistente.
                  </p>
                  <p className="text-sm text-muted-foreground italic">
                    → Workshops participativos, facilitação visual, design thinking
                  </p>
                </div>

                <div className="bg-gradient-to-r from-primary/5 to-secondary/5 rounded-xl p-8">
                  <h3 className="text-2xl font-heading font-bold text-primary mb-4">
                    3. Arquitetura Sistêmica
                  </h3>
                  <p className="text-foreground leading-relaxed mb-4">
                    Integramos as 4 Forças Vitais em um sistema coeso. Cada decisão estratégica considera 
                    impactos culturais, operacionais e financeiros simultaneamente.
                  </p>
                  <p className="text-sm text-muted-foreground italic">
                    → Blueprint integrado, teoria de sistemas, pensamento complexo
                  </p>
                </div>

                <div className="bg-gradient-to-r from-secondary/5 to-primary/5 rounded-xl p-8">
                  <h3 className="text-2xl font-heading font-bold text-primary mb-4">
                    4. Cultivo Contínuo
                  </h3>
                  <p className="text-foreground leading-relaxed mb-4">
                    Organismos vivos precisam de cuidado constante. Oferecemos acompanhamento estratégico 
                    de longo prazo para garantir que a transformação se sustenta e evolui.
                  </p>
                  <p className="text-sm text-muted-foreground italic">
                    → Ciclos de aprendizado, ajustes estratégicos, parceria de longo prazo
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Final */}
        <section className="container mx-auto px-4 py-16">
          <div className="max-w-4xl mx-auto">
            <div className="bg-gradient-to-r from-primary to-primary-dark text-white rounded-2xl p-12 text-center shadow-strong">
              <h2 className="text-3xl md:text-4xl font-heading font-bold mb-6">
                Pronto para Transformar Sua Organização em um Organismo Próspero?
              </h2>
              <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
                Conheça nossas Jornadas de Transformação e descubra como podemos tecer 
                as 4 Forças Vitais na sua organização.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/jornadas"
                  className="inline-block px-8 py-4 bg-secondary text-secondary-foreground rounded-lg font-semibold hover:bg-secondary-dark transition-all shadow-strong hover:shadow-xl transform hover:scale-105"
                >
                  Conhecer as Jornadas
                </Link>
                <Link
                  to="/contato"
                  className="inline-block px-8 py-4 bg-white/10 backdrop-blur text-white border-2 border-white/30 rounded-lg font-semibold hover:bg-white/20 transition-all shadow-medium"
                >
                  Agendar Conversa
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
