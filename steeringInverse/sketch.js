let c 
let s 

function setup() {
    createCanvas(windowWidth, windowHeight)
    background(0)
    c = new ParticleSys()
    s = new SquareSys() 

}

function draw() {
    background(0)
    c.run()
    s.run()
    
}