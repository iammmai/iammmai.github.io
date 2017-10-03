let psys;

function setup () {
    createCanvas(windowWidth, windowHeight);
    psys = new ParticleSys();
}

function draw () {
    background(0, 13, 35);
    psys.addParticle();
    psys.run()

}
