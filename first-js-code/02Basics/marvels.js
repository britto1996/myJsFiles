
// const superHeroes = ['ironman' , 'thor' , 'spiderman' , 'captainmarvel' , 'Ant man']

// console.log(superHeroes);
// console.log(superHeroes[0] + " " + "is a first avenger series movie")
// console.log(superHeroes[3]);
// console.log(superHeroes[superHeroes.length - 1]);


// console.log(`we have ${superHeroes.length} superheroes`)

const numbers = ['one' , 'two' , 'three' , 'four' , 'five' , 'six']
// numbers[1] = 'something'

// console.log(numbers)

let removeOne = numbers.shift()
console.log(removeOne);
console.log(numbers);

let addElement = numbers.unshift('tessa')
console.log(numbers)

let removeLastElement = numbers.pop()
console.log(numbers)

let addLastElement = numbers.push('briji')
console.log(numbers)

let positionElements = numbers.splice(2 , 3 , 'rakul')
console.log(numbers);
