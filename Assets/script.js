var startButton = document.querySelector('.start');
var seconds;
var userScore;
var displayTimer = 1;


theArray = [
    qOne = ["Commonly used data types DO NOT include:", "strings", "booleans", "alerts", 'numbers'],
    qTwo = ["The condition in an if/else statement is enclosed within ____.", "quotes", 'curly brackets', "parenthese", 'square brackets'],
    qThree = ["Arrays in JavaScript can be used to store _____.", "numbers and strings", "other arrays", 'booleans', 'all of the above'],
    qFour = ["A very useful tool used during development and debugging for printing content to the debugger is:", "JavaScript", 'terminal/bash', "for loops", 'console.log']
]



function startQuiz() {
    time(10);
    question
}

function time(secondsLeft){
    let timerInterval = setInterval(function() {
        secondsLeft--;
        timeEl.textContent = secondsLeft + " seconds left.";

        if(secondsLeft === 0) {
            clearInterval(timerInterval);
            sendMessage();
        }
    }, 1000)
}



startButton.addEventListener("click", startQuiz);