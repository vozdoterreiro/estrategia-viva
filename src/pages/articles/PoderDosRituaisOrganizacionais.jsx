import React from 'react'
import ArticleLayout from '../../components/ArticleLayout'

export default function PoderDosRituaisOrganizacionais() {
  return (
    <ArticleLayout
      title="Rituais Organizacionais: Por Que Sua Equipe Precisa Deles"
      category="Práticas"
      date="15 Set 2024"
      readTime="11 min"
      excerpt="Rituais não são 'perda de tempo'. São o tecido que conecta pessoas ao propósito. Aprenda a desenhar rituais que fortalecem cultura e geram pertencimento real."
    >
      <div className="prose prose-lg max-w-none">
        <p className="text-xl text-muted-foreground leading-relaxed mb-8">
          "Vamos pular a retrospectiva essa sprint, tá todo mundo ocupado." Esse tipo de frase 
          é sintoma de uma organização que confunde ritual com burocracia. Vamos desenredar.
        </p>

        <h2 className="text-3xl font-heading font-bold text-primary mt-12 mb-6">
          O Que São Rituais (E O Que Não São)
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-8">
          <div className="bg-green-50 border-l-4 border-green-500 p-6 rounded-r-lg">
            <h3 className="font-bold text-lg text-green-900 mb-3">✓ Rituais Verdadeiros</h3>
            <ul className="text-sm text-green-800 space-y-2">
              <li>• Têm <strong>significado simbólico</strong> além da função prática</li>
              <li>• Conectam pessoas a algo <strong>maior que a tarefa</strong></li>
              <li>• Criam <strong>memória coletiva</strong> compartilhada</li>
              <li>• Marcam <strong>transições</strong> (início/fim de ciclo, mudanças)</li>
              <li>• Reforçam <strong>valores</strong> através de ações, não palavras</li>
            </ul>
          </div>

          <div className="bg-red-50 border-l-4 border-red-500 p-6 rounded-r-lg">
            <h3 className="font-bold text-lg text-red-900 mb-3">✗ Reuniões Burocráticas</h3>
            <ul className="text-sm text-red-800 space-y-2">
              <li>• Existem "porque sempre fizemos assim"</li>
              <li>• Ninguém sabe mais <strong>por que</strong> acontecem</li>
              <li>• Pessoas vão de corpo presente, alma ausente</li>
              <li>• Poderiam ser substituídas por email</li>
              <li>• Geram frustração, não conexão</li>
            </ul>
          </div>
        </div>

        <div className="bg-gradient-to-br from-primary/5 to-secondary/5 rounded-xl p-8 my-10">
          <h3 className="font-bold text-lg mb-4">Por Que Rituais Importam (Ciência + Antropologia)</h3>
          <ul className="space-y-3">
            <li>
              <strong>Neurociência:</strong> Rituais liberam oxitocina (hormônio da conexão) 
              e reduzem cortisol (estresse). Literal quimicamente te fazem sentir parte do grupo.
            </li>
            <li>
              <strong>Antropologia:</strong> Toda cultura humana tem rituais. Não é coincidência — 
              são tecnologia social para criar coesão em grupos maiores que família nuclear.
            </li>
            <li>
              <strong>Psicologia Organizacional:</strong> Rituais dão <em>ancoragem</em> em ambientes 
              de incerteza. Em startups caóticas, rituais são ilhas de estabilidade.
            </li>
          </ul>
        </div>

        <h2 className="text-3xl font-heading font-bold text-primary mt-12 mb-6">
          Os 7 Tipos de Rituais Que Toda Organização Viva Precisa
        </h2>

        <div className="space-y-8 my-10">
          <div className="bg-white rounded-xl p-8 shadow-soft border-l-4 border-blue-500">
            <h3 className="text-2xl font-bold text-blue-900 mb-3">1. Rituais de Passagem</h3>
            <p className="text-sm text-blue-700 font-semibold mb-4">Marcam transições importantes</p>
            
            <div className="mb-6">
              <p className="font-bold mb-2">🎯 Propósito:</p>
              <p className="text-sm">
                Sinalizar mudanças de identidade (novo membro, promoção, saída) e ajudar 
                pessoa/grupo a processar emocionalmente a transição.
              </p>
            </div>

            <div className="bg-blue-50 p-6 rounded-lg mb-4">
              <p className="font-bold mb-3">Exemplos Poderosos:</p>
              <ul className="text-sm space-y-3">
                <li>
                  <strong>Onboarding na Patagonia:</strong> Novo funcionário passa 1º dia na natureza 
                  (trilha, praia, montanha) com mentor. Conecta fisicamente à missão ambiental antes 
                  de ver computador.
                </li>
                <li>
                  <strong>"Ring the Bell" na HubSpot:</strong> Quando alguém fecha venda grande, 
                  toca sino físico no escritório. Todo mundo para, aplaude, celebra. 
                  Marca passagem de "tentando" para "conquistando".
                </li>
                <li>
                  <strong>Ritual de Saída no Buffer:</strong> Quando alguém sai (por bem), 
                  time faz círculo, cada pessoa compartilha 1 memória/aprendizado com a pessoa. 
                  Honra contribuição, fecha ciclo emocionalmente.
                </li>
              </ul>
            </div>

            <div className="bg-gray-50 p-4 rounded-lg">
              <p className="text-sm"><strong>Como Criar o Seu:</strong></p>
              <p className="text-sm text-muted-foreground mt-2">
                1. Identifique transição importante (primeiro commit, 1º ano na empresa, liderança)<br/>
                2. Desenhe momento simbólico que capture essência da passagem<br/>
                3. Envolva comunidade (não é individual, é coletivo)<br/>
                4. Crie artefato físico quando possível (certificado, objeto, foto)
              </p>
            </div>
          </div>

          <div className="bg-white rounded-xl p-8 shadow-soft border-l-4 border-green-500">
            <h3 className="text-2xl font-bold text-green-900 mb-3">2. Rituais de Renovação</h3>
            <p className="text-sm text-green-700 font-semibold mb-4">Limpam o passado, abrem espaço para novo</p>
            
            <div className="mb-6">
              <p className="font-bold mb-2">🎯 Propósito:</p>
              <p className="text-sm">
                Processar fracassos, liberar rancores, resetar energia coletiva. 
                Impedem que "bagagem" do passado contamine futuro.
              </p>
            </div>

            <div className="bg-green-50 p-6 rounded-lg mb-4">
              <p className="font-bold mb-3">Exemplos Poderosos:</p>
              <ul className="text-sm space-y-3">
                <li>
                  <strong>"Failure Wall" na IDEO:</strong> Parede física onde time cola post-its 
                  com fracassos do trimestre. No último dia, leem todos em voz alta, riem juntos, 
                  depois rasgam e jogam fora ritualmente. Libera vergonha, cria segurança psicológica.
                </li>
                <li>
                  <strong>Retrospectivas Trimestrais Profundas:</strong> Não só "o que melhorar", 
                  mas círculo onde cada pessoa compartilha 1 mágoa/frustração não dita. 
                  Depois queimam (literalmente) papéis com rancores. Fecha capítulo emocionalmente.
                </li>
                <li>
                  <strong>Ritual de Ano Novo Organizacional:</strong> Time passa 1 dia fora do escritório, 
                  faz balanço honesto do ano (sucessos + fracassos), depois desenha visão coletiva do próximo. 
                  Fecha velho, abre novo.
                </li>
              </ul>
            </div>
          </div>

          <div className="bg-white rounded-xl p-8 shadow-soft border-l-4 border-purple-500">
            <h3 className="text-2xl font-bold text-purple-900 mb-3">3. Rituais de Conexão</h3>
            <p className="text-sm text-purple-700 font-semibold mb-4">Tecem teia de relacionamentos</p>
            
            <div className="mb-6">
              <p className="font-bold mb-2">🎯 Propósito:</p>
              <p className="text-sm">
                Criar oportunidades estruturadas para pessoas se conhecerem além do trabalho. 
                Transformar colegas em comunidade.
              </p>
            </div>

            <div className="bg-purple-50 p-6 rounded-lg mb-4">
              <p className="font-bold mb-3">Exemplos Poderosos:</p>
              <ul className="text-sm space-y-3">
                <li>
                  <strong>"Donut Roulette" no Automattic:</strong> Software sorteia duplas aleatórias 
                  semanalmente para café virtual (empresa 100% remota). Pessoas de áreas diferentes se 
                  conhecem. Simples, mas tecido relacional forte.
                </li>
                <li>
                  <strong>Almoços "Family Style" na Airbnb:</strong> Toda sexta, time almoça junto em 
                  mesas longas (não cada um sua mesa). Comida servida em travessas compartilhadas. 
                  Ato físico de compartilhar comida gera conexão primordial.
                </li>
                <li>
                  <strong>"Show & Tell" na Etsy:</strong> Toda semana, 1 pessoa mostra hobby/paixão 
                  pessoal (não trabalho): tricô, astronomia, escalada. Time descobre humanidade além do código.
                </li>
              </ul>
            </div>
          </div>

          <div className="bg-white rounded-xl p-8 shadow-soft border-l-4 border-orange-500">
            <h3 className="text-2xl font-bold text-orange-900 mb-3">4. Rituais de Celebração</h3>
            <p className="text-sm text-orange-700 font-semibold mb-4">Honram conquistas, não só metas</p>
            
            <div className="mb-6">
              <p className="font-bold mb-2">🎯 Propósito:</p>
              <p className="text-sm">
                Reconhecer progresso, não só destino final. Celebrar <em>como</em> conquistaram, 
                não só <em>o que</em> conquistaram.
              </p>
            </div>

            <div className="bg-orange-50 p-6 rounded-lg mb-4">
              <p className="font-bold mb-3">Exemplos Poderosos:</p>
              <ul className="text-sm space-y-3">
                <li>
                  <strong>"Values Award" na Zappos:</strong> Todo mês, pessoas votam em colega que 
                  incorporou valor cultural (ex: "Deliver WOW"). Vencedor ganha estacionamento VIP + 
                  $50. Não é sobre dinheiro — é ser visto pelos pares.
                </li>
                <li>
                  <strong>Celebração de "Primeira Vez":</strong> Time celebra marcos pequenos mas 
                  significativos: primeiro commit, primeira apresentação pública, primeira venda solo. 
                  Reconhece coragem, não só resultado.
                </li>
                <li>
                  <strong>"Win Wall" física:</strong> Parede onde todos colam vitórias da semana 
                  (grandes ou minúsculas). Sexta-feira, leem juntos. Termina semana em alta, 
                  não exaustão.
                </li>
              </ul>
            </div>
          </div>

          <div className="bg-white rounded-xl p-8 shadow-soft border-l-4 border-red-500">
            <h3 className="text-2xl font-bold text-red-900 mb-3">5. Rituais de Aprendizagem</h3>
            <p className="text-sm text-red-700 font-semibold mb-4">Institucionalizam curiosidade</p>
            
            <div className="mb-6">
              <p className="font-bold mb-2">🎯 Propósito:</p>
              <p className="text-sm">
                Criar cadência de compartilhamento de conhecimento. Transformar aprendizados 
                individuais em inteligência coletiva.
              </p>
            </div>

            <div className="bg-red-50 p-6 rounded-lg mb-4">
              <p className="font-bold mb-3">Exemplos Poderosos:</p>
              <ul className="text-sm space-y-3">
                <li>
                  <strong>"Tech Talks" semanais no Google:</strong> Qualquer pessoa pode apresentar 
                  algo que aprendeu (20min). Não precisa ser expert — curiosidade {'>'} expertise. 
                  Democratiza conhecimento.
                </li>
                <li>
                  <strong>"Lunch & Learn" com rodízio:</strong> Toda semana, área diferente apresenta 
                  "o que fazemos e por quê" para resto da empresa. Marketing entende eng, vendas entende produto.
                </li>
                <li>
                  <strong>Book Club Estruturado:</strong> Time lê mesmo livro/artigo, discute aplicação 
                  ao contexto da empresa. Não é teórico — sempre termina com "o que vamos testar?".
                </li>
              </ul>
            </div>
          </div>

          <div className="bg-white rounded-xl p-8 shadow-soft border-l-4 border-yellow-500">
            <h3 className="text-2xl font-bold text-yellow-900 mb-3">6. Rituais de Propósito</h3>
            <p className="text-sm text-yellow-700 font-semibold mb-4">Reconectam ao "por quê"</p>
            
            <div className="mb-6">
              <p className="font-bold mb-2">🎯 Propósito:</p>
              <p className="text-sm">
                Impedir que trabalho vire automático. Lembrar regularmente por que o que 
                fazem importa além de métricas e receita.
              </p>
            </div>

            <div className="bg-yellow-50 p-6 rounded-lg mb-4">
              <p className="font-bold mb-3">Exemplos Poderosos:</p>
              <ul className="text-sm space-y-3">
                <li>
                  <strong>"Customer Love Letters" na Slack:</strong> Toda all-hands, leem 1 email 
                  de cliente descrevendo como Slack mudou trabalho deles. Time lembra: não fazemos software, 
                  facilitamos vidas.
                </li>
                <li>
                  <strong>Visita Trimestral ao "Campo":</strong> Eng/produto visitam clientes reais, 
                  veem produto sendo usado. Sai do abstrato ("corrigir bug X") para concreto 
                  ("aquela senhora frustrada que não conseguia imprimir relatório").
                </li>
                <li>
                  <strong>"Impact Dashboard" ao Vivo:</strong> Tela na parede mostrando impacto em tempo real: 
                  vidas salvas (se saúde), árvores plantadas (se ambiental), horas economizadas (se produtividade). 
                  Propósito visível, não abstrato.
                </li>
              </ul>
            </div>
          </div>

          <div className="bg-white rounded-xl p-8 shadow-soft border-l-4 border-cyan-500">
            <h3 className="text-2xl font-bold text-cyan-900 mb-3">7. Rituais de Conflito Saudável</h3>
            <p className="text-sm text-cyan-700 font-semibold mb-4">Canalizam tensão produtivamente</p>
            
            <div className="mb-6">
              <p className="font-bold mb-2">🎯 Propósito:</p>
              <p className="text-sm">
                Criar espaço seguro para discordar. Transformar tensões tácitas em debates explícitos e construtivos.
              </p>
            </div>

            <div className="bg-cyan-50 p-6 rounded-lg mb-4">
              <p className="font-bold mb-3">Exemplos Poderosos:</p>
              <ul className="text-sm space-y-3">
                <li>
                  <strong>"Disagree & Commit" da Amazon:</strong> Reuniões decisórias têm fase obrigatória 
                  de "devil's advocate" — alguém tem que argumentar CONTRA decisão antes de aprovar. 
                  Ritual força pensar contraditório.
                </li>
                <li>
                  <strong>"Tension Processing" na Holacracy:</strong> Reuniões de governança começam com 
                  "check-in de tensões" — cada pessoa nomeia 1 tensão atual (pequena ou grande). 
                  Legitima desconforto, impede festering.
                </li>
                <li>
                  <strong>Debates Estruturados:</strong> Quando decisão polêmica, formata como debate: 
                  2 pessoas defendem lados opostos (independente de opinião pessoal), 15min cada, 
                  depois time decide. Despersonaliza conflito.
                </li>
              </ul>
            </div>
          </div>
        </div>

        <h2 className="text-3xl font-heading font-bold text-primary mt-12 mb-6">
          Como Criar Rituais Que Funcionam (Não Morrem em 2 Meses)
        </h2>

        <div className="space-y-6 my-8">
          <div className="bg-white rounded-xl p-6 shadow-soft">
            <h3 className="font-bold text-lg mb-3">1. Comece com Problema Real, Não Solução</h3>
            <p className="text-sm mb-2">
              ❌ <strong>Errado:</strong> "Vamos fazer retrospectiva porque Scrum manda"<br/>
              ✅ <strong>Certo:</strong> "Time repete erros → precisamos processar aprendizados → retrospectiva ritual"
            </p>
            <p className="text-sm text-muted-foreground">
              Ritual sem problema claro vira teatro.
            </p>
          </div>

          <div className="bg-white rounded-xl p-6 shadow-soft">
            <h3 className="font-bold text-lg mb-3">2. Design Sensorial (Não Só Intelectual)</h3>
            <p className="text-sm mb-3">
              Rituais poderosos engajam corpo, não só mente:
            </p>
            <ul className="text-sm space-y-1 ml-4">
              <li>• <strong>Físico:</strong> Acender vela no início, apagar no fim (marca transição)</li>
              <li>• <strong>Espacial:</strong> Círculo em pé (não sentados em mesa) muda energia</li>
              <li>• <strong>Sonoro:</strong> Sino, música, silêncio intencional</li>
              <li>• <strong>Gustativo:</strong> Compartilhar comida/bebida cria vínculo primordial</li>
            </ul>
          </div>

          <div className="bg-white rounded-xl p-6 shadow-soft">
            <h3 className="font-bold text-lg mb-3">3. Consistência {'>'} Perfeição</h3>
            <p className="text-sm text-muted-foreground">
              Ritual que acontece todo mês imperfeito {'>'} ritual "perfeito" que fazem quando "dá tempo". 
              Poder está na repetição, não na execução impecável.
            </p>
          </div>

          <div className="bg-white rounded-xl p-6 shadow-soft">
            <h3 className="font-bold text-lg mb-3">4. Deixe Evoluir (Rituais Vivos Mudam)</h3>
            <p className="text-sm text-muted-foreground">
              A cada 3-6 meses, pergunte: "Esse ritual ainda serve? O que melhorar?" 
              Rituais mortos (que ninguém mais sente significado) devem ser enterrados com honra, 
              não mantidos por inércia.
            </p>
          </div>

          <div className="bg-white rounded-xl p-6 shadow-soft">
            <h3 className="font-bold text-lg mb-3">5. Voluntário {'>'} Obrigatório (Com Exceções)</h3>
            <p className="text-sm mb-2">
              Rituais funcionam melhor quando pessoas <em>querem</em> estar lá. MAS:
            </p>
            <p className="text-sm text-muted-foreground">
              Alguns rituais (onboarding, retrospectivas, all-hands) são "obrigatórios para o bem comum". 
              Deixe claro o porquê da obrigatoriedade — não vire autoritarismo.
            </p>
          </div>
        </div>

        <div className="bg-amber-50 border-l-4 border-amber-500 p-6 rounded-r-lg my-8">
          <h3 className="font-bold text-lg text-amber-900 mb-2">⚠️ Sinais de Ritual Morto (Hora de Enterrar)</h3>
          <ul className="text-sm text-amber-800 space-y-2">
            <li>• Pessoas chegam atrasadas, saem mais cedo, ficam no celular</li>
            <li>• Ninguém lembra por que começou</li>
            <li>• "Vamos pular esse mês" vira normal</li>
            <li>• Energia é de obrigação, não celebração/conexão</li>
            <li>• Nenhuma decisão/ação/insight emerge há 3+ meses</li>
          </ul>
          <p className="text-sm text-amber-900 mt-4 font-bold">
            Melhor matar ritual morto que deixar virar zumbi. Mata a crença em rituais futuros.
          </p>
        </div>

        <h2 className="text-3xl font-heading font-bold text-primary mt-12 mb-6">
          Seu Sistema de Rituais (Checklist de Saúde Cultural)
        </h2>

        <div className="bg-white rounded-xl p-8 shadow-soft my-8">
          <p className="mb-4">
            Uma organização viva tem rituais em todas as 7 categorias. Faça o diagnóstico:
          </p>
          <div className="space-y-3">
            <label className="flex items-start space-x-3">
              <input type="checkbox" className="mt-1" />
              <span className="text-sm">
                <strong>Passagem:</strong> Temos rituais claros para onboarding, promoções e saídas?
              </span>
            </label>
            <label className="flex items-start space-x-3">
              <input type="checkbox" className="mt-1" />
              <span className="text-sm">
                <strong>Renovação:</strong> Processamos fracassos e limpamos rancores regularmente?
              </span>
            </label>
            <label className="flex items-start space-x-3">
              <input type="checkbox" className="mt-1" />
              <span className="text-sm">
                <strong>Conexão:</strong> Pessoas se conhecem além do trabalho (hobbies, histórias, humanidade)?
              </span>
            </label>
            <label className="flex items-start space-x-3">
              <input type="checkbox" className="mt-1" />
              <span className="text-sm">
                <strong>Celebração:</strong> Reconhecemos conquistas (grandes e pequenas) regularmente?
              </span>
            </label>
            <label className="flex items-start space-x-3">
              <input type="checkbox" className="mt-1" />
              <span className="text-sm">
                <strong>Aprendizagem:</strong> Compartilhamos conhecimento estruturadamente?
              </span>
            </label>
            <label className="flex items-start space-x-3">
              <input type="checkbox" className="mt-1" />
              <span className="text-sm">
                <strong>Propósito:</strong> Reconectamos ao "por quê" frequentemente?
              </span>
            </label>
            <label className="flex items-start space-x-3">
              <input type="checkbox" className="mt-1" />
              <span className="text-sm">
                <strong>Conflito:</strong> Temos espaços seguros para discordar produtivamente?
              </span>
            </label>
          </div>
          <p className="text-sm text-muted-foreground mt-6">
            <strong>{'<'} 3 checks:</strong> Rituais subdesenvolvidos. Provável baixo pertencimento.<br/>
            <strong>3-5 checks:</strong> Base sólida, mas lacunas.<br/>
            <strong>6-7 checks:</strong> Sistema ritual maduro. Cultura viva.
          </p>
        </div>

        <div className="bg-gradient-to-br from-primary to-primary-dark text-primary-foreground rounded-xl p-8 my-12 text-center">
          <h3 className="text-2xl font-bold mb-4">Quer Desenhar Rituais Vivos Para Sua Organização?</h3>
          <p className="text-lg mb-6 opacity-90">
            Nossa Arquitetura de Ecossistema Organizacional co-cria sistema completo de rituais 
            alinhados à sua cultura e fase de vida.
          </p>
          <p className="text-sm opacity-75">
            Não copiamos rituais de outras empresas. Desenhamos os seus, únicos como sua cultura.
          </p>
        </div>
      </div>
    </ArticleLayout>
  )
}
