const score = localStorage.getItem("quizScore") || 0;
document.getElementById("score").textContent = `Your Score: ${score}`;

let feedback = "Keep trying!";
if (score == 2) feedback = "Excellent!";
else if (score == 1) feedback = "Good job!";
document.getElementById("feedback").textContent = feedback;
