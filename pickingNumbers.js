/*Given an array of integers, find the longest subarray where the absolute difference between any two elements is less than or equal to 1.
 */

function pickingNumbers(a) {
  let lengthMax = 0;

  for (let counter = 0; counter < a.length; counter++) {
    let num1 = a[counter];
    let count = 0;

    for (let counter2 = 0; counter2 < a.length; counter2++) {
      let num2 = a[counter2];

      if (num1 - num2 === 0 || num1 - num2 === 1) {
        count++;
      }
    }

    if (count > lengthMax) {
      lengthMax = count;
    }
  }

  return lengthMax;
}

let a = [4, 6, 5, 3, 3, 1];
console.log(pickingNumbers(a));
