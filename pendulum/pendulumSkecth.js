let p;

function setup() {
    background(0);
    createCanvas(windowWidth, windowHeight);
    p = new Pendulum(width/2, 0, 400);
}

function draw() {
    background(0);
    p.update();
    p.drag();
    p.display();
    p.trailDisplay();
    
    console.log(p.history);

}

function mousePressed () {
    p.clicked(mouseX, mouseY);
    
    
}

function mouseReleased () {
    p.stopDragging();
}