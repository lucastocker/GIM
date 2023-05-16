function setup(){
	createCanvas(400, 400)
}

function draw(){
	//background(220,220,220)

	let ora = hour() + ":" + minute() + ":" + second()

	textSize(100)
	textFont("ultraBold")
	textAlign(CENTER, CENTER)
	fill(random(255), random(255), random(255))
	text(ora, mouseX, mouseY)
	
}