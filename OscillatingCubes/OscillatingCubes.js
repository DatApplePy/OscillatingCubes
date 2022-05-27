let angle = 0;
let rw = 30;
let rh;
let boxCount = 16;
let distance;
let minDistance;
let maxDistance;
let offset;

function setup() {
  createCanvas(800, 800, WEBGL);
  camera(-300, -200, 300);
  //debugMode();
}


function draw() {
  background(45,42,43);
  ortho();
  directionalLight(210, 96, 148, 0, 0, -1); // right
  directionalLight(100, 58, 105, 1, 0, 0); // left
  directionalLight(43, 164, 169, 0, 1, 0); // top
  for (let x = -boxCount/2; x < boxCount/2; x++) {
    for (let z = -boxCount/2; z < boxCount/2; z++) {
      noStroke();
      distance = dist(x*rw+15, z*rw+15, 0, 0);
      //minDistance = dist(15, 15, 0, 0);
      //maxDistance = dist(boxCount/2*rw+15, boxCount/2*rw+15, 0, 0);
      //offset = map(distance, minDistance, maxDistance, -2, 2);
      //rh = map(sin(angle+offset), -1, 1, 50, 300);
      rh = map(sin(angle+distance*0.02), -1, 1, 50, 300);
      push();
      translate(x*rw+15, 0, z*rw+15);
      box(rw, rh, rw);
      pop();
    }
  }
  angle -= 0.04;
  if (angle < 0) {
    angle = TWO_PI;
  }
}
