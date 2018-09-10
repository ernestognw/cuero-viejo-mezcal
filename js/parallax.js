updateIllustrationsWidth();

window.addEventListener("resize", function() {
  updateIllustrationsWidth();
});

// Adapta las ilustraciones principales al tamaño del dispositivo
function updateIllustrationsWidth() {
  let w = window.innerWidth;
  let h = window.innerHeight;
  let ratio = w / h;

  let layers = document.getElementsByClassName("keyart_layer");
  let backsize = 0;

  if (ratio <= 1024 / 768) {
    backsize = 100 * (1024 / 768 / ratio);
    backsize = backsize.toString();
    backsize = parseInt(backsize);
    backsize = backsize + "%";
  } else {
    backsize = "100%";
  }

  for (let i = 0; i < layers.length; i++) {
    layer = layers[i];
    layer.setAttribute("style", "background-size:" + backsize + "; !important");
  }
}

// Animación de botellas sección 2
var controller = new ScrollMagic.Controller();

var aboutImageTween = TweenMax.to("#about-image-1", 0.1, { x: 850 });

var scene = new ScrollMagic.Scene({ triggerElement: "#trigger", duration: 300 })
  .setTween(aboutImageTween)
  .addTo(controller);

var layer = [];
var sceneLayer = [];
var controllerLayer = [];
var keyarts = document.getElementsByClassName("parallax");

for (i = 0; i < 6; i++) {
  controllerLayer[i] = new ScrollMagic.Controller();
  let speed = keyarts[i].getAttribute("data-speed");
  let yPos = -((window.innerHeight * speed) / 100);
  layer[i] = TweenMax.to(`#keyart-${i}`, 0.5, { y: yPos });
  sceneLayer[i] = new ScrollMagic.Scene({
    triggerElement: "#initialTrigger",
    duration: window.innerHeight
  })
    .setTween(layer[i])
    .addTo(controllerLayer[i]);
}

// Animación botellas de tienda

var pincontroller = new ScrollMagic.Controller();

var wipeAnimation = new TimelineMax()
  .fromTo(
    "section.panel.sangre",
    1,
    { x: "-100%" },
    { x: "0%", ease: Linear.easeNone }
  ) // in from left
  .fromTo(
    "section.panel.premium",
    1,
    { x: "100%" },
    { x: "0%", ease: Linear.easeNone }
  ) // in from right
  .fromTo(
    "section.section.shop",
    1,
    { y: "-100%" },
    { y: "0%", ease: Linear.easeNone }
  ); // in from top

var pinScene = new ScrollMagic.Scene({
  triggerElement: "#pinContainer",
  triggerHook: "onLeave",
  duration: "500%"
})
  .setPin("#pinContainer")
  .setTween(wipeAnimation)
  .addTo(pincontroller);
