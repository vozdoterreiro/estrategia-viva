import React from 'react'
import { Link } from 'react-router-dom'
import Header from './Header'
import Footer from './Footer'

export default function ArticleLayout({ 
  title, 
  category, 
  date, 
  readTime, 
  excerpt,
  children 
}) {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="py-16">
        {/* Breadcrumb */}
        <section className="container mx-auto px-4 mb-8">
          <div className="max-w-4xl mx-auto">
            <nav className="flex items-center gap-2 text-sm text-muted-foreground">
              <Link to="/" className="hover:text-secondary">Início</Link>
              <span>→</span>
              <Link to="/insights" className="hover:text-secondary">Insights</Link>
              <span>→</span>
              <span className="text-foreground">{category}</span>
            </nav>
          </div>
        </section>

        {/* Header do Artigo */}
        <section className="container mx-auto px-4 mb-12">
          <div className="max-w-4xl mx-auto">
            <div className="mb-6">
              <span className="inline-block text-xs font-bold text-secondary uppercase tracking-wide bg-secondary/10 px-4 py-2 rounded-full mb-4">
                {category}
              </span>
              <h1 className="text-4xl md:text-5xl font-heading font-bold text-primary mb-6 leading-tight">
                {title}
              </h1>
              <p className="text-xl text-muted-foreground mb-6 leading-relaxed">
                {excerpt}
              </p>
              <div className="flex items-center gap-6 text-sm text-muted-foreground">
                <span>📅 {date}</span>
                <span>•</span>
                <span>⏱️ {readTime}</span>
              </div>
            </div>
          </div>
        </section>

        {/* Conteúdo do Artigo */}
        <section className="container mx-auto px-4 mb-16">
          <div className="max-w-4xl mx-auto">
            <article className="prose prose-lg max-w-none">
              {children}
            </article>
          </div>
        </section>

        {/* CTA Final */}
        <section className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="bg-gradient-to-r from-primary to-primary-dark text-white rounded-2xl p-12 text-center">
              <h2 className="text-2xl md:text-3xl font-heading font-bold mb-4">
                Gostou deste artigo?
              </h2>
              <p className="text-lg mb-8 opacity-90">
                Veja como podemos aplicar esses conceitos na prática dentro da sua organização
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/jornadas"
                  className="inline-block px-8 py-4 bg-secondary text-secondary-foreground rounded-lg font-semibold hover:bg-secondary-dark transition-all shadow-medium"
                >
                  Conhecer as Jornadas
                </Link>
                <Link
                  to="/contato"
                  className="inline-block px-8 py-4 bg-white/10 backdrop-blur text-white border-2 border-white/30 rounded-lg font-semibold hover:bg-white/20 transition-all"
                >
                  Agendar Conversa
                </Link>
              </div>
            </div>

            {/* Voltar para Insights */}
            <div className="text-center mt-12">
              <Link
                to="/insights"
                className="inline-flex items-center text-secondary hover:text-secondary-dark font-semibold"
              >
                ← Voltar para todos os artigos
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
