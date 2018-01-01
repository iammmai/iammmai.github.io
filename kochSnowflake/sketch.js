let lines = []
function setup() {
    createCanvas(windowWidth, windowHeight)
    background(255)

    const start = new p5.Vector(0, height/2)
    const end = new p5.Vector(width, height/2)

    lines.push(new Kochline(start, end))
    for (let i=0; i<5; i++) {
        generate(lines)
    }
}

function draw () {
    background(255)
    lines.forEach(function(line){
        line.display()
    })
}

function generate (array) {
    let next = []
    array.forEach(function(line) {
        let a = line.kochA()
        let b = line.kochB()
        let c = line.kochC()
        let d = line.kochD()
        let e =line.kochE()

        next.push(new Kochline(a,b))
        next.push(new Kochline(b,c))
        next.push(new Kochline(c,d))
        next.push(new Kochline(d,e))
    })
    lines = next
}