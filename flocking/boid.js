function Boid(x, y, rad) {
  this.loc = new p5.Vector(x, y);
  this.acc = new p5.Vector(0, 0);
  this.vel = new p5.Vector(random(-1, 1), random(-1, 1));
  this.r = rad;
  this.c = (255, random(50, 200));
  this.maxspeed = 3;
  this.maxforce = 0.05;
}

Boid.prototype.separate = function(others, desiredDistance) {
  const desiredDist = desiredDistance;
  let sum = new p5.Vector(0, 0);
  let count = 0;

  for (let i = 0; i < others.length; i++) {
    let distance = p5.Vector.dist(this.loc, others[i].loc);

    if (distance > 0 && distance < desiredDist) {
      let diff = new p5.Vector.sub(this.loc, others[i].loc);
      diff.normalize();
      sum.add(diff);
      count += 1;
    }
  }

  if (count > 0) {
    sum.div(count);
    sum.normalize();
    sum.mult(this.maxspeed);
    let steer = p5.Vector.sub(sum, this.vel);
    steer.limit(this.maxforce);
    return steer;
  } else {
    return new p5.Vector(0, 0);
  }
};

Boid.prototype.seek = function(others) {
  const perceptionRadius = 10 * this.r;
  let sum = new p5.Vector(0, 0);
  let count = 0;

  for (let i = 0; i < others.length; i++) {
    let distance = p5.Vector.dist(this.loc, others[i].loc);

    if (distance > 0 && distance < perceptionRadius) {
      sum.add(others[i].vel);
      count += 1;
    }
  }

  if (count > 0) {
    sum.div(count);
    sum.normalize();
    sum.mult(this.maxspeed);
    let steer = p5.Vector.sub(sum, this.vel);
    console.log(steer);
    steer.limit(this.maxforce);
    return steer;
  } else {
    return new p5.Vector(0, 0);
  }
};

Boid.prototype.cohesion = function(others) {
  const perceptionRadius = 10 * this.r;
  let sum = new p5.Vector(0, 0);
  let count = 0;

  for (let i = 0; i < others.length; i++) {
    let distance = p5.Vector.dist(this.loc, others[i].loc);

    if (distance > 0 && distance < perceptionRadius) {
      sum.add(others[i].loc);
      count += 1;
    }
  }

  if (count > 0) {
    sum.div(count);
    let desired = new p5.Vector.sub(sum, this.loc);
    desired.normalize();
    desired.mult(this.maxspeed);
    let steer = p5.Vector.sub(desired, this.vel);
    steer.limit(this.maxforce);
    return steer;
  } else {
    return new p5.Vector(0, 0);
  }
};

Boid.prototype.applyForce = function(force) {
  // Force = mass * acceleration
  let fAcc = new p5.Vector.div(force, this.r * 2);
  this.acc.add(fAcc);
};

Boid.prototype.update = function() {
  this.vel.add(this.acc);
  this.loc.add(this.vel);
  this.vel.limit(this.maxspeed);
  this.acc.mult(0);
};

Boid.prototype.display = function() {
  fill(this.c);
  noStroke();
  push();
  translate(this.loc.x, this.loc.y);
  rotate(this.vel.heading() + radians(90));
  beginShape();
  vertex(this.r / 2, 0);
  vertex(this.r, this.r);
  vertex(0, this.r);
  endShape(CLOSE);
  pop();
};

Boid.prototype.checkEdges = function() {
  if (this.loc.x > width) {
    this.loc.x = this.r;
  } else if (this.loc.x < 0) {
    this.loc.x = width - this.r;
  } else if (this.loc.y > height) {
    this.loc.y = this.r;
  } else if (this.loc.y < 0) {
    this.loc.y = height - this.r;
  }
};

Boid.prototype.applyBehavior = function(others, predator) {
  let separateForce = this.separate(others);
  let fleeingForce = this.separate(predator, 200);
  let seekForce = this.seek(others);
  let cohesionForce = this.cohesion(others);
  separateForce.mult(0.7);
  fleeingForce.mult(15);
  seekForce.mult(1.2);
  cohesionForce.mult(1.9);
  this.applyForce(seekForce);
  this.applyForce(fleeingForce);
  this.applyForce(separateForce);
  this.applyForce(cohesionForce);
};


Boid.prototype.intersects = function(others) {
    for (let i=0; i<others.length; i++) {
        let o = others[i]
        let distanceVector = new p5.Vector.sub(this.loc, o.loc);
        if (distanceVector.mag() <  this.r+o.r) {
          return true;
        } else {
          return false;
        }
    }
}

