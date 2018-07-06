var questions = [
  "In 'The Matrix Reloaded,' what is the name of the French anatognist?"
];
var answers = ["The Merovingian"];
var choiceA = ["The Phoenician"];
var choiceB = ["The Appalachian"];
var choiceC = ["The Merovingian"];
var choiceD = ["The Belgian"];
var correct = 0;
var incorrect = 0;
var unanswered = 0;

var number = 30;

//  Variable that will hold our interval ID when we execute
//  the "run" function
var intervalId;

$("#startButton").on("click", function startGame() {
  $("button").remove();

  $("#timeRemaining").html("<div>Time Remaining: " + number + "</div><br>");

  function timer() {
    intervalId = setInterval(decrement, 1000);
    console.log(intervalId);
  }
  timer();

  function decrement() {
    number--;
    $("#timeRemaining").html("<div>Time Remaining: " + number + "</div><br>");
  }

  $("#questions").html(questions[0]);
  $("#choiceA").text("A. " + choiceA[0]);
  $("#choiceB").text("B. " + choiceB[0]);
  $("#choiceC").text("C. " + choiceC[0]);
  $("#choiceD ").text("D. " + choiceD[0]);
});
