var questions = [
  "In 'The Matrix', what was the name of Morpheus' ship?",
  "What is the model number of Arnold's Schwarzenegger's terminator in 'Terminator 2'?",
  "Who is NOT one of the original six Avengers?",
  "Which animal's DNA was used to clone the dinosaurs in 'Jurassic Park'?"
];
var answers = ["The Nebuchadnezzar", "T-800", "Spiderman", "Frog"];
var choiceA = ["The Vigilant", "T-3000", "Spiderman", "Frog"];
var choiceB = ["The Logos", "T-1000", "Iron Man", "Mosquito"];
var choiceC = ["The Merovingian", "T-OK715", "Black Widow", "Bird"];
var choiceD = ["The Nebuchadnezzar", "T-800", "Hawkeye", "Lizard"];
var correct = 0;
var incorrect = 0;
var unanswered = 0;

var number = 30;
var userChoice;

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
  $("#choiceC").text(choiceC[0]);
  $("#choiceD ").text("D. " + choiceD[0]);

  //$("#choiceA").on("click", solution)
  //use the code below to create a checkAnswer function that compares the user selection to the answer
  //and increases/decreases the win count, and the count for the index

  userChoice = $(".choices").on("click", function() {
    if (userChoice === answers[0]) {
      correct++;
      alert("You got that right!");
    } else {
      incorrect++;
      alert("You got that wrong!");
    }
  });
});

//
