const convertToRupees = (dollar) => {
    if (typeof(dollar) === 'number'){
        return dollar * 64
    }else {
        throw Error('Amount needs to be number')
    }
}
    // const myValue = convertToRupees('five')

    // console.log(myValue)

// 

try {
    const myValue = convertToRupees('five')

    console.log(myValue)
    
} catch (error) {
    console.log(error)
}

console.log('i will not run when program crashes')