let v1
let vehicles =  []

function setup() {
    createCanvas(windowWidth, windowHeight)
    background(0)
    v1 = new Vehicle(width/2, height/2)
    vehicles.push(v1)
}

function draw() {
    background(0)
    if(mouseIsPressed) {
        vehicles.push(new Vehicle(mouseX, mouseY))
    }
   
    for (let i =0 ; i< vehicles.length; i++) {
        let v = vehicles[i]
        v.checkEdges()
        v.update()
        v.separate(vehicles)
        v.display()
    }

}