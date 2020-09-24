var startPage = document.getElementById("start");
var startButton = document.getElementById("start-btn")

// for the questions 

var qPage = document.getElementById("question-pg");
var question = document.getElementById("question");
var buttonA = document.getElementById("optionA");
var buttonB = document.getElementById("optionB");
var buttonC = document.getElementById("optionC");
var buttonD = document.getElementById("optionD");

// to enter name for high score

var scorePage = document.getElementById("scorePage");
var score = document.getElementById("score");
var userName = document.getElementById("userName");
var nameSubmitButton = document.getElementById("nameSubmitButton");

//highscore

var highScorePage = document.getElementById("highScorePage");
var scoreList = document.getElementById("scoreList");
var goBack = document.getElementById("goBack");
var clearScore = document.getElementById("clearScore");


var viewHighScore = document.getElementById("viewHighScore");
var timerDisplay = document.getElementById("timerDisplay");
var answerFlag = document.getElementById("answerFlag");

var totalSecondsAllowed = 45;
var secondsLeft;
var timerHandle;
var scoreCounter = 0;
var currentIndex = 0;

var questionText = [
    
    {question: "What was Ariana Grande's third studio album titled?",

    A:"Dangerous Woman", 
    B:"Yours Truly", 
    C:"Sweetener", 
    D:"Thank U, Next", 
    correct: "A"
},

    {question:"What year was Ariana Grande born?",

    A:"1994",
    B:"1990",
    C:"1996",
    D:"1993", 
    correct: "D"
},

    {question: "What is Ariana Grande's net worth?",

    A:"75 million", 
    B:"100 million", 
    C:"68 million", 
    D:"20 million", 
    correct: "B"
},

    {question: "Finish the lyric.  Look at my _____, look at my _____. Ain't got enough money to pay me respect.",

     A:"neck, check",
     B:"neck, jet", 
     C:"jet,check", 
     D:"net, jet", 
     correct: "B"
    }
];


// set hidden pages to not display
qPage.style.display = "none";
scorePage.style.display = "none";
highScorePage.style.display = "none";

// timer functions
function setSecondsLeft(seconds) {
    secondsLeft = seconds;
    timerDisplay.textContent = secondsLeft;
}

function startTimer() {
    setSecondsLeft(totalSecondsAllowed);
    timerHandle = setInterval(function() {
        setSecondsLeft(secondsLeft-1);
        if (secondsLeft < 0) {
            timerDisplay.textContent = "0";
            clearInterval(timerHandle);
            alert("Thank U, Next!");
            finishQuiz();
        }
    }, 1000);
}

// start the quiz
function startQuiz(){
    promptQuestion();
    startTimer();
    startPage.style.display = "none";
}

function promptQuestion(){
    qPage.style.display = "block";
    var currentQ = questionText[currentIndex];
    question.textContent = currentQ.question;
    buttonA.textContent = currentQ.A;
    buttonB.textContent = currentQ.B;
    buttonC.textContent = currentQ.C;
    buttonD.textContent = currentQ.D;
}

// check answers 
function answerOnClick(answerId) {
    return function(event){
        if (questionText[currentIndex].correct === answerId) {
            scoreCounter = scoreCounter + 10;
            alert("Yas Queen, you got it!");
    
        } else {
            setSecondsLeft(secondsLeft - 10);
            alert("Sorry Queen, you're wrong.");
            
        }
        currentIndex++;
        if (currentIndex < questionText.length) {
            promptQuestion();
        } else {
            finishQuiz();
        }
    }
}


// end quiz 
function finishQuiz() {
    clearInterval(timerHandle);
    timerDisplay.textContent = "0";
    answerFlag.textContent = " ";
    showScore();
}

// display the score for the user
function showScore(){
    qPage.style.display = "none";
    scorePage.style.display = "block";
    score.textContent = scoreCounter;
}

// put name on leaderboard
function storeName(event){
    event.preventDefault();
    var nameInput = userName.value
    if (nameInput !== ""){
        var nameScore = nameInput + " - " + scoreCounter;
        localStorage.setItem("name-score", nameScore);
        userName.value = "";
        showHighScores();
    } else {
        alert("Please enter your name")
    }
}

// high score page 
function showHighScores(){
    scorePage.style.display = "none";
    highScorePage.style.display = "block";
    nameScore = localStorage.getItem("name-score");
    var listEl = document.createElement("p");
    listEl.textContent = nameScore;
    scoreList.appendChild(listEl);

}

// return 
function goBackPage(){
    qPage.style.display = "none";
    scorePage.style.display = "none";
    highScorePage.style.display = "none";
    startPage.style.display = "block";
    answerFlag.textContent = " ";
    setSecondsLeft(0);
    scoreCounter = 0;
    currentIndex = 0;
}

// clear the high score list 
function clearScores(){
    scoreList.textContent = "";
}

// high scores list 
function viewScores(){
    startPage.style.display = "none";
    qPage.style.display = "none";
    scorePage.style.display = "none";
    highScorePage.style.display = "block";
    clearInterval(timerHandle);
    setSecondsLeft(0);
}


// event listeners 
startButton.addEventListener("click", startQuiz);
buttonA.addEventListener("click", answerOnClick("A"));
buttonB.addEventListener("click", answerOnClick("B"));
buttonC.addEventListener("click", answerOnClick("C"));
buttonD.addEventListener("click", answerOnClick("D"));
nameSubmitButton.addEventListener("click", storeName);
goBack.addEventListener("click", goBackPage);
clearScore.addEventListener("click", clearScores);
viewHighScore.addEventListener("click", viewScores);