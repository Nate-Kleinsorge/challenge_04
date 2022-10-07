var highScoreBtn = document.querySelector(".high-score-btn");
var startbtn = document.querySelector(".start-btn");
var quizStart = document.querySelector(".quiz-start");
var page1 = document.querySelector(".quiz-pg1");
var page2 = document.querySelector("quiz-pg2");
var page3 = document.querySelector("quiz-pg3");
var page4 = document.querySelector("quiz-pg4");

highScoreBtn.addEventListener("click", function() {
    
});

startbtn.addEventListener("click", function() {
    quizStart.hidden = true;
    page1.hidden = false;
    startTimer()
});

function startTimer() {
    var num = 100;
    var myinterval = setInterval(function() {
        document.querySelector("#countdown").textContent = "timer: " + num;
        num--;
        if (num < 0) {
            clearInterval(myinterval);
        };
    }, 1000);
};