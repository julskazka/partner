(function () {
  'use strict';

// --- Source: \js\components\quiz-data-details.js ---
/* js/components/quiz-data-details.js — Detailed Risk Descriptions and Explanations */
const topicDetails = {
  1: {
    title: "Вы пока не доказали, зачем вам именно этот партнёр",
    sub: "Большая база — это полезно. Но это ещё не основание строить общий продукт.",
    why: "Если вы приносите в проект одно и то же, начнётся борьба за одну роль. Если ценность партнёра только в аудитории — перед вами скорее рекламный канал, а не соавтор бизнеса.",
    ask: ["Что каждый приносит кроме аудитории?", "Что мы создадим вместе, чего не соберём по отдельности?", "Что исчезнет из продукта, если один выйдет?"],
    fix: "Одностраничную карту вклада: компетенции, аудитория, активы, время, команда, деньги и зона незаменимости каждого.",
    start: "«Давай не будем пока делить прибыль. Сначала честно выпишем, зачем мы вообще нужны друг другу»."
  },
  2: {
    title: "Общий продукт пока не собран",
    sub: "Два сильных модуля ещё не дают одного сильного результата.",
    why: "Когда каждый отвечает только за свою часть, клиент получает набор знаний, но никто не отвечает за путь целиком. Итог обычно красивый, модульный и слегка бесхозный.",
    ask: ["Какой один результат получит клиент?", "В какой последовательности он к нему идёт?", "Кто имеет право менять общую методологию?"],
    fix: "Одну фразу «После продукта клиент сможет…» и карту пути от входа до измеримого результата.",
    start: "«Давай попробуем отдельно друг от друга закончить фразу: после нашего продукта человек сможет…»."
  },
  3: {
    title: "Ответственность размыта",
    sub: "«Мы всё делаем вместе» — фраза, после которой задачи начинают жить собственной жизнью.",
    why: "Если у функции два ответственных, в кризис у неё часто не оказывается ни одного. Совместное обсуждение полезно. Совместная персональная ответственность — мифическое животное.",
    ask: ["Кто отвечает за продажи, продукт, маркетинг, команду и финансы?", "Что этот человек решает самостоятельно?", "Как измеряется результат его зоны?"],
    fix: "Таблицу функций с одним владельцем, сроками, метрикой и правом финального решения.",
    start: "«Давай найдём не тех, кто участвует, а одного человека, чья фамилия стоит напротив результата»."
  },
  4: {
    title: "Ваше 50/50 пока держится на вежливости",
    sub: "Пополам — не всегда честно. Иногда просто считать неудобно.",
    why: "Доля, зарплата, инвестиции, займ, бренд и операционная работа — разные виды вклада. Если смешать их в один процент, конфликт просто получит отсрочку.",
    ask: ["Какие расходы вычитаются до деления?", "Оплачивается ли операционная работа отдельно?", "Кто несёт финансовый риск?", "Что происходит, если вклад меняется?"],
    fix: "Финансовую модель: общие расходы → возврат вложений → оплата функций → распределение чистой прибыли.",
    start: "«Давай на время забудем проценты и сначала посчитаем функции, деньги, риски и часы»."
  },
  5: {
    title: "У вас нет правила на случай несогласия",
    sub: "Пока совпадают мнения, кажется, что власть вообще не нужна.",
    why: "Равные партнёры не обязаны вместе принимать каждое решение. Иначе скорость проекта равна скорости самого долгого спора.",
    ask: ["У кого последнее слово в каждой зоне?", "Какие решения требуют общего согласия?", "Что делаем, если не договорились за один разговор?"],
    fix: "Карту полномочий и короткий протокол тупика: пауза, данные, третий эксперт или заранее выбранный решающий голос.",
    start: "«В каких вопросах ты готов доверить мне финальное решение, а в каких мне нужно довериться тебе?»"
  },
  6: {
    title: "Вы по-разному понимаете результат клиента",
    sub: "Это выглядит методологическим нюансом, пока не превращается в четырёхчасовой разговор.",
    why: "Один эксперт может считать, что ученика нужно дотащить до запуска. Другой — что после знаний, разбора и обратной связи действие остаётся ответственностью взрослого человека. Оба могут быть правы. Но продукт у них получается разный.",
    ask: ["Что мы гарантируем?", "Сколько попыток вернуть ученика в процесс делаем?", "Где заканчивается сопровождение?", "Что считаем успешным завершением?"],
    fix: "Стандарт сопровождения: обязательства экспертов, обязательства ученика, критерий результата и действия при выпадении.",
    start: "«Что конкретно мы обязаны сделать, прежде чем честно сказать: дальше кнопка на стороне ученика?»"
  },
  7: {
    title: "Конфликт у вас пока без инструкции",
    sub: "«Мы взрослые люди и договоримся» — прекрасная вводная. Инструкцией она не является.",
    why: "Замалчивание не сохраняет отношения. Оно просто даёт претензии время вырасти, получить образование и начать управлять проектом.",
    ask: ["Когда поднимаем проблему?", "Что нельзя писать на эмоциях?", "Сколько длится пауза?", "Когда зовём медиатора?"],
    fix: "Правила честного диалога без трусов: сроки, формат, запреты, право на паузу и обязательный итог разговора.",
    start: "«Я не хочу сейчас доказать, кто прав. Я хочу понять, какое правило нам нужно, чтобы это не повторялось»."
  },
  8: {
    title: "Активы проекта существуют в режиме «ну это наше»",
    sub: "Устная доля, общий пароль и домен на личной почте — три всадника партнёрского апокалипсиса.",
    why: "Юрлицо, код, бренд, база, записи и доступы могут принадлежать разным людям. Пока всё хорошо, это почти незаметно. Когда плохо — внезапно становится единственным важным.",
    ask: ["Кому принадлежат материалы, база, бренд, код и домены?", "У кого есть резервные доступы?", "Можно ли использовать активы вне проекта?"],
    fix: "Реестр активов: владелец, юридическое основание, место хранения, доступы и правила использования после выхода.",
    start: "«Давай соберём всё, что мы уже считаем общим, и проверим, кому оно принадлежит на самом деле»."
  },
  9: {
    title: "Вы не обсудили выход",
    sub: "Плохая примета — не разговор о расставании. Плохая примета — делить базу в момент расставания.",
    why: "Если выхода нет на бумаге, его всё равно придётся придумать. Только уже в конфликте, с деньгами, клиентами и испорченной памятью о первоначальных обещаниях.",
    ask: ["За какой срок предупреждаем?", "Можно ли выкупить долю и как её оценить?", "Кому остаются клиенты, материалы и команда?", "Кто закрывает обязательства?"],
    fix: "Сценарий выхода с формулой расчёта, сроками передачи дел, судьбой активов и запретом на внезапное исчезновение.",
    start: "«Я хочу обсудить выход не потому, что планирую уйти, а потому, что не хочу однажды разрушить то, что мы сейчас строим»."
  },
  10: {
    title: "Вы собираетесь сразу строить империю",
    sub: "Для начала неплохо бы вместе пережить один дедлайн.",
    why: "Пилот показывает не только спрос. Он показывает, как партнёр принимает решения, соблюдает сроки, ведёт себя при слабых продажах и делит публичность.",
    ask: ["Что можно проверить за 2–6 недель?", "Какой бюджет ограничиваем?", "По каким критериям продолжаем?", "Когда пересматриваем роли и доли?"],
    fix: "Паспорт пилота: результат, сроки, бюджет, роли, метрики, точка ретроспективы и право не продолжать.",
    start: "«Давай не обещать друг другу вечность. Давай сначала сделаем один ограниченный цикл и честно его разберём»."
  }
};


// --- Source: \js\components\quiz-data.js ---
/* js/components/quiz-data.js — Quiz Steps Core */



const QUIZ_STEPS = [...STEPS_1_5, ...STEPS_6_10];

const topicMap = {
  1: "Зачем нужен именно этот партнёр и чем ваши компетенции дополняются",
  2: "Единый результат продукта и ответственность за методологию",
  3: "Роли и персональная ответственность по каждой функции",
  4: "Финансовая модель: доли, расходы, зарплаты, инвестиции и риск",
  5: "Право принимать решения и последнее слово в каждой зоне",
  6: "Границы ответственности за результат клиента",
  7: "Правила конфликта и формат сложного разговора",
  8: "Права на продукт, бренд, базу, код, материалы и доступы",
  9: "Сценарий выхода из партнёрства",
  10: "Пилотный запуск и критерии продолжения"
};


// --- Source: \js\components\intro.js ---
/* js/components/intro.js — Intro Screen Component */
function renderIntro() {
  return `
    <div class="step active" data-step="0">
      <div class="kicker">Интерактивная шпаргалка</div>
      <h1>Как зайти в партнёрство и не убить друг друга</h1>
      <p class="lead">
        Это не тест на совместимость и не попытка поставить диагноз вашему будущему партнёру по десяти вопросам.
        Это способ заранее увидеть места, где обычно ломаются сильные, на первый взгляд, союзы.
      </p>

      <div class="quote">
        Отвечая на вопросы, вы проверите не «нравитесь ли вы друг другу», а собрана ли сама конструкция:
        продукт, роли, деньги, власть, ответственность, права и выход.
      </div>

      <div class="what-you-get">
        <div class="what-card">
          <b>1. Получите диагноз</b>
          Поймёте, можно ли уже запускаться, нужен ли сначала пилот или пока рано делить будущие миллионы.
        </div>
        <div class="what-card">
          <b>2. Увидите слабые места</b>
          Не общими словами, а по конкретным зонам: где размыты роли, где не посчитаны деньги, где нет правил конфликта.
        </div>
        <div class="what-card">
          <b>3. Заберёте шпаргалку</b>
          В конце получите готовые вопросы, формулировки для разговора и список того, что нужно зафиксировать до запуска.
        </div>
      </div>

      <p class="muted">
        Пустые поля на шагах — не обязательная домашка. Это место, куда можно записать свою формулировку,
        чтобы она попала в итоговую шпаргалку. Не хотите писать сейчас — пропускайте без чувства вины.
      </p>

      <div class="fun-block" style="margin-top:22px;">
        <strong>Рекомендация:</strong> пройдите эту шпаргалку с будущим партнёром — но сначала каждый отдельно, без предварительного обсуждения ответов.
        Потом сравните результаты. Это легальный способ почитать ожидания и фантазии друг друга до того, как они станут бюджетом, ролями и взаимными претензиями :)
      </div>

      <div class="actions">
        <span></span>
        <button class="accent" id="start-btn">Проверить партнёрство</button>
      </div>
    </div>
  `;
}


// --- Source: \js\components\quiz-step.js ---
/* js/components/quiz-step.js — Quiz Question Screen Component */
function renderQuizStep(step, answers, notes, showInsight1, showInsight4) {
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


// --- Source: \js\components\result.js ---
/* js/components/result.js — Result Calculations, Renders, and Memo Download */




function calculateResult(answers) {
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

function renderResult(score, risks, title, lead, quote, decision, notes, openRisks) {
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

function downloadMemo(answers, notes) {
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




// --- Source: \js\app.js ---
/* js/app.js — Interactive Quiz State and Event Controller */




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



})();
