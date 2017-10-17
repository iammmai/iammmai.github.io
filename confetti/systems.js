// Confetti System
function ParticleSys () {
    this.ps = []
    this.total = 20
}

ParticleSys.prototype.addParticle = function () {

    if(mouseIsPressed) {
        for (let i =0 ; i<this.total ; i++) {
            let p = new Confetti(mouseX, mouseY, 20)
            this.ps.push(p)
        }
    }

}

ParticleSys.prototype.run = function () {
    this.addParticle();
    
    // Go backwards to remove the particles from the array
    
    for (let j = this.ps.length-1 ; j >=0 ; j--) {
        let par = this.ps[j]
        let wind = createVector(random(-0.03,0.03), random(-0.03, 0.03))
        par.applyForce(wind)
        par.run()
        
        if (par.isDead()) {
            this.ps.splice(j, 1)
        }
    }
}


// Child class of the confetti system
function SquareSys () {
    ParticleSys.call(this)
}

SquareSys.prototype = Object.create(ParticleSys.prototype)
SquareSys.prototype.constructor = SquareSys

//Overwrite addParticle
SquareSys.prototype.addParticle = function () {
    if(mouseIsPressed) {
        for (let i =0 ; i<this.total ; i++) {
            let p = new Square(mouseX, mouseY, 20, color(random(255), random(255), random(255)))
            this.ps.push(p)
        }
    }
}