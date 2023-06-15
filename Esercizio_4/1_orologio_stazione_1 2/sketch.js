function setup() {
  createCanvas(windowWidth, windowHeight);
  angleMode(DEGREES); // Change the mode to DEGREES
  strokeWeight(35); // Make the stroke thicker
  noFill(); // Remove the fill
}

function draw() {
  background(0); // Dark background

  // Get the current time
  let s = second();
  let m = minute();
  let h = hour();

  // Draw the seconds circle
  stroke(255,100,100,90); // Deep purple stroke with some transparency
  arc(windowWidth / 2 - 200, windowHeight / 2, 300, 300, -90, map(s, 0, 60, -90, 270));

  // Draw the minutes circle
  stroke(100,255,100,90); // Bright blue stroke with some transparency
  arc(windowWidth / 2, windowHeight / 2, 300, 300, -90, map(m, 0, 60, -90, 270));

  // Draw the hours circle
  stroke(100,100,255,90); // Bright pink stroke with some transparency
  arc(windowWidth / 2 + 200, windowHeight / 2, 300, 300, -90, map(h % 12, 0, 12, -90, 270));
}
