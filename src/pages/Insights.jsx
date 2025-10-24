import React from 'react'
import { Link } from 'react-router-dom'
import Header from '../components/Header'
import Footer from '../components/Footer'
import HeroSection from '../components/HeroSection'

export default function Insights() {
  const [activeFilter, setActiveFilter] = React.useState('Todos')
  
  const articles = [
    {
      title: 'Por Que 90% das Transformações Organizacionais Fracassam',
      excerpt: 'A maioria das organizações trata transformação como projeto, não como cultivo. Descubra os 3 erros fatais que condenam mudanças organizacionais e como evitá-los.',
      date: '20 Out 2024',
      readTime: '12 min',
      category: 'Transformação',
      slug: 'por-que-transformacoes-fracassam'
    },
    {
      title: 'O Diagnóstico Cultural Que Ninguém Te Ensinou a Fazer',
      excerpt: 'Pesquisas de clima tradicionais medem satisfação, não cultura. Aprenda a realizar um diagnóstico antropológico real que revela o DNA invisível da sua organização.',
      date: '15 Out 2024',
      readTime: '15 min',
      category: 'Métodos',
      slug: 'diagnostico-cultural-antropologico'
    },
    {
      title: 'Como Identificar o Arquétipo Cultural da Sua Organização',
      excerpt: 'Toda organização tem uma personalidade dominante: Inovador, Cuidador, Guerreiro, Sábio... Descubra qual é a sua e como isso influencia cada decisão estratégica.',
      date: '10 Out 2024',
      readTime: '10 min',
      category: 'Cultura',
      slug: 'arquetipos-organizacionais'
    },
    {
      title: 'Governança Participativa Sem Virar Bagunça: O Guia Prático',
      excerpt: 'Distribuir poder não significa criar caos. Entenda os 4 modelos de governança participativa que funcionam (com casos reais de implementação).',
      date: '5 Out 2024',
      readTime: '18 min',
      category: 'Governança',
      slug: 'governanca-participativa-pratica'
    },
    {
      title: 'O Custo Real de Uma Cultura Tóxica (Com Números)',
      excerpt: 'Turnover de 40%/ano, produtividade 30% menor, inovação paralisada. Calculamos o impacto financeiro de uma cultura empobrecida e como revertê-lo.',
      date: '28 Set 2024',
      readTime: '8 min',
      category: 'ROI Cultural',
      slug: 'custo-cultura-toxica'
    },
    {
      title: 'Da Hierarquia à Rede: Redesenhando Estruturas Organizacionais',
      excerpt: 'Estruturas circulares, holacráticas, em rede... O que funciona de verdade? Análise comparativa de 5 modelos com vantagens, armadilhas e cases reais.',
      date: '20 Set 2024',
      readTime: '20 min',
      category: 'Estrutura',
      slug: 'estruturas-organizacionais-comparadas'
    },
    {
      title: 'Rituais Organizacionais: Por Que Sua Equipe Precisa Deles',
      excerpt: 'Rituais não são "perda de tempo". São o tecido que conecta pessoas ao propósito. Aprenda a desenhar rituais que fortalecem cultura e geram pertencimento real.',
      date: '15 Set 2024',
      readTime: '11 min',
      category: 'Práticas',
      slug: 'poder-dos-rituais-organizacionais'
    },
    {
      title: 'Como Medir a Vitalidade da Sua Organização (Além do Financeiro)',
      excerpt: 'NPS, EBITDA, CAC, LTV... E a saúde cultural? Conheça as 12 métricas de vitalidade organizacional que preveem sustentabilidade de longo prazo.',
      date: '10 Set 2024',
      readTime: '14 min',
      category: 'Métricas',
      slug: 'metricas-vitalidade-organizacional'
    },
    {
      title: 'Propósito Organizacional: Manifesto ou Motor de Decisão?',
      excerpt: 'A diferença entre propósito decorativo (que fica na parede) e propósito operante (que guia cada decisão). Framework para ativar seu propósito na prática.',
      date: '5 Set 2024',
      readTime: '13 min',
      category: 'Propósito',
      slug: 'proposito-operante-vs-decorativo'
    }
  ]

  // Obter categorias únicas dos artigos
  const categories = ['Todos', ...new Set(articles.map(article => article.category))]
  
  // Filtrar artigos baseado na categoria ativa
  const filteredArticles = activeFilter === 'Todos' 
    ? articles.slice(1) 
    : articles.slice(1).filter(article => article.category === activeFilter)

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <HeroSection
        backgroundImage="/images/hero-insights.jpg"
        subtitle="Blog & Insights"
        title="Conhecimento Prático Sobre Organizações Vivas"
        description="Artigos profundos sobre cultura, transformação e estratégia organizacional. Sem fluff, apenas insights acionáveis."
        ctaPrimary={{
          text: 'Assinar Newsletter',
          href: '/contato'
        }}
      />
      
      <main className="py-16">
        {/* Destaque do Artigo Principal */}
        <section className="container mx-auto px-4 mb-16">
          <div className="max-w-6xl mx-auto">
            <Link 
              to="/insights/por-que-transformacoes-fracassam"
              className="bg-gradient-to-br from-primary to-primary-dark rounded-2xl overflow-hidden shadow-strong hover:shadow-xl transition-all group block"
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-0">
                <div className="p-12 text-white flex flex-col justify-center">
                  <span className="text-secondary text-sm font-semibold uppercase tracking-wide mb-3">
                    ⭐ Artigo em Destaque
                  </span>
                  <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4 group-hover:text-secondary transition-colors">
                    {articles[0].title}
                  </h2>
                  <p className="text-lg mb-6 opacity-90 leading-relaxed">
                    {articles[0].excerpt}
                  </p>
                  <div className="flex items-center gap-6 text-sm opacity-80 mb-6">
                    <span>{articles[0].date}</span>
                    <span>•</span>
                    <span>{articles[0].readTime}</span>
                    <span>•</span>
                    <span className="font-semibold text-secondary">{articles[0].category}</span>
                  </div>
                  <span className="inline-flex items-center text-secondary hover:text-secondary-dark font-semibold text-lg group-hover:translate-x-2 transition-transform">
                    Ler artigo completo →
                  </span>
                </div>
                <div className="bg-gradient-to-br from-secondary/20 to-primary/30 min-h-[300px] flex items-center justify-center">
                  <div className="text-8xl opacity-20">📊</div>
                </div>
              </div>
            </Link>
          </div>
        </section>

        {/* Grid de Artigos */}
        <section className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="flex items-center justify-between mb-10 flex-wrap gap-4">
              <h2 className="text-2xl md:text-3xl font-heading font-bold text-primary">
                Todos os Artigos
              </h2>
              <div className="flex gap-2 flex-wrap">
                {categories.map((category) => (
                  <button
                    key={category}
                    onClick={() => setActiveFilter(category)}
                    className={`px-4 py-2 text-sm font-semibold border-2 rounded-lg transition-all ${
                      activeFilter === category
                        ? 'text-secondary border-secondary bg-secondary/10'
                        : 'text-muted-foreground border-gray-300 hover:border-secondary hover:text-secondary'
                    }`}
                  >
                    {category}
                  </button>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
              {filteredArticles.map((article, index) => {
                // Mapeamento de slugs para rotas - todos os artigos têm páginas criadas
                const articleRoutes = {
                  'por-que-transformacoes-fracassam': '/insights/por-que-transformacoes-fracassam',
                  'diagnostico-cultural-antropologico': '/insights/diagnostico-cultural-antropologico',
                  'arquetipos-organizacionais': '/insights/arquetipos-organizacionais',
                  'governanca-participativa-pratica': '/insights/governanca-participativa-pratica',
                  'custo-cultura-toxica': '/insights/custo-cultura-toxica',
                  'estruturas-organizacionais-comparadas': '/insights/estruturas-organizacionais-comparadas',
                  'poder-dos-rituais-organizacionais': '/insights/poder-dos-rituais-organizacionais',
                  'metricas-vitalidade-organizacional': '/insights/metricas-vitalidade-organizacional',
                  'proposito-operante-vs-decorativo': '/insights/proposito-operante-vs-decorativo'
                }
                
                const articlePath = articleRoutes[article.slug] || '/insights'
                const isClickable = !!articleRoutes[article.slug]
                
                return (
                  <article
                    key={index}
                    className="bg-white rounded-xl shadow-soft overflow-hidden hover:shadow-strong transition-all group h-full flex flex-col"
                  >
                    <div className="p-6 flex flex-col flex-1">
                      <div className="flex items-center justify-between mb-4">
                        <span className="text-xs font-bold text-secondary uppercase tracking-wide bg-secondary/10 px-3 py-1 rounded-full">
                          {article.category}
                        </span>
                        <span className="text-sm text-muted-foreground">{article.readTime}</span>
                      </div>
                      
                      <h3 className="text-xl font-heading font-bold text-primary mb-3 group-hover:text-secondary transition-colors line-clamp-2">
                        {article.title}
                      </h3>
                      
                      <p className="text-foreground mb-4 leading-relaxed flex-1 line-clamp-3">
                        {article.excerpt}
                      </p>
                      
                      <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                        <span className="text-sm text-muted-foreground">{article.date}</span>
                        {isClickable ? (
                          <Link
                            to={articlePath}
                            className="text-secondary hover:text-secondary-dark font-semibold text-sm group-hover:translate-x-1 transition-transform inline-flex items-center"
                          >
                            Ler mais →
                          </Link>
                        ) : (
                          <span className="text-muted-foreground font-semibold text-sm inline-flex items-center opacity-50">
                            Em breve
                          </span>
                        )}
                      </div>
                    </div>
                  </article>
                )
              })}
            </div>

            {/* Mensagem quando não há artigos */}
            {filteredArticles.length === 0 && (
              <div className="text-center py-16">
                <p className="text-xl text-muted-foreground mb-4">
                  Nenhum artigo encontrado nesta categoria ainda.
                </p>
                <button
                  onClick={() => setActiveFilter('Todos')}
                  className="px-6 py-3 bg-secondary text-secondary-foreground rounded-lg font-semibold hover:bg-secondary-dark transition-all"
                >
                  Ver todos os artigos
                </button>
              </div>
            )}
          </div>
        </section>

        {/* Seção Newsletter */}
        <section className="container mx-auto px-4 py-16">
          <div className="max-w-4xl mx-auto">
            <div className="bg-gradient-to-r from-primary to-primary-dark text-white rounded-2xl p-12 text-center shadow-strong">
              <div className="text-5xl mb-6">📬</div>
              <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
                Receba Insights Semanais Sobre Organizações Vivas
              </h2>
              <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
                Toda semana enviamos 1 artigo profundo + 3 recursos práticos para transformar sua organização. 
                Zero spam, só conteúdo de valor.
              </p>
              <form className="max-w-md mx-auto flex flex-col sm:flex-row gap-4">
                <input
                  type="email"
                  placeholder="Seu melhor e-mail"
                  className="flex-1 px-6 py-4 rounded-lg text-foreground focus:outline-none focus:ring-2 focus:ring-secondary text-lg"
                />
                <button
                  type="submit"
                  className="px-8 py-4 bg-secondary text-secondary-foreground rounded-lg font-semibold hover:bg-secondary-dark transition-all shadow-medium whitespace-nowrap text-lg"
                >
                  Assinar Grátis
                </button>
              </form>
              <p className="text-sm opacity-70 mt-4">
                ✓ Sem spam &nbsp;&nbsp; ✓ Cancele quando quiser &nbsp;&nbsp; ✓ +2.500 leitores
              </p>
            </div>
          </div>
        </section>

        {/* CTA para Jornadas */}
        <section className="container mx-auto px-4 py-16">
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-2xl p-12 text-center shadow-soft border-2 border-secondary/20">
              <h2 className="text-2xl md:text-3xl font-heading font-bold text-primary mb-4">
                Quer Ir Além da Teoria?
              </h2>
              <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
                Conheça nossas Jornadas de Transformação e descubra como podemos aplicar esses conceitos 
                na prática dentro da sua organização.
              </p>
              <Link
                to="/jornadas"
                className="inline-block px-8 py-4 bg-secondary text-secondary-foreground rounded-lg font-semibold hover:bg-secondary-dark transition-all shadow-medium"
              >
                Conhecer as Jornadas
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
