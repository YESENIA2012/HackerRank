/*Lily likes to play games with integers. She has created a new game 
where she determines the difference between a number and its reverse. */

function reverseNumber(counter) {
  let numberReverse = counter.toString().split("").reverse().join("");
  return numberReverse;
}

let i = 20;
let j = 23;
let k = 6;

function beautifulDays(i, j, k) {
  let counterBeautifulDays = 0;

  for (let counter = i; counter <= j; counter++) {
    let numReverse = reverseNumber(counter);

    let difference = counter - numReverse;
    let division = difference / k;

    if (division % 1 == 0) {
      counterBeautifulDays++;
    }
  }
  return counterBeautifulDays;
}

let counterDays = beautifulDays(i, j, k);
console.log(counterDays);
