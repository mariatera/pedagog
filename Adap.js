autoSlider();
var left = 0;
var timer;

function autoSlider (){
	timer = setTimeout( function () {
		var polosa = document.getElementById ("polosa");
	left = left - 700;
	if (left < -3000) {
		left=0;
		clearTimeout(timer);
	}
	polosa.style.left = left+"px";
	autoSlider ();
	}, 5000);
	
}
