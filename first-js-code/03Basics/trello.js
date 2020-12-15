// const days = ['mon' , 'tue' , 'wed' , 'thu' , 'fri' , 'sat']

// console.log(days)


// days.forEach(function(day, index){
//     console.log(`starts with ${index+1} -- ${day}`)
// }
// )

// const months = []
// months.push('jan' , 'feb' , 'march' , 'april' , 'may' , 'june')
// months.push('july' , 'aug' , 'sep' , 'oct' , 'nov' , 'dec')

// console.log(months)

// months.forEach(function(month, index){
//         console.log(`starts with ${index+1} -- ${month}`)
// })

// console.log(`${months[months.length-1]} 25 is a x'mas weekend`)

// const todoList = ['coding' , 'assignment' , 'project ideas' , 'implementation']

// todoList.forEach(function(days, index){
//     console.log(`my day number works are: day ${index+1} is ${days}`)
// }
// )

// console.log(todoList.length)

// for (let index = todoList.length - 1; index >= 0; index--){
//     const element = todoList[index]
//     console.log(element)
// }


const todos = []
todos.push('making projects')
todos.push('watching films')
todos.push('going to gym')

// todos.forEach(function(task, index){
//     console.log(`my tasks on this day ${index+1} is ${task}`)
// })

for (let index = 0; index <= todos.length-1; index++){
        console.log(`my tasks on this day ${index+1} is ${todos[index]}`)
}