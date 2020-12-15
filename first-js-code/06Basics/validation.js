// function myValidation(){
//     let myValue = document.getElementById('myForm').value
    // document.querySelector('body').textContent = myValue
//     console.log(myValue)

//     let nextValue = document.getElementById('header1')
//     console.log(nextValue)

//     if(isNaN(myValue) || myValue < 1 || myValue > 5){
//            nextValue.textContent = 'too leangthy'
//     }else {
//            nextValue.textContent = 'valid input'
//     }
// }

document.querySelector('.myform').addEventListener('submit', (event)=>{
        event.preventDefault()
        console.log(event)
        console.log(event.target.userName.value)
        event.target.userName.value = ''
        
        let password = event.target.password.value
        console.log(password)

        let confirmPassword = event.target.confirmPassword.value
        console.log(confirmPassword)

        if(password == confirmPassword){
            console.log('valid user')
        }else{
            console.log('invalid user')
        }

})