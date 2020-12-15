let myTodos = ['watch movie' , 'making projects' , 'company works' , 'mailing']

const newTodos = [{
    title: 'watch korean movie',
    isDone: true
} , {
    title: 'go to gym',
    isDone: true
} , {
    title: 'meetings',
    isDone: false
}]

// const index = newTodos.findIndex(function(todo, index){

//     return todo.title === 'go to gym'
// })
// console.log(index)

// const findTodo = function(myTodos, title){
//     console.log(myTodos)
//     console.log(title)
//     const index = myTodos.findIndex(function(todo, index){
//         return todo.title.toLowerCase() === title.toLowerCase()
//     })

//     return myTodos[index]
// }

// let printMe = findTodo(newTodos, 'go to gym')
// console.log(printMe)

const findTodo = function(myTodos, title){
        const titleReturned = myTodos.find(function(todo, index){
            return todo.title.toLowerCase() === title.toLowerCase()
        })
        return titleReturned
}

let printMe = findTodo(newTodos, 'go to gym')
console.log(printMe)
