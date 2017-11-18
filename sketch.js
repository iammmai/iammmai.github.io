var walker;

function setup() {
    createCanvas(640, 480);
    background(0);
    walker = new Walker();
    
}

function draw(){
    background(0);
    walker.move();
    walker.display();
}


/*
const walker = {
    x : 100,
    y : 100,
    rad: 10,
    c : 255,

}

const display = obj =>({
    ...obj,
    fill(c),
    noStroke(),
    ellipse(x, y, rad, rad)
})

const walk = obj, range => ({
    ...obj,
    xwalk : random(-range, range),
    ywalk : random(-range, range),
    x += xwalk,
    y += ywalk
})
*/

function Walker() {
    this.x = width/2;
    this.y = height/2;
    this.rad = 30;
    this.speed = 2;    
    this.xd = 1; 
    this.yd= 1; 
    this.color = 255;
    
    this.move = function(){

        this.x += this.speed * this.xd;
        this.y += this.speed * this.yd;
   
        if(this.x < this.rad) {
            this.xd *= -1;
        }
        else if(this.x > width - this.rad){
            this.xd *= -1 ;
        }
        else if(this.y < this.rad){
            this.yd *= -1;
        }
        else if(this.y > height - this.rad){
            this.yd *= -1;
        }
    };
    
    this.display = function(){
        fill(this.color);
        noStroke();
        ellipse(this.x, this.y, this.rad, this.rad);
    };
};