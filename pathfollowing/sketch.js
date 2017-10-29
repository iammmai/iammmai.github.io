let p
let m

function setup() {
    createCanvas(windowWidth, windowHeight)
    background(0)
    p = new Path()
    m = new Mover()
}

function draw() {
    background(0)
    p.display()
    //m.follow(p)
    
    m.update()
    m.getTarget(p)
    m.display()
    
}