let boids = [];
let predators = [];


function setup() {
  createCanvas(windowWidth, windowHeight);
  background(0);
  const p = new Predator(random(width), random(height), 40)
  predators.push(p)
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
    if (b.intersects(predators)) {
      boids.splice(i,1)
    }
    b.applyBehavior(boids, predators);
    b.update();
    b.checkEdges();
    b.display();    
  }

  for (let j =0; j<predators.length; j++) {
    let p = predators[j]
    p.applyBehavior(boids)
    p.update()
    p.checkEdges()
    p.display()
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
