// lascia che la posizione X sia 200, sostituiamo dei valori con dei contenitori di valori
let posizioneX;
let posizioneY;
let velX = 11;
let velY = 7;

function setup() {
  createCanvas(windowWidth, windowHeight);
  posizioneX = width / 2;
  posizioneY = height / 2;
  background(0, 0, 0);
  velX = random(-8, 20);
  velY = random(-8, 20);
}

function draw() {
  noStroke();
  fill(((sin(frameCount * 0.1) + 1.1) * 110), ((sin(frameCount * 0.1) + 1.1) * 110), ((sin(frameCount * 0.1) + 1.1) * 100));
  ellipse(posizioneX, posizioneY, 55, 55);
  posizioneX = posizioneX + velX;
  posizioneY = posizioneY + velY;

  if (posizioneX >= width || posizioneX <= 0) {
    velX = -velX;
  }
  if (posizioneY >= height || posizioneY <= 0) {
    velY = -velY;
  }
}

function keyPressed() {
  save("pong.png");
}

function mouseClicked() {
  let clickVelX = random(-8, 10);
  let clickVelY = random(-8, 10);
  background(0, 0, 0);
  fill(((sin(frameCount * 0.1) + 1.1) * 110), ((sin(frameCount * 0.1) + 1.1) * 110), ((sin(frameCount * 0.1) + 1.1) * 100));
  ellipse(mouseX, mouseY, 55, 55);

  posizioneX = mouseX;
  posizioneY = mouseY;
  velX = clickVelX;
  velY = clickVelY;
}