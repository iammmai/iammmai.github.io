let branches =[]

function setup() {
    createCanvas(windowWidth, windowHeight)
    background(0)
    let a= new p5.Vector(width/2, height)
    let b = new p5.Vector(width/2, height-200)
    branches.push(new Branch(a,b,20))
}

function draw() {
    background(0)
    branches.forEach(function(branch){
        branch.display()
    })
}

function mouseClicked() {
    generate(branches)
}

function generate(array) {
    let next = []
    
    array.forEach(function(line){
        lw = line.weight*0.7
        let a = line.getA()
        let b = line.getB()
        let c = line.getC()
        let d = line.getD()
        

        next.push(new Branch(a,b,line.weight))
        next.push(new Branch(b,c,lw))
        next.push(new Branch(b,d,lw))
        
    })
    branches = next
    
}

