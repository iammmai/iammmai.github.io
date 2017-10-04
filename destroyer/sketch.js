let psys;
const blobTotal = 10;

function setup () {
    createCanvas(windowWidth, windowHeight);
    psys = new ParticleSys();
    bsys = new BlobSys();
    
    for ( let k = 0; k< blobTotal; k++) {
        bsys.addBlob();
        
    }
    
}

function draw () {
    background(0, 13, 35);
    bsys.run();
    psys.addParticle();
    psys.run();
    
     if(bsys.bs.length < blobTotal) {
            bsys.addBlob();
        }
    console.log(bsys.die());

}

function mousePressed() {
    bsys.die();
    
}
