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
        backgroundImage="/images/hero-estudo.jpg"
        subtitle="Caso de Sucesso"
        title="De máquina rígida a organismo próspero"
        description="A transformação de uma startup tecnológica que enfrentava crescimento desordenado e conquistou vitalidade sustentável."
        ctaPrimary={{
          text: 'Transforme Sua Organização',
          href: '/contato'
        }}
      />
      
      <main className="py-16">
        <section className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-lg shadow-soft p-8 mb-8">
              <h2 className="text-3xl font-heading font-bold text-primary mb-6">
                A Transformação de uma Startup Tecnológica
              </h2>
              
              <div className="mb-8">
                <h3 className="text-xl font-heading font-bold text-secondary mb-3">
                  O Contexto
                </h3>
                <p className="text-foreground leading-relaxed mb-4">
                  Uma startup de tecnologia com 80 colaboradores enfrentava crescimento rápido 
                  mas desordenado. Processos engessados, silos departamentais e uma cultura de 
                  "apagar incêndios" comprometiam a inovação e o bem-estar das pessoas.
                </p>
                <p className="text-foreground leading-relaxed">
                  A liderança percebia que a estrutura mecanicista estava impedindo o potencial 
                  da organização de se realizar.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                <div className="bg-red-50 border-l-4 border-red-500 p-4">
                  <h4 className="font-bold text-red-900 mb-2">Sintomas</h4>
                  <ul className="text-sm text-red-800 space-y-1">
                    <li>• Alta rotatividade</li>
                    <li>• Comunicação fragmentada</li>
                    <li>• Decisões lentas</li>
                    <li>• Burnout coletivo</li>
                  </ul>
                </div>
                <div className="bg-yellow-50 border-l-4 border-yellow-500 p-4">
                  <h4 className="font-bold text-yellow-900 mb-2">Diagnóstico</h4>
                  <ul className="text-sm text-yellow-800 space-y-1">
                    <li>• DNA fragmentado</li>
                    <li>• Cultura defensiva</li>
                    <li>• Estrutura hierárquica rígida</li>
                    <li>• Propósito desconectado</li>
                  </ul>
                </div>
                <div className="bg-green-50 border-l-4 border-green-500 p-4">
                  <h4 className="font-bold text-green-900 mb-2">Resultados</h4>
                  <ul className="text-sm text-green-800 space-y-1">
                    <li>• Rotatividade -60%</li>
                    <li>• Engajamento +85%</li>
                    <li>• Time-to-market -40%</li>
                    <li>• NPS +45 pontos</li>
                  </ul>
                </div>
              </div>

              <div className="mb-8">
                <h3 className="text-xl font-heading font-bold text-secondary mb-3">
                  A Jornada
                </h3>
                <div className="space-y-4">
                  <div className="flex">
                    <div className="flex-shrink-0 w-12 h-12 bg-secondary text-white rounded-full flex items-center justify-center font-bold mr-4">
                      1
                    </div>
                    <div>
                      <h4 className="font-bold text-foreground mb-1">Diagnóstico de DNA (6 semanas)</h4>
                      <p className="text-muted-foreground">
                        Mapeamento profundo da cultura, identificação de padrões limitantes e 
                        potenciais não explorados.
                      </p>
                    </div>
                  </div>
                  <div className="flex">
                    <div className="flex-shrink-0 w-12 h-12 bg-secondary text-white rounded-full flex items-center justify-center font-bold mr-4">
                      2
                    </div>
                    <div>
                      <h4 className="font-bold text-foreground mb-1">Arquitetura de Ecossistema (10 semanas)</h4>
                      <p className="text-muted-foreground">
                        Co-criação de nova estrutura circular com times autônomos, governança 
                        participativa e processos adaptativos.
                      </p>
                    </div>
                  </div>
                  <div className="flex">
                    <div className="flex-shrink-0 w-12 h-12 bg-secondary text-white rounded-full flex items-center justify-center font-bold mr-4">
                      3
                    </div>
                    <div>
                      <h4 className="font-bold text-foreground mb-1">Ciclo de Cultivo (12 meses)</h4>
                      <p className="text-muted-foreground">
                        Acompanhamento contínuo para integrar novas práticas, cultivar cultura 
                        regenerativa e medir vitalidade.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-r from-primary to-primary-dark text-white rounded-lg p-8">
                <h3 className="text-2xl font-heading font-bold mb-4">
                  Depoimento do CEO
                </h3>
                <blockquote className="italic text-lg leading-relaxed">
                  "A Estratégia Viva não entregou uma consultoria — eles facilitaram uma 
                  transformação profunda. Hoje somos uma organização que respira, aprende e 
                  prospera. As pessoas não querem sair, querem contribuir. Foi a melhor 
                  decisão que tomamos."
                </blockquote>
                <p className="mt-4 font-semibold">— Fundador e CEO</p>
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
