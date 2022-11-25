/*There is a sequence of words in CamelCase as a string of letters,s , having the following properties:
It is a concatenation of one or more words consisting of English letters.
All letters in the first word are lowercase.
For each of the subsequent words, the first letter is uppercase and rest of the letters are lowercase.
 */

let s = "saveChangesInTheEditor";

function camelcase(s) {
  let regex = /[A-Z]/g;
  let arrayCapitalLetter = s.match(regex);

  if (arrayCapitalLetter == null) {
    return 1;
  } else {
    return s.match(regex).length + 1;
  }
}

console.log(camelcase(s));
