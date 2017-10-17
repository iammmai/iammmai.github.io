// constructor of Confetti
function Confetti (x,y,r) {
    this.loc = createVector(x,y)
    this.acc = createVector(0,0)
    this.vel = createVector(0,0)
    this.r = r
    this.c = color(random(255), random(255), random(255), this.lifespan)
    this.lifespan = 500
    this.angle
}

//functions on Confetti
Confetti.prototype.display = function () {
    fill(this.c)
    noStroke()
    ellipse(this.loc.x, this.loc.y, this.r, this.r )
}

Confetti.prototype.update = function () {
    this.vel.add(this.acc)
    this.loc.add(this.vel)
    this.lifespan -= 1
}

Confetti.prototype.isDead = function () {
    if (this.lifespan <= 0) {
        return true
    } else {
        return false
    }
}

Confetti.prototype.applyForce = function (force) {
    let fAcc = new p5.Vector.div(force, this.r)
    this.acc.add(fAcc)
}

Confetti.prototype.run = function () {
    this.update();
    this.display()
}



// Child Class contructor
function Square (x,y,r,c) {
    Confetti.call(this, x,y,r,c)
    this.c = c
}

// Inherit from Confetti
Square.prototype = Object.create(Confetti.prototype)
Square.prototype.constructor = Square

// Overwrite display function
Square.prototype.display = function () {
    this.angle = this.vel.heading();
    noFill()
    stroke(this.c)
    push()
    translate(this.loc.x, this.loc.y)
    rotate(this.angle);
    rect(0,0, this.r*2, this.r)
    pop()
}

