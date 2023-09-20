let flowerSize = 100;
let scaleFactor = 1;

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
  translate(width / 2, height / 2);
  scale(scaleFactor);
  drawFlower();
}

function drawFlower() {
  // Draw a flower here
  // You can use ellipse, lines, and curves to create a flower
}

function keyPressed() {
  if (key === 'Z') {
    // Zoom in when 'Z' is pressed
    scaleFactor *= 1.1;
  } else if (key === 'X') {
    // Zoom out when 'X' is pressed
    scaleFactor *= 0.9;
  }
}
