let c

function setup() {
    createCanvas(windowWidth, 300)
    background(0)
    c= new CellSystem()
    c.restart()
    
}

function draw() {
    c.render()
    c.generate()
    
    
    if(mouseIsPressed) {
        c.restart()
    }
    
    
    if(c.finished()) {
        console.log('yay')
        c.removeRow()
    }    
    console.log(c.cells[0].length)
    
    
    
}

