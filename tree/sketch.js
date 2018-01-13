function setup() {
    createCanvas(windowWidth, windowHeight)
    background(0)
}

function draw() {
    background(0)
    translate(width/2, height)
    branch(200,20)
}

function branch(len, w) {
    stroke(255)
    strokeWeight(w)    
    line(0,0,0,-len)
    translate(0, -len)

    len*= 0.7
    w*= 0.6
    let theta = map(mouseX, 0,width, 0,PI/2)

    if (len >10) {
        push()
        rotate(theta)
        branch(len,w)
        pop()
    
        push()
        rotate(-theta)
        branch(len,w)
        pop()
    }
        
}

