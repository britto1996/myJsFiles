let sayHello = function(user){
    console.log(`welcome back ${user}`)
}

sayHello('rakul')

let fullNameMaker = function(firstName, lastName){
        console.log(`hello ${firstName} ${lastName}`)
}

fullNameMaker('Britto', 'Thomas')

let adder = function(num1, num2){
    let sum = num1 + num2
    console.log(sum)
    return sum
}

// adder(50, 50)

let multiplier = function(num1, num2){
    let mul = num1 * num2
    console.log(mul)
    return mul
}

multiplier(5, 5)

let guestUser = function(name = 'uname', courseCount = 0){
        let result = `hello ${name} your course count is : ${courseCount} `
        console.log(result)
        return result
}

guestUser('britto', 3)