let v

function setup () {
    createCanvas(windowWidth, windowHeight)
    background(0)
    v = new Vehicle(random(width), random(height))
}

function draw() {
    background(0)
    v.target()
    v.move()
    v.checkEdges()
    v.display()
}