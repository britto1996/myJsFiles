// const myElement = document.querySelectorAll('.header1')
// console.log(myElement)

// const myElements = document.querySelector('h1')
// console.log(myElements)
// myElements.textContent = 'Everything is changed'

const myLoopElements = document.querySelectorAll('p')
// myLoopElements.textContent = 'changed everything'
// myLoopElements.forEach((p)=>h1.textContent = 'I am changed using loop in js'
// )

const myNewPara = document.createElement('p')
myNewPara.textContent = 'added new paragraph'

document.querySelector('body').appendChild(myNewPara)

document.querySelector('button').addEventListener('click',(event)=>{
    console.log('button was pressed')
    event.target.textContent = 'button clicked'
})

document.querySelector('#myForm').addEventListener('change', (event)=>{
        console.log(event.target.value)
})