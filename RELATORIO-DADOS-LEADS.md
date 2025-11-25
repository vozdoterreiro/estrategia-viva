# 📊 Relatório de Captura e Gestão de Dados de Leads

**Data do Relatório:** 07 de Novembro de 2025  
**Autor:** Análise Técnica - Estratégia Viva  
**Status:** Auditoria Completa do Sistema Atual

---

## 🎯 Sumário Executivo

O site Estratégia Viva possui uma infraestrutura **parcialmente implementada** para captura de leads, com **deficiências críticas** em armazenamento, automação e análise de dados. Atualmente, o sistema coleta dados mas **não os utiliza estrategicamente** para conversão e relacionamento.

**Principais Achados:**
- ✅ Captura funcionando em 2 pontos (Formulário de Contato + Newsletter)
- ⚠️ Armazenamento dual (PostgreSQL preparado, mas usando apenas JSON)
- ❌ Sem analytics ou tracking de conversão
- ❌ Sem automação de follow-up ou nutrição de leads
- ❌ Dados não sendo exportados/utilizados em CRM

---

## 📋 1. ESTADO ATUAL DO SISTEMA

### 1.1 Pontos de Captura de Dados

#### **A. Formulário de Contato** (`/contato`)
**Campos capturados:**
- Nome (obrigatório)
- Email (obrigatório)
- Telefone (opcional)
- Empresa (opcional)
- Serviço de Interesse (dropdown - obrigatório)
- Mensagem (obrigatório)
- Timestamp automático

**Fluxo após envio:**
1. Dados salvos em `/data/submissions.json` (backup)
2. Tentativa de salvar no PostgreSQL via `/api/saveToDatabase`
3. Redirecionamento para WhatsApp (após 2 segundos)
4. Mensagem pré-formatada: `"Olá! meu nome é {nome}. Vim através do site estrategiaviva.com.br"`

**Problema:** Os dados do formulário **não são enviados** para o WhatsApp, apenas nome + origem genérica.

#### **B. Newsletter** (Footer de todas as páginas)
**Campos capturados:**
- Email (obrigatório)
- Timestamp automático

**Status:** Atualmente **DESABILITADO** (código comentado no Footer.jsx linha 17-40)
- Formulário aparece, mas ao enviar só mostra mensagem de sucesso
- Dados **NÃO estão sendo salvos** em lugar nenhum
- Comentário no código: `"TODO: Reativar quando backend estiver em produção"`

### 1.2 Armazenamento de Dados

#### **Sistema Atual (Ativo):**
```
/data/submissions.json
```
- Arquivo JSON simples (NDJSON - uma linha por lead)
- Total atual: **12 leads** (6 contacts + 6 newsletters - dados de exemplo)
- Estrutura:
  ```json
  {
    "type": "contact|newsletter",
    "name": "...", 
    "email": "...",
    "company": "...",
    "phone": "...",
    "interest": "...",
    "message": "...",
    "timestamp": "2024-10-24T14:00:00.000Z"
  }
  ```

**Limitações críticas:**
- ❌ Sem backup automático
- ❌ Pode ser sobrescrito/perdido no deploy
- ❌ Não escala (limite de ~10.000 registros antes de problemas de performance)
- ❌ Dificulta queries complexas (segmentação, análise temporal)
- ❌ Sem controle de status/lifecycle do lead

#### **Sistema Preparado (Não Ativo):**
```
PostgreSQL Database
- Tabela: contact_leads
- Tabela: newsletter_subscribers
```

**Infraestrutura completa mas não conectada:**
- Schema SQL pronto (`/db/schema.sql`)
- API de salvamento pronta (`/api/saveToDatabase.js`)
- API de leitura pronta (`/api/getLeads.js`)
- README com instruções (`/db/README.md`)

**Por que não está ativo:**
- Falta variável de ambiente `DATABASE_URL`
- Falta provisionar banco PostgreSQL (Supabase, Render, Railway, etc)
- Código existe mas falha silenciosamente (fallback para JSON)

### 1.3 Dashboard de Visualização

**Localização:** `/dashboard`

**Funcionalidades:**
- Exibe métricas: Total de Leads, Este Mês, Mês Anterior, Variação %
- Tabela com últimos 20 leads
- Campos exibidos: Data, Nome, Email, Telefone, Empresa, Interesse
- Design profissional com cards e gráficos visuais

**Limitações:**
- ❌ Sem autenticação (qualquer um pode acessar)
- ❌ Sem filtros ou busca
- ❌ Sem exportação (CSV/Excel)
- ❌ Sem segmentação por serviço
- ❌ Sem tracking de conversão (lead → reunião → fechamento)
- ❌ Dados vêm do JSON ou PostgreSQL (fallback), não há sincronização

---

## 📊 2. ANÁLISE DE DADOS CAPTURADOS

### 2.1 Volume e Distribuição

**Dados atuais (exemplo no arquivo):**
- **Total:** 12 registros
- **Contacts:** 6 (50%)
- **Newsletter:** 6 (50%)
- **Período:** 20-24 de Outubro de 2024 (dados de teste)

### 2.2 Serviços Mais Procurados (Contacts)
1. Diagnóstico de DNA Organizacional - 2 leads (33%)
2. Arquitetura de Ecossistema - 2 leads (33%)
3. Ciclo de Cultivo Regenerativo - 2 leads (33%)

### 2.3 Qualidade dos Dados

**Completude:**
- Nome: 100% (obrigatório)
- Email: 100% (obrigatório)
- Telefone: ~80% (opcional mas maioria preenche)
- Empresa: ~90% (opcional mas maioria preenche)
- Interesse: 100% (obrigatório via dropdown)

**Problemas detectados:**
- Mensagens genéricas ("Gostaria de mais informações")
- Sem qualificação de budget/timeline
- Sem tracking de origem (landing page, artigo específico, Google, etc)

---

## 🚨 3. LACUNAS CRÍTICAS IDENTIFICADAS

### 3.1 Ausência de Analytics
**O que está faltando:**
- ❌ Google Analytics 4 não configurado
- ❌ Facebook Pixel não instalado
- ❌ Sem tracking de eventos (cliques em CTAs, tempo em página, scroll depth)
- ❌ Sem funil de conversão mapeado

**Impacto:**
- Impossível saber quais páginas/artigos geram mais leads
- Impossível calcular custo por lead (se houver tráfego pago)
- Impossível otimizar experiência do usuário com dados
- Impossível medir ROI de marketing

### 3.2 Ausência de Automação de Marketing
**O que está faltando:**
- ❌ Sem email de boas-vindas automático
- ❌ Sem sequência de nutrição para newsletter
- ❌ Sem follow-up automático pós-contato
- ❌ Sem segmentação de leads por interesse

**Impacto:**
- 100% do follow-up depende de ação manual
- Leads esfriam esperando resposta
- Perda de oportunidades por falta de nutrição

### 3.3 Integração com CRM
**O que está faltando:**
- ❌ Sem integração com HubSpot, RD Station, Pipedrive, etc
- ❌ Dados presos no JSON/Dashboard
- ❌ Sem pipeline de vendas estruturado

**Impacto:**
- Gestão comercial manual e ineficiente
- Dificuldade de escalar vendas
- Perda de histórico e contexto de conversas

### 3.4 Processo de Conversão
**Fluxo atual:**
```
Visitante → Preenche formulário → Salva no JSON → Redireciona para WhatsApp
```

**Problemas:**
1. **Dados não chegam ao WhatsApp:** Apenas "nome + vim do site"
2. **Sem contexto:** Vendedor não sabe interesse/mensagem sem consultar dashboard
3. **Dependência de um canal:** Se WhatsApp falhar, lead se perde
4. **Sem alternativa:** E se o lead não usar WhatsApp?

---

## 💡 4. RECOMENDAÇÕES ESTRATÉGICAS

### 🔴 PRIORIDADE MÁXIMA (Implementar em 1-2 semanas)

#### R1. Ativar PostgreSQL Imediatamente
**Por quê:** JSON não é confiável para produção

**Como fazer:**
1. Provisionar banco gratuito no **Supabase** (mais fácil e grátis)
   - Criar projeto em supabase.com
   - Copiar `DATABASE_URL` (já vem com SSL)
   
2. Configurar variável de ambiente:
   ```bash
   # No Coolify/servidor
   DATABASE_URL=postgresql://postgres:senha@db.xxx.supabase.co:5432/postgres
   ```

3. Executar schema:
   ```bash
   psql $DATABASE_URL -f db/schema.sql
   ```

4. Remover dependência do JSON (manter apenas como backup)

**Benefícios:**
- ✅ Backup automático
- ✅ Queries complexas
- ✅ Histórico de status (new → contacted → converted)
- ✅ Segurança e compliance (LGPD)

---

#### R2. Instalar Google Analytics 4
**Por quê:** Sem dados, decisões são baseadas em achismo

**Como fazer:**
1. Criar propriedade GA4 em analytics.google.com
2. Copiar ID de medição (G-XXXXXXXXXX)
3. Adicionar no `index.html`:
   ```html
   <!-- Google tag (gtag.js) -->
   <script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"></script>
   <script>
     window.dataLayer = window.dataLayer || [];
     function gtag(){dataLayer.push(arguments);}
     gtag('js', new Date());
     gtag('config', 'G-XXXXXXXXXX');
   </script>
   ```

4. Configurar eventos personalizados:
   ```javascript
   // Ao enviar formulário
   gtag('event', 'generate_lead', {
     'event_category': 'contact',
     'event_label': formData.interest,
     'value': 1
   });
   
   // Ao clicar em CTA
   gtag('event', 'click_cta', {
     'event_category': 'engagement',
     'event_label': 'hero_transforme_sua_organizacao'
   });
   ```

**Métricas a acompanhar:**
- Taxa de conversão (visitantes → leads)
- Páginas com mais conversão
- Tempo médio até conversão
- Taxa de rejeição por página

---

#### R3. Melhorar Mensagem do WhatsApp
**Por quê:** Contexto = conversão mais rápida

**Mudar de:**
```
"Olá! meu nome é João. Vim através do site estrategiaviva.com.br"
```

**Para:**
```
Olá! Sou João Silva da Empresa ABC.

Acabei de preencher o formulário no site sobre *Diagnóstico de DNA Organizacional*.

Minha situação:
Preciso transformar minha organização e estou interessado em entender como vocês podem ajudar.

Telefone: (11) 99999-9999
Email: joao@empresa.com

Podemos conversar?
```

**Código sugerido (Contato.jsx):**
```javascript
const whatsappMessage = `Olá! Sou *${formData.name}*${formData.company ? ` da ${formData.company}` : ''}.

Acabei de preencher o formulário no site sobre *${formData.interest}*.

Minha situação:
${formData.message}

${formData.phone ? `Telefone: ${formData.phone}` : ''}
Email: ${formData.email}

Podemos conversar?`
```

---

### 🟡 PRIORIDADE ALTA (Implementar em 2-4 semanas)

#### R4. Automação de Email Marketing
**Ferramenta recomendada:** **Loops.so** (grátis até 2.000 contatos)

**Fluxos a criar:**

**A. Newsletter (boas-vindas):**
```
Email 1 (Imediato): Boas-vindas + ebook/guia gratuito
Email 2 (3 dias depois): Estudo de caso (Voz do Terreiro)
Email 3 (7 dias depois): Artigo mais popular
Email 4 (14 dias depois): Convite para diagnóstico gratuito
```

**B. Contato (follow-up):**
```
Email 1 (15 min depois): "Recebemos seu contato! Vamos responder em até 24h"
Email 2 (24h depois, se não respondeu): "Conseguiu falar no WhatsApp? Veja este case relacionado ao seu interesse"
Email 3 (3 dias depois): "Ainda tem dúvidas? Aqui estão perguntas frequentes"
```

**Integração:**
```javascript
// Ao salvar lead, enviar para Loops
await fetch('https://app.loops.so/api/v1/contacts/create', {
  method: 'POST',
  headers: {
    'Authorization': `Bearer ${process.env.LOOPS_API_KEY}`,
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({
    email: formData.email,
    firstName: formData.name.split(' ')[0],
    userGroup: formData.interest, // Segmentação
    source: 'website_contact_form'
  })
})
```

---

#### R5. Rastreamento de Origem (UTM + Source Tracking)
**Por quê:** Saber de onde vem o lead = otimizar canais certos

**Implementar:**
1. Capturar UTM parameters da URL:
   ```javascript
   // src/utils/tracking.js
   export const getUTMParams = () => {
     const params = new URLSearchParams(window.location.search)
     return {
       utm_source: params.get('utm_source'),
       utm_medium: params.get('utm_medium'),
       utm_campaign: params.get('utm_campaign'),
       utm_content: params.get('utm_content'),
       utm_term: params.get('utm_term')
     }
   }
   ```

2. Salvar junto com lead:
   ```javascript
   const utmData = getUTMParams()
   await fetch('/api/saveToDatabase', {
     body: JSON.stringify({
       ...formData,
       source: utmData.utm_source || 'organic',
       campaign: utmData.utm_campaign || null,
       // ...
     })
   })
   ```

3. Usar em links de marketing:
   ```
   Instagram: estrategiaviva.com.br/?utm_source=instagram&utm_medium=social&utm_campaign=lancamento
   LinkedIn: estrategiaviva.com.br/?utm_source=linkedin&utm_medium=social&utm_campaign=artigo_arquetipos
   ```

---

#### R6. Adicionar Campos de Qualificação
**Adicionar ao formulário:**
- [ ] "Qual o tamanho da sua organização?" (1-10, 11-50, 51-200, 200+)
- [ ] "Quando pretende iniciar?" (Urgente, 1-3 meses, 3-6 meses, Exploratório)
- [ ] "Orçamento aproximado?" (Até R$ 20k, R$ 20-50k, R$ 50-100k, R$ 100k+, Prefiro não informar)

**Benefício:** Priorização comercial (leads urgentes e grandes primeiro)

---

### 🟢 PRIORIDADE MÉDIA (Implementar em 1-2 meses)

#### R7. Integração com CRM
**Opções recomendadas:**

**A. HubSpot (Grátis):**
- Melhor para B2B
- Pipeline visual
- Integração via API simples
- Automação de tarefas

**B. Pipedrive (R$ 65/mês):**
- Interface intuitiva
- Focado em vendas
- Relatórios robustos

**C. RD Station (R$ 79/mês):**
- Brasileiro (suporte PT)
- Marketing + CRM integrado
- Ótimo para inbound marketing

**Integração:**
```javascript
// Ao salvar lead, enviar para HubSpot
await fetch('https://api.hubapi.com/crm/v3/objects/contacts', {
  method: 'POST',
  headers: {
    'Authorization': `Bearer ${process.env.HUBSPOT_API_KEY}`,
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({
    properties: {
      email: formData.email,
      firstname: formData.name.split(' ')[0],
      lastname: formData.name.split(' ').slice(1).join(' '),
      phone: formData.phone,
      company: formData.company,
      produto_interesse: formData.interest,
      mensagem: formData.message,
      hs_lead_status: 'NEW'
    }
  })
})
```

---

#### R8. Reativar Newsletter (Atual está desabilitado)
**Passos:**
1. Descomentar código no `Footer.jsx`
2. Conectar ao Loops.so ou Mailchimp
3. Adicionar double opt-in (email de confirmação - LGPD)
4. Criar fluxo de nutrição (ver R4)

**Código corrigido:**
```javascript
const handleNewsletterSubmit = async (e) => {
  e.preventDefault()
  setStatus('loading')
  
  try {
    // Salvar no banco
    await fetch('/api/saveToDatabase', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ 
        type: 'newsletter',
        email,
        timestamp: new Date().toISOString()
      })
    })
    
    // Enviar para Loops.so
    await fetch('https://app.loops.so/api/v1/contacts/create', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${process.env.VITE_LOOPS_API_KEY}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        email,
        source: 'website_newsletter',
        subscribed: true
      })
    })
    
    setStatus('success')
    setEmail('')
    setTimeout(() => setStatus(''), 3000)
  } catch (error) {
    setStatus('error')
  }
}
```

---

#### R9. Proteção do Dashboard
**Por quê:** Dados de leads são sensíveis (LGPD)

**Opção 1: Autenticação simples (senha única)**
```javascript
// src/pages/Dashboard.jsx
const [authenticated, setAuthenticated] = useState(false)
const [password, setPassword] = useState('')

const handleLogin = () => {
  if (password === import.meta.env.VITE_DASHBOARD_PASSWORD) {
    setAuthenticated(true)
    sessionStorage.setItem('dashboard_auth', 'true')
  } else {
    alert('Senha incorreta')
  }
}

if (!authenticated) {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg">
        <h1 className="text-2xl font-bold mb-4">Acesso ao Dashboard</h1>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Digite a senha"
          className="border p-2 rounded w-full mb-4"
        />
        <button onClick={handleLogin} className="bg-primary text-white px-4 py-2 rounded">
          Entrar
        </button>
      </div>
    </div>
  )
}
```

**Opção 2: Autenticação com Clerk/Auth0 (mais seguro)**

---

#### R10. Exportação de Dados
**Adicionar ao Dashboard:**
- Botão "Exportar CSV"
- Botão "Exportar Excel"
- Filtros (data, serviço, status)

**Código:**
```javascript
const exportToCSV = () => {
  const headers = ['Data', 'Nome', 'Email', 'Telefone', 'Empresa', 'Interesse', 'Mensagem']
  const rows = submissions.map(s => [
    formatDate(s.timestamp),
    s.name,
    s.email,
    s.phone || '',
    s.company || '',
    s.interest || '',
    s.message || ''
  ])
  
  const csv = [headers, ...rows].map(row => row.join(',')).join('\n')
  const blob = new Blob([csv], { type: 'text/csv' })
  const url = URL.createObjectURL(blob)
  const a = document.createElement('a')
  a.href = url
  a.download = `leads_${new Date().toISOString().split('T')[0]}.csv`
  a.click()
}
```

---

### 🔵 PRIORIDADE BAIXA (Implementar em 3-6 meses)

#### R11. Lead Scoring
**Criar sistema de pontuação:**
- Visitou 3+ páginas: +10 pontos
- Leu artigo completo: +15 pontos
- Baixou material: +20 pontos
- Preencheu formulário: +50 pontos
- Abriu email: +5 pontos
- Clicou em email: +10 pontos

**Priorizar leads com 70+ pontos**

---

#### R12. Chatbot / Live Chat
**Ferramenta:** Intercom, Drift, Tidio (grátis)

**Benefício:** Capturar leads que preferem conversar antes de preencher formulário

---

#### R13. Remarketing
**Google Ads + Facebook Ads:**
- Pixel de rastreamento
- Audiências personalizadas (visitou mas não converteu)
- Anúncios personalizados por interesse

---

## 📈 5. PLANO DE IMPLEMENTAÇÃO RECOMENDADO

### Semana 1-2: Fundação
- [ ] Ativar PostgreSQL no Supabase
- [ ] Migrar dados do JSON para PostgreSQL
- [ ] Instalar Google Analytics 4
- [ ] Melhorar mensagem do WhatsApp

**Resultado esperado:** Sistema estável e rastreável

---

### Semana 3-4: Automação Básica
- [ ] Criar conta no Loops.so
- [ ] Configurar email de boas-vindas (newsletter)
- [ ] Configurar email de confirmação (contato)
- [ ] Implementar tracking de UTM

**Resultado esperado:** 80% de redução em follow-up manual

---

### Semana 5-6: Qualificação
- [ ] Adicionar campos de qualificação ao formulário
- [ ] Proteger dashboard com senha
- [ ] Adicionar exportação CSV

**Resultado esperado:** Leads mais qualificados e gestão segura

---

### Semana 7-8: Integração CRM
- [ ] Escolher e configurar CRM (HubSpot recomendado)
- [ ] Integrar formulário → CRM
- [ ] Criar pipeline de vendas
- [ ] Treinar equipe no CRM

**Resultado esperado:** Processo comercial estruturado

---

### Mês 3-6: Otimização
- [ ] Implementar lead scoring
- [ ] Criar fluxos de nutrição avançados
- [ ] Configurar remarketing
- [ ] Adicionar chatbot

**Resultado esperado:** Máquina de geração de leads escalável

---

## 💰 6. ESTIMATIVA DE INVESTIMENTO

### Ferramentas Recomendadas

| Ferramenta | Custo/Mês | Função | Prioridade |
|------------|-----------|--------|------------|
| **Supabase** | R$ 0 (até 500MB) | Banco de dados PostgreSQL | 🔴 Máxima |
| **Google Analytics 4** | R$ 0 | Analytics e conversão | 🔴 Máxima |
| **Loops.so** | R$ 0 (até 2k contatos) | Email marketing + automação | 🟡 Alta |
| **HubSpot CRM** | R$ 0 | Gestão de leads e pipeline | 🟡 Alta |
| **Tidio Chat** | R$ 0 (até 50 chats/mês) | Chat/Chatbot | 🔵 Baixa |
| **Hotjar** | R$ 0 (até 35 sessões/dia) | Heatmaps e gravações | 🔵 Baixa |

**Total mensal:** R$ 0 (tudo pode iniciar com planos gratuitos)

**Investimento apenas em desenvolvimento:** 40-60h de trabalho técnico

---

## 📊 7. MÉTRICAS DE SUCESSO

### Baseline Atual (Estimado)
- Taxa de conversão: ~1-2% (não medido)
- Tempo de resposta ao lead: Manual (variável)
- Taxa de follow-up: ~50% (estimado)
- Leads por mês: Desconhecido

### Metas Pós-Implementação (6 meses)
- Taxa de conversão: 3-5% (medido via GA4)
- Tempo de resposta ao lead: < 15 minutos (automação)
- Taxa de follow-up: 100% (automação)
- Leads qualificados/mês: Aumento de 200%
- Taxa de conversão lead → reunião: 20%
- Taxa de conversão reunião → proposta: 50%
- Taxa de fechamento: 30%

**Fórmula de ROI:**
```
Se hoje: 100 visitantes/mês → 2 leads → 0,5 clientes → R$ 20k faturamento
Com otimização: 100 visitantes/mês → 5 leads → 2 clientes → R$ 80k faturamento

ROI: 300% em 6 meses (sem aumentar tráfego, só otimizando conversão)
```

---

## 🎯 8. CONCLUSÃO

O sistema atual de captura de leads da Estratégia Viva é **funcional mas subaproveitado**. Os dados são coletados, mas não há **inteligência, automação ou otimização** em cima deles.

**3 Ações Críticas Imediatas:**

1. **Migrar para PostgreSQL hoje** (2h de trabalho)
   - Sem isso, dados estão em risco

2. **Instalar Google Analytics amanhã** (1h de trabalho)
   - Sem isso, voando às cegas

3. **Melhorar mensagem WhatsApp esta semana** (30min)
   - Impacto imediato na conversão

**Próximos Passos Sugeridos:**
1. Revisar este relatório com equipe comercial
2. Priorizar recomendações que impactam receita
3. Alocar 1 desenvolvedor por 2 semanas para implementação
4. Criar dashboard de métricas (GA4) para acompanhamento

**Pergunta Estratégica:**
> "Se pudéssemos dobrar a taxa de conversão do site sem aumentar tráfego, quanto valeria em faturamento anual?"

A resposta a essa pergunta define a urgência das implementações acima.

---

**Preparado por:** Análise Técnica Estratégia Viva  
**Próxima revisão:** Após implementação das prioridades máximas  
**Contato para dúvidas:** Via dashboard ou WhatsApp
