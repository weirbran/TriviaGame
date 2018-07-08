var questions = [
  "In 'The Matrix', what was the name of Morpheus' ship?",
  "What is the model number of Arnold's Schwarzenegger's terminator in 'Terminator 2'?",
  "Who is NOT one of the original six Avengers?",
  "Which animal's DNA was used to clone the dinosaurs in 'Jurassic Park'?"
];
var answers = ["The Nebuchadnezzar", "T-800", "Spiderman", "Frog"];
var firstChoice = ["The Vigilant", "T-3000", "Spiderman", "Frog"];
var secondChoice = ["The Logos", "T-1000", "Iron Man", "Mosquito"];
var thirdChoice = ["The Merovingian", "T-OK715", "Black Widow", "Bird"];
var fourthChoice = ["The Nebuchadnezzar", "T-800", "Hawkeye", "Lizard"];
var count = 0;
var correct = 0;
var incorrect = 0;
var unanswered = 0;
var images = [
  "assets/images/bulletTime.gif",
  "assets/images/t800.gif",
  "assets/images/avengers.gif",
  "assets/images/jurassicpark.gif"
];

var number = 30;

//  Variable that will hold our interval ID when we execute
//  the "run" function
var intervalId;

function startGame() {
  $("button").remove();

  $("#timeRemaining").html("<div>Time Remaining: " + number + "</div><br>");

  startTimer();

  function startTimer() {
    intervalId = setInterval(decrement, 1000);
  }

  function decrement() {
    number--;
    $("#timeRemaining").html("<div>Time Remaining: " + number + "</div><br>");
    if (number === 0) {
      stopTimer();
      $("#timeRemaining").html("<div>Time's Up!<div>");
      $("#timeRemaining").append(
        "<div>The correct answer was: " + answers[count] + "</div>"
      );
      $("#questions").remove();
      $(".choices").remove();
      displayImage();
      unanswered++;
      count++;
    }
  }

  function stopTimer() {
    clearInterval(intervalId);
  }

  displayQuestion();

  $("#firstChoice").on("click", solution);
  $("#secondChoice").on("click", solution);
  $("#thirdChoice").on("click", solution);
  $("#fourthChoice").on("click", solution);

  //use the code below to create a checkAnswer function that compares the user selection to the answer
  //and increases/decreases the win count, and the count for the index

  function solution() {
    if ($(this).text() === answers[count]) {
      stopTimer();
      correctAnswer();
      displayImage();
      correct++;
      count++;
      displayQuestion();
    } else {
      stopTimer();
      incorrectAnswer();
      displayImage();
      incorrect++;
      count++;
      displayQuestion();
    }
  }

  // userChoice = $(".choices").on("click", function() {
  //   if (userChoice === answers[0]) {
  //     correct++;
  //     alert("You got that right!");
  //   } else {
  //     incorrect++;
  //     alert("You got that wrong!");
  //   }
  // });
}

//function displayImage() {
//   $("#image").html("<img src=" + images[count] + " width='400px'>");
// }
//function displayAnswer(){
//clearInterval (setInterval);

function displayImage() {
  $("#image-holder").html("<img src=" + images[count] + " alt='Bullet Time'/>");
}

function correctAnswer() {
  $("#timeRemaining").append("<div>Correct!</div>");
  $("#questions").remove();
  $(".choices").remove();
}

function incorrectAnswer() {
  $("#timeRemaining").append(
    "<div>Incorrect! The correct answer was: " + answers[count] + "</div>"
  );
  $("#questions").remove();
  $(".choices").remove();
}

function displayQuestion() {
  $("#questions").text(questions[count]);
  $("#firstChoice").text(firstChoice[count]);
  $("#secondChoice").text(secondChoice[count]);
  $("#thirdChoice").text(thirdChoice[count]);
  $("#fourthChoice").text(fourthChoice[count]);
}

function endGame() {
  if (count === questions.length - 1) {
    stopTimer();
    $("#questions").remove();
    $(".choices").html(
      "<div>The game is now finished. Here are your results:</div>"
    );
    $(".choices").append("<div>Correct Answers:" + correct + "</div>");
    $(".choices").append("<div>Incorrect Answers:" + incorrect + "</div>");
    $(".choices").append("<div>Unanswered Answers:" + unanswered + "</div>");
  }
}

// stopTime;

$("#startButton").on("click", function() {
  startGame();
});
