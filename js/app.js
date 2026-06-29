// js/app.js
// Главная точка входа приложения "Партнёрский Симулятор Дохода 2.0"

import { initIcons } from './utils.js';
import { renderQuizStep, QUIZ_STEPS } from './components/quiz.js';
import { renderResult } from './components/result.js';

let currentState = {
  stepIndex: -1, // -1: Start, 0..2: Quiz steps, 3: Loading, 4: Result
  answers: {}
};

function render() {
  const appEl = document.getElementById('app');
  if (!appEl) return;

  if (currentState.stepIndex >= -1 && currentState.stepIndex < QUIZ_STEPS.length) {
    appEl.innerHTML = `
      <main class="max-w-xl mx-auto px-4 pt-6 pb-8 safe-top safe-bottom">
        ${renderQuizStep(currentState.stepIndex, currentState.answers)}
      </main>
    `;
    bindQuizEvents();
  } else if (currentState.stepIndex === QUIZ_STEPS.length) {
    // Эран загрузки / симуляции
    appEl.innerHTML = `
      <main class="max-w-xl mx-auto px-4 pt-12 pb-8 safe-top safe-bottom">
        <div class="card p-8 text-center space-y-6 fade-in">
          <div class="w-12 h-12 border-4 border-indigo-500 border-t-transparent rounded-full animate-spin mx-auto"></div>
          <div class="space-y-2">
            <h3 class="text-lg font-bold text-slate-100">Генерация персональной модели...</h3>
            <p class="text-xs text-slate-400">Анализ ресурсов • Расчёт потенциала • Построение связок</p>
          </div>
        </div>
      </main>
    `;
    setTimeout(() => {
      currentState.stepIndex++;
      render();
    }, 1200);
  } else {
    // Финальный результат
    appEl.innerHTML = `
      <main class="max-w-xl mx-auto px-4 pt-6 pb-8 safe-top safe-bottom">
        ${renderResult(currentState.answers)}
        <div class="text-center mt-4">
          <button id="restart-btn" class="text-xs text-slate-400 hover:text-slate-200 underline btn-press">
            ↺ Пройти симулятор заново
          </button>
        </div>
      </main>
    `;
    bindResultEvents();
  }

  initIcons();
}

function bindQuizEvents() {
  const startBtn = document.getElementById('start-quiz-btn');
  if (startBtn) {
    startBtn.addEventListener('click', () => {
      currentState.stepIndex = 0;
      render();
    });
  }

  document.querySelectorAll('.quiz-opt-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const optId = btn.getAttribute('data-opt-id');
      const currentStep = QUIZ_STEPS[currentState.stepIndex];
      if (currentStep) {
        currentState.answers[currentStep.id] = optId;
        currentState.stepIndex++;
        render();
      }
    });
  });
}

function bindResultEvents() {
  const restartBtn = document.getElementById('restart-btn');
  if (restartBtn) {
    restartBtn.addEventListener('click', () => {
      currentState.stepIndex = -1;
      currentState.answers = {};
      render();
    });
  }
}

function initApp() {
  render();
}

initApp();
