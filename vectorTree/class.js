function Branch(a,b,w) {
    this.start = a.copy()
    this.end = b.copy()
    this.weight =w
}

Branch.prototype.display = function () {
    stroke(255)
    strokeWeight(this.weight)
    line(this.start.x, this.start.y, this.end.x, this.end.y)
}

Branch.prototype.getA = function () {
    let a = this.start.copy()
    return a
}

Branch.prototype.getB = function () {
    let b = this.end.copy()
    return b
}

Branch.prototype.getC = function () {
    let v = new p5.Vector.sub(this.end, this.start)
    let a = this.start.copy()
    v.mult(0.85)
    a.add(v)
    v.rotate(radians(20))
    a.add(v)
    return a
}

Branch.prototype.getD = function () {
    let v = new p5.Vector.sub(this.end, this.start)
    let a = this.start.copy()
    v.mult(0.85)
    a.add(v)
    v.rotate(-radians(20))
    a.add(v)
    return a
}