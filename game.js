// ============================================
// ENCUENTRA EL BUG - Game Logic
// Girls Code Paraguay
// ============================================
// TODO: Implementar la logica del juego
// Este archivo sera completado por el equipo
//
// Funciones necesarias:
// - showScreen(screenId): Cambiar entre pantallas
// - startGame(level): Iniciar juego con nivel 'medium' o 'advanced'
// - resetGame(): Reiniciar el juego
// - Logica de timer, puntuacion, y feedback
// - Particulas/estrellas en el canvas de fondo
//
// La base de datos de preguntas esta en questions.js (QUESTIONS object)
// Las citas inspiracionales estan en questions.js (WOMEN_QUOTES array)
// ============================================

// Placeholder: navegacion basica entre pantallas
function showScreen(screenId) {
    document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));
    document.getElementById(screenId).classList.add('active');
}

function startGame(level) {
    // TODO: implementar logica completa del juego
    showScreen('screen-game');
}

function resetGame() {
    showScreen('screen-welcome');
}
