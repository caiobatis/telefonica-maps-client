const app = $('#app')
app.html(`<div class="loader"><div class="lds-ring"><div></div><div></div><div></div><div></div></div></div>`)


const map = [
  {
    pages: [
      {
        title: 'titulo',
        content: 'conteudo',
        tooltips: [
          {
            positionX: 50,
            positionY: 150,
            value: 'teste tooltop'
          },
          {
            positionX: 260,
            positionY: 150,
            value: 'teste tooltop'
          },
        ],
        links: [
          {
            positionX: 260,
            positionY: 150,
            width: 150,
            value: 'teste tooltop'
          }
        ]
      }
    ]
  },
  {
    pages: [
      {
        title: 'titulo',
        content: 'conteudo',
        tooltips: [
          {
            positionX: 50,
            positionY: 150,
            value: 'teste tooltop'
          },
          {
            positionX: 260,
            positionY: 150,
            value: 'teste tooltop'
          },
        ],
        links: [
          {
            positionX: 260,
            positionY: 150,
            width: 150,
            value: 'teste tooltop'
          }
        ]
      }
    ]
  },
  {
    pages: [
      {
        title: 'titulo',
        content: 'conteudo',
        tooltips: [
          {
            positionX: 50,
            positionY: 150,
            value: 'teste tooltop'
          },
          {
            positionX: 260,
            positionY: 150,
            value: 'teste tooltop'
          },
        ],
        links: [
          {
            positionX: 260,
            positionY: 150,
            width: 150,
            value: 'teste tooltop'
          }
        ]
      }
    ]
  }
]

var createStep = () => { 
  return map.map((e, i)=> {
    console.log(e, i)
    return `
      <section class="step ${i==0 ? 'show' : ''}">
        <h1>Teste ${i}</h1>
      </section>
    `
  })
}

const template = 
`<div class="bg">
  <div class="pc">
    <div class="header">
      <div class="title"></div>
    </div>
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
    console.log(step)
    $(".step").removeClass("show")
    $(`[data-step="${step}"]`).addClass("show")
    $(".steps").css("transform", "translateX(-" + step + "00%)");
  },
  next: function() {
    var step = stepForm.getStep($(this).closest(".step")) + 1;
    console.log(step)
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

}, 1000)




