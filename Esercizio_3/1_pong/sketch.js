// lascia che la posizione X sia 200, sostituiamo dei valori con dei contenitori di valori
let posizioneX
let posizioneY
let velX = 5
let velY = 3

function setup(){
	createCanvas(800, 400)
	posizioneX = width/2
	posizioneY = height/2
	background(200, 0, 200)
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

}
	
function keyPressed(){

	save("pong.png")
	
}