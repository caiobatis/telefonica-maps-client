const app = $('#app')
app.html(`<div class="loader"><div class="lds-ring"><div></div><div></div><div></div><div></div></div></div>`)

const color = '#0c9570'
const name = 'ciencias'
const map = [
  {
    id: 1,
    pages: [
      {
        title: `titulo1.png`,
        content: `pag1.png`,
        tooltips: [
          {
            right: 122,
            top: 400,
            value: 'As atividades sobre lateralidade devem ser realizadas após as atividades sobre as diferentes partes do corpo, pois as principais referências usadas são baseadas nessas partes.'
          },
          {
            left: 516,
            bottom: 199,
            value: 'Neste banco de objetos educacionais do MEC, você encontrará recursos variados para desenvolver atividades com alunos de todas as séries do ensino fundamental e outras etapas!'
          },
          {
            left: 517,
            bottom: 139,
            value: 'Com esse aplicativo, os alunos poderão explorar o corpo humano em 3D. Disponível gratuitamente em língua portuguesa!'
          }
        ],
        links: [
          {
            left: 210,
            bottom: 160,
            width: 300,
            height: 50,
            value: 'http://objetoseducacionais2.mec.gov.br/'
          },
          {
            left: 210,
            bottom: 100,
            width: 300,
            height: 50,
            value: 'https://play.google.com/store/apps/details?id=com.catfishanimationstudio.SkeletalSystemPreview&hl=pt_BR'
          },
        ]
      },
      {
        title: `titulo2.png`,
        content: `pag2.png`,
        tooltips: [
          {
            top: 470,
            left: 580,
            value: 'Complemente a atividade utilizando músicas infantis que explorem as diferentes partes do corpo.',
          },
          {
            left: 580,
            bottom: 92,
            value: 'Nesse momento, eles podem escrever partes que não foram escritas nas fichas, como sobrancelha, coxa, bochecha, cotovelo, ombro e tudo o que considerarem “partes do corpo”, o que seria importante para ampliar tanto a visão de partes do corpo quanto da escrita. Além disso, podem desenhar roupas e acessórios.',
          },
          {
            left: 580,
            bottom: 47,
            value: 'Para expandir, os alunos que desejarem poderão explicar seu desenho para a turma. Depois disso, todos os desenhos podem ser expostos por alguns dias na sala de aula ou na escola. ',
          },
          {
            right: 56,
            top: 319,
            align: 'left',
            value: 'Para complementar a atividade, pode-se solicitar que procurem em revistas e jornais imagens de pessoas de diferentes raças, tipos físicos ou características. Depois de recortá-las, proponha uma colagem em painel acompanhada de um debate sobre as semelhanças dos seres humanos ressaltando, ao mesmo tempo, sua diversidade.',
          },
          {
            right: 56,
            top: 613,
            value: 'Professor, é importante destacar que nessa atividade não há vencedor, pois, todos os cartões são desvendados.',
            align: 'left'
          },
        ],
        links: []
      },
      {
        title: `titulo2.png`,
        content: `pag3.png`,
        tooltips: [
          {
            top: 556,
            left: 367,
            value: 'O propósito aqui é construir com o grupo o entendimento de que as articulações são as uniões móveis entre os ossos.'
          },
          {
            right: 436,
            top: 258,
            value: 'Antes das atividades, brinque com seus alunos de fazer caretas. '
          },
          {
            right: 43,
            top: 374,
            align: 'left',
            value: 'Materiais, como pneus, traves de equilíbrio, obstáculos, escada e planos inclinados na forma de percurso ou de arranjos podem ser introduzidos.'
          },
          {
            right: 43,
            align: 'left',
            top: 464,
            value: 'Reserve para esta aula um espaço amplo, arejado e que tenha pequenos desníveis no solo – pequenas escadas, bancos, rampas etc. – para realizar uma atividade de saltos e equilíbrio.'
          },
          {
            left: 526,
            bottom: 115,
            value: 'Em todas as unidades há três perguntas de avaliação que servem para dar retomar os conteúdos aprendidos pelo estudante. Cada uma delas vale 33% do total de 100%.'
          },
          {
            right: 43,
            bottom: 96,
            align: 'left',
            value: 'Você pode fazer uma sistematização na lousa, com a ajuda dos alunos, criando um pequeno resumo do que foi aprendido. Para isso, pode usar a lista de conteúdos ou os objetivos de aprendizagem.'
          },
        ],
        links: []
      },
    ]
  },
  {
    id: 2,
    pages: [
      {
        title: `titulo1.png`,
        content: `pag1.png`,
        tooltips: [
          {
            left: 506,
            bottom: 196,
            value: 'Este site oferece apoio técnico e formação aos professores do Ensino Fundamental e Médio, na área das Ciências.'
          },
          {
            left: 507,
            bottom: 136,
            value: 'Plano de aula para a Educação Infantil sobre a visão.'
          }
        ],
        links: [
          {
            left: 199,
            bottom: 168,
            width: 300,
            height: 50,
            value: 'http://www.cdcc.usp.br'
          },
          {
            left: 199,
            bottom: 103,
            width: 300,
            height: 50,
            value: 'http://portaldoprofessor.mec.gov.br/fichaTecnicaAula.html?aula=25788'
          },
        ]
      },
      {
        title: `titulo2.png`,
        content: `pag2.png`,
        tooltips: [
          {
            top: 387,
            left: 498,
            value: 'Assim, você poderá compreender as hipóteses dos alunos sobre esse assunto, questionar o senso comum e aprimorar o processo de aprendizagem.'
          },
          {
            top: 444,
            left: 498,
            value: 'Procure explorar diferentes atividades físicas para complementar o trabalho aqui proposto.'
          },
          {
            left: 498,
            bottom: 152,
            value: 'Recomende mais de uma criança como pegador para que mais alunos possam compartilhar essa experiência.'
          },
          {
            left: 498,
            bottom: 84,
            align: 'left',
            value: 'Você também sugerir o estudo de outros aspectos do mesmo tema, como as necessidades das pessoas cegas, a influência da visão em nossa opinião sobre algo e o papel das imagens na vida de cada um, por exemplo.'
          },
          {
            right: 88,
            top: 197,
            value: 'Para isso, peça que façam silêncio e fechem os olhos para poder ouvir com detalhes tudo o que for possível.',
            align: 'left'
          },
          {
            right: 88,
            top: 324,
            value: ' Depois dessa conversa em grupo, peça que um representante de cada grupo relate como se passou a discussão. ',
            align: 'left'
          },
          {
            right: 88,
            top: 402,
            value: 'Com base nessa discussão, observe se os conteúdos do material digital podem ajudar a aprofundar os conhecimentos das crianças sobre o sentido da audição.',
            align: 'left'
          },
          {
            right: 88,
            bottom: 107,
            value: 'Registre os cuidados na lousa e depois transfira-os para o mural da sala de aula.',
            align: 'left'
          },
        ],
        links: []
      },
      {
        title: `titulo2.png`,
        content: `pag3.png`,
        tooltips: [
          {
            align: 'left',
            value: 'Se em sua sala tiver algum aluno ou um familiar de um aluno com deficiência visual, você poderá explorar a temática, buscando desenvolver com as crianças atitudes de respeito e inclusão. Mesmo se não houve, é importante abordar esse tema.',
            right: 89,
            top: 352,
          },
          {
            align: 'left',
            value: 'É importante que os alunos percebam que somos diferentes e que nem todos têm as mesmas sensações. ',
            right: 89,
            top: 505,
          },
          {
            align: 'left',
            value: 'Caso em sua escola tenha alguma pessoa com deficiência, ou você e seus alunos conheçam alguém, convide-a para uma conversa com os alunos. Assim, essa pessoa poderá relatar como é ser uma pessoa com deficiência, suas dificuldades, facilidades e superações.',
            right: 89,
            top: 560,
          },
          {
            align: 'left',
            value: 'Em todas as unidades há três perguntas de avaliação que servem para dar retomar os conteúdos aprendidos pelo estudante. Cada uma delas vale 33% do total de 100%.',
            right: 89,
            bottom: 117,
          },
        ],
        links: []
      },
    ]
  },
  {
    id: 3,
    pages: [
      {
        title: `titulo1.png`,
        content: `pag1.png`,
        tooltips: [
          {
            left: 516,
            bottom: 179,
            value: ' Plano de aula para o Ensino Fundamental sobre a importância de uma alimentação saudável.'
          },
          {
            left: 517,
            bottom: 119,
            value: 'Plano de aula para o Ensino Fundamental sobre a pirâmide alimentar, abarcando vários componentes curriculares em um só projeto integrado.'
          }
        ],
        links: [
          {
            left: 189,
            bottom: 147,
            width: 320,
            height: 50,
            value: 'http://portaldoprofessor.mec.gov.br/fichaTecnicaAula.html?aula=20687'
          },
          {
            left: 189,
            bottom: 72,
            width: 320,
            height: 62,
            value: 'http://portaldoprofessor.mec.gov.br/fichaTecnicaAula.html?aula=23683'
          },
        ]
      },
      {
        title: `titulo2.png`,
        content: `pag2.png`,
        tooltips: [
          {
            left: 578,
            bottom: 105,
            value: 'Assim esses alimentos podem ser vistos e até substituídos sempre que os alunos sentirem necessidade. ',
          },
          {
            right: 100,
            top: 574,
            value: 'Também deixe o espaço para que os alimentos sejam vistos e substituídos sempre que os alunos sentirem necessidade. ',
            align: 'left'
          },
        ],
        links: []
      },
      {
        title: `titulo2.png`,
        content: `pag3.png`,
        tooltips: [
          {
            top: 427,
            left: 561,
            value: 'Você poderá utilizar algumas indicações da bibliografia para trabalhar os temas: pirâmide alimentar; alimentos energéticos, reguladores e construtores etc.',
          },
          {
            left: 561,
            bottom: 177,
            value: 'A pirâmide alimentar mostra que todos os alimentos (energéticos, reguladores e construtores) são indispensáveis para o equilíbrio e o funcionamento do corpo humano.',
          },
          {
            left: 561,
            bottom: 107,
            value: 'Chame a atenção do grupo para a divisão da pirâmide em 8 grupos de alimentos. Os alimentos da base devem ser ingeridos com mais frequência, ao contrário dos alimentos do topo, que devem ser pouco consumidos.',
          },
          {
            right: 109,
            top: 384,
            value: 'Esse cartaz pode ficar no mural da sala para que seja visto e ajustado sempre que os alunos sentirem necessidade.',
            align: 'left'
          },
        ],
        links: []
      },
      {
        title: `titulo2.png`,
        content: `pag4.png`,
        tooltips: [
          {
            left: 531,
            bottom: 191,
            value: 'Aproveite a oportunidade para fazer comparações entre os diversos hábitos alimentares.',
          },
          {
            right: 169,
            top: 433,
            value: 'Copie esse texto em um papel grande e fazer um cartaz para a sala.',
            align: 'left'
          },
          {
            right: 169,
            top: 628,
            value: 'Em todas as unidades há três perguntas de avaliação que servem para dar retomar os conteúdos aprendidos pelo estudante. Cada uma delas vale 33% do total de 100%.',
            align: 'left'
          },
        ],
        links: []
      },
    ]
  },
  {
    id: 4,
    pages: [
      {
        title: `titulo1.png`,
        content: `pag1.png`,
        tooltips: [
          {
            left: 478,
            bottom: 177,
            value: 'Livro disponível online de forma gratuita com muitas informações sobre as espécies da fauna brasileira ameaçadas de extinção sobre a conservação do meio ambiente!'
          }
        ],
        links: [
          {
            left: 210,
            bottom: 145,
            width: 265,
            height: 50,
            value: 'http://livroaberto.ibict.br/handle/1/1056'
          }
        ]
      },
      {
        title: `titulo2.png`,
        content: `pag2.png`,
        tooltips: [
          {
            top: 372,
            left: 496,
            value: 'Muitas crianças terão interesse em aprofundar suas pesquisas sobre esse assunto. Proponha que façam fichas sobre os animais com uma descrição de suas características e hábitos. ',
          },
          {
            top: 483,
            left: 496,
            value: 'Aproveite para fazer uma contextualização geral da matéria!',
          },
          {
            right: 105,
            top: 374,
            value: 'A qualquer momento, sempre que os alunos acharem uma cobertura diferente, devem acrescentá-la ao cartaz.',
            align: 'left',
          },
          {
            right: 105,
            top: 463,
            align: 'left',
            value: 'Registre essas informações no mural da sala para que sejam vistas e ajustadas sempre que os alunos sentirem necessidade.',
          },
          {
            right: 105,
            bottom: 123,
            value: 'Ao final, cole os desenhos no mural da sala para que seja visto e ajustado sempre que os alunos sentirem necessidade.',
            align: 'left'
          },
        ],
        links: []
      },
      {
        title: `titulo2.png`,
        content: `pag3.png`,
        tooltips: [
          {
            top: 392,
            left: 541,
            value: 'Peça que desenhem os alimentos que cada animal ingere e cole os desenhos no mural da sala para que seja visto e ajustado sempre que os alunos sentirem necessidade.'
          },
          {
            top: 563,
            left: 541,
            value: 'É muito importante que você aproveite esse tema e amplie a discussão para os animais que vivem apenas no Brasil e quais são os que estão em risco de extinção.'
          },
          {
            right: 190,
            top: 492,
            value: 'Atenção, professor: traga um exemplo de ficha para cada grupo!'
          },
          {
            right: 190,
            top: 705,
            value: 'Em todas as unidades há três perguntas de avaliação que servem para dar retomar os conteúdos aprendidos pelo estudante. Cada uma delas vale 33% do total de 100%.'
          },
        ],
        links: []
      },
    ]
  },
  {
    id: 5,
    pages: [
      {
        title: `titulo1.png`,
        content: `pag1.png`,
        tooltips: [
          {
            right: 122,
            top: 400,
            value: 'As atividades sobre lateralidade devem ser realizadas após as atividades sobre as diferentes partes do corpo, pois as principais referências usadas são baseadas nessas partes.'
          },
          {
            left: 516,
            bottom: 199,
            value: 'Neste banco de objetos educacionais do MEC, você encontrará recursos variados para desenvolver atividades com alunos de todas as séries do ensino fundamental e outras etapas!'
          },
          {
            left: 517,
            bottom: 139,
            value: 'Com esse aplicativo, os alunos poderão explorar o corpo humano em 3D. Disponível gratuitamente em língua portuguesa!'
          }
        ],
        links: [
          {
            left: 210,
            bottom: 160,
            width: 300,
            height: 50,
            value: 'http://objetoseducacionais2.mec.gov.br/'
          },
          {
            left: 210,
            bottom: 100,
            width: 300,
            height: 50,
            value: 'https://play.google.com/store/apps/details?id=com.catfishanimationstudio.SkeletalSystemPreview&hl=pt_BR'
          },
        ]
      },
      {
        title: `titulo2.png`,
        content: `pag2.png`,
        tooltips: [
          {
            top: 470,
            left: 580,
            value: 'Complemente a atividade utilizando músicas infantis que explorem as diferentes partes do corpo.',
          },
          {
            left: 580,
            bottom: 92,
            value: 'Nesse momento, eles podem escrever partes que não foram escritas nas fichas, como sobrancelha, coxa, bochecha, cotovelo, ombro e tudo o que considerarem “partes do corpo”, o que seria importante para ampliar tanto a visão de partes do corpo quanto da escrita. Além disso, podem desenhar roupas e acessórios.',
          },
          {
            left: 580,
            bottom: 47,
            value: 'Para expandir, os alunos que desejarem poderão explicar seu desenho para a turma. Depois disso, todos os desenhos podem ser expostos por alguns dias na sala de aula ou na escola. ',
          },
          {
            right: 56,
            top: 319,
            align: 'left',
            value: 'Para complementar a atividade, pode-se solicitar que procurem em revistas e jornais imagens de pessoas de diferentes raças, tipos físicos ou características. Depois de recortá-las, proponha uma colagem em painel acompanhada de um debate sobre as semelhanças dos seres humanos ressaltando, ao mesmo tempo, sua diversidade.',
          },
          {
            right: 56,
            top: 613,
            value: 'Professor, é importante destacar que nessa atividade não há vencedor, pois, todos os cartões são desvendados.',
            align: 'left'
          },
        ],
        links: []
      },
      {
        title: `titulo2.png`,
        content: `pag3.png`,
        tooltips: [
          {
            top: 556,
            left: 367,
            value: 'O propósito aqui é construir com o grupo o entendimento de que as articulações são as uniões móveis entre os ossos.'
          },
          {
            right: 436,
            top: 258,
            value: 'Antes das atividades, brinque com seus alunos de fazer caretas. '
          },
          {
            right: 43,
            top: 374,
            align: 'left',
            value: 'Materiais, como pneus, traves de equilíbrio, obstáculos, escada e planos inclinados na forma de percurso ou de arranjos podem ser introduzidos.'
          },
          {
            right: 43,
            align: 'left',
            top: 464,
            value: 'Reserve para esta aula um espaço amplo, arejado e que tenha pequenos desníveis no solo – pequenas escadas, bancos, rampas etc. – para realizar uma atividade de saltos e equilíbrio.'
          },
          {
            left: 526,
            bottom: 115,
            value: 'Em todas as unidades há três perguntas de avaliação que servem para dar retomar os conteúdos aprendidos pelo estudante. Cada uma delas vale 33% do total de 100%.'
          },
          {
            right: 43,
            bottom: 96,
            align: 'left',
            value: 'Você pode fazer uma sistematização na lousa, com a ajuda dos alunos, criando um pequeno resumo do que foi aprendido. Para isso, pode usar a lista de conteúdos ou os objetivos de aprendizagem.'
          },
        ],
        links: []
      },
    ]
  },
  {
    id: 6,
    pages: [
      {
        title: `titulo1.png`,
        content: `pag1.png`,
        tooltips: [
          {
            right: 122,
            top: 400,
            value: 'As atividades sobre lateralidade devem ser realizadas após as atividades sobre as diferentes partes do corpo, pois as principais referências usadas são baseadas nessas partes.'
          },
          {
            left: 516,
            bottom: 199,
            value: 'Neste banco de objetos educacionais do MEC, você encontrará recursos variados para desenvolver atividades com alunos de todas as séries do ensino fundamental e outras etapas!'
          },
          {
            left: 517,
            bottom: 139,
            value: 'Com esse aplicativo, os alunos poderão explorar o corpo humano em 3D. Disponível gratuitamente em língua portuguesa!'
          }
        ],
        links: [
          {
            left: 210,
            bottom: 160,
            width: 300,
            height: 50,
            value: 'http://objetoseducacionais2.mec.gov.br/'
          },
          {
            left: 210,
            bottom: 100,
            width: 300,
            height: 50,
            value: 'https://play.google.com/store/apps/details?id=com.catfishanimationstudio.SkeletalSystemPreview&hl=pt_BR'
          },
        ]
      },
      {
        title: `titulo2.png`,
        content: `pag2.png`,
        tooltips: [
          {
            top: 470,
            left: 580,
            value: 'Complemente a atividade utilizando músicas infantis que explorem as diferentes partes do corpo.',
          },
          {
            left: 580,
            bottom: 92,
            value: 'Nesse momento, eles podem escrever partes que não foram escritas nas fichas, como sobrancelha, coxa, bochecha, cotovelo, ombro e tudo o que considerarem “partes do corpo”, o que seria importante para ampliar tanto a visão de partes do corpo quanto da escrita. Além disso, podem desenhar roupas e acessórios.',
          },
          {
            left: 580,
            bottom: 47,
            value: 'Para expandir, os alunos que desejarem poderão explicar seu desenho para a turma. Depois disso, todos os desenhos podem ser expostos por alguns dias na sala de aula ou na escola. ',
          },
          {
            right: 56,
            top: 319,
            align: 'left',
            value: 'Para complementar a atividade, pode-se solicitar que procurem em revistas e jornais imagens de pessoas de diferentes raças, tipos físicos ou características. Depois de recortá-las, proponha uma colagem em painel acompanhada de um debate sobre as semelhanças dos seres humanos ressaltando, ao mesmo tempo, sua diversidade.',
          },
          {
            right: 56,
            top: 613,
            value: 'Professor, é importante destacar que nessa atividade não há vencedor, pois, todos os cartões são desvendados.',
            align: 'left'
          },
        ],
        links: []
      },
      {
        title: `titulo2.png`,
        content: `pag3.png`,
        tooltips: [
          {
            top: 556,
            left: 367,
            value: 'O propósito aqui é construir com o grupo o entendimento de que as articulações são as uniões móveis entre os ossos.'
          },
          {
            right: 436,
            top: 258,
            value: 'Antes das atividades, brinque com seus alunos de fazer caretas. '
          },
          {
            right: 43,
            top: 374,
            align: 'left',
            value: 'Materiais, como pneus, traves de equilíbrio, obstáculos, escada e planos inclinados na forma de percurso ou de arranjos podem ser introduzidos.'
          },
          {
            right: 43,
            align: 'left',
            top: 464,
            value: 'Reserve para esta aula um espaço amplo, arejado e que tenha pequenos desníveis no solo – pequenas escadas, bancos, rampas etc. – para realizar uma atividade de saltos e equilíbrio.'
          },
          {
            left: 526,
            bottom: 115,
            value: 'Em todas as unidades há três perguntas de avaliação que servem para dar retomar os conteúdos aprendidos pelo estudante. Cada uma delas vale 33% do total de 100%.'
          },
          {
            right: 43,
            bottom: 96,
            align: 'left',
            value: 'Você pode fazer uma sistematização na lousa, com a ajuda dos alunos, criando um pequeno resumo do que foi aprendido. Para isso, pode usar a lista de conteúdos ou os objetivos de aprendizagem.'
          },
        ],
        links: []
      },
    ]
  },
  {
    id: 7,
    pages: [
      {
        title: `titulo1.png`,
        content: `pag1.png`,
        tooltips: [
          {
            right: 122,
            top: 400,
            value: 'As atividades sobre lateralidade devem ser realizadas após as atividades sobre as diferentes partes do corpo, pois as principais referências usadas são baseadas nessas partes.'
          },
          {
            left: 516,
            bottom: 199,
            value: 'Neste banco de objetos educacionais do MEC, você encontrará recursos variados para desenvolver atividades com alunos de todas as séries do ensino fundamental e outras etapas!'
          },
          {
            left: 517,
            bottom: 139,
            value: 'Com esse aplicativo, os alunos poderão explorar o corpo humano em 3D. Disponível gratuitamente em língua portuguesa!'
          }
        ],
        links: [
          {
            left: 210,
            bottom: 160,
            width: 300,
            height: 50,
            value: 'http://objetoseducacionais2.mec.gov.br/'
          },
          {
            left: 210,
            bottom: 100,
            width: 300,
            height: 50,
            value: 'https://play.google.com/store/apps/details?id=com.catfishanimationstudio.SkeletalSystemPreview&hl=pt_BR'
          },
        ]
      },
      {
        title: `titulo2.png`,
        content: `pag2.png`,
        tooltips: [
          {
            top: 470,
            left: 580,
            value: 'Complemente a atividade utilizando músicas infantis que explorem as diferentes partes do corpo.',
          },
          {
            left: 580,
            bottom: 92,
            value: 'Nesse momento, eles podem escrever partes que não foram escritas nas fichas, como sobrancelha, coxa, bochecha, cotovelo, ombro e tudo o que considerarem “partes do corpo”, o que seria importante para ampliar tanto a visão de partes do corpo quanto da escrita. Além disso, podem desenhar roupas e acessórios.',
          },
          {
            left: 580,
            bottom: 47,
            value: 'Para expandir, os alunos que desejarem poderão explicar seu desenho para a turma. Depois disso, todos os desenhos podem ser expostos por alguns dias na sala de aula ou na escola. ',
          },
          {
            right: 56,
            top: 319,
            align: 'left',
            value: 'Para complementar a atividade, pode-se solicitar que procurem em revistas e jornais imagens de pessoas de diferentes raças, tipos físicos ou características. Depois de recortá-las, proponha uma colagem em painel acompanhada de um debate sobre as semelhanças dos seres humanos ressaltando, ao mesmo tempo, sua diversidade.',
          },
          {
            right: 56,
            top: 613,
            value: 'Professor, é importante destacar que nessa atividade não há vencedor, pois, todos os cartões são desvendados.',
            align: 'left'
          },
        ],
        links: []
      },
      {
        title: `titulo2.png`,
        content: `pag3.png`,
        tooltips: [
          {
            top: 556,
            left: 367,
            value: 'O propósito aqui é construir com o grupo o entendimento de que as articulações são as uniões móveis entre os ossos.'
          },
          {
            right: 436,
            top: 258,
            value: 'Antes das atividades, brinque com seus alunos de fazer caretas. '
          },
          {
            right: 43,
            top: 374,
            align: 'left',
            value: 'Materiais, como pneus, traves de equilíbrio, obstáculos, escada e planos inclinados na forma de percurso ou de arranjos podem ser introduzidos.'
          },
          {
            right: 43,
            align: 'left',
            top: 464,
            value: 'Reserve para esta aula um espaço amplo, arejado e que tenha pequenos desníveis no solo – pequenas escadas, bancos, rampas etc. – para realizar uma atividade de saltos e equilíbrio.'
          },
          {
            left: 526,
            bottom: 115,
            value: 'Em todas as unidades há três perguntas de avaliação que servem para dar retomar os conteúdos aprendidos pelo estudante. Cada uma delas vale 33% do total de 100%.'
          },
          {
            right: 43,
            bottom: 96,
            align: 'left',
            value: 'Você pode fazer uma sistematização na lousa, com a ajuda dos alunos, criando um pequeno resumo do que foi aprendido. Para isso, pode usar a lista de conteúdos ou os objetivos de aprendizagem.'
          },
        ],
        links: []
      },
    ]
  },
  {
    id: 8,
    pages: [
      {
        title: `titulo1.png`,
        content: `pag1.png`,
        tooltips: [
          {
            right: 122,
            top: 400,
            value: 'As atividades sobre lateralidade devem ser realizadas após as atividades sobre as diferentes partes do corpo, pois as principais referências usadas são baseadas nessas partes.'
          },
          {
            left: 516,
            bottom: 199,
            value: 'Neste banco de objetos educacionais do MEC, você encontrará recursos variados para desenvolver atividades com alunos de todas as séries do ensino fundamental e outras etapas!'
          },
          {
            left: 517,
            bottom: 139,
            value: 'Com esse aplicativo, os alunos poderão explorar o corpo humano em 3D. Disponível gratuitamente em língua portuguesa!'
          }
        ],
        links: [
          {
            left: 210,
            bottom: 160,
            width: 300,
            height: 50,
            value: 'http://objetoseducacionais2.mec.gov.br/'
          },
          {
            left: 210,
            bottom: 100,
            width: 300,
            height: 50,
            value: 'https://play.google.com/store/apps/details?id=com.catfishanimationstudio.SkeletalSystemPreview&hl=pt_BR'
          },
        ]
      },
      {
        title: `titulo2.png`,
        content: `pag2.png`,
        tooltips: [
          {
            top: 470,
            left: 580,
            value: 'Complemente a atividade utilizando músicas infantis que explorem as diferentes partes do corpo.',
          },
          {
            left: 580,
            bottom: 92,
            value: 'Nesse momento, eles podem escrever partes que não foram escritas nas fichas, como sobrancelha, coxa, bochecha, cotovelo, ombro e tudo o que considerarem “partes do corpo”, o que seria importante para ampliar tanto a visão de partes do corpo quanto da escrita. Além disso, podem desenhar roupas e acessórios.',
          },
          {
            left: 580,
            bottom: 47,
            value: 'Para expandir, os alunos que desejarem poderão explicar seu desenho para a turma. Depois disso, todos os desenhos podem ser expostos por alguns dias na sala de aula ou na escola. ',
          },
          {
            right: 56,
            top: 319,
            align: 'left',
            value: 'Para complementar a atividade, pode-se solicitar que procurem em revistas e jornais imagens de pessoas de diferentes raças, tipos físicos ou características. Depois de recortá-las, proponha uma colagem em painel acompanhada de um debate sobre as semelhanças dos seres humanos ressaltando, ao mesmo tempo, sua diversidade.',
          },
          {
            right: 56,
            top: 613,
            value: 'Professor, é importante destacar que nessa atividade não há vencedor, pois, todos os cartões são desvendados.',
            align: 'left'
          },
        ],
        links: []
      },
      {
        title: `titulo2.png`,
        content: `pag3.png`,
        tooltips: [
          {
            top: 556,
            left: 367,
            value: 'O propósito aqui é construir com o grupo o entendimento de que as articulações são as uniões móveis entre os ossos.'
          },
          {
            right: 436,
            top: 258,
            value: 'Antes das atividades, brinque com seus alunos de fazer caretas. '
          },
          {
            right: 43,
            top: 374,
            align: 'left',
            value: 'Materiais, como pneus, traves de equilíbrio, obstáculos, escada e planos inclinados na forma de percurso ou de arranjos podem ser introduzidos.'
          },
          {
            right: 43,
            align: 'left',
            top: 464,
            value: 'Reserve para esta aula um espaço amplo, arejado e que tenha pequenos desníveis no solo – pequenas escadas, bancos, rampas etc. – para realizar uma atividade de saltos e equilíbrio.'
          },
          {
            left: 526,
            bottom: 115,
            value: 'Em todas as unidades há três perguntas de avaliação que servem para dar retomar os conteúdos aprendidos pelo estudante. Cada uma delas vale 33% do total de 100%.'
          },
          {
            right: 43,
            bottom: 96,
            align: 'left',
            value: 'Você pode fazer uma sistematização na lousa, com a ajuda dos alunos, criando um pequeno resumo do que foi aprendido. Para isso, pode usar a lista de conteúdos ou os objetivos de aprendizagem.'
          },
        ],
        links: []
      },
    ]
  },
  {
    id: 9,
    pages: [
      {
        title: `titulo1.png`,
        content: `pag1.png`,
        tooltips: [
          {
            right: 122,
            top: 400,
            value: 'As atividades sobre lateralidade devem ser realizadas após as atividades sobre as diferentes partes do corpo, pois as principais referências usadas são baseadas nessas partes.'
          },
          {
            left: 516,
            bottom: 199,
            value: 'Neste banco de objetos educacionais do MEC, você encontrará recursos variados para desenvolver atividades com alunos de todas as séries do ensino fundamental e outras etapas!'
          },
          {
            left: 517,
            bottom: 139,
            value: 'Com esse aplicativo, os alunos poderão explorar o corpo humano em 3D. Disponível gratuitamente em língua portuguesa!'
          }
        ],
        links: [
          {
            left: 210,
            bottom: 160,
            width: 300,
            height: 50,
            value: 'http://objetoseducacionais2.mec.gov.br/'
          },
          {
            left: 210,
            bottom: 100,
            width: 300,
            height: 50,
            value: 'https://play.google.com/store/apps/details?id=com.catfishanimationstudio.SkeletalSystemPreview&hl=pt_BR'
          },
        ]
      },
      {
        title: `titulo2.png`,
        content: `pag2.png`,
        tooltips: [
          {
            top: 470,
            left: 580,
            value: 'Complemente a atividade utilizando músicas infantis que explorem as diferentes partes do corpo.',
          },
          {
            left: 580,
            bottom: 92,
            value: 'Nesse momento, eles podem escrever partes que não foram escritas nas fichas, como sobrancelha, coxa, bochecha, cotovelo, ombro e tudo o que considerarem “partes do corpo”, o que seria importante para ampliar tanto a visão de partes do corpo quanto da escrita. Além disso, podem desenhar roupas e acessórios.',
          },
          {
            left: 580,
            bottom: 47,
            value: 'Para expandir, os alunos que desejarem poderão explicar seu desenho para a turma. Depois disso, todos os desenhos podem ser expostos por alguns dias na sala de aula ou na escola. ',
          },
          {
            right: 56,
            top: 319,
            align: 'left',
            value: 'Para complementar a atividade, pode-se solicitar que procurem em revistas e jornais imagens de pessoas de diferentes raças, tipos físicos ou características. Depois de recortá-las, proponha uma colagem em painel acompanhada de um debate sobre as semelhanças dos seres humanos ressaltando, ao mesmo tempo, sua diversidade.',
          },
          {
            right: 56,
            top: 613,
            value: 'Professor, é importante destacar que nessa atividade não há vencedor, pois, todos os cartões são desvendados.',
            align: 'left'
          },
        ],
        links: []
      },
      {
        title: `titulo2.png`,
        content: `pag3.png`,
        tooltips: [
          {
            top: 556,
            left: 367,
            value: 'O propósito aqui é construir com o grupo o entendimento de que as articulações são as uniões móveis entre os ossos.'
          },
          {
            right: 436,
            top: 258,
            value: 'Antes das atividades, brinque com seus alunos de fazer caretas. '
          },
          {
            right: 43,
            top: 374,
            align: 'left',
            value: 'Materiais, como pneus, traves de equilíbrio, obstáculos, escada e planos inclinados na forma de percurso ou de arranjos podem ser introduzidos.'
          },
          {
            right: 43,
            align: 'left',
            top: 464,
            value: 'Reserve para esta aula um espaço amplo, arejado e que tenha pequenos desníveis no solo – pequenas escadas, bancos, rampas etc. – para realizar uma atividade de saltos e equilíbrio.'
          },
          {
            left: 526,
            bottom: 115,
            value: 'Em todas as unidades há três perguntas de avaliação que servem para dar retomar os conteúdos aprendidos pelo estudante. Cada uma delas vale 33% do total de 100%.'
          },
          {
            right: 43,
            bottom: 96,
            align: 'left',
            value: 'Você pode fazer uma sistematização na lousa, com a ajuda dos alunos, criando um pequeno resumo do que foi aprendido. Para isso, pode usar a lista de conteúdos ou os objetivos de aprendizagem.'
          },
        ],
        links: []
      },
    ]
  },
  {
    id: 10,
    pages: [
      {
        title: `titulo1.png`,
        content: `pag1.png`,
        tooltips: [
          {
            right: 122,
            top: 400,
            value: 'As atividades sobre lateralidade devem ser realizadas após as atividades sobre as diferentes partes do corpo, pois as principais referências usadas são baseadas nessas partes.'
          },
          {
            left: 516,
            bottom: 199,
            value: 'Neste banco de objetos educacionais do MEC, você encontrará recursos variados para desenvolver atividades com alunos de todas as séries do ensino fundamental e outras etapas!'
          },
          {
            left: 517,
            bottom: 139,
            value: 'Com esse aplicativo, os alunos poderão explorar o corpo humano em 3D. Disponível gratuitamente em língua portuguesa!'
          }
        ],
        links: [
          {
            left: 210,
            bottom: 160,
            width: 300,
            height: 50,
            value: 'http://objetoseducacionais2.mec.gov.br/'
          },
          {
            left: 210,
            bottom: 100,
            width: 300,
            height: 50,
            value: 'https://play.google.com/store/apps/details?id=com.catfishanimationstudio.SkeletalSystemPreview&hl=pt_BR'
          },
        ]
      },
      {
        title: `titulo2.png`,
        content: `pag2.png`,
        tooltips: [
          {
            top: 470,
            left: 580,
            value: 'Complemente a atividade utilizando músicas infantis que explorem as diferentes partes do corpo.',
          },
          {
            left: 580,
            bottom: 92,
            value: 'Nesse momento, eles podem escrever partes que não foram escritas nas fichas, como sobrancelha, coxa, bochecha, cotovelo, ombro e tudo o que considerarem “partes do corpo”, o que seria importante para ampliar tanto a visão de partes do corpo quanto da escrita. Além disso, podem desenhar roupas e acessórios.',
          },
          {
            left: 580,
            bottom: 47,
            value: 'Para expandir, os alunos que desejarem poderão explicar seu desenho para a turma. Depois disso, todos os desenhos podem ser expostos por alguns dias na sala de aula ou na escola. ',
          },
          {
            right: 56,
            top: 319,
            align: 'left',
            value: 'Para complementar a atividade, pode-se solicitar que procurem em revistas e jornais imagens de pessoas de diferentes raças, tipos físicos ou características. Depois de recortá-las, proponha uma colagem em painel acompanhada de um debate sobre as semelhanças dos seres humanos ressaltando, ao mesmo tempo, sua diversidade.',
          },
          {
            right: 56,
            top: 613,
            value: 'Professor, é importante destacar que nessa atividade não há vencedor, pois, todos os cartões são desvendados.',
            align: 'left'
          },
        ],
        links: []
      },
      {
        title: `titulo2.png`,
        content: `pag3.png`,
        tooltips: [
          {
            top: 556,
            left: 367,
            value: 'O propósito aqui é construir com o grupo o entendimento de que as articulações são as uniões móveis entre os ossos.'
          },
          {
            right: 436,
            top: 258,
            value: 'Antes das atividades, brinque com seus alunos de fazer caretas. '
          },
          {
            right: 43,
            top: 374,
            align: 'left',
            value: 'Materiais, como pneus, traves de equilíbrio, obstáculos, escada e planos inclinados na forma de percurso ou de arranjos podem ser introduzidos.'
          },
          {
            right: 43,
            align: 'left',
            top: 464,
            value: 'Reserve para esta aula um espaço amplo, arejado e que tenha pequenos desníveis no solo – pequenas escadas, bancos, rampas etc. – para realizar uma atividade de saltos e equilíbrio.'
          },
          {
            left: 526,
            bottom: 115,
            value: 'Em todas as unidades há três perguntas de avaliação que servem para dar retomar os conteúdos aprendidos pelo estudante. Cada uma delas vale 33% do total de 100%.'
          },
          {
            right: 43,
            bottom: 96,
            align: 'left',
            value: 'Você pode fazer uma sistematização na lousa, com a ajuda dos alunos, criando um pequeno resumo do que foi aprendido. Para isso, pode usar a lista de conteúdos ou os objetivos de aprendizagem.'
          },
        ],
        links: []
      },
    ]
  },
]

const createTooltips = tooltips => {
  return tooltips.map(e=> {
    return `
    <div class="tooltip ${e.align}" style="right: ${e.right}px; top: ${e.top}px; left: ${e.left}px; bottom: ${e.bottom}px;">
      <div class="text">
        <div class="content">
          <span>${e.value}</span>
        </div>
      </div>
      <div class="icon"></div>
    </div>    
    `
  })
}

const createLinks = tooltips => {
  return tooltips.map(e=> {
    return `
    <div class="links" style="right: ${e.right}px; top: ${e.top}px; left: ${e.left}px; bottom: ${e.bottom}px; width: ${e.width}px; height: ${e.height}px;">
      <a href="${e.value}" target="_blank"></a>
    </div>    
    `
  })
}

function hoverTooltips() {
  $('.tooltip').hover(function() {
    $(this).addClass('show')
    $(this).find('.text').addClass('show')
  }, function() {
    $(this).removeClass('show')
    $(this).find('.text').removeClass('show')
  })
}

const searchMap = () => {
  let _map
  map.map(e => {
    if(e.id == document.location.search.replace('?id=',''))
      _map = e
  })
  return _map
}

const createStep = () => {
  const map = searchMap()
  return map.pages.map((e, i)=> {
    return `
      <section class="step ${i==0 ? 'show' : ''}">
        <div class="header">
          <img src="./images/${name.toUpperCase()}${map.id}/${name}${map.id}-${e.title}"/>
        </div>
        <div class="page"><img src="./images/${name.toUpperCase()}${map.id}/${name}${map.id}-${e.content}"/></div>
        ${createTooltips(e.tooltips)}
        ${createLinks(e.links)}
      </section>
    `
  })
}

const template = 
`<div class="bg" style="background-color: ${color}">
  <div class="pc">
    <div class="body">
      <div class="content">
        <div class="step-form">
          <div class="steps">
            ${createStep()}
          </div>
        </div>
      </div>
    </div>
  </div>
 </div>`

const html = 
`<div class="landing">
  ${template}
 </div>`

 var stepForm = {
  init: function() {
    stepForm.build();
    $(".js-step-next").click(stepForm.next);
    $(".js-step-prev").click(stepForm.prev);
    $(".js-step-goto").click(stepForm.goTo);
  },
  build: function() {
    var nextBtn   = "<button class='js-step-next'>Next</button>",
        prevBtn   = "<button class='js-step-prev'>Prev</button>",
        container = "<div class='step-controls'></div>";
    
    $(".step-form .step").append(container);
    $(".step-form .step .step-controls").not(':first').append(prevBtn);
    $(".step-form .step .step-controls").not(':last').append(nextBtn);
    
    $(".step-form .step").each(stepForm.attrData);
    
    var gotoWrapper = "<div class='step-goto'></div>";
    
    $(".step-form").prepend(gotoWrapper);
    // $(".step-form .step").each(stepForm.addGoToItems);
    $(".step-form .goto-item").each(stepForm.attrData);
    $(".step-form .goto-item:first").addClass("active");
  },
  addGoToItems: function(index) {
    var gotoLabel = index + 1,
        gotoItem  = "<span class='goto-item js-step-goto'>" + gotoLabel + "</span>";
    
    // $(".step-goto").append(gotoItem);
  },
  attrData: function(index) {
    $(this).attr("data-step", index);
  },
  prev: function() {
    var step = stepForm.getStep($(this).closest(".step")) - 1;
    $(".step").removeClass("show")
    $(`[data-step="${step}"]`).addClass("show")
    $(".steps").css("transform", "translateX(-" + step + "00%)");
  },
  next: function() {
    var step = stepForm.getStep($(this).closest(".step")) + 1;
    $(".step").removeClass("show")
    $(`[data-step="${step}"]`).addClass("show")
    $(".steps").css("transform", "translateX(-" + step + "00%)");
  },
  goTo: function() {
    var step = stepForm.getStep($(this));
    $(".step-goto .goto-item").removeClass("active");
    $(this).addClass("active");
    $(".steps").css("transform", "translateX(-" + step + "00%)");
  },
  getStep: function(container) {
    var step = parseInt(container.data("step"));
    return step;
  }
}

setTimeout(function() {
  $('.lds-ring').hide(1000)
}, 500)

setTimeout(function() {
  // app.addClass('hide')
  app.html(html)
  app.removeClass('hide')
  stepForm.init()
  hoverTooltips()

}, 1000)




