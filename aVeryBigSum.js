var ar = [1000000001, 1000000002, 1000000003, 1000000004, 1000000005];

function aVeryBigSum(ar) {
  let n = ar.length;
  var sumElementsArray = 0;
  for (var counter = 0; counter < n; counter++) {
    let elementArray = ar[counter];
    sumElementsArray = sumElementsArray + elementArray;
  }
  return sumElementsArray;
}

var sumResult = aVeryBigSum(ar);
console.log(sumResult);
