function Kochline (a, b) {
    this.start = a.copy()
    this.end = b.copy()
    
}

Kochline.prototype.display = function () {
    noFill()
    stroke(0)
    line(this.start.x, this.start.y, this.end.x, this.end.y)
}

Kochline.prototype.kochA = function () {
    return this.start.copy()
    
}
Kochline.prototype.kochB = function () {
    let v = new p5.Vector.sub(this.end, this.start)
    v.div(3)
    v.add(this.start)
    return v
}

Kochline.prototype.kochD = function () {
    let v = new p5.Vector.sub(this.end, this.start)
    v.mult(2/3)
    v.add(this.start)
    return v
}

Kochline.prototype.kochC = function () {
    let a = this.start.copy()
    let v = new p5.Vector.sub(this.end, this.start)
    v.div(3)
    a.add(v)
    v.rotate(-radians(60))
    a.add(v)
    return a
}
Kochline.prototype.kochE = function () {
    return this.end.copy()
}