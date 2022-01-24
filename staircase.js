var n = 6;
function staircase(n) {
  // Write your code here
  let counter = 1;
  let simbolo = "#";
  let espacio = " ";
  while (counter <= n) {
    console.log(espacio.repeat(n - counter) + simbolo.repeat(counter));
    counter = counter + 1;
  }
}

staircase(n);
