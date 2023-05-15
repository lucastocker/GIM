function setup(){
	createCanvas(400, 400)
}

function draw(){
	background(220,220,220)
	strokeWeight(1)

	point(30, 50)
	point(31, 50)
	point(32, 50)
	point(33, 50)
	point(0, 0)

	stroke(0, 100, 200)
	fill(255, 0, 0)
	rect(150, 150, 120, 120)
	rect(120, 120, 120, 120)
	
	// funzione che disegna un segmento
	strokeWeight(3)
	line(50, 60, 200, 280)
	
	fill(0, 255, 0)
	ellipse(230, 230, 100, 100)

	stroke(0)

	noFill()
	ellipse(100, 230, 100, 100)

	noStroke()
	fill(0, 0, 255, 70)
	triangle(100, 90, 300, 400, 210, 90)

}