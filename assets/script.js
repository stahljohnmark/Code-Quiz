const quizContainer = document.getElementById('quiz');
const resultsContainer = document.getElementById('results');
const submitButton = document.getElementById('submit')

function buildQuiz(){
// variable to store HTML
const output = [];

// each question 
myQuestions.forEach(
    (currentQuestion, questionNumber) => { 
    
// variable to store the list of possible answers
    const answers = [];

for(letter in currentQuestion.answers){

  answers.push(
   `<label>
    <input type="radio" name="question${questionNumber}" value="${letter}">
    ${letter} :
    ${currentQuestion.answers[letter]}
   </label>`
  );
}

// add this question and its answers to the output
output.push(
    `<div class="question"> ${currentQuestion.question} </div>
    <div class="answers"> ${answers.join('')} </div>`
  );
 }
);

// combine HTML
quizContainer.innerHTML = output.join('');
}

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
    },
    correctAnswer: "c"
  }
];
