const Board = require('./board')
class Game {
  constructor(reader) {
    this.reader = reader;
    this.board = new Board;
    this.color = "X";
  }

  run(completionCallback) {
    if (this.board.over()) {
      if (this.board.won()) {
        console.log(`${this.board.winner()} won!`)
      } else {
        console.log("It's a draw!");
      }
      completionCallback();
    } else {
      this.promptMove((result) => {
        if (this.board.placeMark(result, this.color)) {
          this.color = (this.color === "X") ? "O" : "X";
        } else {
          console.log("Invalid move.");
        }
        this.run(completionCallback);
      });
    }
  }

  promptMove(callback) {
    this.board.display();

    this.reader.question(`${this.color}, enter x y to place mark at row x  col y: `,
    (res) => {
      let pos = res.split(/[,\s]\s*/).map(Number);
      callback(pos);
   });
  }

}

module.exports = Game
