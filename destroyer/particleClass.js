function Particle (x,y, rad) {
    this.loc = new p5.Vector(x,y);
    this.acc = new p5.Vector(0,0.02);
    this.vel = new p5.Vector(0,0);
    this.r = rad;
    this.lifespan = 255;
    this.angle;
    this.col = color(random(255), random(255), random(255), this.lifespan);
    
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
        fill(this.col);
        push()
            translate(this.loc.x, this.loc.y);
            rotate(this.angle);
            rect(0,0, this.r*2 , this.r);
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


// System Class

function ParticleSys () {
    this.ps = [];
    
    this.addParticle = function () {
        if(mouseIsPressed) {
            for (let i = 0; i<30; i++) {
                let par = new Particle(mouseX, mouseY, random(20))
                this.ps.push(par);
            }
            
        }
    }
    
    this.run = function () {
        this.addParticle();
        // Go backwards to remove from array
        for ( let i = this.ps.length-1 ; i >=0 ; i--) {
            let wind = new p5.Vector(random(-0.1,0.1),random(-0.1,0.1));
            let p = this.ps[i];
            p.applyForce(wind);
            p.run();

            if(p.isDead()) {
                this.ps.splice(i, 1);
            }
        }
    }
}