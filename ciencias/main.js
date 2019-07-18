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
            value: 'Complemente a atividade utilizando músicas infantis que explorem as diferentes partes do corpo.',
          },
          {
            top: 444,
            left: 498,
            value: 'Nesse momento, eles podem escrever partes que não foram escritas nas fichas, como sobrancelha, coxa, bochecha, cotovelo, ombro e tudo o que considerarem “partes do corpo”, o que seria importante para ampliar tanto a visão de partes do corpo quanto da escrita. Além disso, podem desenhar roupas e acessórios.',
          },
          {
            left: 498,
            bottom: 152,
            value: 'Para expandir, os alunos que desejarem poderão explicar seu desenho para a turma. Depois disso, todos os desenhos podem ser expostos por alguns dias na sala de aula ou na escola. ',
          },
          {
            left: 498,
            bottom: 84,
            align: 'left',
            value: 'Para complementar a atividade, pode-se solicitar que procurem em revistas e jornais imagens de pessoas de diferentes raças, tipos físicos ou características. Depois de recortá-las, proponha uma colagem em painel acompanhada de um debate sobre as semelhanças dos seres humanos ressaltando, ao mesmo tempo, sua diversidade.',
          },
          {
            right: 88,
            top: 197,
            value: 'Professor, é importante destacar que nessa atividade não há vencedor, pois, todos os cartões são desvendados.',
            align: 'left'
          },
          {
            right: 88,
            top: 324,
            value: 'Professor, é importante destacar que nessa atividade não há vencedor, pois, todos os cartões são desvendados.',
            align: 'left'
          },
          {
            right: 88,
            top: 402,
            value: 'Professor, é importante destacar que nessa atividade não há vencedor, pois, todos os cartões são desvendados.',
            align: 'left'
          },
          {
            right: 88,
            bottom: 107,
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
            align: 'left',
            value: '',
            right: 89,
            top: 352,
          },
          {
            align: 'left',
            value: '',
            right: 89,
            top: 505,
          },
          {
            align: 'left',
            value: '',
            right: 89,
            top: 560,
          },
          {
            align: 'left',
            value: '',
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
      {
        title: `titulo2.png`,
        content: `pag4.png`,
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
    id: 4,
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




