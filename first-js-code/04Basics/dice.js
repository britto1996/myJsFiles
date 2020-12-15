let diceArray = ['dice1' , 'dice2' , 'dice3' , 'dice4' , 'dice5' , 'dice6']

let randomDice = function(){
    let randomNumber = Math.floor(Math.random() * 6)
    let randomDiceNumber = diceArray[randomNumber]
    console.log(diceArray)
    console.log(randomDiceNumber)
}

randomDice()