let branches =[]
let dots =[]
let shownDots = []
let count = 0
let gen = 0


function setup() {
    createCanvas(windowWidth, windowHeight)
    background(0)
    let a= new p5.Vector(width/2, height)
    let b = new p5.Vector(width/2, height-200)
    branches.push(new Branch(a,b,20,0))

    
    for (let i=0; i<5;i++) {
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
    console.log(branches)
}

function generate(array) {    
    gen++
    array.forEach(function(line){
        if(line.generation == gen-1 || line.generation ==0) {
            let next = []
            lw = line.weight*0.7
            let a = line.getA()
            let b = line.getB()
            let c = line.getC()
            let d = line.getD()
            
            //next.push(new Branch(a,b,line.weight))
            next.push(new Branch(b,c,lw,gen))
            next.push(new Branch(b,d,lw,gen))
            branches = branches.concat(next)
        }
       
        
    })
    
   
    
}