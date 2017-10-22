function Mover (a,b) {
    this.a = a
    this.b = b
    this.m = a+b
    this.loc = createVector(width/2,height/2)
    this.vel = createVector(0,0)
    this.acc = createVector(1,0)
    this.maxspeed =2
}

Mover.prototype.applyForce = function (force) {
    let fAcc = new p5.Vector.div(force, this.m)
    this.acc.add(fAcc)
}

Mover.prototype.follow = function (flowfield) {
    let desired = flowfield.lookup(this.loc)
    desired.mult(this.maxspeed)
    let steer = new p5.Vector.sub(desired, this.vel)
    this.applyForce(steer)
}

Mover.prototype.update = function () {
    this.vel.add(this.acc)
    this.loc.add(this.vel)
    this.acc.mult(0)
}

Mover.prototype.display = function () {
    push()
        translate(this.loc.x, this.loc.y)
        rotate(this.vel.heading()) 
        fill(color(244, 66, 137))
        rect(0,0,this.a, this.b)
    pop()
}

Mover.prototype.checkEdges = function () {
    if(this.loc.x > width) {
        this.loc.x = 0
    } else if (this.loc.x < 0) {
        this.loc.x = width
    } else if (this.loc.y > height) {
        this.loc.y = 0
    } else if (this.loc.y < 0) {
        this.loc.y = height
    }
} 

