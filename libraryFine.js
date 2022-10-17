/*Your local library needs your help! Given the expected and actual return dates for a library book, 
create a program that calculates the fine (if any). The fee structure is as follows: 

* If the book is returned on or before the expected return date, no fine will be charged (i.e.: fine = 0.
* If the book is returned after the expected return day but still within the same calendar month and year 
as the expected return date, fine = 15 * the number of days late 
* If the book is returned after the expected return month but still within the same calendar year as the expected return date, the
fine = 500 * the number of months late
* If the book is returned after the calendar year in which it was expected, there is a fixed fine of 10000
*/

let d1 = 9
let m1 = 6
let y1 = 2015
let d2 = 6
let m2 = 6
let y2 = 2015

function libraryFine(d1, m1, y1, d2, m2, y2) {
  let valueToPay = 0

  if(y1 < y2){
    valueToPay = 0
  } else if(y1 === y2){
    if(m1 === m2){
      if(d1 > d2){
          valueToPay = (d1 - d2) * 15
      } else {
          valueToPay = 0
      }     
    } else if(m1 > m2){
      valueToPay = (m1 - m2) * 500
    } else if (m1 < m2){
      valueToPay = 0
    }
  }  else if(y1 > y2){
    valueToPay = 10000
  }
  return valueToPay
}


console.log(libraryFine(d1, m1, y1, d2, m2, y2))