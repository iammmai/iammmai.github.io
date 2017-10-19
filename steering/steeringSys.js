// Confetti System
function ParticleSys () {
    this.ps = []
    this.total = 20
}

ParticleSys.prototype.addParticle = function () {
    if (mouseIsPressed) {
        for (let i =0 ; i<this.total ; i++) {
            let p = new Confetti(mouseX+random(-200,200), mouseY+random(-200,200), random(10,25))
            this.ps.push(p)
        }
    }
}

ParticleSys.prototype.run = function (trgt) {

            this.addParticle();

        // Go backwards to remove the particles from the array

        for (let j = this.ps.length-1 ; j >=0 ; j--) {
            let par = this.ps[j]
            par.run(trgt)

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
    if (mouseIsPressed) {
        
        for (let i =0 ; i<this.total ; i++) {
            let p = new Square(mouseX+random(-200,200), mouseY+random(-200,200),random(10,25))
            this.ps.push(p)
        }
    }
}


