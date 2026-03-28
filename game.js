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
const INTRO_TEXT = `\n\nHace más de 200 años, Ada Lovelace escribió el primer programa de la historia.\n\nHoy, bugs críticos amenazan su legado... y solo vos podés repararlos.`;

let introTyping = false;
let introReady = false;
let introCharIndex = 0;
let introTimer = null;

function startIntro() {
    const el = document.getElementById('intro-typewriter');
    const cursor = document.getElementById('typewriter-cursor');
    const prompt = document.getElementById('intro-prompt');

    if (!el) return;

    el.textContent = '';
    introCharIndex = 0;
    introTyping = true;
    introReady = false;

    const chars = INTRO_TEXT.split('');
    const speed = 35; // ms per character

    introTimer = setInterval(() => {
        if (introCharIndex < chars.length) {
            const char = chars[introCharIndex];
            if (char === '\n') {
                el.innerHTML += '<br>';
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
            prompt.classList.remove('hidden');
            prompt.style.animation = 'promptFadeIn 0.8s ease-out forwards';
        }
    }, speed);
}

function skipIntroText() {
    if (!introTyping) return;
    clearInterval(introTimer);
    introTimer = null;

    const el = document.getElementById('intro-typewriter');
    const prompt = document.getElementById('intro-prompt');

    // Show full text immediately
    el.innerHTML = INTRO_TEXT.replace(/\n/g, '<br>');
    introTyping = false;
    introReady = true;
    prompt.classList.remove('hidden');
    prompt.style.animation = 'promptFadeIn 0.8s ease-out forwards';
}

function handleIntroInput() {
    if (introTyping) {
        // First press: skip to end of typewriter
        skipIntroText();
    } else if (introReady) {
        // Second press: transition to welcome
        introReady = false;
        const container = document.querySelector('.intro-container');
        container.classList.add('fade-out');
        setTimeout(() => {
            showScreen('screen-welcome');
        }, 600);
    }
}

// Listen for keypress and click on intro
document.addEventListener('keydown', (e) => {
    const introScreen = document.getElementById('screen-intro');
    if (introScreen && introScreen.classList.contains('active')) {
        handleIntroInput();
    }
});

document.addEventListener('click', (e) => {
    const introScreen = document.getElementById('screen-intro');
    if (introScreen && introScreen.classList.contains('active')) {
        handleIntroInput();
    }
});

// ==========================================
// SCREEN NAVIGATION
// ==========================================
function showScreen(screenId) {
    document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));
    document.getElementById(screenId).classList.add('active');
}

// ==========================================
// GAME LOGIC PLACEHOLDERS
// ==========================================
function startGame(level) {
    // TODO: implementar logica completa del juego
    showScreen('screen-game');
}

function resetGame() {
    showScreen('screen-welcome');
}

// ==========================================
// INIT
// ==========================================
document.addEventListener('DOMContentLoaded', () => {
    // Start intro typewriter after a brief delay
    setTimeout(startIntro, 800);
});
