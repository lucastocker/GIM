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
  let ms = new Date().getMilliseconds()

  // Calculate the diameter of each circle based on time passed
  let sDiameter = lerp(300, 600, s / 60)
  let mDiameter = lerp(300, 600, m / 60);
  let hDiameter = lerp(300, 600, (h % 12) / 12);

  // Draw the seconds circle
  stroke(255,100,100,90); // Deep purple stroke with some transparency
  circle(windowWidth / 2 - 50, windowHeight / 2, sDiameter, sDiameter, -90, map(s, 0, 60, -90, 270));

  // Draw the minutes circle
  stroke(100,255,100,90); // Bright blue stroke with some transparency
  circle(windowWidth / 2, windowHeight / 2, mDiameter, mDiameter, -90, map(m, 0, 60, -90, 270));

  // Draw the hours circle
  stroke(100,100,255,90); // Bright pink stroke with some transparency
  circle(windowWidth / 2 + 50, windowHeight / 2, hDiameter, hDiameter, -90, map(h % 12, 0, 12, -90, 270));
}
