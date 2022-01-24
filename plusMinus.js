let arr = [-4, 3, -9, 0, 4, 1];

function plusMinus(arr) {
  let n = arr.length;
  var contadotNumbersPosi = 0;
  var contadorNumbersNega = 0;
  var contadorCero = 0;

  for (let counter = 0; counter < n; counter++) {
    let elementArray = arr[counter];

    if (elementArray > 0) {
      contadotNumbersPosi = contadotNumbersPosi + 1;
    }
    if (elementArray < 0) {
      contadorNumbersNega = contadorNumbersNega + 1;
    }
    if (elementArray == 0) {
      contadorCero = contadorCero + 1;
    }
  }

  var resultPositiveNumbers = (contadotNumbersPosi /= n);
  resultPositiveNumbers = resultPositiveNumbers.toFixed(6);

  var resultNegativeNumbers = (contadorNumbersNega /= n);
  resultNegativeNumbers = resultNegativeNumbers.toFixed(6);

  var zeroResult = (contadorCero /= n);
  zeroResult = zeroResult.toFixed(6);

  console.log(resultPositiveNumbers);
  console.log(resultNegativeNumbers);
  console.log(zeroResult);
}

plusMinus(arr);
