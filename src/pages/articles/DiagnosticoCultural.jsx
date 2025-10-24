import React from 'react'
import ArticleLayout from '../../components/ArticleLayout'

export default function DiagnosticoCultural() {
  return (
    <ArticleLayout
      title="O Diagnóstico Cultural Que Ninguém Te Ensinou a Fazer"
      category="Métodos"
      date="15 Out 2024"
      readTime="15 min"
      excerpt="Pesquisas de clima tradicionais medem satisfação, não cultura. Aprenda a realizar um diagnóstico antropológico real que revela o DNA invisível da sua organização."
    >
      <div className="bg-amber-50 border-l-4 border-amber-500 rounded-lg p-8 mb-8">
        <h3 className="text-xl font-heading font-bold text-amber-900 mb-3">
          ⚠️ O Problema com Pesquisas de Clima Tradicionais
        </h3>
        <p className="text-foreground leading-relaxed">
          Sua organização provavelmente faz uma pesquisa de clima anual. Você mede NPS interno, 
          satisfação com liderança, ambiente de trabalho... e com base nisso toma decisões estratégicas. 
          <strong className="text-amber-900"> Mas há um problema: você não está medindo cultura.</strong>
        </p>
      </div>

      <h2 className="text-3xl font-heading font-bold text-primary mb-6 mt-12">
        A Diferença Entre Satisfação e Cultura
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        <div className="bg-red-50 rounded-lg p-6">
          <h4 className="font-heading font-bold text-red-900 mb-3">
            ❌ Pesquisa de Clima (Satisfação)
          </h4>
          <ul className="space-y-2 text-sm text-foreground">
            <li>→ "Você está satisfeito com seu salário?"</li>
            <li>→ "Seu gestor dá feedback regularmente?"</li>
            <li>→ "Você recomendaria trabalhar aqui?"</li>
            <li>→ "O escritório é confortável?"</li>
          </ul>
          <p className="text-sm text-muted-foreground mt-4 italic">
            Mede sintomas superficiais, não causas profundas
          </p>
        </div>

        <div className="bg-green-50 rounded-lg p-6">
          <h4 className="font-heading font-bold text-green-900 mb-3">
            ✅ Diagnóstico Cultural (DNA)
          </h4>
          <ul className="space-y-2 text-sm text-foreground">
            <li>→ "Como decisões realmente são tomadas aqui?"</li>
            <li>→ "Quais histórias são contadas repetidamente?"</li>
            <li>→ "O que é recompensado vs punido na prática?"</li>
            <li>→ "Quem tem poder de fato (vs no organograma)?"</li>
          </ul>
          <p className="text-sm text-muted-foreground mt-4 italic">
            Revela padrões invisíveis que governam comportamentos
          </p>
        </div>
      </div>

      <p className="text-lg text-foreground leading-relaxed mb-8">
        Pesquisa de clima te diz <em>"As pessoas estão felizes?"</em>. Diagnóstico cultural te diz 
        <strong> "Quem somos nós realmente, além do que declaramos ser?"</strong>
      </p>

      <h2 className="text-3xl font-heading font-bold text-primary mb-6 mt-12">
        O Método de Diagnóstico Antropológico (4 Camadas)
      </h2>

      <div className="space-y-8">
        <div className="bg-white rounded-xl shadow-soft p-8">
          <div className="flex items-start gap-4">
            <div className="text-4xl">🎭</div>
            <div className="flex-1">
              <h3 className="text-2xl font-heading font-bold text-primary mb-3">
                Camada 1: Artefatos Visíveis
              </h3>
              <p className="text-foreground leading-relaxed mb-4">
                O que você <em>vê</em> quando entra na organização. São as manifestações tangíveis da cultura.
              </p>
              <div className="bg-gray-50 rounded-lg p-4">
                <p className="text-sm font-semibold text-secondary mb-2">O QUE OBSERVAR:</p>
                <ul className="space-y-2 text-sm text-foreground">
                  <li>• Layout físico (escritório aberto vs salas fechadas)</li>
                  <li>• Dress code (formal, casual, variado)</li>
                  <li>• Artefatos na parede (prêmios, missão/visão, fotos de equipe)</li>
                  <li>• Rituais públicos (reuniões all-hands, happy hours, celebrações)</li>
                  <li>• Linguagem e jargões usados</li>
                </ul>
              </div>
              <p className="text-sm text-muted-foreground mt-4 italic">
                ⚠️ Cuidado: artefatos podem ser enganosos. Um pôster de "Inovação" na parede não significa cultura inovadora.
              </p>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-soft p-8">
          <div className="flex items-start gap-4">
            <div className="text-4xl">💬</div>
            <div className="flex-1">
              <h3 className="text-2xl font-heading font-bold text-primary mb-3">
                Camada 2: Valores Declarados vs Valores Vividos
              </h3>
              <p className="text-foreground leading-relaxed mb-4">
                O que a organização <em>diz</em> que valoriza vs o que realmente recompensa/pune.
              </p>
              <div className="bg-gray-50 rounded-lg p-4 mb-4">
                <p className="text-sm font-semibold text-secondary mb-2">MÉTODO: ENTREVISTAS NARRATIVAS</p>
                <p className="text-sm text-foreground mb-3">
                  Em vez de perguntar "Quais são os valores da empresa?", pergunte:
                </p>
                <ul className="space-y-2 text-sm text-foreground">
                  <li>• "Conte uma história de alguém que foi promovido aqui. Por quê?"</li>
                  <li>• "Quem são as 'lendas' da organização? O que fizeram?"</li>
                  <li>• "Conte um caso de alguém que foi demitido/saiu. O que aconteceu?"</li>
                  <li>• "Quando você toma uma decisão difícil, o que pesa mais?"</li>
                </ul>
              </div>
              <div className="bg-amber-50 border-l-4 border-amber-500 p-4">
                <p className="text-sm font-semibold text-amber-900 mb-2">EXEMPLO REAL:</p>
                <p className="text-sm text-foreground">
                  <strong>Valor declarado:</strong> "Colaboração acima de tudo"<br/>
                  <strong>Valor vivido:</strong> "Quem mais entrega individualmente é promovido, colaboração é 'bônus'"<br/>
                  <strong>Gap cultural:</strong> Discurso vs prática criam cinismo.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-soft p-8">
          <div className="flex items-start gap-4">
            <div className="text-4xl">🕸️</div>
            <div className="flex-1">
              <h3 className="text-2xl font-heading font-bold text-primary mb-3">
                Camada 3: Estruturas de Poder Invisíveis
              </h3>
              <p className="text-foreground leading-relaxed mb-4">
                Quem realmente tem influência? (Nem sempre é quem está no organograma)
              </p>
              <div className="bg-gray-50 rounded-lg p-4">
                <p className="text-sm font-semibold text-secondary mb-2">MÉTODO: MAPEAMENTO DE REDES SOCIAIS</p>
                <ul className="space-y-2 text-sm text-foreground">
                  <li>• "Quando você precisa de aprovação real (não formal), quem consulta?"</li>
                  <li>• "Quem são os 'conectores' que todos procuram?"</li>
                  <li>• "Quais grupos almoçam juntos regularmente?"</li>
                  <li>• "Quem tem o 'veto informal' em decisões?"</li>
                </ul>
              </div>
              <p className="text-sm text-muted-foreground mt-4 italic">
                💡 Insight: Mudar cultura sem engajar os "influenciadores invisíveis" é impossível.
              </p>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-soft p-8">
          <div className="flex items-start gap-4">
            <div className="text-4xl">🌊</div>
            <div className="flex-1">
              <h3 className="text-2xl font-heading font-bold text-primary mb-3">
                Camada 4: Pressupostos Básicos (O DNA Profundo)
              </h3>
              <p className="text-foreground leading-relaxed mb-4">
                As crenças inconscientes que governam tudo. O mais difícil de acessar, mas o mais importante.
              </p>
              <div className="bg-gray-50 rounded-lg p-4 mb-4">
                <p className="text-sm font-semibold text-secondary mb-2">PERGUNTAS REVELADORAS:</p>
                <ul className="space-y-2 text-sm text-foreground">
                  <li>• "Como as pessoas reagem ao erro aqui?" → revela crença sobre aprendizado</li>
                  <li>• "Como decisões são tomadas?" → revela crença sobre autonomia/controle</li>
                  <li>• "O que acontece com quem discorda publicamente?" → revela crença sobre conflito</li>
                  <li>• "Como se fala de dinheiro/lucro?" → revela crença sobre sustentabilidade</li>
                </ul>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-red-50 rounded p-3">
                  <p className="text-xs font-bold text-red-900 mb-2">CULTURA DEFENSIVA</p>
                  <p className="text-xs text-foreground">"Erro = punição"<br/>"Evitar risco a todo custo"</p>
                </div>
                <div className="bg-green-50 rounded p-3">
                  <p className="text-xs font-bold text-green-900 mb-2">CULTURA DE APRENDIZADO</p>
                  <p className="text-xs text-foreground">"Erro = oportunidade"<br/>"Experimentar é esperado"</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <h2 className="text-3xl font-heading font-bold text-primary mb-6 mt-12">
        O Processo Completo de Diagnóstico (4-6 Semanas)
      </h2>

      <div className="bg-primary/5 rounded-xl p-8">
        <ol className="space-y-6">
          <li className="flex gap-4">
            <span className="flex-shrink-0 w-10 h-10 bg-secondary text-white rounded-full flex items-center justify-center font-bold">1</span>
            <div>
              <strong className="text-lg text-primary">Preparação (Semana 1)</strong>
              <p className="text-foreground mt-2">Análise de documentos, definição de stakeholders-chave, design de roteiro de entrevistas customizado.</p>
            </div>
          </li>
          <li className="flex gap-4">
            <span className="flex-shrink-0 w-10 h-10 bg-secondary text-white rounded-full flex items-center justify-center font-bold">2</span>
            <div>
              <strong className="text-lg text-primary">Imersão (Semanas 2-3)</strong>
              <p className="text-foreground mt-2">15-25 entrevistas narrativas (1h cada), observação participante em reuniões/rituais, mapeamento de rede social.</p>
            </div>
          </li>
          <li className="flex gap-4">
            <span className="flex-shrink-0 w-10 h-10 bg-secondary text-white rounded-full flex items-center justify-center font-bold">3</span>
            <div>
              <strong className="text-lg text-primary">Análise (Semana 4)</strong>
              <p className="text-foreground mt-2">Análise temática das narrativas, identificação de padrões, gaps culturais, arquétipo dominante.</p>
            </div>
          </li>
          <li className="flex gap-4">
            <span className="flex-shrink-0 w-10 h-10 bg-secondary text-white rounded-full flex items-center justify-center font-bold">4</span>
            <div>
              <strong className="text-lg text-primary">Síntese e Entrega (Semanas 5-6)</strong>
              <p className="text-foreground mt-2">Criação do Relatório de DNA Organizacional, workshop de apresentação para liderança, co-criação de recomendações.</p>
            </div>
          </li>
        </ol>
      </div>

      <div className="bg-secondary/10 rounded-xl p-8 mt-12">
        <h3 className="text-2xl font-heading font-bold text-primary mb-4">
          💡 Conclusão
        </h3>
        <p className="text-lg text-foreground leading-relaxed mb-4">
          Parar de fazer pesquisas de satisfação genéricas e começar a fazer diagnóstico cultural antropológico 
          é a diferença entre <strong>dados superficiais e compreensão profunda</strong>.
        </p>
        <p className="text-lg text-foreground leading-relaxed">
          Você não pode transformar o que não compreende. Invista tempo em revelar o DNA real da sua organização — 
          é a base de qualquer mudança sustentável.
        </p>
      </div>
    </ArticleLayout>
  )
}
