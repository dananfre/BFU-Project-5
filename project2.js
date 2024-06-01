import { getRandomInt, jokesQAndA } from './data.js'

let randomizedJoke1 = getRandomInt((jokesQAndA.length) -1)
let randomizedJoke2 = getRandomInt((jokesQAndA.length) -1)

function randomJoke(){
    return 'Joke #' +(jokesQAndA[randomizedJoke1].id) + '\n' + 'Question: ' +(jokesQAndA[randomizedJoke1].q) + 
    '\n' + 'Answer: ' + (jokesQAndA[randomizedJoke1].a) 
}

console.log('\n' + '############################' + '\n')
console.log('Welcome to the joke factory!' + '\n')
console.log('Let me tell you something about programming:' + '\n')
console.log(randomJoke() + '\n') 
console.log('############################' + '\n')




