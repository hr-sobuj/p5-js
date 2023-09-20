function setup() {
    createCanvas(400, 200);
  }
  
  function draw() {
    background(255);
    drawBangladeshFlag();
  }
  
  function drawBangladeshFlag() {
    // Green background
    fill(0, 128, 0);
    rect(0, 0, width, height);
  
    // Red circle
    fill(255, 0, 0);
    let circleX = width / 2;
    let circleY = height / 2;
    let circleSize = min(width, height) * 0.6;
    ellipse(circleX, circleY, circleSize);
  }
  