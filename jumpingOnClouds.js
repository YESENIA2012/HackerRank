/*A child is playing a cloud hopping game. In this game, there are sequentially numbered clouds that can be thunderheads or cumulus clouds. The character must jump from cloud to cloud until it reaches the start again.

There is an array of clouds, c and an energy level e = 100. The character starts from c[0] and uses 1 unit of energy to make a jump of size k to cloud c[(i + k) % n]. If it lands on a thundercloud, c[i] = 1, its energy (e) decreases by 2 additional units. The game ends when the character lands back on cloud 0.

Given the values of n, k, and the configuration of the clouds as an array c, determine the final value of e after the game ends.

Example. c = [0, 0, 1, 0]
k = 2

The indices of the path are 0 -> 2 -> 0. The energy level reduces by 1 for each jump to 98. The character landed on one thunderhead at an additional cost of 2 energy units. The final energy level is 96.

Note: Recall that % refers to the modulo operation. In this case, it serves to make the route circular. If the character is at c[n – 1] and jumps 1, it will arrive at c[0]

Function Description

Complete the jumpingOnClouds function in the editor below.

jumpingOnClouds has the following parameter(s):

int c[n]: the cloud types along the path
int k: the length of one jump
Returns

int: the energy level remaining.*/

const c = [ 1, 1, 1, 0, 1, 1, 0, 0, 0, 0]
const k = 3 
/* const c = [0, 0, 1, 0]
const k = 2 */

function jumpingOnClouds(c, k) {
  let energy = 100
  let nextCloud = 0

  for(let counter = 0; counter < c.length; counter++ ){
    nextCloud = (nextCloud + k) % c.length
    let currentCloud = c[nextCloud]
  
    if(currentCloud == 0){
      energy = energy - 1
    } else if (currentCloud == 1){
      energy = energy - 3
    }

    if(nextCloud == 0) {
      break
    }
  }
  return energy
}

const levelEnergy = jumpingOnClouds(c, k)
console.log("levelEnergy", levelEnergy)