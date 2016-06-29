$(document).ready(function() {

  $(document).on('click', '#startover', function() {
    location.reload();
  });

  var quizQuestionArray = [];

  //Create quizQuestion class
  function quizQuestion(question, answers, correct) {
    this.question = question;
    this.answers = answers;
    this.correct = correct;
    quizQuestionArray.push(this);
  }

  //Create each class instance
  var question1 = new quizQuestion(question1Question, question1Answers, question1Correct);
  var question2 = new quizQuestion(question2Question, question2Answers, question2Correct);
  var question3 = new quizQuestion(question3Question, question3Answers, question3Correct);
  var question4 = new quizQuestion(question4Question, question4Answers, question4Correct);
  var question5 = new quizQuestion(question5Question, question5Answers, question5Correct);

  //Array of all of the questions
  var questions = [question1, question2, question3, question4, question5];

  //Display the current question
  function displayQuestion(questionNumber) {
    $('#singlequestion').html(questions[questionNumber - 1].question);
  }

  //Display answers for the current question
  function displayAnswers(questionNumber) {
    for (var i = 0; i < questions[questionNumber - 1].answers.length; i++) {
      $('#choice' + i).html(questions[questionNumber - 1].answers[i]);
    }
  }
  //Displays what question user is on of total number of questions
  function numQuestions(questionNumber) {
    var numQuestions = questions.length;
    $('#number').html(questionNumber);
    $('#total').html(numQuestions);
    return numQuestions;
  }

  var numCorrect = 0;
  var correctArray = [];

  //Displays the quiz
  function displayQuiz(questionNumber) {

    numQuestions(questionNumber);

    displayQuestion(questionNumber);
    displayAnswers(questionNumber);

    $('.submit').click(function(e) {

      var answer = $('input[name="answers"]:checked').val();

      if (answer == questions[questionNumber - 1].correct) {
        numCorrect = numCorrect + 1;
        correctArray.push(answer);
      } else {
        numCorrect = numCorrect + 0;
      }

      $('#numcorrect').html('Correct Answers: ' + correctArray.length);

      e.preventDefault();
      if (questionNumber == questions.length) {
        $('.questions').hide();
        $('#numcorrect').html('You got ' + numCorrect + ' out of ' + questions.length + ' questions correct!');
        $('#startover').show();

      } else {
        questionNumber++;
        $('.submit').off('click');
        displayQuiz(questionNumber);
      }
    });
  }

  displayQuiz(1);
});

// Question 1
var question1Question = "Which console was released last?";
var question1Answers = ["Sega Saturn", "Nintendo GameCube", "Sony PlayStation", "Nintendo N64"];
var question1Correct = 1;

// Question 2
var question2Question = "Which console sold the least units worldwide?";
var question2Answers = ["Microsoft Xbox", "Sony PlayStation 2", "Sega Dreamcast", "Nintendo Wii U"];
var question2Correct = 2;

// Question 3
var question3Question = "What was Atari's last home console called?";
var question3Answers = ["Jaguar", "Panther", "Cheetah", "Leopard"];
var question3Correct = 0;

// Question 4
var question4Question = "When was Microsoft's Xbox One released in the US?";
var question4Answers = ["Nov' 2012", "Oct' 2013", "Dec' 2014", "Nov' 2013"];
var question4Correct = 3;

// Question 5
var question5Question = "Which console was the most expensive at launch? (inflation not included)";
var question5Answers = ["Sega Saturn", "Atari Jaguar", "Nintendo 64", "Sega CD"];
var question5Correct = 0;
