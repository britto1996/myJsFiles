const student = {
    name: 'btm',
    age: 23,
    proffession: 'entreprenaur'
}

const studentObjToString = JSON.stringify(student)
console.log(typeof studentObjToString)

// localStorage.setItem('student',studentObjToString)

const toJson = JSON.parse(studentObjToString)

console.log(typeof toJson)

console.log(toJson.proffession)