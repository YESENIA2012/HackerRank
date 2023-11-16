/*Given a set of distinct integers, print the size of a maximal subset of S where the sum of any 2 numbers in S
is not evenly divisible by k. */

let k = 9;
let s = [422346306, 940894801, 696810740, 862741861, 85835055, 313720373];

function nonDivisibleSubset(k, s) {
  let residueCount = new Array(k).fill(0);

  for (let element of s) {
    let residue = element % k;
    residueCount[residue]++;
  }

  let maxSubsetSize = residueCount[0] > 0 ? 1 : 0;

  for (let i = 1; i <= Math.floor(k / 2); i++) {
    if (i !== k - i) {
      maxSubsetSize += Math.max(residueCount[i], residueCount[k - i]);
    } else if (residueCount[i] > 0) {
      maxSubsetSize++;
    }
  }

  return maxSubsetSize;
}

console.log(nonDivisibleSubset(k, s));
