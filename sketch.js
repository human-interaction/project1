let drag;
function setup() {
  createCanvas(1200, 1200);
  drag = new Draggable();
}

function draw() {
  background(255);
  drag.update();
  drag.over();
  drag.show();
}
function mousePressed() {
  drag.pressed();
}
function mouseReleased() {
  drag.released();
}
