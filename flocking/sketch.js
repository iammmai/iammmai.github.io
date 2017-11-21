let boids = [];

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(0);
}

function draw() {
  background(0);
  if (mouseIsPressed) {
    let tempBoid = new Boid(
      mouseX + random(20),
      mouseY + random(20),
      random(10, 30)
    );
    boids.push(tempBoid);
  }

  for (let i = 0; i < boids.length; i++) {
    let b = boids[i];
    b.applyBehavior(boids);
    b.update();
    b.checkEdges();
    b.display(b.seek(boids));    
  }
}

/*
function addBoid(array) {
  while (array.length < 7) {
    let tempBoid = new Boid(
      mouseX + random(200),
      mouseY + random(200),
      random(20, 50)
    );
    let overlap = false;
    for (let i = 0; i < array.length; i++) {
      if (tempBoid.intersects(array[i])) {
        overlap = true;
      }
    }

    if (!overlap) {
      array.push(tempBoid);
    }
  }
}
*/
