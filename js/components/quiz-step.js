/* js/components/quiz-step.js — Quiz Question Screen Component */
export function renderQuizStep(step, answers, notes, showInsight1, showInsight4) {
  const optionsHtml = step.options.map(opt => {
    const isChecked = answers[step.id] === opt.value;
    return `
      <label class="option">
        <input type="radio" name="q${step.id}" value="${opt.value}" ${isChecked ? 'checked' : ''}>
        <span>
          <strong>${opt.label}</strong>
          <small>${opt.desc}</small>
        </span>
      </label>
    `;
  }).join('');

  const currentNoteVal = notes[step.id] || '';

  return `
    <div class="step active" data-step="${step.id}" data-title="${step.title}">
      <div class="badge">${step.badge}</div>
      <h2>${step.question}</h2>
      <p class="lead">${step.lead}</p>
      
      <div class="options">
        ${optionsHtml}
      </div>

      <div class="field-wrap">
        <label class="field-label" for="note${step.id}">Ваша формулировка<span class="optional">необязательно</span></label>
        <span class="field-help">Коротко запишите свои мысли. Это попадёт в итоговую шпаргалку.</span>
        <textarea id="note${step.id}" placeholder="${step.placeholder || 'Запишите сюда формулировку...'}">${currentNoteVal}</textarea>
      </div>

      <!-- Dynamic Insights -->
      ${step.id === 1 ? `
        <div class="insight bad ${showInsight1 ? 'show' : ''}" id="insight1">
          Если основная ценность партнёра — доступ к базе, это ещё не партнёрство. Это канал трафика в человеческом теле.
        </div>
      ` : ''}

      ${step.id === 4 ? `
        <div class="insight ${showInsight4 ? 'show' : ''}" id="insight4">
          Важно разделить: долю, зарплату за операционную работу, инвестиции и займ. Это четыре разных договора, даже если пока они живут в одном голосовом сообщении.
        </div>
      ` : ''}

      ${step.fun ? `
        <div class="fun-block">${step.fun}</div>
      ` : ''}

      <div class="actions">
        <button class="secondary" id="prev-btn">Назад</button>
        <button class="primary" id="next-btn">${step.id === 10 ? 'Получить результат' : 'Дальше'}</button>
      </div>
    </div>
  `;
}
