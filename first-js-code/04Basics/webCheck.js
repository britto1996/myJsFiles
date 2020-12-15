let userEmail = 'btm1996@gmail.com'
let password = '1234'

let userChecker = function(myString){
        console.log(myString)
        if(myString.includes('@gmail.com') && myString.length > 6){
            return true
        } else {
            return false
        }
}

let passChecker = function(pass){
    console.log(pass)
    if(pass.length > 8){
        return true
    }else {
        return false
    }
}

console.log(userChecker(userEmail))

console.log(passChecker(password))