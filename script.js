function checkAnswer(questionId, correctAnswer) {
    const selectedAnswer = document.querySelector(`input[name=${questionId}]:checked`);
    const feedbackElement = document.getElementById(`feedback${questionId.slice(-1)}`);
  
    if (selectedAnswer) {
      if (selectedAnswer.value === correctAnswer) {
        feedbackElement.textContent = "Correct!";
        feedbackElement.style.color = "green";
      } else {
        feedbackElement.textContent = `Incorrect. The correct answer is ${correctAnswer}.`;
        feedbackElement.style.color = "red";
      }
    } else {
      feedbackElement.textContent = "Please select an answer.";
      feedbackElement.style.color = "red";
    }
  }