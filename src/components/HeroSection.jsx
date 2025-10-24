import React from 'react'
import { Link } from 'react-router-dom'

export default function HeroSection({ 
  title, 
  subtitle, 
  description, 
  backgroundImage, 
  ctaPrimary, 
  ctaSecondary,
  showStats,
  stats,
  gradient = 'from-primary/90 to-primary-dark/90'
}) {
  return (
    <section 
      className="relative min-h-[400px] md:min-h-[500px] flex items-center overflow-hidden"
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}
    >
      {/* Overlay com gradiente */}
      <div className={`absolute inset-0 bg-gradient-to-r ${gradient}`} />
      
      {/* Conteúdo */}
      <div className="container mx-auto px-4 py-16 md:py-24 relative z-10">
        <div className="max-w-4xl mx-auto text-center text-white">
          {subtitle && (
            <p className="text-secondary text-sm md:text-base font-semibold mb-4 uppercase tracking-wide">
              {subtitle}
            </p>
          )}
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-heading font-bold mb-6 leading-tight">
            {title}
          </h1>
          
          {description && (
            <p className="text-lg md:text-xl mb-8 opacity-90 max-w-2xl mx-auto">
              {description}
            </p>
          )}
          
          {/* Stats (opcional) */}
          {showStats && stats && (
            <div className="flex flex-wrap justify-center gap-8 mb-8">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-3xl md:text-4xl font-bold text-secondary mb-1">
                    {stat.value}
                  </div>
                  <div className="text-sm md:text-base opacity-80">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          )}
          
          {/* CTAs */}
          {(ctaPrimary || ctaSecondary) && (
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              {ctaPrimary && (
                ctaPrimary.external ? (
                  <a
                    href={ctaPrimary.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block px-8 py-4 bg-secondary text-secondary-foreground rounded-lg font-semibold hover:bg-secondary-dark transition-all shadow-strong hover:shadow-xl transform hover:scale-105"
                  >
                    {ctaPrimary.icon && <span className="mr-2">{ctaPrimary.icon}</span>}
                    {ctaPrimary.text}
                  </a>
                ) : (
                  <Link
                    to={ctaPrimary.href}
                    className="inline-block px-8 py-4 bg-secondary text-secondary-foreground rounded-lg font-semibold hover:bg-secondary-dark transition-all shadow-strong hover:shadow-xl transform hover:scale-105"
                  >
                    {ctaPrimary.icon && <span className="mr-2">{ctaPrimary.icon}</span>}
                    {ctaPrimary.text}
                  </Link>
                )
              )}
              
              {ctaSecondary && (
                ctaSecondary.external ? (
                  <a
                    href={ctaSecondary.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block px-8 py-4 bg-white/10 backdrop-blur text-white border-2 border-white/30 rounded-lg font-semibold hover:bg-white/20 transition-all shadow-medium"
                  >
                    {ctaSecondary.icon && <span className="mr-2">{ctaSecondary.icon}</span>}
                    {ctaSecondary.text}
                  </a>
                ) : (
                  <Link
                    to={ctaSecondary.href}
                    className="inline-block px-8 py-4 bg-white/10 backdrop-blur text-white border-2 border-white/30 rounded-lg font-semibold hover:bg-white/20 transition-all shadow-medium"
                  >
                    {ctaSecondary.icon && <span className="mr-2">{ctaSecondary.icon}</span>}
                    {ctaSecondary.text}
                  </Link>
                )
              )}
            </div>
          )}
        </div>
      </div>
      
      {/* Decoração - ondas na parte inferior */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
          <path 
            d="M0,64L48,69.3C96,75,192,85,288,80C384,75,480,53,576,48C672,43,768,53,864,58.7C960,64,1056,64,1152,58.7C1248,53,1344,43,1392,37.3L1440,32L1440,120L1392,120C1344,120,1248,120,1152,120C1056,120,960,120,864,120C768,120,672,120,576,120C480,120,384,120,288,120C192,120,96,120,48,120L0,120Z" 
            fill="#F5F5DC"
            fillOpacity="0.1"
          />
        </svg>
      </div>
    </section>
  )
}
