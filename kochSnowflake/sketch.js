let lines = []
function setup() {
    createCanvas(windowWidth, windowHeight)
    background(0)

    const a = new p5.Vector(width/3, height/3)
    const b = new p5.Vector(width*2/3, height/3)
    const c = new p5.Vector(width/2, height*5/6)

    lines.push(new Kochline(a, b))
    lines.push(new Kochline(b, c))
    lines.push(new Kochline(c, a))
    /*
    for (let i=0; i<5; i++) {
        generate(lines)
    }
    */
}

function draw () {
    background(0)
    lines.forEach(function(line){
        line.display()
    })
}

function mouseClicked() {
    generate(lines)
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