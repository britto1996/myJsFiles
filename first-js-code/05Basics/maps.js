var freelancer1 = {
    name: 'Britto',
    experience: 'Beginner',
    age: 23,
}

var freelancer2 = {
    name: 'Seban',
    experience: 'Beginner',
    age: 23
}

let users = new Map()

console.log(typeof(users))

users.set('freelancer1', freelancer1)
users.set('freelancer2', freelancer2)

console.log(users.size)

console.log(users.get('freelancer1'))

console.log(users.keys())

console.log(users.values())

for (const [key, value] of users.entries()){
    console.log(key + '=' + value.name)
}

users.forEach((value, key)=>console.log(key + '=' + value.name))

var arrOfArray = [['one' , '1'],['two' , '2'],['three' , '3']]
var newMap = new Map(arrOfArray)

console.log(newMap)