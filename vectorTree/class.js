function Branch(a,b,w) {
    this.start = a.copy()
    this.end = b.copy()
    this.weight =w
}

Branch.prototype.calculateDots = function () {
    /* for drawing a line do this
    stroke(255)
    strokeWeight(this.weight)
    line(this.start.x, this.start.y, this.end.x, this.end.y)
    */
    for (let i=0; i<=8 ; i++) {
        let x =lerp(this.start.x, this.end.x, i/8)
        let y = lerp(this.start.y, this.end.y, i/8)
        dots.push(new Dot(x,y,this.weight))
    }
    
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

function Dot(x,y,d) {
    this.xpos =x
    this.ypos =y
    this.dia =d
}

Dot.prototype.display = function(){
    fill(255)
    noStroke()
    ellipse(this.xpos,this.ypos,this.dia,this.dia)
}