/*The Utopian Tree goes through 2 cycles of growth every year. 
Each spring, it doubles in height. Each summer, its height increases by 1 meter.
A Utopian Tree sapling with a height of 1 meter is planted at the onset of spring. 
How tall will the tree be after n growth cycles? */

let n = 4;

function utopianTree(n) {
  let height = 1;

  for (let counter = 1; counter <= n; counter++) {
    if (counter % 2 == 1) {
      height *= 2;
    } else {
      height += 1;
    }
  }
  return height;
}

let heightUtopianTree = utopianTree(n);

console.log("Height", heightUtopianTree);
