import React, { useState } from 'react'
import { Link } from 'react-router-dom'

export default function Footer() {
  const currentYear = new Date().getFullYear()
  const [email, setEmail] = useState('')
  const [status, setStatus] = useState('')

  const handleNewsletterSubmit = async (e) => {
    e.preventDefault()
    
    // Temporariamente desabilitado (sem backend)
    setStatus('success')
    setEmail('')
    setTimeout(() => setStatus(''), 3000)
    
    // TODO: Reativar quando backend estiver em produção
    /*
    try {
      const response = await fetch('/api/newsletter', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ 
          email,
          timestamp: new Date().toISOString()
        }),
      })

      if (response.ok) {
        setStatus('success')
        setEmail('')
        setTimeout(() => setStatus(''), 3000)
      } else {
        setStatus('error')
      }
    } catch (error) {
      setStatus('error')
    }
    */
  }

  return (
    <footer className="bg-primary text-primary-foreground py-8 md:py-12 mt-8 md:mt-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 md:gap-8 mb-6 md:mb-8">
          {/* Logo e Descrição */}
          <div className="md:col-span-2">
            <img 
              src="/logo.png" 
              alt="Estratégia Viva" 
              className="h-10 md:h-12 w-auto mb-3 md:mb-4 brightness-0 invert"
            />
            <p className="text-sm md:text-base text-primary-foreground/80 mb-3 md:mb-4">
              Arquitetamos Ecossistemas Organizacionais Vivos
            </p>
            <p className="text-xs md:text-sm text-primary-foreground/60 mb-4 md:mb-6">
              Transformamos organizações em organismos prósperos, resilientes e regenerativos.
            </p>
            
            {/* Newsletter */}
            <div className="mt-4 md:mt-6">
              <h3 className="font-heading font-semibold mb-2 md:mb-3 text-sm md:text-base text-primary-foreground">
                Newsletter
              </h3>
              <p className="text-xs md:text-sm text-primary-foreground/70 mb-2 md:mb-3">
                Receba insights sobre cultura organizacional e transformação
              </p>
              <form onSubmit={handleNewsletterSubmit} className="flex flex-col sm:flex-row gap-2">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Seu melhor e-mail"
                  required
                  className="flex-1 px-3 md:px-4 py-2 text-sm md:text-base rounded-lg bg-white/10 border border-white/20 text-primary-foreground placeholder-primary-foreground/50 focus:outline-none focus:ring-2 focus:ring-secondary"
                />
                <button
                  type="submit"
                  className="px-4 md:px-6 py-2 bg-secondary text-secondary-foreground font-semibold rounded-lg hover:bg-secondary-dark transition-colors whitespace-nowrap text-sm md:text-base"
                >
                  Inscrever
                </button>
              </form>
              {status === 'success' && (
                <p className="text-xs md:text-sm text-green-300 mt-2">✓ Inscrito com sucesso!</p>
              )}
              {status === 'error' && (
                <p className="text-sm text-red-300 mt-2">Erro ao inscrever. Tente novamente.</p>
              )}
            </div>
          </div>

          {/* Links Rápidos */}
          <div>
            <h3 className="font-heading font-semibold mb-4">Navegação</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link 
                  to="/filosofia" 
                  className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                >
                  Nossa Filosofia
                </Link>
              </li>
              <li>
                <Link 
                  to="/jornadas" 
                  className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                >
                  As Jornadas
                </Link>
              </li>
              <li>
                <Link 
                  to="/produtos" 
                  className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                >
                  Produtos
                </Link>
              </li>
              <li>
                <Link 
                  to="/estudo-de-caso" 
                  className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                >
                  Estudo de Caso
                </Link>
              </li>
              <li>
                <Link 
                  to="/insights" 
                  className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                >
                  Insights
                </Link>
              </li>
            </ul>
          </div>

          {/* Jornadas */}
          <div>
            <h3 className="font-heading font-semibold mb-4">Jornadas</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link 
                  to="/jornadas/diagnostico" 
                  className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                >
                  Diagnóstico de DNA
                </Link>
              </li>
              <li>
                <Link 
                  to="/jornadas/arquitetura" 
                  className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                >
                  Arquitetura de Ecossistema
                </Link>
              </li>
              <li>
                <Link 
                  to="/jornadas/cultivo" 
                  className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                >
                  Ciclo de Cultivo
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Contato */}
        <div className="border-t border-primary-foreground/10 pt-8 mb-8">
          <h3 className="font-heading font-semibold mb-4">Contato</h3>
          <ul className="space-y-2 text-sm text-primary-foreground/80">
            <li>contato@estrategiaviva.com.br</li>
            <li>
              <a 
                href="https://wa.me/5521959527189?text=Olá!%20Gostaria%20de%20conhecer%20mais%20sobre%20a%20Estratégia%20Viva" 
                target="_blank" 
                rel="noopener noreferrer"
                className="hover:text-primary-foreground transition-colors"
              >
                WhatsApp: (21) 99051-9733
              </a>
            </li>
          </ul>
        </div>

        {/* Copyright */}
        <div className="border-t border-primary-foreground/10 pt-8 text-center">
          <p className="text-sm text-primary-foreground/60">
            © {currentYear} Estratégia Viva. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  )
}
