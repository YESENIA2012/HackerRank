/* remove 0, null, undefined and false values from the array */

const array = [1,2,undefined,3,false,4,0,5,null]
const result = cleanUpValues(array)

function cleanUpValues(array) {
     const newArray = array.filter((element) => Boolean(element) != false)
    return newArray
}

console.log(result)