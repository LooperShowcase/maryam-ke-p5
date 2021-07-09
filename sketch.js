function setup() {
  // The size of our starting canvas: 400px width, 400px height
  createCanvas(400, 400);
  angleMode(DEGREES);
}

function draw() {
  // The same as doing: background(220); or --> background(220,220,220);
  background(192, 253, 255);

  let seconds = second();
  let minutes = minute();
  let hours = hour();

  translate(width / 2, height / 2);
  rotate(-90);
  noFill();
  strokeWeight(8);

  //seconds
  stroke(235, 52, 149);
  let secondsArc = map(seconds, 0, 60, 0, 360);
  arc(0, 0, 300, 300, 0, secondsArc);
  //minutes
  stroke(222, 170, 255);
  let minutesArc = map(minutes, 0, 60, 0, 360);
  arc(0, 0, 250, 250, 0, minutesArc);
  // hour
  stroke(235, 52, 229);
  strokeWeight(8);
  let hoursArc = map(hours % 12, 0, 12, 0, 360);
  arc(0, 0, 200, 200, 0, hoursArc);

  // seconds
  push();
  stroke(235, 52, 149);
  rotate(secondsArc);
  line(0, 0, 150, 0);
  pop();

  // min
  push();
  stroke(222, 170, 255);
  rotate(minutesArc);
  line(0, 0, 125, 0);
  pop();

  //hour
  push();
  stroke(235, 52, 229);
  rotate(hoursArc);
  line(0, 0, 100, 0);
  pop();

  //n
  push();
  strokeWeight(1);
  rotate(90);
  text(12, 0, -160);
  pop();

  push();
  strokeWeight(1);
  rotate(90);
  text(3, 160, 0);
  pop();

  push();
  strokeWeight(1);
  rotate(90);
  text(6, 0, 170);
  pop();

  push();
  strokeWeight(1);
  rotate(90);
  text(9, -170, 0);
  pop();

  ///
  stroke("white");
  strokeWeight(10);
  push();
  point(0, 0);
  pop();
}
