let snowflakes = [];

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(0);
  
  // Create new snowflakes
  let x = random(width);
  let y = random(height);
  let snowflake = new Snowflake(x, y);
  snowflakes.push(snowflake);
  
  // Display and update snowflakes
  for (let flake of snowflakes) {
    flake.display();
    flake.update();
  }
}

class Snowflake {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.speed = random(1, 3);
    this.size = random(5, 10);
  }

  display() {
    fill(255);
    noStroke();
    ellipse(this.x, this.y, this.size);
  }

  update() {
    this.y += this.speed;
    
    if (this.y > height) {
      // Remove snowflake if it goes below the canvas
      let index = snowflakes.indexOf(this);
      snowflakes.splice(index, 1);
    }
  }
}
