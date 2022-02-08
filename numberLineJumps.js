var x1 = 35;
var v1 = 1;
var x2 = 45;
var v2 = 3;

function kangaroo(x1, v1, x2, v2) {
  let sum1 = x1 + v1;
  let sum2 = x2 + v2;
  let jump = (x2 - x1) / (v2 - v1);
  let numberJumps = Math.abs(jump);

  if (x1 < x2 && v1 < v2) {
    return "NO";
  }
  if (x1 + v1 == x2 + v2) {
    return "YES";
  } else if (sum1 * 2 == sum2 || sum2 * 2 == sum1) {
    return "YES";
  } else if (numberJumps % 1 === 0) {
    return "YES";
  } else {
    return "NO";
  }
}

var result = kangaroo(x1, v1, x2, v2);
console.log(result);
