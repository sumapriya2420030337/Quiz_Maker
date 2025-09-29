const questions = [
  { question: "Which language runs in a web browser?", options: ["Java", "C", "Python", "JavaScript"], answer: "JavaScript" },
  { question: "What does CSS stand for?", options: ["Central Style Sheets", "Cascading Style Sheets", "Cascading Simple Sheets", "Cars SUVs Sailboats"], answer: "Cascading Style Sheets" },
  { question: "HTML stands for?", options: ["HyperText Markup Language", "Hyper Transfer Markup Language", "HighText Markup Language", "HyperText Machine Language"], answer: "HyperText Markup Language" }
];

let currentQuestion = 0, score = 0, timer, timeLeft = 15;

function shuffle(array) { return array.sort(() => Math.random() - 0.5); }
shuffle(questions);

function loadQuestion() {
  clearInterval(timer);
  timeLeft = 15;
  document.getElementById("timer").innerText = `Time Left: ${timeLeft}s`;

  const q = questions[currentQuestion];
  document.getElementById("question-box").innerText = q.question;
  let optionsHTML = "";
  q.options.forEach(opt => {
    optionsHTML += `<button class="option-btn" onclick="checkAnswer('${opt}', this)">${opt}</button>`;
  });
  document.getElementById("options").innerHTML = optionsHTML;

  updateProgress(currentQuestion + 1, questions.length);
  startTimer();
}

function startTimer() {
  timer = setInterval(() => {
    timeLeft--;
    document.getElementById("timer").innerText = `Time Left: ${timeLeft}s`;
    if (timeLeft <= 0) {
      clearInterval(timer);
      nextQuestion();
    }
  }, 1000);
}

function checkAnswer(selected, btn) {
  const correct = questions[currentQuestion].answer;
  if (selected === correct) {
    score++;
    btn.classList.add("correct");
  } else {
    btn.classList.add("wrong");
    Array.from(document.getElementsByClassName("option-btn")).forEach(b => {
      if (b.innerText === correct) b.classList.add("correct");
    });
  }
  setTimeout(nextQuestion, 1000);
}

function nextQuestion() {
  currentQuestion++;
  if (currentQuestion < questions.length) loadQuestion();
  else showResults();
}

function updateProgress(current, total) {
  document.getElementById("progress-bar").style.width = `${(current/total)*100}%`;
}

function showResults() {
  const allScores = JSON.parse(localStorage.getItem("scores")) || [];
  const percent = Math.round((score / questions.length) * 100);
  allScores.push(percent);
  localStorage.setItem("scores", JSON.stringify(allScores));
  localStorage.setItem("lastScore", percent);
  location.href = "result.html";
}

window.onload = loadQuestion;
