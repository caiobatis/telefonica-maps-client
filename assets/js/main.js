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
        name: 'Contar, comparar e operar figuras    geométricas',
        links: ['', '', '']
      },
      {
        name: 'Calendário e cálculos',
        links: ['', '', '']
      },
      {
        name: 'Somando e subtraindo: ampliando    conceitos',
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
        name: 'Para saber mais sobre o sistema    de numeração',
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
  }
]

const renderItemsMap = items => {
  return items.map((e, i, a) => {
    return `<div class="item">
        <a class="titleItem" data-toggle="collapse"
          href="#coll${e.name.split(' ')[e.name.split(' ').length - 1]}" 
          role="button" aria-expanded="false"
          aria-controls="coll${i + a.length}">
          ${e.name}
        </a>
        <div class="collapse" id="coll${e.name.split(' ')[e.name.split(' ').length - 1]}">
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
      </div>`
  })
}

const renderMaps = (maps).map((e, i)=> (`
  <div class="map">
    <div class="title">
      MAPS de <br/><b>${e.title}</b>
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
            <span class="span white">Aqui você encontra diversos guias, <br>interativos ou em PDF, para entender <br>o passo a passo de muita coisa legal.</span>
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
                  <img src="./assets/images/banner-01.jpg">
                  <div class="text">
                    <b>Acesse os conteúdos extras no fim da página</b> 
                  </div>
                </div>
              </li>
              <input type="radio" name="radio-buttons" id="img-2" />
              <li class="slide-container">
                <div class="slide-image">
                  <img src="./assets/images/banner-02.jpg">
                  <div class="text">
                  Acesse o <b>Guia de Conteúdos Pedagógicos</b>, com uma síntese de todos os conteúdos dos MAPs
                  </div>
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
  <div class="footer">
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