const app = $('#app')
app.html(`<div class="loader"><div class="lds-ring"><div></div><div></div><div></div><div></div></div></div>`)

const color = '#0c9570'
const map = [
  {
    id: 1,
    pages: [
      {
        title: `<img src="./images/CIENCIAS1/ciencias1-titulo1.png">`,
        content: `<img src="./images/CIENCIAS1/ciencias1-pag1.png">`,
        tooltips: [
          {
            right: 122,
            top: 400,
            value: 'The :not selector will not work with other pseudo selectors that are attached to different elements that are also doing pseudo selection.'
          },
          {
            left: 515,
            bottom: 198,
            value: 'teste tooltop'
          },
        ],
        links: [
          {
            left: 210,
            bottom: 100,
            width: 300,
            height: 50,
            value: 'https://www.google.com.br/'
          }
        ]
      },
      {
        title: `<img src="./images/CIENCIAS1/ciencias1-titulo2.png">`,
        content: `<img src="./images/CIENCIAS1/ciencias1-pag1.png">`,
        tooltips: [
          {
            right: 50,
            top: 150,
            value: 'teste tooltop da pagina 2',
            align: 'left'
          },
          {
            right: 260,
            top: 150,
            value: 'teste tooltop',
            align: 'bottom'
          },
        ],
        links: [
          {
            right: 660,
            top: 150,
            width: 150,
            height: 50,
            value: 'teste tooltop'
          }
        ]
      },
      {
        title: `<img src="./images/CIENCIAS1/ciencias1-titulo2.png">`,
        content: `<img src="./images/CIENCIAS1/ciencias1-pag1.png">`,
        tooltips: [
          {
            right: 510,
            top: 650,
            value: 'teste tooltop'
          },
          {
            right: 260,
            top: 150,
            value: 'teste tooltop da pagina 3'
          },
        ],
        links: [
          {
            right: 560,
            top: 350,
            width: 150,
            height: 50,
            value: 'teste tooltop'
          }
        ]
      },
    ]
  }
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
        <div class="header">${e.title}</div>
        <div class="page">${e.content}</div>
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




