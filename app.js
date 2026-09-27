/**
 * MENTE FORJADA - MOTOR DE SABEDORIA, EXPLICAÇÃO PROFUNDA & COMUNIDADE (EXPANSÃO ÉPICA)
 * 81+ Princípios de Aço (31 do Mestre + 50 Clássicos: Marco Aurélio, Sêneca, Musashi, Sun Tzu, Frankl, etc.)
 * Sistema de Comentários & Debates, Explicação Didática, Ação Diária e Exportação em PNG Retina.
 */

// ==========================================================================
// 1. BANCO DE DADOS EXPANDIDO (81+ MANDAMENTOS COM EXPLICAÇÃO & PRÁTICA)
// ==========================================================================
const BASE_PRINCIPLES = [
    // --------------------------------------------------------------------------
    // SEÇÃO A: OS 31 PRINCÍPIOS FUNDAMENTAIS DO MESTRE (ENRIQUECIDOS)
    // --------------------------------------------------------------------------
    {
        id: "p1",
        trail: "mente",
        trailLabel: "Mente & Autodomínio",
        quote: "Por que se remoer com o passado, se o que realmente importa e pode ser transformado é o seu futuro?",
        author: "O Mestre",
        work: "Fundamentos da Forja",
        isClassic: false,
        explanation: "Ficar preso a erros, términos ou oportunidades perdidas é um mecanismo de fuga do ego para não encarar a responsabilidade do momento presente. O passado é imutável como pedra; qualquer energia gasta em lamentação é energia subtraída da sua capacidade de agir hoje.",
        dailyPractice: "Toda vez que uma lembrança amarga invadir sua mente, diga em voz alta: 'Isso já morreu'. Em seguida, execute imediatamente a próxima tarefa física da sua lista.",
        inquiry: "Qual arrependimento antigo ainda drena sua energia hoje? Como transformar essa dor em determinação para agir agora?",
        actionSuggestion: "Cortar pensamentos nostálgicos e focar nas tarefas das próximas 3 horas."
    },
    {
        id: "p2",
        trail: "mente",
        trailLabel: "Mente & Autodomínio",
        quote: "O seu maior inimigo não são as pessoas e nem o mundo: é você mesmo, seus medos e suas desculpas.",
        author: "O Mestre",
        work: "Fundamentos da Forja",
        isClassic: false,
        explanation: "É tentador culpar o trânsito, a economia ou a falta de apoio alheio. Mas a verdade nua e crua é que ninguém coloca a comida ruim na sua boca, ninguém te obriga a rolar o feed por horas e ninguém inventa suas justificativas além da sua própria mente fraca.",
        dailyPractice: "Escreva em um papel a desculpa que você mais repetiu nesta semana. Rasgue o papel e faça exatamente o oposto nas próximas 2 horas.",
        inquiry: "Qual é a desculpa preferida que você usa para justificar a falta de atitude?",
        actionSuggestion: "Destruir essa desculpa executando a tarefa mais difícil logo pela manhã."
    },
    {
        id: "p3",
        trail: "mente",
        trailLabel: "Mente & Autodomínio",
        quote: "Ou você governa a sua própria mente, ou as suas emoções descontroladas governarão o seu destino.",
        author: "O Mestre",
        work: "Fundamentos da Forja",
        isClassic: false,
        explanation: "Um homem que se irrita por qualquer provocação é um escravo de qualquer um que descubra seus botões. O autodomínio não é ausência de emoção, mas a soberania da razão sobre os impulsos animalescos.",
        dailyPractice: "Quando sentir a raiva subir, permaneça com a boca fechada por 15 segundos cronometrados antes de qualquer reação.",
        inquiry: "Em que momentos do seu dia você mais se deixa levar por impulsividade ou raiva?",
        actionSuggestion: "Praticar 10 segundos de pausa consciente e respiração antes de responder a qualquer provocação."
    },
    {
        id: "p4",
        trail: "mente",
        trailLabel: "Mente & Autodomínio",
        quote: "Treine sua mente até ser forte o suficiente para não se deslumbrar com elogios e não se abalar com ofensas.",
        author: "O Mestre",
        work: "Fundamentos da Forja",
        isClassic: false,
        explanation: "Quem sobe nas nuvens com bajulação despenca no abismo com a primeira crítica. A verdadeira firmeza de caráter tem uma régua interna: você sabe o seu valor e o seu esforço, independentemente do ruído lá fora.",
        dailyPractice: "Ao receber um elogio, agradeça educadamente sem inflar o peito. Ao receber uma ofensa, encare como ruído de vento e não mude seu ritmo.",
        inquiry: "Você ainda depende da validação e dos aplausos alheios para se sentir capaz?",
        actionSuggestion: "Trabalhar em silêncio absoluto sem publicar vitórias para buscar aprovação social."
    },
    {
        id: "p5",
        trail: "mente",
        trailLabel: "Mente & Autodomínio",
        quote: "Não adianta ficar apenas treinando o corpo se você deixar sua mente fraca, preguiçosa e sem foco.",
        author: "O Mestre",
        work: "Fundamentos da Forja",
        isClassic: false,
        explanation: "Um corpo musculoso com uma mente frouxa é apenas uma casca que quebra na primeira adversidade grave da vida. A força física deve ser a expressão exterior da disciplina interior e do rigor mental.",
        dailyPractice: "Dedique a mesma seriedade que você dá a uma hora de treino físico para 30 minutos diários de leitura profunda e reflexão sem celular por perto.",
        inquiry: "Como você tem alimentado seu intelecto? Quantas páginas de conteúdo valioso você leu hoje?",
        actionSuggestion: "Trocar 30 minutos de redes sociais por 30 minutos de estudo prático."
    },
    {
        id: "p6",
        trail: "mente",
        trailLabel: "Mente & Autodomínio",
        quote: "Quanto mais você corre desesperado atrás de algo, mais aquilo se afasta. Foque em si mesmo e as coisas certas virão.",
        author: "O Mestre",
        work: "Fundamentos da Forja",
        isClassic: false,
        explanation: "O desespero tem cheiro e afasta oportunidades, pessoas e respeito. O valor real não é perseguido: ele é atraído quando você se torna alguém competente, equilibrado e valioso por mérito próprio.",
        dailyPractice: "Pare imediatamente de mandar mensagens insistentes ou checar ansiosamente respostas. Ocupe suas mãos com seu trabalho.",
        inquiry: "Onde você está mendigando atenção ou resultados com ansiedade?",
        actionSuggestion: "Concentrar 100% de energia no seu próprio aperfeiçoamento pessoal."
    },
    {
        id: "p7",
        trail: "esforco",
        trailLabel: "Esforço & Disciplina",
        quote: "Treine pesado, mas treine certo. Esforço sem estratégia e sem direção é puro desperdício de energia.",
        author: "O Mestre",
        work: "Fundamentos da Forja",
        isClassic: false,
        explanation: "Cavar um buraco com uma colher até a exaustão é esforço pesado, mas é burrice. O homem de honra alinha a intensidade da sua força com a inteligência do método para gerar impacto real.",
        dailyPractice: "Antes de começar a trabalhar ou treinar, escreva os 3 objetivos exatos daquela sessão para não dispersar energia em futilidades.",
        inquiry: "Suas horas de esforço estão gerando progresso real ou são apenas agitação sem rumo?",
        actionSuggestion: "Definir com clareza as 3 prioridades absolutas do seu dia."
    },
    {
        id: "p8",
        trail: "esforco",
        trailLabel: "Esforço & Disciplina",
        quote: "Sucesso não é sorte nem acaso: é aquilo que você constrói com disciplina diária, tijolo por tijolo.",
        author: "O Mestre",
        work: "Fundamentos da Forja",
        isClassic: false,
        explanation: "A sorte é o refúgio mental dos que não querem assumir a rotina monótona da excelência. Nenhuma muralha surge pronta: ela é resultado de colocar um tijolo da forma mais perfeita possível todos os santos dias.",
        dailyPractice: "Cumpra sua tarefa mais importante hoje sem negociar, mesmo que esteja chovendo, cansado ou sem ânimo.",
        inquiry: "O que você tem feito com consistência inabalável nos últimos 30 dias?",
        actionSuggestion: "Não quebrar a corrente do seu hábito principal hoje, mesmo sem vontade."
    },
    {
        id: "p9",
        trail: "esforco",
        trailLabel: "Esforço & Disciplina",
        quote: "A dor do esforço passa com o descanso, mas o peso do arrependimento permanece por toda a vida.",
        author: "O Mestre",
        work: "Fundamentos da Forja",
        isClassic: false,
        explanation: "O cansaço muscular ou mental do trabalho duro desaparece em uma boa noite de sono. Já a amargura de saber que você foi covarde e não tentou te acompanhará até o leito de morte.",
        dailyPractice: "Quando pensar em parar antes da hora, faça mais 5 minutos ou mais 2 repetições para provar quem manda no seu corpo.",
        inquiry: "Qual dor você escolhe suportar hoje: a da disciplina ou a da frustração futura?",
        actionSuggestion: "Concluir seu treino ou trabalho sem encurtar nenhuma repetição."
    },
    {
        id: "p10",
        trail: "esforco",
        trailLabel: "Esforço & Disciplina",
        quote: "Quem dá desculpa coleciona fracassos; quem assume a bronca e faz acontecer é vencedor.",
        author: "O Mestre",
        work: "Fundamentos da Forja",
        isClassic: false,
        explanation: "A mente fraca é perita em fabricar histórias bem amarradas para justificar o porquê de não ter feito o que prometeu. O vencedor olha para o problema e pergunta: 'O que eu preciso fazer agora para resolver isso?'.",
        dailyPractice: "Substitua a frase 'Eu não consegui porque...' por 'Eu falhei porque não me organizei, mas vou corrigir agora'.",
        inquiry: "Qual obrigação você está adiando há dias? O que falta para matar isso hoje?",
        actionSuggestion: "Eliminar a pendência mais incômoda nas próximas 2 horas."
    },
    {
        id: "p11",
        trail: "esforco",
        trailLabel: "Esforço & Disciplina",
        quote: "Não existe momento perfeito lá fora. Você cria o momento oportuno tomando uma atitude agora.",
        author: "O Mestre",
        work: "Fundamentos da Forja",
        isClassic: false,
        explanation: "Esperar a condição ideal é a forma mais sofisticada de procrastinação. Quem espera o vento perfeito nunca arma as velas; o navegador experiente ajusta o leme com o vento que tem e segue em frente.",
        dailyPractice: "Inicie aquele projeto engavetado nos próximos 15 minutos, mesmo que seja escrevendo um rascunho de uma página.",
        inquiry: "Você está esperando o quê para começar? Dinheiro ideal? Clima ideal? Isso não existe.",
        actionSuggestion: "Dar o primeiro passo com os recursos que você já tem em mãos."
    },
    {
        id: "p12",
        trail: "cicatrizes",
        trailLabel: "Cicatrizes & Erros",
        quote: "O erro vira um trauma se você não aprender com ele. Vira liberdade se você extrair a lição e mudar de rota.",
        author: "O Mestre",
        work: "Fundamentos da Forja",
        isClassic: false,
        explanation: "Ficar lamentando a ferida apenas infecciona o corte. O homem sábio disseca o próprio erro com precisão cirúrgica para entender o ponto cego que o derrubou e garantir que jamais será pego daquela forma novamente.",
        dailyPractice: "Anote uma falha do passado recente e liste 2 regras de conduta práticas para que ela se torne impossível de se repetir.",
        inquiry: "Qual falha do seu passado você ainda carrega como peso no peito em vez de usar como degrau?",
        actionSuggestion: "Escrever a lição prática desse erro e declarar esse capítulo encerrado."
    },
    {
        id: "p13",
        trail: "cicatrizes",
        trailLabel: "Cicatrizes & Erros",
        quote: "Os seus tropeços são os seus melhores professores: aprenda com eles e nunca cometa a mesma falha duas vezes.",
        author: "O Mestre",
        work: "Fundamentos da Forja",
        isClassic: false,
        explanation: "Errar uma vez é próprio da condição humana e do aprendizado em batalha. Cometer o mesmo erro repetidamente é teimosia cega, infantilidade e falta de reflexão honesta.",
        dailyPractice: "Analise seu último vacilo com frieza: foi por afobação, soberba ou preguiça? Ataque a causa raiz.",
        inquiry: "Você costuma errar pelas mesmas fraquezas ou tem evoluído a cada tropeço?",
        actionSuggestion: "Identificar o padrão que te faz errar e erguer uma barreira inegociável contra ele."
    },
    {
        id: "p14",
        trail: "cicatrizes",
        trailLabel: "Cicatrizes & Erros",
        quote: "Todo mundo julga o seu erro e sua queda, mas ninguém aplaude o seu suor nos bastidores. Vença por você.",
        author: "O Mestre",
        work: "Fundamentos da Forja",
        isClassic: false,
        explanation: "A plateia adora apontar o dedo quando o guerreiro vai ao chão, mas foge da arena quando o combate esquenta. Não espere aplausos pelo seu esforço invisível: lute pela sua própria honra e pela sua família.",
        dailyPractice: "Faça uma ação de extremo mérito hoje e não conte para absolutamente ninguém.",
        inquiry: "Por que você ainda se importa com o julgamento de quem não constrói nada?",
        actionSuggestion: "Blindar seus ouvidos e focar exclusivamente no seu progresso pessoal."
    },
    {
        id: "p15",
        trail: "cicatrizes",
        trailLabel: "Cicatrizes & Erros",
        quote: "Estrutura vem de quem já teve a base destruída, mas perseverou e se reconstruiu com o tempo.",
        author: "O Mestre",
        work: "Fundamentos da Forja",
        isClassic: false,
        explanation: "Aquele que nunca quebrou não conhece o limite da própria resistência. Os homens mais sólidos e perigosos são aqueles que já perderam tudo, encararam o fundo do poço e construíram uma armadura nova sobre os escombros.",
        dailyPractice: "Lembre-se do seu pior momento e reconheça que você sobreviveu a 100% dos seus dias difíceis.",
        inquiry: "Olhe para tudo o que você já superou até aqui. Você vai mesmo se abalar por pouco agora?",
        actionSuggestion: "Reconhecer sua própria resiliência e levantar a cabeça para o combate."
    },
    {
        id: "p16",
        trail: "silencio",
        trailLabel: "O Poder do Silêncio",
        quote: "O silêncio de um homem sábio fala muito mais alto do que o barulho de dez tolos falantes.",
        author: "O Mestre",
        work: "Fundamentos da Forja",
        isClassic: false,
        explanation: "Quem fala muito geralmente faz pouco. As palavras vazias gastam a dopamina que deveria ser canalizada para a execução. O sábio cala a boca, trabalha em silêncio e deixa que o estrondo dos resultados responda por ele.",
        dailyPractice: "Durante todo o dia de hoje, corte qualquer conversa fiada e só fale o que for estritamente útil ou edificante.",
        inquiry: "Você fala demais sobre o que vai fazer antes mesmo de executar?",
        actionSuggestion: "Passar o dia de hoje sem revelar seus planos a ninguém. Deixe os fatos falarem."
    },
    {
        id: "p17",
        trail: "silencio",
        trailLabel: "O Poder do Silêncio",
        quote: "Pense dez vezes antes de falar uma besteira. Uma palavra dita em segundos pode gerar problemas por anos.",
        author: "O Mestre",
        work: "Fundamentos da Forja",
        isClassic: false,
        explanation: "A língua é um fósforo em um paiol de pólvora. Uma frase cuspida no calor de uma discussão destrói casamentos, parcerias de negócios e amizades forjadas em décadas.",
        dailyPractice: "Se sentir o sangue ferver em uma conversa, diga apenas: 'Vou pensar sobre isso e te respondo depois'. Afaste-se imediatamente.",
        inquiry: "Quantas vezes a sua língua sem filtro te meteu em apuros desnecessários?",
        actionSuggestion: "Segurar a língua em momentos de provocação e responder com frieza calculada."
    },
    {
        id: "p18",
        trail: "silencio",
        trailLabel: "O Poder do Silêncio",
        quote: "Criticar e falar mal dos outros é fácil; difícil é ter peito para fazer o que precisa ser feito.",
        author: "O Mestre",
        work: "Fundamentos da Forja",
        isClassic: false,
        explanation: "A fofoca e a crítica ácida são as armas dos medíocres que se sentem diminuídos pelo sucesso alheio. O homem de verdade gasta todo o seu fôlego corrigindo suas próprias deficiências.",
        dailyPractice: "Se alguém vier com fofoca ou falar mal de um terceiro, corte com firmeza: 'Prefiro não opinar sobre quem não está presente'.",
        inquiry: "Você gasta energia reparando a vida alheia ou construindo a sua própria?",
        actionSuggestion: "Eliminar qualquer fofoca ou comentário depreciativo sobre outras pessoas hoje."
    },
    {
        id: "p19",
        trail: "silencio",
        trailLabel: "O Poder do Silêncio",
        quote: "Suas palavras abrem portas ou fecham. Use sua fala para edificar e dar direção, nunca para lamúrias.",
        author: "O Mestre",
        work: "Fundamentos da Forja",
        isClassic: false,
        explanation: "Reclamar é declarar publicamente que você é incapaz de lidar com a realidade. Ninguém quer estar perto de um homem que só traz peso e murmurações. Seja o ponto de firmeza e clareza nos ambientes.",
        dailyPractice: "Substitua qualquer reclamação por uma solução prática imediata.",
        inquiry: "Suas falas cotidianas são de reclamação ou de resolução de problemas?",
        actionSuggestion: "Passar 24 horas completas sem fazer uma única reclamação."
    },
    {
        id: "p20",
        trail: "relacoes",
        trailLabel: "Círculo de Caráter",
        quote: "Às vezes é infinitamente melhor caminhar sozinho do que andar com companhias que te puxam para o buraco.",
        author: "O Mestre",
        work: "Fundamentos da Forja",
        isClassic: false,
        explanation: "A solidão com propósito constrói impérios; más companhias destroem legados. Ficar sozinho afia seus princípios; andar com desleixados anestesia a sua consciência e te acostuma com a mediocridade.",
        dailyPractice: "Recuse um convite para um rolê improdutivo com pessoas que só sabem beber, reclamar e falar futilidades.",
        inquiry: "Quem no seu círculo social atual está minando sua disciplina e sua honra?",
        actionSuggestion: "Afastar-se de conversas medíocres e ambientes improdutivos hoje."
    },
    {
        id: "p21",
        trail: "relacoes",
        trailLabel: "Círculo de Caráter",
        quote: "Você se torna parecido com quem convive. Escolha suas companhias com rigor militar.",
        author: "O Mestre",
        work: "Fundamentos da Forja",
        isClassic: false,
        explanation: "Os hábitos, o vocabulário e o nível de ambição das pessoas ao seu redor entram por osmose. Se você anda com 4 homens que não têm compromisso com nada, você será o quinto.",
        dailyPractice: "Procure conversar e trocar ideias hoje com alguém que tenha padrões de disciplina mais altos que os seus.",
        inquiry: "Seus amigos mais próximos te cobram a ser um homem melhor ou te incentivam a ser desleixado?",
        actionSuggestion: "Buscar a proximidade de quem te inspira a ser mais forte e disciplinado."
    },
    {
        id: "p22",
        trail: "relacoes",
        trailLabel: "Círculo de Caráter",
        quote: "Aparência externa engana qualquer um; o caráter verdadeiro só se revela com o tempo e sob tempestade.",
        author: "O Mestre",
        work: "Fundamentos da Forja",
        isClassic: false,
        explanation: "Qualquer um parece um parceiro leal quando o sol está brilhando e o bolso está cheio. A fibra moral de uma pessoa só é testada quando o dinheiro aperta, a pressão sobe e o sacrifício é exigido.",
        dailyPractice: "Não tome decisões de longo prazo sobre pessoas baseado em primeiras impressões ou gentilezas superficiais.",
        inquiry: "Você tem se deixado levar por pessoas de discurso bonito mas sem atitudes firmes?",
        actionSuggestion: "Julgar pessoas pelas ações contínuas que elas praticam, nunca pelas promessas."
    },
    {
        id: "p23",
        trail: "relacoes",
        trailLabel: "Círculo de Caráter",
        quote: "Uma verdade dita que dói ajuda muito mais para o seu amadurecimento do que uma mentira que agrada o seu ego.",
        author: "O Mestre",
        work: "Fundamentos da Forja",
        isClassic: false,
        explanation: "Bajuladores massageiam seu ego enquanto você caminha para o precipício. O verdadeiro irmão de trincheira é aquele que te puxa pelo braço, fala a verdade dura e te faz acordar antes que seja tarde demais.",
        dailyPractice: "Agradeça com humildade a alguém que apontou uma falha sua, sem armar defesas ou justificativas.",
        inquiry: "Você sabe ouvir uma crítica sincera de quem quer o seu bem sem reagir com arrogância?",
        actionSuggestion: "Agradecer a um conselho duro que você recebeu e colocar a lição em prática."
    },
    {
        id: "p24",
        trail: "hombridade",
        trailLabel: "Hombridade & Peso",
        quote: "Meninos fazem apenas o que gostam; homens maduros fazem o que precisa ser feito, mesmo sem vontade.",
        author: "O Mestre",
        work: "Fundamentos da Forja",
        isClassic: false,
        explanation: "A infância emocional se baseia na busca imediata por prazer e no alívio de desconfortos. A maturidade começa no exato segundo em que você assume o fardo, levanta cedo e cumpre seu dever sem reclamar.",
        dailyPractice: "Execute aquela tarefa chata e pesada logo como primeira ação do seu dia, com postura ereta e foco cirúrgico.",
        inquiry: "O que na sua rotina você está negligenciando porque 'não está com vontade'?",
        actionSuggestion: "Cumprir seu dever agora com postura firme e determinação inegociável."
    },
    {
        id: "p25",
        trail: "hombridade",
        trailLabel: "Hombridade & Peso",
        quote: "Ninguém vai cuidar da sua vida, pagar suas contas ou vencer suas lutas por você. A responsabilidade é sua.",
        author: "O Mestre",
        work: "Fundamentos da Forja",
        isClassic: false,
        explanation: "O mundo não te deve nada. Ninguém está vindo para te salvar. A cavalaria não vai chegar. O resgate é você mesmo, armado de disciplina, trabalho e honra.",
        dailyPractice: "Elimine qualquer expectativa de ajuda externa e trace um plano financeiro e profissional baseado apenas no seu próprio suor.",
        inquiry: "Você ainda culpa seus pais, a sorte ou o mundo pelas suas dificuldades?",
        actionSuggestion: "Assumir 100% de responsabilidade por cada centavo e cada hora do seu dia."
    },
    {
        id: "p26",
        trail: "hombridade",
        trailLabel: "Hombridade & Peso",
        quote: "Mate o moleque imaturo dentro de você e permita que o homem honrado, forte e protetor assuma o controle.",
        author: "O Mestre",
        work: "Fundamentos da Forja",
        isClassic: false,
        explanation: "O moleque quer validação, birra quando contrariado e foge do compromisso. O homem maduro é escudo para os seus, sustenta suas escolhas e é um pilar inabalável de segurança para quem o cerca.",
        dailyPractice: "Tome a frente de um problema da sua família ou trabalho e resolva-o sem pedir aplausos.",
        inquiry: "Qual vício ou infantilidade você precisa cortar para ser respeitado de verdade?",
        actionSuggestion: "Tomar uma atitude firme de adulto e cortar um mau hábito imediatamente."
    },
    {
        id: "p27",
        trail: "hombridade",
        trailLabel: "Hombridade & Peso",
        quote: "O homem de verdade encara o sacrifício e o peso para proteger a família; o fraco foge no primeiro sinal de dificuldade.",
        author: "O Mestre",
        work: "Fundamentos da Forja",
        isClassic: false,
        explanation: "A verdadeira nobreza masculina se mede pela capacidade de suportar o peso para que os seus não sejam esmagados. Não se trata de vaidade, mas de dever sagrado.",
        dailyPractice: "Faça um gesto concreto de cuidado e suporte prático para quem você ama hoje.",
        inquiry: "Como você reage quando a pressão aperta? Você assume a linha de frente?",
        actionSuggestion: "Apoiar e demonstrar segurança inabalável para aqueles que dependem de você."
    },
    {
        id: "p28",
        trail: "acao",
        trailLabel: "Sonhos na Ação",
        quote: "Arrisque agora com estratégia e atitude. No futuro você vai agradecer. Se não arriscar, continuará estagnado.",
        author: "O Mestre",
        work: "Fundamentos da Forja",
        isClassic: false,
        explanation: "A estagnação é uma morte lenta disfarçada de segurança. Quem teme errar já errou por omissão. O risco calculado e corajoso é o único bilhete de saída da mediocridade.",
        dailyPractice: "Tome a decisão que você vem postergando por medo do julgamento alheio.",
        inquiry: "Qual decisão de coragem você vem adiando por medo do fracasso?",
        actionSuggestion: "Tomar a decisão agora e dar o primeiro passo prático nas próximas 24 horas."
    },
    {
        id: "p29",
        trail: "acao",
        trailLabel: "Sonhos na Ação",
        quote: "Promessa vazia não muda nada na sua vida. O que muda seu destino é a ação disciplinada e inegociável.",
        author: "O Mestre",
        work: "Fundamentos da Forja",
        isClassic: false,
        explanation: "O inferno está cheio de homens com boas intenções que prometeram mudar na próxima segunda-feira. A realidade só se curva diante da física da ação concreta.",
        dailyPractice: "Não fale sobre o que você vai fazer: simplesmente faça e deixe o fato consumado no mundo.",
        inquiry: "Quantas promessas você já quebrou consigo mesmo nos últimos meses?",
        actionSuggestion: "Não prometer nada hoje: apenas executar calado até o final."
    },
    {
        id: "p30",
        trail: "acao",
        trailLabel: "Sonhos na Ação",
        quote: "Sonhar deitado é fácil; o que separa os homens é a disposição de acordar e construir na marra todos os dias.",
        author: "O Mestre",
        work: "Fundamentos da Forja",
        isClassic: false,
        explanation: "Visionários sem disciplina viram apenas sonhadores frustrados. O mundo pertence aos construtores que não se importam com a poeira, o calo nas mãos e o cansaço do canteiro de obras da vida.",
        dailyPractice: "Levante da cama no primeiro toque do despertador sem apertar a função soneca.",
        inquiry: "O seu dia a dia condiz com a grandeza dos sonhos que você diz ter?",
        actionSuggestion: "Alinhar sua rotina com seus objetivos sem perder tempo com distrações vazias."
    },
    {
        id: "p31",
        trail: "acao",
        trailLabel: "Sonhos na Ação",
        quote: "Seja você mesmo, mas busque ser a sua versão mais forte, diferenciada e honrada a cada novo amanhecer.",
        author: "O Mestre",
        work: "Fundamentos da Forja",
        isClassic: false,
        explanation: "Autenticidade não é desculpa para permanecer medíocre ('eu sou assim mesmo'). Seja fiel aos seus valores sagrados, mas trate seu caráter e seu intelecto como uma lâmina que deve ser amolada todos os dias na pedra da disciplina.",
        dailyPractice: "Supere sua marca pessoal em foco, paciência ou esforço em relação ao que entregou ontem.",
        inquiry: "Em que você foi melhor hoje em comparação com a sua versão de ontem?",
        actionSuggestion: "Superar seu recorde pessoal em uma tarefa hoje."
    },

    // --------------------------------------------------------------------------
    // SEÇÃO B: 50 NOVOS PRINCÍPIOS CLÁSSICOS (MARCO AURÉLIO, SÊNECA, MUSASHI, SUN TZU, FRANKL ETC.)
    // --------------------------------------------------------------------------

    // 🏛️ MARCO AURÉLIO (MEDITAÇÕES) - 10 PRINCÍPIOS
    {
        id: "p32",
        trail: "mente",
        trailLabel: "Mente & Autodomínio",
        quote: "Você tem poder sobre a sua mente, não sobre os acontecimentos externos. Compreenda isso e encontrará a sua força.",
        author: "Marco Aurélio",
        work: "Meditações, Livro IV",
        isClassic: true,
        explanation: "Não podemos controlar o clima, a traição alheia, as crises ou a morte. O poder do sábio reside exclusivamente em como ele interpreta o fato e como decide agir diante dele. Quando você para de brigar com a realidade externa, toda a sua energia volta para o seu domínio interior.",
        dailyPractice: "Diante de um contratempo hoje, divida a situação: 'O que depende de mim nisso? E o que não depende?'. Aja apenas no que depende de você.",
        inquiry: "Em que evento fora do seu controle você está desperdiçando sua paz mental?",
        actionSuggestion: "Abandonar a preocupação com o incontrolável e agir apenas no dever presente."
    },
    {
        id: "p33",
        trail: "hombridade",
        trailLabel: "Hombridade & Peso",
        quote: "Não perca mais tempo discutindo sobre como deve ser um homem bom. Seja um.",
        author: "Marco Aurélio",
        work: "Meditações, Livro X",
        isClassic: true,
        explanation: "Filosofar sem viver a virtude é hipocrisia intelectual. Debater ética enquanto se é covarde na prática é ridículo. A integridade não precisa de discursos; ela se manifesta na forma como você trata quem não pode te dar nada em troca e cumpre seu papel mesmo quando ninguém está olhando.",
        dailyPractice: "Cumpra sua palavra dada hoje sem fazer alarde ou cobrar reconhecimento.",
        inquiry: "Você gasta mais tempo pregando moral ou praticando disciplina real?",
        actionSuggestion: "Praticar uma atitude justa e honrada em silêncio hoje."
    },
    {
        id: "p34",
        trail: "esforco",
        trailLabel: "Esforço & Disciplina",
        quote: "Ao amanhecer, quando relutar em sair da cama, diga a si mesmo: 'Estou acordando para cumprir o trabalho de um ser humano'.",
        author: "Marco Aurélio",
        work: "Meditações, Livro V",
        isClassic: true,
        explanation: "Pássaros, formigas e abelhas cumprem sua função na natureza sem reclamar. Por que você, um homem dotado de razão e força, acha que nasceu para ficar estendido debaixo de cobertas quentes fugindo do seu dever?",
        dailyPractice: "Pule da cama imediatamente ao acordar, lave o rosto com água fria e inicie seu labor com dignidade.",
        inquiry: "Você acorda com a firmeza de quem tem uma missão ou com a moleza de quem se arrasta?",
        actionSuggestion: "Acordar amanhã sem adiar o despertador e iniciar o dia no comando."
    },
    {
        id: "p35",
        trail: "cicatrizes",
        trailLabel: "Cicatrizes & Erros",
        quote: "O impedimento à ação avança a ação. O que está no caminho torna-se o caminho.",
        author: "Marco Aurélio",
        work: "Meditações, Livro V",
        isClassic: true,
        explanation: "O obstáculo não é uma parede para você chorar na frente; ele é o próprio material com o qual sua força é testada e forjada. O fogo queima mais alto com o combustível que é lançado contra ele.",
        dailyPractice: "Pegue a maior dificuldade do seu dia e encare-a como um exercício de treinamento sob medida para afiar sua mente.",
        inquiry: "Qual problema atual você está tratando como maldição em vez de treinamento?",
        actionSuggestion: "Usar a pedra no sapato como estímulo para desenvolver paciência e firmeza."
    },
    {
        id: "p36",
        trail: "silencio",
        trailLabel: "O Poder do Silêncio",
        quote: "A melhor vingança contra um inimigo é não se parecer com ele.",
        author: "Marco Aurélio",
        work: "Meditações, Livro VI",
        isClassic: true,
        explanation: "Se alguém age com baixeza, ingratidão e mentira, e você responde da mesma forma, você foi derrotado e igualado à lama dele. Manter a honra e a calma superior é a maior demonstração de força e vitória moral.",
        dailyPractice: "Se alguém for rude com você hoje, responda com polidez gelada e postura inabalável.",
        inquiry: "Você se rebaixa ao nível de quem te ofende ou mantém a dignidade de quem tem autocontrole?",
        actionSuggestion: "Não retrucar ofensas e manter a conduta irrepreensível."
    },
    {
        id: "p37",
        trail: "mente",
        trailLabel: "Mente & Autodomínio",
        quote: "A alma se tinge com a cor dos seus pensamentos.",
        author: "Marco Aurélio",
        work: "Meditações, Livro V",
        isClassic: true,
        explanation: "Se você alimenta pensamentos de vitimismo, luxúria desenfreada, inveja e fraqueza o dia inteiro, sua vida será tingida dessas mesmices. Se você abriga pensamentos de dever, coragem e honra, sua postura será inquebrantável.",
        dailyPractice: "Vigie seu diálogo interno. Ao se flagrar com pensamentos derrotistas, corte-os de imediato com uma ordem clara.",
        inquiry: "Qual é o tema predominante dos pensamentos que você cultiva em segredo?",
        actionSuggestion: "Substituir pensamentos de queixa por visualizações de ação e vitória."
    },
    {
        id: "p38",
        trail: "relacoes",
        trailLabel: "Círculo de Caráter",
        quote: "Pela manhã, diga a si mesmo: hoje encontrarei pessoas indiscretas, ingratas, insolentes e invejosas. Nada disso pode me ferir.",
        author: "Marco Aurélio",
        work: "Meditações, Livro II",
        isClassic: true,
        explanation: "Esperar que o mundo seja cheio de santos é ilusão pueril. As pessoas agem mal por ignorância do bem e do mal. Quando você já sai de casa sabendo que enfrentará tolos, nenhuma grosseria te pega de surpresa.",
        dailyPractice: "Prepare sua armadura mental antes de sair de casa para não se surpreender com ingratidão de ninguém.",
        inquiry: "Você se abala com a imaturidade alheia como se fosse algo surpreendente?",
        actionSuggestion: "Perdoar internamente a ignorância do outro e seguir no seu dever."
    },
    {
        id: "p39",
        trail: "hombridade",
        trailLabel: "Hombridade & Peso",
        quote: "Tudo o que acontece é suportável ou passageiro. Seja ereto, e não endireitado pelos outros.",
        author: "Marco Aurélio",
        work: "Meditações, Livro III",
        isClassic: true,
        explanation: "Sua postura deve se sustentar pelo seu próprio esqueleto moral, e não por escoras alheias. O homem forjado não precisa de aplausos externos para ficar de pé nem desaba quando os outros se afastam.",
        dailyPractice: "Mantenha a postura física ereta e o queixo erguido durante o dia, refletindo seu estado de vigilância interior.",
        inquiry: "Você precisa que os outros fiquem te animando para você conseguir trabalhar?",
        actionSuggestion: "Assumir o próprio sustento moral sem depender de estímulo externo."
    },
    {
        id: "p40",
        trail: "acao",
        trailLabel: "Sonhos na Ação",
        quote: "Não viva como se tivesse dez mil anos pela frente. O destino está à espreita; enquanto viver, enquanto puder, seja bom.",
        author: "Marco Aurélio",
        work: "Meditações, Livro IV",
        isClassic: true,
        explanation: "O relógio da sua existência está correndo silenciosamente. Adiar a coragem e a virtude para uma velhice incerta é a maior loucura humana. Cada respiração pode ser a última.",
        dailyPractice: "Trate este dia como se fosse um resumo completo da sua vida inteira: entregue tudo de si.",
        inquiry: "Quantos anos da sua vida você já jogou no lixo fingindo que é imortal?",
        actionSuggestion: "Fazer o que precisa ser feito hoje, sem adiar para amanhã."
    },
    {
        id: "p41",
        trail: "mente",
        trailLabel: "Mente & Autodomínio",
        quote: "Rejeite o sentimento de injúria e a própria injúria desaparecerá.",
        author: "Marco Aurélio",
        work: "Meditações, Livro IV",
        isClassic: true,
        explanation: "A dor de uma ofensa não está nas palavras de quem falou, mas no consentimento que você dá ao se sentir ofendido. Sem o seu consentimento, a ofensa é apenas som vibrando no ar.",
        dailyPractice: "Não tome nada como pessoal. Olhe para as ofensas como quem observa uma tempestade pela janela.",
        inquiry: "Quem você está deixando ter poder sobre a sua paz hoje?",
        actionSuggestion: "Decidir conscientemente que nada vindo de fora tem poder de tirar seu equilíbrio."
    },

    // 📜 SÊNECA (CARTAS & BREVIDADE DA VIDA) - 8 PRINCÍPIOS
    {
        id: "p42",
        trail: "esforco",
        trailLabel: "Esforço & Disciplina",
        quote: "Não é que temos pouco tempo, é que perdemos muito.",
        author: "Sêneca",
        work: "Sobre a Brevidade da Vida",
        isClassic: true,
        explanation: "A vida é longa o bastante para quem sabe investi-la em obras magnas. O problema é que a maioria dos homens esbanja suas horas com futilidades, sono em excesso, vícios e preocupações que não levam a lugar nenhum.",
        dailyPractice: "Monitore seu tempo de tela hoje. Elimine ao menos 1 hora de futilidade e aplique no seu ofício.",
        inquiry: "Em que buraco negro de tempo você está jogando fora a sua única vida?",
        actionSuggestion: "Cortar distrações e blindar 2 horas de trabalho focado e ininterrupto."
    },
    {
        id: "p43",
        trail: "cicatrizes",
        trailLabel: "Cicatrizes & Erros",
        quote: "Sofremos mais na imaginação do que na realidade.",
        author: "Sêneca",
        work: "Cartas a Lucílio, Carta XIII",
        isClassic: true,
        explanation: "A ansiedade antecipa tragédias que jamais acontecerão e amplifica pequenos problemas em monstros invencíveis. A maioria das coisas que te aterrorizam à noite não passarão de poeira amanhã.",
        dailyPractice: "Quando um medo te assombrar, pergunte: 'Isso está acontecendo agora de fato ou apenas na minha cabeça?'. Lide apenas com o fato real.",
        inquiry: "Qual medo imaginário está te paralisando antes mesmo da batalha começar?",
        actionSuggestion: "Focar no problema concreto de hoje e calar a imaginação catastrófica."
    },
    {
        id: "p44",
        trail: "acao",
        trailLabel: "Sonhos na Ação",
        quote: "Não é porque as coisas são difíceis que não ousamos; é porque não ousamos que elas são difíceis.",
        author: "Sêneca",
        work: "Cartas a Lucílio, Carta CIV",
        isClassic: true,
        explanation: "A hesitação cria monstros. Quando você adia e teme uma tarefa, a sua imaginação a agiganta. No momento em que você avança de peito aberto, percebe que a barreira era muito menor do que sua fraqueza supunha.",
        dailyPractice: "Encare hoje a ligação, conversa ou tarefa que você estava evitando pelo suposto grau de dificuldade.",
        inquiry: "O que você está tornando impossível apenas por ter medo de dar o primeiro passo?",
        actionSuggestion: "Ousar agir imediatamente na tarefa mais temida."
    },
    {
        id: "p45",
        trail: "silencio",
        trailLabel: "O Poder do Silêncio",
        quote: "Para o navio que não sabe para qual porto navega, nenhum vento é favorável.",
        author: "Sêneca",
        work: "Cartas a Lucílio, Carta LXXI",
        isClassic: true,
        explanation: "Sem clareza de propósito, qualquer oportunidade parece atraente e qualquer vento te arrasta. O homem forte define seu porto inegociável; o resto é apenas correnteza que ele aprende a contornar.",
        dailyPractice: "Escreva em uma frase clara qual é o porto central que você está construindo nos próximos 12 meses.",
        inquiry: "Você sabe exatamente para onde está navegando ou está sendo levado pela maré da rotina?",
        actionSuggestion: "Definir com exatidão sua meta principal de longo prazo."
    },
    {
        id: "p46",
        trail: "esforco",
        trailLabel: "Esforço & Disciplina",
        quote: "As árvores mais fortes são aquelas que cresceram enfrentando os ventos mais tempestuosos.",
        author: "Sêneca",
        work: "Sobre a Providência",
        isClassic: true,
        explanation: "Uma árvore no vale protegido tem raízes fracas e tomba na primeira tempestade. O carvalho do topo da montanha, açoitado pelo vendaval diário, é forçado a cravar suas raízes no mais profundo da rocha para sobreviver.",
        dailyPractice: "Não deseje uma vida fácil; peça ombros fortes para suportar cargas pesadas.",
        inquiry: "Você foge da tempestade ou aproveita o vento para fortalecer suas raízes?",
        actionSuggestion: "Agradecer mentalmente pela dificuldade que está te tornando mais forte."
    },
    {
        id: "p47",
        trail: "mente",
        trailLabel: "Mente & Autodomínio",
        quote: "Um homem é tão miserável quanto pensa que é.",
        author: "Sêneca",
        work: "Cartas a Lucílio, Carta LXXVIII",
        isClassic: true,
        explanation: "A riqueza ou a ruína são estados da mente. Há homens em palácios que vivem em pânico e escravidão mental, e há homens em celas que preservam a liberdade soberana da alma. Sua percepção governa sua realidade.",
        dailyPractice: "Substitua a postura de coitado pela postura de quem assume o leme de qualquer situação.",
        inquiry: "Em que área da vida você está se fazendo de vítima sem perceber?",
        actionSuggestion: "Extirpar o sentimento de autopiedade da sua mente."
    },
    {
        id: "p48",
        trail: "relacoes",
        trailLabel: "Círculo de Caráter",
        quote: "Associe-se com aqueles que tornarão você um homem melhor; acolha aqueles que você mesmo pode melhorar.",
        author: "Sêneca",
        work: "Cartas a Lucílio, Carta VII",
        isClassic: true,
        explanation: "O convívio humano é uma troca constante de energia e princípios morais. Escolha parceiros de caminhada que exijam o melhor de você e não tolere a proximidade daqueles que tentam te arrastar para o vício.",
        dailyPractice: "Envie uma mensagem de incentivo para um parceiro de treino ou trabalho que você admira.",
        inquiry: "As pessoas com quem você almoça e conversa te inspiram ou te drenam?",
        actionSuggestion: "Cultivar alianças com homens e pessoas de caráter comprovado."
    },
    {
        id: "p49",
        trail: "hombridade",
        trailLabel: "Hombridade & Peso",
        quote: "A sorte teme os corajosos e esmaga os covardes.",
        author: "Sêneca",
        work: "Medeia",
        isClassic: true,
        explanation: "A adversidade fareja a fraqueza. Quando você recua com medo, as circunstâncias te atropelam. Quando você avança com queixo erguido e dentes cerrados, as portas que pareciam trancadas se abrem.",
        dailyPractice: "Não recue diante da pressão no trabalho ou na vida pessoal: dê um passo à frente.",
        inquiry: "Onde você está recuando por covardia quando deveria estar avançando?",
        actionSuggestion: "Encarar de frente a situação desconfortável sem fugir."
    },

    // ⚔️ MIYAMOTO MUSASHI (O LIVRO DOS CINCO ANÉIS & DOKKODO) - 8 PRINCÍPIOS
    {
        id: "p50",
        trail: "esforco",
        trailLabel: "Esforço & Disciplina",
        quote: "Uma vez que você conheça o Caminho amplamente, você o verá em todas as coisas.",
        author: "Miyamoto Musashi",
        work: "O Livro dos Cinco Anéis (Go Rin No Sho)",
        isClassic: true,
        explanation: "A disciplina não é um botão que você liga só na academia e desliga no trabalho. A forma como você amarra seus sapatos e arruma sua cama é a mesma forma como você lidera seus negócios e enfrenta suas crises. Tudo está conectado.",
        dailyPractice: "Execute a menor e mais simples tarefa do seu dia com a mesma precisão e perfeição que usaria em um duelo de vida ou morte.",
        inquiry: "Você é relaxado nas pequenas coisas achando que será impecável nas grandes?",
        actionSuggestion: "Tratar qualquer tarefa simples de hoje com padrão de excelência militar."
    },
    {
        id: "p51",
        trail: "mente",
        trailLabel: "Mente & Autodomínio",
        quote: "Não faça nada que seja inútil.",
        author: "Miyamoto Musashi",
        work: "O Livro dos Cinco Anéis",
        isClassic: true,
        explanation: "A maioria das pessoas passa o dia ocupada, mas fazendo coisas sem nenhum propósito estratégico. O guerreiro economiza movimentos: ele corta o supérfluo para que cada golpe, cada palavra e cada segundo tenham impacto mortal.",
        dailyPractice: "Identifique um hábito completamente inútil do seu dia de hoje e corte-o pela raiz.",
        inquiry: "Quanto do seu dia é gasto em agitação vazia que não te leva a lugar nenhum?",
        actionSuggestion: "Eliminar 1 hora de atividades inúteis e focar no que constrói."
    },
    {
        id: "p52",
        trail: "hombridade",
        trailLabel: "Hombridade & Peso",
        quote: "Não se arrependa do que foi feito.",
        author: "Miyamoto Musashi",
        work: "Dokkodo (O Caminho do Andarilho Solitário)",
        isClassic: true,
        explanation: "O arrependimento estéril é veneno. Se agiu bem, honre. Se errou, assimile o aprendizado da cicatriz e siga em frente com a guarda levantada. Um espadachim que olha para trás durante o combate tem a cabeça decepada.",
        dailyPractice: "Pare de justificar ou lamentar um erro passado. Aceite a consequência, pague o preço e foque no próximo golpe.",
        inquiry: "Você ainda está olhando para trás quando deveria estar vigiando a frente?",
        actionSuggestion: "Encerrar qualquer sentimento de culpa e focar na próxima ação correta."
    },
    {
        id: "p53",
        trail: "mente",
        trailLabel: "Mente & Autodomínio",
        quote: "Não dependa de ninguém além de si mesmo.",
        author: "Miyamoto Musashi",
        work: "Dokkodo",
        isClassic: true,
        explanation: "Apoiar-se em bengalas emocionais ou esperar que outros resolvam seu caminho te torna vulnerável e fraco. Seja completo e firme por si próprio; se houver aliados honrados, excelente; se não houver, marche sozinho com a mesma determinação.",
        dailyPractice: "Resolva um problema complexo hoje sem pedir ajuda a terceiros antes de esgotar todas as suas forças.",
        inquiry: "Em quem você está se encostando por covardia de assumir a própria autonomia?",
        actionSuggestion: "Assumir o comando total de suas necessidades e tarefas."
    },
    {
        id: "p54",
        trail: "esforco",
        trailLabel: "Esforço & Disciplina",
        quote: "Pode levar mil dias de treinamento para forjar a disciplina, e dez mil dias de prática para alcançar o refinamento.",
        author: "Miyamoto Musashi",
        work: "O Livro dos Cinco Anéis",
        isClassic: true,
        explanation: "A maestria exige anos de trabalho duro, silencioso e invisível. A geração atual quer resultados em duas semanas e desiste no primeiro mês. O verdadeiro guerreiro se apaixona pelo processo diário da repetição incansável.",
        dailyPractice: "Aceite que sua evolução levará tempo e continue praticando mesmo sem ver resultados imediatos hoje.",
        inquiry: "Você tem a paciência de quem constrói para a vida toda ou a afobação de quem quer tudo para ontem?",
        actionSuggestion: "Manter a constância no seu treino e estudo sem esperar aplausos agora."
    },
    {
        id: "p55",
        trail: "silencio",
        trailLabel: "O Poder do Silêncio",
        quote: "Na luta e na vida diária, mantenha o espírito calmo e imóvel, mas nunca estagnado.",
        author: "Miyamoto Musashi",
        work: "O Livro dos Cinco Anéis",
        isClassic: true,
        explanation: "A mente não deve ser como água agitada em fúria nem como lago congelado. Deve ser como a água corrente: calma por fora, mas com força avassaladora de adaptação a qualquer obstáculo.",
        dailyPractice: "Quando a tensão subir no trabalho, relaxe os ombros, respire pelo diafragma e observe o cenário com frieza.",
        inquiry: "Você perde a compostura quando as coisas saem do planejado?",
        actionSuggestion: "Manter a tranquilidade de espírito sob estresse intenso."
    },
    {
        id: "p56",
        trail: "acao",
        trailLabel: "Sonhos na Ação",
        quote: "A única razão pela qual um guerreiro está vivo é para lutar, e a única razão pela qual ele luta é para vencer.",
        author: "Miyamoto Musashi",
        work: "O Livro dos Cinco Anéis",
        isClassic: true,
        explanation: "Não entre em nada pela metade. Se você vai abrir um negócio, treinar ou assumir uma missão, entre com intenção assassina de excelência. Entrar sem compromisso total de vencer é desperdício de sangue e tempo.",
        dailyPractice: "Dê 100% de dedicação na sua principal tarefa de hoje, sem desculpas e sem meio-termo.",
        inquiry: "Em que áreas da vida você está atuando como amador com esforço morno?",
        actionSuggestion: "Subir o nível de intensidade e lutar para vencer em cada entrega."
    },
    {
        id: "p57",
        trail: "mente",
        trailLabel: "Mente & Autodomínio",
        quote: "Nunca se desvie do Caminho da honra e da retidão.",
        author: "Miyamoto Musashi",
        work: "Dokkodo",
        isClassic: true,
        explanation: "Atalhos sujos e mentiras podem trazer ganhos rápidos no curto prazo, mas apodrecem a alma e cobram um preço impagável no futuro. O homem honrado prefere a derrota temporária pela verdade do que a vitória podre pela traição.",
        dailyPractice: "Faça a coisa certa hoje, especialmente onde ninguém está vigiando e onde seria fácil trapacear.",
        inquiry: "Você está tentado a pegar atalhos desonestos para acelerar seus ganhos?",
        actionSuggestion: "Sustentar a retidão inegociável em todos os seus negócios e atitudes."
    },

    // 🛡️ EPICTETO (ENCHIRIDION & DISCURSOS) - 8 PRINCÍPIOS
    {
        id: "p58",
        trail: "mente",
        trailLabel: "Mente & Autodomínio",
        quote: "Não são as coisas que nos perturbam, mas o julgamento que fazemos das coisas.",
        author: "Epicteto",
        work: "Enchiridion (Manual do Estoicismo)",
        isClassic: true,
        explanation: "Um evento em si é neutro. A perda de um emprego ou uma crítica não têm poder de te machucar por si sós; é a sua mente que diz: 'Isso é terrível, minha vida acabou'. Mude a narrativa mental e o veneno vira adubo.",
        dailyPractice: "Quando algo 'ruim' acontecer hoje, diga imediatamente: 'Isso é apenas um acontecimento neutro; eu decido como vou responder'.",
        inquiry: "Que drama você está criando em torno de um evento simples da sua rotina?",
        actionSuggestion: "Retirar a carga emocional exagerada das contrariedades de hoje."
    },
    {
        id: "p59",
        trail: "hombridade",
        trailLabel: "Hombridade & Peso",
        quote: "Se você deseja ser respeitado, comece respeitando a si mesmo e não traindo a sua própria palavra.",
        author: "Epicteto",
        work: "Discursos",
        isClassic: true,
        explanation: "Como você espera que o mundo, sua mulher ou seus sócios te respeitem se você mente para si mesmo todas as noites dizendo que vai mudar e quebra a promessa na manhã seguinte? O auto-respeito precede o respeito externo.",
        dailyPractice: "Faça uma promessa pequena para você hoje (ex: não comer açúcar, ler 10 páginas) e cumpra com fidelidade sagrada.",
        inquiry: "Você respeita a sua própria palavra quando está sozinho no escuro?",
        actionSuggestion: "Cumprir rigorosamente a promessa feita a si mesmo."
    },
    {
        id: "p60",
        trail: "silencio",
        trailLabel: "O Poder do Silêncio",
        quote: "Temos dois ouvidos e uma boca para que possamos ouvir o dobro do que falamos.",
        author: "Epicteto",
        work: "Fragmentos",
        isClassic: true,
        explanation: "Quem fala sem parar não aprende nada de novo, apenas regurgita o que já sabe e expõe suas fraquezas a todos. O homem de valor observa, escuta com atenção cirúrgica e só abre a boca quando suas palavras forem melhores que o silêncio.",
        dailyPractice: "Em uma conversa hoje, escute atentamente a outra pessoa até o fim sem interromper nenhuma vez.",
        inquiry: "Você escuta para aprender ou apenas espera sua vez de falar?",
        actionSuggestion: "Praticar escuta ativa e comedimento verbal absoluto hoje."
    },
    {
        id: "p61",
        trail: "esforco",
        trailLabel: "Esforço & Disciplina",
        quote: "Quanto tempo você ainda vai esperar antes de exigir o melhor de si mesmo?",
        author: "Epicteto",
        work: "Enchiridion, Cap. 51",
        isClassic: true,
        explanation: "Você já não é mais uma criança; você tem conhecimento suficiente para saber o que é certo e o que é errado. Se você continuar adiando sua maturidade e vivendo com desleixo, morrerá como viveu: medíocre e decepcionado.",
        dailyPractice: "Exija de si mesmo o mais alto padrão de postura, pontualidade e dedicação agora mesmo.",
        inquiry: "Até quando você vai viver abaixo do seu verdadeiro potencial de homem?",
        actionSuggestion: "Exigir o nível máximo de disciplina em cada tarefa do dia."
    },
    {
        id: "p62",
        trail: "cicatrizes",
        trailLabel: "Cicatrizes & Erros",
        quote: "As dificuldades são coisas que mostram aos homens quem eles realmente são.",
        author: "Epicteto",
        work: "Discursos, Livro I",
        isClassic: true,
        explanation: "Em tempos de paz e fartura, qualquer covarde se passa por sábio e leal. É no calor da crise, da escassez e da dor que a máscara cai e a verdadeira estatura moral de um homem é revelada perante o espelho.",
        dailyPractice: "Ao enfrentar um aperto hoje, não reclame: reconheça que é ali que você prova quem você é.",
        inquiry: "Como você se comporta quando a vida te coloca na prensa da dificuldade?",
        actionSuggestion: "Demonstrar firmeza e calma sob pressão real."
    },
    {
        id: "p63",
        trail: "mente",
        trailLabel: "Mente & Autodomínio",
        quote: "Nenhum homem é livre se não for senhor de si mesmo.",
        author: "Epicteto",
        work: "Fragmentos",
        isClassic: true,
        explanation: "Você pode ter milhões na conta bancária e morar em uma mansão; se você não consegue dominar sua gula, seu vício por pornografia, sua raiva ou sua vaidade, você é apenas um escravo acorrentado aos próprios desejos.",
        dailyPractice: "Diga um 'NÃO' firme a um desejo impulsivo do seu corpo hoje.",
        inquiry: "Qual vício ou fraqueza física é o seu dono atualmente?",
        actionSuggestion: "Praticar abstinência voluntária de um prazer imediato hoje."
    },
    {
        id: "p64",
        trail: "relacoes",
        trailLabel: "Círculo de Caráter",
        quote: "Evite a intimidade com homens fúteis e sem princípios; pois se você encostar em carvão aceso, ou você se queima, ou você se suja.",
        author: "Epicteto",
        work: "Enchiridion, Cap. 33",
        isClassic: true,
        explanation: "É impossível conviver intimamente com pessoas desonestas, promíscuas e desleixadas sem absorver parte da podridão delas. O carvão apaga sua brasa ou suja suas mãos de cinza.",
        dailyPractice: "Coloque uma barreira educada mas intransponível entre você e conhecidos tóxicos.",
        inquiry: "Com quem você tem compartilhado sua intimidade que só te suja de carvão?",
        actionSuggestion: "Blindar seu círculo íntimo de influências medíocres."
    },
    {
        id: "p65",
        trail: "acao",
        trailLabel: "Sonhos na Ação",
        quote: "Não explique a sua filosofia: incorpore-a nas suas ações.",
        author: "Epicteto",
        work: "Enchiridion, Cap. 46",
        isClassic: true,
        explanation: "Ovelhas não regurgitam a grama para mostrar aos pastores o quanto comeram; elas digerem a comida internamente e mostram lã e leite pelo corpo. Mostre seus princípios através de resultados palpáveis e caráter firme, não de postagens e discursos.",
        dailyPractice: "Não cite frases hoje: apenas viva os princípios sem abrir a boca.",
        inquiry: "Você fala mais sobre seus valores do que realmente os demonstra na prática?",
        actionSuggestion: "Deixar que suas atitudes comprovem sua integridade sem alarde."
    },

    // ⚔️ SUN TZU (A ARTE DA GUERRA) - 6 PRINCÍPIOS
    {
        id: "p66",
        trail: "mente",
        trailLabel: "Mente & Autodomínio",
        quote: "Se você conhece o inimigo e conhece a si mesmo, não precisa temer o resultado de cem batalhas.",
        author: "Sun Tzu",
        work: "A Arte da Guerra, Cap. III",
        isClassic: true,
        explanation: "A ilusão sobre suas próprias capacidades e a ignorância sobre os perigos do mundo levam ao massacre. O homem que conhece suas fraquezas sabe onde se proteger; aquele que conhece as armadilhas da vida sabe onde pisar.",
        dailyPractice: "Faça uma lista honesta das suas 3 maiores vulnerabilidades e monte uma estratégia de defesa para elas.",
        inquiry: "Qual ponto cego em você mesmo pode te destruir se você não prestar atenção?",
        actionSuggestion: "Mapear seus pontos fracos e agir preventivamente."
    },
    {
        id: "p67",
        trail: "silencio",
        trailLabel: "O Poder do Silêncio",
        quote: "Seja sutil até o ponto de ser invisível; seja misterioso até o ponto do silêncio. Assim, você será o senhor do destino do seu oponente.",
        author: "Sun Tzu",
        work: "A Arte da Guerra, Cap. VI",
        isClassic: true,
        explanation: "Quem alardeia seus planos facilita a emboscada do adversário. Aquele que se move em silêncio absoluto não deixa pistas e quando age, a vitória já está consolidada antes mesmo que os outros percebam.",
        dailyPractice: "Execute uma grande jogada na sua carreira ou estudo sem avisar ninguém nas redes sociais.",
        inquiry: "Você dá munição aos seus concorrentes e invejosos falando demais sobre seus planos?",
        actionSuggestion: "Manter discrição absoluta sobre suas próximas decisões estratégicas."
    },
    {
        id: "p68",
        trail: "esforco",
        trailLabel: "Esforço & Disciplina",
        quote: "A vitória está reservada para aqueles que estão dispostos a pagar o preço do preparo antecipado.",
        author: "Sun Tzu",
        work: "A Arte da Guerra",
        isClassic: true,
        explanation: "A batalha não é decidida no dia do combate, mas nos meses de treinamento árduo que a antecederam. O guerreiro vitorioso vence primeiro na preparação e depois vai para a luta; o derrotado vai para a luta e depois procura como vencer.",
        dailyPractice: "Prepare seus materiais, roupas e tarefas de amanhã antes de ir dormir hoje.",
        inquiry: "Você improvisa sua rotina ou se prepara com rigor de estrategista?",
        actionSuggestion: "Antecipar todo o preparo do seu próximo dia de trabalho."
    },
    {
        id: "p69",
        trail: "acao",
        trailLabel: "Sonhos na Ação",
        quote: "No meio do caos, há também oportunidade.",
        author: "Sun Tzu",
        work: "A Arte da Guerra, Cap. V",
        isClassic: true,
        explanation: "Quando tudo parece desmoronar e a maioria entra em desespero e corre em pânico, o homem lúcido respira fundo e enxerga as brechas abertas. As maiores vitórias da história nasceram no coração das crises mais duras.",
        dailyPractice: "Identifique uma crise recente na sua vida e encontre a oportunidade de crescimento oculta nela.",
        inquiry: "Você se desespera com o caos ou procura a oportunidade estratégica?",
        actionSuggestion: "Encontrar a solução oculta em meio a uma dificuldade atual."
    },
    {
        id: "p70",
        trail: "hombridade",
        trailLabel: "Hombridade & Peso",
        quote: "Aquele que é prudente e espera por um inimigo que não o é, será vitorioso.",
        author: "Sun Tzu",
        work: "A Arte da Guerra",
        isClassic: true,
        explanation: "A paciência e o autodomínio são armas letais. Deixe o adversário se afobar, gastar energia e cometer erros por vaidade e ansiedade. Enquanto isso, mantenha sua posição com calma de pedra e golpeie na hora certa.",
        dailyPractice: "Não reaja por impulso em nenhuma negociação ou discussão hoje. Aguarde o momento oportuno.",
        inquiry: "A sua pressa tem te feito tropeçar em decisões que exigiam paciência?",
        actionSuggestion: "Exercer paciência estratégica e esperar o momento ideal para agir."
    },
    {
        id: "p71",
        trail: "relacoes",
        trailLabel: "Círculo de Caráter",
        quote: "Trate seus soldados como seus próprios filhos, e eles o seguirão até os vales mais profundos.",
        author: "Sun Tzu",
        work: "A Arte da Guerra, Cap. X",
        isClassic: true,
        explanation: "A liderança pelo medo gera rebelião e traição assim que a oportunidade surge. A liderança pela honra, pelo exemplo inquestionável e pelo cuidado genuíno com os seus constrói lealdade inquebrantável até a morte.",
        dailyPractice: "Demonstre lealdade e apreço sincero por um colega ou subordinado que trabalha duro com você.",
        inquiry: "Você lidera pelo exemplo e respeito ou pela arrogância e cobrança vazia?",
        actionSuggestion: "Incentivar e valorizar quem luta ao seu lado nos bastidores."
    },

    // 🛡️ VIKTOR FRANKL (EM BUSCA DE SENTIDO) - 5 PRINCÍPIOS
    {
        id: "p72",
        trail: "cicatrizes",
        trailLabel: "Cicatrizes & Erros",
        quote: "A última das liberdades humanas é a capacidade de escolher a própria atitude diante de qualquer circunstância.",
        author: "Viktor Frankl",
        work: "Em Busca de Sentido",
        isClassic: true,
        explanation: "Mesmo em um campo de concentração nazista, desprovido de roupas, comida e dignidade, os carrascos não podiam roubar de um homem a decisão interna de como encarar aquele sofrimento. Ninguém pode tirar sua postura interior sem o seu aval.",
        dailyPractice: "Mesmo que o seu dia seja péssimo, decida conscientemente manter a cabeça erguida e o coração calmo.",
        inquiry: "Quem você está deixando roubar a sua liberdade de escolher como reagir à dor?",
        actionSuggestion: "Escolher a postura de honra e firmeza diante do sofrimento de hoje."
    },
    {
        id: "p73",
        trail: "esforco",
        trailLabel: "Esforço & Disciplina",
        quote: "Aquele que tem um porquê para viver pode suportar quase qualquer como.",
        author: "Viktor Frankl / Friedrich Nietzsche",
        work: "Em Busca de Sentido",
        isClassic: true,
        explanation: "Quando seu propósito é forte (proteger seus filhos, construir um legado, honrar a Deus), o cansaço do trabalho, a dor do treino e o desconforto diário viram pequenos detalhes suportáveis. Quem não tem propósito desiste com uma dor de cabeça.",
        dailyPractice: "Defina claramente pelo que ou por quem você está disposto a suar e sangrar todos os dias.",
        inquiry: "O seu propósito de vida é grande o bastante para te manter de pé na pior crise?",
        actionSuggestion: "Renovar o compromisso sagrado com seu propósito maior de vida."
    },
    {
        id: "p74",
        trail: "mente",
        trailLabel: "Mente & Autodomínio",
        quote: "Entre o estímulo e a resposta há um espaço. Nesse espaço reside a nossa capacidade de escolher a nossa resposta.",
        author: "Viktor Frankl",
        work: "Em Busca de Sentido",
        isClassic: true,
        explanation: "O animal apenas reage cegamente ao estímulo: se alguém o agride, ele morde. O homem maduro habita o espaço sagrado entre o que aconteceu e o que ele fará a respeito. Ali mora todo o seu crescimento e sua liberdade.",
        dailyPractice: "Pratique ampliar o espaço entre o insulto recebido e a sua resposta. Seja senhor da sua ação.",
        inquiry: "Você reage como bicho imediatista ou escolhe sua resposta com soberania mental?",
        actionSuggestion: "Dar uma resposta consciente e equilibrada a uma provocação."
    },
    {
        id: "p75",
        trail: "cicatrizes",
        trailLabel: "Cicatrizes & Erros",
        quote: "O sofrimento deixa de ser sofrimento no momento em que encontra um significado.",
        author: "Viktor Frankl",
        work: "Em Busca de Sentido",
        isClassic: true,
        explanation: "Sofrer sem rumo gera desespero e amargura. Sofrer sabendo que aquele fardo está construindo a sua musculatura moral, forjando o sustento da sua casa ou salvando quem você ama transforma o sacrifício em glória.",
        dailyPractice: "Enxergue o trabalho pesado de hoje como a forja que está moldando o futuro da sua linhagem.",
        inquiry: "Qual é o sentido nobre por trás do sacrifício que você está fazendo agora?",
        actionSuggestion: "Dar significado nobre ao cansaço e ao esforço do dia."
    },
    {
        id: "p76",
        trail: "hombridade",
        trailLabel: "Hombridade & Peso",
        quote: "Não pergunte o que a vida tem a lhe oferecer; pergunte o que a vida está esperando que você entregue a ela.",
        author: "Viktor Frankl",
        work: "Em Busca de Sentido",
        isClassic: true,
        explanation: "A atitude mimada exige felicidade e facilidade do mundo. A atitude do homem de honra entende que a vida o coloca diante de tarefas diárias que exigem coragem, responsabilidade e entrega incondicional.",
        dailyPractice: "Pergunte-se: 'Qual é o dever que a vida está me cobrando neste exato momento?' e cumpra-o.",
        inquiry: "Você fica cobrando da vida como um credor mimado ou cumpre o dever como um guerreiro?",
        actionSuggestion: "Entregar o seu melhor sem ficar esperando recompensas antecipadas."
    },

    // ⚡ FRIEDRICH NIETZSCHE & SABEDORIA MILENAR - 5 PRINCÍPIOS
    {
        id: "p77",
        trail: "cicatrizes",
        trailLabel: "Cicatrizes & Erros",
        quote: "O que não me mata me fortalece.",
        author: "Friedrich Nietzsche",
        work: "Crepúsculo dos Ídolos",
        isClassic: true,
        explanation: "O aço que sai da forja foi espancado pelo martelo e mergulhado no fogo. Cada dor que você enfrentou e não te destruiu aumentou sua densidade moral, sua casca e sua prontidão para guerras maiores.",
        dailyPractice: "Abrace a dor do esforço como sinal indiscutível de que sua armadura está endurecendo.",
        inquiry: "Você se ressente das feridas do passado ou agradece pela força que elas te deram?",
        actionSuggestion: "Honrar suas cicatrizes como troféus de sobrevivência e aprendizado."
    },
    {
        id: "p78",
        trail: "mente",
        trailLabel: "Mente & Autodomínio",
        quote: "Quem luta com monstros deve cuidar para que, no processo, não se torne um monstro.",
        author: "Friedrich Nietzsche",
        work: "Além do Bem e do Mal",
        isClassic: true,
        explanation: "Combater a maldade e a injustiça do mundo sem vigilância pode transformar o homem naquilo que ele mais odiava: um ser amargo, vingativo e cruel. Mantenha seu coração limpo e sua bússola moral intocada.",
        dailyPractice: "Não permita que a baixeza do mundo contamine a pureza dos seus valores.",
        inquiry: "A dureza da vida está te tornando um homem forte ou um homem amargo e podre por dentro?",
        actionSuggestion: "Preservar a nobreza e a honra mesmo enfrentando o pior dos cenários."
    },
    {
        id: "p79",
        trail: "esforco",
        trailLabel: "Esforço & Disciplina",
        quote: "O ferro afia o ferro, e o homem afia a face do seu amigo.",
        author: "Rei Salomão",
        work: "Provérbios 27:17",
        isClassic: true,
        explanation: "Para afiar uma lâmina de ferro, é preciso o atrito abrasivo de outra lâmina dura. Dois homens frouxos se acomodam em mentiras; dois homens de verdade cobram disciplina mútua e se afiam para o combate.",
        dailyPractice: "Esteja aberto a ser confrontado por irmãos que querem sua evolução real.",
        inquiry: "Você tem amigos que te afiam como ferro ou que te amolecem como cera?",
        actionSuggestion: "Buscar conversas sinceras e desafiadoras que elevem seus padrões."
    },
    {
        id: "p80",
        trail: "hombridade",
        trailLabel: "Hombridade & Peso",
        quote: "Mais vale o homem paciente do que o guerreiro, mais vale quem domina o seu espírito do que quem conquista uma cidade.",
        author: "Rei Salomão",
        work: "Provérbios 16:32",
        isClassic: true,
        explanation: "Conquistar territórios e acumular bens externos é fácil para quem tem força bruta. O desafio supremo, reservado aos grandes homens da história, é governar as próprias paixões, a língua e a arrogância interior.",
        dailyPractice: "Domine seu orgulho e peça desculpas com dignidade caso tenha falhado com alguém.",
        inquiry: "Você é capaz de governar a si mesmo quando ninguém está te vendo?",
        actionSuggestion: "Exercer domínio próprio absoluto sobre os impulsos do ego."
    },
    {
        id: "p81",
        trail: "acao",
        trailLabel: "Sonhos na Ação",
        quote: "Amor Fati: não queira nada diferente do que foi, do que é e do que será. Ame o seu destino.",
        author: "Friedrich Nietzsche",
        work: "Ecce Homo",
        isClassic: true,
        explanation: "Não basta apenas 'aguentar' a vida com cara feia; abrace seu destino com ardor heroico. Cada tropeço, cada inimigo e cada tragédia foi o adubo exato que te trouxe até aqui para ser quem você é hoje.",
        dailyPractice: "Olhe para a sua situação atual e diga com convicção de guerreiro: 'Eu amo este combate e vencerei nele'.",
        inquiry: "Você ainda luta contra o seu passado ou já aprendeu a amar sua forja?",
        actionSuggestion: "Abraçar sua história com orgulho e avançar sem medo."
    },
    // --------------------------------------------------------------------------
    // SEÇÃO C: +50 NOVOS PRINCÍPIOS CLÁSSICOS & FILOSÓFICOS (TOTALIZANDO 131+)
    // --------------------------------------------------------------------------
    {
        id: "p82",
        trail: "mente",
        trailLabel: "Mente & Autodomínio",
        quote: "Somos aquilo que fazemos repetidamente. A excelência, portanto, não é um ato isolado, mas um hábito forjado diariamente.",
        author: "Aristóteles",
        work: "Ética a Nicômaco",
        isClassic: true,
        explanation: "Você não é o que pensa ser nos seus devaneios de grandeza; você é a soma exata dos seus micro-hábitos diários. Se você procrastina todos os dias, você é um procrastinador; se você cumpre sua palavra todos os dias, você é um homem íntegro.",
        dailyPractice: "Identifique um único hábito frouxo de hoje e substitua-o imediatamente por um ato de precisão e pontualidade.",
        inquiry: "Seus hábitos diários atuais sustentam o homem que você quer ser daqui a 5 anos?",
        actionSuggestion: "Cumprir a rotina sem nenhuma exceção nas próximas 24 horas."
    },
    {
        id: "p83",
        trail: "mente",
        trailLabel: "Mente & Autodomínio",
        quote: "Até você se tornar consciente, o inconsciente governará sua vida e você o chamará de destino.",
        author: "Carl Jung",
        work: "Arquétipos e o Inconsciente Coletivo",
        isClassic: true,
        explanation: "Pessoas fracas culpam a 'má sorte' ou 'o destino' pelos mesmos erros que repetem em loop. Quando você traz para a luz suas carências, seus traumas e sua preguiça, você finalmente assume o controle da direção da sua vida.",
        dailyPractice: "Pare e examine: qual padrão destrutivo você repete há anos culpando o destino ou terceiros?",
        inquiry: "O que você tem varrido para debaixo do tapete da sua mente por covardia de encarar?",
        actionSuggestion: "Registrar a verdade sem rodeios e tomar uma decisão corretiva hoje."
    },
    {
        id: "p84",
        trail: "mente",
        trailLabel: "Mente & Autodomínio",
        quote: "Aquele que conhece os outros é sábio; aquele que conhece a si mesmo é iluminado. Aquele que vence os outros é forte; aquele que vence a si mesmo é invencível.",
        author: "Lao Tsé",
        work: "Tao Te Ching",
        isClassic: true,
        explanation: "Disputar com o mundo lá fora e tentar provar superioridade a terceiros é ilusão infantil. A única vitória duradoura e que impõe respeito supremo é a vitória sobre os seus próprios caprichos, preguiça e descontrole.",
        dailyPractice: "Abandone qualquer discussão hoje para provar que está certo; guarde sua energia para vencer a si mesmo no trabalho.",
        inquiry: "Onde você tem gasto energia tentando controlar os outros enquanto negligencia o controle de si mesmo?",
        actionSuggestion: "Silenciar o ímpeto de retrucar e canalizar o foco no autoaperfeiçoamento."
    },
    {
        id: "p85",
        trail: "mente",
        trailLabel: "Mente & Autodomínio",
        quote: "A felicidade e a firmeza da sua vida dependem exclusivamente da qualidade dos seus pensamentos.",
        author: "Marco Aurélio",
        work: "Meditações (Livro IV)",
        isClassic: true,
        explanation: "O mundo exterior não tem o poder de manchar sua alma a menos que você consinta com pensamentos degradantes e queixas covardes. Seus pensamentos são a tintura que colore sua existência: pense com dignidade e você viverá com dignidade.",
        dailyPractice: "Vigie seus pensamentos durante o dia: ao notar murmuração, substitua imediatamente por uma postura de agradecimento austero e ação.",
        inquiry: "Que tipo de tintura mental você tem derramado sobre o seu dia a dia?",
        actionSuggestion: "Bloquear pensamentos de vitimismo no instante exato em que surgirem."
    },
    {
        id: "p86",
        trail: "mente",
        trailLabel: "Mente & Autodomínio",
        quote: "Sofremos com muito mais frequência na imaginação do que na realidade.",
        author: "Sêneca",
        work: "Cartas a Lucílio (Carta XIII)",
        isClassic: true,
        explanation: "A maior parte da sua ansiedade é alimentada por monstros imaginários que nunca se concretizarão. Você antecipa tragédias, desenha humilhações na cabeça e vive exausto por guerras que nunca existiram fora do seu cérebro.",
        dailyPractice: "Ao sentir o aperto da ansiedade, pergunte-se com firmeza: 'Essa desgraça está acontecendo agora neste exato segundo ou é apenas um delírio da minha cabeça?'.",
        inquiry: "Quantos dos seus medos dos últimos 12 meses realmente se materializaram?",
        actionSuggestion: "Puxar o foco 100% para a tarefa física e tangível que está à sua frente agora."
    },
    {
        id: "p87",
        trail: "mente",
        trailLabel: "Mente & Autodomínio",
        quote: "Nenhum homem é livre se não é senhor absoluto de si mesmo.",
        author: "Epicteto",
        work: "Discursos",
        isClassic: true,
        explanation: "Você pode ter dinheiro, status e poder formal, mas se não consegue largar o celular, se não resiste a um doce e se desmancha com um comentário hostil, você é um escravo acorrentado aos próprios impulsos.",
        dailyPractice: "Treine o 'não' para si mesmo. Recuse deliberadamente um prazer momentâneo hoje apenas para reafirmar quem manda.",
        inquiry: "Qual vício ou impulso ainda te trata como prisioneiro?",
        actionSuggestion: "Cortar esse impulso durante todo o dia de hoje sem negociar."
    },
    {
        id: "p88",
        trail: "mente",
        trailLabel: "Mente & Autodomínio",
        quote: "Aquele que conquista a si mesmo é mais nobre e tem mais peso do que aquele que conquista mil homens em mil batalhas.",
        author: "Confúcio",
        work: "Analectos",
        isClassic: true,
        explanation: "É possível vencer exércitos com armas e estratégia, mas ser derrotado no quarto escuro pela própria indolência e fraqueza moral. O homem de valor supremo é aquele cuja retidão não vacila mesmo sob pressão extrema.",
        dailyPractice: "Faça o que prometeu a si mesmo que faria mesmo que esteja cansado e sem nenhuma vontade.",
        inquiry: "Você costuma quebrar promessas feitas a si mesmo com facilidade?",
        actionSuggestion: "Honrar sua palavra interna como se fosse uma lei gravada em pedra."
    },
    {
        id: "p89",
        trail: "mente",
        trailLabel: "Mente & Autodomínio",
        quote: "Uma vida sem reflexão e autoexame não vale a pena ser vivida.",
        author: "Sócrates",
        work: "Apologia de Sócrates",
        isClassic: true,
        explanation: "Viver no piloto automático, sendo jogado pelas opiniões alheias e pelas tentações do mundo moderno, é viver como gado. O guerreiro para diariamente para pesar suas ações, medir seus erros e realinhar sua bússola moral.",
        dailyPractice: "Reserve 5 minutos antes de dormir no escuro absoluto para revisar o seu dia e apontar suas falhas com honestidade cirúrgica.",
        inquiry: "Com que frequência você para tudo para examinar a qualidade do seu caráter?",
        actionSuggestion: "Executar o autoexame desta noite sem piedade para com suas falhas."
    },
    {
        id: "p90",
        trail: "esforco",
        trailLabel: "Esforço & Disciplina",
        quote: "O crédito pertence ao homem que está na arena, cujo rosto está manchado de poeira, suor e sangue; que erra repetidamente, mas se atreve a feitos grandiosos.",
        author: "Theodore Roosevelt",
        work: "Discurso na Sorbonne ('O Homem na Arena')",
        isClassic: true,
        explanation: "Não dê a mínima para o crítico sentado na arquibancada comendo pipoca e apontando como o atleta tropeçou. O homem que merece honra é aquele que sangra no campo de batalha enquanto os covardes apenas observam.",
        dailyPractice: "Ignore sumariamente qualquer crítica vinda de pessoas que não estão construindo nada na vida.",
        inquiry: "Você tem deixado de entrar na arena por medo do julgamento de espectadores estéreis?",
        actionSuggestion: "Dar o primeiro passo público em um projeto ousado sem pedir aprovação a ninguém."
    },
    {
        id: "p91",
        trail: "esforco",
        trailLabel: "Esforço & Disciplina",
        quote: "Hoje é a sua vitória sobre o seu eu de ontem; amanhã será a sua vitória sobre homens de menor disciplina.",
        author: "Miyamoto Musashi",
        work: "O Livro dos Cinco Anéis (Livro da Terra)",
        isClassic: true,
        explanation: "Não compare seu início com o meio de outros. Seu único adversário a ser decapitado todos os dias ao nascer do sol é a versão fraca, preguiçosa e complacente de você mesmo de ontem.",
        dailyPractice: "Vença seu eu de ontem aumentando uma repetição, trabalhando 30 minutos a mais ou tolerando mais desconforto.",
        inquiry: "Em que ponto exato você foi melhor hoje do que foi ontem?",
        actionSuggestion: "Superar sua marca anterior na tarefa mais dura do seu dia."
    },
    {
        id: "p92",
        trail: "esforco",
        trailLabel: "Esforço & Disciplina",
        quote: "As raízes do aprendizado e da disciplina são amargas, mas os frutos colhidos são extraordinariamente doces.",
        author: "Aristóteles",
        work: "Fragmentos Filosóficos",
        isClassic: true,
        explanation: "Esperar que a disciplina seja agradável no momento da execução é delírio de amador. A disciplina dói, queima e exige sacrifício; a doçura só vem quando você olha para trás e vê o homem inabalável que construiu.",
        dailyPractice: "Abrace a amargura do esforço atual com a certeza inegociável da colheita gloriosa que virá.",
        inquiry: "Você desiste no primeiro gosto amargo do esforço ou mastiga a dificuldade até vencer?",
        actionSuggestion: "Permanecer na tarefa árdua até concluí-la, sem fugir para distrações fáceis."
    },
    {
        id: "p93",
        trail: "esforco",
        trailLabel: "Esforço & Disciplina",
        quote: "Não é porque as coisas são difíceis que não temos coragem; é porque não temos coragem que elas se tornam difíceis.",
        author: "Sêneca",
        work: "Cartas a Lucílio (Carta CIV)",
        isClassic: true,
        explanation: "A montanha só parece intransponível porque você fica na base tremendo de medo e inventando desculpas. Quando você coloca a mochila nas costas e dá os primeiros dez passos firmes, percebe que a dificuldade era ilusão da sua mente acovardada.",
        dailyPractice: "Ataque a tarefa mais temida da sua semana sem pensar nem planejar em excesso: apenas ataque.",
        inquiry: "O que você tem adiado fingindo que é 'muito complexo' quando na verdade só falta coragem?",
        actionSuggestion: "Iniciar essa tarefa imediatamente sem hesitar mais nenhum minuto."
    },
    {
        id: "p94",
        trail: "esforco",
        trailLabel: "Esforço & Disciplina",
        quote: "A mão negligente e preguiçosa conduz à miséria, mas a mão diligente do homem focado constrói riquezas e soberania.",
        author: "Rei Salomão",
        work: "Provérbios 10:4",
        isClassic: true,
        explanation: "Não existe mágica, sorte ou atalho divino que salve um homem que trabalha de corpo mole. Quem coloca as mãos no arado com intensidade e constância atrai autoridade e prosperidade inevitáveis.",
        dailyPractice: "Execute seu trabalho hoje como se o seu futuro dependesse exclusivamente da perfeição desse expediente.",
        inquiry: "Você está trabalhando com vigor total ou apenas fingindo esforço para cumprir tabela?",
        actionSuggestion: "Entregar o dobro de foco e zero distrações durante o expediente de hoje."
    },
    {
        id: "p95",
        trail: "esforco",
        trailLabel: "Esforço & Disciplina",
        quote: "Não lamente o que já fez. Não guarde arrependimentos inúteis; corrija a rota e avance com ferocidade.",
        author: "Miyamoto Musashi",
        work: "Dokkōdō (A Via da Autossuficiência)",
        isClassic: true,
        explanation: "O guerreiro não fica choramingando sobre cortes sofridos ou golpes errados na batalha anterior. Se errou, recolha a lição em um segundo, ajuste a empunhadura da espada e golpeie de novo com mais precisão.",
        dailyPractice: "Se falhou hoje em alguma meta, não gaste 10 minutos se lamentando: levante-se agora e recomece.",
        inquiry: "Quanto tempo útil você perdeu nesta semana se martirizando por deslizes passados?",
        actionSuggestion: "Encerrar o luto pelo erro e partir para a próxima ação com ímpeto redobrado."
    },
    {
        id: "p96",
        trail: "esforco",
        trailLabel: "Esforço & Disciplina",
        quote: "No meio do caos absoluto também existe oportunidade, mas ela só se entrega ao soldado que treinou na calmaria.",
        author: "Sun Tzu",
        work: "A Arte da Guerra",
        isClassic: true,
        explanation: "Crises, demissões e problemas inesperados destroem os despreparados, mas alavancam os homens de aço. Quem passa os dias de paz treinando duro encontra nas tempestades o momento perfeito para consolidar sua liderança.",
        dailyPractice: "Aproveite os dias calmos para estudar, forjar reservas e treinar pesado, em vez de relaxar na indolência.",
        inquiry: "Você estaria pronto se uma grande crise financeira ou pessoal batesse na sua porta hoje?",
        actionSuggestion: "Reforçar sua rotina de estudos técnicos e preparação hoje mesmo."
    },
    {
        id: "p97",
        trail: "esforco",
        trailLabel: "Esforço & Disciplina",
        quote: "Você acha que pode se tornar um sábio ou um vencedor mantendo a mesma moleza, comendo e bebendo do mesmo jeito frouxo de sempre?",
        author: "Epicteto",
        work: "Enchiridion (Manual de Epicteto)",
        isClassic: true,
        explanation: "Você quer os louros da vitória mas chora diante da renúncia. É impossível viver como a manada e querer colher resultados de elite. A grandeza cobra pedágio à vista e não aceita parcelamento em desculpas.",
        dailyPractice: "Corte um conforto excessivo hoje (como banho quente demais, lanches inúteis ou horas de sofá).",
        inquiry: "O que você precisa sacrificar hoje para pagar o preço da sua evolução?",
        actionSuggestion: "Substituir a comodidade pelo desconforto voluntário e produtivo."
    },
    {
        id: "p98",
        trail: "cicatrizes",
        trailLabel: "Cicatrizes & Erros",
        quote: "Eu não sou aquilo que aconteceu comigo; eu sou aquilo que escolhi me tornar apesar de tudo o que me feriu.",
        author: "Carl Jung",
        work: "Memórias, Sonhos, Reflexões",
        isClassic: true,
        explanation: "Sua infância difícil, suas desilusões amorosas ou a falta de apoio familiar não são uma sentença eterna; são apenas o ponto de partida do seu épico pessoal. O homem de valor toma suas cicatrizes e as transforma em armadura.",
        dailyPractice: "Pare de contar sua história como uma tragédia de vítima e comece a contá-la como a forja de um guerreiro.",
        inquiry: "Você ainda se esconde atrás de dores antigas para justificar seu fracasso presente?",
        actionSuggestion: "Assumir responsabilidade total pelo seu presente e parar de citar o passado como muleta."
    },
    {
        id: "p99",
        trail: "cicatrizes",
        trailLabel: "Cicatrizes & Erros",
        quote: "Aquele que tem um porquê forte o suficiente para viver pode suportar e triunfar sobre quase qualquer como.",
        author: "Friedrich Nietzsche",
        work: "Crepúsculo dos Ídolos",
        isClassic: true,
        explanation: "Quem tem um propósito inabalável — proteger a família, honrar a Deus, construir um legado duradouro — não se desmancha com noites mal dormidas, cansaço físico ou críticas infundadas. O propósito converte veneno em combustível.",
        dailyPractice: "Escreva em uma linha clara qual é o seu motivo sagrado para lutar. Releia quando a fraqueza tentar te derrubar.",
        inquiry: "Seu propósito é grande o suficiente para te tirar da cama sem precisar de despertador?",
        actionSuggestion: "Escrever seu juramento de propósito e deixá-lo à vista na sua mesa de trabalho."
    },
    {
        id: "p100",
        trail: "cicatrizes",
        trailLabel: "Cicatrizes & Erros",
        quote: "Quando já não somos capazes de mudar uma situação dolorosa, somos convocados pelo destino a mudar a nós mesmos.",
        author: "Viktor Frankl",
        work: "Em Busca de Sentido",
        isClassic: true,
        explanation: "Bater a cabeça na parede exigindo que as circunstâncias externas mudem é pura imaturidade. Se a perda aconteceu e o prejuízo é irreversível, a única saída honrosa é expandir a sua envergadura moral e se tornar maior que o problema.",
        dailyPractice: "Diante de um fato consumado que te desagrada, pergunte-se: 'Que virtude sou forçado a desenvolver para suportar isso com classe?'.",
        inquiry: "Qual situação imutável você continua resistindo em vez de crescer através dela?",
        actionSuggestion: "Aceitar a perda e focar 100% no aprimoramento da sua postura."
    },
    {
        id: "p101",
        trail: "cicatrizes",
        trailLabel: "Cicatrizes & Erros",
        quote: "O impedimento para a ação avança a ação. O que está no caminho torna-se o caminho.",
        author: "Marco Aurélio",
        work: "Meditações (Livro V)",
        isClassic: true,
        explanation: "Para a mente disciplinada, não existem bloqueios definitivos; qualquer obstáculo é novo combustível jogado na fogueira. Uma traição te ensina discernimento; uma derrota te ensina humildade; um atraso te ensina paciência inabalável.",
        dailyPractice: "Toda vez que algo der errado hoje, diga: 'Excelente. Esse é o meu treino de hoje' e contorne com astúcia.",
        inquiry: "Qual problema atual você pode transformar no seu maior professor?",
        actionSuggestion: "Encontrar a oportunidade de crescimento escondida na sua maior dor atual."
    },
    {
        id: "p102",
        trail: "cicatrizes",
        trailLabel: "Cicatrizes & Erros",
        quote: "Nenhum homem pode entrar duas vezes no mesmo rio, pois nem o rio é o mesmo, e nem o homem continua sendo aquele mesmo.",
        author: "Heráclito",
        work: "Fragmentos",
        isClassic: true,
        explanation: "A vida é uma correnteza implacável e nada permanece estático. Tentar congelar momentos, manter ressentimentos antigos ou querer que tudo continue confortável é lutar contra a própria física do universo. Mude, adapte-se e flua como água de aço.",
        dailyPractice: "Desapegue de uma mágoa antiga entendendo que a pessoa que te feriu no passado já nem é a mesma hoje.",
        inquiry: "Você ainda está tentando navegar em águas que já secaram há anos?",
        actionSuggestion: "Perdoar internamente para liberar sua própria mente e caminhar leve."
    },
    {
        id: "p103",
        trail: "cicatrizes",
        trailLabel: "Cicatrizes & Erros",
        quote: "O fogo ardente prova o ouro de verdade; a adversidade brutal prova os homens fortes e dignos.",
        author: "Sêneca",
        work: "Da Providência",
        isClassic: true,
        explanation: "Ninguém descobre o valor de um guerreiro em tempos de calmaria e banquete. É no fogo da tempestade, na escassez e no abandono que a têmpera do caráter é testada e o ouro é purificado de todas as impurezas da vaidade.",
        dailyPractice: "Ao passar por um aperto financeiro ou emocional, agradeça pela oportunidade de provar a si mesmo do que você é feito.",
        inquiry: "Você enxerga suas dificuldades como castigo injusto ou como o forno onde seu aço é forjado?",
        actionSuggestion: "Manter a postura ereta e o olhar firme mesmo sob pressão extrema."
    },
    {
        id: "p104",
        trail: "cicatrizes",
        trailLabel: "Cicatrizes & Erros",
        quote: "A nossa maior honra e glória não consiste em nunca cair, mas em nos levantarmos com mais força a cada queda.",
        author: "Confúcio",
        work: "Analectos",
        isClassic: true,
        explanation: "A perfeição é uma farsa inventada por covardes que nunca tentaram nada de grande porte. Todos os gigantes da história tombaram de joelhos; o que os separou da lama foi a recusa terminante em permanecer caídos.",
        dailyPractice: "Se escorregou hoje em alguma disciplina, limpe os joelhos na mesma hora e retome a marcha com dignidade.",
        inquiry: "Você fica deprimido remoendo a queda ou foca a energia total em se erguer?",
        actionSuggestion: "Levantar-se sem autopiedade e cumprir a próxima tarefa com honra."
    },
    {
        id: "p105",
        trail: "silencio",
        trailLabel: "O Poder do Silêncio",
        quote: "Aquele que verdadeiramente sabe, não fala em excesso. Aquele que fala pelos cotovelos, nada sabe de real profundidade.",
        author: "Lao Tsé",
        work: "Tao Te Ching",
        isClassic: true,
        explanation: "Homens que realizam coisas monumentais estão ocupados demais executando para ficar postando discursos inflamados ou contando vantagens em rodinhas. Quem sabe de verdade carrega o silêncio sereno dos que dominam a arte da ação.",
        dailyPractice: "Não conte para ninguém o que você vai fazer hoje; apenas faça e deixe que os resultados façam todo o barulho.",
        inquiry: "Você fala mais do que executa? Quanto dos seus planos você queima contando aos outros?",
        actionSuggestion: "Fazer um voto de sigilo absoluto sobre suas metas nos próximos 30 dias."
    },
    {
        id: "p106",
        trail: "silencio",
        trailLabel: "O Poder do Silêncio",
        quote: "Até o tolo, quando guarda o silêncio, é tido por homem sábio; quando fecha os lábios, passa por prudente.",
        author: "Rei Salomão",
        work: "Provérbios 17:28",
        isClassic: true,
        explanation: "A língua desenfreada é o túmulo de qualquer reputação. Abrir a boca a todo instante para emitir opiniões sobre assuntos que você não domina é a forma mais rápida de expor sua frouxidão e ignorância.",
        dailyPractice: "Em qualquer reunião ou conversa hoje, seja o último a falar. Ouça tudo, absorva e fale apenas o essencial.",
        inquiry: "Quantas vezes você se meteu em confusão por não ter segurado a língua a tempo?",
        actionSuggestion: "Exercitar o silêncio reflexivo antes de emitir qualquer parecer hoje."
    },
    {
        id: "p107",
        trail: "silencio",
        trailLabel: "O Poder do Silêncio",
        quote: "Muitas vezes na vida me arrependi amargamente por ter falado; nunca me arrependi por ter permanecido em silêncio.",
        author: "Sêneca",
        work: "Cartas a Lucílio",
        isClassic: true,
        explanation: "As palavras, depois que saem da boca, ganham vida própria e não podem mais ser recolhidas. A fofoca, a reação desmedida e a confidência entregue ao homem errado são armas que você entrega nas mãos dos seus inimigos.",
        dailyPractice: "Quando a emoção mandar você mandar um áudio desaforado ou uma mensagem ríspida, engula em seco e desligue a tela por 1 hora.",
        inquiry: "Qual prejuízo recente você teve por falar mais do que a sabedoria permitia?",
        actionSuggestion: "Apagar rascunhos de mensagens impulsivas e guardar seu silêncio como poder."
    },
    {
        id: "p108",
        trail: "silencio",
        trailLabel: "O Poder do Silêncio",
        quote: "A sábia natureza nos agraciou com dois ouvidos e apenas uma boca para que possamos ouvir o dobro do que ousamos falar.",
        author: "Epicteto",
        work: "Fragmentos",
        isClassic: true,
        explanation: "Quem fala sem parar não aprende nada de novo, apenas regurgita o que já sabe. O homem prudente presta atenção nas entrelinhas, observa as intenções alheias e cala para se abastecer de inteligência e discernimento.",
        dailyPractice: "Em sua próxima conversa, faça perguntas perspicazes e escute com 100% de atenção sem interromper o interlocutor.",
        inquiry: "Você escuta para aprender ou escuta apenas esperando a sua vez de falar?",
        actionSuggestion: "Praticar a escuta atenta e calada durante todas as interações de hoje."
    },
    {
        id: "p109",
        trail: "silencio",
        trailLabel: "O Poder do Silêncio",
        quote: "Seja rigorosamente calado, ou diga palavras que tenham mais peso e valor do que o próprio silêncio sagrado.",
        author: "Pitágoras",
        work: "Versos Áureos",
        isClassic: true,
        explanation: "Quebrar o silêncio para soltar piadas inconvenientes, futilidades de celebridades ou reclamações de trânsito é poluição da alma. Se o que você tem a dizer não edifica, não protege e não ilumina, mantenha os dentes cerrados.",
        dailyPractice: "Passe a manhã de hoje sem falar futilidades; fale apenas o estritamente necessário para trabalhar e viver com ordem.",
        inquiry: "Suas conversas diárias elevam o ambiente ou arrastam todo mundo para a futilidade?",
        actionSuggestion: "Cortar conversas vazias e focar na introspecção produtiva."
    },
    {
        id: "p110",
        trail: "silencio",
        trailLabel: "O Poder do Silêncio",
        quote: "Quanta serenidade ganha aquele que não dá a mínima para o que o vizinho diz, faz ou pensa, mas cuida apenas de suas próprias ações.",
        author: "Marco Aurélio",
        work: "Meditações (Livro IV)",
        isClassic: true,
        explanation: "Ficar vigiando a vida alheia nas redes sociais, comentando fofocas ou se preocupando se fulano gosta de você é suicídio de produtividade. Olhe para a sua própria forja, limpe o seu quintal e deixe o mundo rodar em paz.",
        dailyPractice: "Não abra os stories de ninguém hoje. Use esse tempo para ler um livro ou adiantar o trabalho da semana.",
        inquiry: "Quanta energia mental preciosa você tem vazado cuidando da vida de quem não te sustenta?",
        actionSuggestion: "Fazer um jejum absoluto de redes sociais e focar na sua própria jornada."
    },
    {
        id: "p111",
        trail: "silencio",
        trailLabel: "O Poder do Silêncio",
        quote: "Que seus planos permaneçam escuros e impenetráveis como a noite mais densa; e quando você se mover, caia como um raio devastador.",
        author: "Sun Tzu",
        work: "A Arte da Guerra",
        isClassic: true,
        explanation: "O segredo da vitória militar e nos negócios é o sigilo absoluto da preparação e a rapidez implacável da execução. O tolo avisa o que vai fazer com semanas de antecedência; o mestre age de surpresa quando ninguém espera.",
        dailyPractice: "Trabalhe em um objetivo ambicioso sem revelar nada a ninguém até que o resultado esteja 100% pronto e entregue.",
        inquiry: "Você sente a necessidade imatura de postar 'spoiler' das suas metas na internet?",
        actionSuggestion: "Construir em sigilo profundo até a entrega do resultado final."
    },
    {
        id: "p112",
        trail: "circulo",
        trailLabel: "Círculo de Caráter",
        quote: "A virtude de um homem se revela com nitidez cristalina na forma como ele escolhe e honra os amigos que mantém por perto.",
        author: "Aristóteles",
        work: "Ética a Nicômaco (Livro VIII)",
        isClassic: true,
        explanation: "Diga-me quem você tolera na sua mesa de jantar e eu direi onde você terminará a sua vida. Amizades baseadas apenas em bebedeiras e piadas vazias apodrecem o seu senso moral; amizades de virtude te puxam para o topo da montanha.",
        dailyPractice: "Avalie com quem você mais conversa durante o dia: essas pessoas te impulsionam para o rigor ou te puxam para a preguiça?",
        inquiry: "Você mantém amigos por hábito ou por admiração real ao caráter deles?",
        actionSuggestion: "Afastar-se educadamente de conversas que puxam seus padrões para baixo."
    },
    {
        id: "p113",
        trail: "circulo",
        trailLabel: "Círculo de Caráter",
        quote: "Associe-se rigorosamente àqueles que podem torná-lo melhor. Acolha com paciência aqueles que você tem a capacidade de edificar.",
        author: "Sêneca",
        work: "Cartas a Lucílio (Carta VII)",
        isClassic: true,
        explanation: "A proximidade humana funciona por osmose: os vícios, o sarcasmo e a moleza são tão contagiosos quanto uma peste biológica. Esteja perto de mentes afiadas que te constrangem a ser melhor pela própria presença delas.",
        dailyPractice: "Busque contato com um mentor, leia autores que desafiem seu intelecto e não aceite a mediocridade ao seu redor.",
        inquiry: "Quem no seu círculo atual te desafia intelectualmente e moralmente?",
        actionSuggestion: "Procurar a convivência de pessoas que vivem em padrões mais elevados que os seus."
    },
    {
        id: "p114",
        trail: "circulo",
        trailLabel: "Círculo de Caráter",
        quote: "Nunca estabeleça laços íntimos com um indivíduo que não seja superior a você em virtude, retidão e lealdade.",
        author: "Confúcio",
        work: "Analectos",
        isClassic: true,
        explanation: "Andar com homens frouxos achando que você vai 'salvá-los' é a ingenuidade mais comum do jovem. Na maioria das vezes, o peso da mediocridade deles te arrasta para o buraco muito antes de você conseguir erguê-los.",
        dailyPractice: "Seja implacável na seleção de quem tem acesso às suas confidências e aos seus planos futuros.",
        inquiry: "Você tem carregado fardos emocionais de pessoas folgadas que não querem mudar de vida?",
        actionSuggestion: "Estabelecer limites claros e cortar o acesso de sanguessugas emocionais."
    },
    {
        id: "p115",
        trail: "circulo",
        trailLabel: "Círculo de Caráter",
        quote: "Se você passar tempo demais convivendo com quem está coberto de lama e fuligem, logo você também ficará sujo, ainda que tente se esquivar.",
        author: "Epicteto",
        work: "Discursos",
        isClassic: true,
        explanation: "Você pode ter a melhor educação do mundo, mas se trabalhar ou se divertir rodeado de pessoas maliciosas, invejosas e desonestas, o seu vocabulário, seus hábitos e suas decisões começarão a se degradar sem você notar.",
        dailyPractice: "Faça uma faxina silenciosa nos seus grupos de mensagens: saia daqueles que só compartilham baixarias e fofocas.",
        inquiry: "Quais ambientes do seu dia a dia estão sujando sua mente de fuligem desnecessária?",
        actionSuggestion: "Abandonar grupos inúteis e proteger a santidade do seu foco mental."
    },
    {
        id: "p116",
        trail: "circulo",
        trailLabel: "Círculo de Caráter",
        quote: "Aquele que caminha lado a lado com os sábios se tornará sábio; mas o companheiro dos homens tolos será irremediavelmente destruído.",
        author: "Rei Salomão",
        work: "Provérbios 13:20",
        isClassic: true,
        explanation: "Essa é uma das leis universais mais antigas e certeiras da história humana. Não tente reinventar a roda: quem anda com gente indisciplinada, que trai a própria família e vive no vício, inevitavelmente colherá a mesma ruína deles.",
        dailyPractice: "Dedique seu tempo livre hoje à sabedoria dos clássicos em vez de perder tempo com conversas de boteco.",
        inquiry: "Para onde os seus companheiros de hoje estão caminhando? Você quer chegar onde eles vão chegar?",
        actionSuggestion: "Escolher com precisão cirúrgica quem tem o privilégio de ter sua atenção hoje."
    },
    {
        id: "p117",
        trail: "circulo",
        trailLabel: "Círculo de Caráter",
        quote: "Ao amanhecer, diga a si mesmo: hoje cruzarei com intrometidos, ingratos, insolentes e invejosos. Eles são assim por ignorar o bem; mas eu conheço o bem e nada deles pode me ferir.",
        author: "Marco Aurélio",
        work: "Meditações (Livro II)",
        isClassic: true,
        explanation: "Esperar que o mundo seja repleto de anjos gentis é delírio que gera frustração crônica. Antecipe mentalmente o veneno dos outros: quando você já espera a grosseria e o egoísmo alheio, você não se surpreende e nem perde o equilíbrio.",
        dailyPractice: "Comece a manhã blindando sua mente contra as grosserias cotidianas que você fatalmente encontrará no dia.",
        inquiry: "Você ainda se magoa quando pessoas despreparadas agem como pessoas despreparadas?",
        actionSuggestion: "Manter a nobreza e a serenidade diante de qualquer grosseria hoje."
    },
    {
        id: "p118",
        trail: "circulo",
        trailLabel: "Círculo de Caráter",
        quote: "Como o cão que volta repetidamente ao seu próprio vômito, assim é o tolo que insiste em repetir a sua estultícia e seus velhos erros.",
        author: "Rei Salomão",
        work: "Provérbios 26:11",
        isClassic: true,
        explanation: "Cair no mesmo erro pela vigésima vez, cair no mesmo papo da mesma pessoa que já te apunhalou ou voltar para o mesmo vício que te humilhou é comportamento animalesco. O homem de honra aprende na primeira porrada e nunca mais volta.",
        dailyPractice: "Corte de vez o canal com quem já te desrespeitou repetidamente. Não dê a terceira chance ao descaramento.",
        inquiry: "A qual velho vômito comportamental você ainda se sente tentado a retornar?",
        actionSuggestion: "Romper definitivamente com ciclos viciosos e falsas reconciliações."
    },
    {
        id: "p119",
        trail: "hombridade",
        trailLabel: "Hombridade & Peso",
        quote: "Homens covardes e de ânimo fraco não têm lugar na história que realmente vale a pena ser lembrada pelos que virão.",
        author: "Theodore Roosevelt",
        work: "Ensaios Políticos",
        isClassic: true,
        explanation: "A vida não pede licença e o tempo não perdoa os frouxos. Ser homem exige assumir encargos pesados, proteger os seus sem hesitação e ter a coragem de ficar de pé quando todo o restante do grupo se ajoelha diante do medo.",
        dailyPractice: "Tome a frente de um problema complexo na sua casa ou no seu trabalho e resolva sem pedir aplausos.",
        inquiry: "Onde você tem se acovardado esperando que outros tomem a atitude que caberia a você?",
        actionSuggestion: "Assumir a liderança e a solução do problema mais incômodo de hoje."
    },
    {
        id: "p120",
        trail: "hombridade",
        trailLabel: "Hombridade & Peso",
        quote: "Não perca mais nenhum minuto do seu tempo discutindo sobre o que um homem de bem deve ser. Levante-se e seja um.",
        author: "Marco Aurélio",
        work: "Meditações (Livro X)",
        isClassic: true,
        explanation: "O mundo moderno está cheio de filósofos de poltrona, teóricos da moral e palestrantes que não sustentam uma família e não cumprem uma promessa. Chega de debate estéril: materialize a virtude na sua pontualidade, na sua lealdade e no seu esforço.",
        dailyPractice: "Não dê conselhos a ninguém hoje a menos que seja solicitado; ensine apenas com a sua conduta impecável.",
        inquiry: "Você prega mais virtude do que realmente vive no sigilo do seu quarto?",
        actionSuggestion: "Viver com rigor absoluto sem postar lições de moral para os outros."
    },
    {
        id: "p121",
        trail: "hombridade",
        trailLabel: "Hombridade & Peso",
        quote: "A pressa infantil é um pecado contra o peso do caráter; a verdadeira nobreza exige passos firmes, olhar sereno e peso nas palavras.",
        author: "Sêneca",
        work: "Sobre a Brevidade da Vida",
        isClassic: true,
        explanation: "Homens que andam correndo desesperados, falando atropelado e buscando atalhos rápidos demonstram desespero e fraqueza interna. O homem maduro caminha com a calma de quem sabe exatamente para onde está marchando.",
        dailyPractice: "Caminhe com a postura ereta, ombros no lugar, fale com voz pausada e não demonstre desespero diante de prazos curtos.",
        inquiry: "Sua postura corporal transmite autoridade e serenidade ou ansiedade e fraqueza?",
        actionSuggestion: "Ajustar sua postura física e seu ritmo de fala para transmitir solidez e domínio."
    },
    {
        id: "p122",
        trail: "hombridade",
        trailLabel: "Hombridade & Peso",
        quote: "Quanto tempo mais você pretende esperar antes de exigir o melhor absoluto de si mesmo e cumprir sua dignidade?",
        author: "Epicteto",
        work: "Manual de Epicteto (Enchiridion 51)",
        isClassic: true,
        explanation: "Você diz que vai começar na próxima segunda-feira, no próximo mês ou no próximo ano. Enquanto você adia, os dias da sua juventude escorrem pelo ralo e a sua morte se aproxima a passos largos. Exija a excelência hoje ou morra medíocre.",
        dailyPractice: "Comece agora a cumprir aquele padrão que você vinha adiando para 'quando as coisas melhorarem'.",
        inquiry: "Quantos anos da sua vida você já desperdiçou na sala de espera da covardia?",
        actionSuggestion: "Impor a si mesmo a disciplina máxima a partir deste instante."
    },
    {
        id: "p123",
        trail: "hombridade",
        trailLabel: "Hombridade & Peso",
        quote: "A coragem é a mais nobre das virtudes humanas porque é ela que garante a existência de todas as outras quando o bicho pega.",
        author: "Aristóteles",
        work: "Ética a Nicômaco",
        isClassic: true,
        explanation: "Sem coragem, sua honestidade cai diante da primeira chantagem; sua lealdade cai diante do primeiro perigo; e sua disciplina cai diante do primeiro cansaço. A coragem é o alicerce de concreto armado sobre o qual todas as virtudes repousam.",
        dailyPractice: "Tome uma atitude desconfortável que você vem evitando por puro receio do confronto.",
        inquiry: "Onde a falta de coragem tem apodrecido suas outras qualidades?",
        actionSuggestion: "Enfrentar o desconforto e dizer a verdade que precisa ser dita com elegância e firmeza."
    },
    {
        id: "p124",
        trail: "hombridade",
        trailLabel: "Hombridade & Peso",
        quote: "O homem de integridade caminha com passos seguros; mas o homem que distorce os seus caminhos será fatalmente desmascarado.",
        author: "Rei Salomão",
        work: "Provérbios 10:9",
        isClassic: true,
        explanation: "Quem não deve não teme a escuridão, não teme mensagens chegando no celular e não vive sob a paranoia de ser descoberto. A integridade austera é o maior escudo de tranquilidade que um homem pode carregar na face da terra.",
        dailyPractice: "Seja 100% verdadeiro em todas as transações, valores e palavras do dia de hoje, sem nenhuma 'mentirinha de conveniência'.",
        inquiry: "Existe algo oculto na sua vida que te faria tremer se fosse exposto publicamente?",
        actionSuggestion: "Corrigir imediatamente qualquer desvio ético oculto antes que ele te destrua."
    },
    {
        id: "p125",
        trail: "hombridade",
        trailLabel: "Hombridade & Peso",
        quote: "O privilégio supremo de uma vida inteira é ter a ousadia de se tornar quem você realmente é, custe o que custar à sua comodidade.",
        author: "Carl Jung",
        work: "O Desenvolvimento da Personalidade",
        isClassic: true,
        explanation: "Passar a vida inteira fantasiado com as expectativas dos seus pais, dos seus amigos de infância ou da manada das redes sociais é morrer antes de ser sepultado. Forje a sua própria têmpera, banque suas escolhas e arque com o peso da sua liberdade.",
        dailyPractice: "Diga 'não' a um convite ou pedido que contrarie a sua bússola de prioridades para agradar aos outros.",
        inquiry: "Quanto de você mesmo você tem sacrificado apenas para ser aceito por pessoas que você nem admira?",
        actionSuggestion: "Recusar concessões que firam seus princípios e focar na sua rota."
    },
    {
        id: "p126",
        trail: "acao",
        trailLabel: "Sonhos na Ação",
        quote: "Saber não é suficiente; devemos aplicar com rigor. Querer não é suficiente; devemos fazer com as próprias mãos.",
        author: "Johann Wolfgang von Goethe",
        work: "Máximas e Reflexões",
        isClassic: true,
        explanation: "Você pode ter lido mil livros sobre estoicismo, musculação e negócios; se você não suar a camisa, não colocar dinheiro na mesa e não executar na prática, você sabe tanto quanto quem nunca abriu um livro. O saber sem a ação é o veneno dos tolos pretensiosos.",
        dailyPractice: "Pegue um conceito teórico que você estudou recentemente e transforme-o em uma ação física executada hoje.",
        inquiry: "Em que área da vida você tem se enganado acumulando teoria sem praticar nada?",
        actionSuggestion: "Executar o que já sabe em vez de comprar mais um curso ou livro que não vai aplicar."
    },
    {
        id: "p127",
        trail: "acao",
        trailLabel: "Sonhos na Ação",
        quote: "Pense com leveza em relação a si mesmo e com imensa profundidade em relação ao mundo e à sua missão.",
        author: "Miyamoto Musashi",
        work: "Dokkōdō",
        isClassic: true,
        explanation: "Não se leve a sério demais; mate o seu ego inflado. Você não é especial; você é apenas um homem que morrerá em breve. Mas leve a sua missão de proteger sua casa, aperfeiçoar seu ofício e honrar seu tempo com gravidade sagrada.",
        dailyPractice: "Ria de si mesmo quando cometer uma gafe banal e concentre todo o peso da sua atenção no projeto em andamento.",
        inquiry: "Seu ego tem atrapalhado seu progresso? Você se ofende facilmente com pequenas coisas?",
        actionSuggestion: "Desinflar a vaidade pessoal e aumentar o rigor com a entrega profissional."
    },
    {
        id: "p128",
        trail: "acao",
        trailLabel: "Sonhos na Ação",
        quote: "O guerreiro vitorioso triunfa em sua mente antes de ir para o combate; o guerreiro derrotado vai para o combate antes de ter vencido a si mesmo.",
        author: "Sun Tzu",
        work: "A Arte da Guerra",
        isClassic: true,
        explanation: "A batalha não é decidida quando a espada se choca com a espada, mas nos meses de preparo antecipado, planejamento de contingências e disciplina inabalável. Quem entra no jogo com dúvidas internas já entra meio derrotado.",
        dailyPractice: "Planeje o dia de amanhã na noite anterior nos mínimos detalhes. Acorde com a vitória já desenhada no papel.",
        inquiry: "Você inicia seus dias de forma reativa e desordenada ou com a estratégia da vitória pré-definida?",
        actionSuggestion: "Escrever o roteiro estratégico do próximo dia antes de se deitar."
    },
    {
        id: "p129",
        trail: "acao",
        trailLabel: "Sonhos na Ação",
        quote: "Não existe nenhum vento favorável para aquele marinheiro que não faz a menor ideia de para qual porto está navegando.",
        author: "Sêneca",
        work: "Cartas a Lucílio (Carta LXXI)",
        isClassic: true,
        explanation: "Se você não definiu com precisão milimétrica quais são seus alvos de saúde, patrimônio e virtude, qualquer oportunidade ruim parece tentadora e qualquer vento te arrasta para os recifes. Defina o porto e reme com sangue nos olhos.",
        dailyPractice: "Escreva em três tópicos claros: onde você estará financeiramente, fisicamente e moralmente em 24 meses.",
        inquiry: "Você tem um porto claro ou está apenas boiando nas marés das circunstâncias?",
        actionSuggestion: "Definir seus 3 objetivos inegociáveis e eliminar todas as distrações fora dessa rota."
    },
    {
        id: "p130",
        trail: "acao",
        trailLabel: "Sonhos na Ação",
        quote: "Lembre-se de quanto tempo você vem adiando isso. O seu tempo tem um limite intransponível; se não usá-lo para se iluminar, ele se extinguirá e você desaparecerá sem retorno.",
        author: "Marco Aurélio",
        work: "Meditações (Livro II)",
        isClassic: true,
        explanation: "A morte não é uma ameaça do futuro distante; ela já comeu todos os anos que você viveu até hoje. O tempo que você tem agora é uma concessão temporária. Trate cada hora como o que ela realmente é: um presente inestimável que nunca voltará.",
        dailyPractice: "Trabalhe hoje como se fosse o seu último expediente na face da terra: sem desculpas, sem preguiça e com capricho absoluto.",
        inquiry: "Se a morte batesse no seu ombro esta noite, você teria orgulho da forma como usou o dia de hoje?",
        actionSuggestion: "Honrar o tempo presente eliminando a futilidade e concluindo suas tarefas com excelência."
    },
    {
        id: "p131",
        trail: "acao",
        trailLabel: "Sonhos na Ação",
        quote: "Uma jornada de dez mil léguas começa sempre com um único e resoluto passo. Dê esse passo agora mesmo.",
        author: "Lao Tsé",
        work: "Tao Te Ching",
        isClassic: true,
        explanation: "Ficar paralisado olhando a imensidão do caminho só alimenta o monstro do medo. Pare de contemplar a montanha inteira: olhe para o chão sob os seus pés e dê o passo mais imediato com a firmeza de um guerreiro. O resto se revelará na caminhada.",
        dailyPractice: "Dê o primeiro passo prático na tarefa que você mais teme. Faça os primeiros 5 minutos sem parar.",
        inquiry: "Qual é o primeiro passo simples que você pode dar hoje para mudar sua realidade?",
        actionSuggestion: "Dar o primeiro passo sem hesitar nem olhar para trás."
    }
];

// ==========================================================================
// 2. SISTEMA DE EFEITOS SONOROS TÁTEIS (SFX ENGINE)
// ==========================================================================
class StoicSfxEngine {
    constructor() {
        this.ctx = null;
        this.enabled = true;
    }

    init() {
        if (!this.ctx) {
            const AudioCtx = window.AudioContext || window.webkitAudioContext;
            this.ctx = new AudioCtx();
        }
    }

    play(type = 'click') {
        if (!this.enabled) return;
        try {
            this.init();
            if (this.ctx.state === 'suspended') this.ctx.resume();

            const osc = this.ctx.createOscillator();
            const gain = this.ctx.createGain();
            osc.connect(gain);
            gain.connect(this.ctx.destination);

            const now = this.ctx.currentTime;

            if (type === 'click') {
                osc.type = 'sine';
                osc.frequency.setValueAtTime(320, now);
                osc.frequency.exponentialRampToValueAtTime(140, now + 0.05);
                gain.gain.setValueAtTime(0.08, now);
                gain.gain.exponentialRampToValueAtTime(0.001, now + 0.05);
                osc.start(now);
                osc.stop(now + 0.05);
            } else if (type === 'star') {
                osc.type = 'triangle';
                osc.frequency.setValueAtTime(587.33, now);
                osc.frequency.setValueAtTime(880, now + 0.06);
                gain.gain.setValueAtTime(0.12, now);
                gain.gain.exponentialRampToValueAtTime(0.001, now + 0.25);
                osc.start(now);
                osc.stop(now + 0.25);
            } else if (type === 'forge') {
                osc.type = 'sawtooth';
                osc.frequency.setValueAtTime(220, now);
                osc.frequency.exponentialRampToValueAtTime(80, now + 0.18);
                gain.gain.setValueAtTime(0.15, now);
                gain.gain.exponentialRampToValueAtTime(0.001, now + 0.2);
                osc.start(now);
                osc.stop(now + 0.2);
            } else if (type === 'complete') {
                osc.type = 'sine';
                osc.frequency.setValueAtTime(440, now);
                osc.frequency.exponentialRampToValueAtTime(659.25, now + 0.12);
                gain.gain.setValueAtTime(0.12, now);
                gain.gain.exponentialRampToValueAtTime(0.001, now + 0.3);
                osc.start(now);
                osc.stop(now + 0.3);
            } else if (type === 'bell') {
                osc.type = 'sine';
                osc.frequency.setValueAtTime(528, now);
                gain.gain.setValueAtTime(0.16, now);
                gain.gain.exponentialRampToValueAtTime(0.0001, now + 0.8);
                osc.start(now);
                osc.stop(now + 0.8);
            }
        } catch (e) {
            console.warn('SFX not allowed before interaction', e);
        }
    }
}

const sfx = new StoicSfxEngine();

// ==========================================================================
// 3. PERSISTÊNCIA & COMENTÁRIOS COMUNITÁRIOS (LOCALSTORAGE)
// ==========================================================================
const STORAGE = {
    USER_PRINCIPLES: 'mf_user_principles_v3',
    FAVORITES: 'mf_user_favorites_v3',
    JOURNAL: 'mf_user_journal_v3',
    MISSIONS: 'mf_user_missions_v3',
    COMMENTS: 'mf_user_comments_v3',
    STREAK: 'mf_user_streak_v3',
    SFX_ENABLED: 'mf_sfx_state'
};

function readStorage(key, fallback = []) {
    try {
        const data = localStorage.getItem(key);
        return data ? JSON.parse(data) : fallback;
    } catch (e) {
        return fallback;
    }
}

function writeStorage(key, value) {
    try {
        localStorage.setItem(key, JSON.stringify(value));
    } catch (e) {
        console.error("Erro ao salvar localStorage", e);
    }
}

// Estados carregados
let userPrinciples = readStorage(STORAGE.USER_PRINCIPLES, []);
let favorites = readStorage(STORAGE.FAVORITES, []);
let journalEntries = readStorage(STORAGE.JOURNAL, []);
let missions = readStorage(STORAGE.MISSIONS, []);
let commentsStore = readStorage(STORAGE.COMMENTS, {});
let streak = readStorage(STORAGE.STREAK, { count: 1, lastDate: new Date().toDateString() });
sfx.enabled = readStorage(STORAGE.SFX_ENABLED, true);

// Filtros ativos
let currentTrail = 'all';
let currentSearch = '';
let currentAuthorship = 'all'; // 'all', 'master', 'classics', 'user'
let currentForgeTheme = 'gold';
let activeModalPrinciple = null;
let activeCommentsPrincipleId = null;

// ==========================================================================
// 4. INICIALIZAÇÃO DA APLICAÇÃO
// ==========================================================================
document.addEventListener('DOMContentLoaded', () => {
    checkStreakUpdate();
    seedInitialComments();
    populateReferenceDropdown();
    bindEvents();
    initLockscreenNotifications();
    renderAllViews();
});

function checkStreakUpdate() {
    const today = new Date().toDateString();
    if (streak.lastDate !== today) {
        streak.count += 1;
        streak.lastDate = today;
        writeStorage(STORAGE.STREAK, streak);
    }
    const streakEl = document.getElementById('streak-counter');
    if (streakEl) streakEl.textContent = streak.count;
}

// Pre-semente de comentários sábios para enriquecer a experiência comunitária
function seedInitialComments() {
    if (Object.keys(commentsStore).length === 0) {
        commentsStore = {
            "p1": [
                { id: "c1", author: "Marcus L.", text: "Passei 3 anos me martirizando por uma empresa que quebrou. Só quando li essa verdade entendi que o passado não me devia nada. Me reergui e hoje tenho paz.", likes: 14, time: "Ontem" },
                { id: "c2", author: "Guerreiro da Forja", text: "Remoer o passado é alimentar um fantasma com a sua própria carne viva. Cortei de vez.", likes: 9, time: "Hoje" }
            ],
            "p8": [
                { id: "c3", author: "Thiago Rocha", text: "Disciplina não é sobre gostar de fazer; é sobre honrar a promessa que você fez quando estava motivado.", likes: 21, time: "2 dias atrás" }
            ],
            "p32": [
                { id: "c4", author: "Felipe Sêneca", text: "A dicotomia do controle de Marco Aurélio é o maior ansiolítico que existe. Se não depende de mim, viro as costas e trabalho no que posso.", likes: 18, time: "Hoje" }
            ],
            "p50": [
                { id: "c5", author: "Sensei Kai", text: "Musashi foi o maior espadachim do Japão não pelo braço, mas porque enxergava o combate na forma de amarrar o quimono. Perfeito.", likes: 11, time: "3 dias atrás" }
            ]
        };
        writeStorage(STORAGE.COMMENTS, commentsStore);
    }
}

function populateReferenceDropdown() {
    const select = document.getElementById('select-reference-principle');
    if (!select) return;

    select.innerHTML = '<option value="">-- Selecione uma máxima do acervo para se inspirar --</option>';
    BASE_PRINCIPLES.forEach((p, idx) => {
        const opt = document.createElement('option');
        opt.value = p.id;
        const shortTxt = p.quote.length > 65 ? p.quote.substring(0, 65) + '...' : p.quote;
        opt.textContent = `#${String(idx + 1).padStart(2, '0')} [${p.author}] - "${shortTxt}"`;
        select.appendChild(opt);
    });
}

// ==========================================================================
// 5. EVENT BINDINGS
// ==========================================================================
function bindEvents() {
    // Botão Global "+ Forjar Frase"
    const btnGlobalForge = document.getElementById('btn-open-global-forge');
    const fabMobile = document.getElementById('fab-forge-mobile');

    const openForgeFlow = () => {
        sfx.play('forge');
        switchTab('tab-forge');
        const forgeInput = document.getElementById('forge-text');
        if (forgeInput) {
            forgeInput.scrollIntoView({ behavior: 'smooth', block: 'center' });
            setTimeout(() => forgeInput.focus(), 300);
        }
    };

    if (btnGlobalForge) btnGlobalForge.addEventListener('click', openForgeFlow);
    if (fabMobile) fabMobile.addEventListener('click', openForgeFlow);

    // Toggle de Efeitos Sonoros
    const btnSfx = document.getElementById('btn-toggle-sfx');
    const sfxIcon = document.getElementById('sfx-icon');
    if (btnSfx) {
        if (!sfx.enabled) {
            btnSfx.classList.remove('active');
            if (sfxIcon) sfxIcon.className = 'ph-bold ph-speaker-slash';
        }
        btnSfx.addEventListener('click', () => {
            sfx.enabled = !sfx.enabled;
            writeStorage(STORAGE.SFX_ENABLED, sfx.enabled);
            if (sfx.enabled) {
                btnSfx.classList.add('active');
                if (sfxIcon) sfxIcon.className = 'ph-bold ph-speaker-high';
                sfx.play('star');
                showToast("Efeitos Sonoros Ativados", "ph-speaker-high");
            } else {
                btnSfx.classList.remove('active');
                if (sfxIcon) sfxIcon.className = 'ph-bold ph-speaker-slash';
                showToast("Efeitos Sonoros Silenciados", "ph-speaker-slash");
            }
        });
    }

    // Áudio Ambiente Estoico
    const btnAmbient = document.getElementById('btn-ambient-audio');
    const audioLabel = document.getElementById('audio-status-label');
    if (btnAmbient) {
        btnAmbient.addEventListener('click', () => {
            sfx.play('click');
            if (window.ambientSound) {
                const isPlaying = window.ambientSound.toggle();
                if (isPlaying) {
                    btnAmbient.classList.add('active');
                    if (audioLabel) audioLabel.textContent = "Tocando...";
                    showToast("Áudio de Foco Estoico Ativado", "ph-headphones");
                } else {
                    btnAmbient.classList.remove('active');
                    if (audioLabel) audioLabel.textContent = "Foco Zen";
                    showToast("Áudio de Foco Pausado", "ph-pause");
                }
            }
        });
    }

    // Busca em Tempo Real
    const searchInput = document.getElementById('input-search');
    const btnClearSearch = document.getElementById('btn-clear-search');
    if (searchInput) {
        searchInput.addEventListener('input', (e) => {
            currentSearch = e.target.value.toLowerCase().trim();
            if (btnClearSearch) btnClearSearch.style.display = currentSearch ? 'block' : 'none';
            renderLibrary();
        });
    }

    if (btnClearSearch) {
        btnClearSearch.addEventListener('click', () => {
            sfx.play('click');
            if (searchInput) searchInput.value = '';
            currentSearch = '';
            btnClearSearch.style.display = 'none';
            renderLibrary();
        });
    }

    const btnResetLib = document.getElementById('btn-reset-library');
    if (btnResetLib) {
        btnResetLib.addEventListener('click', () => {
            sfx.play('click');
            if (searchInput) searchInput.value = '';
            currentSearch = '';
            if (btnClearSearch) btnClearSearch.style.display = 'none';
            selectTrailFilter('all');
        });
    }

    // Filtros de Autoria (Todos / Mestre / Clássicos / Usuário)
    const authorPills = document.querySelectorAll('.author-pill');
    authorPills.forEach(pill => {
        pill.addEventListener('click', () => {
            sfx.play('click');
            authorPills.forEach(p => p.classList.remove('active'));
            pill.classList.add('active');
            currentAuthorship = pill.getAttribute('data-author');
            renderLibrary();
        });
    });

    // Chips das Trilhas
    const chips = document.querySelectorAll('.trail-chip');
    chips.forEach(chip => {
        chip.addEventListener('click', () => {
            sfx.play('click');
            const cat = chip.getAttribute('data-cat');
            selectTrailFilter(cat);
        });
    });

    // Navegação Inferior
    const navBtns = document.querySelectorAll('.nav-tab-btn');
    navBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            sfx.play('click');
            const target = btn.getAttribute('data-target');
            switchTab(target);
        });
    });

    // Botão Sorteio ("Inspirar Agora")
    const btnRandom = document.getElementById('btn-random-principle');
    if (btnRandom) {
        btnRandom.addEventListener('click', triggerRandomInspiration);
    }

    // Modo de Criação: Frase Livre vs Inspirada
    const originRadios = document.querySelectorAll('input[name="creation-origin-type"]');
    const boxReference = document.getElementById('box-select-reference');
    const previewRefTag = document.getElementById('preview-ref-tag');
    const previewRefText = document.getElementById('preview-ref-text');
    const selectRef = document.getElementById('select-reference-principle');

    originRadios.forEach(radio => {
        radio.addEventListener('change', (e) => {
            sfx.play('click');
            if (e.target.value === 'reference') {
                if (boxReference) boxReference.style.display = 'block';
                if (previewRefTag) previewRefTag.style.display = 'inline-flex';
                updateRefPreview();
            } else {
                if (boxReference) boxReference.style.display = 'none';
                if (previewRefTag) previewRefTag.style.display = 'none';
            }
        });
    });

    function updateRefPreview() {
        if (!selectRef) return;
        const selectedId = selectRef.value;
        if (selectedId) {
            const found = BASE_PRINCIPLES.find(p => p.id === selectedId);
            if (found && previewRefText) {
                previewRefText.textContent = `Inspirado em: ${found.author}`;
            }
        } else {
            if (previewRefText) previewRefText.textContent = 'Inspirado no Acervo';
        }
    }

    if (selectRef) {
        selectRef.addEventListener('change', () => {
            sfx.play('click');
            updateRefPreview();
        });
    }

    // Seletor de Tema
    const themeButtons = document.querySelectorAll('.btn-theme-choice');
    const livePreviewCard = document.getElementById('forge-live-preview');
    themeButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            sfx.play('click');
            themeButtons.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            currentForgeTheme = btn.getAttribute('data-theme');

            if (livePreviewCard) {
                livePreviewCard.className = `preview-card-render theme-${currentForgeTheme}`;
            }
        });
    });

    // Inputs Live Preview
    const forgeText = document.getElementById('forge-text');
    const forgeAuthor = document.getElementById('forge-author-name');
    const forgeCat = document.getElementById('forge-cat');
    const forgeOrigin = document.getElementById('forge-origin');
    const previewText = document.getElementById('preview-text-display');
    const previewAuthor = document.getElementById('preview-author-display');
    const previewCat = document.getElementById('preview-cat-display');
    const previewOrigin = document.getElementById('preview-origin-display');

    if (forgeText && previewText) {
        forgeText.addEventListener('input', (e) => {
            previewText.textContent = e.target.value.trim() ? `"${e.target.value}"` : '"O que você não assume como responsabilidade continuará te dominando."';
        });
    }

    if (forgeAuthor && previewAuthor) {
        forgeAuthor.addEventListener('input', (e) => {
            previewAuthor.textContent = e.target.value.trim() ? `— Por: ${e.target.value}` : '— Forjado por Você';
        });
    }

    if (forgeCat && previewCat) {
        forgeCat.addEventListener('change', (e) => {
            const labelMap = {
                mente: '🧠 Mente & Autodomínio',
                esforco: '💪 Esforço & Disciplina',
                cicatrizes: '🛡️ Cicatrizes & Erros',
                silencio: '🤫 O Poder do Silêncio',
                relacoes: '👥 Círculo de Caráter',
                hombridade: '🏛️ Hombridade & Peso',
                acao: '⚡ Sonhos na Ação',
                autoral: '🔥 Mandamento Autoral'
            };
            previewCat.textContent = labelMap[e.target.value] || '🔥 Mandamento Autoral';
        });
    }

    if (forgeOrigin && previewOrigin) {
        forgeOrigin.addEventListener('input', (e) => {
            previewOrigin.textContent = e.target.value.trim() ? `Cicatriz: ${e.target.value}` : 'Forjado na Prática';
        });
    }

    // Formulário de Criação da Forja
    const formForge = document.getElementById('form-forge-principle');
    if (formForge) {
        formForge.addEventListener('submit', handleCreateUserPrinciple);
    }

    // Download Preview PNG
    const btnDownloadPreview = document.getElementById('btn-download-preview-card');
    if (btnDownloadPreview) {
        btnDownloadPreview.addEventListener('click', () => {
            sfx.play('star');
            const quote = forgeText && forgeText.value.trim() ? forgeText.value.trim() : "O que você não assume como responsabilidade continuará te dominando.";
            const author = forgeAuthor && forgeAuthor.value.trim() ? forgeAuthor.value.trim() : "Guerreiro da Forja";
            const cat = forgeCat ? forgeCat.options[forgeCat.selectedIndex].text : "Mandamento Autoral";
            
            exportCardAsPngImage({
                quote: quote,
                author: author,
                category: cat,
                theme: currentForgeTheme
            });
        });
    }

    // Modal de Autoexame
    const btnCloseReflection = document.getElementById('btn-close-reflection');
    const modalOverlay = document.getElementById('modal-reflection');
    if (btnCloseReflection) btnCloseReflection.addEventListener('click', closeModalReflection);
    if (modalOverlay) {
        modalOverlay.addEventListener('click', (e) => {
            if (e.target === modalOverlay) closeModalReflection();
        });
    }

    const btnSaveReflect = document.getElementById('btn-save-reflection');
    if (btnSaveReflect) btnSaveReflect.addEventListener('click', handleSaveReflectionModal);

    // Modal de Comentários
    const btnCloseComments = document.getElementById('btn-close-comments');
    const modalComments = document.getElementById('modal-comments');
    if (btnCloseComments) btnCloseComments.addEventListener('click', closeModalComments);
    if (modalComments) {
        modalComments.addEventListener('click', (e) => {
            if (e.target === modalComments) closeModalComments();
        });
    }

    // Postar Comentário
    const formPostComment = document.getElementById('form-post-comment');
    if (formPostComment) formPostComment.addEventListener('submit', handlePostComment);

    // Criador Rápido de Missão
    const formQuickMission = document.getElementById('form-quick-mission');
    if (formQuickMission) {
        formQuickMission.addEventListener('submit', (e) => {
            e.preventDefault();
            const input = document.getElementById('quick-mission-input');
            const txt = input ? input.value.trim() : '';
            if (txt) {
                sfx.play('complete');
                addMission(txt, "Compromisso Direto");
                input.value = '';
                showToast("Contrato de 24 horas selado!", "ph-target");
            }
        });
    }
}

// ==========================================================================
// 6. NAVEGAÇÃO & FILTROS
// ==========================================================================
window.switchTab = function(targetId) {
    const navBtns = document.querySelectorAll('.nav-tab-btn');
    const panes = document.querySelectorAll('.tab-pane');

    navBtns.forEach(b => {
        if (b.getAttribute('data-target') === targetId) {
            b.classList.add('active');
        } else {
            b.classList.remove('active');
        }
    });

    panes.forEach(p => {
        if (p.id === targetId) {
            p.classList.add('active');
        } else {
            p.classList.remove('active');
        }
    });

    window.scrollTo({ top: 0, behavior: 'smooth' });

    if (targetId === 'tab-forge') renderUserPrinciples();
    if (targetId === 'tab-sanctuary') renderJournal();
    if (targetId === 'tab-missions') renderMissions();
    if (targetId === 'tab-favorites') renderFavorites();
};

function selectTrailFilter(category) {
    currentTrail = category;
    const chips = document.querySelectorAll('.trail-chip');
    chips.forEach(c => {
        if (c.getAttribute('data-cat') === category) {
            c.classList.add('active');
        } else {
            c.classList.remove('active');
        }
    });
    renderLibrary();
}

// ==========================================================================
// 7. RENDERIZAÇÃO: BIBLIOTECA DE PRINCÍPIOS (EXPANSÃO DIDÁTICA)
// ==========================================================================
function getAllPrinciples() {
    return [...BASE_PRINCIPLES, ...userPrinciples];
}

function updateCounters() {
    const all = getAllPrinciples();
    const counts = {
        all: all.length,
        mente: all.filter(p => p.trail === 'mente').length,
        esforco: all.filter(p => p.trail === 'esforco').length,
        cicatrizes: all.filter(p => p.trail === 'cicatrizes').length,
        silencio: all.filter(p => p.trail === 'silencio').length,
        relacoes: all.filter(p => p.trail === 'relacoes').length,
        hombridade: all.filter(p => p.trail === 'hombridade').length,
        acao: all.filter(p => p.trail === 'acao').length
    };

    Object.keys(counts).forEach(k => {
        const el = document.getElementById(`count-${k}`);
        if (el) el.textContent = counts[k];
    });

    const countAllPills = document.getElementById('count-all-pills');
    const countMasterPills = document.getElementById('count-master-pills');
    const countClassicsPills = document.getElementById('count-classics-pills');
    const countUserPills = document.getElementById('count-user-pills');

    if (countAllPills) countAllPills.textContent = all.length;
    if (countMasterPills) countMasterPills.textContent = BASE_PRINCIPLES.filter(p => !p.isClassic).length;
    if (countClassicsPills) countClassicsPills.textContent = BASE_PRINCIPLES.filter(p => p.isClassic).length;
    if (countUserPills) countUserPills.textContent = userPrinciples.length;
}

function renderLibrary() {
    const grid = document.getElementById('grid-principles');
    const empty = document.getElementById('library-empty');
    const counter = document.getElementById('counter-visible');
    if (!grid) return;

    grid.innerHTML = '';

    // Filtragem por Autoria
    let pool = [];
    if (currentAuthorship === 'all') pool = getAllPrinciples();
    else if (currentAuthorship === 'master') pool = BASE_PRINCIPLES.filter(p => !p.isClassic);
    else if (currentAuthorship === 'classics') pool = BASE_PRINCIPLES.filter(p => p.isClassic);
    else if (currentAuthorship === 'user') pool = userPrinciples;

    const list = pool.filter(item => {
        const matchTrail = currentTrail === 'all' || item.trail === currentTrail;
        const matchSearch = !currentSearch ||
            item.quote.toLowerCase().includes(currentSearch) ||
            item.trailLabel.toLowerCase().includes(currentSearch) ||
            (item.author && item.author.toLowerCase().includes(currentSearch)) ||
            (item.work && item.work.toLowerCase().includes(currentSearch)) ||
            (item.explanation && item.explanation.toLowerCase().includes(currentSearch));
        return matchTrail && matchSearch;
    });

    if (counter) counter.textContent = list.length;

    if (list.length === 0) {
        if (empty) empty.style.display = 'flex';
    } else {
        if (empty) empty.style.display = 'none';
        list.forEach((p, idx) => {
            const card = buildPrincipleCard(p, idx + 1, p.isUser);
            grid.appendChild(card);
        });
    }
}

function buildPrincipleCard(p, num, isUser = false) {
    const isFav = favorites.includes(p.id);
    const commentsList = commentsStore[p.id] || [];
    const commentsCount = commentsList.length;

    const card = document.createElement('article');
    card.className = 'principle-card';
    card.id = `principle-${p.id}`;

    const numFormat = String(num).padStart(3, '0');

    let refBadgeHtml = '';
    if (p.isClassic) {
        refBadgeHtml = `<span class="card-ref-badge" title="${p.work}"><i class="ph-bold ph-scroll"></i> Clássico</span>`;
    } else if (p.referenceQuote) {
        refBadgeHtml = `<span class="card-ref-badge" title="${p.referenceQuote}"><i class="ph-bold ph-link"></i> Ref. ao Acervo</span>`;
    }

    const authorDisplay = p.author || (isUser ? "Você" : "O Mestre");
    const workDisplay = p.work ? `<small>(${p.work})</small>` : '';

    card.innerHTML = `
        <div class="principle-card-top">
            <span class="trail-tag-badge">
                <i class="ph-bold ph-shield"></i> ${p.trailLabel || 'Princípio'}
            </span>
            ${refBadgeHtml}
            <span class="principle-seq">#${numFormat}</span>
        </div>

        <div class="principle-card-body">
            <p class="principle-quote">"${p.quote}"</p>
            <p class="principle-author-sig">
                <i class="ph-bold ph-feather"></i> ${authorDisplay} ${workDisplay}
            </p>

            <!-- Botão Sanfonado: Ver Explicação Didática -->
            <button class="btn-toggle-explain" onclick="toggleExplanation('${p.id}')" id="btn-toggle-${p.id}">
                <span><i class="ph-bold ph-book-open"></i> Explicação & Prática Diária</span>
                <i class="ph-bold ph-caret-down"></i>
            </button>

            <!-- Gaveta de Conteúdo Didático -->
            <div class="principle-deep-dive" id="deep-dive-${p.id}">
                <div class="deep-dive-section">
                    <span class="deep-dive-title"><i class="ph-bold ph-lightbulb"></i> Por que isso é verdade?</span>
                    <p class="deep-dive-text">${p.explanation || 'Princípio forjado na observação direta da conduta e da mente humana.'}</p>
                </div>
                <div class="deep-dive-section">
                    <span class="deep-dive-title"><i class="ph-bold ph-target"></i> Como Praticar no Dia a Dia:</span>
                    <p class="deep-dive-text">${p.dailyPractice || p.actionSuggestion || 'Aplique vigilância sobre seus pensamentos e atitudes nas próximas 24 horas.'}</p>
                </div>
            </div>

            ${p.origin ? `<p class="principle-context"><i class="ph ph-footprints"></i> ${p.origin}</p>` : ''}
        </div>

        <div class="principle-card-bottom">
            <div class="left-card-actions">
                
                <button class="btn-reflect-action" onclick="openModalReflection('${p.id}')">
                    <i class="ph-bold ph-brain"></i> Refletir
                </button>
                <button class="btn-comments-trigger" onclick="openModalComments('${p.id}')">
                    <i class="ph-bold ph-chat-centered-text"></i>
                    <span>Debater</span>
                    <span class="comments-badge-num">${commentsCount}</span>
                </button>
            </div>

            <div class="card-action-btns">
                <button class="icon-button" 
                        onclick="downloadLockscreenWallpaperForPrinciple('${p.id}')" 
                        title="Baixar como Wallpaper 9:16 para Tela de Bloqueio">
                    <i class="ph-bold ph-device-mobile"></i>
                </button>
                <button class="icon-button ${isFav ? 'active-star' : ''}" 
                        onclick="toggleFavorite('${p.id}')" 
                        title="${isFav ? 'Remover dos Favoritos' : 'Favoritar Princípio'}">
                    <i class="${isFav ? 'ph-fill ph-star' : 'ph ph-star'}"></i>
                </button>
                <button class="icon-button" 
                        onclick="downloadCardFromPrinciple('${p.id}')" 
                        title="Baixar Card em Imagem PNG">
                    <i class="ph ph-image-square"></i>
                </button>
                <button class="icon-button" 
                        onclick="copyPrincipleText('${p.id}')" 
                        title="Copiar Mandamento em Texto">
                    <i class="ph ph-copy"></i>
                </button>
                
                ${isUser ? `
                    <button class="icon-button" 
                            onclick="deleteUserPrinciple('${p.id}')" 
                            title="Apagar este mandamento">
                        <i class="ph ph-trash" style="color: #f87171;"></i>
                    </button>
                ` : ''}
            </div>
        </div>
    `;

    return card;
}

// Alternar expansão da explicação profunda
window.toggleExplanation = function(id) {
    sfx.play('click');
    const drawer = document.getElementById(`deep-dive-${id}`);
    const btn = document.getElementById(`btn-toggle-${id}`);
    if (!drawer || !btn) return;

    const isOpen = drawer.style.display === 'block';
    if (isOpen) {
        drawer.style.display = 'none';
        btn.classList.remove('open');
    } else {
        drawer.style.display = 'block';
        btn.classList.add('open');
    }
};

// ==========================================================================
// 8. SISTEMA DE COMENTÁRIOS & DEBATES COMUNITÁRIOS
// ==========================================================================
window.openModalComments = function(principleId) {
    sfx.play('click');
    const all = getAllPrinciples();
    const found = all.find(p => String(p.id) === String(principleId));
    if (!found) return;

    activeCommentsPrincipleId = principleId;

    const modal = document.getElementById('modal-comments');
    const quoteEl = document.getElementById('comments-principle-quote');
    const metaEl = document.getElementById('comments-principle-meta');

    if (quoteEl) quoteEl.textContent = `"${found.quote}"`;
    if (metaEl) metaEl.textContent = `${found.author || 'O Mestre'} • ${found.trailLabel}`;

    renderCommentsFeed(principleId);

    if (modal) modal.style.display = 'flex';
    document.body.style.overflow = 'hidden';
};

function closeModalComments() {
    sfx.play('click');
    const modal = document.getElementById('modal-comments');
    if (modal) modal.style.display = 'none';
    document.body.style.overflow = '';
    activeCommentsPrincipleId = null;
    renderLibrary(); // Atualiza os contadores nos cards
}

function handlePostComment(e) {
    e.preventDefault();
    if (!activeCommentsPrincipleId) return;

    const authorInput = document.getElementById('comment-author-name');
    const textInput = document.getElementById('comment-text-input');

    const author = authorInput ? authorInput.value.trim() : 'Guerreiro';
    const text = textInput ? textInput.value.trim() : '';

    if (!text) {
        showToast("Escreva uma reflexão antes de publicar.", "ph-warning");
        return;
    }

    if (!commentsStore[activeCommentsPrincipleId]) {
        commentsStore[activeCommentsPrincipleId] = [];
    }

    const newComment = {
        id: 'c_' + Date.now(),
        author: author || 'Guerreiro Anônimo',
        text: text,
        likes: 1,
        time: 'Agora'
    };

    commentsStore[activeCommentsPrincipleId].unshift(newComment);
    writeStorage(STORAGE.COMMENTS, commentsStore);

    sfx.play('complete');
    textInput.value = '';
    renderCommentsFeed(activeCommentsPrincipleId);
    showToast("Reflexão publicada na Forja!", "ph-chats-circle");
}

function renderCommentsFeed(principleId) {
    const list = document.getElementById('comments-feed-list');
    const counter = document.getElementById('comments-total-counter');
    if (!list) return;

    const items = commentsStore[principleId] || [];
    if (counter) counter.textContent = items.length;

    list.innerHTML = '';

    if (items.length === 0) {
        list.innerHTML = `
            <div class="empty-state" style="padding: 2rem 1rem;">
                <i class="ph ph-chat-circle-dots"></i>
                <p>Nenhuma reflexão compartilhada ainda. Seja o primeiro a selar suas palavras sobre este princípio!</p>
            </div>
        `;
    } else {
        items.forEach(c => {
            const card = document.createElement('div');
            card.className = 'comment-card';
            const initial = c.author.charAt(0).toUpperCase();

            card.innerHTML = `
                <div class="comment-avatar">${initial}</div>
                <div class="comment-content">
                    <div class="comment-header">
                        <span class="comment-author-name">${c.author}</span>
                        <span class="comment-time">${c.time}</span>
                    </div>
                    <div class="comment-text">${c.text}</div>
                    <div class="comment-footer-actions">
                        <button class="btn-like-comment" onclick="likeComment('${principleId}', '${c.id}', this)">
                            <i class="ph-bold ph-heart"></i>
                            <span>${c.likes || 0}</span>
                        </button>
                    </div>
                </div>
            `;
            list.appendChild(card);
        });
    }
}

window.likeComment = function(principleId, commentId, btn) {
    sfx.play('star');
    const items = commentsStore[principleId];
    if (!items) return;

    const target = items.find(c => c.id === commentId);
    if (target) {
        target.likes = (target.likes || 0) + 1;
        writeStorage(STORAGE.COMMENTS, commentsStore);
        btn.classList.add('liked');
        const span = btn.querySelector('span');
        if (span) span.textContent = target.likes;
    }
};

// ==========================================================================
// 9. A FORJA (CRIAÇÃO DE MANDAMENTOS DO USUÁRIO)
// ==========================================================================
function handleCreateUserPrinciple(e) {
    e.preventDefault();
    const textInput = document.getElementById('forge-text');
    const authorInput = document.getElementById('forge-author-name');
    const catInput = document.getElementById('forge-cat');
    const originInput = document.getElementById('forge-origin');
    const selectRef = document.getElementById('select-reference-principle');
    const originModeRadio = document.querySelector('input[name="creation-origin-type"]:checked');

    const text = textInput ? textInput.value.trim() : '';
    const author = authorInput && authorInput.value.trim() ? authorInput.value.trim() : 'Guerreiro da Forja';
    const cat = catInput ? catInput.value : 'autoral';
    const origin = originInput ? originInput.value.trim() : '';
    const isReference = originModeRadio && originModeRadio.value === 'reference';

    if (!text) {
        showToast("Escreva seu mandamento antes de salvar!", "ph-warning");
        return;
    }

    let refPrinciple = null;
    if (isReference && selectRef && selectRef.value) {
        refPrinciple = BASE_PRINCIPLES.find(p => p.id === selectRef.value);
    }

    const labelMap = {
        mente: 'Mente & Autodomínio',
        esforco: 'Esforço & Disciplina',
        cicatrizes: 'Cicatrizes & Erros',
        silencio: 'O Poder do Silêncio',
        relacoes: 'Círculo de Caráter',
        hombridade: 'Hombridade & Peso',
        acao: 'Sonhos na Ação',
        autoral: 'Mandamento Autoral'
    };

    const newPrinciple = {
        id: 'usr_' + Date.now(),
        trail: cat,
        trailLabel: labelMap[cat] || 'Mandamento Autoral',
        quote: text,
        author: author,
        origin: origin || (refPrinciple ? `Inspirado em: "${refPrinciple.quote.substring(0, 45)}..."` : 'Forjado em batalha pessoal'),
        referenceId: refPrinciple ? refPrinciple.id : null,
        referenceQuote: refPrinciple ? refPrinciple.quote : null,
        theme: currentForgeTheme,
        explanation: origin ? `Lição forjada na vivência prática: ${origin}` : 'Mandamento de conduta forjado pelo autor.',
        dailyPractice: 'Viver de acordo com essa máxima em cada decisão tomada hoje.',
        inquiry: 'Como você vai garantir que manterá essa palavra firme e honrada no seu dia a dia?',
        isUser: true,
        createdAt: new Date().toISOString()
    };

    userPrinciples.unshift(newPrinciple);
    writeStorage(STORAGE.USER_PRINCIPLES, userPrinciples);

    sfx.play('forge');

    textInput.value = '';
    if (originInput) originInput.value = '';

    const previewText = document.getElementById('preview-text-display');
    if (previewText) previewText.textContent = '"O que você não assume como responsabilidade continuará te dominando."';

    updateCounters();
    renderUserPrinciples();
    renderLibrary();
    showToast("Mandamento Forjado e Gravado com Sucesso!", "ph-fire");
}

function renderUserPrinciples() {
    const grid = document.getElementById('grid-user-principles');
    const empty = document.getElementById('user-empty-state');
    const countEl = document.getElementById('user-principles-total');
    if (!grid) return;

    grid.innerHTML = '';
    if (countEl) countEl.textContent = userPrinciples.length;

    if (userPrinciples.length === 0) {
        if (empty) empty.style.display = 'flex';
    } else {
        if (empty) empty.style.display = 'none';
        userPrinciples.forEach((p, idx) => {
            const card = buildPrincipleCard(p, idx + 1, true);
            grid.appendChild(card);
        });
    }
}

window.deleteUserPrinciple = function(id) {
    sfx.play('click');
    if (confirm("Tem certeza que deseja apagar esse mandamento forjado?")) {
        userPrinciples = userPrinciples.filter(p => p.id !== id);
        writeStorage(STORAGE.USER_PRINCIPLES, userPrinciples);

        favorites = favorites.filter(favId => favId !== id);
        writeStorage(STORAGE.FAVORITES, favorites);

        updateCounters();
        renderUserPrinciples();
        renderLibrary();
        renderFavorites();
        showToast("Mandamento removido.", "ph-trash");
    }
};

// ==========================================================================
// 10. FAVORITOS
// ==========================================================================
window.toggleFavorite = function(id) {
    const isFav = favorites.includes(id);
    if (isFav) {
        favorites = favorites.filter(favId => favId !== id);
        sfx.play('click');
        showToast("Removido dos favoritos.", "ph-star");
    } else {
        favorites.push(id);
        sfx.play('star');
        showToast("Guardado no seu arsenal de favoritos!", "ph-star");
    }
    writeStorage(STORAGE.FAVORITES, favorites);

    renderLibrary();
    renderUserPrinciples();
    renderFavorites();
};

function renderFavorites() {
    const grid = document.getElementById('grid-favorites');
    const empty = document.getElementById('favorites-empty');
    if (!grid) return;

    grid.innerHTML = '';
    const all = getAllPrinciples();
    const favItems = all.filter(p => favorites.includes(p.id));

    if (favItems.length === 0) {
        if (empty) empty.style.display = 'flex';
    } else {
        if (empty) empty.style.display = 'none';
        favItems.forEach((p, idx) => {
            const card = buildPrincipleCard(p, idx + 1, p.isUser);
            grid.appendChild(card);
        });
    }
}

// ==========================================================================
// 11. AUTOEXAME & DIÁRIO DO SANTUÁRIO
// ==========================================================================
window.openModalReflection = function(principleId) {
    sfx.play('bell');
    const all = getAllPrinciples();
    const found = all.find(p => String(p.id) === String(principleId));
    if (!found) return;

    activeModalPrinciple = found;

    const modal = document.getElementById('modal-reflection');
    const badge = document.getElementById('modal-badge-cat');
    const quote = document.getElementById('modal-quote-text');
    const inquiry = document.getElementById('modal-inquiry-prompt');
    const contractInput = document.getElementById('modal-contract-input');
    const notesInput = document.getElementById('modal-notes-input');

    if (badge) badge.innerHTML = `<i class="ph-bold ph-compass"></i> ${found.trailLabel} • ${found.author || 'O Mestre'}`;
    if (quote) quote.textContent = `"${found.quote}"`;
    if (inquiry) inquiry.textContent = found.inquiry || "Onde você tem fraquejado nisso recentemente?";
    if (contractInput) contractInput.value = found.actionSuggestion || "";

    const existing = journalEntries.find(j => String(j.principleId) === String(principleId));
    if (notesInput) notesInput.value = existing ? existing.notes : "";

    if (modal) modal.style.display = 'flex';
    document.body.style.overflow = 'hidden';
};

function closeModalReflection() {
    sfx.play('click');
    const modal = document.getElementById('modal-reflection');
    if (modal) modal.style.display = 'none';
    document.body.style.overflow = '';
    activeModalPrinciple = null;
}

function handleSaveReflectionModal() {
    if (!activeModalPrinciple) return;

    const contractInput = document.getElementById('modal-contract-input');
    const notesInput = document.getElementById('modal-notes-input');

    const contractText = contractInput ? contractInput.value.trim() : '';
    const notesText = notesInput ? notesInput.value.trim() : '';

    if (!notesText && !contractText) {
        showToast("Preencha ao menos uma reflexão ou contrato de ação.", "ph-warning");
        return;
    }

    const existingIndex = journalEntries.findIndex(j => String(j.principleId) === String(activeModalPrinciple.id));
    const entry = {
        id: 'jrn_' + Date.now(),
        principleId: activeModalPrinciple.id,
        quote: activeModalPrinciple.quote,
        trailLabel: activeModalPrinciple.trailLabel,
        notes: notesText || "Autoexame realizado com sinceridade.",
        pledge: contractText || null,
        date: new Date().toISOString()
    };

    if (existingIndex >= 0) {
        journalEntries[existingIndex] = entry;
    } else {
        journalEntries.unshift(entry);
    }
    writeStorage(STORAGE.JOURNAL, journalEntries);

    if (contractText) {
        addMission(contractText, activeModalPrinciple.quote);
    }

    sfx.play('complete');
    closeModalReflection();
    renderJournal();
    renderMissions();
    showToast("Reflexão gravada e Missão selada!", "ph-shield-check");
}

function renderJournal() {
    const container = document.getElementById('daily-reflections-container');
    if (!container) return;
    
    container.innerHTML = '';
    
    // Seeded random based on today's date to get the same 5 quotes all day
    const todayStr = new Date().toDateString();
    let seed = 0;
    for(let i = 0; i < todayStr.length; i++) {
        seed += todayStr.charCodeAt(i);
    }
    
    const random = () => {
        const x = Math.sin(seed++) * 10000;
        return x - Math.floor(x);
    };

    const all = typeof getAllPrinciples === 'function' ? getAllPrinciples() : BASE_PRINCIPLES;
    if (all.length === 0) return;
    
    const dailySet = [...all].sort((a,b) => random() - 0.5).slice(0, 3);
    
    dailySet.forEach(p => {
        const hasEntry = typeof journalEntries !== 'undefined' && journalEntries.some(j => String(j.principleId) === String(p.id));
        const item = document.createElement('div');
        item.className = 'principle-card';
        item.style.marginBottom = '20px';
        item.style.position = 'relative';
        
        item.innerHTML = `
            <div class="card-category"><i class="ph-bold ph-compass"></i> ${p.trailLabel || 'Reflexão'}</div>
            <p class="card-quote" style="margin: 15px 0;">"${p.quote}"</p>
            <p class="card-author">— ${p.author || 'O Mestre'}</p>
            
            <button class="btn-primary" style="margin-top: 20px; width: 100%; border: ${hasEntry ? '1px solid var(--accent-color)' : 'none'}; background: ${hasEntry ? 'transparent' : 'var(--accent-color)'}; color: ${hasEntry ? 'var(--accent-color)' : '#000'}" onclick="openModalReflection('${p.id}')">
                <i class="ph ph-${hasEntry ? 'check-circle' : 'pencil-simple'}"></i> ${hasEntry ? 'Reflexão Concluída' : 'Fazer Autoexame'}
            </button>
        `;
        container.appendChild(item);
    });
}
    


// ==========================================================================
// 11. AUTOEXAME & DIÁRIO DO SANTUÁRIO
// ==========================================================================
window.openModalReflection = function(principleId) {
    sfx.play('bell');
    const all = getAllPrinciples();
    const found = all.find(p => String(p.id) === String(principleId));
    if (!found) return;

    activeModalPrinciple = found;

    const modal = document.getElementById('modal-reflection');
    const badge = document.getElementById('modal-badge-cat');
    const quote = document.getElementById('modal-quote-text');
    const inquiry = document.getElementById('modal-inquiry-prompt');
    const contractInput = document.getElementById('modal-contract-input');
    const notesInput = document.getElementById('modal-notes-input');

    if (badge) badge.innerHTML = `<i class="ph-bold ph-compass"></i> ${found.trailLabel} • ${found.author || 'O Mestre'}`;
    if (quote) quote.textContent = `"${found.quote}"`;
    if (inquiry) inquiry.textContent = found.inquiry || "Onde você tem fraquejado nisso recentemente?";
    if (contractInput) contractInput.value = found.actionSuggestion || "";

    const existing = journalEntries.find(j => String(j.principleId) === String(principleId));
    if (notesInput) notesInput.value = existing ? existing.notes : "";

    if (modal) modal.style.display = 'flex';
    document.body.style.overflow = 'hidden';
};

function closeModalReflection() {
    sfx.play('click');
    const modal = document.getElementById('modal-reflection');
    if (modal) modal.style.display = 'none';
    document.body.style.overflow = '';
    activeModalPrinciple = null;
}

function handleSaveReflectionModal() {
    if (!activeModalPrinciple) return;

    const contractInput = document.getElementById('modal-contract-input');
    const notesInput = document.getElementById('modal-notes-input');

    const contractText = contractInput ? contractInput.value.trim() : '';
    const notesText = notesInput ? notesInput.value.trim() : '';

    if (!notesText && !contractText) {
        showToast("Preencha ao menos uma reflexão ou contrato de ação.", "ph-warning");
        return;
    }

    const existingIndex = journalEntries.findIndex(j => String(j.principleId) === String(activeModalPrinciple.id));
    const entry = {
        id: 'jrn_' + Date.now(),
        principleId: activeModalPrinciple.id,
        quote: activeModalPrinciple.quote,
        trailLabel: activeModalPrinciple.trailLabel,
        notes: notesText || "Autoexame realizado com sinceridade.",
        pledge: contractText || null,
        date: new Date().toISOString()
    };

    if (existingIndex >= 0) {
        journalEntries[existingIndex] = entry;
    } else {
        journalEntries.unshift(entry);
    }
    writeStorage(STORAGE.JOURNAL, journalEntries);

    if (contractText) {
        addMission(contractText, activeModalPrinciple.quote);
    }

    sfx.play('complete');
    closeModalReflection();
    renderJournal();
    renderMissions();
    showToast("Reflexão gravada e Missão selada!", "ph-shield-check");
}

function renderJournal() {
    const container = document.getElementById('daily-reflections-container');
    if (!container) return;
    
    container.innerHTML = '';
    
    // Seeded random based on today's date to get the same 5 quotes all day
    const todayStr = new Date().toDateString();
    let seed = 0;
    for(let i = 0; i < todayStr.length; i++) {
        seed += todayStr.charCodeAt(i);
    }
    
    const random = () => {
        const x = Math.sin(seed++) * 10000;
        return x - Math.floor(x);
    };
    
    // Select 5 unique principles
    const pool = typeof getAllPrinciples === 'function' ? getAllPrinciples() : (typeof BASE_PRINCIPLES !== 'undefined' ? [...BASE_PRINCIPLES] : []);
    const daily5 = [];
    for(let i = 0; i < 5; i++) {
        if (pool.length === 0) break;
        const idx = Math.floor(random() * pool.length);
        daily5.push(pool.splice(idx, 1)[0]);
    }
    
    daily5.forEach((p, index) => {
        const card = document.createElement('div');
        card.className = 'principle-card';
        card.style.background = '#11151a';
        card.style.borderLeft = '3px solid var(--accent-color)';
        
        // Load saved reflection if any
        const storageKey = 'daily_reflection_' + todayStr.replace(/\s/g, '_') + '_' + p.id;
        const savedText = localStorage.getItem(storageKey) || '';
        
        card.innerHTML = `
            <div style="margin-bottom: 15px;">
                <span style="font-size: 0.8rem; color: var(--accent-color); font-weight: bold; text-transform: uppercase;">Missão ${index + 1} de 5</span>
                <p style="font-family: 'Cinzel', serif; font-size: 1.2rem; margin: 10px 0; line-height: 1.5; color: #f2f2f2;">"${p.quote}"</p>
                <p style="font-size: 0.9rem; color: #888;">— ${p.author}</p>
            </div>
            <div style="display: flex; flex-direction: column; gap: 10px;">
                <label style="font-size: 0.85rem; color: #aaa;">Sua Reflexão (O que entendeu e como aplicar hoje):</label>
                <textarea id="reflection-input-${p.id}" rows="3" style="width: 100%; background: #07090c; border: 1px solid #333; border-radius: 8px; padding: 10px; color: #fff; resize: vertical; font-family: inherit;">${savedText}</textarea>
                <button onclick="saveDailyReflection('${p.id}', '${storageKey}')" style="align-self: flex-end; background: var(--accent-color); color: #000; border: none; border-radius: 6px; padding: 8px 16px; font-weight: bold; cursor: pointer; display: flex; align-items: center; gap: 5px;">
                    <i class="ph-bold ph-floppy-disk"></i> Salvar
                </button>
            </div>
        `;
        container.appendChild(card);
    });
}

window.saveDailyReflection = function(id, storageKey) {
    const textarea = document.getElementById('reflection-input-' + id);
    if(textarea) {
        localStorage.setItem(storageKey, textarea.value);
        sfx.play('click');
        
        // Visual feedback
        const btn = textarea.nextElementSibling;
        const originalHtml = btn.innerHTML;
        btn.innerHTML = '<i class="ph-bold ph-check"></i> Salvo!';
        btn.style.background = '#4CAF50';
        btn.style.color = '#fff';
        
        setTimeout(() => {
            btn.innerHTML = originalHtml;
            btn.style.background = 'var(--accent-color)';
            btn.style.color = '#000';
        }, 2000);
    }
};

window.visualGenerationToken = 0;

window.visualGenerationToken = 0;

window.generateNextVisual = function() {
    const visualQuote = document.getElementById('visual-quote');
    const visualAuthor = document.getElementById('visual-author');
    const container = document.getElementById('visual-image-container');
    
    if(!visualQuote || !visualAuthor || !container) return;
    
    if (typeof sfx !== 'undefined' && sfx.play) sfx.play('click');
    
    const allP = typeof getAllPrinciples === 'function' ? getAllPrinciples() : [];
    if (allP.length === 0) return;
    
    const p = allP[Math.floor(Math.random() * allP.length)];
    
    window.visualGenerationToken++;
    const currentToken = window.visualGenerationToken;
    
    // AJUSTE 1: Transição suave de saída (Fade out do antigo)
    visualQuote.style.transition = 'opacity 0.4s ease';
    visualAuthor.style.transition = 'opacity 0.4s ease';
    visualQuote.style.opacity = '0';
    visualAuthor.style.opacity = '0';
    
    // AJUSTE 2: Limpeza e preparação de tela após o fade out
    setTimeout(() => {
        if (window.visualGenerationToken !== currentToken) return;
        
        container.style.transition = 'background-color 0.5s ease';
        container.style.backgroundImage = 'none';
        container.style.backgroundColor = '#05070a'; // Fundo cinematográfico escuro
        
        visualQuote.innerHTML = '<i class="ph ph-spinner ph-spin"></i> Sincronizando Visão...';
        visualAuthor.textContent = 'Aguarde (3 segundos)';
        
        visualQuote.style.opacity = '1';
        visualAuthor.style.opacity = '1';
    }, 400);
    
    // VOLTANDO AO ANTIGO GERADOR (Rápido e Preciso)
    function getPromptForQuote(quote, trail) {
        const q = quote.toLowerCase();
        let subject = "";

        const dualities = [
            { w1: 'passado', w2: 'futuro', p: 'split screen diptych, left side shows ancient ruins, right side shows a futuristic glowing city' },
            { w1: 'corpo', w2: 'mente', p: 'split screen diptych, left side shows a muscular athlete training, right side shows a glowing human brain' },
            { w1: 'elogio', w2: 'ofensa', p: 'split screen diptych, left side shows people throwing red roses, right side shows people throwing sharp stones' },
            { w1: 'forte', w2: 'fraco', p: 'split screen diptych, left side shows a powerful majestic lion, right side shows a fragile wounded deer' },
            { w1: 'luz', w2: 'escuridão', p: 'split screen diptych, left side is bright radiant sunlight, right side is pitch black darkness with scary glowing eyes' },
            { w1: 'luz', w2: 'escuro', p: 'split screen diptych, left side is bright radiant sunlight, right side is pitch black darkness with scary glowing eyes' },
            { w1: 'caos', w2: 'paz', p: 'split screen diptych, left side is a violent tornado destroying a town, right side is a calm peaceful zen garden' },
            { w1: 'dor', w2: 'cura', p: 'split screen diptych, left side shows a broken shattered vase, right side shows glowing golden kintsugi pottery' },
            { w1: 'vida', w2: 'morte', p: 'split screen diptych, left side shows a blooming spring flower, right side shows a decaying skull' },
            { w1: 'falar', w2: 'ouvir', p: 'split screen diptych, left side shows a loud screaming crowd, right side shows a completely silent misty pine forest' },
            { w1: 'ação', w2: 'palavra', p: 'split screen diptych, left side shows a spartan warrior fighting with a sword, right side shows an empty floating speech bubble' },
            { w1: 'vitória', w2: 'derrota', p: 'split screen diptych, left side shows a champion lifting a gold trophy, right side shows a defeated warrior on his knees' },
            { w1: 'amor', w2: 'ódio', p: 'split screen diptych, left side shows a warm glowing red heart, right side shows a heart frozen in dark blue ice' },
            { w1: 'amigo', w2: 'inimigo', p: 'split screen diptych, left side shows two warriors shaking hands in brotherhood, right side shows two warriors crossing swords in battle' },
            { w1: 'início', w2: 'fim', p: 'split screen diptych, left side shows a bright sunrise over mountains, right side shows a dark sunset fading into the night' },
            { w1: 'bem', w2: 'mal', p: 'split screen diptych, left side shows a glowing angelic figure of light, right side shows a dark demonic shadow' }
        ];

        for (let d of dualities) {
            if (q.includes(d.w1) && q.includes(d.w2)) {
                subject = d.p;
                break;
            }
        }

        if (!subject) {
            const singles = [
                { w: ['mar', 'oceano', 'onda', 'tempestade'], p: 'a dark powerful storm on the ocean with huge waves' },
                { w: ['fogo', 'chama', 'queima', 'cinzas'], p: 'a roaring campfire in the dark, flying embers, ash' },
                { w: ['lobo', 'alcateia'], p: 'a lone alpha wolf in a dark snowy forest' },
                { w: ['montanha', 'pedra', 'topo', 'escalar'], p: 'a towering dark mountain peak covered in snow and storm' },
                { w: ['esforço', 'suor', 'treino', 'peso', 'disciplina'], p: 'heavy iron weights in a dark hardcore gym, sweat, grit' },
                { w: ['espada', 'guerra', 'batalha', 'guerreiro', 'luta', 'soldado'], p: 'a battle-worn sword planted in the ground, dark battlefield, fog' },
                { w: ['livro', 'leitura', 'sabedoria', 'estudo', 'aprender'], p: 'an ancient dusty book on a wooden desk, candle light, dark library' },
                { w: ['morte', 'tempo', 'morrer', 'relógio'], p: 'an old hourglass with sand running out, dark moody lighting' },
                { w: ['rei', 'coroa', 'império', 'poder', 'trono', 'líder'], p: 'a heavy iron crown resting on a stone throne, dark castle' },
                { w: ['dinheiro', 'ouro', 'riqueza', 'pobre', 'ganância'], p: 'ancient gold coins spilling from a pouch in the dark' },
                { w: ['medo', 'covarde', 'coragem', 'enfrentar'], p: 'a man standing alone facing a giant dark shadow monster, courage' }
            ];
            for (let s of singles) {
                if (s.w.some(word => q.includes(word))) {
                    subject = s.p;
                    break;
                }
            }
        }

        if (!subject) {
            // Em vez de uma imagem genérica da categoria, forçamos a IA a representar a frase exata!
            // Isso garante 100% de sincronia e que cada frase tenha sua própria imagem única.
            subject = `Literal, hyper-realistic cinematic visual representation of the following concept: "${quote}". Dark moody lighting, highly detailed`;
        }
        
        return subject + ', ultra realistic 8k, extremely sharp focus, real life photography, highly detailed, perfectly clear, NO blur, NO painting, NO drawing, dark moody lighting, borderless, NO TEXT';
    }
    
    const prompt = getPromptForQuote(p.quote, p.trail);
    
    let hash = 0;
    const str = p.id || p.quote;
    for(let i=0; i<str.length; i++) {
        hash += str.charCodeAt(i) * (i + 1);
    }
    const lockId = (hash % 1000) + 1;
    
    // Proporções perfeitas: Tela Larga (Ultrawide 21:9) no PC e Em Pé (9:16) no Celular
    const isPortrait = window.innerHeight > window.innerWidth;
    const imgW = isPortrait ? 1080 : 2560; // Um pouco mais larga para computador (21:9)
    const imgH = isPortrait ? 1920 : 1080;
    
    const imgUrl = `https://image.pollinations.ai/prompt/${encodeURIComponent(prompt)}?width=${imgW}&height=${imgH}&nologo=true&seed=${lockId}`;
    
    let isImageLoaded = false;
    let isTimerDone = false;
    let hasFailed = false;
    
    const showSynced = () => {
        if (window.visualGenerationToken !== currentToken) return;
        
        if (isImageLoaded && isTimerDone) {
            // AJUSTE 3: Fade out do texto de "Sincronizando..." para preparar o terreno
            visualQuote.style.opacity = '0';
            visualAuthor.style.opacity = '0';
            
            setTimeout(() => {
                if (window.visualGenerationToken !== currentToken) return;
                
                // AJUSTE 4: A imagem e a frase são alteradas no escuro absoluto
                if (hasFailed) {
                    container.style.backgroundImage = 'none';
                    container.style.backgroundColor = '#05070a';
                } else {
                    container.style.backgroundImage = `url('${imgUrl}')`;
                    container.style.backgroundSize = 'contain'; // Garante que a imagem não seja "esticada" ou cortada (estilo Google Imagens)
                    container.style.backgroundRepeat = 'no-repeat';
                    container.style.backgroundPosition = 'center';
                }
                
                visualQuote.textContent = `"${p.quote}"`;
                visualAuthor.textContent = p.author || 'O Mestre';
                
                // AJUSTE 5: Fade in épico e simultâneo. A imagem de fundo aparece no exato instante da frase
                visualQuote.style.opacity = '1';
                visualAuthor.style.opacity = '1';
            }, 400); // 400ms para o fade out do spinner terminar
        }
    };
    
    // O relógio do adiantamento de 3 segundos exigido
    setTimeout(() => {
        isTimerDone = true;
        showSynced();
    }, 3400); // 3000ms + 400ms do fade out inicial
    
    const img = new Image();
    img.onload = function() {
        isImageLoaded = true;
        showSynced();
    };
    img.onerror = function() {
        isImageLoaded = true;
        hasFailed = true;
        showSynced();
    };
    img.src = imgUrl;
};


// ==========================================================================
// BANCO DE MISSÕES PREDEFINIDAS & BANNER DA TELA INICIAL
// ==========================================================================

const PREDEFINED_MISSIONS = [
    { cat: 'Disciplina', icon: 'ph-person-arms-spread', list: [
        "Não vou adiar nenhuma tarefa que leva menos de 5 minutos hoje.",
        "Vou completar meu treino/exercício, independentemente de como eu me sinta.",
        "Vou acordar no primeiro alarme, sem usar a função soneca."
    ]},
    { cat: 'Foco & Atenção', icon: 'ph-target', list: [
        "Vou deixar o celular em outro cômodo durante o meu horário de trabalho/estudo.",
        "Nenhuma rede social até as 18h.",
        "Vou ler 10 páginas de um livro sem distrações hoje."
    ]},
    { cat: 'Autocontrole', icon: 'ph-shield-check', list: [
        "Se eu sentir raiva, vou contar até 10 antes de falar qualquer coisa.",
        "Vou fazer uma refeição completamente limpa (sem açúcar, sem excessos) hoje.",
        "Não vou reclamar de absolutamente nada nas próximas 24 horas."
    ]},
    { cat: 'Coragem', icon: 'ph-sword', list: [
        "Vou iniciar aquela tarefa desconfortável que estou adiando há semanas.",
        "Vou ter aquela conversa difícil que preciso ter com alguém.",
        "Vou olhar nos olhos e falar com firmeza em todas as minhas interações hoje."
    ]}
];

window.acceptPredefinedMission = function(text) {
    if (typeof sfx !== 'undefined' && sfx.play) sfx.play('gold');
    const newMission = {
        id: 'mission-' + Date.now(),
        text: text,
        createdAt: new Date().toLocaleDateString(),
        done: false
    };
    if (typeof missions !== 'undefined') {
        missions.unshift(newMission);
        saveMissions();
        renderMissions();
    }
};

window.renderPredefinedMissions = function() {
    const container = document.getElementById('missions-bank-container');
    if (!container) return;
    container.innerHTML = '';
    
    PREDEFINED_MISSIONS.forEach(theme => {
        const card = document.createElement('div');
        card.className = 'forge-form-card';
        card.style.background = '#0a0d14';
        card.style.border = '1px solid #1f2937';
        
        let html = `<div class="forge-card-title" style="margin-bottom: 10px; font-size: 1rem;"><i class="ph-bold ${theme.icon}"></i> ${theme.cat}</div><div style="display: flex; flex-direction: column; gap: 8px;">`;
        
        theme.list.forEach(mText => {
            html += `
                <button onclick="acceptPredefinedMission('${mText.replace(/'/g, "\\'")}')" style="text-align: left; background: #111827; border: 1px solid #374151; color: #d1d5db; padding: 10px; border-radius: 6px; cursor: pointer; font-size: 0.85rem; transition: 0.2s;" onmouseover="this.style.borderColor='var(--accent-color)'" onmouseout="this.style.borderColor='#374151'">
                    ${mText}
                </button>
            `;
        });
        
        html += `</div>`;
        card.innerHTML = html;
        container.appendChild(card);
    });
};

window.updateActiveMissionBanner = function() {
    const banner = document.getElementById('active-mission-banner');
    const textEl = document.getElementById('active-mission-text');
    if (!banner || !textEl || typeof missions === 'undefined') return;
    
    // Procura a primeira missão que não está concluída (A mais recente, já que damos unshift)
    const activeMission = missions.find(m => !m.done);
    
    if (activeMission) {
        textEl.textContent = activeMission.text;
        banner.style.display = 'block';
    } else {
        banner.style.display = 'none';
    }
};

function renderMissions() {
    const list = document.getElementById('missions-list-container');
    const empty = document.getElementById('missions-empty');
    const counter = document.getElementById('missions-completed-count');
    if (!list) return;

    list.innerHTML = '';
    const completedTotal = missions.filter(m => m.done).length;
    if (counter) counter.textContent = `${completedTotal}/${missions.length}`;

    if (missions.length === 0) {
        if (empty) empty.style.display = 'flex';
    } else {
        if (empty) empty.style.display = 'none';
        missions.forEach(m => {
            const item = document.createElement('div');
            item.className = `mission-item ${m.done ? 'completed' : ''}`;
            item.innerHTML = `
                <div class="mission-left">
                    <div class="mission-checkbox" onclick="toggleMissionDone('${m.id}')">
                        <i class="ph-bold ph-check"></i>
                    </div>
                    <div class="mission-content">
                        <span class="mission-text">${m.text}</span>
                        <span class="mission-date">Assumido em ${m.createdAt}</span>
                    </div>
                </div>
                <button class="icon-button" onclick="deleteMission('${m.id}')" title="Excluir Missão">
                    <i class="ph ph-x"></i>
                </button>
            `;
            list.appendChild(item);
        });
    }
    
    // Atualiza o banner da tela inicial sempre que a lista de missões é renderizada
    if (typeof updateActiveMissionBanner === 'function') {
        updateActiveMissionBanner();
    }
}

// ==========================================================================
// 13. EXPORTAÇÃO DE CARD EM IMAGEM PNG RETINA (1080x1080)
// ==========================================================================
window.downloadCardFromPrinciple = function(id) {
    sfx.play('star');
    const all = getAllPrinciples();
    const p = all.find(item => String(item.id) === String(id));
    if (!p) return;

    exportCardAsPngImage({
        quote: p.quote,
        author: p.author || (p.isUser ? "Você" : "O Mestre"),
        category: p.trailLabel,
        theme: p.theme || (p.isClassic ? "obsidian" : "gold")
    });
};

function exportCardAsPngImage({ quote, author, category, theme = 'gold' }) {
    const canvas = document.getElementById('canvas-card-export');
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    const width = 1080;
    const height = 1080;

    const themes = {
        gold: {
            bg1: '#11141c',
            bg2: '#080a0f',
            border: '#d99b26',
            accent: '#f5b73d',
            text: '#ffffff',
            sub: '#94a3b8'
        },
        obsidian: {
            bg1: '#0f172a',
            bg2: '#020617',
            border: '#64748b',
            accent: '#cbd5e1',
            text: '#ffffff',
            sub: '#64748b'
        },
        crimson: {
            bg1: '#1c0a0a',
            bg2: '#080202',
            border: '#dc2626',
            accent: '#f87171',
            text: '#ffffff',
            sub: '#991b1b'
        },
        emerald: {
            bg1: '#061a14',
            bg2: '#020a07',
            border: '#059669',
            accent: '#34d399',
            text: '#ffffff',
            sub: '#065f46'
        }
    };

    const t = themes[theme] || themes.gold;

    // 1. Fundo
    const grad = ctx.createRadialGradient(width / 2, height / 2, 80, width / 2, height / 2, width * 0.7);
    grad.addColorStop(0, t.bg1);
    grad.addColorStop(1, t.bg2);
    ctx.fillStyle = grad;
    ctx.fillRect(0, 0, width, height);

    // 2. Bordas
    ctx.lineWidth = 12;
    ctx.strokeStyle = t.border;
    ctx.strokeRect(60, 60, width - 120, height - 120);

    ctx.lineWidth = 2;
    ctx.strokeStyle = 'rgba(255, 255, 255, 0.15)';
    ctx.strokeRect(75, 75, width - 150, height - 150);

    // 3. Cantoneiras
    const drawCorner = (x, y) => {
        ctx.fillStyle = t.accent;
        ctx.fillRect(x - 8, y - 8, 16, 16);
    };
    drawCorner(60, 60);
    drawCorner(width - 60, 60);
    drawCorner(60, height - 60);
    drawCorner(width - 60, height - 60);

    // 4. Cabeçalho
    ctx.textAlign = 'center';
    ctx.fillStyle = t.accent;
    ctx.font = 'bold 30px "Plus Jakarta Sans", sans-serif';
    ctx.letterSpacing = '4px';
    ctx.fillText(category.toUpperCase(), width / 2, 160);

    ctx.font = '900 24px "Cinzel", serif';
    ctx.fillStyle = 'rgba(255, 255, 255, 0.4)';
    ctx.fillText('• MENTE FORJADA •', width / 2, 210);

    // 5. Aspas
    ctx.font = '900 120px "Cinzel", serif';
    ctx.fillStyle = 'rgba(217, 155, 38, 0.2)';
    ctx.fillText('“', width / 2, 340);

    // 6. Texto com Quebra Automática
    ctx.fillStyle = t.text;
    ctx.font = 'italic 600 44px "Cinzel", serif';
    ctx.textAlign = 'center';

    const maxWidth = width - 240;
    const lineHeight = 65;
    const words = quote.split(' ');
    let line = '';
    const lines = [];

    for (let n = 0; n < words.length; n++) {
        const testLine = line + words[n] + ' ';
        const metrics = ctx.measureText(testLine);
        if (metrics.width > maxWidth && n > 0) {
            lines.push(line);
            line = words[n] + ' ';
        } else {
            line = testLine;
        }
    }
    lines.push(line);

    const totalBlockHeight = lines.length * lineHeight;
    let startY = (height / 2) - (totalBlockHeight / 2) + 40;

    for (let i = 0; i < lines.length; i++) {
        ctx.fillText(lines[i].trim(), width / 2, startY + (i * lineHeight));
    }

    // 7. Assinatura
    const sigY = startY + (lines.length * lineHeight) + 60;
    ctx.font = 'bold 32px "Plus Jakarta Sans", sans-serif';
    ctx.fillStyle = t.accent;
    ctx.fillText(`— ${author}`, width / 2, sigY);

    // 8. Rodapé
    ctx.font = '500 22px "Plus Jakarta Sans", sans-serif';
    ctx.fillStyle = 'rgba(255, 255, 255, 0.4)';
    ctx.fillText('CARÁTER • DISCIPLINA • AÇÃO', width / 2, height - 120);

    // 9. Download
    const dataUrl = canvas.toDataURL('image/png');
    const link = document.createElement('a');
    link.download = `mente-forjada-${Date.now()}.png`;
    link.href = dataUrl;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

    showToast("Imagem de alta resolução (1080x1080) baixada!", "ph-download-simple");
}

// ==========================================================================
// 14. CÓPIA & COMPARTILHAMENTO DE TEXTO
// ==========================================================================
window.copyPrincipleText = function(id) {
    sfx.play('star');
    const all = getAllPrinciples();
    const found = all.find(p => String(p.id) === String(id));
    if (!found) return;

    const copyBody = `"${found.quote}"\n\n— ${found.author || 'Mente Forjada'} (${found.trailLabel})\nCaráter • Disciplina • Ação`;

    if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText(copyBody).then(() => {
            showToast("Mandamento copiado para a área de transferência!", "ph-copy");
        }).catch(() => fallbackClipboard(copyBody));
    } else {
        fallbackClipboard(copyBody);
    }
};

function fallbackClipboard(str) {
    const el = document.createElement('textarea');
    el.value = str;
    document.body.appendChild(el);
    el.select();
    document.execCommand('copy');
    document.body.removeChild(el);
    showToast("Mandamento copiado!", "ph-copy");
}

// ==========================================================================
// 15. INSPIRAÇÃO ALEATÓRIA ("INSPIRAR AGORA")
// ==========================================================================
function triggerRandomInspiration() {
    sfx.play('star');
    const all = BASE_PRINCIPLES;
    const rand = all[Math.floor(Math.random() * all.length)];
    openModalReflection(rand.id);
    showToast(`Mandamento de ${rand.author} sorteado!`, "ph-lightning");
}

// ==========================================================================
// 16. TOAST NOTIFICATION
// ==========================================================================
let toastTimeout = null;
function showToast(msg, icon = "ph-check-circle") {
    const toast = document.getElementById('app-toast');
    const toastTxt = document.getElementById('toast-text');
    const toastIcon = document.getElementById('toast-icon');
    if (!toast) return;

    if (toastTxt) toastTxt.textContent = msg;
    if (toastIcon) toastIcon.className = `ph-bold ${icon}`;

    toast.style.display = 'flex';

    if (toastTimeout) clearTimeout(toastTimeout);
    toastTimeout = setTimeout(() => {
        toast.style.display = 'none';
    }, 3200);
}

// ==========================================================================
// 17. RENDER GERAL
// ==========================================================================
window.renderDailyPledge = function() {
    const textEl = document.getElementById('daily-pledge-text');
    const authorEl = document.getElementById('daily-pledge-author');
    if (!textEl || !authorEl) return;
    
    const all = getAllPrinciples();
    if (all.length === 0) return;
    
    // Create a deterministic index based on the current date
    const dateStr = new Date().toDateString(); 
    let hash = 0;
    for (let i = 0; i < dateStr.length; i++) {
        hash = dateStr.charCodeAt(i) + ((hash << 5) - hash);
    }
    const index = Math.abs(hash) % all.length;
    const dailyPrinciple = all[index];
    
    textEl.textContent = `"${dailyPrinciple.quote}"`;
    authorEl.textContent = `— ${dailyPrinciple.author || "O Mestre"}`;
};

function renderAllViews() {
    updateCounters();
    renderLibrary();
    renderUserPrinciples();
    renderJournal();
    renderMissions();
    renderFavorites();
    if(window.generateNextVisual && !document.getElementById("visual-quote").textContent) { window.generateNextVisual(); }
    if (typeof renderPredefinedMissions === 'function') renderPredefinedMissions();
    if (typeof renderDailyPledge === 'function') renderDailyPledge();
}

// ==========================================================================
// 18. MOTOR DE PODCAST OFFLINE & ONLINE (RÁDIO FORJADA COM MEDIASESSION)
// ==========================================================================





// ==========================================================================
// 19. GERADOR DE PAPEL DE PAREDE PARA TELA DE BLOQUEIO (9:16 - 1080x2400)
// ==========================================================================
window.generateLockscreenWallpaper = function(principle, theme = 'gold') {
    const canvas = document.getElementById('canvas-card-export');
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    
    // Resolução Retina para celular 9:16 (1080 x 2400)
    canvas.width = 1080;
    canvas.height = 2400;

    let bgGrad, borderCol, goldCol, textCol, quoteCol, tagCol;
    if (theme === 'crimson') {
        bgGrad = ctx.createLinearGradient(0, 0, 1080, 2400);
        bgGrad.addColorStop(0, '#190608');
        bgGrad.addColorStop(0.4, '#07090c');
        bgGrad.addColorStop(1, '#110304');
        borderCol = '#e63946';
        goldCol = '#ff6b6b';
        textCol = '#f8fafc';
        quoteCol = '#ffffff';
        tagCol = '#fda4af';
    } else if (theme === 'dark') {
        bgGrad = ctx.createLinearGradient(0, 0, 1080, 2400);
        bgGrad.addColorStop(0, '#0f1318');
        bgGrad.addColorStop(0.4, '#07090c');
        bgGrad.addColorStop(1, '#0b0e12');
        borderCol = '#94a3b8';
        goldCol = '#cbd5e1';
        textCol = '#f1f5f9';
        quoteCol = '#ffffff';
        tagCol = '#94a3b8';
    } else {
        // Gold (Padrão)
        bgGrad = ctx.createLinearGradient(0, 0, 1080, 2400);
        bgGrad.addColorStop(0, '#11151c');
        bgGrad.addColorStop(0.3, '#07090c');
        bgGrad.addColorStop(0.7, '#07090c');
        bgGrad.addColorStop(1, '#181409');
        borderCol = '#f5b73d';
        goldCol = '#f5b73d';
        textCol = '#e2e8f0';
        quoteCol = '#ffffff';
        tagCol = '#fcd34d';
    }

    ctx.fillStyle = bgGrad;
    ctx.fillRect(0, 0, 1080, 2400);

    // Partículas de Aço Forjado
    ctx.fillStyle = 'rgba(245, 183, 61, 0.04)';
    for (let i = 0; i < 80; i++) {
        const rx = Math.random() * 1080;
        const ry = Math.random() * 2400;
        const rSize = Math.random() * 3;
        ctx.beginPath();
        ctx.arc(rx, ry, rSize, 0, Math.PI * 2);
        ctx.fill();
    }

    // Zona de Respeito Superior: Área livre para o relógio nativo do celular (0 a 560px)
    ctx.strokeStyle = 'rgba(245, 183, 61, 0.18)';
    ctx.lineWidth = 1;
    ctx.beginPath();
    ctx.moveTo(120, 580);
    ctx.lineTo(960, 580);
    ctx.stroke();

    // Moldura Dourada com cantoneiras duplas (Y = 620 a Y = 2240)
    const topY = 620;
    const botY = 2240;
    const leftX = 80;
    const rightX = 1000;

    ctx.strokeStyle = borderCol;
    ctx.lineWidth = 2;
    ctx.strokeRect(leftX, topY, rightX - leftX, botY - topY);

    ctx.strokeStyle = 'rgba(255, 255, 255, 0.08)';
    ctx.lineWidth = 1;
    ctx.strokeRect(leftX + 16, topY + 16, (rightX - leftX) - 32, (botY - topY) - 32);

    // Cantoneiras
    ctx.fillStyle = goldCol;
    [[leftX, topY], [rightX, topY], [leftX, botY], [rightX, botY]].forEach(([cx, cy]) => {
        ctx.fillRect(cx - 6, cy - 6, 12, 12);
    });

    // Tag da Trilha Superior
    ctx.font = '800 28px "Plus Jakarta Sans", sans-serif';
    ctx.fillStyle = tagCol;
    ctx.textAlign = 'center';
    ctx.fillText((principle.trailLabel || 'PRINCÍPIO DE AÇO').toUpperCase(), 540, topY + 100);

    // Aspas Nobres
    ctx.font = '900 130px "Cinzel", serif';
    ctx.fillStyle = 'rgba(245, 183, 61, 0.15)';
    ctx.fillText('“', 540, topY + 230);

    // Citação Formatada com Quebra de Linha
    ctx.font = 'italic 700 50px "Cinzel", Georgia, serif';
    ctx.fillStyle = quoteCol;
    ctx.shadowColor = 'rgba(0, 0, 0, 0.95)';
    ctx.shadowBlur = 16;

    const wrapWords = (text, maxWidth) => {
        const words = text.split(' ');
        const lines = [];
        let cur = words[0];
        for (let i = 1; i < words.length; i++) {
            const w = words[i];
            const test = cur + ' ' + w;
            if (ctx.measureText(test).width < maxWidth) {
                cur = test;
            } else {
                lines.push(cur);
                cur = w;
            }
        }
        lines.push(cur);
        return lines;
    };

    const quoteLines = wrapWords(`"${principle.quote}"`, 780);
    const lineHeight = 76;
    const blockHeight = quoteLines.length * lineHeight;
    let startY = 1260 - (blockHeight / 2);

    quoteLines.forEach((line, idx) => {
        ctx.fillText(line, 540, startY + (idx * lineHeight));
    });

    ctx.shadowBlur = 0;

    // Divisor
    const divY = startY + (quoteLines.length * lineHeight) + 60;
    ctx.strokeStyle = goldCol;
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.moveTo(420, divY);
    ctx.lineTo(660, divY);
    ctx.stroke();

    // Autor e Obra
    ctx.font = '700 38px "Cinzel", Georgia, serif';
    ctx.fillStyle = goldCol;
    ctx.fillText(`— ${principle.author || 'O Mestre'}`, 540, divY + 70);

    if (principle.work) {
        ctx.font = '500 28px "Plus Jakarta Sans", sans-serif';
        ctx.fillStyle = textCol;
        ctx.fillText(principle.work, 540, divY + 115);
    }

    // Rodapé de Forja
    ctx.font = '700 24px "Plus Jakarta Sans", sans-serif';
    ctx.fillStyle = 'rgba(255, 255, 255, 0.4)';
    ctx.fillText("DESPERTE • FORJE SUA MENTE • CUMPRA A MISSÃO", 540, botY - 70);

    // Download do PNG 9:16
    const link = document.createElement('a');
    link.download = `mente-forjada-bloqueio-${principle.id || 'wallpaper'}.png`;
    link.href = canvas.toDataURL('image/png');
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    showToast("Wallpaper HD (9:16) gerado para Tela de Bloqueio!", "ph-device-mobile");
};

// ==========================================================================
// 19.5 GERADOR DE PAPEL DE PAREDE PARA COMPUTADOR (16:9 - 1920x1080)
// ==========================================================================
window.generateDesktopWallpaper = function(principle, theme = 'gold') {
    const canvas = document.getElementById('canvas-card-export');
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    
    canvas.width = 1920;
    canvas.height = 1080;

    let bgGrad, borderCol, goldCol, textCol, quoteCol, tagCol;
    if (theme === 'crimson') {
        bgGrad = ctx.createLinearGradient(0, 0, 1920, 1080);
        bgGrad.addColorStop(0, '#190608');
        bgGrad.addColorStop(0.5, '#07090c');
        bgGrad.addColorStop(1, '#110304');
        borderCol = '#e63946';
        goldCol = '#ff6b6b';
        textCol = '#f8fafc';
        quoteCol = '#ffffff';
        tagCol = '#fda4af';
    } else if (theme === 'dark') {
        bgGrad = ctx.createLinearGradient(0, 0, 1920, 1080);
        bgGrad.addColorStop(0, '#0f1318');
        bgGrad.addColorStop(0.5, '#07090c');
        bgGrad.addColorStop(1, '#0b0e12');
        borderCol = '#94a3b8';
        goldCol = '#cbd5e1';
        textCol = '#f1f5f9';
        quoteCol = '#ffffff';
        tagCol = '#94a3b8';
    } else {
        bgGrad = ctx.createLinearGradient(0, 0, 1920, 1080);
        bgGrad.addColorStop(0, '#11151c');
        bgGrad.addColorStop(0.5, '#07090c');
        bgGrad.addColorStop(1, '#181409');
        borderCol = '#f5b73d';
        goldCol = '#f5b73d';
        textCol = '#f8fafc';
        quoteCol = '#ffffff';
        tagCol = '#fcd34d';
    }

    ctx.fillStyle = bgGrad;
    ctx.fillRect(0, 0, 1920, 1080);

    ctx.shadowColor = 'rgba(0,0,0,0.8)';
    ctx.shadowBlur = 40;
    ctx.shadowOffsetY = 20;

    const boxW = 1200;
    const boxH = 600;
    const boxX = (1920 - boxW) / 2;
    const boxY = (1080 - boxH) / 2;

    ctx.fillStyle = 'rgba(15, 19, 24, 0.6)';
    ctx.fillRect(boxX, boxY, boxW, boxH);

    ctx.strokeStyle = borderCol;
    ctx.lineWidth = 2;
    ctx.strokeRect(boxX, boxY, boxW, boxH);

    ctx.shadowBlur = 0;
    ctx.shadowOffsetY = 0;
    ctx.shadowColor = 'transparent';

    ctx.fillStyle = borderCol;
    ctx.font = 'bold 36px "Cinzel", serif';
    ctx.textAlign = 'center';
    ctx.fillText('Mente Forjada', 1920 / 2, boxY + 80);

    ctx.fillStyle = textCol;
    ctx.font = 'bold 42px "Cinzel", serif';
    const textLines = wrapTextDesktop(ctx, principle.title.toUpperCase(), boxW - 100);
    let titleY = boxY + 180;
    textLines.forEach(l => {
        ctx.fillText(l, 1920 / 2, titleY);
        titleY += 50;
    });

    ctx.fillStyle = quoteCol;
    ctx.font = 'italic 34px "Plus Jakarta Sans", sans-serif';
    const quoteLines = wrapTextDesktop(ctx, '"' + principle.quote + '"', boxW - 160);
    let qY = titleY + 40;
    quoteLines.forEach(l => {
        ctx.fillText(l, 1920 / 2, qY);
        qY += 45;
    });

    if (principle.author) {
        ctx.fillStyle = goldCol;
        ctx.font = 'bold 28px "Plus Jakarta Sans", sans-serif';
        ctx.fillText('- ' + principle.author, 1920 / 2, qY + 40);
    }

    const dataUrl = canvas.toDataURL('image/png');
    const link = document.createElement('a');
    link.download = `MenteForjada_Desktop_16x9_${principle.id}.png`;
    link.href = dataUrl;
    link.click();
};

function wrapTextDesktop(context, text, maxWidth) {
    const words = text.split(' ');
    const lines = [];
    let currentLine = words[0];
    for (let i = 1; i < words.length; i++) {
        const word = words[i];
        const width = context.measureText(currentLine + ' ' + word).width;
        if (width < maxWidth) {
            currentLine += ' ' + word;
        } else {
            lines.push(currentLine);
            currentLine = word;
        }
    }
    lines.push(currentLine);
    return lines;
}

window.downloadLockscreenWallpaperForPrinciple = function(id) {
    sfx.play('star');
    const all = getAllPrinciples();
    const found = all.find(p => String(p.id) === String(id));
    if (found) {
        generateLockscreenWallpaper(found, 'gold');
    }
};

// ==========================================================================
// 20. SISTEMA DE DESPERTAR DIÁRIO & NOTIFICAÇÃO NO LOCKSCREEN
// ==========================================================================
function initLockscreenNotifications() {
    const btnEnable = document.getElementById('btn-enable-lockscreen-notify');
    const btnTest = document.getElementById('btn-test-lockscreen-notify');
    const btnGenWallMobile = document.getElementById('btn-generate-lockscreen-wallpaper');
    const btnGenWallDesktop = document.getElementById('btn-generate-desktop-wallpaper');
    const selectPhrase = document.getElementById('wallpaper-phrase-select');

    if (selectPhrase) {
        selectPhrase.innerHTML = '<option value="random">🌟 Frase Aleatória Surpresa</option>';
        const all = getAllPrinciples();
        all.forEach(p => {
            const opt = document.createElement('option');
            opt.value = p.id;
            opt.textContent = `[${p.tag}] ${p.title}`;
            selectPhrase.appendChild(opt);
        });
    }

    let selectedWTheme = 'gold';
    const tBtns = document.querySelectorAll('.lockscreen-modal-box .theme-btn');
    tBtns.forEach(b => {
        b.addEventListener('click', () => {
            sfx.play('click');
            tBtns.forEach(x => x.classList.remove('active'));
            b.classList.add('active');
            selectedWTheme = b.getAttribute('data-theme');
        });
    });

    if (btnGenWallMobile) {
        btnGenWallMobile.addEventListener('click', () => {
            sfx.play('star');
            const all = getAllPrinciples();
            let chosen;
            if (selectPhrase && selectPhrase.value !== 'random') {
                chosen = all.find(x => String(x.id) === selectPhrase.value);
            }
            if (!chosen) chosen = all[Math.floor(Math.random() * all.length)];
            
            generateLockscreenWallpaper(chosen, selectedWTheme);
        });
    }

    if (btnGenWallDesktop) {
        btnGenWallDesktop.addEventListener('click', () => {
            sfx.play('star');
            const all = getAllPrinciples();
            let chosen;
            if (selectPhrase && selectPhrase.value !== 'random') {
                chosen = all.find(x => String(x.id) === selectPhrase.value);
            }
            if (!chosen) chosen = all[Math.floor(Math.random() * all.length)];
            
            generateDesktopWallpaper(chosen, selectedWTheme);
        });
    }
}
