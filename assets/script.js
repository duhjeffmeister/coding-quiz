// Declare alll variables to be used
var score = "Score " + 0;
var startBtnEl = document.querySelector("#start");
var timerBtnEl = document.querySelector("#timer");
var answerBtnsEl = document.querySelector(".answer-text");
var timerSeconds = 60;
var remainingTime = 0;
var score = 0;
var initialBtnEl = document.querySelector("#initials-btn");
var quizTimer = undefined;
var currentIndex = 0;
var hideHeader = document.querySelector("#hideHeader")
var hideUl = document.querySelector("#hideUl")
var hideUl2 = document.querySelector("#hideUl2")
var headerChic = document.querySelector("#hideHeaderChic")
var gameScore1 = document.querySelector("#gameScore1")
    gameScore1.textContent ="Score " + 0; 
var questionEl = document.querySelector("#questions-to-ask");
var answerOneButtonEl = document.querySelector("#answer-one");
var answerTwoButtonEl = document.querySelector("#answer-two");
var answerThreeButtonEl = document.querySelector("#answer-three");
var answerFourButtonEl = document.querySelector("#answer-four");
var alert = document.querySelector("#alert");
var highscore = document.querySelector("#highscore")
var score = "Score " + 0;
var initialsInput = document.querySelector(".score-section")
var gameScore = document.querySelector(".game-score")

// Questions
var questionAnswersObj = [{
    question: "Which of the following keywords is used to define a variable in Javascript?",
    answer: ["var", "let", "var and let", "None of these"],
    correctAnswer: "var and let",
}, 
{ 
    question: "Which method returns the character at the specified index?",
    answer: ["charAt()", "getCharAt()", "characterAt()", "None of these"],
    correctAnswer: "charAt()",
},
{ 
    question: "What type of language is Javascript?",
    answer:["Object-Based", "Object-Oriented", "Procedural", "Coffee"],
    correctAnswer: "Object-Oriented"
},
{ 
    question: "Which one of these contain an executable statement?",
    answer:["// var x = 0; // var y = 0;", "/* var x = 0; // var y = 0; */", "// var x = 0; /* var y = 0; */", "/* var x = 0; */ var y = 0;"],
    correctAnswer: "/* var x = 0; */ var y = 0;"
},
{ 
    question: "Which of the following methods is used to access HTML elements using Javascript?",
    answer:["getElementByID()", "getElementsByClassName", "Both of these", "None of these"],
    correctAnswer: "Both of these"
}];

// Initializes everything
function loadPage(){

currentIndex = 0;
score = 0;
remainingTime = timerSeconds;
document.getElementById("score-section").style.display="none";
document.getElementById("question-section").style.display="block";
document.getElementById("answer-section").style.display="block";
document.getElementById("timer").style.display="block";
document.getElementById("initials-input").value = "";
document.querySelector("#timer").innerHTML = remainingTime;
quizTimer = setInterval(timerHandler, 1000);
hideHeader.hidden = false;
hideUl.hidden = true;
hideUl2.hidden = true;
startBtnEl.hidden = false;
evenRow.hidden = true;



};

var hideUl2 = document.querySelector("#hideUl2")

// Starts presenting questions
startBtnEl.addEventListener("click", function() {
if(startBtnEl){
hideHeader.hidden = true;


setQandA();
 }
});

// Starts Quiz
function startQuiz(){


currentIndex = 0;
score = 0;
remainingTime = timerSeconds;
document.getElementById("score-section").style.display="none";
document.getElementById("question-section").style.display="block";
document.getElementById("answer-section").style.display="block";
document.getElementById("timer").style.display="block";
document.getElementById("initials-input").value = "";
document.querySelector("#timer").innerHTML = remainingTime;
quizTimer = setInterval(timerHandler, 1000);
hideHeader.hidden = true;
hideUl.hidden = false;
hideUl2.hidden = false;
startBtnEl.hidden = true;
evenRow.hidden = false;

setQandA()

};

// High Score elements
function highScore(){
gameScore.hidden = true
score.hidden = true;
document.getElementById("timer").style.display="none";
initialsInput.Hidden = true;
hideHeader.hidden = true;
hideUl.hidden = true;
hideUl2.hidden = true;
startBtnEl.hidden = true;
evenRow.hidden = false;
document.getElementById("answer-section").style.display="none";
startBtnEl.hidden = false;
startBtnEl.textContent = "Restart";
highscore.textContent =  "High Score':'" + "|" + localStorage.getItem(score, initials) + " " + score;

saveScore()
};

loadPage()

// Fills in the text content based upon which question you are in
function setQandA(){
answerOneButtonEl.textContent= questionAnswersObj[currentIndex].answer[0];
answerTwoButtonEl.textContent= questionAnswersObj[currentIndex]. answer [1];
answerThreeButtonEl.textContent= questionAnswersObj[currentIndex].answer [2];
answerFourButtonEl.textContent= questionAnswersObj[currentIndex].answer [3];
questionEl.textContent= questionAnswersObj[currentIndex].question;

};

// Funtion that checks answer
function checkAnswer(selectedAnswer){
var correctAnswer = questionAnswersObj[currentIndex].correctAnswer;

// Check answer and increment score
if(selectedAnswer === correctAnswer){
    alert.textContent= "Correct";
    score += 10;
    gameScore1.textContent = "Score " + score; 
} else {
    alert.textContent= "Incorrect";
    remainingTime -= 5;
};

// Increment question or finish
if(currentIndex === questionAnswersObj.length-1){
    alert.textContent = "Your final score is " + score;
    finishQuiz();
} else {
    currentIndex++;
    setQandA();
};
};

// Ending "slide" of quiz
function finishQuiz(){
clearInterval(quizTimer);
document.getElementById("score-section").style.display="block";
document.getElementById("question-section").style.display="none";
document.getElementById("answer-section").style.display="none";
document.getElementById("timer").style.display="none";
localStorage.getItem(score, initials);
};

//Function for saving scores
function saveScore(){
highscore.textContent =  "High Score " + localStorage.getItem(score, initials) + " " + score;
var initials = document.getElementById("initials-input").value;

localStorage.setItem(score, initials);

console.log('saveScore()')
clearInterval(quizTimer);

loadPage();
};

// Timer function
var timerHandler = function() {
if (remainingTime > 0) {
    remainingTime -= 1;
    document.querySelector("#timer").innerHTML = remainingTime;
} else {
    clearInterval(quizTimer);
    alert("You've ran out of time!");
    finishQuiz();
}
};

// Event Listeners
startBtnEl.addEventListener("click", startQuiz);
answerOneButtonEl.addEventListener("click", function(){
checkAnswer(answerOneButtonEl.textContent);
});
answerTwoButtonEl.addEventListener("click", function(){
checkAnswer(answerTwoButtonEl.textContent);
});
answerThreeButtonEl.addEventListener("click", function(){
checkAnswer(answerThreeButtonEl.textContent);
});
answerFourButtonEl.addEventListener("click", function(){
checkAnswer(answerFourButtonEl.textContent);
});
initialBtnEl.addEventListener("click", saveScore);
highscore.addEventListener("click", highScore)