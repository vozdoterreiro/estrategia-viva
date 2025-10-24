import React from 'react'
import { useNavigate } from 'react-router-dom'

export default function Dashboard() {
  const navigate = useNavigate()

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4">
      <div className="max-w-md w-full">
        <div className="bg-white rounded-xl shadow-lg p-8 text-center">
          <div className="text-6xl mb-4">🚧</div>
          <h1 className="text-3xl font-heading font-bold text-primary mb-4">
            Dashboard em Manutenção
          </h1>
          <p className="text-muted-foreground mb-6">
            O painel administrativo está temporariamente indisponível. 
            Estamos trabalhando para trazer esta funcionalidade em breve.
          </p>
          <button
            onClick={() => navigate('/')}
            className="bg-primary text-primary-foreground px-6 py-3 rounded-lg font-semibold hover:bg-primary/90 transition-colors"
          >
            Voltar para Home
          </button>
        </div>
      </div>
    </div>
  )
}
