/*Write a function that takes in a non-empty array of distinct integers and an integer representing a target sum. 
If any two numbers in the input array sum up to the target sum, the function should return them in an array, in any order, 
if no two numbers sum up to the target sum, the function should return an empty array
Note that the target sum has to be obtained by summing two different integers in the array,
you can't add a single integer to itself in order to obtain the target num
You can assume that there will be at most one pair of numbers summing up to the target sum
 */
const array = [15];
const targetSum = 15;

function getNumbers(array, targetSum) {
  let newArray = [];

  for (let counter = 0; counter < array.length; counter++) {
    let element = array[counter];

    for (let counter2 = 0; counter2 < array.length; counter2++) {
      let element2 = array[counter2];

      if (counter !== counter2) {
        if (element + element2 == targetSum) {
          newArray.push(element);
        }
      }
    }
  }
  return newArray;
}

console.log(getNumbers(array, targetSum));
