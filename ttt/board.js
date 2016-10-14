class Board {
  constructor() {
    // this.reader = reader;
    this.board = new Array();
    while (this.board.length < 3) {
      this.board.push(new Array(3).fill(null))
    }
  }

  rows() {
    return this.board;
  }

  display() {
    this.board.forEach((row) => {
      console.log(row);
    });
  }

  columns() {
    let cols = [];
    for (let i = 0; i < this.board.length; i++) {
      cols.push([0,1,2].map(
        (j) => this.rows()[j][i]
      ))
    }
    return cols
  }

  over() {
    return (this.won() || this.board.reduce((a,b) => {
      return  a && !b.filter((x)=>!x).length}, true)); 
    }


  won() {
    return !!this.winner()
  }

  empty(pos) {
    console.log(pos);
    return !this.board[pos[0]][pos[1]];
  }

  diagonals() {
    let diags = [[],[]]
    for (var i = 0; i < this.board.length; i++) {
      diags[0].push(this.board[i][i]);
      diags[1].push(this.board[i][2-i]);
    }
    return diags
  }

  placeMark(pos, mark) {
    if (this.empty(pos)) {
      this.board[pos[0]][pos[1]] = mark;
      return true;
    }
    return false;
  }

  winner() {
    let rows = this.rows();
    let cols = this.columns();
    let diags = this.diagonals();
    for (var i = 0; i < rows.length; i++) {
      if (rows[i].filter((el) => el === "X").length === 3 ||
        cols[i].filter((el) => el === "X").length === 3) {
          return "X"
        }
      if (rows[i].filter((el) => el === "O").length === 3 ||
        cols[i].filter((el) => el === "O").length === 3) {
          return "O"
        }
    }
    for (var i = 0; i < diags.length; i++) {
      if (diags[i].filter( (el) => el === "O").length ===3) {
        return "O";
      }
      if (diags[i].filter( (el) => el === "X").length ===3) {
        return "X";
      }
    }
    return null;
  }

}

module.exports = Board;
