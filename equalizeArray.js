/*Submissions	Leaderboard	Discussions	Editorial
Given an array of integers, determine the minimum number of elements to delete 
to leave only elements of equal value. */

function equalizeArray(arr) {
    let cantMax = 0
    let cantElementToDelete = 0
    let elementCantEqual = 0

    const hashMap = arr.reduce((acc, element) => {
      if(!acc[element]){
        acc[element] = 1
      } else {
        acc[element] = acc[element] + 1
  
        if(acc[element] > cantMax){
          cantMax = acc[element]
        }
      }
  
      return acc;
    }, {})
  
    for(let element in hashMap){
      const value = hashMap[element]
      if(value != cantMax){
        cantElementToDelete = cantElementToDelete + value
      } else {
        elementCantEqual = elementCantEqual + value
      }
    }
  
    if(cantElementToDelete == arr.length){
      cantElementToDelete = cantElementToDelete - 1
    }
  
    if(elementCantEqual > cantMax){
      cantElementToDelete = cantElementToDelete + elementCantEqual - cantMax
    }
    return cantElementToDelete
}
  
  
console.log(equalizeArray([1, 2, 2, 3]))
console.log(equalizeArray([3, 3, 2, 1, 3]))
console.log(equalizeArray([1, 2, 3, 1, 2, 3, 3, 3]))
console.log(equalizeArray([37, 32, 97, 35, 76, 62]))
console.log(equalizeArray([10, 27, 9, 10, 100, 38, 30, 32, 45, 29, 27, 29, 32, 38, 32, 38, 14, 38, 29, 30, 63, 29, 63, 91, 54, 10, 63]))
console.log(equalizeArray([35, 65, 69, 28, 12, 69, 37, 80, 80, 50, 80, 50, 15, 57, 79, 69, 57, 65, 15, 69, 57, 50, 65, 2, 14, 64, 15, 65, 65, 5, 15, 64, 57, 37, 50, 12, 64, 37, 28, 20, 80, 80, 50]))