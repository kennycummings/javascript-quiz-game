# javascript-quiz-game

This JavaScript is a basic structure for a quiz with a timer and score-saving functionality. The point of this exercise is to advance my JavaScript knowledge by using variables, DOM elements, event listeners, and functions. I used BootStrap for some of the styling.

### 1. Data Structure:
   - `const questions`: Each object represents a quiz question. Each question object has properties for the question itself (`question`), an array of choices (`choices`), and the correct answer (`correctAnswer`).

### 2. Variables:
   - `let currentQuestionIndex = 0`: Tracks the index of the current question.
   - `let time = 90`: Represents the initial time limit for the quiz, a time of 90 seconds.
   - `let timerInterval`: Stores the interval ID for the timer.

### 3. DOM Elements:
   - Constants storing various DOM elements retrieved by their IDs.

### 4. Event Listeners:
   - `startBtn.addEventListener("click", startQuiz)`: Listens for a click on the start button and triggers the `startQuiz` function.
   - `submitScoreBtn.addEventListener("click", saveScore)`: Listens for a click on the submit score button and triggers the `saveScore` function.

### 5. Functions:

   - `startQuiz()`: Hides the start button, displays the quiz screen, initializes the timer, and calls `displayQuestion()` to show the first question.

   - `displayQuestion()`: Displays the current question and its choices on the quiz screen. Each choice is presented as a button.

   - `checkAnswer(choice)`: Checks if the selected choice is correct. Updates the feedback element accordingly and adjusts the timer if the answer is wrong. Moves to the next question or ends the quiz if there are no more questions.

   - `updateTimer()`: Updates the time displayed every second. The quiz ends when time runs out.

   - `endQuiz()`: Clears the timer interval, hides the quiz screen, and displays the end screen with the final score.

   - `saveScore()`: Saves the user's score and initials to local storage. Alerts the user with the saved information. Retrieves existing scores, adds the current score, sorts them, and updates the local storage. Calls `displayFinalScores()` to show the final scores.

   - `displayFinalScores(scores)`: Clears previous scores and displays the updated list of scores on the end screen.

### Note:
- Bootstrap classes (`btn` and `btn-secondary`) are applied to style the choice buttons.

- Local storage is used to store and retrieve quiz scores.

<br>

Web Application URL: https://kennycummings.github.io/javascript-quiz-game/
<br>
<br>
Screenshots of Application:
