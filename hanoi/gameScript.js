const Hanoi = require('./game.js')
const readline = require('readline');
let reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const callback = function () {
  reader.question("Play again?", (res) => {
    if (res.toLowerCase() === "yes") {
      h = new Hanoi();
      h.run(reader, callback);
    } else {
      reader.close()
    }
  })
}

h = new Hanoi();
h.run(reader, callback);
