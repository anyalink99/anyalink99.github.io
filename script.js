document.addEventListener('DOMContentLoaded', () => {
  const copy = {
    en: {
      skip: 'Skip to projects',
      'nav.work': 'Projects',
      'nav.profile': 'Profile',
      'nav.contact': 'Contact',
      'catalog.kicker': 'Project index / A—Z',
      'catalog.title': 'Projects',
      'catalog.count': '11 live pages',
      'catalog.copy': 'Every row opens a working version. No case-study detours.',
      'catalog.foot': 'Public source and experiments',
      'project.amavi': 'Sugar-free chocolate store.',
      'project.cossacks': 'Reference, calculations and a build editor for Cossacks 3.',
      'project.geometric': 'Cut, inscribe and balance shapes in endless geometry puzzles.',
      'project.mafia': 'Roles, table, voting, timer and game log for a Mafia host.',
      'project.niochess': 'Real-time chess with no turns: pieces move simultaneously.',
      'project.poker': 'Blind levels, breaks, sound and automatic progression.',
      'project.qitchen': 'Multi-page website for a sushi restaurant.',
      'project.climbingTitle': 'Climbing Calendar',
      'project.climbing': 'Shared gym calendar with visits and a live chat.',
      'project.set': 'Speed drills and statistics for the classic Set card game.',
      'project.seum': 'Global activity and community statistics for the game SEUM.',
      'project.triloka': 'Bilingual landing page for an architecture and interior studio.',
      'profile.kicker': 'Profile / current work',
      'profile.title': 'I assemble interfaces, write application logic and ship working products.',
      'profile.current': 'Currently working at',
      'profile.front.title': 'Interface',
      'profile.front.copy': 'Layout, responsive behavior, states and the details between the mockup and the browser.',
      'profile.logic.title': 'Logic',
      'profile.logic.copy': 'Interactions, data, forms and the parts of a page that need to behave, not just look right.',
      'profile.release.title': 'Release',
      'profile.release.copy': 'Build, deployment, mobile checks, speed and fixes after real users arrive.',
      'contact.kicker': 'Contact',
      'contact.title': 'Send a link, a mockup or two sentences about the task.',
      'contact.copy': 'No long brief is required for the first message.',
      'footer.copy': 'Project index, assembled by hand.'
    },
    ru: {
      skip: 'Перейти к проектам',
      'nav.work': 'Проекты',
      'nav.profile': 'Профиль',
      'nav.contact': 'Контакты',
      'catalog.kicker': 'Индекс проектов / А—Я',
      'catalog.title': 'Проекты',
      'catalog.count': '11 рабочих страниц',
      'catalog.copy': 'Каждая строка ведёт сразу на рабочую версию.',
      'catalog.foot': 'Публичный код и эксперименты',
      'project.amavi': 'Интернет-магазин шоколада без сахара.',
      'project.cossacks': 'Справочник, расчёты и редактор билдов для Cossacks 3.',
      'project.geometric': 'Разрезать, вписать и уравновесить фигуру в браузерных головоломках.',
      'project.mafia': 'Роли, стол, голосование, таймер и журнал для ведущего «Мафии».',
      'project.niochess': 'Шахматы без ходов: фигуры движутся одновременно.',
      'project.poker': 'Уровни блайндов, перерывы, звук и автоматический переход.',
      'project.qitchen': 'Многостраничный сайт суши-ресторана.',
      'project.climbingTitle': 'Календарь скалолазания',
      'project.climbing': 'Общий календарь посещений скалодромов и живой чат.',
      'project.set': 'Тренировки на скорость и статистика для карточной игры Set.',
      'project.seum': 'Глобальная активность и статистика сообщества игры SEUM.',
      'project.triloka': 'Двуязычный лендинг архитектурной и интерьерной студии.',
      'profile.kicker': 'Профиль / текущая работа',
      'profile.title': 'Собираю интерфейсы, пишу логику и выпускаю рабочие продукты.',
      'profile.current': 'Сейчас работаю в',
      'profile.front.title': 'Интерфейс',
      'profile.front.copy': 'Вёрстка, адаптивность, состояния и детали между макетом и браузером.',
      'profile.logic.title': 'Логика',
      'profile.logic.copy': 'Интерактив, данные, формы и части страницы, которые должны не только выглядеть, но и работать.',
      'profile.release.title': 'Выпуск',
      'profile.release.copy': 'Сборка, публикация, проверка на телефонах, скорость и исправления после запуска.',
      'contact.kicker': 'Контакты',
      'contact.title': 'Пришлите ссылку, макет или опишите задачу двумя предложениями.',
      'contact.copy': 'Для первого сообщения длинное ТЗ не нужно.',
      'footer.copy': 'Индекс проектов, собранный вручную.'
    }
  };

  const buttons = document.querySelectorAll('.lang-btn');

  function setLanguage(language) {
    const languageCopy = copy[language] || copy.en;

    document.querySelectorAll('[data-i18n]').forEach((element) => {
      const value = languageCopy[element.dataset.i18n];
      if (value !== undefined) element.textContent = value;
    });

    buttons.forEach((button) => {
      const active = button.dataset.lang === language;
      button.classList.toggle('is-active', active);
      button.setAttribute('aria-pressed', String(active));
    });

    document.documentElement.lang = language;
    localStorage.setItem('nio-language', language);
  }

  buttons.forEach((button) => {
    button.addEventListener('click', () => setLanguage(button.dataset.lang));
  });

  const savedLanguage = localStorage.getItem('nio-language');
  setLanguage(savedLanguage === 'ru' ? 'ru' : 'en');
});
