import React from 'react'
import ArticleLayout from '../../components/ArticleLayout'

export default function CustoCulturaToxica() {
  return (
    <ArticleLayout
      title="O Custo Real de Uma Cultura Tóxica (Com Números)"
      category="ROI Cultural"
      date="28 Set 2024"
      readTime="8 min"
      excerpt="Turnover de 40%/ano, produtividade 30% menor, inovação paralisada. Calculamos o impacto financeiro de uma cultura empobrecida e como revertê-lo."
    >
      <div className="prose prose-lg max-w-none">
        <p className="text-xl text-muted-foreground leading-relaxed mb-8">
          "Cultura não é prioridade agora, temos que bater meta." Essa frase custa, em média, 
          R$ 2,1 milhões por ano para uma empresa de 100 pessoas. Vamos aos números.
        </p>

        <div className="bg-red-50 border-l-4 border-red-500 p-6 rounded-r-lg my-8">
          <h3 className="font-bold text-lg text-red-900 mb-3">A Conta Que Ninguém Faz</h3>
          <p className="text-red-800">
            CEOs sabem quanto custam servidores, licenças de software, viagens. 
            Mas pouquíssimos calculam o custo de uma cultura que adoece pessoas e paralisa inovação.
          </p>
        </div>

        <h2 className="text-3xl font-heading font-bold text-primary mt-12 mb-6">
          Os 7 Custos Invisíveis (Mas Mensuráveis)
        </h2>

        <div className="space-y-8 my-10">
          <div className="bg-white rounded-xl p-8 shadow-soft border-l-4 border-red-500">
            <h3 className="text-2xl font-bold text-gray-900 mb-3">1. Turnover Catastrófico</h3>
            
            <div className="bg-gray-50 p-6 rounded-lg mb-4">
              <p className="font-bold mb-2">📊 Dados concretos:</p>
              <ul className="space-y-2 text-sm">
                <li>• Culturas tóxicas têm turnover de <strong>35-50%/ano</strong> vs. 10-15% em culturas saudáveis</li>
                <li>• Custo médio de substituição: <strong>1,5x a 2x o salário anual</strong> (recrutamento + onboarding + rampa produtiva)</li>
                <li>• Empresa de 100 pessoas, salário médio R$ 8k/mês: <strong>turnover extra de 25 pessoas/ano</strong></li>
              </ul>
            </div>

            <div className="bg-red-100 p-6 rounded-lg">
              <p className="font-bold text-red-900 mb-2">💰 Custo anual:</p>
              <p className="text-3xl font-bold text-red-900">R$ 4,8 milhões</p>
              <p className="text-sm text-red-800 mt-2">
                25 pessoas × R$ 96k (salário anual) × 2 (custo de substituição) = R$ 4,8M
              </p>
            </div>

            <p className="mt-4 text-muted-foreground italic text-sm">
              Fonte: SHRM (Society for Human Resource Management) + dados de empresas brasileiras médio porte
            </p>
          </div>

          <div className="bg-white rounded-xl p-8 shadow-soft border-l-4 border-orange-500">
            <h3 className="text-2xl font-bold text-gray-900 mb-3">2. Produtividade Derretida</h3>
            
            <div className="bg-gray-50 p-6 rounded-lg mb-4">
              <p className="font-bold mb-2">📊 Dados concretos:</p>
              <ul className="space-y-2 text-sm">
                <li>• Gallup: funcionários desengajados são <strong>18-25% menos produtivos</strong></li>
                <li>• Em cultura tóxica, 60-70% das pessoas estão "fazendo hora" (presenteísmo)</li>
                <li>• Perda média: <strong>8-12 horas/semana/pessoa</strong> em distrações, retrabalho, conflitos</li>
              </ul>
            </div>

            <div className="bg-orange-100 p-6 rounded-lg">
              <p className="font-bold text-orange-900 mb-2">💰 Custo anual:</p>
              <p className="text-3xl font-bold text-orange-900">R$ 3,2 milhões</p>
              <p className="text-sm text-orange-800 mt-2">
                100 pessoas × R$ 8k/mês × 20% produtividade perdida × 12 meses = R$ 1,92M<br/>
                + Oportunidades perdidas (projetos que não saem do papel): ~R$ 1,28M
              </p>
            </div>
          </div>

          <div className="bg-white rounded-xl p-8 shadow-soft border-l-4 border-yellow-500">
            <h3 className="text-2xl font-bold text-gray-900 mb-3">3. Inovação Congelada</h3>
            
            <div className="bg-gray-50 p-6 rounded-lg mb-4">
              <p className="font-bold mb-2">📊 Dados concretos:</p>
              <ul className="space-y-2 text-sm">
                <li>• Harvard Business Review: culturas tóxicas têm <strong>55% menos iniciativas de inovação</strong></li>
                <li>• Ideias boas existem, mas ninguém arrisca propor (medo de exposição/punição)</li>
                <li>• Tempo médio entre ideia e implementação: <strong>3-5x maior</strong> que em culturas psicologicamente seguras</li>
              </ul>
            </div>

            <div className="bg-yellow-100 p-6 rounded-lg">
              <p className="font-bold text-yellow-900 mb-2">💰 Custo anual:</p>
              <p className="text-3xl font-bold text-yellow-900">R$ 1,5 milhões</p>
              <p className="text-sm text-yellow-800 mt-2">
                Valor médio de inovações que não acontecem: novos produtos/serviços, 
                otimizações de processo, reduções de custo não identificadas
              </p>
            </div>
          </div>

          <div className="bg-white rounded-xl p-8 shadow-soft border-l-4 border-purple-500">
            <h3 className="text-2xl font-bold text-gray-900 mb-3">4. Absenteísmo e Saúde Mental</h3>
            
            <div className="bg-gray-50 p-6 rounded-lg mb-4">
              <p className="font-bold mb-2">📊 Dados concretos:</p>
              <ul className="space-y-2 text-sm">
                <li>• Culturas tóxicas: <strong>2-3x mais atestados médicos</strong> (principalmente saúde mental)</li>
                <li>• Burnout diagnosticado: aumento de <strong>63%</strong> nos últimos 3 anos no Brasil</li>
                <li>• Média: <strong>8-12 dias extras de falta/pessoa/ano</strong> em ambientes tóxicos</li>
              </ul>
            </div>

            <div className="bg-purple-100 p-6 rounded-lg">
              <p className="font-bold text-purple-900 mb-2">💰 Custo anual:</p>
              <p className="text-3xl font-bold text-purple-900">R$ 384 mil</p>
              <p className="text-sm text-purple-800 mt-2">
                100 pessoas × 10 dias extras de falta × R$ 320/dia (salário médio diário) = R$ 320k<br/>
                + Custos de plano de saúde (aumento de sinistralidade): ~R$ 64k
              </p>
            </div>
          </div>

          <div className="bg-white rounded-xl p-8 shadow-soft border-l-4 border-blue-500">
            <h3 className="text-2xl font-bold text-gray-900 mb-3">5. Marca Empregadora Queimada</h3>
            
            <div className="bg-gray-50 p-6 rounded-lg mb-4">
              <p className="font-bold mb-2">📊 Dados concretos:</p>
              <ul className="space-y-2 text-sm">
                <li>• Glassdoor/LinkedIn: empresas com nota {'<'}4.0 recebem <strong>50% menos candidaturas</strong></li>
                <li>• Custo de recrutamento aumenta <strong>40-60%</strong> (precisa pagar mais + agências)</li>
                <li>• Talentos A+ fogem: você fica com opções B e C (que também saem rápido)</li>
              </ul>
            </div>

            <div className="bg-blue-100 p-6 rounded-lg">
              <p className="font-bold text-blue-900 mb-2">💰 Custo anual:</p>
              <p className="text-3xl font-bold text-blue-900">R$ 720 mil</p>
              <p className="text-sm text-blue-800 mt-2">
                Custo extra de recrutamento (agências, tempo desperdiçado, salários inflacionados 
                para compensar reputação ruim)
              </p>
            </div>
          </div>

          <div className="bg-white rounded-xl p-8 shadow-soft border-l-4 border-green-500">
            <h3 className="text-2xl font-bold text-gray-900 mb-3">6. Clientes Perdidos (Sim, Eles Sentem)</h3>
            
            <div className="bg-gray-50 p-6 rounded-lg mb-4">
              <p className="font-bold mb-2">📊 Dados concretos:</p>
              <ul className="space-y-2 text-sm">
                <li>• Funcionários desengajados entregam atendimento <strong>37% pior</strong> (Gallup)</li>
                <li>• NPS de empresas com cultura tóxica: 15-30 pontos <strong>abaixo</strong> de competidores</li>
                <li>• Churn aumenta em <strong>20-35%</strong> quando cultura interna está doente</li>
              </ul>
            </div>

            <div className="bg-green-100 p-6 rounded-lg">
              <p className="font-bold text-green-900 mb-2">💰 Custo anual:</p>
              <p className="text-3xl font-bold text-green-900">Varia (10-30% receita)</p>
              <p className="text-sm text-green-800 mt-2">
                Para empresa de R$ 20M faturamento: perda de R$ 2-6M/ano em clientes que migram 
                para concorrentes com melhor experiência
              </p>
            </div>
          </div>

          <div className="bg-white rounded-xl p-8 shadow-soft border-l-4 border-gray-500">
            <h3 className="text-2xl font-bold text-gray-900 mb-3">7. Tempo de Liderança Desperdiçado</h3>
            
            <div className="bg-gray-50 p-6 rounded-lg mb-4">
              <p className="font-bold mb-2">📊 Dados concretos:</p>
              <ul className="space-y-2 text-sm">
                <li>• Líderes em culturas tóxicas gastam <strong>40-60% do tempo</strong> apagando incêndios interpessoais</li>
                <li>• Reuniões 1:1 viram sessões de terapia, não estratégia</li>
                <li>• C-Level perde <strong>15-20h/semana</strong> com conflitos evitáveis</li>
              </ul>
            </div>

            <div className="bg-gray-200 p-6 rounded-lg">
              <p className="font-bold text-gray-900 mb-2">💰 Custo anual:</p>
              <p className="text-3xl font-bold text-gray-900">R$ 960 mil</p>
              <p className="text-sm text-gray-700 mt-2">
                5 líderes seniores (salário médio R$ 20k/mês) × 50% tempo desperdiçado × 12 meses = R$ 600k<br/>
                + Custo de oportunidade (decisões estratégicas não tomadas): ~R$ 360k
              </p>
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-br from-red-600 to-red-800 text-white rounded-xl p-10 my-12 text-center">
          <h3 className="text-3xl font-bold mb-4">💸 Total do Rombo Cultural</h3>
          <p className="text-6xl font-bold mb-6">R$ 11,6 milhões/ano</p>
          <p className="text-xl opacity-90 mb-4">
            Para uma empresa de 100 pessoas com salário médio de R$ 8k/mês
          </p>
          <p className="text-sm opacity-75">
            Isso equivale a <strong>58% da folha de pagamento</strong> (R$ 9,6M/ano) 
            jogados no lixo por cultura tóxica.
          </p>
        </div>

        <h2 className="text-3xl font-heading font-bold text-primary mt-12 mb-6">
          E o ROI de Investir em Cultura Saudável?
        </h2>

        <div className="bg-green-50 border-l-4 border-green-500 p-8 rounded-r-lg my-8">
          <h3 className="font-bold text-lg text-green-900 mb-4">📈 Números de Empresas Que Investiram</h3>
          
          <div className="space-y-6">
            <div>
              <p className="font-bold mb-2">Patagonia (Cuidador)</p>
              <ul className="text-sm space-y-1">
                <li>• Turnover: <strong>4%/ano</strong> (vs. 40% média do varejo)</li>
                <li>• Economia: ~R$ 15M/ano só em reposição de pessoas</li>
                <li>• NPS: <strong>73</strong> (referência global)</li>
              </ul>
            </div>

            <div>
              <p className="font-bold mb-2">Nubank (Inovador)</p>
              <ul className="text-sm space-y-1">
                <li>• Glassdoor: <strong>4.7/5</strong> (top 10 Brasil)</li>
                <li>• 200+ candidatos por vaga (vs. 20-30 em bancos tradicionais)</li>
                <li>• Custo de recrutamento: <strong>60% menor</strong> que concorrentes</li>
              </ul>
            </div>

            <div>
              <p className="font-bold mb-2">Google (Sábio + Inovador)</p>
              <ul className="text-sm space-y-1">
                <li>• Projeto Aristotle: times psicologicamente seguros são <strong>2x mais produtivos</strong></li>
                <li>• 20% time gerou Gmail, Google News, AdSense (bilhões em receita)</li>
              </ul>
            </div>
          </div>
        </div>

        <h2 className="text-3xl font-heading font-bold text-primary mt-12 mb-6">
          O Investimento Necessário (Spoiler: É Menor Que o Rombo)
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-8">
          <div className="bg-white rounded-xl p-6 shadow-soft">
            <h3 className="font-bold text-lg mb-4">Investimento Inicial (Ano 1)</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex justify-between">
                <span>Diagnóstico cultural profundo</span>
                <span className="font-bold">R$ 20-40k</span>
              </li>
              <li className="flex justify-between">
                <span>Redesign de estruturas/rituais</span>
                <span className="font-bold">R$ 80-120k</span>
              </li>
              <li className="flex justify-between">
                <span>Treinamento de lideranças</span>
                <span className="font-bold">R$ 50-80k</span>
              </li>
              <li className="flex justify-between">
                <span>Implementação + ajustes</span>
                <span className="font-bold">R$ 100-150k</span>
              </li>
              <li className="flex justify-between border-t pt-3 mt-3">
                <span className="font-bold">Total Ano 1</span>
                <span className="font-bold text-primary">R$ 250-390k</span>
              </li>
            </ul>
          </div>

          <div className="bg-white rounded-xl p-6 shadow-soft">
            <h3 className="font-bold text-lg mb-4">Manutenção (Anos seguintes)</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex justify-between">
                <span>Acompanhamento trimestral</span>
                <span className="font-bold">R$ 60-100k/ano</span>
              </li>
              <li className="flex justify-between">
                <span>Ajustes evolutivos</span>
                <span className="font-bold">R$ 40-60k/ano</span>
              </li>
              <li className="flex justify-between">
                <span>Medição de vitalidade</span>
                <span className="font-bold">R$ 20-30k/ano</span>
              </li>
              <li className="flex justify-between border-t pt-3 mt-3">
                <span className="font-bold">Total/Ano</span>
                <span className="font-bold text-primary">R$ 120-190k</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="bg-gradient-to-br from-primary to-primary-dark text-primary-foreground rounded-xl p-10 my-12 text-center">
          <h3 className="text-3xl font-bold mb-6">Fazendo as Contas</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center mb-6">
            <div>
              <p className="text-sm opacity-75 mb-2">Custo da cultura tóxica</p>
              <p className="text-4xl font-bold">R$ 11,6M</p>
              <p className="text-xs opacity-75">por ano</p>
            </div>
            <div>
              <p className="text-sm opacity-75 mb-2">Investimento em cultura saudável</p>
              <p className="text-4xl font-bold">R$ 390k</p>
              <p className="text-xs opacity-75">ano 1</p>
            </div>
            <div>
              <p className="text-sm opacity-75 mb-2">ROI esperado</p>
              <p className="text-4xl font-bold text-secondary">2.877%</p>
              <p className="text-xs opacity-75">em 12 meses</p>
            </div>
          </div>

          <p className="text-lg opacity-90">
            Mesmo que você recupere <strong>apenas 20%</strong> dos custos da toxicidade, 
            ainda estará economizando <strong>R$ 2,3M/ano</strong>.
          </p>
        </div>

        <h2 className="text-3xl font-heading font-bold text-primary mt-12 mb-6">
          Por Onde Começar (Checklist Executiva)
        </h2>

        <div className="space-y-4 my-8">
          <div className="bg-white p-6 rounded-lg shadow-soft">
            <h3 className="font-bold mb-2">☑ Passo 1: Calcule SEU rombo</h3>
            <p className="text-sm text-muted-foreground">
              Pegue sua taxa de turnover atual, absenteísmo, tempo de recrutamento. 
              Faça as contas adaptadas à sua realidade. O número vai te assustar — e motivar.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-soft">
            <h3 className="font-bold mb-2">☑ Passo 2: Diagnóstico honesto</h3>
            <p className="text-sm text-muted-foreground">
              Não adianta começar mudança sem entender a raiz. Faça diagnóstico cultural real 
              (não pesquisa de clima superficial).
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-soft">
            <h3 className="font-bold mb-2">☑ Passo 3: Piloto mensurável</h3>
            <p className="text-sm text-muted-foreground">
              Escolha 1 área para testar mudanças. Defina métricas (turnover, NPS interno, produtividade). 
              Meça antes e depois.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-soft">
            <h3 className="font-bold mb-2">☑ Passo 4: Compromisso de longo prazo</h3>
            <p className="text-sm text-muted-foreground">
              Cultura não muda em 3 meses. É investimento de 12-24 meses. 
              Trate como prioridade estratégica, não "projeto de RH".
            </p>
          </div>
        </div>

        <div className="bg-gradient-to-br from-primary to-primary-dark text-primary-foreground rounded-xl p-8 my-12 text-center">
          <h3 className="text-2xl font-bold mb-4">Quanto Custa SUA Cultura Tóxica?</h3>
          <p className="text-lg mb-6 opacity-90">
            Faça um Diagnóstico de DNA Organizacional e descubra onde está o rombo invisível.
          </p>
          <p className="text-sm opacity-75">
            4-6 semanas de análise antropológica profunda + relatório executivo com cálculo 
            de impacto financeiro específico da sua organização.
          </p>
        </div>
      </div>
    </ArticleLayout>
  )
}
