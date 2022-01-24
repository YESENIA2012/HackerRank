var ar = [1, 2, 3, 4, 10, 11];

function simpleArraySum(ar) {
  var sumElement = 0;
  for (var counter = 0; counter < ar.length; counter++) {
    var elementArray = ar[counter];
    sumElement = sumElement + elementArray;
  }
  return sumElement;
}

var sum = simpleArraySum(ar);
console.log(sum);
