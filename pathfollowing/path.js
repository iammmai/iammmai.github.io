//the path class

function Path() {
    this.radius = 40
    this.points = []

}

Path.prototype.addPoint = function (x, y) {
    const point = createVector(x, y)
    this.points.push(point)
}

Path.prototype.display = function () {
    
    noFill()
    beginShape()
    for (let i = 0; i < this.points.length; i++) {
        let po = this.points[i]
        stroke(100)
        strokeWeight(this.radius)
        vertex(po.x, po.y)
    }
    endShape()
}

// the mover class
function Mover() {
    this.loc = createVector(random(width / 3), random(width / 3))
    this.vel = createVector(1, 1)
    this.acc = createVector(0, 0)
    this.maxspeed = 7
    this.rad = 15
    this.mass = this.rad*2
    

}
Mover.prototype.getNormalPoint = function (p, a, b) {
    let ap = new p5.Vector.sub(p, a)
    let ab = new p5.Vector.sub(b, a)
    ab.normalize()
    ab.mult(ap.dot(ab))
    let normalPoint = new p5.Vector.add(a, ab)
    if (normalPoint.x < a.x || normalPoint.x > b.x) {       
            normalPoint= b.copy()
    }
    return normalPoint
}

Mover.prototype.follow = function (path) {
    let worldrecord = 100000
    let predict = this.vel.copy()
    predict.normalize()
    predict.mult(10)
    predictLoc = new p5.Vector.add(predict, this.loc)
    let target = null

    for (let i = 0; i < path.points.length-1; i++) {
        let start = path.points[i]
        let end = path.points[i + 1]
        
        let normalPoint = this.getNormalPoint(predictLoc, start, end)

        let distance = p5.Vector.dist(predictLoc, normalPoint)

        if (distance < worldrecord) {
            worldrecord = distance
            target = normalPoint.copy()
            let dir = p5.Vector.sub(end, start)
            dir.normalize()
            dir.mult(20)
            target.add(dir)
            
        }
    }
    console.log(target)
        if (worldrecord > path.radius && target !== null) {
            this.steer(target)
        }
    
}


Mover.prototype.steer = function (target) {
    let desired = new p5.Vector.sub(target, this.loc)
    desired.normalize()
    desired.mult(this.maxspeed)
    let steer = new p5.Vector.sub(desired, this.vel)
    this.applyForce(steer)
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
    rect(0, 0, this.rad * 2, this.rad)
    pop()
}

Mover.prototype.update = function () {
    this.vel.add(this.acc)
    this.loc.add(this.vel)
    this.acc.mult(0)
}

Mover.prototype.checkEdges = function (start) {
    if (this.loc.x > width) {
        this.loc.set(start.x, start.y)
    }
}
