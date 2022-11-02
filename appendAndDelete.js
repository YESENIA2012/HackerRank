/*You have two strings of lowercase English letters. You can perform two 
types of operations on the first string: Append a lowercase English letter 
to the end of the string. Delete the last character of the string. Performing 
this operation on an empty string results in an empty string. */

let s = "zzzzz";
let t = "zzzzzzz";
let k = 4;

function appendAndDelete(s, t, k) {
  let counterOperatios = 0;
  let arrayS = Array.from(s);
  let arrayT = Array.from(t);
  let result = arrayT.length - arrayS.length;

  if (s == t) {
    return "Yes";
  } else {
    for (let counter = 0; counter < arrayS.length; counter++) {
      let elementS = arrayS[counter];
      let elementT = arrayT[counter];

      if (elementS != elementT) {
        arrayS[counter] = elementT;
        counterOperatios++;
      }

      if (arrayT.length > arrayS.length && result == 2) {
        arrayS.push(arrayT[arrayT.length - counter]);
        counterOperatios++;
      }
    }

    arrayS = arrayS.join("");
    arrayT = arrayT.join("");

    if (arrayS == arrayT && counterOperatios <= k && counterOperatios > 1) {
      return "Yes";
    } else {
      return "No";
    }
  }
}

console.log(appendAndDelete(s, t, k));
