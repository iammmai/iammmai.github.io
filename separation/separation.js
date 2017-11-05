

function Vehicle(x,y) {
    this.loc = new p5.Vector(x,y)
    this.acc = new p5.Vector(0,0.5)
    this.vel = new p5.Vector(0,0)
    this.r = 20
    this.maxspeed = 20
}


Vehicle.prototype.separate = function(others) {
    const desiredDist = 3*this.r
    let sum = new p5.Vector(0,0)
    let count = 0
    
    for (let i = 0; i < others.length ; i++) {
        let distance = p5.Vector.dist(this.loc, others[i].loc)
        
        if(distance !== 0 && distance < desiredDist) {
            let diff = new p5.Vector.sub(this.loc, others[i].loc )
            diff.normalize()
            sum.add(diff)
            count += 1
        }
    }
    
    if (count > 0) {
        sum.div(count)
        let steer = p5.Vector.sub(sum, this.vel)
        steer.mult(this.maxspeed)
        this.applyForce(steer)
        console.log(steer)
    }
}

Vehicle.prototype.applyForce = function(force) {
    // Force = mass * acceleration
    let fAcc= p5.Vector.div(force, this.r)
    this.acc.add(fAcc)
}

Vehicle.prototype.update = function () {
    this.vel.add(this.acc)
    this.loc.add(this.vel)
    this.acc.mult(0)
}

Vehicle.prototype.display = function() {
    fill(255)
    noStroke()
    ellipse(this.loc.x, this.loc.y, this.r, this.r)
    noFill()
    stroke(255)
    ellipse(this.loc.x, this.loc.y, 2*this.r, 2*this.r)
    
}

Vehicle.prototype.checkEdges = function() {
    if(this.loc.x > width || this.loc.x< 0 ) {
        this.vel.x *= -1
    }
    if(this.loc.y > height || this.loc.y< 0 ) {
        this.vel.y *= -1
    }
}

