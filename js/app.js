// js/app.js
import { initIcons } from './utils.js';

// База данных для каждого блока воронки
const funnelData = {
  'T1': {
    title: 'Реклама',
    subtitle: 'Таргет VK Ads',
    category: 'Источники трафика',
    color: '#10b981',
    bgColor: 'rgba(16, 185, 129, 0.12)',
    borderColor: '#10b981',
    badge: 'Трафик',
    icon: 'target',
    summary: 'Официальная реклама VK Ads, маркет-платформа и контекстные кампании.',
    details: 'Прямой запуск объявлений на целевые аудитории (по интересам, ключевым словам, ретаргетинг). Главная задача — обеспечить максимальный CTR и низкую стоимость клика (CPC).',
    recommendation: 'Используйте динамические креативы и сегментируйте аудитории по боли.'
  },
  'T2': {
    title: 'Блогеры',
    subtitle: 'Инфлюенс-маркетинг',
    category: 'Источники трафика',
    color: '#10b981',
    bgColor: 'rgba(16, 185, 129, 0.12)',
    borderColor: '#10b981',
    badge: 'Трафик',
    icon: 'users',
    summary: 'Прямые интеграции и нативные обзоры у тематических лидеров мнений.',
    details: 'Привлечение тёплого лояльного трафика через рекомендации авторов контента. Высокий уровень доверия и вовлеченности.',
    recommendation: 'Проверяйте вовлеченность (ER) паблика и используйте персональные промокоды.'
  },
  'T3': {
    title: 'Органика',
    subtitle: 'SEO & VK Клипы',
    category: 'Источники трафика',
    color: '#10b981',
    bgColor: 'rgba(16, 185, 129, 0.12)',
    borderColor: '#10b981',
    badge: 'Трафик',
    icon: 'sparkles',
    summary: 'VK Клипы, умная лента рекомендаций, виральные статьи и SEO.',
    details: 'Бесплатный охват за счет качественного регулярного контента. Алгоритмы VK продвигают интересные клипы и уникальные лонгриды на новую аудиторию.',
    recommendation: 'Публикуйте от 3 до 5 Клипов в неделю с призывом забрать бонус в шапке профиля.'
  },
  'T4': {
    title: 'Посевы',
    subtitle: 'Посты в пабликах',
    category: 'Источники трафика',
    color: '#10b981',
    bgColor: 'rgba(16, 185, 129, 0.12)',
    borderColor: '#10b981',
    badge: 'Трафик',
    icon: 'share-2',
    summary: 'Публикация рекламных постов в тематических сообществах VK.',
    details: 'Закупка рекламных мест напрямую у администраторов групп или через биржу. Отлично подходит для массовых и нишевых продуктов.',
    recommendation: 'Анализируйте часовой график активности сообществ перед выходом поста.'
  },
  'A': {
    title: 'Трафик',
    subtitle: 'Центральный хаб сбора',
    category: 'Точка сбора',
    color: '#10b981',
    bgColor: 'rgba(16, 185, 129, 0.16)',
    borderColor: '#34d399',
    badge: 'Главный узел',
    icon: 'zap',
    summary: 'Агрегатор всех входящих потоков целевой аудитории.',
    details: 'Сюда стекаются все рекламные и органические касания. Здесь измеряется суммарный объём входящего потока и средняя стоимость привлечения пользователя (CAC).',
    recommendation: 'Настройте UTМ-метки для каждого источника для точной аналитики.'
  },
  'B': {
    title: 'VK входная оболочка',
    subtitle: 'Оформление группы VK',
    category: 'VK система',
    color: '#0077ff',
    bgColor: 'rgba(0, 119, 255, 0.18)',
    borderColor: '#0077ff',
    badge: 'VK Экосистема',
    icon: 'layout',
    summary: 'Первое визуальное касание: меню, виджеты, обложка и товары группы.',
    details: 'Упаковка паблика VK. Посетитель за 3 секунды должен понять, чем вы полезны, и увидеть четкий призыв к действию (CTA) в меню или виджете.',
    recommendation: 'Используйте яркие динамические обложки и лаконичные кнопки меню.'
  },
  'C': {
    title: 'Вход',
    subtitle: 'Логический шлюз развилки',
    category: 'Логический шлюз',
    color: '#f59e0b',
    bgColor: 'rgba(245, 158, 11, 0.16)',
    borderColor: '#fbbf24',
    badge: 'Развилка',
    icon: 'git-branch',
    summary: 'Выбор оптимального пути конверсии для пользователя.',
    details: 'Система определяет, отправить пользователя сразу в чат-бот или на полноценный конверсионный мини-лендинг в Senler / Mini App.',
    recommendation: 'Тестируйте A/B сплит для сравнения конверсий обоих путей.'
  },
  'D1': {
    title: 'Прямая модель',
    subtitle: 'Старт диалога в боте',
    category: 'Сегментация',
    color: '#f59e0b',
    bgColor: 'rgba(245, 158, 11, 0.12)',
    borderColor: '#f59e0b',
    badge: 'Прямой путь',
    icon: 'arrow-right-circle',
    summary: 'Мгновенный старт диалога с ботом по кодовому слову или кнопке.',
    details: 'Минимальное трение. Пользователь сразу попадает в личные сообщения группы без лишних шагов. Максимальная конверсия из клика в сообщение.',
    recommendation: 'Используйте короткие кодовые слова в рекламе (например, "СТАРТ").'
  },
  'D2': {
    title: 'Через посадочную',
    subtitle: 'Лендинг Senler / Mini App',
    category: 'Сегментация',
    color: '#f59e0b',
    bgColor: 'rgba(245, 158, 11, 0.12)',
    borderColor: '#f59e0b',
    badge: 'Лендинг',
    icon: 'monitor',
    summary: 'Подписка через подписную страницу Senler / VK Mini App.',
    details: 'Предоставляет больше информации и прогрева перед подпиской. Позволяет собрать дополнительные данные о пользователе и сформировать завышенное ожидание от продукта.',
    recommendation: 'Размещайте отзывы и видео-превью прямо на посадочной странице.'
  },
  'E': {
    title: 'Бот',
    subtitle: 'Приветствие и автоответы',
    category: 'Автоматизация',
    color: '#8b5cf6',
    bgColor: 'rgba(139, 92, 246, 0.16)',
    borderColor: '#a78bfa',
    badge: 'Ядро системы',
    icon: 'bot',
    summary: 'Автоматический сценарий взаимодействия в личных сообщениях.',
    details: 'Приветствие, выдача первого обещания, вовлечение в диалог через интерактивные кнопки. Бот работает 24/7 без участия менеджера.',
    recommendation: 'Делайте сообщения короткими (до 300 символов) и используйте переменные имени.'
  },
  'F': {
    title: 'Сегментация',
    subtitle: 'Квалификация и опросы',
    category: 'Автоматизация',
    color: '#8b5cf6',
    bgColor: 'rgba(139, 92, 246, 0.16)',
    borderColor: '#a78bfa',
    badge: 'Анализ',
    icon: 'filter',
    summary: 'Квалификация лида через опросы и выбор интересов.',
    details: 'Бот задает 1-3 вопроса для определения потребностей и уровня готовности к покупке. На основе ответов присваиваются метки (теги) в базе.',
    recommendation: 'Не перегружайте вопросами — 2 вопроса с кнопками выбора дают 90%+ прохождений.'
  },
  'G1': {
    title: 'Лёгкий лид-магнит',
    subtitle: 'Чек-лист / Шпаргалка',
    category: 'Продукт',
    color: '#f59e0b',
    bgColor: 'rgba(245, 158, 11, 0.12)',
    borderColor: '#f59e0b',
    badge: 'Быстрая польза',
    icon: 'gift',
    summary: 'Быстрый бонус: гайд, чек-лист, шаблон или шпаргалка.',
    details: 'Идеально для горячей аудитории, которой нужно быстрое решение проблемы. Повышает лояльность и доказывает экспертность.',
    recommendation: 'Давайте материал мгновенно в первом же сообщении после выбора.'
  },
  'G2': {
    title: 'Углублённый продукт',
    subtitle: 'Мини-курс / Тест-драйв',
    category: 'Продукт',
    color: '#f59e0b',
    bgColor: 'rgba(245, 158, 11, 0.12)',
    borderColor: '#f59e0b',
    badge: 'Контент-погружение',
    icon: 'book-open',
    summary: 'Мини-курс, запись вебинара, разбор кейса или тест-драйв.',
    details: 'Предназначен для холодного или сомневающегося трафика. Требует больше времени на изучение, но создает глубокое доверие.',
    recommendation: 'Разбивайте мини-курс на короткие уроки по 5 минут.'
  },
  'H': {
    title: 'Прогрев',
    subtitle: 'Контентная автоворонка',
    category: 'Воронка продаж',
    color: '#f59e0b',
    bgColor: 'rgba(245, 158, 11, 0.16)',
    borderColor: '#fbbf24',
    badge: 'Автоворонка',
    icon: 'flame',
    summary: 'Серия ценностных писем, демонстрация результатов и кейсов.',
    details: 'Последовательная цепочка сообщений, закрывающая основные возражения (дорого, не сработает, нет времени). Формирует острое желание приобрести основной продукт.',
    recommendation: 'Используйте элемент сторителлинга и ограничивайте время действия спецпредложений.'
  },
  'I': {
    title: 'Продажа',
    subtitle: 'Финал & Оплата',
    category: 'Конверсия',
    color: '#f43f5e',
    bgColor: 'rgba(244, 63, 94, 0.2)',
    borderColor: '#fb7185',
    badge: 'Финальный этап',
    icon: 'shopping-bag',
    summary: 'Прямой оффер, ссылка на оплату, работа менеджера продаж.',
    details: 'Ключевая цель всей воронки. Перевод подогретого потенциального клиента в статус оплатившего покупателя.',
    recommendation: 'Подключите виджет быстрой оплаты VK Pay / эквайринг и автовыдачу доступа.'
  }
};

/**
 * Рендер интерфейса воронки в стиле VK
 */
function renderDashboard() {
  const appEl = document.getElementById('app');
  
  appEl.innerHTML = `
    <!-- Header в стиле VK -->
    <header class="border-b border-white/10 bg-[#0077ff] text-white shrink-0 shadow-lg">
      <div class="max-w-6xl mx-auto px-4 h-14 flex items-center justify-between">
        <div class="flex items-center space-x-3">
          <!-- VK Logo Badge -->
          <div class="w-9 h-9 rounded-xl bg-white text-[#0077ff] font-black text-lg flex items-center justify-center shadow-md tracking-tighter">
            VK
          </div>
          <div class="flex items-center gap-2">
            <h1 class="text-base sm:text-lg font-black tracking-tight text-white font-heading">ВОРОНКА КОНВЕРСИИ</h1>
            <span class="px-2.5 py-0.5 text-[10px] font-extrabold tracking-wide uppercase bg-white/20 text-white rounded-full border border-white/30">Official VK Design</span>
          </div>
        </div>

        <div class="text-xs text-white/90 font-bold flex items-center gap-2 bg-black/20 px-3 py-1.5 rounded-xl border border-white/10">
          <span class="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse"></span>
          <span>Нажмите на любой блок для пояснений</span>
        </div>
      </div>
    </header>

    <!-- Main Workspace -->
    <main class="flex-1 max-w-5xl w-full mx-auto px-4 py-6 flex flex-col items-center justify-start overflow-y-auto">
      
      <!-- Legend Bar -->
      <div class="w-full max-w-3xl mb-6 flex flex-wrap items-center justify-between gap-3 p-3.5 rounded-2xl glass-card text-xs">
        <div class="flex items-center gap-2 font-bold uppercase text-slate-300 tracking-wider">
          <i data-lucide="layers" class="w-4 h-4 text-[#0077ff]"></i>
          <span>Категории воронки:</span>
        </div>
        <div class="flex flex-wrap items-center gap-2">
          <span class="px-3 py-1 rounded-xl bg-emerald-500/15 text-emerald-400 border border-emerald-500/30 font-extrabold flex items-center gap-1.5">
            <span class="w-2 h-2 rounded-full bg-emerald-400"></span> Трафик
          </span>
          <span class="px-3 py-1 rounded-xl bg-[#0077ff]/20 text-[#38bdf8] border border-[#0077ff]/40 font-extrabold flex items-center gap-1.5">
            <span class="w-2 h-2 rounded-full bg-[#0077ff]"></span> VK Система
          </span>
          <span class="px-3 py-1 rounded-xl bg-purple-500/20 text-purple-300 border border-purple-500/40 font-extrabold flex items-center gap-1.5">
            <span class="w-2 h-2 rounded-full bg-purple-400"></span> Бот / Ядро
          </span>
          <span class="px-3 py-1 rounded-xl bg-amber-500/20 text-amber-300 border border-amber-500/40 font-extrabold flex items-center gap-1.5">
            <span class="w-2 h-2 rounded-full bg-amber-400"></span> Сегментация
          </span>
          <span class="px-3 py-1 rounded-xl bg-rose-500/20 text-rose-300 border border-rose-500/40 font-extrabold flex items-center gap-1.5">
            <span class="w-2 h-2 rounded-full bg-rose-500"></span> Продажи
          </span>
        </div>
      </div>

      <!-- Funnel Board Flow -->
      <div class="w-full max-w-3xl flex flex-col items-center gap-2.5 relative py-2">
        
        <!-- LEVEL 1: Источники Трафика Subgraph Group -->
        <div class="w-full rounded-3xl p-5 border-2 border-emerald-500/40 bg-emerald-950/25 backdrop-blur-md relative shadow-xl">
          <span class="absolute -top-3.5 left-6 px-4 py-1 text-xs font-black uppercase tracking-widest bg-[#0077ff] text-white rounded-lg shadow-md flex items-center gap-1.5">
            <i data-lucide="globe" class="w-3.5 h-3.5"></i> Источники трафика
          </span>
          <div class="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-2">
            ${renderCard('T1')}
            ${renderCard('T2')}
            ${renderCard('T3')}
            ${renderCard('T4')}
          </div>
        </div>

        <!-- HUGE PROMINENT ARROW -->
        ${renderHugeArrow('#10b981')}

        <!-- LEVEL 2: Трафик -->
        <div class="w-full sm:w-72">
          ${renderCard('A')}
        </div>

        <!-- HUGE PROMINENT ARROW -->
        ${renderHugeArrow('#0077ff')}

        <!-- LEVEL 3: VK система Subgraph Group -->
        <div class="w-full max-w-md rounded-3xl p-5 border-2 border-[#0077ff]/50 bg-blue-950/30 backdrop-blur-md relative shadow-xl">
          <span class="absolute -top-3.5 left-6 px-4 py-1 text-xs font-black uppercase tracking-widest bg-[#0077ff] text-white rounded-lg shadow-md flex items-center gap-1.5">
            <i data-lucide="shield-check" class="w-3.5 h-3.5"></i> VK система
          </span>
          <div class="w-full pt-2">
            ${renderCard('B')}
          </div>
        </div>

        <!-- HUGE PROMINENT ARROW -->
        ${renderHugeArrow('#f59e0b')}

        <!-- LEVEL 4: Вход (Развилка) -->
        <div class="w-full sm:w-64">
          ${renderCard('C')}
        </div>

        <!-- HUGE PROMINENT SPLIT ARROW -->
        ${renderHugeSplitArrow('#f59e0b')}

        <!-- LEVEL 5: Прямая модель & Через посадочную -->
        <div class="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full max-w-lg">
          ${renderCard('D1')}
          ${renderCard('D2')}
        </div>

        <!-- HUGE PROMINENT ARROW -->
        ${renderHugeArrow('#8b5cf6')}

        <!-- LEVEL 6: Ядро Subgraph Group (Бот & Сегментация) -->
        <div class="w-full max-w-md rounded-3xl p-5 border-2 border-purple-500/50 bg-purple-950/30 backdrop-blur-md relative flex flex-col gap-3 shadow-xl">
          <span class="absolute -top-3.5 left-6 px-4 py-1 text-xs font-black uppercase tracking-widest bg-[#0077ff] text-white rounded-lg shadow-md flex items-center gap-1.5">
            <i data-lucide="cpu" class="w-3.5 h-3.5"></i> Ядро системы
          </span>
          <div class="pt-2">${renderCard('E')}</div>
          ${renderHugeArrow('#8b5cf6', 'w-6 h-6')}
          <div>${renderCard('F')}</div>
        </div>

        <!-- HUGE PROMINENT SPLIT ARROW -->
        ${renderHugeSplitArrow('#f59e0b')}

        <!-- LEVEL 7: Лёгкий лид-магнит & Углублённый продукт -->
        <div class="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full max-w-xl">
          ${renderCard('G1')}
          ${renderCard('G2')}
        </div>

        <!-- HUGE PROMINENT ARROW -->
        ${renderHugeArrow('#f59e0b')}

        <!-- LEVEL 8: Прогрев -->
        <div class="w-full sm:w-72">
          ${renderCard('H')}
        </div>

        <!-- HUGE PROMINENT ARROW -->
        ${renderHugeArrow('#f43f5e')}

        <!-- LEVEL 9: Продажа -->
        <div class="w-full sm:w-72">
          ${renderCard('I')}
        </div>

      </div>
    </main>

    <!-- EXPLANATION MODAL POPUP DIALOG -->
    <div id="node-modal-backdrop" class="fixed inset-0 bg-black/80 backdrop-blur-md z-50 flex items-center justify-center p-4 sm:p-6 opacity-0 pointer-events-none transition-opacity duration-300">
      <div id="node-modal-card" class="glass-card bg-[#0b1326]/98 border-2 border-[#0077ff]/40 rounded-3xl max-w-2xl w-full p-6 sm:p-8 shadow-2xl transform scale-95 transition-transform duration-300 relative text-left">
        
        <button id="modal-close-btn" class="absolute top-6 right-6 p-2 rounded-full bg-white/10 hover:bg-white/20 text-slate-300 hover:text-white transition">
          <i data-lucide="x" class="w-6 h-6"></i>
        </button>

        <div class="flex items-center justify-between mb-4 pr-10">
          <span id="modal-badge" class="px-3.5 py-1 text-xs sm:text-sm font-extrabold uppercase tracking-wider rounded-lg bg-[#0077ff]/30 text-white border border-[#0077ff]/50 shadow">
            Категория
          </span>
          <span id="modal-id-tag" class="text-xs sm:text-sm font-mono text-slate-300 font-bold bg-white/10 px-3 py-1 rounded-md">NODE_ID</span>
        </div>

        <div class="flex items-center gap-4 mb-5 pb-4 border-b border-white/10">
          <div id="modal-icon-wrapper" class="w-14 h-14 sm:w-16 sm:h-16 rounded-2xl flex items-center justify-center flex-shrink-0 text-white shadow-xl">
            <i id="modal-icon" data-lucide="info" class="w-7 h-7 sm:w-8 sm:h-8"></i>
          </div>
          <div>
            <h3 id="modal-title" class="text-xl sm:text-2xl font-black text-white font-heading leading-tight">Название блока</h3>
            <p id="modal-category" class="text-xs sm:text-sm font-semibold text-[#38bdf8] mt-0.5">Подкатегория</p>
          </div>
        </div>

        <div class="space-y-4">
          <div class="p-4 sm:p-4.5 rounded-2xl bg-white/5 border border-white/10">
            <span class="text-xs font-extrabold text-slate-400 uppercase tracking-wider block mb-1 font-heading">КРАТКАЯ СУТЬ:</span>
            <p id="modal-summary" class="text-sm sm:text-base font-semibold text-slate-100 leading-relaxed">Пояснение блока</p>
          </div>

          <div class="p-4 sm:p-4.5 rounded-2xl bg-white/5 border border-white/10">
            <span class="text-xs font-extrabold text-[#38bdf8] uppercase tracking-wider block mb-1 font-heading">ДЕТАЛИ И UX-РОЛЬ:</span>
            <p id="modal-details" class="text-sm sm:text-base font-medium text-slate-200 leading-relaxed">Подробная информация о работе данного узла воронки.</p>
          </div>

          <div class="p-4 sm:p-4.5 rounded-2xl bg-emerald-500/15 border border-emerald-500/30 text-emerald-100 shadow-lg">
            <div class="flex items-center gap-2 font-black text-emerald-400 mb-1 text-xs sm:text-sm uppercase tracking-wider font-heading">
              <i data-lucide="lightbulb" class="w-4 h-4 sm:w-4.5 sm:h-4.5 text-emerald-400"></i>
              <span>Рекомендация эксперта:</span>
            </div>
            <p id="modal-recommendation" class="text-sm sm:text-base font-medium leading-relaxed text-emerald-100">Практический совет по настройке конверсии.</p>
          </div>
        </div>

        <div class="mt-6 pt-3.5 border-t border-white/10 flex justify-end">
          <button id="modal-ok-btn" class="px-7 py-2.5 sm:py-3 bg-[#0077ff] hover:bg-[#2688eb] text-white text-sm font-extrabold rounded-xl shadow-lg transition">
            Закрыть
          </button>
        </div>

      </div>
    </div>
  `;

  initIcons();
  setupModalEvents();
  setupCardClickEvents();
}

/**
 * Рендер КРУПНОЙ КРАСИВОЙ ЯВНОЙ СТРЕЛКИ вниз
 */
function renderHugeArrow(color, iconSize = 'w-7 h-7') {
  return `
    <div class="my-1.5 flex flex-col items-center justify-center">
      <div class="w-1 h-4 rounded-full opacity-80 mb-1 shadow-lg" style="background-color: ${color}; box-shadow: 0 0 10px ${color};"></div>
      <div class="w-12 h-12 sm:w-14 sm:h-14 rounded-2xl border-2 shadow-xl flex items-center justify-center backdrop-blur-md transition-transform" style="border-color: ${color}; background-color: rgba(11, 19, 38, 0.95); color: ${color}; box-shadow: 0 0 18px ${color}60;">
        <i data-lucide="arrow-down font-black" class="${iconSize} stroke-[3.5]"></i>
      </div>
    </div>
  `;
}

/**
 * Рендер КРУПНОЙ ЯВНОЙ СТРЕЛКИ развилки
 */
function renderHugeSplitArrow(color) {
  return `
    <div class="my-1.5 flex flex-col items-center justify-center">
      <div class="w-1 h-4 rounded-full opacity-80 mb-1 shadow-lg" style="background-color: ${color}; box-shadow: 0 0 10px ${color};"></div>
      <div class="w-12 h-12 sm:w-14 sm:h-14 rounded-2xl border-2 shadow-xl flex items-center justify-center backdrop-blur-md transition-transform" style="border-color: ${color}; background-color: rgba(11, 19, 38, 0.95); color: ${color}; box-shadow: 0 0 18px ${color}60;">
        <i data-lucide="git-fork" class="w-7 h-7 sm:w-8 sm:h-8 stroke-[3] rotate-180"></i>
      </div>
    </div>
  `;
}

/**
 * Рендер карточки блока воронки в стиле VK
 */
function renderCard(id) {
  const data = funnelData[id];
  if (!data) return '';

  return `
    <div data-node-id="${id}" class="funnel-card group relative cursor-pointer p-4 sm:p-4.5 rounded-2xl border-2 transition-all duration-150 text-center flex flex-col items-center justify-center gap-1.5 shadow-xl select-none" style="border-color: ${data.borderColor}; background: linear-gradient(135deg, ${data.bgColor} 0%, rgba(11,19,38,0.95) 100%);">
      <div class="w-9 h-9 sm:w-10 sm:h-10 rounded-xl flex items-center justify-center text-white shadow-md mb-0.5" style="background-color: ${data.color};">
        <i data-lucide="${data.icon}" class="w-4 h-4 sm:w-5 sm:h-5"></i>
      </div>
      <div class="font-black text-white text-base sm:text-lg tracking-tight font-heading leading-tight group-hover:text-[#38bdf8] transition-colors">
        ${data.title}
      </div>
      <div class="text-xs text-slate-300 font-semibold">
        ${data.subtitle}
      </div>
    </div>
  `;
}

function setupCardClickEvents() {
  document.querySelectorAll('.funnel-card').forEach(card => {
    card.addEventListener('click', () => {
      const id = card.getAttribute('data-node-id');
      if (id) openNodeModal(id);
    });
  });
}

function setupModalEvents() {
  const backdrop = document.getElementById('node-modal-backdrop');
  const closeBtn = document.getElementById('modal-close-btn');
  const okBtn = document.getElementById('modal-ok-btn');

  const closeModal = () => {
    backdrop?.classList.add('opacity-0', 'pointer-events-none');
    document.getElementById('node-modal-card')?.classList.add('scale-95');
  };

  closeBtn?.addEventListener('click', closeModal);
  okBtn?.addEventListener('click', closeModal);

  backdrop?.addEventListener('click', (e) => {
    if (e.target === backdrop) {
      closeModal();
    }
  });
}

function openNodeModal(nodeId) {
  const data = funnelData[nodeId];
  if (!data) return;

  const backdrop = document.getElementById('node-modal-backdrop');
  const card = document.getElementById('node-modal-card');

  document.getElementById('modal-badge').textContent = data.badge;
  document.getElementById('modal-id-tag').textContent = `Узел: ${nodeId}`;
  document.getElementById('modal-title').textContent = data.title;
  document.getElementById('modal-category').textContent = data.category;
  document.getElementById('modal-summary').textContent = data.summary;
  document.getElementById('modal-details').textContent = data.details;
  document.getElementById('modal-recommendation').textContent = data.recommendation;

  const iconWrapper = document.getElementById('modal-icon-wrapper');
  const iconEl = document.getElementById('modal-icon');

  if (iconWrapper && iconEl) {
    iconWrapper.style.backgroundColor = data.color;
    iconEl.setAttribute('data-lucide', data.icon);
    initIcons();
  }

  backdrop?.classList.remove('opacity-0', 'pointer-events-none');
  card?.classList.remove('scale-95');
}

document.addEventListener('DOMContentLoaded', () => {
  renderDashboard();
});
