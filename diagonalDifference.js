var arr = [
  [1, 2, 3],
  [4, 5, 6],
  [9, 8, 9],
];
function diagonalDifference(arr) {
  // Write your code here
  let sumDiagonalMain = 0;
  let sumDiagonalSecundary = 0;
  let diagonalDifference = 0;
  for (var counter = 0; counter < arr.length; counter++) {
    let rowArray = arr[counter];

    for (var counter2 = 0; counter2 < rowArray.length; counter2++) {
      let elementArray = rowArray[counter2];

      if (counter == counter2) {
        sumDiagonalMain = sumDiagonalMain + elementArray;
      }
      if (counter + counter2 == arr.length - 1) {
        sumDiagonalSecundary = sumDiagonalSecundary + elementArray;
      }
    }
  }
  diagonalDifference = sumDiagonalMain - sumDiagonalSecundary;

  diagonalDifference = Math.abs(diagonalDifference);
  /* console.log("respuesta", diagonalDifference); */
  return diagonalDifference;
}

var diagonalDifference = diagonalDifference(arr);
console.log(diagonalDifference);
