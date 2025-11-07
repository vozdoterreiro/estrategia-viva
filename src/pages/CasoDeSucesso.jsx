import React from 'react'
import { Link } from 'react-router-dom'
import Header from '../components/Header'
import Footer from '../components/Footer'
import HeroSection from '../components/HeroSection'

export default function CasoDeSucesso() {
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
              <a 
                href="https://vozdoterreiro.com.br/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-block hover:opacity-80 transition-opacity"
              >
                <img 
                  src="/images/case/logo-vdt.png" 
                  alt="Voz do Terreiro Logo" 
                  className="w-64 h-auto object-contain mx-auto mb-4"
                />
              </a>
              <p className="text-xl text-muted-foreground mb-2">
                Preservando culturas ancestrais através da inovação digital
              </p>
              <a 
                href="https://vozdoterreiro.com.br/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-secondary hover:text-secondary-dark font-semibold inline-flex items-center gap-2"
              >
                Visite o site
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </a>
            </div>

            <div className="bg-white rounded-lg shadow-soft p-4 md:p-8 mb-6 md:mb-8">
              <div className="mb-6 md:mb-8">
                <h3 className="text-lg md:text-xl font-heading font-bold text-secondary mb-3">
                  O Contexto
                </h3>
                <p className="text-sm md:text-base text-foreground leading-relaxed mb-3 md:mb-4">
                  A <strong>Voz do Terreiro</strong> é uma organização cultural dedicada à preservação, 
                  valorização e difusão das tradições de matriz africana e indígena no Brasil. 
                  Com uma missão profundamente enraizada na ancestralidade, enfrentavam o desafio 
                  de expandir seu alcance sem perder a autenticidade.
                </p>
                <p className="text-sm md:text-base text-foreground leading-relaxed">
                  O desafio era claro: como tornar visível no mundo digital uma organização 
                  que vive da oralidade, dos rituais presenciais e da transmissão direta de 
                  saberes ancestrais?
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 mb-6 md:mb-8">
                <div className="bg-red-50 border-l-4 border-red-500 p-3 md:p-4">
                  <h4 className="font-bold text-sm md:text-base text-red-900 mb-2">Desafios</h4>
                  <ul className="text-xs md:text-sm text-red-800 space-y-1">
                    <li>• Invisibilidade digital</li>
                    <li>• Identidade visual inconsistente</li>
                    <li>• Comunicação fragmentada</li>
                    <li>• Baixo alcance nas redes</li>
                  </ul>
                </div>
                <div className="bg-purple-50 border-l-4 border-purple-500 p-3 md:p-4">
                  <h4 className="font-bold text-sm md:text-base text-purple-900 mb-2">Soluções</h4>
                  <ul className="text-xs md:text-sm text-purple-800 space-y-1">
                    <li>• Decodificação da Alma</li>
                    <li>• Identidade Visual Ancestral</li>
                    <li>• Ponte Digital Estratégica</li>
                    <li>• Narrativa de Impacto</li>
                  </ul>
                </div>
                <div className="bg-green-50 border-l-4 border-green-500 p-3 md:p-4">
                  <h4 className="font-bold text-sm md:text-base text-green-900 mb-2">Resultados</h4>
                  <ul className="text-xs md:text-sm text-green-800 space-y-1">
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

              {/* História do Evento IPHAN - Cidades-Terreiro */}
              <div className="mb-6 md:mb-8 bg-gradient-to-br from-amber-50 to-orange-50 rounded-xl p-4 md:p-8 border-l-4 border-amber-500">
                <h3 className="text-xl md:text-2xl font-heading font-bold text-amber-900 mb-3 md:mb-4">
                  Case Destaque: Cidades-Terreiro IPHAN
                </h3>
                <p className="text-sm md:text-base text-foreground leading-relaxed mb-3 md:mb-4">
                  Em parceria com o <strong>IPHAN (Instituto do Patrimônio Histórico e Artístico Nacional)</strong>, 
                  a Voz do Terreiro realizou o evento <strong>"Cidades-Terreiro: Memórias, Territórios e Resistências"</strong>, 
                  uma celebração da cultura afro-brasileira como patrimônio imaterial do Brasil.
                </p>
                <p className="text-sm md:text-base text-foreground leading-relaxed mb-3 md:mb-4">
                  O evento reuniu lideranças religiosas, artistas, pesquisadores e comunidades tradicionais 
                  de terreiro de todo o país para discutir a preservação dos territórios sagrados, o combate 
                  à intolerância religiosa e a valorização das tradições de matriz africana.
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 my-4 md:my-6">
                  <div className="bg-white rounded-lg p-4 md:p-6 shadow-soft">
                    <h4 className="font-bold text-sm md:text-base text-amber-900 mb-2 md:mb-3">Objetivos</h4>
                    <ul className="space-y-1 md:space-y-2 text-xs md:text-sm text-foreground">
                      <li>• Fortalecer redes de proteção aos terreiros</li>
                      <li>• Documentar memórias e práticas ancestrais</li>
                      <li>• Promover diálogo entre gerações</li>
                      <li>• Amplificar vozes das comunidades tradicionais</li>
                    </ul>
                  </div>
                  <div className="bg-white rounded-lg p-4 md:p-6 shadow-soft">
                    <h4 className="font-bold text-sm md:text-base text-amber-900 mb-2 md:mb-3">Impacto</h4>
                    <ul className="space-y-1 md:space-y-2 text-xs md:text-sm text-foreground">
                      <li>• 200+ participantes</li>
                      <li>• 15 comunidades de terreiro representadas</li>
                      <li>• Cobertura em 8 veículos de mídia</li>
                      <li>• Documentário com 3 depoimentos filmados</li>
                    </ul>
                  </div>
                </div>
                
                <p className="text-foreground leading-relaxed italic">
                  "Este evento foi um marco na luta pela preservação dos territórios sagrados. 
                  A parceria com o IPHAN legitimou nossas vozes e deu visibilidade nacional 
                  às questões que enfrentamos diariamente nas comunidades de terreiro."
                </p>
              </div>

              {/* Depoimentos em Vídeo */}
              <div className="mb-6 md:mb-8">
                <h3 className="text-lg md:text-xl font-heading font-bold text-secondary mb-3 md:mb-4">
                  Vozes da Comunidade: Depoimentos
                </h3>
                <p className="text-sm md:text-base text-muted-foreground mb-4 md:mb-6">
                  Assista aos depoimentos de lideranças e participantes do evento Cidades-Terreiro
                </p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
                  <div className="bg-white rounded-lg shadow-medium overflow-hidden">
                    <video 
                      controls 
                      className="w-full h-48 md:h-64 object-cover bg-black"
                      preload="metadata"
                    >
                      <source src="/images/case/depoimento-daua-puri.mp4" type="video/mp4" />
                      Seu navegador não suporta vídeo.
                    </video>
                    <div className="p-3 md:p-4">
                      <h4 className="font-bold text-sm md:text-base text-foreground mb-1">Daua Puri</h4>
                      <p className="text-xs md:text-sm text-muted-foreground">Liderança indígena e ativista cultural</p>
                    </div>
                  </div>
                  
                  <div className="bg-white rounded-lg shadow-medium overflow-hidden">
                    <video 
                      controls 
                      className="w-full h-48 md:h-64 object-cover bg-black"
                      preload="metadata"
                    >
                      <source src="/images/case/depoimento-juliana.mp4" type="video/mp4" />
                      Seu navegador não suporta vídeo.
                    </video>
                    <div className="p-3 md:p-4">
                      <h4 className="font-bold text-sm md:text-base text-foreground mb-1">Juliana Bonifácio</h4>
                      <p className="text-xs md:text-sm text-muted-foreground">Empreendedora social</p>
                    </div>
                  </div>
                  
                  <div className="bg-white rounded-lg shadow-medium overflow-hidden">
                    <video 
                      controls 
                      className="w-full h-48 md:h-64 object-cover bg-black"
                      preload="metadata"
                    >
                      <source src="/images/case/depoimento-negrogun.mp4" type="video/mp4" />
                      Seu navegador não suporta vídeo.
                    </video>
                    <div className="p-3 md:p-4">
                      <h4 className="font-bold text-sm md:text-base text-foreground mb-1">Negrogun</h4>
                      <p className="text-xs md:text-sm text-muted-foreground">Presidente do Conselho Estadual dos Direitos do Negro</p>
                    </div>
                  </div>
                </div>
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
