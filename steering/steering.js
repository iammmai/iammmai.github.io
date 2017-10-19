// constructor of Confetti
function Confetti (x,y,r) {
    this.loc = createVector(x,y)
    this.acc = createVector(0,0)
    this.vel = createVector(0,0)
    this.r = r
    this.c = color(random(255), random(255), random(255))
    this.lifespan = 255
    this.angle
    this.maxspeed = 5
    this.maxforce = 10
}

//functions on Confetti
Confetti.prototype.display = function () {
    let col = color(red(this.c), green(this.c), blue(this.c), this.lifespan)
    fill(col)
    noStroke()
    ellipse(this.loc.x, this.loc.y, this.r, this.r )
}

Confetti.prototype.update = function () {
    this.vel.add(this.acc)
    this.loc.add(this.vel)
    this.lifespan -= 1
    this.acc.mult(0)
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

Confetti.prototype.seek = function (target) {
    let desired = new p5.Vector.sub(target, this.loc)
    desired.normalize()
    desired.mult(this.maxspeed)
    let steer = new p5.Vector.sub(desired, this.vel)
    steer.limit(this.maxforce)
    this.applyForce(steer)
    

}

Confetti.prototype.run = function (target) {
    this.seek(target)
    this.update()
    this.display()
}



// Child Class contructor
function Square (x,y,r) {
    Confetti.call(this, x,y,r)

}

// Inherit from Confetti
Square.prototype = Object.create(Confetti.prototype)
Square.prototype.constructor = Square

// Overwrite display function
Square.prototype.display = function () {
    this.angle = this.vel.heading();
    let col = color(red(this.c), green(this.c), blue(this.c), this.lifespan)
    noFill()
    stroke(col)
    push()
    translate(this.loc.x, this.loc.y)
    rotate(this.angle);
    rect(0,0, this.r*2, this.r)
    pop()
}

// new child object that is being followed

function Leader (x,y,r) {
    Confetti.call(this, x,y,r)
    this.vel = createVector(4,7)
    
}

Leader.prototype = Object.create(Confetti.prototype)
Leader.prototype.constructor = Leader

// they don't die (for now)
Leader.prototype.update = function () {
    //this.vel.add(this.acc)
    this.loc.add(this.vel)
    //this.acc.mult(0)
}

Leader.prototype.checkEdges = function () {
    if(this.loc.x > width-this.r || this.loc.x < this.r) {
        this.vel.x *= -1
    } else if (this.loc.y > height-this.r || this.loc.y < this.r) {
        this.vel.y *= -1
    }
}


Leader.prototype.run = function () {
    this.checkEdges()
    this.update()
    this.display()
}