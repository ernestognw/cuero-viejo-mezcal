function castParallax() {

	var opThresh = 350;
  var opFactor = 750;

  update();

  window.addEventListener("resize", function() {
    update()
  });

	window.addEventListener("scroll", function() {
    update()
  });
}


function update() {
  var w = window.innerWidth;
  var h = window.innerHeight;
  var ratio = w / h;

  var top = this.pageYOffset;
  var layers = document.getElementsByClassName("parallax");
  var layer, speed, yPos, backsize;

  if (ratio <= 1024 / 768){
    backsize = 100*((1024/768)/ratio); 
    backsize = backsize.toString();
    backsize = backsize + '%'
    backsize = parseInt(backsize)
  } else {
    backsize = '100%'
  }

  for (var i = 0; i < layers.length; i++) {
    layer = layers[i];
    speed = layer.getAttribute('data-speed');
    var yPos = -(top * speed / 100);
    layer.setAttribute('style', 'transform: translate3d(0px, ' + yPos + 'px, 0px);' + 'background-size:' + backsize + '; !important');
  }
}

document.body.onload = castParallax();