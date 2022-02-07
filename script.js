var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");
var button = document.getElementById("randomizer");

function setGradient() {
	body.style.background ="linear-gradient(to right," + color1.value
	 + ", " + color2.value + ")";

	 css.textContent = body.style.background +";";
}

function generateRandomColor() {
	var randomColor = '#'+Math.floor(Math.random()*16777215).toString(16).padStart(6,'0');
	return randomColor;
}


function setGradientRandom() {
	color1.value = generateRandomColor();
	color2.value = generateRandomColor();
		body.style.background ="linear-gradient(to right," + color1.value
	 + ", " + color2.value + ")";

	css.textContent = body.style.background +";";
	console.log(color1.value);
	console.log(color2.value);
}


color1.addEventListener("input", setGradient);


color2.addEventListener("input", setGradient);


button.addEventListener("click", setGradientRandom);

 