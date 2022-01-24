let arr = [1, 2, 3, 4, 5];

function miniMaxSum(arr) {
  let sumatoryElements = 0;
  let diferencia = 0;
  let subtractElements = [];

  for (let counter = 0; counter < arr.length; counter++) {
    let elementArray = arr[counter];
    sumatoryElements = sumatoryElements + elementArray;
  }
  for (let counter2 = 0; counter2 < arr.length; counter2++) {
    diferencia = sumatoryElements - arr[counter2];
    subtractElements.push(diferencia);
  }
  let minimum = Math.min(...subtractElements);
  let max = Math.max(...subtractElements);

  console.log(minimum, max);
}

miniMaxSum(arr);
