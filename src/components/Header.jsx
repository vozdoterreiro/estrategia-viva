import React, { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const location = useLocation()
  
  const isActive = (path) => location.pathname === path || location.pathname.startsWith(path)
  
  const navItems = [
    { path: '/filosofia', label: 'Filosofia' },
    { path: '/jornadas', label: 'Jornadas' },
    { path: '/produtos', label: 'Produtos' },
    { path: '/estudo-de-caso', label: 'Estudo de Caso' },
    { path: '/insights', label: 'Insights' },
    { path: '/contato', label: 'Contato' },
  ]

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        {/* Logo */}
        <Link to="/" className="flex items-center space-x-3">
          <img 
            src="/logo.png" 
            alt="Estratégia Viva" 
            className="h-10 w-auto"
          />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-6">
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={`text-sm font-medium transition-colors hover:text-primary ${
                isActive(item.path) ? 'text-primary' : 'text-foreground/60'
              }`}
            >
              {item.label}
            </Link>
          ))}
          <Link
            to="/contato"
            className="ml-4 px-4 py-2 bg-secondary text-secondary-foreground rounded-lg font-semibold hover:bg-secondary-dark transition-all"
          >
            Agende uma Conversa
          </Link>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
        >
          <svg
            className="h-6 w-6"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            {mobileMenuOpen ? (
              <path d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t bg-background">
          <nav className="container mx-auto px-4 py-4 flex flex-col space-y-3">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`text-sm font-medium transition-colors hover:text-primary py-2 ${
                  isActive(item.path) ? 'text-primary' : 'text-foreground/60'
                }`}
                onClick={() => setMobileMenuOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <Link
              to="/contato"
              className="mt-4 px-4 py-2 bg-secondary text-secondary-foreground rounded-lg font-semibold hover:bg-secondary-dark transition-all text-center"
              onClick={() => setMobileMenuOpen(false)}
            >
              Agende uma Conversa
            </Link>
          </nav>
        </div>
      )}
    </header>
  )
}
