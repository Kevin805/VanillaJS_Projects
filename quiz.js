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
        
    }, {
        question: 'Question 6: What does He stand for on the periodic table?',
        a: 'Niobium',
        b: 'Hafnium',
        c: 'Hydrogen',
        d: 'Helium',
        correct: 'd',
        
    }, {
        question: 'Question 7: What is the largest country in the world?',
        a: 'China',
        b: 'Russia',
        c: 'Australia',
        d: 'India',
        correct: 'b',
        
    }, {
        question: 'Question 8: Which planet is closest to the sun?',
        a: 'Mercury',
        b: 'Venus',
        c: 'Mars',
        d: 'Eath',
        correct: 'a',
        
    }, {
        question: 'Question 9: What year was Heinz established?',
        a: '1869',
        b: '1925',
        c: '1910',
        d: '1850',
        correct: 'a',
        
    }, {
        question: 'Question 10: What is the capital of Iceland?',
        a: 'Árborg',
        b: 'Mosfellsbær',
        c: 'Kópavogur',
        d: 'Reykjavík',
        correct: 'd',
        
    }, {
        question: 'Question 11: Typically, what\'s the strongest muscle in the human body?',
        a: 'Bicep',
        b: 'tounge',
        c: 'jaw muscle',
        d: 'gluteus maximus',
        correct: 'c',
        
    }, {
        question: 'Question 12: In Harry Potter, what is the name of The Weasley\'s house?',
        a: 'The Cottage',
        b: 'The Burrow',
        c: 'MeadowBrook',
        d: 'The Farm',
        correct: 'b',
        
    }, {
        question: 'Question 13: What\'s a baby rabbit called?',
        a: 'A kit',
        b: 'Hare',
        c: 'Bunny',
        d: 'Rabby',
        correct: 'a',
        
    }, {
        question: 'Question 14: What fruit takes the scientific name Mangifera indica?',
        a: 'Grapefruit',
        b: 'Dragonfruit',
        c: 'Mango',
        d: 'Mandarin Orange',
        correct: 'c',
        
    }, {
        question: 'Question 15: Which city had the first ever fashion week?',
        a: 'Paris',
        b: 'New York',
        c: 'Turin',
        d: 'Rome',
        correct: 'b',
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

function loadQuiz() {
    deselectAnswers();

    const currentQuizData = quizData[currentQuiz];

    questionEl.innerText = currentQuizData.question;
    a_text.innerText = currentQuizData.a;
    b_text.innerText = currentQuizData.b;
    c_text.innerText = currentQuizData.c;
    d_text.innerText = currentQuizData.d;
}

function getSelected() {
    let answer = undefined;

    answerEls.forEach((answerEl) => {
        if (answerEl.checked) {
            answer = answerEl.id;
        }
    });

    return answer;
}

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