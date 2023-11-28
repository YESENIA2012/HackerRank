const c = [0, 1, 0, 0, 0, 1, 0]
/* const c = [0, 0, 1, 0, 0, 1, 0] */
/* const c = [0,0,0,0,1,0] // da */
/* const c = [0, 0, 0, 1, 0, 0] */
/* const c = [0, 0] */

function jumpingOnClouds(c) {
  let numberJumps = 0
  let arrayCantJumps = []

  for(let cloud = 2; cloud > 0; cloud--){  
    for(let counter = 0; counter < c.length; counter){
      let nextCloud = c[counter]

      if(cloud == 2){
        if(c[counter + cloud] == 1){
          nextCloud = c[counter + 1]
          counter = counter + 1
        } else {
          nextCloud = c[counter + cloud]
          counter = counter + cloud
        }
        if(counter == c.length && c.length % 2 == 0){
          if(c[c.length - 1] == 0){
            numberJumps ++
          }
        }
      } else {
        if(c[counter + cloud] == 1){
          nextCloud = c[counter + 2]
          counter = counter + 2
        } else {
          nextCloud = c[counter + cloud]
          counter = counter + cloud
        }
      }

      if(nextCloud == 0){
        numberJumps++
      }   
    }
    arrayCantJumps.push(numberJumps)
    numberJumps = 0
    counter = 0
  }
  return Math.min(...arrayCantJumps)
}

console.log(jumpingOnClouds(c)) 