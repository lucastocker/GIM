let alpha;

const SNOWFLAKES_PER_LAYER = 400;
const MAX_SIZE = 15;
const GRAVITY = 0.75;
const LAYER_COUNT = 5;

const SNOWFLAKES = [];

function setup() {
  createCanvas(windowWidth, windowHeight);
  noStroke();

  for (let l = 0; l < LAYER_COUNT; l++) {
    SNOWFLAKES.push([]);
    for (let i = 0; i < SNOWFLAKES_PER_LAYER; i++) {
      SNOWFLAKES[l].push({
        x: random(width),
        y: random(height),
        mass: random(0.5, 1),
        l: l + 1
      });
    }
  }
}

function draw() {
  background(0);
  fill(255,255,255, random(90, 100));

  for (let l = 0; l < SNOWFLAKES.length; l++) {
    const LAYER = SNOWFLAKES[l];

    for (let i = 0; i < LAYER.length; i++) {
      const snowflake = LAYER[i];
      rect(snowflake.x, snowflake.y, (snowflake.l * MAX_SIZE) / LAYER_COUNT);
      updateSnowflake(snowflake);
    }
  }
}

function updateSnowflake(snowflake) {
  const diameter = (snowflake.l * MAX_SIZE) / LAYER_COUNT;
  if (snowflake.y > height + diameter) snowflake.y = -diameter;
  else snowflake.y += GRAVITY * snowflake.l * snowflake.mass;
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
