/* js/components/result.js — Result Calculations, Renders, and Memo Download */
import { topicDetails } from './quiz-data-details.js';
import { topicMap } from './quiz-data.js';
import { escapeHtml } from '../utils.js';

export function calculateResult(answers) {
  const score = Object.values(answers).reduce((a, b) => a + b, 0);
  const risks = Object.entries(answers).filter(([_, v]) => v < 2).map(([k]) => Number(k));

  let title = "Пока это коллективная галлюцинация.", decision = "talk";
  let lead = "Идея может быть прекрасной, но партнёрство пока существует преимущественно в воображении. Сначала роли, деньги, власть, права и выход. Потом синергия.";
  let quote = "Будущие миллионы уже поделены. Настоящая ответственность пока нет. Начнём с неё.";

  if (score >= 17) {
    title = "Можно входить. Но не на честном слове.";
    lead = "Каркас партнёрства у вас есть. Теперь превратите понимание в письменные правила, проведите пилот и не решайте, что высокий балл выдаёт иммунитет от конфликтов.";
    quote = "Вы уже похожи на партнёров, а не на двух людей, которым одновременно понравилась одна идея. Это обнадёживает. Документы всё равно нужны.";
    decision = "go";
  } else if (score >= 12) {
    title = "Потенциал есть. Договорённостей пока меньше.";
    lead = "Из этого может получиться сильный продукт, но часть конструкции держится на предположениях. Сначала закройте разговоры ниже — иначе они всё равно состоятся, только дороже.";
    quote = "Сейчас вам нужен не ещё один вдохновляющий созвон. Вам нужен один неудобный, но очень конкретный.";
    decision = "pilot";
  } else if (score >= 7) {
    title = "Только пилот. Никаких империй.";
    lead = "Пока у вас больше взаимного интереса, чем рабочей системы. Проверьте друг друга на коротком цикле и не создавайте активы, которые потом придётся делить лопатой.";
    quote = "Не покупайте корпоративный домен до первого совместного дедлайна. Это не суеверие. Это экономия.";
    decision = "pilot";
  }

  return { score, risks, title, lead, quote, decision };
}

export function renderResult(score, risks, title, lead, quote, decision, notes, openRisks) {
  const topics = risks.length ? risks : [7, 8, 9];
  const riskCardsHtml = topics.map((k, index) => {
    const d = topicDetails[k];
    const isOpen = openRisks.includes(k);
    return `
      <div class="risk-card ${isOpen ? 'open' : ''}" data-risk-id="${k}">
        <div class="risk-head btn-press">
          <div class="risk-number">${index + 1}</div>
          <div style="flex:1; text-align:left;">
            <div class="risk-title">${d.title}</div>
            <div class="risk-sub">${d.sub}</div>
          </div>
          <div class="risk-toggle">${isOpen ? '−' : '+'}</div>
        </div>
        <div class="risk-body" style="${isOpen ? 'display:block;' : 'display:none;'}">
          <div class="risk-block why"><b>Почему это важно</b>${d.why}</div>
          <div class="risk-block ask"><b>Что спросить друг у друга</b>${d.ask.map(x => "— " + x).join("<br>")}</div>
          <div class="risk-block fix"><b>Что должно появиться после разговора</b>${d.fix}</div>
          <div class="risk-block start"><b>Как начать, не включая корпоративного робота</b>${d.start}</div>
        </div>
      </div>
    `;
  }).join('');

  const notesFilled = Object.entries(notes).filter(([_, v]) => v.trim());
  const notesHtml = notesFilled.length 
    ? notesFilled.map(([k, v]) => `<p><strong>${topicMap[k]}:</strong><br>${escapeHtml(v)}</p>`).join('')
    : '<p>Заметок нет. Возможно, вы всё держите в голове. Там же обычно лежат доступы и устные доли.</p>';

  return `
    <div class="step active" data-step="11" data-title="Результат">
      <div class="kicker">Диагностика завершена</div>

      <div class="result-hero">
        <div class="eyebrow">Ваш партнёрский диагноз</div>
        <h2 id="resultTitle">${title}</h2>
        <p id="resultLead">${lead}</p>
      </div>

      <div class="score-grid">
        <div class="score-card"><b id="scoreValue">${score}/20</b><span class="muted">готовность к партнёрству</span></div>
        <div class="score-card"><b id="riskValue">${risks.length}</b><span class="muted">разговоров, которые лучше провести до запуска</span></div>
      </div>

      <div class="microcopy" id="resultQuote">${quote}</div>

      <h3>Не просто «что обсудить», а что именно с этим делать</h3>
      <p class="muted">Нажимайте на карточки. Внутри — смысл, вопросы, договорённость и готовая фраза для начала разговора.</p>
      
      <div id="riskStack" class="risk-stack">
        ${riskCardsHtml}
      </div>

      <div class="memo">
        <h3>Какой следующий шаг разумнее</h3>
        <div class="decision-grid" id="decisionGrid">
          <div class="decision ${decision === 'talk' ? 'active' : ''}" data-decision="talk"><strong>Переговоры</strong>Сначала закрыть спорные вопросы и только потом считать запуск.</div>
          <div class="decision ${decision === 'pilot' ? 'active' : ''}" data-decision="pilot"><strong>Пилот</strong>Один небольшой продукт, ограниченный бюджет и точка пересмотра.</div>
          <div class="decision ${decision === 'go' ? 'active' : ''}" data-decision="go"><strong>Запуск</strong>Можно идти дальше, но договорённости всё равно фиксируем письменно.</div>
        </div>
      </div>

      <div class="memo">
        <h3>Ваши заметки</h3>
        <div id="notesList" class="muted">${notesHtml}</div>
      </div>

      <div class="actions">
        <button class="secondary" id="restart-btn">Пройти заново</button>
        <button class="primary" id="download-btn">Скачать переговорную шпаргалку</button>
      </div>
    </div>
  `;
}

export function downloadMemo(answers, notes) {
  const res = calculateResult(answers);
  const topics = res.risks.length ? res.risks : [7, 8, 9];

  let text = `НЕ 50/50\nПереговорная шпаргалка по партнёрству\n\n`;
  text += `РЕЗУЛЬТАТ\n${res.title}\n${res.lead}\nБаллы: ${res.score}/20\n\n`;
  text += `РАЗГОВОРЫ, КОТОРЫЕ НУЖНО ПРОВЕСТИ\n`;

  topics.forEach((k, i) => {
    const d = topicDetails[k];
    text += `\n${i + 1}. ${d.title}\n`;
    text += `Почему важно: ${d.why}\n`;
    text += `Что спросить:\n${d.ask.map(x => "— " + x).join("\n")}\n`;
    text += `Что зафиксировать: ${d.fix}\n`;
    text += `Начать можно так: ${d.start}\n`;
  });

  text += `\nМОИ ЗАМЕТКИ\n`;
  const filled = Object.entries(notes).filter(([_, v]) => v.trim());
  if (!filled.length) {
    text += `Заметок нет. Значит, первый шаг — пройти вопросы вместе с партнёром.\n`;
  } else {
    filled.forEach(([k, v]) => {
      text += `\n${topicMap[k]}:\n${v}\n`;
    });
  }

  text += `\nГлавное: партнёрство вдолгую начинается не там, где вы во всём совпали, а там, где перестали совпадать — и всё-таки смогли договориться.\n`;

  const blob = new Blob([text], { type: "text/plain;charset=utf-8" });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = "ne-50-50-peregovornaya-shpargalka.txt";
  a.click();
  URL.revokeObjectURL(url);
}


