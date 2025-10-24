import React from 'react'
import ArticleLayout from '../../components/ArticleLayout'

export default function GovernancaParticipativaPratica() {
  return (
    <ArticleLayout
      title="Governança Participativa Sem Virar Bagunça: O Guia Prático"
      category="Governança"
      date="5 Out 2024"
      readTime="18 min"
      excerpt="Distribuir poder não significa criar caos. Entenda os 4 modelos de governança participativa que funcionam (com casos reais de implementação)."
    >
      <div className="prose prose-lg max-w-none">
        <p className="text-xl text-muted-foreground leading-relaxed mb-8">
          "Vamos ser mais horizontais" soa bem em teoria. Na prática, sem estrutura clara, 
          vira reuniões infinitas, decisões que não saem do papel e frustração generalizada. 
          Governança participativa não é ausência de estrutura — é estrutura deliberadamente desenhada para distribuir poder.
        </p>

        <h2 className="text-3xl font-heading font-bold text-primary mt-12 mb-6">
          O Mito da "Empresa Sem Chefe"
        </h2>
        <p>
          Não existe organização sem poder. A questão é: o poder está concentrado ou distribuído? 
          Explícito ou implícito? Legitimado por hierarquia ou por outra coisa?
        </p>

        <div className="bg-red-50 border-l-4 border-red-500 p-6 rounded-r-lg my-8">
          <h3 className="font-bold text-lg text-red-900 mb-2">❌ O Que NÃO É Governança Participativa</h3>
          <ul className="space-y-2 text-red-800">
            <li>• <strong>Consenso universal:</strong> Ninguém decide nada sem 100% de concordância (paralisia garantida)</li>
            <li>• <strong>"Todos fazem tudo":</strong> Ausência de papéis claros vira terra de ninguém</li>
            <li>• <strong>Democracia pura:</strong> Votar tudo o tempo todo é ineficiente e cansativo</li>
            <li>• <strong>Hierarquia disfarçada:</strong> "Somos horizontais, mas na prática o fundador decide tudo"</li>
          </ul>
        </div>

        <div className="bg-green-50 border-l-4 border-green-500 p-6 rounded-r-lg my-8">
          <h3 className="font-bold text-lg text-green-900 mb-2">✓ O Que É Governança Participativa de Verdade</h3>
          <ul className="space-y-2 text-green-800">
            <li>• <strong>Clareza de autoridade:</strong> Quem decide o quê, quando e como está explícito</li>
            <li>• <strong>Distribuição intencional:</strong> Poder distribuído segundo critérios claros (expertise, impacto, contexto)</li>
            <li>• <strong>Processos decisórios diversos:</strong> Algumas decisões são rápidas, outras consultivas, outras consensuais</li>
            <li>• <strong>Accountability transparente:</strong> Quem tem autoridade também tem responsabilidade visível</li>
          </ul>
        </div>

        <h2 className="text-3xl font-heading font-bold text-primary mt-12 mb-6">
          Os 4 Modelos Que Funcionam (Com Trade-Offs)
        </h2>

        <div className="space-y-8 my-10">
          <div className="bg-white rounded-xl p-8 shadow-soft border-l-4 border-blue-500">
            <h3 className="text-2xl font-bold text-blue-900 mb-3">1. Sociocracia (Círculos Interconectados)</h3>
            
            <p className="mb-4"><strong>Como funciona:</strong></p>
            <ul className="list-disc ml-6 space-y-2 mb-6">
              <li>Organização dividida em círculos semi-autônomos</li>
              <li>Cada círculo tem um domínio claro de autoridade</li>
              <li>Decisões por "consentimento" (ninguém tem objeção fundamental) em vez de consenso</li>
              <li>Círculos conectados por "double linking" (representantes bidirecionais)</li>
            </ul>

            <p className="mb-4"><strong>Exemplo prático:</strong></p>
            <p className="mb-4 text-muted-foreground italic">
              Na Endenburg Elektrotechniek (Holanda), círculos de produção decidem métodos de trabalho, 
              mas círculo financeiro tem veto se impactar orçamento. Cada círculo envia 2 representantes 
              para o círculo acima.
            </p>

            <div className="grid grid-cols-2 gap-4 my-6">
              <div className="bg-green-50 p-4 rounded-lg">
                <p className="font-bold text-green-900 mb-2">✓ Vantagens</p>
                <ul className="text-sm text-green-800 space-y-1">
                  <li>• Escalável (funciona com 20 ou 2000 pessoas)</li>
                  <li>• Decisões mais rápidas que consenso</li>
                  <li>• Reduz silos organizacionais</li>
                </ul>
              </div>
              <div className="bg-red-50 p-4 rounded-lg">
                <p className="font-bold text-red-900 mb-2">✗ Armadilhas</p>
                <ul className="text-sm text-red-800 space-y-1">
                  <li>• Curva de aprendizado íngreme</li>
                  <li>• Requer facilitação treinada</li>
                  <li>• Pode burocratizar se mal implementada</li>
                </ul>
              </div>
            </div>

            <p className="text-sm text-muted-foreground">
              <strong>Melhor para:</strong> Organizações de médio porte (50-500 pessoas) que valorizam 
              clareza processual e têm paciência para investir em treinamento.
            </p>
          </div>

          <div className="bg-white rounded-xl p-8 shadow-soft border-l-4 border-purple-500">
            <h3 className="text-2xl font-bold text-purple-900 mb-3">2. Holacracia (Papéis Dinâmicos)</h3>
            
            <p className="mb-4"><strong>Como funciona:</strong></p>
            <ul className="list-disc ml-6 space-y-2 mb-6">
              <li>Autoridade atribuída a <em>papéis</em>, não pessoas</li>
              <li>Cada papel tem propósito, domínios e responsabilidades explícitas</li>
              <li>Pessoas ocupam múltiplos papéis fluidos</li>
              <li>Governança separada de operação (reuniões diferentes)</li>
              <li>Constituição organizacional pública e evolutiva</li>
            </ul>

            <p className="mb-4"><strong>Exemplo prático:</strong></p>
            <p className="mb-4 text-muted-foreground italic">
              Na Zappos, um desenvolvedor pode ter 5 papéis: "Backend Engineer" (código), 
              "Hiring Lead" (seleção técnica), "Coffee Circle Rep" (decisões sobre café do escritório). 
              Autoridade vem do papel, não do cargo.
            </p>

            <div className="grid grid-cols-2 gap-4 my-6">
              <div className="bg-green-50 p-4 rounded-lg">
                <p className="font-bold text-green-900 mb-2">✓ Vantagens</p>
                <ul className="text-sm text-green-800 space-y-1">
                  <li>• Transparência radical de responsabilidades</li>
                  <li>• Pessoas podem crescer sem "subir hierarquia"</li>
                  <li>• Adaptação rápida (papéis mudam, não org charts)</li>
                </ul>
              </div>
              <div className="bg-red-50 p-4 rounded-lg">
                <p className="font-bold text-red-900 mb-2">✗ Armadilhas</p>
                <ul className="text-sm text-red-800 space-y-1">
                  <li>• Requer software específico (GlassFrog, etc.)</li>
                  <li>• Pode ser frio/mecânico demais</li>
                  <li>• Difícil em culturas hierárquicas tradicionais</li>
                </ul>
              </div>
            </div>

            <p className="text-sm text-muted-foreground">
              <strong>Melhor para:</strong> Startups tech ou empresas em transformação digital que valorizam 
              clareza extrema e estão dispostas a investir em tecnologia de gestão.
            </p>
          </div>

          <div className="bg-white rounded-xl p-8 shadow-soft border-l-4 border-green-500">
            <h3 className="text-2xl font-bold text-green-900 mb-3">3. Círculos de Influência (Advice Process)</h3>
            
            <p className="mb-4"><strong>Como funciona:</strong></p>
            <ul className="list-disc ml-6 space-y-2 mb-6">
              <li>Qualquer pessoa pode tomar qualquer decisão...</li>
              <li>...desde que consulte quem será impactado e quem tem expertise</li>
              <li>Quem decide não precisa seguir os conselhos, mas precisa ouvi-los</li>
              <li>Transparência total: todas as decisões são públicas</li>
            </ul>

            <p className="mb-4"><strong>Exemplo prático:</strong></p>
            <p className="mb-4 text-muted-foreground italic">
              Na Buurtzorg (enfermagem na Holanda), uma enfermeira pode decidir comprar equipamento de €5000 
              se consultar sua equipe e o departamento financeiro. Ela decide, mas com input de quem entende 
              de finanças e quem vai usar o equipamento.
            </p>

            <div className="grid grid-cols-2 gap-4 my-6">
              <div className="bg-green-50 p-4 rounded-lg">
                <p className="font-bold text-green-900 mb-2">✓ Vantagens</p>
                <ul className="text-sm text-green-800 space-y-1">
                  <li>• Simples de entender e implementar</li>
                  <li>• Velocidade de decisão alta</li>
                  <li>• Empodera indivíduos</li>
                </ul>
              </div>
              <div className="bg-red-50 p-4 rounded-lg">
                <p className="font-bold text-red-900 mb-2">✗ Armadilhas</p>
                <ul className="text-sm text-red-800 space-y-1">
                  <li>• Requer maturidade emocional alta</li>
                  <li>• Pode gerar decisões egoístas</li>
                  <li>• Difícil rastrear quem consultou quem</li>
                </ul>
              </div>
            </div>

            <p className="text-sm text-muted-foreground">
              <strong>Melhor para:</strong> Equipes pequenas (até 50 pessoas) com alta confiança mútua 
              e cultura de responsabilidade individual.
            </p>
          </div>

          <div className="bg-white rounded-xl p-8 shadow-soft border-l-4 border-orange-500">
            <h3 className="text-2xl font-bold text-orange-900 mb-3">4. Governança por Tensão (Teal Organizations)</h3>
            
            <p className="mb-4"><strong>Como funciona:</strong></p>
            <ul className="list-disc ml-6 space-y-2 mb-6">
              <li>Organização vista como organismo vivo com propósito próprio</li>
              <li>Decisões emergem de "sentir" coletivo, não planejamento top-down</li>
              <li>Quando alguém sente "tensão", propõe ajuste</li>
              <li>Auto-organização total, hierarquia fluida baseada em contexto</li>
            </ul>

            <p className="mb-4"><strong>Exemplo prático:</strong></p>
            <p className="mb-4 text-muted-foreground italic">
              Na Morning Star (processamento de tomate, EUA), não há cargos fixos. Cada funcionário escreve 
              "Colleague Letter of Understanding" negociando responsabilidades com pares. Se alguém sente que 
              um processo não está funcionando, propõe mudança e implementa se outros afetados concordarem.
            </p>

            <div className="grid grid-cols-2 gap-4 my-6">
              <div className="bg-green-50 p-4 rounded-lg">
                <p className="font-bold text-green-900 mb-2">✓ Vantagens</p>
                <ul className="text-sm text-green-800 space-y-1">
                  <li>• Máxima adaptabilidade</li>
                  <li>• Engajamento profundo</li>
                  <li>• Senso de propósito compartilhado</li>
                </ul>
              </div>
              <div className="bg-red-50 p-4 rounded-lg">
                <p className="font-bold text-red-900 mb-2">✗ Armadilhas</p>
                <ul className="text-sm text-red-800 space-y-1">
                  <li>• Requer cultura muito madura</li>
                  <li>• Pode parecer místico/esotérico demais</li>
                  <li>• Difícil para novos membros entenderem</li>
                </ul>
              </div>
            </div>

            <p className="text-sm text-muted-foreground">
              <strong>Melhor para:</strong> Organizações maduras com propósito claro, fundadores evolutivos 
              e pessoas com consciência sistêmica desenvolvida.
            </p>
          </div>
        </div>

        <h2 className="text-3xl font-heading font-bold text-primary mt-12 mb-6">
          Como Escolher Seu Modelo (Framework de Decisão)
        </h2>

        <div className="bg-white rounded-xl p-8 shadow-soft my-8">
          <h3 className="text-xl font-bold mb-4">Faça essas 5 perguntas:</h3>
          
          <div className="space-y-6">
            <div>
              <p className="font-bold mb-2">1. Qual o tamanho e estágio da organização?</p>
              <ul className="text-sm space-y-1 ml-4">
                <li>• <strong>Até 20 pessoas:</strong> Advice Process (simplicidade)</li>
                <li>• <strong>20-100:</strong> Sociocracia ou Holacracia (estrutura clara)</li>
                <li>• <strong>100+:</strong> Sociocracia (escalabilidade comprovada)</li>
              </ul>
            </div>

            <div>
              <p className="font-bold mb-2">2. Qual o nível de maturidade emocional/sistêmica da equipe?</p>
              <ul className="text-sm space-y-1 ml-4">
                <li>• <strong>Baixo:</strong> Comece com Advice Process (simples)</li>
                <li>• <strong>Médio:</strong> Sociocracia ou Holacracia (clareza processual)</li>
                <li>• <strong>Alto:</strong> Teal/Governança por Tensão (fluidez)</li>
              </ul>
            </div>

            <div>
              <p className="font-bold mb-2">3. Vocês valorizam mais clareza ou fluidez?</p>
              <ul className="text-sm space-y-1 ml-4">
                <li>• <strong>Clareza:</strong> Holacracia (papéis explícitos)</li>
                <li>• <strong>Fluidez:</strong> Teal (emergência)</li>
                <li>• <strong>Equilíbrio:</strong> Sociocracia</li>
              </ul>
            </div>

            <div>
              <p className="font-bold mb-2">4. Há disposição para investir em treinamento/ferramentas?</p>
              <ul className="text-sm space-y-1 ml-4">
                <li>• <strong>Sim:</strong> Holacracia (requer software) ou Sociocracia (requer facilitação)</li>
                <li>• <strong>Não:</strong> Advice Process (low-tech)</li>
              </ul>
            </div>

            <div>
              <p className="font-bold mb-2">5. Qual a urgência da mudança?</p>
              <ul className="text-sm space-y-1 ml-4">
                <li>• <strong>Alta:</strong> Advice Process (implementação rápida)</li>
                <li>• <strong>Média:</strong> Sociocracia (transição estruturada)</li>
                <li>• <strong>Baixa (evolução gradual):</strong> Teal (transformação profunda)</li>
              </ul>
            </div>
          </div>
        </div>

        <h2 className="text-3xl font-heading font-bold text-primary mt-12 mb-6">
          Roadmap de Implementação (Qualquer Modelo)
        </h2>

        <div className="space-y-6 my-8">
          <div className="flex items-start">
            <div className="bg-primary text-primary-foreground rounded-full w-10 h-10 flex items-center justify-center font-bold mr-4 flex-shrink-0">1</div>
            <div>
              <h3 className="text-lg font-bold mb-2">Piloto em uma área (1-2 meses)</h3>
              <p className="text-muted-foreground">
                Não transforme tudo de uma vez. Escolha um time de 5-10 pessoas voluntárias e teste. 
                Aprenda com erros em contexto seguro.
              </p>
            </div>
          </div>

          <div className="flex items-start">
            <div className="bg-primary text-primary-foreground rounded-full w-10 h-10 flex items-center justify-center font-bold mr-4 flex-shrink-0">2</div>
            <div>
              <h3 className="text-lg font-bold mb-2">Documente rituais e processos (Semanas 3-4)</h3>
              <p className="text-muted-foreground">
                Crie playbook claro: como propomos mudanças? Como decidimos? Como resolvemos conflitos? 
                Sem documentação, vira "quem grita mais alto ganha".
              </p>
            </div>
          </div>

          <div className="flex items-start">
            <div className="bg-primary text-primary-foreground rounded-full w-10 h-10 flex items-center justify-center font-bold mr-4 flex-shrink-0">3</div>
            <div>
              <h3 className="text-lg font-bold mb-2">Treine facilitadores (Mês 2)</h3>
              <p className="text-muted-foreground">
                Governança participativa requer facilitação habilidosa. Invista em treinar 2-3 pessoas 
                para facilitar reuniões decisórias (ou contrate consultores).
              </p>
            </div>
          </div>

          <div className="flex items-start">
            <div className="bg-primary text-primary-foreground rounded-full w-10 h-10 flex items-center justify-center font-bold mr-4 flex-shrink-0">4</div>
            <div>
              <h3 className="text-lg font-bold mb-2">Expanda para outras áreas (Meses 3-6)</h3>
              <p className="text-muted-foreground">
                Com aprendizados do piloto, expanda gradualmente. Permita que times optem por entrar 
                quando se sentirem prontos.
              </p>
            </div>
          </div>

          <div className="flex items-start">
            <div className="bg-primary text-primary-foreground rounded-full w-10 h-10 flex items-center justify-center font-bold mr-4 flex-shrink-0">5</div>
            <div>
              <h3 className="text-lg font-bold mb-2">Iteração constante (Sempre)</h3>
              <p className="text-muted-foreground">
                A cada 3 meses, retrospectiva: o que está funcionando? O que não? Governança 
                participativa é viva — deve evoluir com a organização.
              </p>
            </div>
          </div>
        </div>

        <div className="bg-amber-50 border-l-4 border-amber-500 p-6 rounded-r-lg my-8">
          <h3 className="font-bold text-lg text-amber-900 mb-2">⚠️ Erro Fatal Comum</h3>
          <p className="text-amber-800 mb-3">
            "Vamos adotar Holacracia na sexta-feira." Governança participativa não é switch on/off. 
            É jornada de 12-24 meses de mudança cultural profunda.
          </p>
          <p className="text-amber-800">
            Se você não tem paciência para essa jornada, continue com hierarquia clara — é melhor 
            que fingir participação.
          </p>
        </div>

        <h2 className="text-3xl font-heading font-bold text-primary mt-12 mb-6">
          Sinais de Que Está Funcionando
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-8">
          <div className="bg-green-50 p-6 rounded-lg border-l-4 border-green-500">
            <h3 className="font-bold text-green-900 mb-3">✓ Indicadores Positivos</h3>
            <ul className="text-sm text-green-800 space-y-2">
              <li>• Decisões acontecem mais rápido que antes</li>
              <li>• Pessoas sabem exatamente quem pode decidir o quê</li>
              <li>• Conflitos são resolvidos por processo, não política</li>
              <li>• Novas ideias emergem de toda organização</li>
              <li>• Reuniões têm propósito claro e terminam no prazo</li>
            </ul>
          </div>

          <div className="bg-red-50 p-6 rounded-lg border-l-4 border-red-500">
            <h3 className="font-bold text-red-900 mb-3">✗ Sinais de Alarme</h3>
            <ul className="text-sm text-red-800 space-y-2">
              <li>• "Ninguém sabe quem decide isso"</li>
              <li>• Reuniões triplicaram em duração</li>
              <li>• Pessoas usam modelo para evitar responsabilidade</li>
              <li>• Hierarquia informal substitui a formal</li>
              <li>• Frustração crescente com "processo excessivo"</li>
            </ul>
          </div>
        </div>

        <div className="bg-gradient-to-br from-primary to-primary-dark text-primary-foreground rounded-xl p-8 my-12 text-center">
          <h3 className="text-2xl font-bold mb-4">Quer Implementar Governança Participativa?</h3>
          <p className="text-lg mb-6 opacity-90">
            Nossa Arquitetura de Ecossistema Organizacional co-cria estruturas de governança 
            adaptadas à sua cultura, não modelos "de prateleira".
          </p>
          <p className="text-sm opacity-75 mb-6">
            Mapeamos sua cultura atual, identificamos modelo compatível e facilitamos 
            transição gradual e sustentável.
          </p>
        </div>
      </div>
    </ArticleLayout>
  )
}
