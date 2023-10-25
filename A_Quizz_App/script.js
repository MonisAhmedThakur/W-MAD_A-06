var quizQuestions = [
    {
      question: "What is the capital of France?",
      options: ["Paris", "London", "Berlin", "Rome"],
      correctAnswer: "Paris"
    },
    {
      question: "Which planet is known as the Red Planet?",
      options: ["Venus", "Mars", "Jupiter", "Saturn"],
      correctAnswer: "Mars"
    },
    {
      question: "What is the chemical symbol for gold?",
      options: ["Au", "Ag", "Cu", "Fe"],
      correctAnswer: "Au"
    }
  ];
  

 var currentQuestionIndex = 0;
 var score = 0;
 var timeLeft = 30;
 var timerInterval;
  

  function startQuiz() {
    document.getElementById("start-button").style.display = "none";
    displayQuestion();
    startTimer();
  }
  
  function displayQuestion() {
    var currentQuestion = quizQuestions[currentQuestionIndex];
    var questionText = document.getElementById("question-text");
    var answerButtons = document.getElementById("answer-buttons");
  
    questionText.innerHTML = "";
    answerButtons.innerHTML = "";
  
    questionText.innerHTML = currentQuestion.question;
  
    // Create answer buttons for each option
    currentQuestion.options.forEach(option => {
      var button = document.createElement("button");
      button.innerText = option;
      button.classList.add("answer-button");
      answerButtons.appendChild(button);
  
      // Add click event listener to check the answer
      button.addEventListener("click", function() {
        checkAnswer(option);
      });
    });
  }
  

  function checkAnswer(selectedOption) {
    var currentQuestion = quizQuestions[currentQuestionIndex];
  
    if (selectedOption === currentQuestion.correctAnswer) {
      score++;
    }
  
    currentQuestionIndex++;
  
    if (currentQuestionIndex < quizQuestions.length) {
      displayQuestion();
    } else {
      endQuiz();
    }
  }
  
 
  function startTimer() {
    timerInterval = setInterval(function() {
      timeLeft--;
    
      document.getElementById("timer").textContent = timeLeft;
  
      if (timeLeft <= 0) {
        endQuiz();
      }
    }, 1000);
  }
  

  function endQuiz() {

    clearInterval(timerInterval);
  
    var scorePercentage = (score / quizQuestions.length) * 100;
  

    var questionContainer = document.getElementById("question-container");
    questionContainer.innerHTML = `
      <h2>Quiz Completed!</h2>
      <p>Your Score: ${score} out of ${quizQuestions.length}</p>
      <p>Score Percentage: ${scorePercentage}%</p>
    `;
  }
  

  document.getElementById("start-button").addEventListener("click", startQuiz);