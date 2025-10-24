import React from 'react'
import ArticleLayout from '../../components/ArticleLayout'

export default function MetricasVitalidadeOrganizacional() {
  return (
    <ArticleLayout
      title="Como Medir a Vitalidade da Sua Organização (Além do Financeiro)"
      category="Métricas"
      date="10 Set 2024"
      readTime="14 min"
      excerpt="NPS, EBITDA, CAC, LTV... E a saúde cultural? Conheça as 12 métricas de vitalidade organizacional que preveem sustentabilidade de longo prazo."
    >
      <div className="prose prose-lg max-w-none">
        <p className="text-xl text-muted-foreground leading-relaxed mb-8">
          Você mede receita, lucro, CAC, LTV, churn. Mas mede vitalidade cultural? A saúde do organismo 
          que gera esses números? Se não, está pilotando no escuro — métricas financeiras são <em>indicadores 
          atrasados</em>. Quando caem, o problema já estava lá há meses.
        </p>

        <div className="bg-red-50 border-l-4 border-red-500 p-6 rounded-r-lg my-8">
          <h3 className="font-bold text-lg text-red-900 mb-3">O Problema com Métricas Tradicionais</h3>
          <ul className="text-sm text-red-800 space-y-2">
            <li>• <strong>EBITDA:</strong> Pode estar alto enquanto cultura apodrece (corte de custos insustentável)</li>
            <li>• <strong>Revenue Growth:</strong> Pode vir de queimar pessoas (sprint insustentável)</li>
            <li>• <strong>NPS:</strong> Mede satisfação do cliente, não vitalidade interna</li>
            <li>• <strong>Pesquisa de Clima:</strong> Mede "felicidade", não saúde sistêmica</li>
          </ul>
          <p className="text-red-900 mt-4 font-bold">
            Você pode ter números verdes no dashboard e organismo morrendo. Precisa medir vitalidade diretamente.
          </p>
        </div>

        <h2 className="text-3xl font-heading font-bold text-primary mt-12 mb-6">
          As 12 Métricas de Vitalidade Organizacional
        </h2>

        <p className="mb-8">
          Organizamos em 4 dimensões (as 4 Forças Vitais). Cada força tem 3 métricas-chave.
        </p>

        {/* ALMA */}
        <div className="bg-gradient-to-br from-primary/5 to-primary/10 rounded-xl p-8 my-10">
          <div className="flex items-center mb-6">
            <span className="text-4xl mr-4">🔥</span>
            <h3 className="text-2xl font-bold text-primary">ALMA: Identidade & Propósito</h3>
          </div>

          <div className="space-y-6">
            <div className="bg-white rounded-lg p-6 shadow-soft">
              <h4 className="font-bold text-lg mb-3">1. Clarity Score (Clareza de Propósito)</h4>
              
              <div className="mb-4">
                <p className="text-sm font-semibold mb-2">📊 Como Medir:</p>
                <p className="text-sm mb-3">
                  Pergunta simples para 100% da empresa (anonimizada):
                </p>
                <div className="bg-gray-50 p-4 rounded-lg text-sm italic mb-3">
                  "Em 1-2 frases, explique o propósito da nossa organização (por que existimos além de lucro)."
                </div>
                <p className="text-sm">
                  <strong>Scoring:</strong> Classifique respostas em 3 categorias:
                </p>
                <ul className="text-sm space-y-1 ml-6 mt-2">
                  <li>• <strong>Alta clareza:</strong> Resposta alinhada ao propósito declarado, com palavras próprias</li>
                  <li>• <strong>Clareza vaga:</strong> Menciona propósito mas de forma genérica ("ajudar pessoas")</li>
                  <li>• <strong>Sem clareza:</strong> Não sabe ou diz apenas função ("vendemos software")</li>
                </ul>
              </div>

              <div className="grid grid-cols-3 gap-4 my-4 text-center text-sm">
                <div className="bg-red-50 p-3 rounded">
                  <p className="font-bold text-red-900">🚨 Alerta</p>
                  <p className="text-red-800">{'<'} 40% clareza</p>
                </div>
                <div className="bg-yellow-50 p-3 rounded">
                  <p className="font-bold text-yellow-900">⚠️ Atenção</p>
                  <p className="text-yellow-800">40-70% clareza</p>
                </div>
                <div className="bg-green-50 p-3 rounded">
                  <p className="font-bold text-green-900">✓ Saudável</p>
                  <p className="text-green-800">{'>'}{7}0% clareza</p>
                </div>
              </div>

              <p className="text-sm text-muted-foreground">
                <strong>Por que importa:</strong> Se pessoas não sabem POR QUE trabalham ali, 
                são mercenárias (saem por 10% a mais de salário). Clareza de propósito = retenção + engajamento.
              </p>
            </div>

            <div className="bg-white rounded-lg p-6 shadow-soft">
              <h4 className="font-bold text-lg mb-3">2. Values Embodiment Index (Valores Vividos)</h4>
              
              <div className="mb-4">
                <p className="text-sm font-semibold mb-2">📊 Como Medir:</p>
                <p className="text-sm mb-3">
                  Para cada valor cultural declarado, pergunte:
                </p>
                <div className="bg-gray-50 p-4 rounded-lg text-sm italic mb-3">
                  "Na última semana, você viu [VALOR X] sendo praticado por alguém? Descreva o comportamento."
                </div>
                <p className="text-sm">
                  <strong>Scoring:</strong> % de pessoas que conseguem citar exemplo concreto dos últimos 7 dias.
                </p>
              </div>

              <div className="bg-blue-50 p-4 rounded-lg my-4">
                <p className="text-sm font-bold mb-2">Exemplo Prático:</p>
                <p className="text-sm italic mb-2">
                  Valor: "Transparência Radical"
                </p>
                <ul className="text-sm space-y-1">
                  <li>• <strong>Resposta vaga:</strong> "A gente é transparente" (não conta)</li>
                  <li>• <strong>Resposta concreta:</strong> "Maria compartilhou métricas de churn ruins na all-hands, 
                  sem maquiar" (conta)</li>
                </ul>
              </div>

              <div className="grid grid-cols-3 gap-4 my-4 text-center text-sm">
                <div className="bg-red-50 p-3 rounded">
                  <p className="font-bold text-red-900">🚨 Valores Decorativos</p>
                  <p className="text-red-800">{'<'} 30% embodiment</p>
                </div>
                <div className="bg-yellow-50 p-3 rounded">
                  <p className="font-bold text-yellow-900">⚠️ Valores Parciais</p>
                  <p className="text-yellow-800">30-60%</p>
                </div>
                <div className="bg-green-50 p-3 rounded">
                  <p className="font-bold text-green-900">✓ Valores Vivos</p>
                  <p className="text-green-800">{'>'}{6}0%</p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg p-6 shadow-soft">
              <h4 className="font-bold text-lg mb-3">3. Brand-Culture Alignment (Alinhamento Marca-Cultura)</h4>
              
              <div className="mb-4">
                <p className="text-sm font-semibold mb-2">📊 Como Medir:</p>
                <p className="text-sm mb-3">
                  Mostre promessas de marca (site, redes, campanhas) + cultura interna. Pergunte:
                </p>
                <div className="bg-gray-50 p-4 rounded-lg text-sm italic mb-3">
                  "Em uma escala de 1-10, nossa cultura interna reflete o que prometemos externamente?"
                </div>
                <p className="text-sm">
                  <strong>Scoring:</strong> Média das respostas. Abaixo de 7 = dissonância (teatro cultural).
                </p>
              </div>

              <p className="text-sm text-muted-foreground">
                <strong>Por que importa:</strong> Dissonância marca-cultura = funcionários cínicos 
                ("a gente finge que é inovador, mas é burocrático demais"). Cinismo mata vitalidade.
              </p>
            </div>
          </div>
        </div>

        {/* CONEXÕES */}
        <div className="bg-gradient-to-br from-secondary/5 to-secondary/10 rounded-xl p-8 my-10">
          <div className="flex items-center mb-6">
            <span className="text-4xl mr-4">🌊</span>
            <h3 className="text-2xl font-bold text-secondary">CONEXÕES: Relações & Fluxos</h3>
          </div>

          <div className="space-y-6">
            <div className="bg-white rounded-lg p-6 shadow-soft">
              <h4 className="font-bold text-lg mb-3">4. Psychological Safety Score</h4>
              
              <div className="mb-4">
                <p className="text-sm font-semibold mb-2">📊 Como Medir:</p>
                <p className="text-sm mb-3">
                  Use as 7 perguntas de Amy Edmondson (Harvard), escala 1-5:
                </p>
                <ul className="text-sm space-y-2">
                  <li>1. Se você comete erro nesse time, não é usado contra você</li>
                  <li>2. Pessoas se sentem confortáveis trazendo problemas/questões difíceis</li>
                  <li>3. Ninguém rejeitaria outros por serem diferentes</li>
                  <li>4. É seguro arriscar nesse time</li>
                  <li>5. Não é difícil pedir ajuda</li>
                  <li>6. Ninguém minaria deliberadamente esforços alheios</li>
                  <li>7. Habilidades e talentos são valorizados e usados</li>
                </ul>
              </div>

              <div className="grid grid-cols-3 gap-4 my-4 text-center text-sm">
                <div className="bg-red-50 p-3 rounded">
                  <p className="font-bold text-red-900">🚨 Medo/Politicagem</p>
                  <p className="text-red-800">Média {'<'} 3.0</p>
                </div>
                <div className="bg-yellow-50 p-3 rounded">
                  <p className="font-bold text-yellow-900">⚠️ Insegurança Moderada</p>
                  <p className="text-yellow-800">3.0-4.0</p>
                </div>
                <div className="bg-green-50 p-3 rounded">
                  <p className="font-bold text-green-900">✓ Segurança Alta</p>
                  <p className="text-green-800">{'>'}{4}.0</p>
                </div>
              </div>

              <p className="text-sm text-muted-foreground">
                <strong>Por que importa:</strong> Google descobriu que segurança psicológica é o preditor 
                #1 de performance de time. Sem ela, inovação morre (ninguém arrisca).
              </p>
            </div>

            <div className="bg-white rounded-lg p-6 shadow-soft">
              <h4 className="font-bold text-lg mb-3">5. Cross-Functional Collaboration Index</h4>
              
              <div className="mb-4">
                <p className="text-sm font-semibold mb-2">📊 Como Medir:</p>
                <p className="text-sm mb-3">
                  Pergunte a cada pessoa:
                </p>
                <div className="bg-gray-50 p-4 rounded-lg text-sm italic mb-3">
                  "Na última semana, você trabalhou ativamente com quantas pessoas de OUTRAS áreas?"
                </div>
                <p className="text-sm">
                  <strong>Scoring:</strong> Média de interações cross-funcionais por pessoa/semana.
                </p>
              </div>

              <div className="grid grid-cols-3 gap-4 my-4 text-center text-sm">
                <div className="bg-red-50 p-3 rounded">
                  <p className="font-bold text-red-900">🚨 Silos Rígidos</p>
                  <p className="text-red-800">{'<'} 2 interações</p>
                </div>
                <div className="bg-yellow-50 p-3 rounded">
                  <p className="font-bold text-yellow-900">⚠️ Colaboração Ocasional</p>
                  <p className="text-yellow-800">2-5 interações</p>
                </div>
                <div className="bg-green-50 p-3 rounded">
                  <p className="font-bold text-green-900">✓ Polinização Ativa</p>
                  <p className="text-green-800">{'>'}{5} interações</p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg p-6 shadow-soft">
              <h4 className="font-bold text-lg mb-3">6. Information Flow Velocity</h4>
              
              <div className="mb-4">
                <p className="text-sm font-semibold mb-2">📊 Como Medir:</p>
                <p className="text-sm mb-3">
                  Pergunte em pulse surveys semanais:
                </p>
                <div className="bg-gray-50 p-4 rounded-lg text-sm italic mb-3">
                  "Você tem as informações necessárias para fazer bem seu trabalho esta semana?" (Sim/Não)
                </div>
                <p className="text-sm">
                  <strong>Scoring:</strong> % de "Sim" semanal. Abaixo de 70% = gargalos de comunicação.
                </p>
              </div>

              <p className="text-sm text-muted-foreground">
                <strong>Complemento:</strong> Tempo médio entre "pergunta feita" e "resposta recebida" em canais 
                internos. Slack/Teams analytics podem gerar isso automaticamente.
              </p>
            </div>
          </div>
        </div>

        {/* NUTRIÇÃO */}
        <div className="bg-gradient-to-br from-primary/5 to-primary/10 rounded-xl p-8 my-10">
          <div className="flex items-center mb-6">
            <span className="text-4xl mr-4">🌱</span>
            <h3 className="text-2xl font-bold text-primary">NUTRIÇÃO: Recursos & Processos</h3>
          </div>

          <div className="space-y-6">
            <div className="bg-white rounded-lg p-6 shadow-soft">
              <h4 className="font-bold text-lg mb-3">7. Decision Velocity (Velocidade Decisória)</h4>
              
              <div className="mb-4">
                <p className="text-sm font-semibold mb-2">📊 Como Medir:</p>
                <p className="text-sm mb-3">
                  Rastreie decisões importantes (mudanças de roadmap, contratações, investimentos). Para cada:
                </p>
                <ul className="text-sm space-y-1 ml-4">
                  <li>• Data da proposta inicial</li>
                  <li>• Data da decisão final</li>
                  <li>• Cálculo: Dias entre proposta e decisão</li>
                </ul>
                <p className="text-sm mt-3">
                  <strong>Scoring:</strong> Tempo médio de decisão por categoria (estratégica, tática, operacional).
                </p>
              </div>

              <div className="bg-blue-50 p-4 rounded-lg my-4">
                <p className="text-sm font-bold mb-2">Benchmark:</p>
                <ul className="text-sm space-y-1">
                  <li>• <strong>Operacional:</strong> {'<'} 3 dias</li>
                  <li>• <strong>Tática:</strong> {'<'} 2 semanas</li>
                  <li>• <strong>Estratégica:</strong> {'<'} 1 mês</li>
                </ul>
                <p className="text-sm mt-2 text-muted-foreground">
                  Acima disso = paralisia organizacional.
                </p>
              </div>
            </div>

            <div className="bg-white rounded-lg p-6 shadow-soft">
              <h4 className="font-bold text-lg mb-3">8. Process Friction Score</h4>
              
              <div className="mb-4">
                <p className="text-sm font-semibold mb-2">📊 Como Medir:</p>
                <p className="text-sm mb-3">
                  Mensalmente, pergunte:
                </p>
                <div className="bg-gray-50 p-4 rounded-lg text-sm italic mb-3">
                  "Quais processos/ferramentas atrapalharam seu trabalho este mês? Liste até 3."
                </div>
                <p className="text-sm">
                  <strong>Scoring:</strong> Categorize reclamações. Top 5 "atritadores" = prioridades de simplificação.
                </p>
              </div>

              <p className="text-sm text-muted-foreground">
                <strong>Métrica complementar:</strong> % de tempo gasto em "trabalho sobre trabalho" 
                (reuniões, aprovações, burocracia) vs. trabalho real produtivo. Ideal: {'<'} 30%.
              </p>
            </div>

            <div className="bg-white rounded-lg p-6 shadow-soft">
              <h4 className="font-bold text-lg mb-3">9. Learning Velocity (Taxa de Aprendizagem)</h4>
              
              <div className="mb-4">
                <p className="text-sm font-semibold mb-2">📊 Como Medir:</p>
                <p className="text-sm mb-3">
                  Rastreie:
                </p>
                <ul className="text-sm space-y-1 ml-4">
                  <li>• Horas médias/pessoa/mês em aprendizagem formal (cursos, workshops)</li>
                  <li>• % de pessoas que compartilharam aprendizado no último trimestre (talk, post, mentoria)</li>
                  <li>• Budget de desenvolvimento por pessoa (L&D)</li>
                </ul>
              </div>

              <div className="grid grid-cols-3 gap-4 my-4 text-center text-sm">
                <div className="bg-red-50 p-3 rounded">
                  <p className="font-bold text-red-900">🚨 Estagnação</p>
                  <p className="text-red-800">{'<'} 5h/mês</p>
                </div>
                <div className="bg-yellow-50 p-3 rounded">
                  <p className="font-bold text-yellow-900">⚠️ Aprendizagem Básica</p>
                  <p className="text-yellow-800">5-10h/mês</p>
                </div>
                <div className="bg-green-50 p-3 rounded">
                  <p className="font-bold text-green-900">✓ Organização que Aprende</p>
                  <p className="text-green-800">{'>'}{1}0h/mês</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* RAÍZES */}
        <div className="bg-gradient-to-br from-secondary/5 to-secondary/10 rounded-xl p-8 my-10">
          <div className="flex items-center mb-6">
            <span className="text-4xl mr-4">🌳</span>
            <h3 className="text-2xl font-bold text-secondary">RAÍZES: Cultura & Memória</h3>
          </div>

          <div className="space-y-6">
            <div className="bg-white rounded-lg p-6 shadow-soft">
              <h4 className="font-bold text-lg mb-3">10. Retention Quality Score</h4>
              
              <div className="mb-4">
                <p className="text-sm font-semibold mb-2">📊 Como Medir:</p>
                <p className="text-sm mb-3">
                  Não é só medir turnover total. É medir <strong>QUEM</strong> está saindo:
                </p>
                <ul className="text-sm space-y-2 ml-4">
                  <li>• <strong>Turnover de High Performers:</strong> Saídas de top 20% performers vs. total</li>
                  <li>• <strong>Regretted Departures:</strong> % de saídas que liderança "lamenta" (queria reter)</li>
                  <li>• <strong>Tenure de talentos-chave:</strong> Tempo médio que A-players ficam</li>
                </ul>
              </div>

              <div className="bg-red-50 p-4 rounded-lg my-4">
                <p className="text-sm font-bold text-red-900 mb-2">🚨 Alerta Crítico:</p>
                <p className="text-sm text-red-800">
                  Se seus melhores talentos estão saindo (<strong>regretted departures {'>'}{1}5%</strong>), 
                  você tem problema cultural grave. Turnover baixo de C-players mascarando hemorragia de A-players.
                </p>
              </div>
            </div>

            <div className="bg-white rounded-lg p-6 shadow-soft">
              <h4 className="font-bold text-lg mb-3">11. Cultural Transmission Rate</h4>
              
              <div className="mb-4">
                <p className="text-sm font-semibold mb-2">📊 Como Medir:</p>
                <p className="text-sm mb-3">
                  Para pessoas com {'<'} 6 meses de casa:
                </p>
                <div className="bg-gray-50 p-4 rounded-lg text-sm italic mb-3">
                  "Você consegue explicar como decisões são tomadas aqui?" (Sim/Não)<br/>
                  "Você sabe o que é valorizado e o que não é?" (Sim/Não)<br/>
                  "Você tem clareza de como crescer aqui?" (Sim/Não)
                </div>
                <p className="text-sm">
                  <strong>Scoring:</strong> % de "Sim" = taxa de transmissão cultural. Abaixo de 60% = onboarding cultural falho.
                </p>
              </div>
            </div>

            <div className="bg-white rounded-lg p-6 shadow-soft">
              <h4 className="font-bold text-lg mb-3">12. Employee Net Promoter Score (eNPS)</h4>
              
              <div className="mb-4">
                <p className="text-sm font-semibold mb-2">📊 Como Medir:</p>
                <p className="text-sm mb-3">
                  Pergunta trimestral:
                </p>
                <div className="bg-gray-50 p-4 rounded-lg text-sm italic mb-3">
                  "Em uma escala de 0-10, qual a probabilidade de você recomendar esta empresa 
                  como lugar para trabalhar para um amigo/familiar?"
                </div>
                <p className="text-sm">
                  <strong>Cálculo eNPS:</strong> % Promotores (9-10) - % Detratores (0-6)
                </p>
              </div>

              <div className="grid grid-cols-3 gap-4 my-4 text-center text-sm">
                <div className="bg-red-50 p-3 rounded">
                  <p className="font-bold text-red-900">🚨 Cultura Tóxica</p>
                  <p className="text-red-800">eNPS {'<'} 0</p>
                </div>
                <div className="bg-yellow-50 p-3 rounded">
                  <p className="font-bold text-yellow-900">⚠️ Cultura Fraca</p>
                  <p className="text-yellow-800">eNPS 0-30</p>
                </div>
                <div className="bg-green-50 p-3 rounded">
                  <p className="font-bold text-green-900">✓ Cultura Forte</p>
                  <p className="text-green-800">eNPS {'>'}{3}0</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <h2 className="text-3xl font-heading font-bold text-primary mt-12 mb-6">
          Criando Seu Dashboard de Vitalidade
        </h2>

        <div className="bg-white rounded-xl p-8 shadow-soft my-8">
          <h3 className="font-bold text-lg mb-4">Framework de Implementação</h3>
          
          <div className="space-y-6">
            <div>
              <p className="font-bold mb-2">Fase 1: Quick Wins (Mês 1)</p>
              <p className="text-sm text-muted-foreground mb-2">
                Comece com 4 métricas mais fáceis de capturar:
              </p>
              <ul className="text-sm space-y-1 ml-4">
                <li>• eNPS (1 pergunta trimestral)</li>
                <li>• Turnover Quality (dados de RH já existem)</li>
                <li>• Psychological Safety (7 perguntas, survey único)</li>
                <li>• Clarity Score (1 pergunta aberta, análise manual)</li>
              </ul>
            </div>

            <div>
              <p className="font-bold mb-2">Fase 2: Instrumentação (Meses 2-3)</p>
              <p className="text-sm text-muted-foreground mb-2">
                Adicione métricas que requerem tracking novo:
              </p>
              <ul className="text-sm space-y-1 ml-4">
                <li>• Decision Velocity (crie log de decisões)</li>
                <li>• Information Flow (pulse survey semanal)</li>
                <li>• Learning Velocity (rastreie horas L&D)</li>
              </ul>
            </div>

            <div>
              <p className="font-bold mb-2">Fase 3: Sofisticação (Meses 4-6)</p>
              <p className="text-sm text-muted-foreground mb-2">
                Complete dashboard com métricas mais complexas:
              </p>
              <ul className="text-sm space-y-1 ml-4">
                <li>• Values Embodiment (análise qualitativa trimestral)</li>
                <li>• Cross-Functional Collaboration (network analysis)</li>
                <li>• Cultural Transmission (cohort analysis de novatos)</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="bg-amber-50 border-l-4 border-amber-500 p-6 rounded-r-lg my-8">
          <h3 className="font-bold text-lg text-amber-900 mb-2">⚠️ Armadilhas Comuns</h3>
          <ul className="text-sm text-amber-800 space-y-2">
            <li>• <strong>Medir tudo de uma vez:</strong> Paralisia. Comece com 4-5 métricas, expanda gradualmente</li>
            <li>• <strong>Não agir nos dados:</strong> Pior que não medir. Gera cinismo ("fazem survey mas nada muda")</li>
            <li>• <strong>Tornar anônimo demais:</strong> Dados agregados escondem problemas localizados (1 time tóxico puxa média)</li>
            <li>• <strong>Gamificação tóxica:</strong> Se você bonifica por eNPS, pessoas manipulam. Use para diagnóstico, não incentivo</li>
          </ul>
        </div>

        <h2 className="text-3xl font-heading font-bold text-primary mt-12 mb-6">
          Interpretando os Sinais (Padrões de Alerta)
        </h2>

        <div className="space-y-4 my-8">
          <div className="bg-red-50 p-6 rounded-lg border-l-4 border-red-500">
            <p className="font-bold text-red-900 mb-2">🚨 Padrão Crítico: "Hemorragia Silenciosa"</p>
            <ul className="text-sm text-red-800 space-y-1">
              <li>• eNPS caindo (-5 pontos/trimestre)</li>
              <li>• Regretted departures subindo ({'>'}{15}%)</li>
              <li>• Psychological Safety {'<'}3.0</li>
            </ul>
            <p className="text-sm text-red-900 mt-3 font-bold">
              → Ação: Cultura está colapsando. Intervenção urgente (em 30 dias).
            </p>
          </div>

          <div className="bg-yellow-50 p-6 rounded-lg border-l-4 border-yellow-500">
            <p className="font-bold text-yellow-900 mb-2">⚠️ Padrão Moderado: "Silos Endurecendo"</p>
            <ul className="text-sm text-yellow-800 space-y-1">
              <li>• Cross-Functional Collaboration {'<'}2</li>
              <li>• Decision Velocity aumentando</li>
              <li>• Process Friction crescendo</li>
            </ul>
            <p className="text-sm text-yellow-900 mt-3 font-bold">
              → Ação: Estrutura está engessando. Revisar governança e fluxos.
            </p>
          </div>

          <div className="bg-blue-50 p-6 rounded-lg border-l-4 border-blue-500">
            <p className="font-bold text-blue-900 mb-2">ℹ️ Padrão Oportunidade: "Identidade Diluindo"</p>
            <ul className="text-sm text-blue-800 space-y-1">
              <li>• Clarity Score {'<'}50%</li>
              <li>• Values Embodiment baixo</li>
              <li>• Brand-Culture Alignment {'<'}7</li>
            </ul>
            <p className="text-sm text-blue-900 mt-3 font-bold">
              → Ação: Crescimento rápido diluiu cultura. Reforçar Alma (onboarding, rituais).
            </p>
          </div>
        </div>

        <div className="bg-gradient-to-br from-primary to-primary-dark text-primary-foreground rounded-xl p-8 my-12 text-center">
          <h3 className="text-2xl font-bold mb-4">Quer Implementar Sistema de Vitalidade Organizacional?</h3>
          <p className="text-lg mb-6 opacity-90">
            Nosso Diagnóstico de DNA Organizacional inclui medição inicial das 12 métricas + 
            dashboard personalizado para sua realidade.
          </p>
          <p className="text-sm opacity-75">
            Não vendemos software genérico. Criamos sistema de medição vivo que evolui com você.
          </p>
        </div>
      </div>
    </ArticleLayout>
  )
}
