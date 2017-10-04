function Blob (x,y,ra) {
    this.loc = new p5.Vector(x,y);
    this.vel = new p5.Vector(0,0);
    this.acc = new p5.Vector(0.05,0.06);
    this.r = ra;
    this.isKilled = false;
    
    this.update = function () {
        this.vel.add(this.acc);
        this.loc.add(this.vel);
    }
    
    this.checkEdges = function () {
        if (this.loc.x > width-this.r || this.loc.x < this.r) {
            this.vel.x *= -1;
        } else if (this.loc.y > height-this.r || this.loc.y < this.r) {
            this.vel.y *= -1;
        }
    }
    
    this.display = function () {
        ellipseMode(RADIUS);
        noStroke();
        fill(255);
        ellipse(this.loc.x, this.loc.y, this.r, this.r);
    }
    
    this.kill = function () {
        let d = dist(mouseX, mouseY, this.loc.x, this.loc.y);
        
        if(d < this.r && mouseIsPressed) {
            this.isKilled = true;
        } 
        
    }

}

// Blob System

function BlobSys () {
    this.bs = [];


    
    this.addBlob = function () {
        this.bs.push(new Blob(random(width), random(height), 30));

    }
    
    this.run = function() {
        for (let j = this.bs.length -1; j>=0 ; j--) {
            let b = this.bs[j];
            b.checkEdges();
            b.update();
            b.kill();
            b.display();

        }
    }
    
    this.die = function () {
        for (let j = this.bs.length -1; j>=0 ; j--) {
            let b = this.bs[j];
            
            if(b.isKilled) {
                this.bs.splice(j,1);

            }
        }
    }
}