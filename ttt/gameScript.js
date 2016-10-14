const Game = require('./game.js')
const readline = require('readline');
let reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const callback = function () {
  reader.question("Play again?", (res) => {
    if (res.toLowerCase() === "yes") {
      let ttt = new Game(reader);
      ttt.run(callback);
    } else {
      reader.close()
    }
  })
}

ttt = new Game(reader);
ttt.run(callback);
