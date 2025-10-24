# Plano de Implementação - Atualização do Site com Serviços Completos

## 🎯 OBJETIVO

Atualizar o site estrategiaviva.com.br para refletir **todo o portfólio de serviços** (Jornadas + Produtos de Entrada), com foco em **conversão de leads qualificados**.

---

## 📋 CHECKLIST DE IMPLEMENTAÇÃO

### FASE 1: Estrutura e Navegação ✅ CONCLUÍDO

- [x] Header com navegação
- [x] Footer com mapa do site
- [x] Rotas configuradas (React Router)
- [x] Home page
- [x] Página Filosofia
- [x] Páginas Jornadas (principal + 3 sub-páginas)
- [x] Página Estudo de Caso
- [x] Página Insights
- [x] Página Contato

---

### FASE 2: Conteúdo Detalhado dos Serviços 🔄 EM PROGRESSO

#### A. Atualizar Página /jornadas (Principal)

**Melhorias Necessárias:**

1. **Adicionar Seção de Comparação**
```jsx
<section className="bg-white rounded-lg shadow-soft p-8 mb-12">
  <h2>Qual jornada é ideal para você?</h2>
  <table>
    <thead>
      <tr>
        <th>Jornada</th>
        <th>Para Quem</th>
        <th>Duração</th>
        <th>Investimento</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>Diagnóstico de DNA</td>
        <td>Organizações buscando clareza</td>
        <td>4-6 semanas</td>
        <td>A partir de R$ 20.000</td>
      </tr>
      {/* ... outras jornadas ... */}
    </tbody>
  </table>
</section>
```

2. **Adicionar Seção "Por que uma Jornada?"**
- Explicar diferença entre "projeto" e "jornada"
- Destacar abordagem antropológica
- Enfatizar cocriação vs consultoria tradicional

3. **Incluir Depoimentos**
- 2-3 depoimentos curtos de clientes
- Fotos (se possível)
- Resultados específicos

#### B. Atualizar Sub-páginas das Jornadas

**Para cada jornada (/diagnostico, /arquitetura, /cultivo):**

1. **Adicionar Seção "Processo Passo a Passo"**
```jsx
<div className="timeline">
  {fases.map((fase, index) => (
    <div className="timeline-item" key={index}>
      <div className="timeline-marker">{index + 1}</div>
      <div className="timeline-content">
        <h4>{fase.titulo}</h4>
        <p>{fase.descricao}</p>
        <span className="duration">{fase.duracao}</span>
      </div>
    </div>
  ))}
</div>
```

2. **Adicionar Seção "FAQ Específica"**
- 3-5 perguntas mais comuns sobre aquela jornada
- Exemplo: "Preciso ter feito o Diagnóstico antes da Arquitetura?"

3. **Melhorar CTA Final**
- Botão "Solicitar Proposta Personalizada"
- Botão secundário "Agendar Conversa Exploratória (Gratuita)"

#### C. Adicionar Seção "Produtos de Entrada"

**Nova página: /produtos**

```jsx
// src/pages/Produtos.jsx
export default function Produtos() {
  const produtos = [
    {
      slug: 'decodificacao-alma',
      titulo: 'Decodificação da Alma',
      subtitulo: 'Branding e Identidade Estratégica',
      preco: 'R$ 9.000 - R$ 18.000',
      duracao: '5 semanas',
      // ...
    },
    // ... outros produtos
  ]
  
  return (
    // Layout similar a Jornadas
  )
}
```

**3 Sub-páginas:**
- `/produtos/decodificacao-alma`
- `/produtos/ponte-digital`
- `/produtos/inteligencia-simbiotica`

**Estrutura de cada sub-página:**
- Hero com título + preço
- "O que você recebe" (lista detalhada)
- "O que NÃO está incluso" (transparência)
- Processo em 4 fases (timeline visual)
- Entregáveis finais (checklist visual)
- FAQ (acordeão)
- CTA duplo (Solicitar Orçamento + Conversa)

---

### FASE 3: Funcionalidades de Conversão 🚀 PRÓXIMO

#### A. Quiz de Auto-Qualificação

**Nova página: /quiz ou seção na Home**

```jsx
// Quiz com 5-7 perguntas
const perguntas = [
  {
    pergunta: "Qual o momento atual da sua organização?",
    opcoes: [
      { texto: "Preciso criar minha identidade de marca", pontos: { produtos: 3 } },
      { texto: "Sinto desalinhamento cultural", pontos: { diagnostico: 3 } },
      { texto: "Estou pronto para transformação profunda", pontos: { arquitetura: 3 } },
      { texto: "Já fiz a transformação, quero evolução contínua", pontos: { cultivo: 3 } }
    ]
  },
  // ... mais perguntas
]

// Ao final, calcular pontuação e recomendar serviço
```

**Resultado do Quiz:**
- Recomendação personalizada
- Explicação do "por quê"
- CTA para agendar conversa
- Captura de email (opcional)

#### B. Calculadora de Investimento

**Seção interativa em /jornadas**

```jsx
<div className="calculator">
  <h3>Estime seu investimento</h3>
  
  <select name="tamanho">
    <option>Até 20 pessoas</option>
    <option>21-50 pessoas</option>
    <option>51-100 pessoas</option>
    <option>100+ pessoas</option>
  </select>
  
  <select name="complexidade">
    <option>Baixa (1 área)</option>
    <option>Média (2-3 áreas)</option>
    <option>Alta (toda organização)</option>
  </select>
  
  <div className="resultado">
    <span>Investimento estimado:</span>
    <strong>R$ 45.000 - R$ 65.000</strong>
    <button>Solicitar Proposta Exata</button>
  </div>
</div>
```

#### C. Formulários Aprimorados

**Atualizar /contato**

1. **Formulário com Campos Condicionais**
```jsx
<select name="interesse" onChange={handleInterestChange}>
  <optgroup label="Jornadas de Transformação">
    <option value="diagnostico">Diagnóstico de DNA</option>
    <option value="arquitetura">Arquitetura de Ecossistema</option>
    <option value="cultivo">Ciclo de Cultivo</option>
  </optgroup>
  <optgroup label="Produtos de Entrada">
    <option value="decodificacao">Decodificação da Alma</option>
    <option value="ponte-digital">Construção da Ponte Digital</option>
    <option value="ia">Inteligência Simbiótica</option>
  </optgroup>
</select>

{/* Mostrar campos específicos baseado na seleção */}
{interesse === 'diagnostico' && (
  <div>
    <label>Quantas pessoas na organização?</label>
    <input type="number" name="tamanho_time" />
  </div>
)}
```

2. **Adicionar Agenda de Reuniões (Calendly/Cal.com)**
```jsx
<section className="scheduling">
  <h3>Ou agende diretamente na minha agenda</h3>
  <CalendlyEmbed url="https://calendly.com/estrategiaviva/conversa-exploratoria" />
</section>
```

---

### FASE 4: Conteúdo e Autoridade 📝 FUTURO

#### A. Expandir /insights (Blog)

**Temas para artigos:**

1. **Série "Jornadas"**
   - "Como saber se sua organização precisa de um Diagnóstico de DNA"
   - "5 sinais de que você está pronto para Arquitetura de Ecossistema"
   - "Por que o Ciclo de Cultivo é o melhor investimento"

2. **Série "4 Forças Vitais"**
   - "Alma: Como descobrir o propósito verdadeiro da sua organização"
   - "Conexões: Tecnologia a serviço do humano"
   - "Nutrição: Modelos de sustentabilidade regenerativa"
   - "Raízes: Cultura profunda vs cultura de fachada"

3. **Série "Produtos de Entrada"**
   - "Branding não é logo: O que é Decodificação da Alma"
   - "Website vs Ponte Digital: A diferença estratégica"
   - "IA que amplifica humanos: Inteligência Simbiótica"

#### B. Adicionar Recursos Gratuitos

**Nova página: /recursos**

1. **E-books para Download**
   - "Guia: As 4 Forças Vitais de uma Organização Próspera"
   - "Checklist: Sua organização é máquina ou organismo?"
   - "Template: Canvas de Diagnóstico Cultural"

2. **Ferramentas Interativas**
   - "Auto-avaliação de Vitalidade Organizacional" (formulário)
   - "Mapa de Stakeholders" (ferramenta visual)

3. **Newsletter**
   - Formulário de inscrição em todas as páginas
   - Sequência de boas-vindas (5 emails)
   - Conteúdo semanal sobre ecossistemas organizacionais

#### C. Criar /manifesto (Página Dedicada)

**Conteúdo do manifesto.md formatado de forma visual:**
- Design editorial impactante
- Tipografia grande e legível
- Citações destacadas
- Botão "Assinar o Manifesto" (email capture)
- Share social (LinkedIn principalmente)

---

### FASE 5: SEO e Performance 🔍 OTIMIZAÇÃO

#### A. SEO On-Page

**Para cada página:**

```jsx
// Em cada componente de página
<Helmet>
  <title>Diagnóstico de DNA Organizacional | Estratégia Viva</title>
  <meta name="description" content="Revelamos a Alma da sua organização através de imersão antropológica profunda. 4-6 semanas. A partir de R$ 20.000." />
  <meta property="og:title" content="Diagnóstico de DNA Organizacional" />
  <meta property="og:description" content="..." />
  <meta property="og:image" content="/images/diagnostico-og.jpg" />
  <link rel="canonical" href="https://estrategiaviva.com.br/jornadas/diagnostico" />
</Helmet>
```

**Palavras-chave alvo:**
- Consultoria organizacional
- Transformação cultural
- Diagnóstico organizacional
- Arquitetura organizacional
- Cultura organizacional
- Consultoria para ONGs
- Estratégia para startups

#### B. Structured Data (Schema.org)

```jsx
// Adicionar JSON-LD em cada página de serviço
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "Service",
  "serviceType": "Diagnóstico de DNA Organizacional",
  "provider": {
    "@type": "Organization",
    "name": "Estratégia Viva"
  },
  "offers": {
    "@type": "Offer",
    "price": "20000",
    "priceCurrency": "BRL"
  }
}
</script>
```

#### C. Performance

1. **Otimizar Imagens**
   - Converter para WebP
   - Lazy loading
   - Responsive images

2. **Code Splitting**
```jsx
// Em App.jsx
const Jornadas = lazy(() => import('./pages/Jornadas'))
const Produtos = lazy(() => import('./pages/Produtos'))

<Suspense fallback={<Loading />}>
  <Routes>
    <Route path="/jornadas/*" element={<Jornadas />} />
    <Route path="/produtos/*" element={<Produtos />} />
  </Routes>
</Suspense>
```

---

### FASE 6: Analytics e Conversão 📊 MEDIÇÃO

#### A. Configurar Google Analytics 4

**Eventos customizados a rastrear:**

```jsx
// src/utils/analytics.js
export const trackEvent = (eventName, params) => {
  gtag('event', eventName, params)
}

// Uso nos componentes
<button onClick={() => {
  trackEvent('cta_click', {
    service: 'diagnostico',
    location: 'hero',
    value: 20000
  })
  // ... ação do botão
}}>
  Solicitar Proposta
</button>
```

**Eventos importantes:**
- `cta_click` - Clique em CTAs
- `form_submit` - Envio de formulários
- `quiz_complete` - Conclusão do quiz
- `resource_download` - Download de recursos
- `page_time` - Tempo em cada página

#### B. Heatmaps (Hotjar/Microsoft Clarity)

**Instalar Hotjar para:**
- Ver onde usuários clicam
- Identificar pontos de fricção
- Gravar sessões de usuários
- Coletar feedback (polls)

#### C. A/B Testing

**Testes a fazer:**
1. Títulos da Hero Section
   - "Sua organização é uma máquina ou um organismo?"
   - "Transforme sua organização em um ecossistema vivo"
   - "Consuloria que vai além da superfície"

2. CTAs
   - "Agendar Conversa" vs "Iniciar Jornada" vs "Falar com Especialista"

3. Preços
   - Mostrar preço vs "A partir de" vs "Solicitar orçamento"

---

## 🎨 MELHORIAS VISUAIS

### A. Ícones e Ilustrações

**Criar ícones customizados para:**
- 4 Forças Vitais (Alma, Conexões, Nutrição, Raízes)
- 3 Jornadas (🧬 DNA, 🏛️ Arquitetura, 🌱 Cultivo)
- 3 Produtos (🎨 Alma, 🌉 Ponte, 🤖 IA)

**Contratar ilustrador para:**
- Hero illustrations para cada página
- Infográficos do processo
- Diagramas das 4 forças vitais

### B. Animações

**Micro-interações com Framer Motion:**

```jsx
import { motion } from 'framer-motion'

<motion.div
  initial={{ opacity: 0, y: 20 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.6 }}
  viewport={{ once: true }}
>
  {/* conteúdo */}
</motion.div>
```

**Animações sutis para:**
- Fade in ao scroll
- Hover em cards
- Transição entre páginas
- Loading states

### C. Vídeos

**Produzir:**
1. Vídeo explicativo (2-3 min) na Home
   - "O que é um Ecossistema Organizacional Vivo?"
   
2. Vídeos curtos (30-60s) para cada jornada
   - Depoimento de cliente + resultado

3. Tour virtual do processo
   - Screen recording mostrando entregáveis

---

## 📱 MOBILE-FIRST

### Melhorias Específicas para Mobile

1. **Menu Hamburger Aprimorado**
```jsx
// Adicionar sub-menus expansíveis
<nav className="mobile-menu">
  <button onClick={toggleJornadas}>
    Jornadas <ChevronDown />
  </button>
  {jornadasOpen && (
    <ul>
      <li>Diagnóstico de DNA</li>
      <li>Arquitetura de Ecossistema</li>
      <li>Ciclo de Cultivo</li>
    </ul>
  )}
</nav>
```

2. **Botão WhatsApp Flutuante**
```jsx
<a
  href="https://wa.me/5521990519733"
  className="fixed bottom-4 right-4 z-50 bg-green-500 text-white p-4 rounded-full shadow-lg hover:bg-green-600 transition"
  aria-label="Falar no WhatsApp"
>
  <WhatsAppIcon />
</a>
```

3. **Formulários Mobile-Friendly**
- Inputs grandes (min 44px altura)
- Teclado apropriado (type="email", type="tel")
- Autocomplete habilitado
- Validação em tempo real

---

## 🚀 PRIORIZAÇÃO

### SPRINT 1 (Semana 1-2) - ALTA PRIORIDADE

1. ✅ Adicionar preços e durações nas páginas de Jornadas
2. ✅ Criar 3 páginas de Produtos de Entrada
3. ✅ Atualizar Header com link "Produtos"
4. ✅ Melhorar CTAs com botões duplos
5. ✅ Adicionar botão WhatsApp flutuante

### SPRINT 2 (Semana 3-4) - MÉDIA PRIORIDADE

1. ⏳ Criar Quiz de Auto-Qualificação
2. ⏳ Adicionar FAQ em cada página de serviço
3. ⏳ Implementar formulários condicionais
4. ⏳ Configurar Google Analytics 4
5. ⏳ Adicionar structured data (Schema.org)

### SPRINT 3 (Semana 5-6) - BAIXA PRIORIDADE

1. 📋 Criar página /recursos com downloads
2. 📋 Expandir blog /insights (10+ artigos)
3. 📋 Adicionar calculadora de investimento
4. 📋 Integrar Calendly para agendamentos
5. 📋 Implementar A/B testing

---

## ✅ CHECKLIST DE LANÇAMENTO

Antes de fazer deploy das atualizações:

- [ ] Testar todos os formulários
- [ ] Validar links internos
- [ ] Verificar responsividade (mobile/tablet/desktop)
- [ ] Testar performance (Lighthouse score > 90)
- [ ] Validar SEO (meta tags, sitemap, robots.txt)
- [ ] Testar integração WhatsApp
- [ ] Revisar todos os textos (gramática, ortografia)
- [ ] Testar em diferentes navegadores
- [ ] Configurar redirects se necessário
- [ ] Backup do site atual
- [ ] Plano de rollback preparado

---

## 📞 PRÓXIMAS AÇÕES IMEDIATAS

1. **Revisar este plano** com a equipe
2. **Priorizar sprints** baseado em impacto x esforço
3. **Começar SPRINT 1** (implementações de alta prioridade)
4. **Preparar conteúdo** (textos, imagens, vídeos)
5. **Definir métricas de sucesso** (conversões esperadas)

---

Quer que eu comece a implementar alguma dessas melhorias agora?
