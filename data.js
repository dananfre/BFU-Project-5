function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

const jokesQAndA = [
    {
        id: 1,
        q: "Why don't programmers like nature?",
        a: "It has too many bugs."
    },
    {
        id: 2,
        q: "Why did the CSS developer go to therapy?",
        a: "To get rid of his margins."
    },
    {
        id: 3,
        q: "How do you comfort a JavaScript developer?",
        a: "You console them."
    },
    {
        id: 4,
        q: "Why did the CSS developer leave the restaurant?",
        a: "Because it had no class."
    },
    {
        id: 5,
        q: "Why did the JavaScript developer go missing?",
        a: "Because he didn't know when to return."
    },
    {
        id: 6,
        q: "Why did the HTML tag go to the party?",
        a: "Because it wanted to break the line."
    },
    {
        id: 7,
        q: "Why do JavaScript developers wear glasses?",
        a: "Because they don't C#."
    },
    {
        id: 8,
        q: "Why don't programmers like to use inline styles?",
        a: "Because they want to be classy."
    },
    {
        id: 9,
        q: "Why did the CSS selector break up with the HTML element?",
        a: "It found someone more specific."
    },
    {
        id: 10,
        q: "Why did the CSS developer apply for a job?",
        a: "They wanted to get a position."
    }
  ]

function addJoke(question, answer) {
    jokesQAndA.push({
        id: jokesQAndA.length + 1,
        q: question,
        a: answer
    });
}

export { getRandomInt, jokesQAndA, addJoke } 