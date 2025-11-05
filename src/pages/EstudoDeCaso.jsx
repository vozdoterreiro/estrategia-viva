import React from 'react'
import { Link } from 'react-router-dom'
import Header from '../components/Header'
import Footer from '../components/Footer'
import HeroSection from '../components/HeroSection'

export default function EstudoDeCaso() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <HeroSection
        backgroundImage="/images/case/hero-vdt.jpeg"
        subtitle="Caso de Sucesso"
        title="Voz do Terreiro: Do Propósito à Presença Digital"
        description="Como uma organização cultural ancestral ganhou voz no mundo digital sem perder sua essência."
        ctaPrimary={{
          text: 'Transforme Sua Organização',
          href: '/contato'
        }}
      />
      
      <main className="py-16">
        <section className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            
            {/* Logo e Intro */}
            <div className="text-center mb-12">
              <img 
                src="/images/case/logo-vdt.jpeg" 
                alt="Voz do Terreiro Logo" 
                className="w-48 h-48 object-contain mx-auto mb-6 rounded-xl shadow-soft"
              />
              <h2 className="text-3xl font-heading font-bold text-primary mb-4">
                Voz do Terreiro
              </h2>
              <p className="text-xl text-muted-foreground">
                Preservando culturas ancestrais através da inovação digital
              </p>
            </div>

            <div className="bg-white rounded-lg shadow-soft p-8 mb-8">
              <div className="mb-8">
                <h3 className="text-xl font-heading font-bold text-secondary mb-3">
                  O Contexto
                </h3>
                <p className="text-foreground leading-relaxed mb-4">
                  A <strong>Voz do Terreiro</strong> é uma organização cultural dedicada à preservação, 
                  valorização e difusão das tradições de matriz africana e indígena no Brasil. 
                  Com uma missão profundamente enraizada na ancestralidade, enfrentavam o desafio 
                  de expandir seu alcance sem perder a autenticidade.
                </p>
                <p className="text-foreground leading-relaxed">
                  O desafio era claro: como tornar visível no mundo digital uma organização 
                  que vive da oralidade, dos rituais presenciais e da transmissão direta de 
                  saberes ancestrais?
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                <div className="bg-red-50 border-l-4 border-red-500 p-4">
                  <h4 className="font-bold text-red-900 mb-2">Desafios</h4>
                  <ul className="text-sm text-red-800 space-y-1">
                    <li>• Invisibilidade digital</li>
                    <li>• Identidade visual inconsistente</li>
                    <li>• Comunicação fragmentada</li>
                    <li>• Baixo alcance nas redes</li>
                  </ul>
                </div>
                <div className="bg-purple-50 border-l-4 border-purple-500 p-4">
                  <h4 className="font-bold text-purple-900 mb-2">Soluções</h4>
                  <ul className="text-sm text-purple-800 space-y-1">
                    <li>• Decodificação da Alma</li>
                    <li>• Identidade Visual Ancestral</li>
                    <li>• Ponte Digital Estratégica</li>
                    <li>• Narrativa de Impacto</li>
                  </ul>
                </div>
                <div className="bg-green-50 border-l-4 border-green-500 p-4">
                  <h4 className="font-bold text-green-900 mb-2">Resultados</h4>
                  <ul className="text-sm text-green-800 space-y-1">
                    <li>• 300% alcance orgânico</li>
                    <li>• Identidade visual coesa</li>
                    <li>• Presença digital autêntica</li>
                    <li>• Eventos com 200+ pessoas</li>
                  </ul>
                </div>
              </div>

              <div className="mb-8">
                <h3 className="text-xl font-heading font-bold text-secondary mb-3">
                  A Jornada de Transformação
                </h3>
                <div className="space-y-4">
                  <div className="flex">
                    <div className="flex-shrink-0 w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center font-bold mr-4">
                      1
                    </div>
                    <div>
                      <h4 className="font-bold text-foreground mb-1">Decodificação da Alma (4 semanas)</h4>
                      <p className="text-muted-foreground">
                        Imersão profunda na missão, valores e arquétipos da organização. 
                        Descobrimos que a "Voz" não era apenas comunicação, mas a ancestralidade 
                        falando através do presente.
                      </p>
                    </div>
                  </div>
                  <div className="flex">
                    <div className="flex-shrink-0 w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center font-bold mr-4">
                      2
                    </div>
                    <div>
                      <h4 className="font-bold text-foreground mb-1">Identidade Visual Ancestral (3 semanas)</h4>
                      <p className="text-muted-foreground">
                        Criação de identidade visual que honra os símbolos ancestrais: 
                        paleta de cores inspirada na terra, água e fogo sagrado; tipografia 
                        que remete à força e delicadeza das tradições orais.
                      </p>
                    </div>
                  </div>
                  <div className="flex">
                    <div className="flex-shrink-0 w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center font-bold mr-4">
                      3
                    </div>
                    <div>
                      <h4 className="font-bold text-foreground mb-1">Ponte Digital (6 semanas)</h4>
                      <p className="text-muted-foreground">
                        Desenvolvimento de presença digital estratégica: website institucional, 
                        estratégia de redes sociais e sistema de captação de apoiadores. Cada 
                        elemento digital projetado para amplificar, não substituir, o sagrado.
                      </p>
                    </div>
                  </div>
                  <div className="flex">
                    <div className="flex-shrink-0 w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center font-bold mr-4">
                      4
                    </div>
                    <div>
                      <h4 className="font-bold text-foreground mb-1">Ativação e Impacto (Contínuo)</h4>
                      <p className="text-muted-foreground">
                        Lançamento de eventos presenciais e digitais que conectam tradição e 
                        inovação. Criação de conteúdo educativo que preserva e difunde saberes 
                        ancestrais para novas gerações.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Galeria de Imagens dos Eventos */}
              <div className="mb-8">
                <h3 className="text-xl font-heading font-bold text-secondary mb-4">
                  Eventos e Ativações
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <img 
                    src="/images/case/evento-1.jpeg" 
                    alt="Evento Voz do Terreiro 1" 
                    className="w-full h-64 object-cover rounded-lg shadow-medium hover:shadow-large transition-shadow"
                  />
                  <img 
                    src="/images/case/evento-2.jpeg" 
                    alt="Evento Voz do Terreiro 2" 
                    className="w-full h-64 object-cover rounded-lg shadow-medium hover:shadow-large transition-shadow"
                  />
                  <img 
                    src="/images/case/evento-3.jpeg" 
                    alt="Evento Voz do Terreiro 3" 
                    className="w-full h-64 object-cover rounded-lg shadow-medium hover:shadow-large transition-shadow"
                  />
                </div>
                <p className="text-sm text-muted-foreground text-center mt-4">
                  Eventos presenciais com mais de 200 participantes, celebrando ancestralidade e cultura viva
                </p>
              </div>

              <div className="bg-gradient-to-r from-primary to-primary-dark text-white rounded-lg p-8">
                <h3 className="text-2xl font-heading font-bold mb-4">
                  O Que Aprendemos
                </h3>
                <blockquote className="text-lg leading-relaxed mb-4">
                  "A transformação digital não precisa descaracterizar a tradição. 
                  Pelo contrário: quando feita com profundidade e respeito, a tecnologia 
                  pode ser uma aliada poderosa na preservação e difusão de culturas ancestrais."
                </blockquote>
                <p className="mt-4 opacity-90">
                  A Voz do Terreiro provou que é possível honrar o passado enquanto se 
                  constrói o futuro. Seu crescimento não veio de compromissos, mas de 
                  autenticidade amplificada.
                </p>
              </div>
            </div>

            <div className="text-center">
              <p className="text-lg text-muted-foreground mb-6">
                Quer transformar sua organização também?
              </p>
              <Link
                to="/contato"
                className="inline-block px-8 py-4 bg-secondary text-secondary-foreground rounded-lg font-semibold hover:bg-secondary-dark transition-all shadow-medium"
              >
                Agende uma Conversa
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
