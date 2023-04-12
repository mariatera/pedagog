var polosa = document.getElementById("polosa");
var currentImage = 0;
var timer;
var a = 868.6666;

function autoSlider() {
console.log("Current Image " + currentImage);
console.log("polosa.children.length " + polosa.children.length);
console.log("polosa.style.left " + polosa.style.left);
console.log("polosa.children[0].offsetWidth " + polosa.children[0].offsetWidth);
timer = setTimeout( function () {
  currentImage = (currentImage + 1) % polosa.children.length;
  var b = 0;
  if (currentImage == 0){
  b = 36.8;}
  var left = - (currentImage * a);
  console.log("var left " + left);
  polosa.style.left = left + "px";
  autoSlider ();
	}, 5000);
}

autoSlider();