// Polski alfabet
const polishAlphabet = "aąbcćdeęfghijklłmnńoóprsśtuwyzźż".split("");

let level = 1;
let highScore = localStorage.getItem("highScore") || 0;
document.getElementById("highScore").textContent = highScore;

const leftCol = document.getElementById("leftColumn");
const rightCol = document.getElementById("rightColumn");
const levelTitle = document.getElementById("levelTitle");
const message = document.getElementById("message");

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

// wybiera słowa zaczynające się od tej samej litery
function pickWordsWithSamePrefix(words, prefix, count, minLength = 3) {
  const group = words.filter(w => w.startsWith(prefix) && w.length >= minLength);
  return shuffle(group).slice(0, count);
}

function shuffle(arr) {
  return [...arr].sort(() => Math.random() - 0.5);
}

// Generowanie poziomu
function generateLevel() {
  levelTitle.textContent = "Poziom " + level;
  message.textContent = "";

  leftCol.innerHTML = "";
  rightCol.innerHTML = "";

  const wordsCount = 5 + level;
  let selected = [];

  if (level <= 5) {
    // różne litery na początku
    selected = shuffle(words).slice(0, wordsCount);
  } else if (level <= 10) {
    // część z tą samą pierwszą literą
    const baseLetter = polishAlphabet[Math.floor(Math.random() * polishAlphabet.length)];
    const tricky = pickWordsWithSamePrefix(words, baseLetter, Math.min(3, wordsCount));
    const others = shuffle(words.filter(w => !w.startsWith(baseLetter))).slice(0, wordsCount - tricky.length);
    selected = shuffle([...tricky, ...others]);
  } else if (level <= 15) {
    // kilka grup o tej samej pierwszej literze
    const baseLetters = shuffle(polishAlphabet).slice(0, 2);
    let tricky = [];
    baseLetters.forEach(letter => {
      tricky = tricky.concat(pickWordsWithSamePrefix(words, letter, 2));
    });
    const others = shuffle(words.filter(w => !baseLetters.some(l => w.startsWith(l)))).slice(0, wordsCount - tricky.length);
    selected = shuffle([...tricky, ...others]);
  } else {
    // bardzo trudne: słowa różniące się dopiero na 3 literze
    const basePrefix = shuffle(words).find(w => w.length > 3)?.substring(0, 2);
    const tricky = pickWordsWithSamePrefix(words, basePrefix, 3, 4);
    const others = shuffle(words.filter(w => !w.startsWith(basePrefix))).slice(0, wordsCount - tricky.length);
    selected = shuffle([...tricky, ...others]);
  }

  selected.forEach(w => {
    const el = document.createElement("div");
    el.className = "word";
    el.textContent = w;
    leftCol.appendChild(el);
  });

  generateLevel.correctOrder = [...selected].sort(compareWords);
}

document.getElementById("checkBtn").addEventListener("click", () => {
  const chosen = Array.from(rightCol.querySelectorAll(".word")).map(el => el.textContent);

  if (chosen.length !== generateLevel.correctOrder.length) {
    message.textContent = "Musisz przenieść wszystkie słowa!";
    return;
  }

  const isCorrect = chosen.every((w, i) => w === generateLevel.correctOrder[i]);

  if (isCorrect) {
    message.textContent = "Dobrze!";
    level++;
    if (level > 20) {
      message.textContent = "Gratulacje! Ukończyłeś wszystkie poziomy 🎉";
      if (level - 1 > highScore) {
        localStorage.setItem("highScore", level - 1);
        document.getElementById("highScore").textContent = level - 1;
      }
      return;
    }
    if (level > highScore) {
      localStorage.setItem("highScore", level);
      document.getElementById("highScore").textContent = level;
    }
    setTimeout(generateLevel, 1200);
  } else {
    message.textContent = "Błąd. Dotarłeś do poziomu " + level;
    if (level > highScore) {
      localStorage.setItem("highScore", level);
      document.getElementById("highScore").textContent = level;
    }
    level = 1;
    setTimeout(generateLevel, 2000);
  }
});

document.getElementById("resetScore").addEventListener("click", () => {
  localStorage.setItem("highScore", 0);
  document.getElementById("highScore").textContent = 0;
});

generateLevel();
