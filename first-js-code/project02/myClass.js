class User {
    constructor(firstName,lastName,age){
            this.firstName = firstName
            this.lastName = lastName
            this.age = age
    }
     getFullName = () => `${this.firstName} ${this.lastName} is my full name`

     editName = (newName) =>{
        const myName = newName.split('')
        this.firstName = myName[0]
        this.lastName = myName[1]
     } 

     
        

}

class  Teacher extends User{
        constructor(firstName,lastName,age,subject){
                super(firstName,lastName,age)
                this.subject = subject
        }
        getFullName = () => `${this.firstName} ${this.lastName} is my full name and i teach ${this.subject}`

}
const john = new Teacher('Britto','Thomas',23,'Rubics cube')
// const john = new User('Britto','Thomas',23)
console.log(john.getFullName())

// const briji = new User()
// console.log(briji)
