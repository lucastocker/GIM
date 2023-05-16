function setup(){
	createCanvas(windowWidth, windowHeight)
}

function draw(){
	
	background(0,0,0)

	for(let i=0; i<150; i=i+1){
		let spessore = random(0.3, 2.5)
		let lunghezza = random(40, 130)
		let posX = random(0, width)
		let posY = random(-lunghezza, height)

		stroke(255, 255, 250)
		strokeWeight(spessore)
		line(random(posX, posX-5), posY, posX, posY + lunghezza)

		
	}
}	