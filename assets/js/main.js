const app = $('#app')
app.html(`<div class="loader"><div class="lds-ring"><div></div><div></div><div></div><div></div></div></div>`)

const header = 
`<header class="contain-to-grid header">
  <div class="container">
    <div class="row">
      <div class="brands">
        <div class="brand">
          <a href="http://fundacaotelefonica.org.br/" title="Fundação Telefônica | Brasil" rel="home">
            <i class="icon icon-logo-color"></i>
          </a>
        </div>
      </div>
    </div>
  </div>
</header>`

const maps = [
  {
    title: 'Matemática',
    items: [
      {
        name: 'O mundo dos números',
        links: ['', '', '']
      },
      {
        name: 'Contar e calcular',
        links: ['', '', '']
      },
      {
        name: 'Adições que resultam',
        links: ['', '', '']
      },
      {
        name: 'Medir, ordenar e operar',
        links: ['', '', '']
      },
      {
        name: 'Contar, comparar e operar figuras geométricas',
        links: ['', '', '']
      },
      {
        name: 'Calendário e cálculos',
        links: ['', '', '']
      },
      {
        name: 'Somando e subtraindo: ampliando conceitos',
        links: ['', '', '']
      },
      {
        name: 'Números para medir e operar',
        links: ['', '', '']
      },
      {
        name: 'Muitos cálculos',
        links: ['', '', '']
      },
      {
        name: 'Ordenar, comparar e operar',
        links: ['', '', '']
      },
      {
        name: 'Noções geométricas: figuras planas',
        links: ['', '', '']
      },
      {
        name: 'Figuras geométricas tridimensionais',
        links: ['', '', '']
      },
      {
        name: 'Que horas são?',
        links: ['', '', '']
      },
      {
        name: 'Comparação de números',
        links: ['', '', '']
      },
      {
        name: 'Muitas formas de resolver problemas',
        links: ['', '', '']
      },
      {
        name: 'Para saber mais sobre o sistema de numeração',
        links: ['', '', '']
      }
    ]
  },
  {
    title: 'Língua Portuguesa',
    items: [
      {
        name: 'Amigos de cá',
        links: ['', '', '']
      },
      {
        name: 'Troca letra e fábulas',
        links: ['', '', '']
      },
      {
        name: 'Quadrinhas',
        links: ['', '', '']
      },
      {
        name: 'Onomatopeias e poemas',
        links: ['', '', '']
      },
      {
        name: 'Sentimentos e emoções',
        links: ['', '', '']
      },
      {
        name: 'Desafios e histórias',
        links: ['', '', '']
      },
      {
        name: 'Amigos de lá',
        links: ['', '', '']
      },
      {
        name: 'Jogos, mitos e lendas',
        links: ['', '', '']
      },
      {
        name: 'Histórias clássicas',
        links: ['', '', '']
      },
      {
        name: 'Entre x, ch e bruxas',
        links: ['', '', '']
      },
      {
        name: 'Brincar de inventar',
        links: ['', '', '']
      },
      {
        name: 'Inho/ão/s/z e contos',
        links: ['', '', '']
      },
      {
        name: 'Construindo jogos',
        links: ['', '', '']
      },
      {
        name: 'M/n/g/j e relato',
        links: ['', '', '']
      },
      {
        name: 'Relato de passeio',
        links: ['', '', '']
      },
      {
        name: 'Amigos do h e fadas',
        links: ['', '', '']
      },
    ]
  },
  {
    title: 'Ciências',
    items: [
      {
        name: 'O corpo humano',
        links: ['', '', '']
      },
      {
        name: 'Percepção',
        links: ['', '', '']
      },
      {
        name: 'Os alimentos',
        links: ['', '', '']
      },
      {
        name: 'Estudo dos animais',
        links: ['', '', '']
      },
      {
        name: 'Animais vertebrados',
        links: ['', '', '']
      },
      {
        name: 'Convivendo com os animais',
        links: ['', '', '']
      },
      {
        name: 'Paisagens',
        links: ['', '', '']
      },
      {
        name: 'As plantas',
        links: ['', '', '']
      },
      {
        name: 'Cuidados com as plantas',
        links: ['', '', '']
      },
      {
        name: 'Os materiais',
        links: ['', '', '']
      },
      {
        name: 'Água',
        links: ['', '', '']
      },
      {
        name: 'Atmosfera',
        links: ['', '', '']
      },
      {
        name: 'O ar',
        links: ['', '', '']
      },
      {
        name: 'Dia e noite',
        links: ['', '', '']
      },
      {
        name: 'Viagem ao mundo microscópico',
        links: ['', '', '']
      },
      {
        name: 'Localização temporal e espacial',
        links: ['', '', '']
      },
    ]
  },
  {
    title: 'Transversais',
    removeSub: true,
    items: [
      {
        name: 'TECNOLOGIA',
        active: true
      },
      {
        name: 'Tecnologia na sala de aula',
        links: ['', '', '']
      },
      {
        name: 'A história das máquinas e seus tipos',
        links: ['', '', '']
      },
      {
        name: 'A comunicação ao longo dos tempos',
        links: ['', '', '']
      },
      {
        name: 'O computador e seus recursos',
        links: ['', '', '']
      },

      {
        name: 'CIDADANIA',
        active: true
      },
      {
        name: 'Cidadania e convivência na escola',
        links: ['', '', '']
      },
      {
        name: 'Profissionais da escola e a responsabilidade no espaço escolar',
        links: ['', '', '']
      },
      {
        name: 'As relações familiares',
        links: ['', '', '']
      },
      {
        name: 'Elementos da cidade',
        links: ['', '', '']
      },

      {
        name: 'MANEIRAS DE PENSAR',
        active: true
      },
      {
        name: 'Eu e eu mesmo no grupo',
        links: ['', '', '']
      },
      {
        name: 'Eu e eu mesmo no grupo',
        links: ['', '', '']
      },
      {
        name: 'Comportamentos positivos: direitos e deveres',
        links: ['', '', '']
      },
      {
        name: 'Trabalho colaborativo',
        links: ['', '', '']
      },

      {
        name: 'VIDA SAUDÁVEL',
        active: true
      },
      {
        name: 'Hábitos e práticas saudáveis',
        links: ['', '', '']
      },
      {
        name: 'Cuidados pessoais',
        links: ['', '', '']
      },
      {
        name: 'Alimentação saudável',
        links: ['', '', '']
      },
      {
        name: 'Cuidados com a natureza',
        links: ['', '', '']
      },
    ]
  }
]

const renderItemsMap = items => {
  return items.map((e, i, a) => {
    return `<div class="item ${e.active ? 'active' : ''}">
        <a class="titleItem" data-toggle="collapse" href="#coll${i + a.length}${e.name.split(' ')[e.name.split(' ').length - 1]}" role="button" aria-expanded="false" aria-controls="coll${i + a.length}">${e.name}</a>
        ${ e.links ? `
            <div class="collapse" id="coll${i + a.length}${e.name.split(' ')[e.name.split(' ').length - 1]}">
              <div class="links">
                <a class="link" href="${e.links[0]}">
                  Versão Interativa
                </a>
                <a class="link" href="${e.links[1]}">
                  Versão Download
                </a>
                <a class="link" href="${e.links[2]}">
                  Versão Completa
                </a>
              </div>
            </div>
            ` : ''}
      </div>`
  })
}

const renderMaps = (maps).map((e, i)=> (`
  <div class="map">
    <div class="title">
      MAPS ${e.removeSub ? '' : 'de' } <br/><b>${e.title}</b>
    </div>
    <div class="list">
      ${renderItemsMap(e.items)}
    </div>
  </div>`))

const html = 
`<div class="landing">
  ${header}
  <div class="sectionBanners">
    <div class="container plus">
      <div class="banners">
        <div class="bannerFixed">
          <div class="item purple">
            <h4 class="h4 white uppercase">Plataforma <br>de MAPS</h4>
            <span class="span white">Aqui você encontra todos os Manuais de Apoio ao Professor em versão interativa, versão para baixar ou versão completa!</span>
          </div>
          <div class="item">
            <img src="./assets/images/minibanner-01.jpg" alt="">
          </div>
        </div>
        <div class="bannerSlider">
          <div class="carousel">
            <ul class="slides">
              <input type="radio" name="radio-buttons" id="img-1" checked />
              <li class="slide-container">
                <div class="slide-image">
                  <a href="#extraContent">
                    <img src="./assets/images/banner-01.jpg">
                  </a>
                </div>
              </li>
              <input type="radio" name="radio-buttons" id="img-2" />
              <li class="slide-container">
                <div class="slide-image">
                  <a href="#extraContent">
                    <img src="./assets/images/banner-02.jpg">
                  </a>
                </div>
              </li>
              <div class="carousel-dots">
                  <label for="img-1" class="carousel-dot" id="img-dot-1"></label>
                  <label for="img-2" class="carousel-dot" id="img-dot-2"></label>
              </div>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="content">
    <div class="sectionMaps">
      <div class="container plus">
        <div class="title center">
          <h2 class="h2">
            Selecione abaixo <br/><b>o MAP que deseja acessar</b>
          </h2>
        </div>
        <div class="maps">
        ${renderMaps}
        </div>
      </div>
    </div>
  </div>
  <div class="content extra_content" id="extraContent">
    <div class="sectionMaps">
      <div class="container plus">
        <div class="title center">
          <h2 class="h2">
          <b>Conteúdos</b> Extras
          </h2>
        </div>
        <ul class="list extra">
          <li>
            <a href="./../../public/Guia_Pedagógico.pdf">
              <i class="i i-download"></i>
              <p>Guia dos Conteúdos Pedagógicos dos MAPs</p>
            </a>
          </li>
          <li>
            <a href="./../../public/BNCC_Completa_Oficial.pdf">
              <i class="i i-download"></i>
              <p>Base Nacional Comum Curricular</p>
            </a>
          </li>
          <li>
            <a href="./../../public/Curriculo_de_Referencia_em_Tecnologia_e_Computacao.pdf">
              <i class="i i-download"></i>
              <p>Currículo de Referência em Tecnologia e Computação do CIEB</p>
            </a>
          </li>
          <li>
            <a href="./../../public/Guia_Programaê.pdf">
              <i class="i i-download"></i>
              <p>Programaê!: Um Guia para Construção do Pensamento Computacional</p>
            </a>
          </li>
        </ul>
      </div>
    </div>
  </div>
</div>`


setTimeout(function() {
  $('.lds-ring').hide(1000)
}, 500)

setTimeout(function() {
  app.hide(500)
  app.html(html)
  app.show(500)

}, 1000)