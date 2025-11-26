function setup() {
  let canvas = createCanvas(windowWidth * 0.9, 400);
  canvas.parent('sketch-container');
  background(100);
}

function draw() {
  fill(255);
  noStroke();
  circle(mouseX, mouseY, 20);
}
