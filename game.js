const polishAlphabet = "aąbcćdeęfghijklłmnńoóprsśtuwyzźż".split("");

let level = 1;
let highScore = localStorage.getItem("highScore") || 0;
document.getElementById("highScore").textContent = highScore;

const leftCol = document.getElementById("leftColumn");
const rightCol = document.getElementById("rightColumn");
const levelTitle = document.getElementById("levelTitle");
const feedbackBox = document.getElementById("feedbackBox");
const message = document.getElementById("message");
const nextBtn = document.getElementById("nextBtn");
const checkBtn = document.getElementById("checkBtn");

// Drag&Drop
new Sortable(leftCol, { group: "words", animation: 150 });
new Sortable(rightCol, { group: "words", animation: 150 });

function compareWords(a, b) {
  a = a.toLowerCase();
  b = b.toLowerCase();
  const len = Math.min(a.length, b.length);
  for (let i = 0; i < len; i++) {
    const ca = polishAlphabet.indexOf(a[i]);
    const cb = polishAlphabet.indexOf(b[i]);
    if (ca < cb) return -1;
    if (ca > cb) return 1;
  }
  return a.length - b.length;
}

function shuffle(arr) {
  return [...arr].sort(() => Math.random() - 0.5);
}

function generateLevel() {
  levelTitle.textContent = "Poziom " + level;
  feedbackBox.style.display = "none";
  message.textContent = "";
  nextBtn.style.display = "none";

  leftCol.innerHTML = "";
  rightCol.innerHTML = "";

  const wordsCount = 5 + level;
  let selected = [];

  while (selected.length < wordsCount) {
    const w = words[Math.floor(Math.random() * words.length)];
    if (!selected.includes(w)) selected.push(w);
  }

  selected.forEach(w => {
    const el = document.createElement("div");
    el.className = "word";
    el.textContent = w;
    leftCol.appendChild(el);
  });

  generateLevel.correctOrder = [...selected].sort(compareWords);
}

checkBtn.addEventListener("click", () => {
  const chosen = Array.from(rightCol.querySelectorAll(".word")).map(el => el.textContent);

  if (chosen.length !== generateLevel.correctOrder.length) {
    showFeedback("Musisz przenieść wszystkie słowa", "error", false);
    return;
  }

  const isCorrect = chosen.every((w, i) => w === generateLevel.correctOrder[i]);

  if (isCorrect) {
    if (level > highScore) {
      localStorage.setItem("highScore", level);
      document.getElementById("highScore").textContent = level;
    }
    showFeedback("Dobrze", "success", true);
  } else {
    if (level > highScore) {
      localStorage.setItem("highScore", level);
      document.getElementById("highScore").textContent = level;
    }
    showFeedback("Błąd", "error", false);
  }
});

function showFeedback(text, type, success) {
  feedbackBox.className = "feedback " + type;
  feedbackBox.style.display = "block";
  message.textContent = text;
  nextBtn.style.display = "inline-block";

  if (success) {
    nextBtn.textContent = "Przejdź do kolejnego poziomu";
    nextBtn.onclick = () => {
      level++;
      if (level > 20) {
        message.textContent = "Gratulacje! Ukończyłeś wszystkie poziomy 🎉";
        nextBtn.style.display = "none";
        return;
      }
      generateLevel();
    };
  } else {
    nextBtn.textContent = "Spróbuj jeszcze raz";
    nextBtn.onclick = () => {
      level = 1;
      generateLevel();
    };
  }
}

document.getElementById("resetScore").addEventListener("click", () => {
  localStorage.setItem("highScore", 0);
  document.getElementById("highScore").textContent = 0;
});

generateLevel();
