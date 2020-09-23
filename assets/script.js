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

startButton.addEventListener("click", startQuiz);
buttonA.addEventListener("click", answerOnClick("A"));
buttonB.addEventListener("click", answerOnClick("B"));
buttonC.addEventListener("click", answerOnClick("C"));
buttonD.addEventListener("click", answerOnClick("D"));
nameSubmitButton.addEventListener("click", storeName);
goBack.addEventListener("click", goBackPage);
clearScore.addEventListener("click", clearScores);

