let currentAnimation = null;
let canvas;

function setup() {
  canvas = createCanvas(400, 400);
  canvas.parent('canvasContainer'); // Make sure the canvas is inside the correct container
  noLoop();

  const animationButtons = document.querySelectorAll('.animationButton');
  animationButtons.forEach(button => {
    button.addEventListener('click', () => startAnimation(button.id));
  });
}

function draw() {
  background(220);

  if (currentAnimation) {
    currentAnimation();
  }
}

// Rest of your animation functions, including particleExplosionAnimation and fireworksAnimation


function startAnimation(animationId) {
  switch (animationId) {
    case 'zoomButton':
      currentAnimation = zoomAnimation;
      break;
    case 'moveTextButton':
      currentAnimation = moveTextAnimation;
      break;
    case 'snowFlowButton':
      currentAnimation = snowFlowAnimation;
      break;
    case 'rotateRectButton':
      currentAnimation = rotateRectAnimation;
      break;
    case 'colorChangeButton':
      currentAnimation = colorChangeAnimation;
      break;
    case 'circlePulseButton':
      currentAnimation = circlePulseAnimation;
      break;
    case 'bounceBallButton':
      currentAnimation = bounceBallAnimation;
      break;
    case 'fadeInOutButton':
      currentAnimation = fadeInOutAnimation;
      break;
    case 'randomSquaresButton':
      currentAnimation = randomSquaresAnimation;
      break;
    case 'spinningSquaresButton':
      currentAnimation = spinningSquaresAnimation;
      break;
    case 'heartBeatButton':
      currentAnimation = heartBeatAnimation;
      break;
    case 'waveButton':
      currentAnimation = waveAnimation;
      break;
    case 'patternsButton':
      currentAnimation = patternsAnimation;
      break;
    case 'fireworksButton':
      currentAnimation = fireworksAnimation;
      break;
    // Add more animations and cases here
    default:
      currentAnimation = null;
  }
  loop();
}

// Animation Functions

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

function rotateRectAnimation() {
  // Rotating Rectangle animation code
  translate(width / 2, height / 2);
  rotate(frameCount * 0.02);
  rect(-50, -50, 100, 100);
}

function colorChangeAnimation() {
  // Color Change animation code
  let r = map(sin(frameCount * 0.05), -1, 1, 0, 255);
  let g = map(cos(frameCount * 0.05), -1, 1, 0, 255);
  let b = map(sin(frameCount * 0.05 + PI / 4), -1, 1, 0, 255);
  fill(r, g, b);
  ellipse(width / 2, height / 2, 100, 100);
}

function circlePulseAnimation() {
  // Circle Pulse animation code
  let size = map(sin(frameCount * 0.05), -1, 1, 50, 200);
  ellipse(width / 2, height / 2, size, size);
}

function bounceBallAnimation() {
  // Bouncing Ball animation code
  let speed = 2;
  let radius = 30;
  let yPos = height / 2 + sin(frameCount * 0.05) * 50;
  ellipse(frameCount * speed % width, yPos, radius, radius);
}

function fadeInOutAnimation() {
  // Fade In and Out animation code
  let alpha = map(sin(frameCount * 0.05), -1, 1, 0, 255);
  fill(0, 128, 255, alpha);
  ellipse(width / 2, height / 2, 100, 100);
}

function randomSquaresAnimation() {
  // Random Squares animation code
  for (let i = 0; i < 10; i++) {
    let x = random(width);
    let y = random(height);
    let size = random(20, 50);
    fill(random(255), random(255), random(255));
    rect(x, y, size, size);
  }
}

function spinningSquaresAnimation() {
  // Spinning Squares animation code
  translate(width / 2, height / 2);
  rotate(frameCount * 0.05);
  for (let i = 0; i < 4; i++) {
    rect(-25, -25, 50, 50);
    rotate(PI / 2);
  }
}

function heartBeatAnimation() {
  // Heartbeat animation code
  let size = map(sin(frameCount * 0.05), -1, 1, 50, 150);
  beginShape();
  vertex(width / 2, height / 2 - size * 1.5);
  bezierVertex(
    width / 2 - size * 1.5,
    height / 2 - size / 2,
    width / 2 - size * 0.5,
    height / 2 + size / 2,
    width / 2,
    height / 2 + size * 1.5
  );
  bezierVertex(
    width / 2 + size * 0.5,
    height / 2 + size / 2,
    width / 2 + size * 1.5,
    height / 2 - size / 2,
    width / 2,
    height / 2 - size * 1.5
  );
  endShape(CLOSE);
}

function waveAnimation() {
  // Wave animation code
  let amplitude = 50;
  let frequency = 0.02;
  for (let x = 0; x < width; x += 10) {
    let y = height / 2 + sin(frameCount * frequency + x * 0.1) * amplitude;
    ellipse(x, y, 10, 10);
  }
}


function patternsAnimation() {
    createCanvas(710, 400);
    background(102);
    variableEllipse(mouseX, mouseY, pmouseX, pmouseY);
  
   
  }
  
  function variableEllipse(x, y, px, py) {
    let speed = abs(x - px) + abs(y - py);
    stroke(speed);
    ellipse(x, y, speed, speed);
  }