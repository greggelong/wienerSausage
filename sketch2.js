let x, y;
let r = 100;

function setup() {
  createCanvas(800, 800);
  x = width / 2;
  y = height / 2;
}

function draw() {
 background(230,2);
  let dx = random(-10, 10);
  let dy = random(-10, 10);
  x += dx;
  y += dy;
  let dfy = dist(x, y,x, height / 2);
  let dfx = dist(x,y,width/2,y)
  if (dfy > r) {
    dy*=-1;
    y+=dy;
  }
  if (dfx > r) {
    dx*=-1;
    x+=dx;
  }
  noStroke();
  fill(0)
  ellipse(x, y,random(25,95));
}
