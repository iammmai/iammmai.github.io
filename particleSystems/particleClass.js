function Particle (x,y, rad) {
    this.loc = new p5.Vector(x,y);
    this.acc = new p5.Vector(0,0.02);
    this.vel = new p5.Vector(0,0);
    this.r = rad;
    this.lifespan = 255;
    this.angle;
    
    //this.img = loadImage("pizza.png")
    
    this.run = function () {

        this.update();      
        this.display();
    }
    
    this.update = function () {
        this.vel.add(this.acc);
        this.loc.add(this.vel);
        this.lifespan -=1;
    }
    
    this.display = function () {
        this.angle = this.vel.heading();
        noStroke();
        fill(200, this.lifespan);
        push()
            translate(this.loc.x, this.loc.y);
            rotate(this.angle);
            rect(0,0, this.r*3 , this.r/3);
            //image(this.img, 0, 0, 100, 100)
        pop()
    }
    
    
    this.isDead = function () {
        if (this.lifespan <= 0) {
            return true;
        } else {
            return false;
        }
    }
    
    this.applyForce = function (force) {
        let fAcc = new p5.Vector.div(force, this.r);
        this.acc.add(fAcc);
    }
    
}