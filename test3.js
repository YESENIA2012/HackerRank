/* Create an algorithm tha receives from the console two list of 
numbers separated by commas, each list being separated by a slash.

Create two lists from the received text and prints a new list 
by adding all the values from the two previous lists */

const numbers = "1,2,3/3,2,1";
const arrayData = numbers.split("/");
const firstArray = arrayData[0].split(",");
const secondArray = arrayData[1].split(",");
let result = [];

for (let counter = 0; counter < firstArray.length; counter++) {
  let elementFirstArray = parseInt(firstArray[counter]);
  let elementSecondArray = parseInt(secondArray[counter]);
  let sum = elementFirstArray + elementSecondArray;

  result.push(sum);
}

console.log(result); // => [4,4,4]
