let textX = 0;
let textY = 100;
let speed = 2;

function setup() {
  createCanvas(400, 200);
  textSize(32);
  textAlign(CENTER, CENTER);
}

function draw() {
  background(220);
  fill(0);
  text("Moving Text", textX, textY);

  // Move text to the right
  textX += speed;

  // Reset text position when it goes off-screen
  if (textX > width) {
    textX = -textWidth("Moving Text");
  }
}
