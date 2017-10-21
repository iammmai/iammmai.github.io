let p
function setup() {
    background(255)
    createCanvas(windowWidth, windowHeight)
    p = new Pizza()
}

function draw() {
    background(255)
    p.makeGrid()
    
}