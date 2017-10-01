let startAngle = 0;
const angleVel = 0.1;
const amp = 200;

function setup () {
    background(0);
    createCanvas(windowWidth, windowHeight);
}

function draw () {
    background(0);
    
    startAngle += 0.02;
    let angle = startAngle;
    
    for (let i =0; i <= width ; i +=40) {
        
        
        let y = amp * sin(angle);
        let dia = map(y, 0, height, 20, 80);
        let colB = map(y,0, height, 0, 255);
        
        let c = color(167,colB,colB);
        
        noStroke();
        fill(c);
        ellipse(i, y+height/2, dia, dia);
        angle += angleVel;
        
        console.log(y);
        //console.log(colG);
    }



}