let grades= [23, 80, 96, 18, 73, 78, 60, 60, 15, 45, 15, 10, 5, 46, 87, 33, 60, 14, 71, 65, 2, 5, 97, 0]

function gradingStudents(grades) {
  
  let newGrades = []
  let counter = 0

  while(counter < grades.length){

    let grade = grades[counter]
    let gradeCopy = grades[counter]

    if(gradeCopy % 5 !== 0){

      while(gradeCopy % 5 !== 0){
          
        gradeCopy++

        if(gradeCopy % 5 === 0){
          if(gradeCopy - grade < 3 && gradeCopy > 38){
              newGrades.push(gradeCopy)
          } else {
              newGrades.push(grade)
          } 
        }
      }
    } else {
      newGrades.push(grade)
    }
    counter ++
  }

  return newGrades
}

console.log(gradingStudents(grades))