/* You are given a number of sticks of varying lengths. You will iteratively cut the sticks into smaller sticks, 
discarding the shortest pieces until there are none left. At each iteration you will determine the length of the shortest stick remaining, 
cut that length from each of the longer sticks and then discard all the pieces of that shortest length. When all the remaining sticks are the same length, 
they cannot be shortened so discard them.

Given the lengths of n sticks, print the number of sticks that are left before each iteration until there are none left. */

//const arr = [5, 4, 4, 2, 2, 8]
const arr = [1, 2, 3, 4, 3, 3, 2, 1]

function cutTheSticks(arr) {
  let remainingSticks = arr.length
  let cantSticks = [remainingSticks]
  let minLengthStick = Math.min(...arr)
  let newArray = []

  while(arr.length >= 1){
    for(let counter = 0; counter < arr.length; counter ++){  
      let stick = arr[counter]
      let deductLengthToStick = stick - minLengthStick
      newArray[counter] = deductLengthToStick
    }

    arr = newArray.filter((element) => Boolean(element) != false)
    newArray = []
    remainingSticks = arr.length

    if(remainingSticks > 0){
      cantSticks.push(remainingSticks)
    }
    minLengthStick = Math.min(...arr)
  }

  return cantSticks
}

console.log(cutTheSticks(arr))