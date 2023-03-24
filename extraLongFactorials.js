//Calculate and print the factorial of a given integer.

let n = 25;

function extraLongFactorials(n) {
  let result = BigInt(n * (n - 1));

  for (let counter = 2; counter < n; counter++) {
    result = result * BigInt(n - counter);
  }
  result = result.toString();
  console.log(result);
  return result;
}

console.log(extraLongFactorials(n));
