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
          <img src="./assets//images/banner-01.png" alt="">
        </div>
      </div>
    </div>
  </div>
  <div class="content">
    <div class="sectionMaps">
      <div class="container">
        <div class="maps">
          <div class="map"></div>
          <div class="map"></div>
          <div class="map"></div>
          <div class="map"></div>
        </div>
      </div>
    </div>
  </div>
  <div class="footer"></div>
</div>`


setTimeout(function() {
  $('.lds-ring').hide(1000)
}, 500)

setTimeout(function() {
  app.hide(500)
  app.html(html)
  app.show(500)
}, 1000)