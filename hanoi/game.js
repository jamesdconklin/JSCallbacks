const readline = require('readline');


class Hanoi {
  constructor() {
    this.stacks = new Array(3);
    this.stacks[0] = [3,2,1];
    this.stacks[1] = [];
    this.stacks[2] = [];
  }

  promptMove(reader, callback) {
    this.printStacks();

    reader.question("Enter x y to move from stack x to stack y: ",
    (res) => {
      let towers = res.split(/,?\s+/).map(Number);
      callback(...towers);
   });
  }

  printStacks() {
     console.log(this.stacks);
  }

  isValidMove(x,y) {
    if (Math.min(x,y) < 0 || Math.max(x,y) > 2) {return false;}
    let xs = this.stacks[x];
    let ys = this.stacks[y];
    return (xs.length &&
      (!ys.length || xs[xs.length-1] < ys[ys.length-1])
    )
  }

  move(t1, t2) {
    if (this.isValidMove(t1, t2)) {
      this.stacks[t2].push(this.stacks[t1].pop())
      return true;
    } else {
      return false
    }
 }

 isWon() {
   return (this.stacks[1].length === 3 || this.stacks[2].length === 3)
 }

  run(reader, completionCallback) {
    if (this.isWon()) {
      this.printStacks();
      console.log("You win!");
      completionCallback();
    } else {
      this.promptMove(reader, (t1,t2) => {
        if (!this.move(t1, t2)) {
          console.log("Invalid Move");
        }
        this.run(reader, completionCallback)
      })
    }
  }

}
module.exports = Hanoi;
