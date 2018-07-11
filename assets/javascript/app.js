$(document).ready(function() {
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

  var number = 30;

  //  Variable that will hold our interval ID when we execute
  //  the "run" function
  var intervalId;

  //function that starts the game
  function startGame() {
    $("button").remove();

    $("#timeRemaining").html("<div>Time Remaining: " + number + "</div><br>");

    startTimer();

    displayQuestion();

    function startTimer() {
      intervalId = setInterval(decrement, 1000);
    }

    function decrement() {
      number--;
      $("#timeRemaining").html("<div>Time Remaining: " + number + "</div><br>");

      //if the time runs out, then let the user know and display the correct answer along with the image, increase the unanswered question count
      //and move on to the next question
      if (number === 0) {
        stopTimer();
        $("#timeRemaining").html("<div>Time's Up!<div>");
        $("#timeRemaining").append(
          "<div>The correct answer was: " + answers[count] + "</div>"
        );
        $("#questions").text("");
        $(".choices").text("");
        displayImage();
        unanswered++;
        count++;
      }
    }

    //stops the timer and displays the next question
    function stopTimer() {
      clearInterval(intervalId);
      number = 31;
      if (count < questions.length - 1) {
        setTimeout(nextQuestion, 5000);
        setTimeout(startTimer, 5000);
      }
    }

    //makes the quiz options 'clickable' and runs the solution function to check the user's answer
    $("#firstChoice").on("click", solution);
    $("#secondChoice").on("click", solution);
    $("#thirdChoice").on("click", solution);
    $("#fourthChoice").on("click", solution);

    //checks the user's selection against the answer in the answer array
    function solution() {
      //if the user's selection is correct, then stop time, display image, increase correct count, and move to next question
      if ($(this).text() === answers[count]) {
        stopTimer();
        correctAnswer();
        displayImage();
        correct++;
        count++;
      } else {
        //if incorrect, then stop time, display correct answer, display image, increase incorrect count, and move to next question
        stopTimer();
        incorrectAnswer();
        displayImage();
        incorrect++;
        count++;
      }
    }
  }

  //displays a related image to the user
  function displayImage() {
    $("#image-holder").html("<img src=" + images[count] + " />");
  }

  //confirms to the user that they've answered correctly
  function correctAnswer() {
    $("#timeRemaining").append("<div>Correct!</div>");
    $("#questions").text("");
    $(".choices").text("");
  }

  //shows the user what the correct answer is after they answer incorrectly
  function incorrectAnswer() {
    $("#timeRemaining").append(
      "<div>Incorrect! The correct answer was: " + answers[count] + "</div>"
    );
    $("#questions").text("");
    $(".choices").text("");
  }

  //displays the questions to the user
  function displayQuestion() {
    $("#questions").html("<div>" + questions[count] + "</div>");
    $("#firstChoice").html("<div>" + firstChoice[count] + "</div>");
    $("#secondChoice").html("<div>" + secondChoice[count] + "</div>");
    $("#thirdChoice").html("<div>" + thirdChoice[count] + "</div>");
    $("#fourthChoice").html("<div>" + fourthChoice[count] + "</div>");
  }

  function nextQuestion() {
    $("#image-holder").text("");
    if (count === questions.length - 1) {
      endGame();
    } else {
      displayQuestion();
    }
  }

  //checks to see if the game is out of questions to ask
  function endGame() {
    stopTimer();
    //if the game is out of questions, then display the user's results
    if (count === questions.length) {
      // stopTimer();
      $("#questions").html(
        "<div>The game is now finished. Here are your results:</div>"
      );
      $("#firstChoice").text("<div>Correct Answers:" + correct + "</div>");
      $("#secondChoice").text("<div>Incorrect Answers:" + incorrect + "</div>");
      $("#thirdChoice").text(
        "<div>Unanswered Answers:" + unanswered + "</div>"
      );
      $("#fourthChoice").text("");
      $("#startButton").html("<button>Start Over?</button>");

      $("#startButton").on("click", function() {
        reset();
      });
    }
  }

  //resets the game results
  function reset() {
    correct = 0;
    incorrect = 0;
    unanswered = 0;
    count = 0;
    startGame();
  }

  //when the user clicks the Start button, then the game starts
  $("#startButton").on("click", function() {
    startGame();
  });
});

//instead of removing the questions and choices div entirely, just replace them with empty strings
//OR toggle their css classes; .addClass or .removeClass and set the CSS property to none
//pick whichever works best
