/*We are making the final adjustments to Santa's sleigh!
As you already know. the sled is flying and we are adjusting the motor so that it makes parabolas 
as optimal as possible. For this, the jump must always be upwards and, from the highest 
point, it must always go downwards.
Our trusted mechanic, Alexander, who has a great Tesla, has explained to us that the jumps can 
be seen as arrays... and that we just have to make sure that the numbers go up and down 
correctly. He also warns us that we will only pass arrays of at least three positions
Make an algotithm that receives in the console a text with values (separate by commans) and prints 
true in the console if tye values go up and down strictly, otherwise it prints false */
/* let data = '1,2,3' */

let data = "0,3,2,1";
let arrayData = data.split(",");
let result = null;

let firstElement = arrayData[0];
let secondElement = arrayData[1];
let thirdElement = arrayData[2];

if (firstElement < secondElement && secondElement > thirdElement) {
  result = true;
} else if (firstElement < secondElement && secondElement < thirdElement) {
  result = false;
}

console.log(result); // true
