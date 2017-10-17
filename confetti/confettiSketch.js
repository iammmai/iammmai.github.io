let c 
let s
let t


function setup () {
    createCanvas(windowWidth, windowHeight)
    background(255)
    c = new ParticleSys()
    s = new SquareSys()
    t = new TriangleSys
}

function draw () {
    background(0)
    
    c.run()
    s.run()
    t.run()

}

