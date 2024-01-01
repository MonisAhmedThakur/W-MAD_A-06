
function submit() {
  var text = document.getElementById("text");
  var questions = [];
  var obj = {};
  var value = text.value.split("\n");
  var count = 1;
  for (var i = 0; i < value.length; i++){
    if (value[i] === ""){
      questions.push(obj);
      obj = {};
      count = 1;
    }
    else {
      if (value[i].lastIndexOf("?") !== -1) {
        obj.question = value[i];
      }
      else {
        if (value[i].lastIndexOf("*") !== -1) {
          obj.answer = value[i].slice(0, -1);
          obj['option' + count] = value[i].slice(0, -1);
        }
        else {
          obj['option' + count] = value[i];
        }
      }
      count++;
    }
  }
  console.log(questions);
}




// What is JavaScript?
// Programming*
// Scripting
// Language
// KuchNahi

// What is CSS?
// Programming
// Scripting*
// Language
// KuchNahi

// What is HTML?
// Programming
// Scripting
// Language*
// KuchNahi

// What is the capital of France?
// Paris*
// London
// Madrid
// Berlin

// Which planet is known as the "Red Planet"?
// Venus
// Mars*
// Jupiter
// Saturn

// Who wrote the play "Romeo and Juliet"?
// William Shakespeare*
// Charles Dickens
// Jane Austen
// Leo Tolstoy

// What is the chemical symbol for water?
// H2O*
// CO2
// O2
// CH4

// In which year did World War II end?
// 1945*
// 1939
// 1941
// 1950

// Who painted the Mona Lisa?
// Leonardo da Vinci*
// Vincent van Gogh
// Pablo Picasso
// Claude Monet

// What is the largest mammal on Earth?
// Blue Whale*
// Elephant
// Giraffe
// Rhinoceros

// Which gas do plants absorb for photosynthesis?
// Carbon Dioxide (CO2)*
// Oxygen (O2)
// Nitrogen (N2)
// Hydrogen (H2)

// Who is the author of the Harry Potter series?
// J.K. Rowling*
// George R.R. Martin
// Stephen King
// Jane Austen

// What is the tallest mountain in the world?
// Mount Everest*
// K2
// Annapurna
// Kilimanjaro


// var quizQuestions = [
//     {
//       question: "What is the capital of France?",
//       options: ["Paris", "London", "Berlin", "Rome"],
//       correctAnswer: "Paris"
//     },
//     {
//       question: "Which planet is known as the Red Planet?",
//       options: ["Venus", "Mars", "Jupiter", "Saturn"],
//       correctAnswer: "Mars"
//     },
//     {
//       question: "What is the chemical symbol for gold?",
//       options: ["Au", "Ag", "Cu", "Fe"],
//       correctAnswer: "Au"
//     }
//   ];
  
//   var currentQuestionIndex = 0;
//   var score = 0;
//   var timeLeft = 30;
//   var timerInterval;
  
//   function startQuiz() {
//     document.getElementById("start-button").style.display = "none";
//     displayQuestion();
//     startTimer();
//   }
  
//   function displayQuestion() {
//     var currentQuestion = quizQuestions[currentQuestionIndex];
//     var questionText = document.getElementById("question-text");
//     var answerButtons = document.getElementById("answer-buttons");
  
//     questionText.innerHTML = "";
//     answerButtons.innerHTML = "";
  
//     questionText.innerHTML = currentQuestion.question;
  
//     currentQuestion.options.forEach(option => {
//       var button = document.createElement("button");
//       button.innerText = option;
//       button.classList.add("answer-button");
//       answerButtons.appendChild(button);
  
//       button.addEventListener("click", function() {
//         checkAnswer(option);
//       });
//     });
//   }
  
//   function checkAnswer(selectedOption) {
//     var currentQuestion = quizQuestions[currentQuestionIndex];
  
//     if (selectedOption === currentQuestion.correctAnswer) {
//       score++;
//     }
  
//     currentQuestionIndex++;
  
//     if (currentQuestionIndex < quizQuestions.length) {
//       displayQuestion();
//     } else {
//       endQuiz();
//     }
//   }
  
//   function startTimer() {
//     timerInterval = setInterval(function() {
//       timeLeft--;
  
//       document.getElementById("timer").textContent = timeLeft;
  
//       if (timeLeft <= 0) {
//         endQuiz();
//       }
//     }, 1000);
//   }
  
//   function endQuiz() {
//     clearInterval(timerInterval);
  
//     var scorePercentage = (score / quizQuestions.length) * 100;
  
//     var questionContainer = document.getElementById("question-container");
//     questionContainer.innerHTML = `
//       <h2>Quiz Completed!</h2>
//       <p>Your Score: ${score} out of ${quizQuestions.length}</p>
//       <p>Score Percentage: ${scorePercentage}%</p>
//     `;
//   }
  
//   document.getElementById("start-button").addEventListener("click", startQuiz);