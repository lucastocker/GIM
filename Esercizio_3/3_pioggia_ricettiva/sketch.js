function setup(){
	createCanvas(windowWidth, windowHeight, WEBGL)
}

function draw(){
	
	background(0,0,0)
    r=random(100,)
  g=random(100,155)
  b=random(90,255)
  

	rotateX(mouseY*0.01)
	rotateY(mouseX*0.01)

	let lato = 500

	if (mouseIsPressed) randomSeed(0)
	
	stroke(r,g,b)
	noFill()
	beginShape(LINES)
	for(let i=0; i<1000; i=i+1){
		let lunghezza = random(20, 100)
		let posX = random(-lato, lato)
		let posY = random(-lato, lato)
		let posZ = random(-lato, lato)
		vertex(posX, posY, posZ)
		vertex(posX, posY + lunghezza, posZ)
	}
	endShape()
}