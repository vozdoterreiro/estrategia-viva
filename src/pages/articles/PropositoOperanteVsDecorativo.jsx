import React from 'react'
import ArticleLayout from '../../components/ArticleLayout'

export default function PropositoOperanteVsDecorativo() {
  return (
    <ArticleLayout
      title="Propósito Organizacional: Manifesto ou Motor de Decisão?"
      category="Propósito"
      date="5 Set 2024"
      readTime="13 min"
      excerpt="A diferença entre propósito decorativo (que fica na parede) e propósito operante (que guia cada decisão). Framework para ativar seu propósito na prática."
    >
      <div className="prose prose-lg max-w-none">
        <p className="text-xl text-muted-foreground leading-relaxed mb-8">
          "Nosso propósito é transformar vidas através da tecnologia." Bonito. Está na parede, 
          no site, nos slides de all-hands. Mas quando você teve que escolher entre lucro e impacto 
          na última sprint, o que venceu? Se foi lucro, seu propósito é decorativo, não operante.
        </p>

        <div className="bg-red-50 border-l-4 border-red-500 p-6 rounded-r-lg my-8">
          <h3 className="font-bold text-lg text-red-900 mb-3">O Teste Brutal de Propósito Real</h3>
          <p className="text-red-800 mb-4">
            Pergunte a 5 pessoas aleatórias da empresa:
          </p>
          <div className="bg-white p-4 rounded-lg mb-4">
            <p className="text-sm italic text-red-900 mb-2">
              "Me dá um exemplo de decisão das últimas 2 semanas em que nosso propósito 
              influenciou DIRETAMENTE o que você escolheu fazer."
            </p>
          </div>
          <p className="text-red-900 font-bold">
            Se 3+ pessoas não conseguem responder com exemplo concreto: 
            <strong> seu propósito é teatro.</strong>
          </p>
        </div>

        <h2 className="text-3xl font-heading font-bold text-primary mt-12 mb-6">
          Propósito Decorativo vs. Propósito Operante
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-10">
          <div className="bg-gray-50 border-2 border-gray-300 rounded-xl p-6">
            <h3 className="text-xl font-bold text-gray-700 mb-4">🎭 Propósito Decorativo</h3>
            <ul className="text-sm space-y-3">
              <li>
                <strong>Função:</strong> Marketing, employer branding, feel-good interno
              </li>
              <li>
                <strong>Localização:</strong> Parede, site "Sobre Nós", onboarding day 1
              </li>
              <li>
                <strong>Criação:</strong> Workshop de 1 dia com consultoria, frase bonita, done
              </li>
              <li>
                <strong>Impacto em decisões:</strong> Zero. Quando há conflito propósito x lucro, 
                lucro sempre vence
              </li>
              <li>
                <strong>Sinal clássico:</strong> "Nosso propósito é X, MAS precisamos bater meta..."
              </li>
              <li>
                <strong>Resultado:</strong> Cinismo. Pessoas param de acreditar em qualquer narrativa da empresa
              </li>
            </ul>
          </div>

          <div className="bg-gradient-to-br from-primary/10 to-secondary/10 border-2 border-primary rounded-xl p-6">
            <h3 className="text-xl font-bold text-primary mb-4">⚡ Propósito Operante</h3>
            <ul className="text-sm space-y-3">
              <li>
                <strong>Função:</strong> Critério de decisão, filtro estratégico, bússola operacional
              </li>
              <li>
                <strong>Localização:</strong> Cada reunião, cada OKR, cada contratação, cada feature
              </li>
              <li>
                <strong>Criação:</strong> Processo profundo de 3-6 meses, testado em decisões reais, 
                refinado constantemente
              </li>
              <li>
                <strong>Impacto em decisões:</strong> Direto. Propósito vs. lucro = tensão produtiva 
                que força criatividade
              </li>
              <li>
                <strong>Sinal clássico:</strong> "Como isso serve nosso propósito?" é pergunta 
                automática em qualquer decisão
              </li>
              <li>
                <strong>Resultado:</strong> Coerência. Decisões fazem sentido, pessoas sabem POR QUE fazem o que fazem
              </li>
            </ul>
          </div>
        </div>

        <h2 className="text-3xl font-heading font-bold text-primary mt-12 mb-6">
          Casos Reais: Propósito em Ação (Ou Não)
        </h2>

        <div className="space-y-8 my-10">
          <div className="bg-white rounded-xl p-8 shadow-soft border-l-4 border-green-500">
            <h3 className="text-2xl font-bold text-green-900 mb-3">✓ Patagonia: Propósito Operante</h3>
            
            <div className="mb-4">
              <p className="font-bold mb-2">Propósito declarado:</p>
              <p className="italic text-sm mb-4">
                "Estamos no negócio para salvar nosso planeta natal."
              </p>
            </div>

            <div className="bg-green-50 p-6 rounded-lg mb-6">
              <p className="font-bold mb-3">Decisões Guiadas por Propósito:</p>
              <ul className="text-sm space-y-3">
                <li>
                  <strong>Black Friday 2011:</strong> Campanha "Don't Buy This Jacket" — 
                  pedindo explicitamente que clientes NÃO comprassem (contra consumismo). 
                  Vendas subiram 30% (paradoxo da autenticidade).
                </li>
                <li>
                  <strong>2022:</strong> Fundador Yvon Chouinard doou 100% da empresa (US$ 3 bilhões) 
                  para trust ambiental. Zero herança para família. Lucros futuros: 100% para planeta.
                </li>
                <li>
                  <strong>Dia a dia:</strong> Interrompem produção se fornecedor não cumpre padrão ambiental, 
                  mesmo que atrase entrega e perca receita. Propósito {'>'} deadline.
                </li>
              </ul>
            </div>

            <p className="text-sm text-muted-foreground">
              <strong>Por que funciona:</strong> Propósito não é slogan. É filtro inegociável para 
              TODA decisão. Quando CEO abre mão de US$ 3 bi, todos entendem: isso é real.
            </p>
          </div>

          <div className="bg-white rounded-xl p-8 shadow-soft border-l-4 border-red-500">
            <h3 className="text-2xl font-bold text-red-900 mb-3">✗ Theranos: Propósito Teatro</h3>
            
            <div className="mb-4">
              <p className="font-bold mb-2">Propósito declarado:</p>
              <p className="italic text-sm mb-4">
                "Democratizar acesso a exames de sangue, salvando vidas."
              </p>
            </div>

            <div className="bg-red-50 p-6 rounded-lg mb-6">
              <p className="font-bold mb-3">Realidade Operacional:</p>
              <ul className="text-sm space-y-3">
                <li>
                  <strong>Decisão real:</strong> Quando tecnologia não funcionava, esconderam resultados falsos 
                  de pacientes reais (alguns receberam diagnósticos errados de câncer).
                </li>
                <li>
                  <strong>Filtro decisório:</strong> Não era "isso salva vidas?", era "isso mantém valuation alto?".
                </li>
                <li>
                  <strong>Propósito como arma:</strong> Usavam narrativa salvadora para justificar 
                  sigilo ("é tão revolucionário que precisa ser secreto"). Propósito virou escudo para fraude.
                </li>
              </ul>
            </div>

            <p className="text-sm text-muted-foreground">
              <strong>Lição:</strong> Propósito bonito + decisões opostas = pior que não ter propósito. 
              Gera traição profunda quando verdade emerge.
            </p>
          </div>

          <div className="bg-white rounded-xl p-8 shadow-soft border-l-4 border-blue-500">
            <h3 className="text-2xl font-bold text-blue-900 mb-3">🔄 Airbnb: Propósito Evoluindo</h3>
            
            <div className="mb-4">
              <p className="font-bold mb-2">Propósito v1.0 (2008-2016):</p>
              <p className="italic text-sm mb-4">
                "Belong anywhere" — sentir-se em casa em qualquer lugar do mundo.
              </p>
            </div>

            <div className="bg-blue-50 p-6 rounded-lg mb-6">
              <p className="font-bold mb-3">Teste da Realidade (2016-2020):</p>
              <ul className="text-sm space-y-3">
                <li>
                  <strong>Problema:</strong> Hosts discriminando hóspedes (recusando negros, LGBTQ+). 
                  "Belong anywhere"... exceto se você for X.
                </li>
                <li>
                  <strong>Decisão crítica:</strong> Airbnb baniu hosts discriminatórios (perdeu receita a curto prazo) 
                  e criou política anti-discriminação rígida.
                </li>
                <li>
                  <strong>COVID:</strong> Quando reservas caíram 80%, CEO Brian Chesky cortou 25% do time 
                  (doloroso), mas manteve suporte a hosts vulneráveis. Propósito guiou quem cortar e como.
                </li>
              </ul>
            </div>

            <div className="mb-4">
              <p className="font-bold mb-2">Propósito v2.0 (2020+):</p>
              <p className="italic text-sm mb-4">
                "Create a world where anyone can belong anywhere, and we take responsibility for it."
              </p>
            </div>

            <p className="text-sm text-muted-foreground">
              <strong>Por que funciona:</strong> Propósito não é estático. Evolui com realidade, 
              mas mantém essência. E decisões difíceis (demitir 1.900 pessoas) são feitas através 
              do filtro do propósito, não apesar dele.
            </p>
          </div>
        </div>

        <h2 className="text-3xl font-heading font-bold text-primary mt-12 mb-6">
          Framework: Transformando Propósito Decorativo em Operante
        </h2>

        <div className="space-y-8 my-10">
          <div className="bg-white rounded-xl p-8 shadow-soft">
            <div className="flex items-start mb-4">
              <div className="bg-primary text-primary-foreground rounded-full w-10 h-10 flex items-center justify-center font-bold mr-4 flex-shrink-0">1</div>
              <div className="flex-1">
                <h3 className="text-xl font-bold mb-3">Archaeology: Desenterre o Propósito Real</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  Propósito não se "cria" em workshop. Se descobre. Está enterrado nas decisões 
                  que você já toma.
                </p>
                
                <div className="bg-gray-50 p-6 rounded-lg">
                  <p className="font-bold text-sm mb-3">Exercício Prático:</p>
                  <ol className="text-sm space-y-2 list-decimal ml-4">
                    <li>Pegue 10 decisões críticas dos últimos 2 anos (contratações, pivots, recusas de investimento)</li>
                    <li>Para cada: "O que foi sacrificado? O que foi protegido a todo custo?"</li>
                    <li>Padrão emerge: o que vocês SEMPRE protegem = propósito real (não declarado)</li>
                  </ol>
                  
                  <div className="mt-4 bg-white p-4 rounded border-l-4 border-primary">
                    <p className="text-sm font-bold mb-2">Exemplo Real:</p>
                    <p className="text-sm italic">
                      Startup descobriu: sempre recusava clientes "grandes mas difíceis". Padrão: 
                      protegiam autonomia do time {'>'} receita. Propósito real: "Criar sem correntes". 
                      Virrou slogan oficial depois.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl p-8 shadow-soft">
            <div className="flex items-start mb-4">
              <div className="bg-primary text-primary-foreground rounded-full w-10 h-10 flex items-center justify-center font-bold mr-4 flex-shrink-0">2</div>
              <div className="flex-1">
                <h3 className="text-xl font-bold mb-3">Simplicity: Corte o Floreado</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  Propósitos decorativos são longos, vagos, cheios de jargão. Operantes são curtos, 
                  brutalmente claros, impossíveis de mal-interpretar.
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="bg-red-50 p-4 rounded-lg">
                    <p className="font-bold text-red-900 mb-2">❌ Decorativo</p>
                    <p className="text-sm italic text-red-800">
                      "Empoderar organizações globalmente através de soluções inovadoras que 
                      transformam paradigmas e criam valor sustentável para stakeholders."
                    </p>
                    <p className="text-xs text-red-700 mt-2">
                      (47 palavras, zero significado concreto)
                    </p>
                  </div>
                  <div className="bg-green-50 p-4 rounded-lg">
                    <p className="font-bold text-green-900 mb-2">✓ Operante</p>
                    <p className="text-sm italic text-green-800">
                      "Organizar a informação do mundo e torná-la universalmente acessível e útil."
                      <br/><span className="text-xs">(Google)</span>
                    </p>
                    <p className="text-xs text-green-700 mt-2">
                      (12 palavras, cristalino: O QUÊ fazer + PRA QUEM + POR QUÊ importa)
                    </p>
                  </div>
                </div>

                <div className="bg-gray-50 p-4 rounded-lg mt-4">
                  <p className="font-bold text-sm mb-2">Teste de Simplicidade:</p>
                  <p className="text-sm">
                    Se um estagiário de 1ª semana não consegue repetir seu propósito de cor e 
                    explicar o que significa NA PRÁTICA dele, é complexo demais.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl p-8 shadow-soft">
            <div className="flex items-start mb-4">
              <div className="bg-primary text-primary-foreground rounded-full w-10 h-10 flex items-center justify-center font-bold mr-4 flex-shrink-0">3</div>
              <div className="flex-1">
                <h3 className="text-xl font-bold mb-3">Decision Filter: Operacionalize em Perguntas</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  Propósito vira operante quando se transforma em perguntas que você faz em TODA decisão.
                </p>
                
                <div className="space-y-4">
                  <div className="bg-blue-50 p-6 rounded-lg border-l-4 border-blue-500">
                    <p className="font-bold mb-2">Exemplo: Tesla</p>
                    <p className="text-sm italic mb-3">
                      Propósito: "Acelerar a transição do mundo para energia sustentável"
                    </p>
                    <p className="font-bold text-sm mb-2">Filtro Decisório:</p>
                    <ul className="text-sm space-y-1">
                      <li>• Isso acelera adoção de energia sustentável? (Se não, fora)</li>
                      <li>• Isso pode ser feito 10x mais rápido? (Senso de urgência embutido)</li>
                      <li>• Isso escala para milhões/bilhões? (Transição mundial, não nicho)</li>
                    </ul>
                    <p className="text-sm text-muted-foreground mt-3">
                      <strong>Resultado:</strong> Decisões como abrir patentes de graça (competitors 
                      copiarem = mais carros elétricos = acelera transição) fazem sentido através do filtro.
                    </p>
                  </div>

                  <div className="bg-purple-50 p-6 rounded-lg border-l-4 border-purple-500">
                    <p className="font-bold mb-2">Exemplo: Nubank</p>
                    <p className="text-sm italic mb-3">
                      Propósito: "Lutar contra a complexidade para empoderar pessoas"
                    </p>
                    <p className="font-bold text-sm mb-2">Filtro Decisório:</p>
                    <ul className="text-sm space-y-1">
                      <li>• Isso simplifica ou complexifica a vida do cliente?</li>
                      <li>• Estamos adicionando fricção ou removendo?</li>
                      <li>• O cliente comum consegue entender isso em 10 segundos?</li>
                    </ul>
                    <p className="text-sm text-muted-foreground mt-3">
                      <strong>Resultado:</strong> Recusam features que outros bancos têm se adicionam 
                      complexidade. Propósito = critério de exclusão, não só inclusão.
                    </p>
                  </div>
                </div>

                <div className="bg-gray-50 p-4 rounded-lg mt-4">
                  <p className="font-bold text-sm mb-2">Crie Suas Perguntas:</p>
                  <p className="text-sm mb-3">
                    Transforme seu propósito em 3-5 perguntas obrigatórias para decisões estratégicas/táticas:
                  </p>
                  <ol className="text-sm space-y-1 list-decimal ml-4">
                    <li>Isso [VERBO DO PROPÓSITO] para [QUEM DO PROPÓSITO]?</li>
                    <li>Isso está alinhado com [VALOR CENTRAL 1]?</li>
                    <li>Se não fizermos isso, [CONSEQUÊNCIA OPOSTA AO PROPÓSITO]?</li>
                  </ol>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl p-8 shadow-soft">
            <div className="flex items-start mb-4">
              <div className="bg-primary text-primary-foreground rounded-full w-10 h-10 flex items-center justify-center font-bold mr-4 flex-shrink-0">4</div>
              <div className="flex-1">
                <h3 className="text-xl font-bold mb-3">Sacrifice: Prove Através do Que Você Recusa</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  Propósito só é real quando você consegue apontar coisas que RECUSOU por causa dele. 
                  Propósito sem sacrifício = slogan.
                </p>
                
                <div className="bg-gradient-to-br from-primary/5 to-secondary/5 p-6 rounded-lg">
                  <p className="font-bold mb-3">Exemplos de Sacrifícios Reais:</p>
                  <ul className="text-sm space-y-3">
                    <li>
                      <strong>Basecamp:</strong> Recusou venture capital (US$ 100M+ na mesa) porque 
                      investidores exigiriam crescimento que sacrificaria qualidade de vida do time. 
                      Propósito: trabalho calmo {'>'} hipercrescimento.
                    </li>
                    <li>
                      <strong>DuckDuckGo:</strong> Recusa vender dados de usuários (bilhões em receita potencial). 
                      Propósito: privacidade inegociável. Monetiza via ads contextuais, não targetados.
                    </li>
                    <li>
                      <strong>Stripe:</strong> Demora 6-18 meses para lançar features que competitors 
                      lançam em semanas. Propósito: infraestrutura financeira que nunca falha {'>'} velocidade.
                    </li>
                  </ul>
                </div>

                <div className="bg-amber-50 p-4 rounded-lg mt-4 border-l-4 border-amber-500">
                  <p className="font-bold text-amber-900 mb-2">Exercício de Sacrifício:</p>
                  <p className="text-sm text-amber-800">
                    Liste 3 oportunidades (receita, parcerias, features) que vocês recusaram no último ano. 
                    Se não consegue listar 3, seu propósito nunca foi testado de verdade.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl p-8 shadow-soft">
            <div className="flex items-start mb-4">
              <div className="bg-primary text-primary-foreground rounded-full w-10 h-10 flex items-center justify-center font-bold mr-4 flex-shrink-0">5</div>
              <div className="flex-1">
                <h3 className="text-xl font-bold mb-3">Ritual: Incorpore no Dia a Dia</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  Propósito que vive só em all-hands trimestral é decorativo. Operante aparece 
                  diariamente em rituais micro.
                </p>
                
                <div className="space-y-4">
                  <div className="bg-green-50 p-4 rounded-lg">
                    <p className="font-bold text-green-900 mb-2">Rituais de Propósito (Exemplos):</p>
                    <ul className="text-sm text-green-800 space-y-2">
                      <li>
                        <strong>All-hands (semanal/mensal):</strong> Sempre começa com 1 história de 
                        cliente/usuário mostrando propósito em ação. Não métrica — história humana.
                      </li>
                      <li>
                        <strong>Reuniões de decisão:</strong> Última pergunta antes de aprovar qualquer coisa: 
                        "Como isso serve nosso propósito?" Se ninguém responde em 30s, volta para discussão.
                      </li>
                      <li>
                        <strong>Onboarding:</strong> Dia 1, antes de ver código/produto, novo membro passa 
                        tempo com cliente/usuário final. Conecta propósito fisicamente antes de operação.
                      </li>
                      <li>
                        <strong>Performance reviews:</strong> Não avaliam só "o que" entregou, mas "como" 
                        (alinhado ao propósito?) e "por que" (consegue conectar trabalho ao propósito maior?).
                      </li>
                    </ul>
                  </div>

                  <div className="bg-blue-50 p-4 rounded-lg">
                    <p className="font-bold text-blue-900 mb-2">Case: Atlassian "Values Champion"</p>
                    <p className="text-sm text-blue-800">
                      Em TODA reunião de projeto, designam 1 pessoa como "Values Champion". 
                      Papel: interromper discussão se decisão proposta conflita com valores/propósito. 
                      Ritualiza vigilância de propósito.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <h2 className="text-3xl font-heading font-bold text-primary mt-12 mb-6">
          Auto-Diagnóstico: Seu Propósito é Decorativo ou Operante?
        </h2>

        <div className="bg-white rounded-xl p-8 shadow-soft my-8">
          <p className="mb-6">Responda honestamente (0-10 para cada):</p>
          
          <div className="space-y-4">
            <div className="border-b pb-4">
              <p className="font-bold mb-2">1. Clareza de Ação</p>
              <p className="text-sm text-muted-foreground mb-2">
                "Qualquer pessoa da empresa consegue citar 1 decisão da última semana que 
                nosso propósito influenciou diretamente?"
              </p>
              <div className="flex items-center space-x-2 text-sm">
                <span>0 (ninguém consegue)</span>
                <div className="flex-1 h-2 bg-gray-200 rounded"></div>
                <span>10 (todos citam exemplo concreto)</span>
              </div>
            </div>

            <div className="border-b pb-4">
              <p className="font-bold mb-2">2. Simplicidade</p>
              <p className="text-sm text-muted-foreground mb-2">
                "Nosso propósito tem menos de 15 palavras e estagiário de 1ª semana consegue 
                repetir de cor e explicar?"
              </p>
              <div className="flex items-center space-x-2 text-sm">
                <span>0 (complexo/vago)</span>
                <div className="flex-1 h-2 bg-gray-200 rounded"></div>
                <span>10 (cristalino e memorável)</span>
              </div>
            </div>

            <div className="border-b pb-4">
              <p className="font-bold mb-2">3. Filtro Decisório</p>
              <p className="text-sm text-muted-foreground mb-2">
                "Temos perguntas explícitas derivadas do propósito que usamos em reuniões decisórias?"
              </p>
              <div className="flex items-center space-x-2 text-sm">
                <span>0 (nunca usamos)</span>
                <div className="flex-1 h-2 bg-gray-200 rounded"></div>
                <span>10 (sempre, ritualisticamente)</span>
              </div>
            </div>

            <div className="border-b pb-4">
              <p className="font-bold mb-2">4. Sacrifício Visível</p>
              <p className="text-sm text-muted-foreground mb-2">
                "Conseguimos listar 3+ oportunidades (receita, parceria, features) que recusamos 
                porque conflitavam com propósito?"
              </p>
              <div className="flex items-center space-x-2 text-sm">
                <span>0 (nunca recusamos nada)</span>
                <div className="flex-1 h-2 bg-gray-200 rounded"></div>
                <span>10 (lista longa de sacrifícios)</span>
              </div>
            </div>

            <div className="pb-4">
              <p className="font-bold mb-2">5. Ritualização</p>
              <p className="text-sm text-muted-foreground mb-2">
                "Propósito aparece em rituais diários/semanais (não só all-hands trimestral)?"
              </p>
              <div className="flex items-center space-x-2 text-sm">
                <span>0 (só em slides)</span>
                <div className="flex-1 h-2 bg-gray-200 rounded"></div>
                <span>10 (diário, em vários rituais)</span>
              </div>
            </div>
          </div>

          <div className="mt-6 p-6 bg-gradient-to-br from-primary/10 to-secondary/10 rounded-lg">
            <p className="font-bold mb-3">Interpretação:</p>
            <ul className="text-sm space-y-2">
              <li><strong>0-20 pontos:</strong> Propósito é puro teatro. Remova da parede ou ative de verdade.</li>
              <li><strong>21-35 pontos:</strong> Propósito existe, mas fraco. Precisa operacionalização urgente.</li>
              <li><strong>36-45 pontos:</strong> Propósito operante, mas pode fortalecer (rituais, sacrifícios).</li>
              <li><strong>46-50 pontos:</strong> Propósito verdadeiramente vivo. Parabéns, você é minoria.</li>
            </ul>
          </div>
        </div>

        <div className="bg-gradient-to-br from-primary to-primary-dark text-primary-foreground rounded-xl p-8 my-12 text-center">
          <h3 className="text-2xl font-bold mb-4">Quer Ativar Seu Propósito Operante?</h3>
          <p className="text-lg mb-6 opacity-90">
            Nosso Diagnóstico de DNA Organizacional desenterra seu propósito real (não declarado) 
            e nossa Arquitetura de Ecossistema ritualiza ele em decisões, processos e cultura.
          </p>
          <p className="text-sm opacity-75">
            Não escrevemos manifestos bonitos. Ativamos propósito que já existe (escondido) 
            e o tornamos motor decisório vivo.
          </p>
        </div>
      </div>
    </ArticleLayout>
  )
}
