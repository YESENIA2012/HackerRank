/*
In Santa's workshop, the elves have a gift list they wish to make and a limited set of materials.
Gifts are strings of text and materials are characters. Your task is to write a function that, given a list of gifts and the available materials, 
returns a list of the gifts that can be made.
A gift can be made if we have all the necessary materials to make it.
*/

function manufacture(gifts, materials) {

  let arrayWord = [ ]
    // We escape special characters in the base word to ensure they are interpreted literally
  const wordBaseRegex = materials.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&');
    // We create the regular expression with the base word and the 'g' option to find all matches
  const regex = new RegExp(`[${wordBaseRegex}]+`, 'g');

  for(let counter = 0; counter < gifts.length; counter++){
    let word = gifts[counter]

    // We check if the word to be verified contains the letters of the base word in the same order
    const result = word.match(regex);

    if(result == word){
      arrayWord.push(word)
    }

  }

  return arrayWord
}


const gifts = ['tren', 'oso', 'pelota']
const materials = 'tronesa'
console.log(manufacture(gifts, materials))

const gifts2 = ['juego', 'puzzle']
const materials2 = 'jlepuz'

manufacture(gifts2, materials2) // ["puzzle"]

const gifts3 = ['libro', 'ps5']
const materials3 = 'psli'

manufacture(gifts3, materials3) // []