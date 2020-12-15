let isVerified = true
let isLoggedIn = true
let payed = true
let isGuest = true

if (isVerified && isLoggedIn & !payed) {
    console.log('Access payed and free videos')
}
 else if(isVerified && isLoggedIn){
    console.log('Access only free videos')
}

else if (isGuest) {
    console.log('Access only sample video courses')
}

