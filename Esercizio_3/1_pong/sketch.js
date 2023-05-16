// lascia che la posizione X sia 200, sostituiamo dei valori con dei contenitori di valori
let posizioneX
let posizioneY
let velX = 7
let velY = 5

function setup(){
	createCanvas(windowWidth/1.5, windowHeight/1.5)
	posizioneX = width/2
	posizioneY = height/2
	background(0, 0, 0)
	velX = random(-8, 10)
	velY = random(-8, 10)
}


function draw(){


		noStroke()
		fill(((sin(frameCount * 0.1) + 1.1) * 110), ((sin(frameCount * 0.1) + 1.1) * 110), ((sin(frameCount * 0.1) + 1.1) * 100))
		
		
		ellipse(posizioneX, posizioneY,55, 55)
		
		
		posizioneX = posizioneX + velX
		posizioneY = posizioneY + velY
		
		if (posizioneX >= width || posizioneX <= 0) velX = -velX
		if (posizioneY >= height || posizioneY <= 0) velY = -velY
		
		

	
	
}



	
function keyPressed(){

	save("pong.png")

	
}
