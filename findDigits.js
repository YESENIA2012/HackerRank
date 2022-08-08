let n = 124;

function findDigits(n) {
  let nArray = n.toString().split("");
  let completNumber = n.toString().split("").join("");
  let numberArray = [];
  let counterDigits = 0;

  for (let counter = 0; counter < nArray.length; counter++) {
    let element = parseInt(nArray[counter]);
    numberArray.push(element);
  }

  for (let counter2 = 0; counter2 < numberArray.length; counter2++) {
    let number = numberArray[counter2];

    if (completNumber % number === 0) {
      counterDigits++;
    }
  }
  return counterDigits;
}

let result = findDigits(n);
console.log(result);
