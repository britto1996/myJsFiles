// const sayHello = (name) => `hi ${name}`


// let result = sayHello('BTM')
// console.log(result)

// const todos = [{
//         title: 'watching movie',
//         isDone: true
// } , {
//         title: 'coding',
//         isDone: true
// } , {
//     title: 'company works',
//     isDone: true

// }, {
//     title: 'meetings',
//     isDone: false
// }, {
//     title: 'go to gym',
//     isDone: false
// }, {
//     title: 'reading',
//     isDone: false
// }]

// const thingsDone = todos.filter((todo)=> todo.isDone === true)

// const thingsNotDone = todos.filter((todo)=>todo.isDone === false)

// console.log(thingsDone)

// console.log(thingsNotDone)

const netflix = {
    title: 'streaming service on demand',
    price: 199,
    range: 'monthly price',
    decemberFest: function(){
        return `video service amount is ${this.price} per month`
    }  
}

console.log(netflix.decemberFest())
//only use in redux
const func = () => ({key: 'value'})