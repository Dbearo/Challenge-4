var questions = [
{
    question:'Question 1: Which of the following is used to define the structure and content of a web page?',
    answers:['JavaScript','CSS','HTML','Jquery'],
    answer: 3

}
    ,
    {
        question:'Question 2: What is the correct way to select an HTML element with the id "myElement" using CSS?',
        answers:['@myElement','#myElement','#myelement','.myElement'],
        answer: 2
    
    }
    ,
    {
        question:'Question 3:Which of the following is NOT a valid HTML tag?',
        answers:['<span>','<div>','<h1>','<paragraph>'],
        answer: 4
    
    }
    ,
    {
        question:'Question 4:What is the purpose of the "onclick" attribute in JavaScript?',
        answers:[' It defines the style of an HTML element.','It links an external CSS file to an HTML document',' It triggers a function or script when an element is clicked','It creates a new variable in JavaScript'],
        answer: 3
    
    }
    ,
    {
        question:'Which of the following is used to add styling to a web page?',
        answers:['CSS','HTML','JavaScript','Python'],
        answer: 1
    
    }
]

var current = 0;
var score = 0;
var time = 0;
var correctAns = 0;
var inputvalue = 0;
var inital = 0;
var inn = 0;
var highScores = [];
var count = 0;
var refrenceNode = 0;

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
var initals = document.getElementById("initials");
var submit = document.getElementById("submit");
var retry = document.getElementById("retry");
var scoreList = document.getElementById("scoreList");
var answers = [ans1,ans2,ans3,ans4]
var checker = document.getElementById("checker")

console.log(answers)

startScreen.style.display = "";
quiz.style.display = "none";
endScreen.style.display ="none";

function end(){
    startScreen.style.display = "none";
    quiz.style.display = "none";
    endScreen.style.display ="";
    totalScore.textContent = score;        
    clearInterval(timerInterval);
    
}
let timerInterval;
function timer(){
    timerInterval = setInterval(function() {
        time--;
        timeLeft.textContent = time;
        if(time === 0){
            end();
            clearInterval(timerInterval);
        }
    }, 1000)
    return timerInterval;
}
function displayQuestion(){
    if(current === questions.length){
    end();
}
else{
question.textContent = questions[current].question;
ans1.textContent = questions[current].answers[0];
ans2.textContent = questions[current].answers[1];
ans3.textContent = questions[current].answers[2];
ans4.textContent = questions[current].answers[3];
correctAns = questions[current].answer;
current++
// console.log(current)
}
}

function checkQuestion(answer){
// console.log(answer);
if(answer === correctAns){
    // console.log("correct")
    feedback.textContent="Correct";
    checker.style.background="green";
    score++
    time += 5;
} else{
    // console.log('false')
    feedback.textContent="false";
    checker.style.background="red";
    time-= 5;
}

displayQuestion();
}

function initialsInput() {
     inputvalue = initals.value;
    var scoreSave = score;
     inital = [inputvalue, " ", score, "/", questions.length];
     inn = inital.toString();
    var finalIn = inn.replace(/,/g, '');
    var newItem = document.createElement('li');
    newItem.textContent = finalIn;
    
    var inserted = false; // Flag to track if the score has been inserted
    
    for (var i = 0; i < highScores.length; i++) {
      if (scoreSave >= highScores[i]) {
        highScores.splice(i, 0, scoreSave);
        scoreList.insertBefore(newItem, scoreList.children[i]);
        inserted = true;
        break;
      }
    }
    
    if (!inserted) {
      highScores.push(scoreSave);
      scoreList.appendChild(newItem);
    }
    
    console.log(highScores);
  }

function startQuiz(){
    score = 0;
    current = 0;
    count = 0
    checker.style.background='';
    feedback.textContent= "";
    startScreen.style.display = "none";
    quiz.style.display = "";
    endScreen.style.display ="none";
    time = 60;
    // console.log(time);
    timeLeft.textContent = time;  
    timer();
    // console.log("hi");
    displayQuestion();
}
retry.addEventListener('click', startQuiz)
start.addEventListener('click', startQuiz)
ans1.addEventListener('click', checkQuestion.bind(null,1))
ans2.addEventListener('click', checkQuestion.bind(null,2))
ans3.addEventListener('click', checkQuestion.bind(null,3))
ans4.addEventListener('click', checkQuestion.bind(null,4))
submit.addEventListener('click', initialsInput.bind(null))