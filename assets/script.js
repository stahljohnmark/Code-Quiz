const quizContainer = document.getElementById('quiz');
const resultsContainer = document.getElementById('results');
const submitButton = document.getElementById('submit')

function buildQuiz(){}

function showResults(){}

// display quiz
buildQuiz();

// on submit, show results
submitButton.addEventListener('click', showResults)

const myQuestions = [
    {
    question: "What is 2+2?",
    answers: {
        a: "3",
        b: "4",
        c: "5"
    },
    correctAnswer: "b"
},
{
    question: "What is the best planet to live on?",
    answers: {
        a: "Mars",
        b: "Venus",
        C: "Earth"
    }
    correctAnswer: "c"
  }
];
