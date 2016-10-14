const readline = require('readline');

const reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function abs(arr, sortCallback) {
  function outerBubbleSortLoop(swap) {
    if (swap) {
      innerBubbleSortLoop(arr, 0 ,false, outerBubbleSortLoop);
    } else {
      reader.close()
      sortCallback(arr);
    }
  }
  outerBubbleSortLoop(true)
}



function askIfGreaterThan(el1, el2, callback) {
  reader.question(`${el1} > ${el2} ? `,
    (res) => callback(res.toLowerCase() === 'yes')
  )
}

function innerBubbleSortLoop(arr, i, madeAnySwaps, outerBubbleSortLoop) {
  if (i < arr.length-1) {
    askIfGreaterThan(arr[i], arr[i+1], (isGreaterThan) => {
      if (isGreaterThan) {
        let right = arr[i+1];
        arr[i+1] = arr[i];
        arr[i] = right;
      }
      innerBubbleSortLoop(arr, i+1, madeAnySwaps || isGreaterThan, outerBubbleSortLoop);
    });
  } else {
    outerBubbleSortLoop(madeAnySwaps);
  }
}

// askIfGreaterThan(2,3, (res) => {
//   console.log(res);
//   reader.close();
// });
a = [20,1,2];
// innerBubbleSortLoop(a, 0, false, (bool) => {reader.close();
// console.log(a)})
abs(a, (arr) => console.log(arr));
