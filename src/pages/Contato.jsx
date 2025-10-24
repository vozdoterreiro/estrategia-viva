import React, { useState } from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import HeroSection from '../components/HeroSection'

export default function Contato() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    interest: '',
    message: ''
  })

  const handleSubmit = async (e) => {
    e.preventDefault()
    
    // Salvar no banco de dados
    try {
      await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...formData,
          timestamp: new Date().toISOString()
        }),
      })
    } catch (error) {
      console.error('Error saving form:', error)
    }
    
    // Formata mensagem para WhatsApp
    const whatsappMessage = `
Olá! Vim através do site estrategiaviva.com.br

*Nome:* ${formData.name}
*Email:* ${formData.email}
*Empresa:* ${formData.company}
*Telefone:* ${formData.phone}
*Interesse:* ${formData.interest}

*Mensagem:*
${formData.message}
    `.trim()

    const whatsappNumber = '5521959527189'
    const whatsappURL = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`
    
    window.open(whatsappURL, '_blank')
  }

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleWhatsAppDirect = () => {
    const message = "Olá! Gostaria de agendar uma conversa sobre a Estratégia Viva."
    const whatsappURL = `https://wa.me/5521959527189?text=${encodeURIComponent(message)}`
    window.open(whatsappURL, '_blank')
  }

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <HeroSection
        backgroundImage="/images/hero-contato.jpg"
        subtitle="Vamos Conversar"
        title="Pronto para transformar sua organização?"
        description="Agende uma conversa exploratória gratuita para entender como podemos ajudar sua organização a prosperar."
        ctaPrimary={{
          text: 'Falar no WhatsApp',
          href: 'https://wa.me/5521959527189?text=Olá!%20Gostaria%20de%20agendar%20uma%20conversa%20sobre%20a%20Estratégia%20Viva',
          external: true,
          icon: '💬'
        }}
        ctaSecondary={{
          text: 'Enviar Email',
          href: 'mailto:contato@estrategiaviva.com.br',
          external: true,
          icon: '📧'
        }}
      />
      
      <main className="py-16">
        <section className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Formulário */}
              <div className="bg-white rounded-lg shadow-soft p-8">
                <h2 className="text-2xl font-heading font-bold text-primary mb-6">
                  Agende uma Conversa
                </h2>
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-semibold text-foreground mb-2">
                      Nome completo *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-secondary"
                      placeholder="Seu nome"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-semibold text-foreground mb-2">
                      E-mail *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-secondary"
                      placeholder="seu@email.com"
                    />
                  </div>

                  <div>
                    <label htmlFor="company" className="block text-sm font-semibold text-foreground mb-2">
                      Empresa *
                    </label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      required
                      value={formData.company}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-secondary"
                      placeholder="Nome da sua empresa"
                    />
                  </div>

                  <div>
                    <label htmlFor="phone" className="block text-sm font-semibold text-foreground mb-2">
                      Telefone / WhatsApp
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-secondary"
                      placeholder="(00) 00000-0000"
                    />
                  </div>

                  <div>
                    <label htmlFor="interest" className="block text-sm font-semibold text-foreground mb-2">
                      Tenho interesse em *
                    </label>
                    <select
                      id="interest"
                      name="interest"
                      required
                      value={formData.interest}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-secondary"
                    >
                      <option value="">Selecione uma opção</option>
                      <option value="Diagnóstico de DNA">Diagnóstico de DNA</option>
                      <option value="Arquitetura de Ecossistema">Arquitetura de Ecossistema</option>
                      <option value="Ciclo de Cultivo">Ciclo de Cultivo</option>
                      <option value="Não sei ainda">Não sei ainda, quero entender melhor</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-semibold text-foreground mb-2">
                      Mensagem *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      value={formData.message}
                      onChange={handleChange}
                      rows={4}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-secondary resize-none"
                      placeholder="Conte-nos um pouco sobre o momento da sua organização..."
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full px-8 py-4 bg-secondary text-secondary-foreground rounded-lg font-semibold hover:bg-secondary-dark transition-all shadow-medium flex items-center justify-center gap-2"
                  >
                    <span>💬</span>
                    Enviar via WhatsApp
                  </button>

                  <p className="text-sm text-muted-foreground text-center">
                    Ao enviar, você será redirecionado para o WhatsApp
                  </p>
                </form>
              </div>

              {/* Informações de contato */}
              <div className="space-y-8">
                <div className="bg-white rounded-lg shadow-soft p-8">
                  <h3 className="text-xl font-heading font-bold text-primary mb-6">
                    Formas de Contato
                  </h3>
                  
                  <div className="space-y-6">
                    <div className="flex items-start gap-4">
                      <div className="flex-shrink-0 w-12 h-12 bg-secondary/10 rounded-full flex items-center justify-center">
                        <span className="text-2xl">📧</span>
                      </div>
                      <div>
                        <h4 className="font-semibold text-foreground mb-1">E-mail</h4>
                        <a
                          href="mailto:contato@estrategiaviva.com.br"
                          className="text-secondary hover:text-secondary-dark transition-colors"
                        >
                          contato@estrategiaviva.com.br
                        </a>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="flex-shrink-0 w-12 h-12 bg-secondary/10 rounded-full flex items-center justify-center">
                        <span className="text-2xl">💬</span>
                      </div>
                      <div>
                        <h4 className="font-semibold text-foreground mb-1">WhatsApp</h4>
                        <button
                          onClick={handleWhatsAppDirect}
                          className="text-secondary hover:text-secondary-dark transition-colors"
                        >
                          (21) 99051-9733
                        </button>
                        <p className="text-sm text-muted-foreground mt-1">
                          Resposta rápida em horário comercial
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-gradient-to-r from-primary to-primary-dark text-white rounded-lg p-8">
                  <h3 className="text-2xl font-heading font-bold mb-4">
                    Conversa Inicial Gratuita
                  </h3>
                  <p className="text-lg leading-relaxed mb-6 opacity-90">
                    Oferecemos uma conversa exploratória de 45 minutos para entender 
                    o momento da sua organização e como podemos ajudar.
                  </p>
                  <ul className="space-y-2 mb-6">
                    <li className="flex items-start gap-2">
                      <span>✓</span>
                      <span>Sem compromisso</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span>✓</span>
                      <span>Análise inicial do contexto</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span>✓</span>
                      <span>Recomendações personalizadas</span>
                    </li>
                  </ul>
                  <button
                    onClick={handleWhatsAppDirect}
                    className="w-full px-6 py-3 bg-white text-primary rounded-lg font-semibold hover:bg-gray-100 transition-all"
                  >
                    Agendar Conversa
                  </button>
                </div>

                <div className="bg-white rounded-lg shadow-soft p-8">
                  <h3 className="text-xl font-heading font-bold text-primary mb-4">
                    Tempo de Resposta
                  </h3>
                  <p className="text-foreground leading-relaxed">
                    Respondemos todos os contatos em até <strong>24 horas úteis</strong>. 
                    Para conversas urgentes, prefira o WhatsApp.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
