var startButton = document.querySelector('.start');
var seconds;
var timerSecs = 75;
var questArrayIndex = 0;
var questionsEl = document.querySelector("#questionsbox");
var timerEl = document.querySelector("#time");
var choicesEl = document.querySelector("#choices");
var submitBtn = document.querySelector("#submit");
var initialsEl = document.querySelector("#initials");
var feedbackEl = document.querySelector("#feedback");


var theArray = [
    {
    question:"Commonly used data types DO NOT include:",
    choices: ["strings", "booleans", "alerts", 'numbers'],
    answer: "alerts"
    },
    {
        question:"The condition in an if statement is enclosed within ____.",
        choices: ["quotes", 'curly brackets', "parenthese", 'square brackets'],
        answer: "parenthese"
    },
    {
        question: "Arrays in JavaScript can be used to store _____.",
        choices: ["numbers and strings", "other arrays", 'booleans', 'all of the above'],
        answer: 'all of the above'
    },
    {
        question:"A very useful tool used during development and debugging for printing content to the console is:",
        choices:["JavaScript", 'terminal/bash', "for loops", 'console.log'],
        answer: 'console.log'
    }
]

function startQuiz() {
    var startScreenEl = document.querySelector("#card-container");
    startScreenEl.setAttribute("class", "hide");
    questionsEl.removeAttribute("class");
    seconds= setInterval(timerStart, 1000);
    timerEl.textContent = timerSecs;
    populateQuiz();
}

function populateQuiz() {
    var currentQuestion = theArray [questArrayIndex];
    var titleEl = document.querySelector("#question-title");
    titleEl.textContent = currentQuestion.question;
    choicesEl.innerHTML ="";
    for (var i = 0; i < currentQuestion.choices.length; i++ ){
        var choice = currentQuestion.choices[i];
        var choiceBtn = document.createElement("button");
        choiceBtn.setAttribute("class", "choice");
        choiceBtn.setAttribute("value", choice);
        choiceBtn.textContent = i + 1 + ". " + choice;
        choicesEl.appendChild(choiceBtn);
    }
}

function checkAns (event) {
    var buttonEl= event.target;
    if (!buttonEl.matches(".choice")) {
        return;
    }
    if (buttonEl.value !== theArray[questArrayIndex].answer) {
        timerSecs -= 10;
        if (timerSecs < 0) {
            timerSecs = 0;
        }
        timerEl.textContent = timerSecs;
        feedbackEl.textContent = "Wrong!";
    }
    else {
        feedbackEl.textContent = "Correct!";
    }
    feedbackEl.setAttribute("class", "feedback");
    setTimeout(function(){
        feedbackEl.setAttribute("class", "feedback hide");
    }, 2000)
    questArrayIndex ++;
    if (timerSecs <= 0 || questArrayIndex === theArray.length){
        endQuiz();
    } else {
        populateQuiz();
    }
}
// endQuiz function
// function to save highScore
// eventListeners for submit button, start quiz button, choices button
// highscores.html page, javascript page
function timerStart(){
        timerSecs--;
        timerEl.textContent = timerSecs;

        if(timerSecs <= 0) {
          endQuiz();
        }
}

var saveData = document.querySelector()

startButton.addEventListener("click", .start);
//checkAns
choicesEl.addEventListener('click', checkAns);
submitBtn.addEventListener('click', savehighscore);