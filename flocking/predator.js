function Predator(x,y,r) {
  Boid.call(this, x, y, r);
  this.c = color(226, 43, 43);
  this.maxspeed = 4
  this.maxforce = 0.5
  
}

Predator.prototype = Object.create(Boid.prototype);
Predator.prototype.constructor = Predator;

Predator.prototype.applyBehavior = function(others) {
  let chasingForce = this.cohesion(others);
  chasingForce.mult(3);
  this.applyForce(chasingForce);
};
