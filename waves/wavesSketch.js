let startAngle = 0;
const angleVel = 0.1;
const amp = 200;

function setup () {
    background(0);
    createCanvas(windowWidth, windowHeight);
}

function draw () {
    background(0);
    
    startAngle += 0.01;
    let angle = startAngle;
    
    for (let i =0; i <= width ; i +=25) {
        
        
        let y = amp * sin(angle);
        
        noStroke()
        fill(255);
        ellipse(i, y+height/2, 18, 18);
        angle += angleVel;
        
    }
}