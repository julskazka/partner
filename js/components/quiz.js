// js/components/quiz.js
// Компонент пошагового симулятора партнёрского дохода

export const QUIZ_STEPS = [
  {
    id: 'step1',
    title: 'ШАГ 1: КТО ТЫ?',
    subtitle: 'Выберите ваш текущий статус и точку старта',
    options: [
      { id: 'novice', label: '🌱 Новичок', desc: 'Нет опыта и ресурсов в партнёрках' },
      { id: 'product', label: '📦 Есть продукт', desc: 'Собственный продукт или услуга, нет трафика' },
      { id: 'audience', label: '📢 Есть аудитория', desc: 'Свой блог, канал или база подписчиков' },
      { id: 'experienced', label: '⚡ Уже пробовал', desc: 'Был опыт, но система работает хаотично' }
    ]
  },
  {
    id: 'step2',
    title: 'ШАГ 2: КАКАЯ У ТЕБЯ ЦЕЛЬ?',
    subtitle: 'Чего вы хотите достичь в первую очередь?',
    options: [
      { id: 'fast', label: '💸 Быстрые деньги', desc: 'Первые результаты в короткие сроки' },
      { id: 'stable', label: '📈 Стабильный доход', desc: 'Предсказуемый ежемесячный финансовый поток' },
      { id: 'auto', label: '🤖 Автоматическая система', desc: 'Система пассивного дохода без рутины' },
      { id: 'understand', label: '🔍 Разобраться', desc: 'Понять внутреннюю механику и построить связки' }
    ]
  },
  {
    id: 'step3',
    title: 'ШАГ 3: КАКОЙ ГЛАВНЫЙ РЕСУРС?',
    subtitle: 'Чем вы располагаете прямо сейчас?',
    options: [
      { id: 'socials', label: '📱 Соцсети', desc: 'Личные профили и активности' },
      { id: 'small_aud', label: '👥 Маленькая аудитория', desc: 'Лояльное микро-сообщество' },
      { id: 'blog', label: '✍️ Блог / Канал', desc: 'Контентная площадка' },
      { id: 'traffic', label: '🎯 Трафик', desc: 'Умение привлекать пользователей' }
    ]
  }
];

/**
 * Рендер стартового экрана или шага квиза
 */
export function renderQuizStep(stepIndex, selectedAnswers, onSelect) {
  if (stepIndex === -1) {
    return `
      <div class="card p-6 text-center space-y-5 fade-in">
        <div class="inline-block px-3 py-1 rounded-full bg-indigo-500/10 text-indigo-400 text-xs font-semibold uppercase tracking-wider mb-2">
          ВЕРСИЯ 2.0 • ИНТЕРАКТИВ
        </div>
        <h1 class="text-3xl font-extrabold text-slate-100 leading-tight">
          ПАРТНЁРСКИЙ СИМУЛЯТОР ДОХОДА
        </h1>
        <p class="text-slate-300 text-sm leading-relaxed max-w-md mx-auto">
          Собери свою персональную модель партнёрского дохода за 2–3 минуты.
          Не теорию, а модель, которая покажет: где деньги, почему их нет и как это исправить.
        </p>
        <div class="pt-2">
          <button id="start-quiz-btn" class="btn-primary btn-press shadow-lg shadow-indigo-500/25">
            Запустить симулятор 🚀
          </button>
        </div>
      </div>
    `;
  }

  const step = QUIZ_STEPS[stepIndex];
  const progress = Math.round(((stepIndex + 1) / QUIZ_STEPS.length) * 100);

  const optionsHtml = step.options.map(opt => {
    const isSelected = selectedAnswers[step.id] === opt.id;
    const activeClass = isSelected ? 'border-indigo-500 bg-indigo-500/15' : 'border-slate-800 hover:border-slate-700 bg-slate-900/50';
    return `
      <button data-opt-id="${opt.id}" class="quiz-opt-btn w-full p-4 rounded-xl border ${activeClass} text-left transition-all btn-press flex flex-col gap-1">
        <div class="font-bold text-slate-100 text-base">${opt.label}</div>
        <div class="text-xs text-slate-400 font-normal">${opt.desc}</div>
      </button>
    `;
  }).join('');

  return `
    <div class="card p-6 space-y-6 fade-in">
      <div class="space-y-2">
        <div class="flex justify-between text-xs font-semibold text-slate-400 uppercase tracking-wider">
          <span>${step.title}</span>
          <span>Шаг ${stepIndex + 1} из 3</span>
        </div>
        <div class="w-full bg-slate-800 h-2 rounded-full overflow-hidden">
          <div class="bg-indigo-500 h-full transition-all duration-300" style="width: ${progress}%"></div>
        </div>
      </div>

      <p class="text-sm text-slate-300 font-medium">${step.subtitle}</p>

      <div class="space-y-3">
        ${optionsHtml}
      </div>
    </div>
  `;
}
