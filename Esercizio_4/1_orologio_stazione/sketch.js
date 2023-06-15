function setup(){
	createCanvas(windowWidth, windowHeight)
}

function draw(){

	let h = hour()
	let m = minute()
	let s = second()
	let ms = new Date().getMilliseconds()

	let angolo_h = TWO_PI / 12 * h + TWO_PI / 12 / 60 * m
	let angolo_m = TWO_PI / 60 * m 
	let angolo_s = TWO_PI / 60 * s + TWO_PI / 60 * ms / 1000

	background(0)

	// spostiamo l'origine in centro 
	translate(width/2, height/2)	
	scale (windowWidth*0.001)

	// bordo esterno
	noStroke()
	fill(0)
	ellipse(0, 0, 440, 440)


	fill(255)
	push()
	for (let i=0; i<60; i++) {
		
		if (i % 5 == 0) {
			rect(-2.5, -210, 5, 50)
		} else {		
			rect(-3, -210, 2, 16)
		}
		
		rotate(TWO_PI / 60)
	}
	pop()



	fill(0)

	// ruotiamo per le ore
	fill(150, 255, 100)
	push()
	rotate(angolo_h)
	ellipse(0, -30, 100, 100)
	//rect (-12, 40, 24, -160)
	pop()	
	
	// ruotiamo per i minuti 
	fill(150, 100, 255)
	push()
	rotate(angolo_m)
	ellipse(0, -100, 70, 70)
	//rect (-9, -210, 18, 80)
	pop()

	// ruotiamo per i secondi 
	fill(255, 100, 150)
	push()
	rotate(angolo_s)	
	
	ellipse(0, -240, 40, 40)
	pop()

	// stroke(0, 0, 200)
	// line (0, -1000, 0, 1000)
	// line (-1000, 0, 1000, 0)

}

function windowResized(){
	resizeCanvas(windowWidth, windowHeight)
}