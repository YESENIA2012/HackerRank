/*In the toy factory of the North Pole, each toy has a unique identification number.
However, due to an error in the toy machine, some numbers have been assigned to more than one toy.
Find the first identification number that has been repeated, where the second occurrence has the smallest index!
In other words, if there is more than one repeated number, you must return the number whose second occurrence appears first in the list. 
If there are no repeated numbers, return -1.
 */

function findFirstRepeated(gifts) {

  let numberRepeat = -1
  let newArray = []

  for(let counter = 0; counter < gifts.length; counter ++){

    const element = gifts[counter]

    if(!newArray.includes(element)){
      newArray.push(element)
    } else {
      return numberRepeat = element
    }
    
  }

  return numberRepeat
}


const giftIds = [2, 1, 3, 5, 3, 2]
console.log(findFirstRepeated(giftIds))

const giftIds2 = [1, 2, 3, 4]
console.log(findFirstRepeated(giftIds2))

const giftIds3 = [5, 1, 5, 1]
console.log(findFirstRepeated(giftIds3))