/*Watson likes to challenge Sherlock's math ability. He will provide a starting 
and ending value that describe a range of integers, inclusive of the endpoints. 
Sherlock must determine the number of square integers within that range. */

let a = 3
let b = 9

function squares(a, b) {
    
  let numSquareA = Math.floor(Math.sqrt(a))
  let numSquareB = Math.floor(Math.sqrt(b))
  let counterNumbersSquare = 0

  for(let counter = numSquareA; counter <= numSquareB; counter++){

    if(counter * counter >= a && counter * counter <= b){
    counterNumbersSquare ++
    }
  }
  return counterNumbersSquare
}

console.log(squares(a, b))