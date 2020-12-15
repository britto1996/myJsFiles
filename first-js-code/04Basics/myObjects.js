let myYoutube = {
    title: 'loops in js',
    videoLength: '15',
    videoCreator: 'BTM',
    contentRating: 3,
    videoDescription: 'it is a lengthy video about loops'
}

// console.log(myYoutube)
// console.log(`new video of ${myYoutube.title} created by author ${myYoutube.videoCreator}`)


let myUdemyCourse = {
    title: 'learn rubix cube without algorithm',
    price: 'INR : 450',
    contentRating: 4
}

// console.log(`New course is added to udemy about ${myUdemyCourse.title} in 
//  festive offer price ${myUdemyCourse.price}`)

 myUdemyCourse.price = 'INR : 1200'
 console.log(myUdemyCourse)

 let changeRating = function(fuck){
    //  console.log(myObject)
    console.log(fuck.contentRating)
     return {
         
         formatOne: `rating of my youtube video is ${fuck.contentRating + 1}`,
         formatTwo: `rating of my udemy video is ${fuck.contentRating + 1}`
     }
 }

 let addOne = changeRating(myUdemyCourse)
 console.log(addOne.formatOne)