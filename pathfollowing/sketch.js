let p
let m

function setup() {
    createCanvas(windowWidth, windowHeight)
    background(0)
    p = new Path()
    generatePath(p)
    m = new Mover()
}

function draw() {
    background(0)
    if(keyIsPressed) {
        p.points=[]
        generatePath(p)
    }
    p.display()
    
    m.checkEdges(p.points[0])
    m.update()
    m.follow(p)
    m.display()

}

function generatePath(path) {
    path.addPoint(0, random(height))
    path.addPoint(random(width/3), random(height))
    path.addPoint(random(width/3, 2*width/3), random(height))
    path.addPoint(width,random(height))
}