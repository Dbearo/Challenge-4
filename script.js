var questions = [
{
    question:'q1',
    answers:['falans11','falans12','corans13','falans14'],
    answer: 3

}
    ,
    {
        question:'q2',
        answers:['falans21','corans22','falans23','falans24'],
        answer: 2
    
    }
    ,
    {
        question:'q3',
        answers:['falans31','falans32','falans33','corans34'],
        answer: 4
    
    }
    ,
    {
        question:'q4',
        answers:['falans41','falans42','corans43','falans44'],
        answer: 3
    
    }
    ,
    {
        question:'q5',
        answers:['falans51','corans52','falans53','falans54'],
        answer: 2
    
    }
]

var score = 0
var time = 0
console.log(time);

var startScreen = document.getElementById("startScreen");
var quiz = document.getElementById("quiz");
var endScreen = document.getElementById("endScreen");

var start = document.getElementById("start");
var question = document.getElementById("question");
var ans1 = document.getElementById("ans1");
var ans2 = document.getElementById("ans2");
var ans3 = document.getElementById("ans3");
var ans4 = document.getElementById("ans4");
var feedback = document.getElementById("feedback");
var timeLeft = document.getElementById("time");
var totalScore = document.getElementById("individualScore");
var initals = document.getElementById("initals");
var submit = document.getElementById("submit");
var retry = document.getElementById("retry");
var scoreList = document.getElementById("scoreList");
var answers = document.getElementsByClassName('ansBlock')

startScreen.style.display = "";
quiz.style.display = "none";
endScreen.style.display ="none";

function end(){
    startScreen.style.display = "none";
    quiz.style.display = "none";
    endScreen.style.display ="";
}

function timer(){
    var timerInterval = setInterval(function() {
        time--;
        timeLeft.textContent = time;
        console.log(time);

        if(time === 0){
            end();
            clearInterval(timerInterval)
        }
    }, 1000)
}

function startQuiz(){
    startScreen.style.display = "none";
    quiz.style.display = "";
    endScreen.style.display ="none";
    time = 10
    console.log(time);
    timeLeft.textContent = time;  
    timer();
}

start.addEventListener('click', startQuiz)