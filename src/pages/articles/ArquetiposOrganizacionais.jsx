import React from 'react'
import ArticleLayout from '../../components/ArticleLayout'

export default function ArquetiposOrganizacionais() {
  return (
    <ArticleLayout
      title="Como Identificar o Arquétipo Cultural da Sua Organização"
      category="Cultura"
      date="10 Out 2024"
      readTime="10 min"
      excerpt="Toda organização tem uma personalidade dominante: Inovador, Cuidador, Guerreiro, Sábio... Descubra qual é a sua e como isso influencia cada decisão estratégica."
    >
      <div className="prose prose-lg max-w-none">
        <p className="text-xl text-muted-foreground leading-relaxed mb-8">
          Você já percebeu como algumas empresas parecem ter personalidades distintas? A Apple é visionária e perfeccionista. 
          A Patagonia é ativista e protetora. O Google é explorador e experimental. Isso não é acidente — é arquétipo cultural.
        </p>

        <h2 className="text-3xl font-heading font-bold text-primary mt-12 mb-6">
          O Que São Arquétipos Organizacionais?
        </h2>
        <p>
          Arquétipos são padrões universais de comportamento e valores que moldam a identidade de uma organização. 
          Eles influenciam desde decisões de contratação até a forma como você resolve conflitos e inovação.
        </p>
        <p>
          Ignorar seu arquétipo cultural é como tentar forçar uma orquestra de jazz a tocar música clássica. 
          Você pode até conseguir, mas vai perder a essência e a energia que torna aquele grupo único.
        </p>

        <div className="bg-gradient-to-br from-primary/5 to-secondary/5 rounded-xl p-8 my-10 border-l-4 border-primary">
          <h3 className="text-xl font-bold text-primary mb-3">Por Que Isso Importa</h3>
          <ul className="space-y-2 text-foreground">
            <li>• <strong>Contratações erradas:</strong> Trazer perfis que não ressoam com o arquétipo gera atrito cultural</li>
            <li>• <strong>Estratégias inadequadas:</strong> Implementar práticas que funcionam em outros arquétipos fracassa</li>
            <li>• <strong>Marca inautêntica:</strong> Comunicação externa que não reflete a essência interna vira teatro</li>
            <li>• <strong>Conflitos invisíveis:</strong> Tensões que parecem "choque de personalidades" são, na verdade, arquétipos em conflito</li>
          </ul>
        </div>

        <h2 className="text-3xl font-heading font-bold text-primary mt-12 mb-6">
          Os 7 Arquétipos Organizacionais Dominantes
        </h2>

        <div className="space-y-8 my-10">
          <div className="bg-white rounded-xl p-8 shadow-soft border-l-4 border-blue-500">
            <h3 className="text-2xl font-bold text-blue-900 mb-3">1. O Inovador</h3>
            <p className="text-sm text-blue-700 font-semibold mb-4">
              "Se não está quebrando regras, não está inovando o suficiente"
            </p>
            <p className="mb-4">
              <strong>Valores centrais:</strong> Criatividade, experimentação, disrupção, risco calculado
            </p>
            <p className="mb-4">
              <strong>Comportamentos típicos:</strong> Hackathons constantes, tolerância ao fracasso, MVPs rápidos, 
              cultura de "fail fast", celebração de ideias malucas
            </p>
            <p className="mb-4">
              <strong>Exemplos:</strong> Google (20% time), SpaceX, Tesla
            </p>
            <p className="text-sm text-muted-foreground">
              <strong>Armadilha:</strong> Inovação pela inovação, falta de execução, queimar recursos em experimentos sem ROI
            </p>
          </div>

          <div className="bg-white rounded-xl p-8 shadow-soft border-l-4 border-green-500">
            <h3 className="text-2xl font-bold text-green-900 mb-3">2. O Cuidador</h3>
            <p className="text-sm text-green-700 font-semibold mb-4">
              "Pessoas em primeiro lugar, sempre"
            </p>
            <p className="mb-4">
              <strong>Valores centrais:</strong> Bem-estar, equilíbrio, empatia, sustentabilidade humana
            </p>
            <p className="mb-4">
              <strong>Comportamentos típicos:</strong> Políticas generosas de licença, espaços de descanso, 
              suporte psicológico, flexibilidade radical, investimento em desenvolvimento pessoal
            </p>
            <p className="mb-4">
              <strong>Exemplos:</strong> Patagonia, Ben & Jerry's, Buffer
            </p>
            <p className="text-sm text-muted-foreground">
              <strong>Armadilha:</strong> Evitar conflitos necessários, lentidão decisória por consenso extremo, 
              tolerar baixa performance em nome do "cuidado"
            </p>
          </div>

          <div className="bg-white rounded-xl p-8 shadow-soft border-l-4 border-red-500">
            <h3 className="text-2xl font-bold text-red-900 mb-3">3. O Guerreiro</h3>
            <p className="text-sm text-red-700 font-semibold mb-4">
              "Vencer é tudo. Segundo lugar é primeiro perdedor."
            </p>
            <p className="mb-4">
              <strong>Valores centrais:</strong> Performance, competitividade, metas agressivas, domínio de mercado
            </p>
            <p className="mb-4">
              <strong>Comportamentos típicos:</strong> OKRs públicos, rankings internos, cultura de alta pressão, 
              recompensas por resultados, "up or out", velocidade de execução
            </p>
            <p className="mb-4">
              <strong>Exemplos:</strong> Netflix (keeper test), Amazon (Day 1), Oracle
            </p>
            <p className="text-sm text-muted-foreground">
              <strong>Armadilha:</strong> Burnout sistêmico, turnover altíssimo, sacrifício de longo prazo pelo curto, 
              toxicidade competitiva interna
            </p>
          </div>

          <div className="bg-white rounded-xl p-8 shadow-soft border-l-4 border-purple-500">
            <h3 className="text-2xl font-bold text-purple-900 mb-3">4. O Sábio</h3>
            <p className="text-sm text-purple-700 font-semibold mb-4">
              "Conhecimento é poder. Decisões baseadas em dados, sempre."
            </p>
            <p className="mb-4">
              <strong>Valores centrais:</strong> Expertise, rigor analítico, meritocracia intelectual, precisão
            </p>
            <p className="mb-4">
              <strong>Comportamentos típicos:</strong> Data-driven decisions, peer reviews rigorosos, 
              investimento pesado em R&D, cultura de mentoria, documentação obsessiva
            </p>
            <p className="mb-4">
              <strong>Exemplos:</strong> McKinsey, MIT, DeepMind
            </p>
            <p className="text-sm text-muted-foreground">
              <strong>Armadilha:</strong> Paralisia por análise, arrogância intelectual, elitismo, 
              desdém por "soft skills", lentidão decisória
            </p>
          </div>

          <div className="bg-white rounded-xl p-8 shadow-soft border-l-4 border-orange-500">
            <h3 className="text-2xl font-bold text-orange-900 mb-3">5. O Construtor</h3>
            <p className="text-sm text-orange-700 font-semibold mb-4">
              "Construir algo que dure gerações"
            </p>
            <p className="mb-4">
              <strong>Valores centrais:</strong> Legado, excelência técnica, craftsmanship, durabilidade
            </p>
            <p className="mb-4">
              <strong>Comportamentos típicos:</strong> Padrões de qualidade rígidos, aprendizagem contínua de técnicas, 
              orgulho pelo trabalho bem feito, mentalidade de longo prazo
            </p>
            <p className="mb-4">
              <strong>Exemplos:</strong> Apple (obsessão por detalhes), Toyota (Kaizen), Pixar
            </p>
            <p className="text-sm text-muted-foreground">
              <strong>Armadilha:</strong> Perfeccionismo paralisante, resistência a mudanças, "not invented here syndrome"
            </p>
          </div>

          <div className="bg-white rounded-xl p-8 shadow-soft border-l-4 border-yellow-500">
            <h3 className="text-2xl font-bold text-yellow-900 mb-3">6. O Explorador</h3>
            <p className="text-sm text-yellow-700 font-semibold mb-4">
              "A liberdade é não negociável"
            </p>
            <p className="mb-4">
              <strong>Valores centrais:</strong> Autonomia, aventura, descoberta, diversidade de experiências
            </p>
            <p className="mb-4">
              <strong>Comportamentos típicos:</strong> Trabalho remoto total, horários flexíveis, projetos auto-escolhidos, 
              rotação de funções, viagens de imersão
            </p>
            <p className="mb-4">
              <strong>Exemplos:</strong> Basecamp, GitLab, Automattic (WordPress)
            </p>
            <p className="text-sm text-muted-foreground">
              <strong>Armadilha:</strong> Falta de coesão, dificuldade em projetos que exigem coordenação intensa, 
              dispersão de foco
            </p>
          </div>

          <div className="bg-white rounded-xl p-8 shadow-soft border-l-4 border-cyan-500">
            <h3 className="text-2xl font-bold text-cyan-900 mb-3">7. O Servidor</h3>
            <p className="text-sm text-cyan-700 font-semibold mb-4">
              "Servir uma causa maior que nós mesmos"
            </p>
            <p className="mb-4">
              <strong>Valores centrais:</strong> Propósito social, impacto, serviço, missão acima do lucro
            </p>
            <p className="mb-4">
              <strong>Comportamentos típicos:</strong> B Corp certification, decisões guiadas por impacto social/ambiental, 
              transparência radical, governança stakeholder
            </p>
            <p className="mb-4">
              <strong>Exemplos:</strong> TOMS, Warby Parker, Doctors Without Borders
            </p>
            <p className="text-sm text-muted-foreground">
              <strong>Armadilha:</strong> Martírio organizacional, negligência da sustentabilidade financeira, 
              exaustão por "trabalhar por uma causa"
            </p>
          </div>
        </div>

        <h2 className="text-3xl font-heading font-bold text-primary mt-12 mb-6">
          Como Identificar Seu Arquétipo (Exercício Prático)
        </h2>

        <div className="bg-white rounded-xl p-8 shadow-soft my-8">
          <h3 className="text-xl font-bold mb-4">Passo 1: Análise de Decisões Críticas</h3>
          <p className="mb-4">
            Pegue 5 decisões importantes dos últimos 12 meses e pergunte:
          </p>
          <ul className="space-y-2">
            <li>• Qual valor foi priorizado quando houve conflito? (Ex: inovação vs. estabilidade)</li>
            <li>• Quem teve voz? (Especialistas, todos, líderes, stakeholders externos?)</li>
            <li>• O que foi sacrificado? (Velocidade, qualidade, custo, pessoas?)</li>
            <li>• Como a decisão foi comunicada e celebrada?</li>
          </ul>
        </div>

        <div className="bg-white rounded-xl p-8 shadow-soft my-8">
          <h3 className="text-xl font-bold mb-4">Passo 2: Heróis e Vilões Internos</h3>
          <p className="mb-4">
            Quem são os "heróis" e "vilões" das histórias que vocês contam internamente?
          </p>
          <ul className="space-y-2">
            <li>• <strong>Inovador:</strong> Heróis são os que "pensam fora da caixa"; vilões são os "engessados"</li>
            <li>• <strong>Cuidador:</strong> Heróis são os empáticos; vilões são os "workaholic insensíveis"</li>
            <li>• <strong>Guerreiro:</strong> Heróis são os que "entregam"; vilões são os "que dão desculpas"</li>
          </ul>
        </div>

        <div className="bg-white rounded-xl p-8 shadow-soft my-8">
          <h3 className="text-xl font-bold mb-4">Passo 3: Rituais Reveladores</h3>
          <p className="mb-4">
            Seus rituais organizacionais revelam seu arquétipo:
          </p>
          <ul className="space-y-2">
            <li>• Reuniões all-hands focam em números (Guerreiro) ou histórias de impacto (Servidor)?</li>
            <li>• Onboarding é técnico/rigoroso (Sábio) ou vivencial/cultural (Explorador)?</li>
            <li>• Celebram lançamentos (Inovador), marcos de qualidade (Construtor) ou bem-estar da equipe (Cuidador)?</li>
          </ul>
        </div>

        <h2 className="text-3xl font-heading font-bold text-primary mt-12 mb-6">
          E Se Sua Organização Tiver Arquétipos Conflitantes?
        </h2>
        <p>
          A maioria das organizações tem um arquétipo dominante + um secundário. O problema surge quando:
        </p>
        <ul className="list-disc ml-6 space-y-2 my-6">
          <li>Liderança opera em um arquétipo, mas a base em outro (dissonância cultural)</li>
          <li>Diferentes departamentos têm arquétipos incompatíveis (vendas Guerreiro vs. produto Sábio)</li>
          <li>Fase de crescimento exige mudança de arquétipo, mas há resistência interna</li>
        </ul>

        <div className="bg-amber-50 border-l-4 border-amber-500 p-6 rounded-r-lg my-8">
          <h3 className="font-bold text-lg text-amber-900 mb-2">⚠️ Sinal de Alerta</h3>
          <p className="text-amber-800">
            Se você ouve frases como "Nossos valores dizem X, mas na prática fazemos Y", 
            provavelmente há conflito de arquétipos entre o declarado e o vivido.
          </p>
        </div>

        <h2 className="text-3xl font-heading font-bold text-primary mt-12 mb-6">
          Como Trabalhar Com Seu Arquétipo (Não Contra)
        </h2>

        <div className="space-y-6 my-8">
          <div>
            <h3 className="text-xl font-bold mb-2">1. Aceite sua essência</h3>
            <p>
              Pare de tentar ser o Google se você é um Cuidador. Trabalhe com sua natureza, não contra.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-2">2. Contrate para o arquétipo</h3>
            <p>
              No processo seletivo, avalie fit cultural baseado no arquétipo. Alguém brilhante no Guerreiro 
              pode murchar no Cuidador.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-2">3. Ritualize seus valores arquetípicos</h3>
            <p>
              Se você é Construtor, crie rituais de "code review" e celebração de qualidade. 
              Se é Servidor, ritualize histórias de impacto.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-2">4. Comunique externamente com autenticidade</h3>
            <p>
              Sua marca externa deve espelhar seu arquétipo interno. Patagonia não fingir ser Apple.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-2">5. Evolua conscientemente</h3>
            <p>
              Às vezes, o contexto exige evolução de arquétipo (startup crescendo precisa de mais Construtor, 
              menos Explorador). Faça isso de forma consciente, não por acidente.
            </p>
          </div>
        </div>

        <div className="bg-gradient-to-br from-primary to-primary-dark text-primary-foreground rounded-xl p-8 my-12 text-center">
          <h3 className="text-2xl font-bold mb-4">Próximos Passos</h3>
          <p className="text-lg mb-6 opacity-90">
            Quer mapear o arquétipo cultural profundo da sua organização com metodologia antropológica?
          </p>
          <p className="text-sm opacity-75 mb-6">
            Nosso Diagnóstico de DNA Organizacional revela não só seu arquétipo dominante, 
            mas os padrões inconscientes que moldam cada decisão.
          </p>
        </div>
      </div>
    </ArticleLayout>
  )
}
