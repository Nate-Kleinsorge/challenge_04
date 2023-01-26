var highScoreBtn = document.querySelector(".high-score-btn");
var startbtn = document.querySelector(".start-btn");
var quizStart = document.querySelector(".quiz-start");
var submitHs = document.getElementById("submit-hs");
var score = 0;

var page1 = document.querySelector(".quiz-pg1");
var page2 = document.querySelector(".quiz-pg2");
var page3 = document.querySelector(".quiz-pg3");
var page4 = document.querySelector(".quiz-pg4");
var page5 = document.querySelector(".quiz-pg5");
var highPage = document.querySelector(".high-page");

var buttons = document.getElementsByClassName("btn");

//start quiz
startbtn.addEventListener("click", function() {
    quizStart.style.display = "none";
    page1.style.display = "flex";
    startTimer();
});

//timer
var num = 100;
function startTimer() {
    var myinterval = setInterval(function() {
        document.querySelector("#countdown").textContent = "timer: " + num;
        num--;
        if (num < 0) {
            clearInterval(myinterval);
        };
    }, 1000);
};

//page switch
for (var i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener("click", function (event) {
        var element = event.target;
        var parent = element.parentNode.parentNode.parentNode;
        if (element.matches("#right")) {
            score = score + 10;
            getNextPage(parent);
        } else {
            num = num - 10;
            getNextPage(parent);
        }
    });
};

function getNextPage(parent) {
    if (parent.matches(".quiz-pg1")) {
        parent.style.display = "none";
        page2.style.display = "flex";
    } else if (parent.matches(".quiz-pg2")) {
        parent.style.display = "none";
        page3.style.display = "flex";
    } else if (parent.matches(".quiz-pg3")) {
        parent.style.display = "none";
        page4.style.display = "flex";
    } else if (parent.matches(".quiz-pg4")) {
        parent.style.display = "none";
        page5.style.display = "flex";
    } else if (parent.matches(".quiz-pg5")) {
        parent.style.display = "none";
        highPage.style.display = "flex";
    }
};

//display score
var displayScore = document.querySelector("#display-score");
displayScore.textContent = "Your final score is: " + score;

//highscore page
submitHs.addEventListener("click", function(score) {
    let highscores = JSON.parse(window.location.getItem('highscores')) || [];
    let highscore = {
        initials: document.getElementById("input-initials").value.trim(),
        total: score,
    };
    highscores.push(highscore);
    window.localStorage.setItem('highscores', JSON.stringify(highscores))
    window.location.href = 'highscores.html';
})

//generate high scroes list
var highscoreList = document.getElementById("highscoreList");
for (i = 0; i < localStorage.length; i++) {
    var listItem = document.createElement("li");
    var storageItem = JSON.parse(localStorage.getItem("highscore"))
    listItem.textContent = storageItem.highscore;
    highscoreList.append(listItem);
}