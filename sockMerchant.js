let ar = [1, 1, 3, 1, 2, 1, 3, 3, 3, 3];
let n = ar.length;

function sockMerchant(n, ar) {
  let counterPair = 0;
  ar.sort(function (a, b) {
    return a - b;
  });

  for (let counter = 0; counter < n; counter++) {
    if (ar[counter] == ar[counter + 1]) {
      counter++;
      counterPair++;
    }
  }

  return counterPair;
}

console.log(sockMerchant(n, ar));
