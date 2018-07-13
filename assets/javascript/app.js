$(document).ready(function() {
  //Global variables
  var questions = [
    "In 'The Matrix', what was the name of Morpheus' ship?",
    "What is the model number of Arnold's Schwarzenegger's terminator in 'Terminator 2'?",
    "Who is NOT one of the original six Avengers?",
    "Which animal's DNA was used to clone the dinosaurs in 'Jurassic Park'?",
    "In 'Aliens', how long was Ripley in hypersleep before being found?",
    "Which character in 'Star Wars: The Last Jedi' said 'It's time for the Jedi to end.'?",
    "Where did Wonder Woman rescue hostages at the beginning of 'Justice League'?",
    "In 'Back to the Future', how fast did the Delorean need to go in order to time travel?"
  ];
  var answers = [
    "The Nebuchadnezzar",
    "T-800",
    "Spiderman",
    "Frog",
    "57 years",
    "Luke Skywalker",
    "A bank",
    "88 mph"
  ];
  var firstChoice = [
    "The Vigilant",
    "T-3000",
    "Spiderman",
    "Frog",
    "98 years",
    "Rey",
    "A mall",
    "73 parsecs"
  ];
  var secondChoice = [
    "The Logos",
    "T-1000",
    "Iron Man",
    "Mosquito",
    "32 lightyears",
    "Luke Skywalker",
    "A museum",
    "141.62 kmh"
  ];
  var thirdChoice = [
    "The Merovingian",
    "T-OK715",
    "Black Widow",
    "Bird",
    "57 years",
    "Supreme Leader Snoke",
    "An office building",
    "88 mph"
  ];
  var fourthChoice = [
    "The Nebuchadnezzar",
    "T-800",
    "Hawkeye",
    "Lizard",
    "200 lightyears",
    "Kylo Ren",
    "A bank",
    "49 cycles"
  ];
  var count = 0;
  var correct = 0;
  var incorrect = 0;
  var unanswered = 0;
  var images = [
    "assets/images/bulletTime.gif",
    "assets/images/t800.gif",
    "assets/images/avengers.gif",
    "assets/images/jurassicPark.gif",
    "assets/images/ripley.gif",
    "assets/images/luke.gif",
    "assets/images/wonderWoman.gif",
    "assets/images/DeLorean.gif"
  ];

  var number = 10;
  var intervalId;

  //Starts the game
  function startGame() {
    $("button").remove();

    $("#timeRemaining").html("<div>Time Remaining: " + number + "</div><br>");

    startTimer();

    displayQuestion();

    //Starts timer
    function startTimer() {
      intervalId = setInterval(decrement, 1000);
    }

    //Counts down the seconds from 30
    function decrement() {
      number--;
      $("#timeRemaining").html("<div>Time Remaining: " + number + "</div><br>");
      if (number === 0) {
        stopTimer();
        $("#timeRemaining").html("<div>Time's Up!<div>");
        $("#questions").append(
          "<div>The correct answer was: " + answers[count] + "</div>"
        );
        $(".choices").text("");
        displayImage();
        unanswered++;
        count++;
      }
    }

    //Stops the timer and moves on to appropriate action
    function stopTimer() {
      clearInterval(intervalId);
      number = 10;
      if (count < questions.length - 1) {
        setTimeout(nextQuestion, 3000);
        setTimeout(startTimer, 3000);
      } else {
        setTimeout(endGame, 3000);
      }
    }

    //Allows user to click on the quiz options
    $("#firstChoice").on("click", solution);
    $("#secondChoice").on("click", solution);
    $("#thirdChoice").on("click", solution);
    $("#fourthChoice").on("click", solution);

    //Checks to see if user's answer is correct/incorrect
    function solution() {
      if ($(this).text() === answers[count]) {
        stopTimer();
        correctAnswer();
        displayImage();
        correct++;
        count++;
      } else {
        stopTimer();
        incorrectAnswer();
        displayImage();
        incorrect++;
        count++;
      }
    }
  }

  //Displays image related to question to the user
  function displayImage() {
    $("#image-holder").html("<img src=" + images[count] + " />");
  }

  //Tells user that they've answered correctly
  function correctAnswer() {
    $("#questions").html("<div>Correct!</div>");
    $(".choices").text("");
  }

  //Tells user that they've answered incorrectly
  function incorrectAnswer() {
    $("#questions").html(
      "<div>Incorrect! The correct answer was: " + answers[count] + "</div>"
    );
    $(".choices").text("");
  }

  //Displays questions to the user
  function displayQuestion() {
    $("#questions").html("<div>" + questions[count] + "</div>");
    $("#firstChoice").html("<div>" + firstChoice[count] + "</div>");
    $("#secondChoice").html("<div>" + secondChoice[count] + "</div>");
    $("#thirdChoice").html("<div>" + thirdChoice[count] + "</div>");
    $("#fourthChoice").html("<div>" + fourthChoice[count] + "</div>");
  }

  function nextQuestion() {
    $("#image-holder").text("");
    if (count < questions.length) {
      displayQuestion();
    }
  }

  //Resets the game results
  function reset() {
    clearInterval(intervalId);
    correct = 0;
    incorrect = 0;
    unanswered = 0;
    count = 0;
    startGame();
  }
  //Checks to see if game is out of questions
  function endGame() {
    if (count === questions.length) {
      $("#questions").html(
        "<div>The game is now finished. Here are your results:</div>"
      );
      $("#firstChoice").text("Correct Answers: " + correct);
      $("#secondChoice").text("Incorrect Answers: " + incorrect);
      $("#thirdChoice").text("Unanswered Answers: " + unanswered);
      $("#fourthChoice").html("");
      $("#image-holder").html("<button>Start Over?</button>");
      $("#image-holder").on("click", function() {
        reset();
      });
    }
  }

  //Starts the game when button is clicked
  $("#startButton").on("click", function() {
    startGame();
  });
});
