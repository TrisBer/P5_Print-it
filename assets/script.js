const slides = [
	{
		"image":"slide1.jpg",
		"tagLine":"Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		"image":"slide2.jpg",
		"tagLine":"Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		"image":"slide3.jpg",
		"tagLine":"Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		"image":"slide4.png",
		"tagLine":"Autocollants <span>avec découpe laser sur mesure</span>"
	}
]

// variables
let i = 0;
const arrowRight = document.querySelector(".arrow_right");
const arrowLeft = document.querySelector(".arrow_left");

//flèches
arrowRight.addEventListener("click", function() {
	// défilement vers la droite
		i++ 
		if (i < slides.length ){ 
			bannerSlide(i)
			console.log(i)
		}
		
		else {
			i = 0
			bannerSlide(i)
			console.log(i)
		}
});


arrowLeft.addEventListener("click", function() {
	// défilement vers la gauche
	i--
	if (i >= 0) {
		bannerSlide(i);
		console.log(i);
	}

	else {
		i = slides.length - 1;
		bannerSlide(i);
		console.log(i);
	}
});

// Fonction de défilement
function bannerSlide(index) {
	document.querySelector(".banner-img").src = `./assets/images/slideshow/${slides[index].image}`; // changement de l'image
	document.querySelector("#banner p").innerHTML = slides[index].tagLine; // changement du texte
	uptadeDots(index);
}

function uptadeDots(index) {
	const dots = document.querySelectorAll('.dot')
	//dots[index].classList.add("dot_selected");//
	for (let i=0; i < slides.length; i++) {
		if (i === index) {
			dots[i].classList.add("dot_selected");
		}
		
		else {
			dots[i].classList.remove("dot_selected");
		}
	}
}


