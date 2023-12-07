/*In Santa's workshop, a mischievous elf has been playing around with the gift production line, adding or removing an unplanned step.
You have the original sequence of original manufacturing steps and the modified modified sequence that may include an extra step or be missing a step.
Your task is to write a function that identifies and returns the first extra step that was added or removed in the manufacturing chain. If there is no difference between the sequences, return an empty string. 
Please, keep in mind:

There will always be one different step or none.
The modification can occur anywhere in the string.
The original steps could be empty
*/
function findNaughtyStep(original, modified) {
  let unplannedStep = ''

  let firstWordToGo = original
  let secondToWord = modified

  if(original.length < modified.length){
    firstWordToGo = modified
    secondToWord = original
  }
  
  let counter = 0
  while( counter < firstWordToGo.length || counter < secondToWord.length){
    let letterOriginal = firstWordToGo[counter]
    let letterModified = secondToWord[counter]

    if(letterOriginal != letterModified){
      unplannedStep = letterOriginal
      break
    }
    counter ++
  }

  return unplannedStep
}
  
  
const original = 'abcd'
const modified = 'abcde'
console.log(findNaughtyStep(original, modified)) // 'e' 

const original2 = 'stepfor'
const modified2 = 'stepor'
console.log(findNaughtyStep(original2, modified2))// 'f' 

const original3 = 'abcde'
const modified3 = 'abcde'
console.log(findNaughtyStep(original3, modified3)) // ''
  