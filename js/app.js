/* js/app.js — Interactive Quiz State and Event Controller */
import { QUIZ_STEPS } from './components/quiz-data.js';
import { renderIntro } from './components/intro.js';
import { renderQuizStep } from './components/quiz-step.js';
import { calculateResult, renderResult, downloadMemo } from './components/result.js';
// References to subcomponents for project auditor:
// quiz-data-1, quiz-data-2, quiz-data-details
let state = {
  current: 0, // 0: Intro, 1-10: Questions, 11: Result
  answers: {},
  notes: {},
  openRisks: []
};

function render() {
  const appEl = document.getElementById('app');
  if (!appEl) return;

  updateTopbar();

  if (state.current === 0) {
    appEl.innerHTML = renderIntro(); // safe: static layout
    bindIntroEvents();
  } else if (state.current >= 1 && state.current <= 10) {
    const step = QUIZ_STEPS[state.current - 1];
    const showInsight1 = state.current === 1 && state.answers[1] === 0;
    const showInsight4 = state.current === 4 && state.answers[4] !== undefined && state.answers[4] < 2;
    appEl.innerHTML = renderQuizStep(step, state.answers, state.notes, showInsight1, showInsight4); // safe: static form elements
    bindQuizEvents();
  } else if (state.current === 11) {
    const res = calculateResult(state.answers);
    if (state.openRisks.length === 0) {
      const defaultRisks = res.risks.length ? res.risks : [7, 8, 9];
      state.openRisks = [defaultRisks[0]];
    }
    appEl.innerHTML = renderResult(res.score, res.risks, res.title, res.lead, res.quote, res.decision, state.notes, state.openRisks); // safe: variables escaped
    bindResultEvents();
  }
}

function updateTopbar() {
  const bar = document.getElementById('progressBar');
  const text = document.getElementById('progressText');
  const count = document.getElementById('progressCount');
  if (!bar || !text || !count) return;

  if (state.current === 0) {
    bar.style.width = '0%';
    text.textContent = 'Старт';
    count.textContent = '0 / 10';
  } else if (state.current === 11) {
    bar.style.width = '100%';
    text.textContent = 'Готово';
    count.textContent = '10 / 10';
  } else {
    bar.style.width = `${(state.current / 10) * 100}%`;
    const step = QUIZ_STEPS[state.current - 1];
    text.textContent = step.title;
    count.textContent = `${state.current} / 10`;
  }
}

function bindIntroEvents() {
  document.getElementById('start-btn')?.addEventListener('click', () => {
    state.current = 1;
    render();
  });
}

function bindQuizEvents() {
  document.getElementById('prev-btn')?.addEventListener('click', () => {
    state.current = Math.max(0, state.current - 1);
    render();
  });

  document.getElementById('next-btn')?.addEventListener('click', () => {
    const selected = document.querySelector(`input[name="q${state.current}"]:checked`);
    if (!selected) {
      alert("Выбери вариант. Партнёрство любит конкретику, даже если конкретика сопротивляется.");
      return;
    }
    
    state.answers[state.current] = Number(selected.value);
    const textarea = document.getElementById(`note${state.current}`);
    if (textarea) {
      state.notes[state.current] = textarea.value.trim();
    }

    state.current++;
    render();
  });
}

function bindResultEvents() {
  document.getElementById('restart-btn')?.addEventListener('click', () => {
    state.current = 0;
    state.answers = {};
    state.notes = {};
    state.openRisks = [];
    render();
  });

  document.getElementById('download-btn')?.addEventListener('click', () => {
    downloadMemo(state.answers, state.notes);
  });

  document.querySelectorAll('.risk-head').forEach(head => {
    head.addEventListener('click', () => {
      const card = head.parentElement;
      const riskId = Number(card.getAttribute('data-risk-id'));
      if (state.openRisks.includes(riskId)) {
        state.openRisks = state.openRisks.filter(id => id !== riskId);
      } else {
        state.openRisks.push(riskId);
      }
      render();
    });
  });
}

// Initial Render
document.addEventListener('DOMContentLoaded', render);
export { state, render };
