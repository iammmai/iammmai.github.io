function Flowfield (r) {
    this.resolution = r
    this.cols = width/this.resolution
    this.rows = height/this.resolution
    this.field = this.make2DArray(this.cols)
    
}

// creates the two-dimensional array (array in an array)
Flowfield.prototype.make2DArray = function (n) {
    let a = []
    for (let i = 0; i< n ; i++) {
        a[i] = []
    }
    return a
}

//function to draw the vector
Flowfield.prototype.drawVector= function (v,x,y, scale) {
    push()
    const asize = 4
    translate(x,y)
    
    //rotate it to the correct heading
    rotate(v.heading())
    const len = v.mag()*scale
    stroke(255)
    
    //draw it out, will be rotaed into the correct position
    line(0,0,len,0)
    line(len, 0, len-asize, asize/2)
    line(len, 0, len-asize, -asize/2)
    pop()
}

Flowfield.prototype.init = function () {
    let xoff = 0
    
    for ( let i = 0; i< this.cols ; i++) {
        let yoff= 0
        for ( let j = 0; j < this.rows ; j++) {
            
            let theta = map(noise(xoff,yoff),0,1,0,TWO_PI)
            this.field[i][j] = createVector(cos(theta), sin(theta))
            
            this.drawVector(this.field[i][j], i*this.resolution, j*this.resolution,20)
            yoff += 0.05
            
        }
        xoff +=0.1
    }

}

//function to return the row and column
Flowfield.prototype.lookup = function (location) {
    let column = Math.floor(constrain(location.x/this.resolution, 0, this.cols))
    let row = Math.floor(constrain(location.y/this.resolution, 0, this.rows))
    return this.field[column][row].copy()


}