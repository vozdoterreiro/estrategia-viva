import React from 'react'
import ArticleLayout from '../../components/ArticleLayout'

export default function EstruturasOrganizacionaisComparadas() {
  return (
    <ArticleLayout
      title="Da Hierarquia à Rede: Redesenhando Estruturas Organizacionais"
      category="Estrutura"
      date="20 Set 2024"
      readTime="20 min"
      excerpt="Estruturas circulares, holacráticas, em rede... O que funciona de verdade? Análise comparativa de 5 modelos com vantagens, armadilhas e cases reais."
    >
      <div className="prose prose-lg max-w-none">
        <p className="text-xl text-muted-foreground leading-relaxed mb-8">
          Seu organograma não é neutro. Ele determina quem fala com quem, quem decide o quê, 
          como informação flui e onde inovação morre. Vamos dissecar 5 modelos estruturais 
          — do tradicional ao radicalmente distribuído — com verdades inconvenientes sobre cada um.
        </p>

        <h2 className="text-3xl font-heading font-bold text-primary mt-12 mb-6">
          Por Que Estrutura Importa Mais Que Você Pensa
        </h2>

        <div className="bg-gradient-to-br from-primary/5 to-secondary/5 rounded-xl p-8 my-10">
          <p className="font-bold text-lg mb-4">Estrutura determina:</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <p className="font-semibold mb-2">⚡ Velocidade de Decisão</p>
              <p className="text-sm text-muted-foreground">
                Quantas camadas entre problema e solução?
              </p>
            </div>
            <div>
              <p className="font-semibold mb-2">🔄 Fluxo de Informação</p>
              <p className="text-sm text-muted-foreground">
                Conhecimento fica em silos ou circula livre?
              </p>
            </div>
            <div>
              <p className="font-semibold mb-2">💡 Onde Nasce Inovação</p>
              <p className="text-sm text-muted-foreground">
                Só no topo ou em toda organização?
              </p>
            </div>
            <div>
              <p className="font-semibold mb-2">👥 Padrões de Colaboração</p>
              <p className="text-sm text-muted-foreground">
                Times isolados ou polinização cruzada?
              </p>
            </div>
          </div>
        </div>

        <h2 className="text-3xl font-heading font-bold text-primary mt-12 mb-6">
          Os 5 Modelos Estruturais (Análise Comparativa)
        </h2>

        <div className="space-y-10 my-12">
          {/* Modelo 1: Hierarquia Tradicional */}
          <div className="bg-white rounded-xl p-8 shadow-soft border-l-4 border-gray-500">
            <div className="flex items-start justify-between mb-4">
              <h3 className="text-2xl font-bold text-gray-900">1. Hierarquia Piramidal Tradicional</h3>
              <span className="px-3 py-1 bg-gray-200 text-gray-800 text-xs font-bold rounded-full">CLÁSSICO</span>
            </div>
            
            <div className="bg-gray-50 p-6 rounded-lg mb-6">
              <p className="font-bold mb-3">📐 Como Funciona:</p>
              <ul className="space-y-2 text-sm">
                <li>• CEO → VPs → Diretores → Gerentes → Coordenadores → Analistas</li>
                <li>• Cadeia de comando clara: cada pessoa tem 1 chefe</li>
                <li>• Comunicação vertical (de cima pra baixo e vice-versa)</li>
                <li>• Departamentos funcionais (Marketing, Vendas, Produto, etc.)</li>
                <li>• Decisões sobem até nível com autoridade necessária</li>
              </ul>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div className="bg-green-50 p-4 rounded-lg">
                <p className="font-bold text-green-900 mb-3">✓ Quando Funciona Bem</p>
                <ul className="text-sm text-green-800 space-y-2">
                  <li>• <strong>Operações previsíveis:</strong> manufatura, logística, finanças tradicionais</li>
                  <li>• <strong>Alta regulação:</strong> bancos, farmacêuticas (compliance complexo)</li>
                  <li>• <strong>Escala massiva:</strong> 10.000+ pessoas (Amazon warehouses, McDonald's)</li>
                  <li>• <strong>Baixa ambiguidade:</strong> processos bem definidos, pouca necessidade de adaptação rápida</li>
                </ul>
              </div>
              <div className="bg-red-50 p-4 rounded-lg">
                <p className="font-bold text-red-900 mb-3">✗ Onde Desmorona</p>
                <ul className="text-sm text-red-800 space-y-2">
                  <li>• <strong>Mercados dinâmicos:</strong> decisões lentas matam oportunidades</li>
                  <li>• <strong>Trabalho criativo:</strong> engessa inovação, mata autonomia</li>
                  <li>• <strong>Colaboração cross-funcional:</strong> silos viram feudos</li>
                  <li>• <strong>Retenção de talentos millennials/Gen Z:</strong> fogem de "chefes controladores"</li>
                </ul>
              </div>
            </div>

            <div className="bg-blue-50 p-6 rounded-lg">
              <p className="font-bold text-blue-900 mb-3">📊 Case Real: Procter & Gamble</p>
              <p className="text-sm text-blue-800 mb-3">
                Mantém hierarquia tradicional para operações globais (160.000 pessoas, 180 países). 
                <strong>Funciona</strong> porque produtos são previsíveis (sabão é sabão há 100 anos) 
                e regulação é pesada.
              </p>
              <p className="text-sm text-blue-800">
                <strong>Mas:</strong> Quando tentou inovar rápido (digital, DTC), criou unidades separadas 
                com estrutura mais fluida. Hierarquia pura não aguenta velocidade tech.
              </p>
            </div>
          </div>

          {/* Modelo 2: Matricial */}
          <div className="bg-white rounded-xl p-8 shadow-soft border-l-4 border-blue-500">
            <div className="flex items-start justify-between mb-4">
              <h3 className="text-2xl font-bold text-blue-900">2. Estrutura Matricial</h3>
              <span className="px-3 py-1 bg-blue-200 text-blue-900 text-xs font-bold rounded-full">HÍBRIDO</span>
            </div>
            
            <div className="bg-gray-50 p-6 rounded-lg mb-6">
              <p className="font-bold mb-3">📐 Como Funciona:</p>
              <ul className="space-y-2 text-sm">
                <li>• Pessoas têm <strong>2 chefes:</strong> funcional (especialidade) + projeto (produto/cliente)</li>
                <li>• <strong>Exemplo:</strong> Designer responde ao Head de Design (skills) + PM do produto X (entrega)</li>
                <li>• Tensão estrutural por design: balanceia expertise vs. execução</li>
                <li>• Comunicação horizontal mais forte que hierarquia</li>
              </ul>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div className="bg-green-50 p-4 rounded-lg">
                <p className="font-bold text-green-900 mb-3">✓ Quando Funciona Bem</p>
                <ul className="text-sm text-green-800 space-y-2">
                  <li>• <strong>Projetos complexos:</strong> construção civil, consultoria estratégica</li>
                  <li>• <strong>Múltiplos produtos/clientes:</strong> agências de publicidade, software houses</li>
                  <li>• <strong>Necessidade de especialização profunda:</strong> P&D, engenharia avançada</li>
                </ul>
              </div>
              <div className="bg-red-50 p-4 rounded-lg">
                <p className="font-bold text-red-900 mb-3">✗ Onde Desmorona</p>
                <ul className="text-sm text-red-800 space-y-2">
                  <li>• <strong>"Quem é meu chefe de verdade?"</strong> Conflitos de prioridade constantes</li>
                  <li>• <strong>Reuniões infinitas:</strong> precisa alinhar 2 hierarquias</li>
                  <li>• <strong>Politicagem:</strong> chefes competem por pessoas e recursos</li>
                  <li>• <strong>Burnout:</strong> pessoas pressionadas de 2 lados</li>
                </ul>
              </div>
            </div>

            <div className="bg-yellow-50 p-6 rounded-lg">
              <p className="font-bold text-yellow-900 mb-3">⚠️ A Verdade Inconveniente</p>
              <p className="text-sm text-yellow-800">
                Estrutura matricial só funciona se os <strong>2 chefes têm maturidade emocional alta</strong> 
                e clareza de papéis. Na prática, 70% das matriciais viram campo de batalha política. 
                Não tente isso sem liderança muito evoluída.
              </p>
            </div>
          </div>

          {/* Modelo 3: Circular/Pods */}
          <div className="bg-white rounded-xl p-8 shadow-soft border-l-4 border-green-500">
            <div className="flex items-start justify-between mb-4">
              <h3 className="text-2xl font-bold text-green-900">3. Estrutura Circular (Pods/Squads)</h3>
              <span className="px-3 py-1 bg-green-200 text-green-900 text-xs font-bold rounded-full">ÁGIL</span>
            </div>
            
            <div className="bg-gray-50 p-6 rounded-lg mb-6">
              <p className="font-bold mb-3">📐 Como Funciona:</p>
              <ul className="space-y-2 text-sm">
                <li>• Organização dividida em <strong>squads/pods autônomos</strong> (6-10 pessoas)</li>
                <li>• Cada squad: cross-funcional (design, dev, produto, dados) + responsável por missão clara</li>
                <li>• <strong>Exemplo Spotify:</strong> Squad "Discovery" tem tudo que precisa para melhorar discovery de música</li>
                <li>• Squads se conectam em <strong>Tribes</strong> (meta-times) e <strong>Chapters</strong> (especialidades)</li>
                <li>• Liderança descentralizada: squad leader não é "chefe", é facilitador</li>
              </ul>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div className="bg-green-50 p-4 rounded-lg">
                <p className="font-bold text-green-900 mb-3">✓ Quando Funciona Bem</p>
                <ul className="text-sm text-green-800 space-y-2">
                  <li>• <strong>Produtos digitais:</strong> apps, plataformas SaaS (Spotify, iFood)</li>
                  <li>• <strong>Inovação contínua:</strong> precisa testar rápido, pivotar, iterar</li>
                  <li>• <strong>50-500 pessoas:</strong> grande o suficiente para formar squads, pequeno demais para burocracia</li>
                  <li>• <strong>Cultura de ownership:</strong> pessoas querem autonomia + responsabilidade</li>
                </ul>
              </div>
              <div className="bg-red-50 p-4 rounded-lg">
                <p className="font-bold text-red-900 mb-3">✗ Onde Desmorona</p>
                <ul className="text-sm text-red-800 space-y-2">
                  <li>• <strong>Dependências fortes:</strong> squads não conseguem ser realmente autônomos</li>
                  <li>• <strong>Recursos compartilhados:</strong> briga por designers, backend, infra</li>
                  <li>• <strong>Visão fragmentada:</strong> cada squad otimiza sua parte, produto como um todo sofre</li>
                  <li>• <strong>Carreira confusa:</strong> "Como eu cresço se não tem hierarquia?"</li>
                </ul>
              </div>
            </div>

            <div className="bg-blue-50 p-6 rounded-lg">
              <p className="font-bold text-blue-900 mb-3">📊 Case Real: Spotify (O Mito vs. Realidade)</p>
              <p className="text-sm text-blue-800 mb-3">
                <strong>Mito:</strong> "Spotify tem squads perfeitos e não tem hierarquia!"<br/>
                <strong>Realidade:</strong> Squads funcionam para produto, mas infraestrutura, dados e plataforma 
                ainda têm hierarquia tradicional. E squads têm "Tech Leads" que, na prática, são chefes.
              </p>
              <p className="text-sm text-blue-800">
                <strong>Lição:</strong> Estrutura circular é excelente para <em>partes</em> da organização, 
                não necessariamente para tudo.
              </p>
            </div>
          </div>

          {/* Modelo 4: Rede Distribuída */}
          <div className="bg-white rounded-xl p-8 shadow-soft border-l-4 border-purple-500">
            <div className="flex items-start justify-between mb-4">
              <h3 className="text-2xl font-bold text-purple-900">4. Rede Distribuída (Network)</h3>
              <span className="px-3 py-1 bg-purple-200 text-purple-900 text-xs font-bold rounded-full">FLUIDO</span>
            </div>
            
            <div className="bg-gray-50 p-6 rounded-lg mb-6">
              <p className="font-bold mb-3">📐 Como Funciona:</p>
              <ul className="space-y-2 text-sm">
                <li>• <strong>Zero hierarquia formal.</strong> Autoridade emerge de expertise + contexto</li>
                <li>• Pessoas se auto-organizam em torno de projetos/problemas</li>
                <li>• <strong>Exemplo:</strong> Alguém propõe projeto → convida quem tem skills → time se forma → executa → dissolve</li>
                <li>• Comunicação peer-to-peer (todos falam com todos)</li>
                <li>• Reputação = moeda de poder (quem entrega bem, ganha influência)</li>
              </ul>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div className="bg-green-50 p-4 rounded-lg">
                <p className="font-bold text-green-900 mb-3">✓ Quando Funciona Bem</p>
                <ul className="text-sm text-green-800 space-y-2">
                  <li>• <strong>Trabalho criativo puro:</strong> design studios, coletivos artísticos</li>
                  <li>• <strong>Consultoria boutique:</strong> times pequenos de experts (5-20 pessoas)</li>
                  <li>• <strong>Open source:</strong> Linux, Wikipedia (contribuidores voluntários)</li>
                  <li>• <strong>Alta confiança:</strong> todos se conhecem, valores compartilhados fortes</li>
                </ul>
              </div>
              <div className="bg-red-50 p-4 rounded-lg">
                <p className="font-bold text-red-900 mb-3">✗ Onde Desmorona</p>
                <ul className="text-sm text-red-800 space-y-2">
                  <li>• <strong>Escala {'>'}50 pessoas:</strong> impossível todos conhecerem todos</li>
                  <li>• <strong>Accountability difusa:</strong> "Quem é responsável por isso?" → "Sei lá"</li>
                  <li>• <strong>Paralisia decisória:</strong> sem clareza de quem decide, nada sai</li>
                  <li>• <strong>Hierarquia informal tóxica:</strong> "panelinha dos fundadores" vira governo sombra</li>
                </ul>
              </div>
            </div>

            <div className="bg-red-50 p-6 rounded-lg">
              <p className="font-bold text-red-900 mb-3">🚫 O Erro Fatal</p>
              <p className="text-sm text-red-800">
                Muitas startups tentam "ser rede distribuída" porque parece cool. Resultado: 
                paralisia, frustração, hierarquia informal (pior que formal). 
                <strong>Rede só funciona com maturidade cultural altíssima.</strong> Não tente antes de estar pronto.
              </p>
            </div>
          </div>

          {/* Modelo 5: Holacracia */}
          <div className="bg-white rounded-xl p-8 shadow-soft border-l-4 border-orange-500">
            <div className="flex items-start justify-between mb-4">
              <h3 className="text-2xl font-bold text-orange-900">5. Holacracia (Papéis Explícitos)</h3>
              <span className="px-3 py-1 bg-orange-200 text-orange-900 text-xs font-bold rounded-full">SISTÊMICO</span>
            </div>
            
            <div className="bg-gray-50 p-6 rounded-lg mb-6">
              <p className="font-bold mb-3">📐 Como Funciona:</p>
              <ul className="space-y-2 text-sm">
                <li>• Autoridade atribuída a <strong>papéis</strong>, não pessoas</li>
                <li>• Cada papel tem: propósito, domínios (autoridade), responsabilidades (accountabilities)</li>
                <li>• <strong>Exemplo:</strong> Papel "Lead de Marketing" tem autoridade sobre orçamento de ads, responsabilidade por CAC</li>
                <li>• Pessoas ocupam múltiplos papéis fluidos</li>
                <li>• Governança separada de operação (reuniões diferentes)</li>
                <li>• Tudo documentado em software (GlassFrog, Holaspirit)</li>
              </ul>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div className="bg-green-50 p-4 rounded-lg">
                <p className="font-bold text-green-900 mb-3">✓ Quando Funciona Bem</p>
                <ul className="text-sm text-green-800 space-y-2">
                  <li>• <strong>Clareza extrema:</strong> zero ambiguidade sobre quem faz/decide o quê</li>
                  <li>• <strong>Evolução orgânica:</strong> papéis mudam rápido sem reorganizações dolorosas</li>
                  <li>• <strong>Meritocracia real:</strong> crescimento sem "subir hierarquia" (mais papéis ≠ promoção)</li>
                  <li>• <strong>Tech-forward:</strong> empresas que amam processos + tecnologia</li>
                </ul>
              </div>
              <div className="bg-red-50 p-4 rounded-lg">
                <p className="font-bold text-red-900 mb-3">✗ Onde Desmorona</p>
                <ul className="text-sm text-red-800 space-y-2">
                  <li>• <strong>Curva de aprendizado íngreme:</strong> 6-12 meses para fluência</li>
                  <li>• <strong>Frieza mecânica:</strong> pode matar calor humano/empatia</li>
                  <li>• <strong>Overhead inicial alto:</strong> requer facilitação profissional + software pago</li>
                  <li>• <strong>Resistência cultural:</strong> culturas hierárquicas tradicionais rejeitam</li>
                </ul>
              </div>
            </div>

            <div className="bg-blue-50 p-6 rounded-lg">
              <p className="font-bold text-blue-900 mb-3">📊 Case Real: Zappos (A Tentativa Bilionária)</p>
              <p className="text-sm text-blue-800 mb-3">
                Em 2013, Zappos (1.500 pessoas, $1B receita) adotou Holacracia totalmente. 
                <strong>Resultado:</strong> 18% turnover no primeiro ano (pessoas odiaram ou amaram, sem meio-termo).
              </p>
              <p className="text-sm text-blue-800">
                Após 7 anos, continua usando (sucesso?), mas admite: "Não é para todos. 
                Funciona porque combinamos com cultura de experimentação."
              </p>
            </div>
          </div>
        </div>

        <h2 className="text-3xl font-heading font-bold text-primary mt-12 mb-6">
          Comparação Lado a Lado (Tabela Decisória)
        </h2>

        <div className="overflow-x-auto my-8">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="bg-primary text-primary-foreground">
                <th className="border border-gray-300 p-3 text-left">Critério</th>
                <th className="border border-gray-300 p-3">Hierarquia</th>
                <th className="border border-gray-300 p-3">Matricial</th>
                <th className="border border-gray-300 p-3">Circular</th>
                <th className="border border-gray-300 p-3">Rede</th>
                <th className="border border-gray-300 p-3">Holacracia</th>
              </tr>
            </thead>
            <tbody className="bg-white">
              <tr>
                <td className="border border-gray-300 p-3 font-bold">Velocidade Decisão</td>
                <td className="border border-gray-300 p-3 text-center">⭐⭐</td>
                <td className="border border-gray-300 p-3 text-center">⭐</td>
                <td className="border border-gray-300 p-3 text-center">⭐⭐⭐⭐</td>
                <td className="border border-gray-300 p-3 text-center">⭐⭐⭐</td>
                <td className="border border-gray-300 p-3 text-center">⭐⭐⭐⭐</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-300 p-3 font-bold">Clareza Papéis</td>
                <td className="border border-gray-300 p-3 text-center">⭐⭐⭐⭐⭐</td>
                <td className="border border-gray-300 p-3 text-center">⭐⭐</td>
                <td className="border border-gray-300 p-3 text-center">⭐⭐⭐</td>
                <td className="border border-gray-300 p-3 text-center">⭐</td>
                <td className="border border-gray-300 p-3 text-center">⭐⭐⭐⭐⭐</td>
              </tr>
              <tr>
                <td className="border border-gray-300 p-3 font-bold">Inovação</td>
                <td className="border border-gray-300 p-3 text-center">⭐⭐</td>
                <td className="border border-gray-300 p-3 text-center">⭐⭐⭐</td>
                <td className="border border-gray-300 p-3 text-center">⭐⭐⭐⭐⭐</td>
                <td className="border border-gray-300 p-3 text-center">⭐⭐⭐⭐⭐</td>
                <td className="border border-gray-300 p-3 text-center">⭐⭐⭐⭐</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-300 p-3 font-bold">Escalabilidade</td>
                <td className="border border-gray-300 p-3 text-center">⭐⭐⭐⭐⭐</td>
                <td className="border border-gray-300 p-3 text-center">⭐⭐⭐⭐</td>
                <td className="border border-gray-300 p-3 text-center">⭐⭐⭐</td>
                <td className="border border-gray-300 p-3 text-center">⭐</td>
                <td className="border border-gray-300 p-3 text-center">⭐⭐⭐⭐</td>
              </tr>
              <tr>
                <td className="border border-gray-300 p-3 font-bold">Facilidade Implementação</td>
                <td className="border border-gray-300 p-3 text-center">⭐⭐⭐⭐⭐</td>
                <td className="border border-gray-300 p-3 text-center">⭐⭐⭐</td>
                <td className="border border-gray-300 p-3 text-center">⭐⭐⭐</td>
                <td className="border border-gray-300 p-3 text-center">⭐</td>
                <td className="border border-gray-300 p-3 text-center">⭐⭐</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h2 className="text-3xl font-heading font-bold text-primary mt-12 mb-6">
          Como Escolher (Decision Tree)
        </h2>

        <div className="bg-white rounded-xl p-8 shadow-soft my-8">
          <div className="space-y-6">
            <div>
              <p className="font-bold mb-2">1. Você tem mais de 1.000 pessoas?</p>
              <p className="text-sm text-muted-foreground ml-4">
                → <strong>SIM:</strong> Hierarquia ou Matricial (rede/circular não escalam assim)<br/>
                → <strong>NÃO:</strong> Prossiga para pergunta 2
              </p>
            </div>

            <div>
              <p className="font-bold mb-2">2. Seu mercado muda drasticamente a cada 6 meses?</p>
              <p className="text-sm text-muted-foreground ml-4">
                → <strong>SIM:</strong> Circular ou Holacracia (agilidade {'>'} estabilidade)<br/>
                → <strong>NÃO:</strong> Hierarquia pode funcionar bem
              </p>
            </div>

            <div>
              <p className="font-bold mb-2">3. Você tem recursos para investir 12-18 meses em transição?</p>
              <p className="text-sm text-muted-foreground ml-4">
                → <strong>SIM:</strong> Considere Holacracia ou Circular<br/>
                → <strong>NÃO:</strong> Fique com Hierarquia ou ajustes incrementais
              </p>
            </div>

            <div>
              <p className="font-bold mb-2">4. Sua cultura valoriza mais clareza ou autonomia?</p>
              <p className="text-sm text-muted-foreground ml-4">
                → <strong>Clareza:</strong> Holacracia (papéis explícitos)<br/>
                → <strong>Autonomia:</strong> Rede ou Circular
              </p>
            </div>

            <div>
              <p className="font-bold mb-2">5. Você tem dependências fortes entre times/áreas?</p>
              <p className="text-sm text-muted-foreground ml-4">
                → <strong>SIM:</strong> Matricial (orquestra dependências) ou Hierarquia<br/>
                → <strong>NÃO:</strong> Circular (squads autônomos)
              </p>
            </div>
          </div>
        </div>

        <h2 className="text-3xl font-heading font-bold text-primary mt-12 mb-6">
          A Verdade: Estruturas Híbridas Vencem
        </h2>

        <p>
          Spoiler: as melhores organizações <strong>não escolhem um modelo</strong>. 
          Elas usam estruturas diferentes para partes diferentes:
        </p>

        <div className="bg-gradient-to-br from-primary/5 to-secondary/5 rounded-xl p-8 my-8">
          <h3 className="font-bold text-lg mb-4">Exemplo: Empresa Tech de 300 pessoas</h3>
          <ul className="space-y-3 text-sm">
            <li>• <strong>Produto/Eng:</strong> Circular (squads ágeis)</li>
            <li>• <strong>Vendas/CS:</strong> Hierarquia (previsibilidade de processos)</li>
            <li>• <strong>Marketing:</strong> Matricial (projetos cross + especialização)</li>
            <li>• <strong>Operações/Finanças:</strong> Hierarquia (compliance, controle)</li>
          </ul>
        </div>

        <div className="bg-amber-50 border-l-4 border-amber-500 p-6 rounded-r-lg my-8">
          <h3 className="font-bold text-lg text-amber-900 mb-2">⚠️ Armadilha Fatal</h3>
          <p className="text-amber-800">
            Não mude estrutura porque está na moda. Mude quando a atual está freando crescimento/inovação. 
            E sempre teste em piloto antes de transformar tudo.
          </p>
        </div>

        <div className="bg-gradient-to-br from-primary to-primary-dark text-primary-foreground rounded-xl p-8 my-12 text-center">
          <h3 className="text-2xl font-bold mb-4">Qual Estrutura Serve Sua Organização?</h3>
          <p className="text-lg mb-6 opacity-90">
            Nossa Arquitetura de Ecossistema Organizacional mapeia sua cultura atual, 
            identifica gargalos estruturais e co-cria modelo híbrido adaptado à sua realidade.
          </p>
          <p className="text-sm opacity-75">
            Não vendemos modelos prontos. Desenhamos estruturas vivas que evoluem com você.
          </p>
        </div>
      </div>
    </ArticleLayout>
  )
}
