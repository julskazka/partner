// js/components/result.js
// Компонент результатов и финансовой модели симулятора

const RESULT_MODELS = {
  novice: {
    badge: 'Партнёр 0 (Новичок)',
    title: 'Модель: Старт через микро-партнёрства',
    potential: '5 000 – 30 000 ₽ / мес',
    actions: ['Выбрать 1 целевую нишу', 'Найти 3 подходящих партнёров', 'Запустить простую связку'],
    leaks: ['Нет системного процесса', 'Хаотичный выбор партнёров', 'Отсутствие готовой связки']
  },
  product: {
    badge: 'Партнёр 1 (Есть продукт)',
    title: 'Модель: Оффер ➔ Партнёрские источники',
    potential: 'x2 – x5 Рост выручки',
    actions: ['Упаковать оффер для партнеров', 'Подключить первые трафик-каналы', 'Запустить партнёрскую сеть'],
    leaks: ['Есть продукт, но нет трафик-системы', 'Отсутствие партнерских выплат', 'Ручные продажи']
  },
  audience: {
    badge: 'Партнёр 2 (Есть аудитория)',
    title: 'Модель: Интеграции через партнёров',
    potential: 'Стабильный доход (от 100 000+ ₽)',
    actions: ['Подобрать офферы под аудиторию', 'Внедрить нативную интеграцию', 'Автоматизировать монетизацию'],
    leaks: ['Есть ресурс, но нет монетизации связок', 'Низкая конверсия в клик', 'Нерегулярные офферы']
  },
  experienced: {
    badge: 'Партнёр (Сломанная система)',
    title: 'Модель: Пересборка и масштабирование',
    potential: 'Системный масштаб и автодоход',
    actions: ['Аудит текущих связок', 'Устранение хаоса в воронке', 'Систематизация партнерской карты'],
    leaks: ['Хаос и отсутствие структуры', 'Потеря сливного трафика', 'Сломанные цепочки продаж']
  }
};

/**
 * Рендер финального результата симулятора
 */
export function renderResult(selectedAnswers) {
  const role = selectedAnswers.step1 || 'novice';
  const model = RESULT_MODELS[role] || RESULT_MODELS.novice;

  const leaksList = model.leaks.map(l => `<li class="flex items-center gap-2 text-rose-300 text-xs font-medium"><span class="text-rose-500">❌</span> ${l}</li>`).join('');
  const actionsList = model.actions.map((a, i) => `<div class="p-3 rounded-xl bg-slate-800/60 border border-slate-700/50 text-xs text-slate-200 font-semibold flex items-center gap-2.5"><span class="w-5 h-5 rounded-full bg-indigo-500/20 text-indigo-400 flex items-center justify-center flex-shrink-0 text-[10px] font-bold">${i+1}</span>${a}</div>`).join('');

  return `
    <div class="card p-6 space-y-6 slide-up">
      <div class="text-center space-y-2">
        <span class="inline-block px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-400 text-xs font-bold uppercase tracking-wider border border-emerald-500/30">
          ${model.badge}
        </span>
        <h2 class="text-xl font-extrabold text-slate-100">${model.title}</h2>
      </div>

      <!-- Потенциал -->
      <div class="p-4 rounded-2xl bg-gradient-to-br from-indigo-900/40 to-slate-900 border border-indigo-500/30 text-center space-y-1">
        <div class="text-xs font-extrabold text-indigo-300 uppercase tracking-wider">Потенциал дохода:</div>
        <div class="text-xl font-black text-emerald-400">${model.potential}</div>
      </div>

      <!-- Утечка денег -->
      <div class="p-4 rounded-2xl bg-rose-950/30 border border-rose-500/30 space-y-2">
        <div class="text-xs font-bold text-rose-400 uppercase tracking-wider flex items-center gap-1.5">
          ⚠️ Утечка денег в текущей точке:
        </div>
        <ul class="space-y-1.5">
          ${leaksList}
        </ul>
      </div>

      <!-- Партнерская карта -->
      <div class="space-y-2">
        <div class="text-xs font-bold text-slate-400 uppercase tracking-wider">Партнёрская карта:</div>
        <div class="p-3 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-between text-[11px] font-bold text-slate-200 text-center gap-1">
          <div class="bg-indigo-600/30 px-2 py-1.5 rounded-lg border border-indigo-500/40 flex-1">🌐 Трафик</div>
          <span class="text-slate-500">➔</span>
          <div class="bg-indigo-600/30 px-2 py-1.5 rounded-lg border border-indigo-500/40 flex-1">🤝 Партнёр</div>
          <span class="text-slate-500">➔</span>
          <div class="bg-indigo-600/30 px-2 py-1.5 rounded-lg border border-indigo-500/40 flex-1">🎁 Оффер</div>
          <span class="text-slate-500">➔</span>
          <div class="bg-emerald-600/30 px-2 py-1.5 rounded-lg border border-emerald-500/40 flex-1 text-emerald-300">💰 Деньги</div>
        </div>
      </div>

      <!-- Готовый план действий -->
      <div class="space-y-2">
        <div class="text-xs font-bold text-slate-400 uppercase tracking-wider">План действий:</div>
        <div class="space-y-2">
          ${actionsList}
        </div>
      </div>

      <!-- CTA -->
      <div class="pt-2">
        <a href="https://t.me/" target="_blank" class="btn-primary btn-press text-center shadow-lg shadow-emerald-500/20 bg-emerald-600 hover:bg-emerald-500 text-white font-bold block decoration-none">
          Хочешь систему — зайти в обучение / разбор 🚀
        </a>
      </div>
    </div>
  `;
}
