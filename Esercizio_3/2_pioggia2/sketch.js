function setup(){
	createCanvas(windowWidth, windowHeight, WEBGL)
}

function draw(){
	background(0,0,0)

	rotateX(mouseY*0.01)

	for(let i=0; i<50; i=i+1){

		let spessore = random(1, 3)
		let lunghezza = random(20, 100)
		let posX = random(-200, 200)
		let posY = random(-200, 200)
		let posZ = random
		stroke(255)
		strokeWeight(spessore)
		line(posX, posY, posX, posY + lunghezza)
	}
}
