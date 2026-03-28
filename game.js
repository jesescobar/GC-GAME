// ============================================
// ENCUENTRA EL BUG - Game Logic
// Girls Code Paraguay
// ============================================
// TODO: Implementar la logica completa del juego
// Este archivo contiene:
//   - Intro screen (typewriter + keypress → welcome)
//   - Navegacion basica entre pantallas
//   - Placeholders para logica de juego
//
// La base de datos de preguntas esta en questions.js (QUESTIONS object)
// ============================================

// ==========================================
// INTRO SCREEN LOGIC
// ==========================================
const INTRO_TEXT = `Hace más de 200 años, Ada Lovelace escribió el primer programa de la historia.\n\nHoy, bugs críticos amenazan su legado...Y solo vos podés repararlos.`;
let introTyping = false;
let introReady = false;
let introCharIndex = 0;
let introTimer = null;

function startIntro() {
  const el = document.getElementById("intro-typewriter");
  const cursor = document.getElementById("typewriter-cursor");
  const prompt = document.getElementById("intro-prompt");

  if (!el) return;

  el.textContent = "";
  introCharIndex = 0;
  introTyping = true;
  introReady = false;

  const chars = INTRO_TEXT.split("");
  const speed = 35; // ms per character

  introTimer = setInterval(() => {
    if (introCharIndex < chars.length) {
      const char = chars[introCharIndex];
      if (char === "\n") {
        el.innerHTML += "<br>";
      } else {
        el.innerHTML += char;
      }
      introCharIndex++;
    } else {
      clearInterval(introTimer);
      introTimer = null;
      introTyping = false;
      introReady = true;
      // Show prompt
      prompt.classList.remove("hidden");
      prompt.style.animation = "promptFadeIn 0.8s ease-out forwards";
    }
  }, speed);
}

function skipIntroText() {
  if (!introTyping) return;
  clearInterval(introTimer);
  introTimer = null;

  const el = document.getElementById("intro-typewriter");
  const prompt = document.getElementById("intro-prompt");

  // Show full text immediately
  el.innerHTML = INTRO_TEXT.replace(/\n/g, "<br>");
  introTyping = false;
  introReady = true;
  prompt.classList.remove("hidden");
  prompt.style.animation = "promptFadeIn 0.8s ease-out forwards";
}

function handleIntroInput() {
  if (introTyping) {
    // First press: skip to end of typewriter
    skipIntroText();
  } else if (introReady) {
    // Second press: transition to welcome
    introReady = false;
    const container = document.querySelector(".intro-container");
    container.classList.add("fade-out");
    setTimeout(() => {
      showScreen("screen-welcome");
    }, 600);
  }
}

// Listen for keypress and click on intro
document.addEventListener("keydown", (e) => {
  const introScreen = document.getElementById("screen-intro");
  if (introScreen && introScreen.classList.contains("active")) {
    handleIntroInput();
  }
});

document.addEventListener("click", (e) => {
  const introScreen = document.getElementById("screen-intro");
  if (introScreen && introScreen.classList.contains("active")) {
    handleIntroInput();
  }
});

// ==========================================
// SCREEN NAVIGATION
// ==========================================
// Placeholder: navegacion basica entre pantallas

let currentLevel = "";
let currentQuestionIndex = 0;
let score = 0;
let timer = null;
let timeLeft = 0;
let questions = [];

const TIME_PER_LEVEL = {
  easy: 15,
  medium: 35,
  advanced: 45,
};

function showScreen(screenId) {
  document
    .querySelectorAll(".screen")
    .forEach((s) => s.classList.remove("active"));
  document.getElementById(screenId).classList.add("active");
}

// ==========================================
// GAME LOGIC PLACEHOLDERS
// ==========================================
function startGame(level) {
  currentLevel = level;
  questions = QUESTIONS[level];
  currentQuestionIndex = 0;
  score = 0;

  document.getElementById("hud-score").textContent = score;
  document.getElementById("hud-level").textContent = level.toUpperCase();

  showScreen("screen-game");
  loadQuestion();
}

function resetGame() {
  showScreen("screen-welcome");
}

function shuffleArray(array) {
  return array.sort(() => Math.random() - 0.5);
}

function loadQuestion() {
  let q = questions[currentQuestionIndex];

  document.getElementById("hud-question").textContent =
    `${currentQuestionIndex + 1}/5`;
  document.getElementById("code-content").textContent = q.code;
  document.getElementById("question-text").textContent = q.question;

  let optionsGrid = document.getElementById("options-grid");
  optionsGrid.innerHTML = "";

  q.options.forEach((opt, index) => {
    let btn = document.createElement("button");
    btn.className = "option-btn";
    btn.innerHTML = `<span class="option-key">${String.fromCharCode(65 + index)}</span> ${opt}`;

    btn.onclick = () => selectAnswer(index);

    optionsGrid.appendChild(btn);
  });

  startTimer();
}

function startTimer() {
  clearInterval(timer);

  timeLeft = TIME_PER_LEVEL[currentLevel];
  document.getElementById("hud-timer").textContent = timeLeft;

  timer = setInterval(() => {
    timeLeft--;
    document.getElementById("hud-timer").textContent = timeLeft;

    let fill = document.getElementById("timer-fill");
    fill.style.width = "100%";

    if (timeLeft <= 0) {
      clearInterval(timer);
      showFeedback(false, true);
    }
  }, 1000);
}

function selectAnswer(index) {
  clearInterval(timer);

  let correct = questions[currentQuestionIndex].correct === index;

  if (correct) {
    score += 10;
    document.getElementById("hud-score").textContent = score;
  }

  showFeedback(correct, false);
}

function showFeedback(isCorrect, isTimeout) {
  let q = questions[currentQuestionIndex];
  let container = document.getElementById("feedback-container");

  let title = isTimeout
    ? "Tiempo agotado"
    : isCorrect
      ? "Correcto"
      : "Incorrecto";

  container.innerHTML = `
    <div class="feedback-card ${isTimeout ? "timeout" : isCorrect ? "success" : "failure"}">
      <span class="feedback-icon">${isCorrect ? "🎉" : "⚠️"}</span>
      <h3 class="feedback-title">${title}</h3>
      <p class="feedback-explanation">${q.explanation}</p>
      <button class="feedback-btn" onclick="nextQuestion()">Continuar</button>
    </div>
  `;

  showScreen("screen-feedback");
}

function nextQuestion() {
  currentQuestionIndex++;

  if (currentQuestionIndex >= questions.length) {
    showResults();
  } else {
    showScreen("screen-game");
    loadQuestion();
  }
}

function showResults() {
  document.getElementById("final-score").textContent = score;

  let message =
    score >= 40
      ? "Sos un/a crack encontrando bugs!"
      : "Seguí practicando, vas muy bien!";

  document.getElementById("results-message").textContent = message;

  showScreen("screen-results");
}

// ==========================================
// INIT
// ==========================================
document.addEventListener("DOMContentLoaded", () => {
  // Start intro typewriter after a brief delay
  setTimeout(startIntro, 800);
});
