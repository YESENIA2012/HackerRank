let ar = [1, 3, 2, 6, 1, 2];
let k = 3;
let n = ar.length;

function divisibleSumPairs(n, k, ar) {
  // Write your code here
  const copiaAr = ar.map((number) => {
    return number;
  });
  let counterPairs = 0;

  for (counter = 0; counter < n; counter++) {
    let firstElement = copiaAr[0];

    for (
      counter2 = 0;
      counter2 < copiaAr.length && copiaAr.length > 1;
      counter2++
    ) {
      let elementArray = copiaAr[counter2 + 1];

      if (firstElement + elementArray == k) {
        counterPairs++;
      } else if ((firstElement + elementArray) % k == 0) {
        counterPairs++;
      }
    }
    copiaAr.shift();
  }
  return counterPairs;
}

let resultado = divisibleSumPairs(n, k, ar);
console.log(resultado);
