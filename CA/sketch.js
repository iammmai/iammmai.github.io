let c

function setup() {
    createCanvas(windowWidth, windowHeight)
    background(0)
    c= new CellSystem()
    c.restart()
    
}

function draw() {
    if(mouseIsPressed) {
        c.restart()
    }
    c.render()
    c.generate()

}

