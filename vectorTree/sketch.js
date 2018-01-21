let branches =[]
let dots =[]
let shownDots = []
let count = 0


function setup() {
    createCanvas(windowWidth, windowHeight)
    background(0)
    let a= new p5.Vector(width/2, height)
    let b = new p5.Vector(width/2, height-200)
    branches.push(new Branch(a,b,20))

    for (let i=0; i<8;i++) {
        generate(branches)
    }
    branches.forEach(function(branch) {
        branch.calculateDots()
    })

}

function draw() {
    background(0)
    shownDots.forEach(function(dot){
        dot.display()
    })
    count = frameCount
    shownDots.push(dots[count])
    
}

function mouseClicked() {
    count++
    shownDots.push(dots[count])
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
