//the path class

function Path () {
    this.radius = 40
    this.start = createVector(0, random(height))
    this.end = createVector(width, random(height))

}

Path.prototype.display = function () {
    stroke(200,100)
    strokeWeight(this.radius*2)
    line(this.start.x, this.start.y, this.end.x, this.end.y)
    stroke(255,100)
    strokeWeight(2)
    line(this.start.x, this.start.y, this.end.x, this.end.y)
}

// the mover class
function Mover () {
    this.loc = createVector(random(width/3),random(width/3))
    this.vel = createVector(1,1)
    this.acc = createVector(0,0)
    this.maxspeed = 5
    this.rad = 15
    this.mass = this.rad
    
}

Mover.prototype.getTarget = function (path) {
    let predict = this.vel.copy()
    predict.normalize()
    predict.mult(3)
    let predictLoc = new p5.Vector.add(predict, this.loc)
    
    let a = new p5.Vector.sub(predictLoc, path.start)
    let b = new p5.Vector.sub(path.end, path.start)
    
    //d is the distance between start and the normpoint, which equals the dot product of a and b

    b.normalize()
    let d = a.dot(b)
    b.mult(d)
    
    let normalPoint = new p5.Vector.add(path.start, b)
    let distance = predictLoc.dist(normalPoint)
    
    let dir = b.copy()
    dir.normalize()
    dir.mult(70)
    let target = normalPoint.add(dir)
    
    console.log(dir)
    if(distance > path.radius) {
        this.steer(target)
    }
}

Mover.prototype.steer = function (target) {
    //let target = normalPoint
    let desired = new p5.Vector.sub(target, this.loc)
    desired.normalize()
    desired.mult(this.maxspeed)
    let steer = new p5.Vector.sub(desired, this.vel)
    this.applyForce(steer)
    //console.log(normalPoint)
    
}

Mover.prototype.applyForce = function (force) {
    let fAcc = new p5.Vector.div(force, this.mass)
    this.acc.add(fAcc)
}


Mover.prototype.display = function () {
    fill(255)
    noStroke()
    push()
    translate(this.loc.x, this.loc.y)
    rotate(this.vel.heading())
    rect(0,0, this.rad*2, this.rad)
    pop()
}

Mover.prototype.update = function () {
    this.vel.add(this.acc)
    this.loc.add(this.vel)
    this.acc.mult(0)
}

Mover.prototype.follow = function (path) {
    this.update()
    let normalPoint = this.getTarget(path)
    this.steer(normalPoint)
} 