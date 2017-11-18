let p;
let c = [];
let confetti = []

function setup() {
    background(0);
    createCanvas(windowWidth, windowHeight);
    p = new Pendulum(width/2, 0, 400);
}

function draw() {
    background(0);
    p.update(c);
    p.drag();
    p.display();
    
    for (let i=0; i< c.length ; i++) {
        let con = new Confetti(c[i].x, c[i].y);

        confetti.push(con);
        
    }
    
    
    for (let j=0; j< confetti.length; j++) {
        confetti[j].update();
        confetti[j].display();      
        
    }
    

    console.log(c.length);    
    console.log(confetti.length);

}

function mousePressed () {
    p.clicked(mouseX, mouseY);
    
    
}

function mouseReleased () {
    p.stopDragging();
}