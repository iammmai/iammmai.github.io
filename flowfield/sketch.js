let f
let m

function setup() {
    background(0)
    createCanvas(windowWidth, windowHeight)
    f = new Flowfield(30)
    m = new Mover(20, 10)
}

function draw() {
    background(0)
    f.make2DArray(f.cols)
    f.init()
    m.follow(f)
    m.update()
    m.checkEdges()
    m.display()
}