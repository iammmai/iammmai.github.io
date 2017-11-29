let c

function setup() {
    createCanvas(windowWidth, windowHeight)
    background(0)
    c= new CellSystem()

    for (let i=0; i<width; i+= c.w) {
            c.cells.push(Math.floor(random(2)))
        }
        
    c.generateRuleset()
}

function draw() {
    c.cells[c.cells.length/2] = 1 
    c.render()
    c.generate()
    
}