function Vehicle (x,y) {
    this.loc = createVector(x,y)
    this.acc = createVector(0,0)
    this.vel = createVector(0,0)
    this.a = 20
    this.b = 40
    this.maxspeed = 5
    this.maxforce = 10
    this.angle
    this.theta = 0
}
    
Vehicle.prototype.move = function () {
    this.vel.add(this.acc)
    this.loc.add(this.vel)
    this.acc.mult(0)
}    

// Find the target coordinates and steer
Vehicle.prototype.target = function () {
    const wanderR = 30
    const wanderD = 90
    this.theta += random(-0.3, 0.3)
    
    let circlepos = this.vel.copy()
    circlepos.normalize()
    circlepos.mult(wanderD)
    circlepos.add(this.loc)
    
    let h = this.vel.heading()
    
    let circleOffset = createVector(wanderR*cos(this.theta+h), wanderR * sin(this.theta+h))
    let t = new p5.Vector.add(circlepos, circleOffset)
    this.seek(t)
    
}

Vehicle.prototype.seek = function (trgt) {
    let desired = new p5.Vector.sub(trgt, this.loc)
    desired.normalize()
    desired.mult(this.maxspeed)
    let steer = new p5.Vector.sub(desired, this.vel)
    steer.limit(this.maxforce)
    this.applyForce(steer)
    
    //draw the helping stuff
    noFill()
    stroke(255)
    ellipseMode(RADIUS)
    ellipse(circlepos.x, circlepos.y, wanderR, wanderR)
    line(this.loc.x, this.loc.y, circlepos.x, circlepos.y)
    line(circlepos.x, circlepos.y, trgt.x, trgt.y)
 
    
}


Vehicle.prototype.applyForce = function (force) {
    let fAcc = new p5.Vector.div(force, 30)
    this.acc.add(fAcc)
    
}

Vehicle.prototype.display = function () {
    this.angle = this.vel.heading();
    noFill()
    stroke(255)
    push()
    translate(this.loc.x, this.loc.y)
    rotate(this.angle);
    rectMode(CENTER)
    rect(0,0, this.b, this.a)
    pop()
}