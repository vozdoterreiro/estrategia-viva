import React from 'react'
import ArticleLayout from '../../components/ArticleLayout'

export default function TransformacoesFracassam() {
  return (
    <ArticleLayout
      title="Por Que 90% das Transformações Organizacionais Fracassam"
      category="Transformação"
      date="20 Out 2024"
      readTime="12 min"
      excerpt="A maioria das organizações trata transformação como projeto, não como cultivo. Descubra os 3 erros fatais que condenam mudanças organizacionais e como evitá-los."
    >
      <div className="bg-white rounded-xl shadow-soft p-8 mb-8">
        <h2 className="text-3xl font-heading font-bold text-primary mb-6">
          A Dura Realidade dos Números
        </h2>
        <p className="text-lg leading-relaxed mb-4">
          Segundo pesquisa da McKinsey com mais de 3.000 executivos, apenas <strong className="text-secondary">30% das transformações organizacionais</strong> alcançam seus objetivos iniciais. 
          Pior: 70% não apenas falham em atingir metas, mas deixam a organização <strong>em situação pior</strong> do que antes.
        </p>
        <p className="text-lg leading-relaxed">
          O investimento médio em uma transformação organizacional varia de R$ 500 mil a R$ 5 milhões. 
          São centenas de horas de consultoria, workshops, mudanças de processos... e na maioria das vezes, 
          nada muda de verdade. Por quê?
        </p>
      </div>

      <h2 className="text-3xl font-heading font-bold text-primary mb-6 mt-12">
        Os 3 Erros Fatais
      </h2>

      <div className="bg-red-50 border-l-4 border-red-500 rounded-lg p-8 mb-8">
        <h3 className="text-2xl font-heading font-bold text-red-900 mb-4">
          ❌ Erro #1: Tratar Transformação Como Projeto (Não Como Cultivo)
        </h3>
        <p className="text-foreground leading-relaxed mb-4">
          <strong>O que acontece:</strong> A liderança contrata uma consultoria, define um "prazo" para a transformação 
          (geralmente 6-12 meses), cria um cronograma com fases bem definidas e... espera que no final do projeto 
          a organização esteja "transformada".
        </p>
        <p className="text-foreground leading-relaxed mb-4">
          <strong>Por que falha:</strong> Organizações são organismos vivos, não máquinas. Você não "conserta" 
          uma cultura como conserta um motor. Cultura se <em>cultiva</em>, se <em>nutre</em>, se <em>evolui</em> continuamente.
        </p>
        <div className="bg-white rounded-lg p-6 mt-4">
          <p className="text-sm font-semibold text-secondary mb-2">✅ O QUE FAZER EM VEZ DISSO:</p>
          <p className="text-foreground">
            Adote uma mentalidade de <strong>"ciclos de cultivo"</strong> em vez de "projetos fechados". 
            Planeje intervenções iterativas, com feedback constante, ajustes e evolução. 
            Transformação não tem "fim" — ela é um estado permanente de vitalidade.
          </p>
        </div>
      </div>

      <div className="bg-red-50 border-l-4 border-red-500 rounded-lg p-8 mb-8">
        <h3 className="text-2xl font-heading font-bold text-red-900 mb-4">
          ❌ Erro #2: Focar em Estrutura e Ignorar Cultura
        </h3>
        <p className="text-foreground leading-relaxed mb-4">
          <strong>O que acontece:</strong> A consultoria tradicional redesenha o organograma, cria novos processos, 
          implementa metodologias ágeis, muda títulos de cargos... mas ignora completamente a cultura subjacente.
        </p>
        <p className="text-foreground leading-relaxed mb-4">
          <strong>Por que falha:</strong> Como disse Peter Drucker: <em>"A cultura come estratégia no café da manhã"</em>. 
          Você pode ter a estrutura perfeita no papel, mas se a cultura não suporta, ela sabota tudo. 
          Processos ágeis em uma cultura de microgerenciamento? Não funciona. Autonomia em uma cultura de controle? Impossível.
        </p>
        <div className="bg-white rounded-lg p-6 mt-4">
          <p className="text-sm font-semibold text-secondary mb-2">✅ O QUE FAZER EM VEZ DISSO:</p>
          <p className="text-foreground">
            Comece sempre com <strong>diagnóstico cultural profundo</strong>. Entenda os valores realmente vividos 
            (não os declarados na parede). Mapeie rituais, narrativas, símbolos. Só então desenhe estruturas e 
            processos que sejam <em>coerentes</em> com a cultura desejada.
          </p>
        </div>
      </div>

      <div className="bg-red-50 border-l-4 border-red-500 rounded-lg p-8 mb-8">
        <h3 className="text-2xl font-heading font-bold text-red-900 mb-4">
          ❌ Erro #3: Delegar a Transformação (Liderança Ausente)
        </h3>
        <p className="text-foreground leading-relaxed mb-4">
          <strong>O que acontece:</strong> O CEO/fundador contrata uma consultoria e delega a transformação 
          para o RH ou para um "comitê de transformação". A liderança aparece apenas em apresentações mensais, 
          mas não está engajada no processo.
        </p>
        <p className="text-foreground leading-relaxed mb-4">
          <strong>Por que falha:</strong> Transformação organizacional é, essencialmente, transformação de liderança. 
          Se quem está no topo não muda, nada muda de verdade. A equipe percebe a incoerência e ignora o processo.
        </p>
        <div className="bg-white rounded-lg p-6 mt-4">
          <p className="text-sm font-semibold text-secondary mb-2">✅ O QUE FAZER EM VEZ DISSO:</p>
          <p className="text-foreground">
            A liderança precisa estar <strong>profundamente envolvida</strong> — não apenas "patrocinando" 
            o projeto, mas participando ativamente de workshops, sendo a primeira a adotar novos comportamentos, 
            e modelando a cultura desejada. Sem isso, esqueça.
          </p>
        </div>
      </div>

      <h2 className="text-3xl font-heading font-bold text-primary mb-6 mt-12">
        O Caminho da Transformação Que Funciona
      </h2>

      <div className="bg-green-50 border-l-4 border-green-500 rounded-lg p-8 mb-8">
        <ol className="space-y-6">
          <li>
            <strong className="text-green-900 text-lg">1. Diagnóstico Cultural Profundo (4-6 semanas)</strong>
            <p className="text-foreground mt-2">
              Comece entendendo o DNA real da organização. Entrevistas antropológicas, observação participante, 
              mapeamento de narrativas. Não pule esta etapa.
            </p>
          </li>
          <li>
            <strong className="text-green-900 text-lg">2. Co-Criação da Visão de Futuro (Workshops com Liderança)</strong>
            <p className="text-foreground mt-2">
              A liderança precisa alinhar-se em torno de uma visão compartilhada. Qual organismo queremos ser? 
              Que cultura queremos cultivar? Isso não pode ser delegado.
            </p>
          </li>
          <li>
            <strong className="text-green-900 text-lg">3. Arquitetura Sistêmica (Integrando 4 Forças Vitais)</strong>
            <p className="text-foreground mt-2">
              Desenhe soluções que integrem Alma (cultura/propósito), Conexões (comunicação/redes), 
              Nutrição (sustentabilidade) e Raízes (processos/governança). Tudo conectado, nada isolado.
            </p>
          </li>
          <li>
            <strong className="text-green-900 text-lg">4. Implementação por Ciclos de Cultivo (Iterativo)</strong>
            <p className="text-foreground mt-2">
              Não tente mudar tudo de uma vez. Ciclos de 90 dias, com experimentos, aprendizado e ajustes. 
              Ritmo sustentável, não sprint exaustivo.
            </p>
          </li>
          <li>
            <strong className="text-green-900 text-lg">5. Acompanhamento Contínuo (Parceria de Longo Prazo)</strong>
            <p className="text-foreground mt-2">
              Transformação não "termina". Mantenha um parceiro estratégico que ajude a sustentar a vitalidade 
              organizacional ao longo do tempo.
            </p>
          </li>
        </ol>
      </div>

      <div className="bg-secondary/10 rounded-xl p-8 mt-12">
        <h3 className="text-2xl font-heading font-bold text-primary mb-4">
          💡 Conclusão
        </h3>
        <p className="text-lg text-foreground leading-relaxed">
          A maioria das transformações fracassa porque tratam organismos como máquinas. 
          Adote uma abordagem de <strong>cultivo contínuo</strong>, comece pela <strong>cultura</strong>, 
          e garanta que a <strong>liderança está profundamente engajada</strong>. 
          Transformação não é projeto — é compromisso permanente com vitalidade.
        </p>
      </div>
    </ArticleLayout>
  )
}
