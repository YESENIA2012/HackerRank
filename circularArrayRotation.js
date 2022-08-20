/*John Watson knows of an operation called a right circular rotation on an array of integers. One rotation operation moves 
the last array element to the first position and shifts all remaining elements right one. To test Sherlock's abilities, Watson 
provides Sherlock with an array of integers. Sherlock is to perform the rotation operation a number of times then determine the 
value of the element at a given position.
For each array, perform a number of right circular rotations and return the values of the elements at the given indices. */

/*let a = [3, 4, 5];
let k = 2;
let queries = [1, 2]; */

let a = [
  39356, 87674, 16667, 54260, 43958, 70429, 53682, 6169, 87496, 66190, 90286,
  4912, 44792, 65142, 36183, 43856, 77633, 38902, 1407, 88185, 80399, 72940,
  97555, 23941, 96271, 49288, 27021, 32032, 75662, 69161, 33581, 15017, 56835,
  66599, 69277, 17144, 37027, 39310, 23312, 24523, 5499, 13597, 45786, 66642,
  95090, 98320, 26849, 72722, 37221, 28255, 60906,
];

let k = 51;

let queries = [
  47, 10, 12, 13, 6, 29, 22, 17, 7, 3, 30, 45, 1, 21, 50, 17, 25, 42,
];

function circularArrayRotation(a, k, queries) {
  let copyArray = [...a];
  let newArray = [];

  if (k == a.length) {
    /* Using loop for
      for (let counter = 1; counter <= copyArray.length; counter++) {
        let lastValue = copyArray.pop();
        copyArray.unshift(lastValue);
      }
    */

    // Using forEach
    copyArray.forEach((element) => {
      let lastValue = copyArray.pop();
      copyArray.unshift(lastValue);
    });

    /* Using loop for
    for (let counter2 = 0; counter2 < queries.length; counter2++) {
      let element = queries[counter2];
      newArray[counter2] = copyArray[element];
    } */

    // Using map
    newArray = queries.map(
      (element, index) => (newArray[index] = copyArray[element])
    );
  } else {
    for (let counter = 1; counter <= k; counter++) {
      let lastValue = copyArray.pop();
      copyArray.unshift(lastValue);
    }

    newArray = queries.map(
      (element, index) => (newArray[index] = copyArray[element])
    );
  }

  return newArray;
}

console.log(circularArrayRotation(a, k, queries));
