function setup() {
    createCanvas(640, 360);
    background(51);
    noStroke();
    noLoop();
  }
  
  function draw() {
    drawTarget(width * 0.25, height * 0.4, 200, 4);
    drawTarget(width * 0.5, height * 0.5, 300, 10);
    drawTarget(width * 0.75, height * 0.3, 120, 6);
  }
  
  function drawTarget(xloc, yloc, size, num) {
    let grayvalues = 255 / num;
    let steps = size / num;
    for (let i = 0; i < num; i++) {
      fill(i * grayvalues);
      ellipse(xloc, yloc, size - i * steps, size - i * steps);
    }
  }
  