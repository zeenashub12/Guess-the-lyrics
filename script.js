
const lyrics = [
    {
        question: "Is this the real life? Is this just fantasy?",
        answer: "Caught in a landslide, no escape from reality"
    },
    {
        question: "We're no strangers to love",
        answer: "You know the rules and so do I"
    },
    {
        question: "Hello, it's me",
        answer: "I was wondering if after all these years you'd like to meet"
    },
    {
        question: "I don't wanna tiptoe but I don't wanna hide",
        answer: "But I don't wanna feed this monstrous fire"
    },
    {
        question: "How I'm I suppose to tell you",
        answer: "I don't wanna see you with anyone but me"
    },
    {
        question: "Pain, you made me a, you made me a believer, believer",
        answer: "Pain, you break me down, you build me up believer, believer"
    }
];

let currentLyric = 0;

function displayQuestion() {
    document.getElementById('question').innerText = "Guess the next lyrics: " + lyrics[currentLyric].question + ";";
    document.getElementById('answer').value = '';
    document.getElementById('result').innerText = '';
}

function checkAnswer() {
    const userAnswer = document.getElementById('answer').value.trim();
    const correctAnswer = lyrics[currentLyric].answer;

    if (userAnswer.toLowerCase() === correctAnswer.toLowerCase()) {
        document.getElementById('result').innerText = 'Correct!';
        currentLyric = (currentLyric + 1) % lyrics.length;
    } else {
        document.getElementById('result').innerText = 'Wrong! Try again.';
    }

    setTimeout(displayQuestion, 2000);
}

displayQuestion();
