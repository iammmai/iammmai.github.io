let c 
let s 
let l

function setup() {
    createCanvas(windowWidth, windowHeight)
    background(0)
    c = new ParticleSys()
    s = new SquareSys() 
    l = new Leader(random(width), random(height), 30)

}

function draw() {
    background(0)
    c.run(l.loc)
    //s.run(l.loc)
    let wind = createVector(5,7)
    l.applyForce(wind)
    l.run()
    
}