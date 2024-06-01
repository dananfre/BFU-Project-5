import { getRandomInt, jokesQAndA } from './data.js'

function randomJoke(){
    let randomizedJoke1 = getRandomInt((jokesQAndA.length) -1)
    return 'Joke #' +(jokesQAndA[randomizedJoke1].id) + '\n' + 'Question: ' +(jokesQAndA[randomizedJoke1].q) + 
    '\n' + 'Answer: ' + (jokesQAndA[randomizedJoke1].a) 
}

console.log('\n' + '############################' + '\n')
console.log('Welcome to the joke factory!' + '\n')
console.log('Let me tell you something about programming:' + '\n')
console.log(randomJoke() + '\n') 
console.log('############################' + '\n')


import readline from 'node:readline/promises'

const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout
});

const answer = await rl.question('Do you want another joke? (Y/N)')

if (answer === 'y' || answer === 'Y') {
    let input = await rl.question('How many jokes do you want?')
    input = Number(input)
    while(isNaN(input)) {
        console.log('Please write a number, try again...')
        input = await rl.question('How many jokes do you want?')
        input = Number(input)
        } 
        for (let i=0; i < input; i++) {
            console.log('\n' +randomJoke() + '\n')
        }
    rl.close()
    } else 
        console.log('\n' + 'Ok... suit yourself then...' +  '\n')
        rl.close() 
