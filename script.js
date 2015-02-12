var cars = [
    "http://fotos.coches.net/coches/noticias/16359/504336.jpg",
    "http://www.cochesadictos.com/coches/chrysler-crossfire/imagenes/index1.jpg",
    "http://img.infocoches.com/img/alfa_romeo/2010-Giulietta/alfa_romeo_2010-Giulietta-007_1.jpg",
    "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcRzo85wXgljsu2H7br_ho6lgkmH2U0_uQIGiMhx5nA4PUKZucW4gw"
];

function imgRandoms() {
	var id = Math.round(Math.random()*3);
	document.getElementById('image').src = cars[id];
}