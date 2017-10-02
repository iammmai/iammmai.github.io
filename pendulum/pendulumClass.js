function Pendulum(xo, yo, rad) {
    this.loc = new p5.Vector(0,0);
    this.origin = new p5.Vector(xo, yo);
    this.r = rad;
    this.angle = PI/2;
    this.aAcc = 0;
    this.aVel = 0;
    this.damp = 0.98;
    this.dragging = false;
    
    this.history = [];
    

    
    this.update = function () {
        
        if (!this.dragging) {
            const gravity = 0.01;
            this.aAcc = -1 * gravity * sin(this.angle);
            this.aVel += this.aAcc;
            this.angle += this.aVel;

            this.aVel *= this.damp;

            this.loc.set(this.r * sin(this.angle), this.r * cos(this.angle), 0);
            this.loc.add(this.origin);

                let v = new p5.Vector(this.loc.x, this.loc.y);

                this.history.push(v);
               /*
                if (this.history.length > 200) {
                    this.history.splice(1,0);
                }
                */
        }
    }
    
    this.display = function () {
        
        ellipseMode(CENTER);
        stroke(255);
        line(this.origin.x, this.origin.y, this.loc.x, this.loc.y);
        fill(255);
        ellipse(this.loc.x, this.loc.y, 30,30);
    }
    
    
    
    this.trailDisplay = function () {
        
        noStroke();
        let vAcc = new p5.Vector(0, 0.5);
        let vVel = new p5.Vector(0,0);
        
        for (let i=0; i < this.history.length; i++) {
            let pos = this.history[i];
            vVel.add(vAcc);
            pos.add(vVel);
            
            let c = color(242, 29, 178);
            fill(c);
            ellipse(pos.x, pos.y, 16, 16);
        }
        
    }
    
    this.clicked = function (mx, my) {
        let d = dist(mx,my, this.loc.x, this.loc.y);
        if ( d < 30 ) {
            this.dragging = true;
        }
    
    }
    
    this.stopDragging = function () {
        this.dragging = false;
        this.aVel = 0;
    }
    
    this.drag = function () {
        if(this.dragging) {
            let mV = new p5.Vector(mouseX, mouseY);
            let diff = new p5.Vector.sub(this.origin, mV);
            this.angle = atan2(-1* diff.y, diff.x)- radians(90);
            this.loc.set(mV.x, mV.y);
        }
    }
    
}