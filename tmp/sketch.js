let currentAnimation = null;
let canvas;

function setup() {
  canvas = createCanvas(400, 400);
  canvas.parent('canvasContainer');
  noLoop();
  
  document.getElementById('zoomButton').addEventListener('click', startZoomAnimation);
  document.getElementById('moveTextButton').addEventListener('click', startMoveTextAnimation);
  document.getElementById('snowFlowButton').addEventListener('click', startSnowFlowAnimation);
}

function draw() {
  background(220);
  
  if (currentAnimation) {
    currentAnimation();
  }
}

function startZoomAnimation() {
  currentAnimation = zoomAnimation;
  loop();
}

function startMoveTextAnimation() {
  currentAnimation = moveTextAnimation;
  loop();
}

function startSnowFlowAnimation() {
  currentAnimation = snowFlowAnimation;
  loop();
}

function zoomAnimation() {
  // Zoom In and Out animation code
  let size = map(sin(frameCount * 0.05), -1, 1, 50, 150);
  ellipse(width / 2, height / 2, size, size);
}

function moveTextAnimation() {
  // Moving Text animation code
  textSize(32);
  fill(0);
  text("Moving Text", frameCount % width, height / 2);
}

function snowFlowAnimation() {
  // Snowfall animation code
  fill(255);
  noStroke();
  for (let i = 0; i < 100; i++) {
    let x = random(width);
    let y = random(height);
    ellipse(x, y, 5, 5);
  }
}
