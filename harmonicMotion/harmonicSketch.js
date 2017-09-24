let moversA = [];
let moversB = []; 
let moversC = [];


function setup() {
    createCanvas(windowWidth, windowHeight);
    background(0);
    for (let i=0; i<15; i++) {
        moversA[i] = new Mover(width/2, 50+ i*50,20, 10+i*60, 255,width/2);
    }
    
    for (let j=0; j<15 ; j++) {
        moversB[j] = new Mover(width/3,50+ j*50,20, 10+j*60, color(247, 34, 126, 25),width/3 )
    }
    
    for (let k=0; k<15 ; k++) {
        moversC[k] = new Mover(2*width/3,50+ k*50,20, 10+k*60, color(247, 34, 126, 25), 2*width/3 )
    }

}

function draw() {
    background(0);
    for (let i=0; i < moversA.length; i++) {
        moversA[i].oscillate();
        moversA[i].update();
        moversA[i].display();
        moversA[i].hasTrail();
    }
    
    for (let j =0; j < moversB.length ; j++) {
        moversB[j].oscillate();
        moversB[j].update();
        moversB[j].display();
        moversB[j].hasTrail();
    }
    
    for (let k =0; k < moversC.length ; k++) {
        moversC[k].oscillate();
        moversC[k].update();
        moversC[k].display();
        moversC[k].hasTrail();
    }
   
}