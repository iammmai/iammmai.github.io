function ParticleSys () {
    this.ps = [];
    
    this.addParticle = function () {
        this.ps.push(new Particle(random(width), 0, random(20)));
    }
    
    this.run = function () {
        // Go backwards to remove from array
        for ( let i = this.ps.length-1 ; i >=0 ; i--) {
            
            let wind = new p5.Vector(0.001,0);
            let p = this.ps[i];
            p.applyForce(wind);
            p.run();

            if(p.isDead()) {
                this.ps.splice(i, 1);
            }
        }
    }
}