var puntos = 0
var segundos = 3

function inicial(){
	setTimeout(fin, segundos * 1000)
}

function fin() {
	alert("GAME OVER - PUNTOS: " + puntos)
}

function posicion(){
	var enemigo = document.getElementById("enemigo")
	enemigo.style.position="absolute";

	x = Math.floor(Math.random()*500+1)
	y = Math.floor(Math.random()*500+1)

	enemigo.style.left = x + "px"
	enemigo.style.top = y + "px"

	puntos++;

 
}