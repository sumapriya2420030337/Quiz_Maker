const scores = JSON.parse(localStorage.getItem("scores")) || [];
const progressContainer = document.getElementById("progressContainer");

if (scores.length === 0) {
  progressContainer.innerText = "No quiz attempts yet!";
} else {
  scores.forEach((s, i) => {
    const bar = document.createElement("div");
    bar.style.width = s + "%";
    bar.style.background = "#4caf50";
    bar.style.margin = "5px 0";
    bar.style.padding = "5px";
    bar.innerText = `Quiz ${i+1}: ${s}%`;
    progressContainer.appendChild(bar);
  });
}
