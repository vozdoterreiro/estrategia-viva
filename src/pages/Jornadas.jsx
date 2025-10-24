import React from 'react'
import { Routes, Route, Link, useLocation } from 'react-router-dom'
import Header from '../components/Header'
import Footer from '../components/Footer'
import HeroSection from '../components/HeroSection'

function JornadasHome() {
  const jornadas = [
    {
      path: '/jornadas/diagnostico',
      title: 'Diagnóstico de DNA Organizacional',
      subtitle: 'Descubra Por Que Sua Organização Não Cresce',
      description: 'Você sente que algo está travando o crescimento mas não consegue identificar? Seus colaboradores não vestem a camisa? Cultura tóxica está corroendo os resultados? Nosso Diagnóstico revela os padrões invisíveis que determinam o destino da sua organização. É como um raio-X cultural completo que mostra exatamente onde intervir.',
      beneficios: ['Identifique pontos cegos que custam milhões', 'Descubra o DNA real da sua cultura (não o que está no papel)', 'Mapeie onde investir para máximo impacto', 'Receba roadmap claro de transformação'],
      icon: (
        <svg className="w-10 h-10 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
        </svg>
      ),
      duration: '4-6 semanas',
      preco: 'A partir de R$ 20.000',
      deliverables: ['Relatório de DNA Organizacional (60+ páginas)', 'Mapa das 4 Forças Vitais', 'Diagnóstico de vitalidade cultural', 'Identificação de padrões disfuncionais', 'Roadmap de transformação priorizado', 'Workshop de apresentação executiva'],
      color: 'from-purple-100 to-purple-50',
      ideal: ['Empresas com crescimento estagnado', 'Organizações com turnover alto (>20%/ano)', 'Culturas tóxicas ou desengajadas', 'Lideranças sem clareza estratégica'],
      urgencia: '1 vaga disponível em Nov/2025',
      resultados: '87% identificam causas-raiz de problemas crônicos'
    },
    {
      path: '/jornadas/arquitetura',
      title: 'Arquitetura de Ecossistema Organizacional',
      subtitle: 'Transforme Estrutura em Vantagem Competitiva',
      description: 'Sua estrutura organizacional foi desenhada há anos e nunca mudou? Processos engessados matam inovação? Decisões demoram semanas? Não otimize o velho modelo - redesenhe tudo. Co-criamos a arquitetura do futuro: estruturas fluidas, governança participativa e processos regenerativos que transformam sua organização em organismo vivo e próspero.',
      beneficios: ['Reduza tempo de decisão em até 70%', 'Aumente inovação com autonomia distribuída', 'Construa vantagem competitiva sistêmica', 'Implementação guiada do início ao fim'],
      icon: (
        <svg className="w-10 h-10 text-amber-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
        </svg>
      ),
      duration: '3-6 meses',
      preco: 'A partir de R$ 80.000',
      deliverables: ['Blueprint completo da nova arquitetura', 'Modelo de governança participativa', 'Redesign de estruturas e papéis', 'Rituais e práticas culturais', 'Plano de transição detalhado', 'Acompanhamento mensal de implementação', 'Treinamento de lideranças'],
      color: 'from-amber-100 to-amber-50',
      ideal: ['Organizações em rápido crescimento (50+ pessoas)', 'Empresas travadas por burocracia', 'Fusões e aquisições', 'Transformações estratégicas profundas'],
      urgencia: 'Apenas 1 projeto por trimestre',
      resultados: 'ROI médio de 340% em 18 meses'
    },
    {
      path: '/jornadas/cultivo',
      title: 'Ciclo de Cultivo Contínuo',
      subtitle: 'Garanta Que a Transformação Não Morra',
      description: '90% das transformações falham em 2 anos. Por quê? Falta cultivo contínuo. Você investiu milhões em consultorias que entregaram lindos relatórios empoeirados? Pare de desperdiçar dinheiro. Nosso Ciclo de Cultivo é guardiania estratégica permanente: acompanhamento mensal, ajustes evolutivos e medição de vitalidade para garantir que seu investimento floresça para sempre.',
      beneficios: ['Evite R$ 500k+ desperdiçados em consultorias inúteis', 'Mantenha transformação viva e adaptativa', 'Acesso permanente a especialistas sêniores', 'Evolução contínua guiada por dados'],
      icon: (
        <svg className="w-10 h-10 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      duration: 'Programa anual (renovável)',
      preco: 'A partir de R$ 25.000/mês',
      deliverables: ['Sessões mensais de acompanhamento estratégico', 'Medição trimestral de vitalidade organizacional', 'Ajustes e otimizações contínuas', 'Consultoria sob demanda (até 10h/mês)', 'Acesso prioritário a workshops e conteúdos', 'Comunidade exclusiva de lideranças'],
      color: 'from-green-100 to-green-50',
      ideal: ['Organizações pós-transformação', 'Empresas que querem evoluir continuamente', 'Lideranças comprometidas com excelência', 'Culturas de alta performance'],
      urgencia: 'Máximo 8 clientes simultâneos',
      resultados: '95% dos clientes renovam após primeiro ano'
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
              className="bg-white rounded-xl shadow-soft p-8 hover:shadow-strong transition-all duration-300 group flex flex-col relative overflow-hidden"
            >
              {/* Badge de urgência */}
              <div className="absolute top-4 right-4 bg-red-500 text-white text-xs font-bold px-3 py-1 rounded-full">
                {jornada.urgencia}
              </div>

              <div className={`w-16 h-16 rounded-full bg-gradient-to-br ${jornada.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                {jornada.icon}
              </div>
              
              <h3 className="text-2xl font-heading font-bold text-primary mb-2 group-hover:text-secondary transition-colors">
                {jornada.title}
              </h3>
              <p className="text-sm font-semibold text-secondary mb-4">{jornada.subtitle}</p>
              <p className="text-foreground mb-4 flex-1 leading-relaxed">{jornada.description}</p>
              
              {/* Benefícios principais */}
              <div className="bg-green-50 border-l-4 border-green-500 p-4 mb-6">
                <p className="text-xs font-bold text-green-700 mb-2">✓ BENEFÍCIOS TANGÍVEIS:</p>
                <ul className="space-y-1">
                  {jornada.beneficios.slice(0, 2).map((beneficio, idx) => (
                    <li key={idx} className="text-sm text-green-700 flex items-start">
                      <svg className="w-4 h-4 text-green-600 mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      <span className="font-semibold">{beneficio}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              <div className="mb-6 space-y-3">
                <div className="flex items-center justify-between text-sm">
                  <span className="text-muted-foreground font-semibold">Duração:</span>
                  <span className="font-bold text-foreground">{jornada.duration}</span>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-muted-foreground font-semibold">Investimento:</span>
                  <span className="font-bold text-secondary text-lg">{jornada.preco}</span>
                </div>
              </div>
              
              {/* Badge de prova social */}
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-3 mb-6">
                <p className="text-xs text-blue-700 font-semibold text-center">
                  {jornada.resultados}
                </p>
              </div>
              
              <div className="border-t border-gray-200 pt-4 mb-6">
                <p className="text-xs text-muted-foreground font-semibold mb-2">O QUE VOCÊ RECEBE:</p>
                <ul className="space-y-1">
                  {jornada.deliverables.slice(0, 4).map((item, idx) => (
                    <li key={idx} className="text-sm text-foreground flex items-start">
                      <svg className="w-4 h-4 text-secondary mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      <span>{item}</span>
                    </li>
                  ))}
                  {jornada.deliverables.length > 4 && (
                    <li className="text-sm text-secondary font-semibold ml-6">
                      + {jornada.deliverables.length - 4} entregas adicionais
                    </li>
                  )}
                </ul>
              </div>
              
              <span className="block w-full px-4 py-3 bg-secondary text-secondary-foreground rounded-lg font-semibold text-center group-hover:bg-secondary-dark transition-colors">
                Conhecer Esta Jornada →
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
          <Link to="/jornadas" className="text-secondary hover:text-secondary-dark mb-6 inline-block font-semibold">
            ← Voltar para Jornadas
          </Link>
          
          <div className="bg-gradient-to-br from-purple-600 to-purple-700 text-white rounded-2xl p-8 md:p-12 mb-8">
            <div className="flex flex-col md:flex-row items-center justify-between gap-6">
              <div className="flex-1">
                <div className="w-20 h-20 rounded-full bg-white/20 backdrop-blur flex items-center justify-center mb-4">
                  <svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                  </svg>
                </div>
                <h1 className="text-3xl md:text-5xl font-heading font-bold mb-4">
                  Diagnóstico de DNA Organizacional
                </h1>
                <p className="text-xl opacity-90 mb-4">
                  Descubra EXATAMENTE Por Que Sua Organização Não Cresce
                </p>
                <p className="text-lg opacity-80">
                  87% dos clientes identificam causas-raiz de problemas que custavam milhões
                </p>
              </div>
              <div className="text-center md:text-right">
                <div className="bg-white/10 backdrop-blur rounded-xl p-6">
                  <p className="text-sm opacity-80 mb-2">Investimento</p>
                  <p className="text-3xl font-bold mb-4">R$ 20.000</p>
                  <div className="flex items-center justify-center md:justify-end gap-2 text-sm opacity-80 mb-3">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span>4-6 semanas</span>
                  </div>
                  <div className="pt-3 border-t border-white/20">
                    <p className="text-xs opacity-90">✓ Relatório 60+ páginas</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Badge de urgência */}
          <div className="bg-purple-50 border-2 border-purple-500 rounded-lg p-4 text-center mb-8">
            <p className="text-purple-700 font-bold">
              🔬 Apenas 1 vaga disponível em Novembro/2025 • Processo altamente customizado
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
            <div className="bg-white rounded-xl shadow-soft p-8">
              <h2 className="text-2xl font-heading font-bold text-primary mb-4">
                Sintomas de uma Organização Doente
              </h2>
              <div className="space-y-4 text-foreground leading-relaxed">
                <p className="flex items-start gap-2">
                  <span className="text-red-500 font-bold flex-shrink-0">✗</span>
                  <span>Crescimento estagnado há +2 anos (mesmas métricas)</span>
                </p>
                <p className="flex items-start gap-2">
                  <span className="text-red-500 font-bold flex-shrink-0">✗</span>
                  <span>Turnover acima de 20%/ano (sangria de talentos)</span>
                </p>
                <p className="flex items-start gap-2">
                  <span className="text-red-500 font-bold flex-shrink-0">✗</span>
                  <span>Cultura tóxica ou desengajamento crônico</span>
                </p>
                <p className="flex items-start gap-2">
                  <span className="text-red-500 font-bold flex-shrink-0">✗</span>
                  <span>Lideranças sem clareza sobre próximos passos</span>
                </p>
                <p className="flex items-start gap-2">
                  <span className="text-red-500 font-bold flex-shrink-0">✗</span>
                  <span>Transformações anteriores falharam</span>
                </p>
                <div className="bg-purple-50 border-l-4 border-purple-500 p-4 mt-6">
                  <p className="font-bold text-purple-900">
                    ✓ Nossa solução: Raio-X cultural completo que revela padrões invisíveis custando milhões
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-soft p-8">
              <h3 className="text-xl font-heading font-bold text-secondary mb-4">
                O Que Você Vai Descobrir
              </h3>
              <ul className="space-y-3">
                {[
                  'Pontos cegos que travam crescimento',
                  'DNA real da cultura (não o discurso oficial)',
                  'Estruturas de poder ocultas',
                  'Padrões disfuncionais repetitivos',
                  'Potenciais não explorados',
                  'Roadmap claro de onde investir'
                ].map((item, index) => (
                  <li key={index} className="flex items-start text-foreground">
                    <svg className="w-5 h-5 text-green-600 mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span className="font-semibold">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-soft p-8 mb-8">
            <h2 className="text-2xl font-heading font-bold text-primary mb-6">
              Metodologia em 4 Fases
            </h2>
            <div className="space-y-6">
              {[
                {
                  fase: 1,
                  titulo: 'Imersão Antropológica',
                  duracao: 'Semana 1-2',
                  descricao: 'Entrevistas em profundidade com 15-25 pessoas (lideranças, colaboradores, stakeholders). Observação participante de rituais e dinâmicas. Análise documental.'
                },
                {
                  fase: 2,
                  titulo: 'Mapeamento das 4 Forças Vitais',
                  duracao: 'Semana 2-3',
                  descricao: 'Decodificação de Alma (propósito), Ponte (estruturas), Raízes (cultura) e Seiva (processos). Identificação de padrões inconscientes.'
                },
                {
                  fase: 3,
                  titulo: 'Análise e Síntese',
                  duracao: 'Semana 4-5',
                  descricao: 'Cruzamento de dados qualitativos. Identificação de pontos de alavancagem. Criação do relatório executivo (60+ páginas).'
                },
                {
                  fase: 4,
                  titulo: 'Apresentação Estratégica',
                  duracao: 'Semana 6',
                  descricao: 'Workshop de 4 horas com lideranças. Apresentação de descobertas. Co-criação de roadmap priorizado. Definição de próximos passos.'
                }
              ].map((etapa, index) => (
                <div key={index} className="flex gap-4 group">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 rounded-full bg-purple-600 text-white font-bold flex items-center justify-center group-hover:scale-110 transition-transform">
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

          <div className="bg-gradient-to-r from-purple-600 to-purple-700 text-white rounded-xl p-8 md:p-12 text-center mb-8">
            <h3 className="text-2xl md:text-3xl font-heading font-bold mb-4">
              Entregáveis do Diagnóstico
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto mt-8">
              <div className="bg-white/10 backdrop-blur rounded-lg p-6">
                <div className="text-3xl mb-3">📊</div>
                <p className="font-bold mb-2">Relatório Executivo</p>
                <p className="text-sm opacity-90">60+ páginas com descobertas, dados e recomendações</p>
              </div>
              <div className="bg-white/10 backdrop-blur rounded-lg p-6">
                <div className="text-3xl mb-3">🗺️</div>
                <p className="font-bold mb-2">Mapa de DNA</p>
                <p className="text-sm opacity-90">Visualização das 4 Forças Vitais e interdependências</p>
              </div>
              <div className="bg-white/10 backdrop-blur rounded-lg p-6">
                <div className="text-3xl mb-3">🎯</div>
                <p className="font-bold mb-2">Roadmap Estratégico</p>
                <p className="text-sm opacity-90">Plano priorizado de onde intervir para máximo impacto</p>
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
              Solicitar Orçamento via WhatsApp
            </a>
            <Link
              to="/contato"
              className="inline-block px-8 py-4 bg-secondary text-secondary-foreground rounded-lg font-semibold hover:bg-secondary-dark transition-all shadow-medium text-center"
            >
              Solicitar Proposta Detalhada
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
