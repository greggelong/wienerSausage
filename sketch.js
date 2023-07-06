let x, y;
let r = 10;

function setup() {
  createCanvas(400, 400);
  x = width / 2;
  y = height / 2;
}

function draw() {
 // background(220);
  let dx = random(-1, 1);
  let dy = random(-1, 1);
  x += dx;
  y += dy;
  let d = dist(x, y,x, height / 2);
  if (d > r) {
    let angle = atan2(y - height / 2, x - width / 2);
    x = width / 2 + cos(angle) * r;
    y = height / 2 + sin(angle) * r;
    dx = cos(angle) * d - cos(angle) * r;
    dy = sin(angle) * d - sin(angle) * r;
  }
  line(x, y, x + dx, y + dy);
}
