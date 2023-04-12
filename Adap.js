var polosa = document.getElementById("polosa");
var currentImage = 0;
var timer;
var a = 868; // размер изображения(368) + 10% от 5000(slider width)

function autoSlider() {
timer = setTimeout( function () {
  currentImage = (currentImage + 1) % polosa.children.length;
  var left = - (currentImage * a);
  polosa.style.left = left + "px";
  autoSlider ();
	}, 5000);
}

autoSlider();
