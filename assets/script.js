var questions = [
    
        {questions: "What was Ariana Grande's third studio album titled?",

        A:"Dangerous Woman", 
        B:"Yours Truly", 
        C:"Sweetener", 
        D:"Thank U, Next", 
        correct: "Dangerous Woman"
    },

        {questions:"What year was Ariana Grande born?",

        A:"1994",
        B:"1990",
        C:"1996",
        D:"1993", 
        correct: "1993"
    },

        {questions: "What is Ariana Grande's net worth?",

        A:"75 million", 
        B:"100 million", 
        C:"68 million", 
        D:"20 million", 
        correct: "100 million"
    },

        {questions: "Finish the lyric.  Look at my _____, look at my _____. Ain't got enough money to pay me respect.",

        A:"neck, check",
         B:"neck, jet", 
         C:"jet,check", 
         D:"net, jet", 
         correct: "neck, jet"
        }
    ];

var startPage = document.getElementById("begin");
var startButton = document.getElementById("begin-btn")

var qPage = document.getElementById("question-pg");
var question = document.getElementById("questions");
var buttonA = document.getElementById("optionA");
var buttonB = document.getElementById("optionB");
var buttonC = document.getElementById("optionC");
var buttonD = document.getElementById("optionD");

var scorePage = document.getElementById("scorePage");
var score = document.getElementById("score");
var userName = document.getElementById("userName");
var nameSubmitButton = document.getElementById("nameSubmitButton");

var highScorePage = document.getElementById("highScorePage");
var scoreList = document.getElementById("scoreList");
var goBack = document.getElementById("goBack");
var clearScore = document.getElementById("clearScore");

startButton.addEventListener("click", startQuiz);
buttonA.addEventListener("click", answerOnClick("A"));
buttonB.addEventListener("click", answerOnClick("B"));
buttonC.addEventListener("click", answerOnClick("C"));
buttonD.addEventListener("click", answerOnClick("D"));
nameSubmitButton.addEventListener("click", storeName);
goBack.addEventListener("click", goBackPage);
clearScore.addEventListener("click", clearScores);

var totalSecondsAllowed = 45;
var secondsLeft;
var timerHandle;
var scoreCounter = 0;
var currentIndex = 0;

qPage.style.display = "none";

function setSecondsLeft(seconds) {
    secondsLeft = seconds;
    console.log(secondsLeft);
}

function startTimer() {
    setSecondsLeft(totalSecondsAllowed);
    timerHandle = setInterval(function() {
        setSecondsLeft(secondsLeft-1);
        if (secondsLeft === 0) {
            clearInterval(timerHandle);
        }
    }, 1000);
}


function startQuiz(){
    console.log("Quiz started!");
    promptQuestion();
    startTimer();
    startPage.style.display = "none";
}
//prompt the questions
function promptQuestion(){
    qPage.style.display = "block";
    var currentQ = questionText[currentIndex];
    question.textContent = currentQ.question;
    buttonA.textContent = currentQ.A;
    buttonB.textContent = currentQ.B;
    buttonC.textContent = currentQ.C;
    buttonD.textContent = currentQ.D;
}
//check answers
function answerOnClick(answerId) {
    return function(event) {
        if (questionText[currentIndex].correct === answerId) {
            scoreCounter = scoreCounter + 10;
        } else {
            console.log("Time deduct!")
            // setSecondsLeft(secondsLeft - 5);
        }
        currentIndex++;
        if (currentIndex < questionText.length) {
            promptQuestion();
        } else {
            finishQuiz();
        }
    }
}
//quiz ends
function finishQuiz() {
    console.log("Quiz finished!")
    clearInterval(timerHandle);
    showScore();
}
