function CellSystem() {
  this.cells = [];
  this.ruleset = [];
  this.generation = 0;
  this.w =3

}

CellSystem.prototype.generateRuleset = function () {
    for (let i=0; i<8; i++) {
            this.ruleset.push(Math.floor(random(2)))          
    }
}

CellSystem.prototype.generate = function() {
  let newcells = new Array(this.cells.length);
  for (let i = 1; i < this.cells.length-1; i++) {
    let newstate = this.rule(this.cells[i - 1], this.cells[i], this.cells[i + 1]);
    newcells[i] = newstate;
  }
  this.cells = newcells;
  this.generation += 1;
};

CellSystem.prototype.rule = function(left, middle, right) {
  let string = "" + left + middle + right;
  let index = parseInt(string, 2);
  return this.ruleset[index];
};

CellSystem.prototype.render = function() {
  for (let i = 0; i < this.cells.length; i++) {
    if (this.cells[i] == 1) {
      fill(255);
    } else {
      noFill()
      noStroke();
    }
    //stroke(255);
    rect(i * this.w, this.generation * this.w, this.w, this.w);
  }
};
