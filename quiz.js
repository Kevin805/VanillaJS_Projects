// https://www.uidesigndaily.com/posts/sketch-questionnaire-choice-submit-day-924

const quizData = [
    {
        question: 'Question 1: How old is The Eiffel\'s Tower?',
        a: '1889',
        b: '1775',
        c: '1910',
        d: '1815',
        correct: 'a',
        
    }, {
        question: 'Question 2: What does IPA stand for?',
        a: 'Indian Pale Ale',
        b: 'Indiana Press Ale',
        c: 'Inward Pull Alcohol',
        d: 'Isolated Poppy Ale',
        correct: 'a',
        
    }, {
        question: 'Question 3: Which rapper\'s real name is Dylan Kwabena Mills?',
        a: 'Lil Wayne',
        b: 'Dizzee Rascal',
        c: 'Meck Mills',
        d: '1815',
        correct: 'b',
        
    }, {
        question: 'Question 4: Which country is brie cheese originally from?',
        a: 'England',
        b: 'United States',
        c: 'France',
        d: 'Belgium',
        correct: 'c',
        
    }, {
        question: 'Question 5:What was the most streamed show on Netflix in 2020?',
        a: 'Too Hot to Handle',
        b: 'The Queen\'s Gambit',
        c: 'White Lines',
        d: 'The Umbrella Academy season 2',
        correct: 'b',
    },
    {
        question: 'Question 6:What is the most populated state by density?',
        a: 'New Jersey',
        b: 'California',
        c: 'New York',
        d: 'Texas',
        correct: 'a',
    },
    {
        question: 'Question 7:What is considered to be the smartest dog breed?',
        a: 'Golden Retriever',
        b: 'Australian Shepard',
        c: 'Poodle',
        d: 'Great Dane',
        correct: 'c',
    },
    {
        question: 'Question 8:What QB has the most Super Bowl rings?',
        a: 'Joe Montana',
        b: 'John Elway',
        c: 'Tom Brady',
        d: 'Steve Young',
        correct: 'c',
    },
    {
        question: 'Question 9:Where would you find the rainiest place on earth',
        a: 'Hawaii',
        b: 'New Zealand',
        c: 'China',
        d: 'Northern Ireland',
        correct: 'a',
    }
];

const quiz = document.getElementById("quiz");
const answerEls = document.querySelectorAll(".answer");
const questionEl = document.getElementById("question");
const a_text = document.getElementById("a_text");
const b_text = document.getElementById("b_text");
const c_text = document.getElementById("c_text");
const d_text = document.getElementById("d_text");
const submitBtn = document.getElementById("submit");

let currentQuiz = 0;
let score = 0;

loadQuiz();



function deselectAnswers() {
    answerEls.forEach((answerEl) => {
        answerEl.checked = false;
    });
}

submitBtn.addEventListener("click", () => {
    // check the answer
    const answer = getSelected();

    if (answer) {
        if (answer === quizData[currentQuiz].correct) {
            score++;
        }

        currentQuiz++;
        if (currentQuiz < quizData.length) {
            loadQuiz();
        } else {
            quiz.innerHTML = `
                <h2>You answered ${score}/${quizData.length} correctly!</h2>
                
                <button onclick="location.reload()">Try Again!</button>`;
        }
    }
});