const questions = [
  {
    question: "Which of the following keywords is used to define a variable in Javascript?",
    choices: ["var", "let", "Both A and B", "None of the Above"],
    correctAnswer: "Both A and B"
  },
  {
    question: "Which programming language is used for web development?",
    choices: ["Java", "Python", "JavaScript", "C++"],
    correctAnswer: "JavaScript"
  },
  {
    question: "What does HTML stand for?",
    choices: ["HyperText Markup Language", "High-level Text Machine Language", "HyperTransfer Text Language", "HyperText Machine Language"],
    correctAnswer: "HyperText Markup Language"
  },
  {
    question: "Javascript is an _______ language?",
    choices: ["Object-Oriented", "Object-Based", "Procedural", "None of the above"],
    correctAnswer: "Object-Oriented"
  },
  {
    question: "What does CSS stand for?",
    choices: ["Counter Style Sheet", "Computer Style Sheet", "Colorful Style Sheet", "Cascading Style Sheet"],
    correctAnswer: "Cascading Style Sheet"
  }
];

let currentQuestionIndex = 0;
let time = 90;
let timerInterval;

const startBtn = document.getElementById("start-btn");
const quizScreen = document.getElementById("quiz-screen");
const questionElement = document.getElementById("question");
const choicesElement = document.getElementById("choices");
const feedbackElement = document.getElementById("feedback");
const timeElement = document.getElementById("time");
const endScreen = document.getElementById("end-screen");
const finalScoreElement = document.getElementById("final-score");
const initialsInput = document.getElementById("initials");
const submitScoreBtn = document.getElementById("submit-score");

startBtn.addEventListener("click", startQuiz);
submitScoreBtn.addEventListener("click", saveScore);

function startQuiz() {
  startBtn.style.display = "none";
  quizScreen.style.display = "block";
  displayQuestion();
  timerInterval = setInterval(updateTimer, 1000);
}

function displayQuestion() {
  const currentQuestion = questions[currentQuestionIndex];
  questionElement.textContent = currentQuestion.question;
  choicesElement.innerHTML = "";

  currentQuestion.choices.forEach((choice, index) => {
    const li = document.createElement("li");

    const button = document.createElement("button");
    button.textContent = choice;
    button.className = "btn btn-secondary"; // Added Bootstrap button styling
    button.addEventListener("click", () => checkAnswer(choice));

    li.appendChild(button);
    choicesElement.appendChild(li);
  });
}

function checkAnswer(choice) {
  const currentQuestion = questions[currentQuestionIndex];

  if (choice === currentQuestion.correctAnswer) {
    feedbackElement.textContent = "Correct!";
  } else {
    feedbackElement.textContent = "Wrong! -10 seconds";
    time -= 10;
  }

  currentQuestionIndex++;

  if (currentQuestionIndex < questions.length) {
    displayQuestion();
  } else {
    endQuiz();
  }
}

function updateTimer() {
  if (time > 0) {
    timeElement.textContent = time;
    time--;
  } else {
    endQuiz();
  }
}

function endQuiz() {
  clearInterval(timerInterval);
  quizScreen.style.display = "none";
  endScreen.style.display = "block";
  finalScoreElement.textContent = time;
}

function saveScore() {
  const initials = initialsInput.value;
  alert(`Score saved! Initials: ${initials}, Score: ${time}`);
  const existingScores = JSON.parse(localStorage.getItem("quizScores")) || [];
  const currentScore = {
    initials: initials,
    score: time
  };

  existingScores.push(currentScore);
  existingScores.sort((a, b) => b.score - a.score);
  localStorage.setItem("quizScores", JSON.stringify(existingScores));
  displayFinalScores(existingScores);

}

function displayFinalScores(scores) {
  const scoresList = document.getElementById("scores-list");
  scoresList.innerHTML = ""; // Clear previous scores

  scores.forEach((score, index) => {
    const li = document.createElement("li");
    li.textContent = `${index + 1}. ${score.initials}: ${score.score}`;
    scoresList.appendChild(li);
  });
}
