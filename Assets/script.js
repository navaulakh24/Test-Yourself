var startButton = document.querySelector('.start');
var seconds;
var timerSecs = 75;
var userScore;
var displayTimer = 1;


theArray = [
    qOne = ["Commonly used data types DO NOT include:", "strings", "booleans", "alerts", 'numbers'],
    qTwo = ["The condition in an if/else statement is enclosed within ____.", "quotes", 'curly brackets', "parenthese", 'square brackets'],
    qThree = ["Arrays in JavaScript can be used to store _____.", "numbers and strings", "other arrays", 'booleans', 'all of the above'],
    qFour = ["A very useful tool used during development and debugging for printing content to the debugger is:", "JavaScript", 'terminal/bash', "for loops", 'console.log']
]

var questArray = [theArray[0][0], theArray[1][0], theArray[2][0], theArray[3][0], theArray[4][0]];
var questArrayIndex = 0;
var correctAns = document.getElementById("correctans");
var wrongAns = document.getElementById("wrongans");
var viewHighScores = document.querySelector('.highscores');

function populateQuiz() {

}

function checkAns () {

}

function nextQuest() {

}

function startQuiz() {
    time(10);
    question;
    populateQuiz();
    timerStart();
}

function timerStart(){
    seconds = setInterval(function() {
        secondsLeft--;
        countdown.textContent = secondsLeft;

        if(secondsLeft === 0 || secondsLeft < 1) {
            clearInterval(seconds);
            alert("Time ran out! Game over.");
            lastQuestion();
        }
    }, 1000)
}

function rightAns() {
    correctAnswer.innerText = "Correct";
    nextQustion();
}

function wrongAns() {
    wrongAnswer.innerText = "Wrong";
    nextQustion();
    timerSecs -= 10;
}

function finalQuestion() {

}

var saveData = document.querySelector()

startButton.addEventListener("click", startQuiz);