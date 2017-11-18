function Mover (x,y,r, a,c, o) {
    this.loc = new p5.Vector(x,y);
    this.rad = r;
    this.amp = a;
    this.angle = new p5.Vector(0,0);
    this.vel = new p5.Vector(0.03, 0.03);
    this.trail = [];
    this.col = c;
    this.off = o;
    
    this.oscillate = function() {
        this.angle.add(this.vel);
    }
    
    this.update = function() {
        this.loc.x = this.amp * sin(this.angle.x) + this.off;

        let v = new p5.Vector(this.loc.x, this.loc.y);
        this.trail.push(v);
        if(this.trail.length > 100) {
            this.trail.splice(0,1);
        }
    }
    
    this.display = function() {
        
        noStroke();
        fill(this.col);
        ellipse(this.loc.x, this.loc.y, this.rad, this.rad);
        
    }
    
    this.hasTrail = function () {
        
        for (let i = 0; i < this.trail.length ; i++) {
            let pos = this.trail[i];
            fill(this.col,25);
            ellipse(pos.x, pos.y, this.rad, this.rad);
    
        }
    
    }
}