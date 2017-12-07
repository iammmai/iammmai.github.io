function CellSystem() {
  this.ruleset = [];
  this.generation = 0;
  this.w = 3;
  this.cols = Math.floor(width / this.w);
  this.rows = Math.floor(height / this.w);
  this.cells = new Array(this.cols);
  for (let i = 0; i < this.cols; i++) {
    this.cells[i] = new Array(this.rows);
  }
}

CellSystem.prototype.restart = function() {
  background(0);
  for (let i = 0; i < this.cols; i++) {
    for (let j = 0; j < this.rows; j++) {
      this.cells[i][j] = 0;
      this.cells[i][0] = Math.floor(random(2));
    }
  }
  this.generation = 0;
  c.generateRuleset();
};

CellSystem.prototype.generateRuleset = function() {
  for (let i = 0; i < 8; i++) {
    this.ruleset.push(Math.floor(random(2)));
  }
};

CellSystem.prototype.generate = function() {
  for (let i = 0; i < this.cols; i++) {
    let newstate;
    if (i == 0) {
      newstate = this.rule(
        this.cells[this.cols - 1][this.generation],
        this.cells[i][this.generation],
        this.cells[i + 1][this.generation]
      );
    } else if (i == this.cells.length - 1) {
      newstate = this.rule(
        this.cells[i - 1][this.generation],
        this.cells[i][this.generation],
        this.cells[0][this.generation]
      );
    } else {
      newstate = this.rule(
        this.cells[i - 1][this.generation],
        this.cells[i][this.generation],
        this.cells[i + 1][this.generation]
      );
    }

    this.cells[i][this.generation + 1] = newstate;
  }
  this.generation += 1;
};

CellSystem.prototype.rule = function(left, middle, right) {
  let string = "" + left + middle + right;
  let index = parseInt(string, 2);
  return this.ruleset[index];
};

CellSystem.prototype.render = function() {
  for (let i = 0; i < this.cols; i++) {
    for (let j = 0; j < this.rows; j++) {
      if (this.cells[i][j] == 1) {
        fill(255);
      } else {
        noFill();
        noStroke();
      }
      //stroke(255);
      rect(i * this.w, j * this.w, this.w, this.w);
    }
  }
};

// if it's hit the bottom we need to splice the 2D array...how??
CellSystem.prototype.finished = function() {
  if (this.generation * this.w > height) {
    return true;
  } else {
    return false;
  }
};

CellSystem.prototype.removeRow = function() {
  for (let k = 0; k < this.cols; k++) {
    this.cells[k].splice(0,1)
  }
};
