function Pizza () {
    this.num = 10
    this.row = 100
    this.col = 100
    this.r = 100
    this.angle = 0
    this.pizzaImg = loadImage("pizza.png")
    this.cakeImg = loadImage("cake.png")
    
}


Pizza.prototype.makeGrid = function () {
    
    for (let i=0; i < width ; i += this.col) {
        for (let j=0; j< height; j += this.row) {
            
            imageMode(CENTER)
            fill(0)
            noStroke()
            push()
                translate(i,j)
                rotate(radians(this.angle))
                image(this.cakeImg, 0,0,100,100)
            pop()
        }
    }
    
    for (let i=-this.row/2; i < width ; i += this.col) {
        for (let j=this.col/2; j< height; j += this.row) {
            
            imageMode(CENTER)
            fill(100)
            noStroke()
            push()
                translate(i,j)
                rotate(radians(-this.angle))
                //rect(0,0, this.r, this.r)
                image(this.pizzaImg,0,0,100,100)
            pop()
        }
    }
    this.angle += 1
    

}