// let studentScore = function (score) {
//   if (score <= 100 && score >= 90) {
//     console.log(`grade is : A+`);
//   } else if (score <= 90 && score >= 80) {
//     console.log(`grade is : A`);
//   } else if (score <= 80 && score >= 70) {
//     console.log(`grade is : B+`);
//   } else if (score <= 70 && score >= 60) {
//     console.log(`grade is : B`);
//   } else if (score <= 60 && score >= 50) {
//     console.log(`grade is : C+`);
//   } else if (score <= 45 && score >= 40) {
//     console.log(`grade is : F ->failed`);
  
// }
//     return score
// }

// studentScore(45)

let myGrade = function(currentMarks, totalMarks){
    let percentage = (currentMarks/totalMarks) * 100
    // console.log(percentage)
    if(percentage <= 100 && percentage >= 90){
        console.log(`student percentage is ${percentage}% and outstanding performance`)
        
    }else if(percentage <= 90 && percentage >= 80){
        console.log(`student percentage is ${percentage}% and well performance`)
        
    }
    return percentage
    
}

myGrade(92 , 100)
