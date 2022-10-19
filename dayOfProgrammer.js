let year = 2100

function dayOfProgrammer(year) {
  let result = 0
  let day = 256

  if(year > 1918){
    if((year % 400) === 0 || (year % 4 === 0 && year % 100 !== 0)){
      result = day - 244
    } else {
      result = day - 243
    }
  } else if(year === 1918){
    day = day + 13
    result = day - 243
  } else {
    if((year % 4) === 0){
      result = day - 244
    } else {
      result = day - 243
    }
  }

  return `${result}.09.${year}`
}

console.log(dayOfProgrammer(year))