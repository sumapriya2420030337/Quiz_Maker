const questions = [
  {
    q: "What does HTML stand for?",
    options: ["Hyper Trainer Marking Language", "HyperText Markup Language", "Hyperlinks and Text Markup Language", "Home Tool Markup Language"],
    answer: 1
  },
  {
    q: "CSS is used for?",
    options: ["Data storage", "Styling web pages", "Connecting databases", "Server-side scripting"],
    answer: 1
  }
];

let current = 0, score = 0;

const questionEl = document.getElementById("question");
const optionsEl = document.getElementById("options");
const nextBtn = document.getElementById("next-btn");

function loadQuestion() {
  const q = questions[current];
  questionEl.textContent = q.q;
  optionsEl.innerHTML = "";
  q.options.forEach((opt, i) => {
    const btn = document.createElement("button");
    btn.textContent = opt;
    btn.onclick = () => checkAnswer(i);
    optionsEl.appendChild(btn);
  });
}

function checkAnswer(i) {
  if (i === questions[current].answer) {
    score++;
  }
  nextBtn.style.display = "block";
}

nextBtn.addEventListener("click", () => {
  current++;
  if (current < questions.length) {
    loadQuestion();
    nextBtn.style.display = "none";
  } else {
    localStorage.setItem("quizScore", score);
    location.href = "result.html";
  }
});

loadQuestion();
