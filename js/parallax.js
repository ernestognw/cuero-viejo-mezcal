// function castParallax() {

// 	var opThresh = 350;
//   var opFactor = 750;

//   update();
updateIllustrationsWidth();

  // window.addEventListener("resize", function() {
  //   updateIllustrationsWidth();
  // });

// 	window.addEventListener("scroll", function() {
//     update()
//   });

//   window.addEventListener("scroll", function(){
//     aboutImage();
//   })
// }


function updateIllustrationsWidth() {
  let w = window.innerWidth;
  let h = window.innerHeight;
  let ratio = w / h;

  let layers = document.getElementsByClassName("keyart_layer");  
  let backsize = 0;

  if (ratio <= 1024 / 768){
    backsize = 100*((1024/768)/ratio); 
    backsize = backsize.toString();
    backsize = parseInt(backsize);    
    backsize = backsize + '%'
  } else {
    backsize = '100%'
  }

  for (let i = 0; i < layers.length; i++) {
    layer = layers[i]
    layer.setAttribute('style', 'background-size:' + backsize + '; !important');
  }
}

// function aboutImage() {
//   var aboutImage = document.getElementById('about-image-1')

//   var yScroll = window.scrollY;
//   yScroll -= 800;

//   if(yScroll <= 0){
//     aboutImage.setAttribute('style', 'left:' + yScroll + 'px')
//   }
// }

// document.body.onload = castParallax();			

// init controller
var controller = new ScrollMagic.Controller();

// build tween
var aboutImageTween = TweenMax.to("#about-image-1", 0.1, {x: 850});
// build scene and supply getMousePos function as duration
var scene = new ScrollMagic.Scene({triggerElement: "#trigger", duration: 300})
        .setTween(aboutImageTween)
        .addIndicators() 
        .addTo(controller);
        
var layer = [];
var sceneLayer = [];
var controllerLayer = [];
var keyarts = document.getElementsByClassName("parallax");

for (i = 0; i < 7; i++){
  controllerLayer[i] = new ScrollMagic.Controller();
  let speed = keyarts[i].getAttribute('data-speed');
  let yPos = -(window.innerHeight * speed / 100);   
  layer[i] = TweenMax.to(`#keyart-${i}`, 0.5, {y: yPos});
  sceneLayer[i] = new ScrollMagic.Scene({triggerElement: "#initialTrigger", duration: window.innerHeight})
        .setTween(layer[i])
        .addIndicators() 
        .addTo(controllerLayer[i]);
}