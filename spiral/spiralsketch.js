let r = 0;
let theta = 0;

function setup() {
    createCanvas(windowWidth, windowHeight);
    background(0);
}

function draw() {
    //background(0);
    
    var x = r * cos(theta);
    var y = r * sin(theta);
    
    theta += 0.02;
    r +=0.1;
    
    
    fill(255);
    noStroke();
    ellipse(x+width/2,y+height/2,20,20);
}