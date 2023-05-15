// lascia che la posizione X sia 200, sostituiamo dei valori con dei contenitori di valori
let posizioneX
let posizioneY
let velX = 6
let velY = 5

function setup(){
	createCanvas(800, 400)
	posizioneX = width/2
	posizioneY = height/2
	background(0, 0, 0)
	velX = random(-5, 5)
	velY = random(-5, 5)
}

function draw(){
	noStroke()
	fill(random(200, 255), random(100), random(255))
	
	ellipse(posizioneX, posizioneY, 30, 30)
	
	posizioneX = posizioneX + velX
	posizioneY = posizioneY + velY

	if (posizioneX >= width || posizioneX <= 0) velX = -velX
	if (posizioneY >= height || posizioneY <= 0) velY = -velY
	
	
	noStroke()
	fill(0, random(240, 255), random(255))
	rect(0, 3, 10, 396, 20);
describe(
  'white rect with black outline and round edges in mid-right of canvas'
);
fill(0, random(240, 255), random(255))
	rect(790, 3, 10, 396, 20);
describe(
  'white rect with black outline and round edges in mid-right of canvas'
);
}



	
function keyPressed(){

	save("pong.png")

	


  rotateY(millis() / 1000);
  cylinder(20, 75, 16, detailY.value());
}
