export const LOCALES = ["en", "ru"] as const;
export type Locale = (typeof LOCALES)[number];
export const DEFAULT_LOCALE: Locale = "en";

export interface Job {
  company: string;
  role: string;
  period: string;
  location?: string;
  url?: string;
  highlights: string[];
  tags?: string[];
}

export interface SkillGroup {
  title: string;
  items: string[];
}

export interface Education {
  institution: string;
  degree: string;
  period: string;
}

export interface Content {
  meta: { title: string; description: string };
  langName: string;
  nav: { journey: string; education: string; skills: string; contact: string };
  hero: {
    name: string;
    role: string;
    tagline: string;
    summary: string[];
    availability: string;
    location: string;
  };
  journey: { jobs: Job[] };
  education: { items: Education[] };
  skills: { groups: SkillGroup[] };
  contact: { subtitle: string; emailLabel: string; linkedinLabel: string };
  footer: { built: string; rights: string };
  theme: { toDark: string; toLight: string };
}

const en: Content = {
  meta: {
    title: "Alexander Kalinin · Frontend Engineer",
    description:
      "Frontend Engineer specializing in Next.js, React and TypeScript. Building clean, thoughtful and performant web products.",
  },
  langName: "English",
  nav: {
    journey: "🧑‍💻 Work Experience",
    education: "🎓 Education",
    skills: "🛠️ Technologies",
    contact: "🤝 Contacts",
  },
  hero: {
    name: "Alexander Kalinin",
    role: "Frontend Engineer",
    tagline: "Next.js · React · TypeScript",
    summary: [
      "I'm Alex, a frontend developer with experience in edtech, e-commerce, real-estate rental and marketing automation platforms. I've worked in teams of different sizes and enjoy clean, readable code, code reviews, a systematic approach to design and thoughtful decision-making.",
      "My main stack is Next.js, React, Apollo GraphQL and various styling approaches (Tailwind CSS, CSS Modules, CSS-in-JS). It's my core stack, but I'm not tied to specific technologies. I love learning and quickly adapt to any stack, because I genuinely enjoy what I do.",
    ],
    availability: "✅ Actively looking for work",
    location: "📍 Based in Türkiye",
  },
  journey: {
    jobs: [
      {
        company: "Established FinTech Company",
        role: "Frontend Engineer",
        period: "May 2026 — Aug 2026",
        tags: ["Next.js", "React Native"],
        highlights: [
          "As part of a contract FinTech project, helped successfully launch two online banking platforms (Next.js) and two mobile banking apps (React Native), working in a team of three frontend developers under tight deadlines.",
          "Also integrated Sumsub identity verification (KYC/KYB), gamification, onboarding flows and banking operations.",
          "Leaned on AI-assisted tooling (GitHub Copilot, Cursor and Claude Code) to move faster.",
        ],
      },
      {
        company: "EdTech Startup",
        role: "Frontend Engineer",
        period: "Mar 2024 — Apr 2026",
        tags: [
          "Next.js",
          "ESLint",
          "Github Actions",
          "Tailwind CSS",
          "FSD",
          "Apollo GraphQL",
          "TypeScript",
          "Vitest",
          "Storybook",
          "React.js",
        ],
        highlights: [
          "Worked in a small dev team (7 people) on a multilingual learning platform, including integrations with an AI assistant, a video call service and a custom chat built on GetStream.",
          "Took part in product discussions: breaking down tasks, setting priorities and estimating timelines.",
          "Collaborated with a frontend team (3 developers) to build a custom UI kit and introduced Feature-Sliced Design (FSD) to improve scalability and maintainability.",
          "Set up a monorepo using Turborepo, splitting shared configs and modules into separate packages.",
          "Automated syncing of design tokens between Figma and the frontend.",
          "Set up CI/CD pipelines in GitHub (GitHub Actions) and GitLab.",
          "Introduced unit testing using Vitest.",
          "Built and maintained marketing landing pages.",
          "Helped establish code reviews in the team, made architectural decisions and supported others in designing parts of the system.",
        ],
      },
      {
        company: "Self Studio",
        role: "Frontend Developer",
        period: "Apr 2022 — Dec 2023",
        location: "United Kingdom",
        url: "https://www.selfstudio.se/",
        tags: [
          "Next.js",
          "ReactJS",
          "Styled Components",
          "Shopify Restyle",
          "JavaScript",
          "Tailwind CSS",
          "Vite.js",
          "React Native",
          "Apollo GraphQL",
          "Git",
        ],
        highlights: [
          "Developed a React Native astrology app together with another frontend developer. The app is actively working and bringing profit to the client.",
          "We also quickly built a corporate website showcasing our work for clients with a great design.",
          "Helped with the development of an e-commerce project on Next.js in the cycling industry and many other things too.",
        ],
      },
      {
        company: "Mashroom",
        role: "Frontend Developer",
        period: "Aug 2022 — Jul 2023",
        location: "United Kingdom",
        url: "https://www.instagram.com/mashroomrent/",
        tags: [
          "Next.js",
          "Emotion",
          "CSS in JS",
          "ReactJS",
          "CSS Modules",
          "Apollo GraphQL",
          "Git",
        ],
        highlights: [
          "Sped up the frontend build by 5×.",
          "Refactored code previously written by another frontend team: improved readability and maintainability, and reduced frontend responsibility where possible.",
          "Worked on optimizing pages and key Google metrics.",
          "Removed a large number of duplicate UI components and started implementing a new ui-kit.",
          "Removed unnecessary dependencies almost everywhere and rewrote Emotion styles in the public part using CSS Modules.",
          "Handled support: fixed accumulated bugs and introduced new features such as landlord identity verification.",
          "Helped with the implementation and data structure of custom blog article blocks provided by WordPress.",
          "Set up internal frontend team processes: code review, working with task managers and sharing experience.",
        ],
      },
      {
        company: "Self-employed / Freelance",
        role: "Frontend Web Developer",
        period: "Mar 2013 — Mar 2022",
        tags: [
          "React",
          "TypeScript",
          "Next.js",
          "css3",
          "jQuery",
          "HTML",
          "CSS",
          "JavaScript",
          "HTML5",
          "AJAX",
          "Adobe Photoshop",
        ],
        highlights: [
          'Collaborated with studios like <a href="https://loo.ch/" target="_blank" rel="noopener noreferrer" class="underline decoration-line underline-offset-4 transition-colors hover:decoration-content">loo.ch</a>, <a href="https://m-a-x.online/" target="_blank" rel="noopener noreferrer" class="underline decoration-line underline-offset-4 transition-colors hover:decoration-content">m-a-x.design</a> and gorbach.co.',
          "Built a UI kit for a marketing automation platform (React, TypeScript, Styled Components, RTL, Cypress).",
          'Frontend for a <a href="https://thelocals.ru/" target="_blank" rel="noopener noreferrer" class="underline decoration-line underline-offset-4 transition-colors hover:decoration-content">real-estate rental site</a> and a universal admin panel reused across projects (Next.js).',
          "E-commerce in cycling & footwear with Bitrix integration (Preact, Next.js, Redux).",
          "Lightweight webpages optimized for slower connections, enhanced with simple CSS animations.",
        ],
      },
    ],
  },
  education: {
    items: [
      {
        institution: "Belarusian State Academy of Communications",
        degree: "Higher Education · Telecommunications software development",
        period: "2008 — 2011",
      },
    ],
  },
  skills: {
    groups: [
      {
        title: "Core",
        items: [
          "React",
          "Next.js",
          "React Native",
          "TypeScript",
          "JavaScript",
          "Preact",
        ],
      },
      {
        title: "Data & State",
        items: ["Apollo GraphQL", "GraphQL", "Redux", "REST"],
      },
      {
        title: "Styling",
        items: [
          "Tailwind CSS",
          "CSS Modules",
          "CSS-in-JS",
          "Styled Components",
          "SCSS",
          "Emotion",
        ],
      },
      {
        title: "Architecture & Tooling",
        items: [
          "Feature-Sliced Design",
          "Turborepo",
          "Vite",
          "Webpack",
          "Gulp",
        ],
      },
      {
        title: "Testing",
        items: ["Vitest", "React Testing Library", "Cypress", "Code Reviews"],
      },
      { title: "CI/CD", items: ["GitHub Actions", "GitLab CI"] },
      {
        title: "Integrations",
        items: [
          "Sumsub (KYC/KYB)",
          "GetStream",
          "Figma Tokens",
          "Veriff",
          "WordPress",
          "Bitrix",
        ],
      },
      {
        title: "AI-assisted",
        items: ["GitHub Copilot", "Cursor", "Claude Code"],
      },
    ],
  },
  contact: {
    subtitle:
      "Open to remote full-time or part-time work on meaningful products. The fastest way to reach me:",
    emailLabel: "Email",
    linkedinLabel: "LinkedIn",
  },
  footer: {
    built: "Built with Astro & Tailwind",
    rights: "All rights reserved.",
  },
  theme: { toDark: "Switch to dark theme", toLight: "Switch to light theme" },
};

const ru: Content = {
  meta: {
    title: "Александр Калинин · Frontend-инженер",
    description:
      "Frontend-инженер: Next.js, React и TypeScript. Создаю чистые, продуманные и быстрые веб-продукты.",
  },
  langName: "Русский",
  nav: {
    journey: "🧑‍💻 Опыт работы",
    education: "🎓 Образование",
    skills: "🛠️ Технологии",
    contact: "🤝 Контакты",
  },
  hero: {
    name: "Александр Калинин",
    role: "Frontend-инженер",
    tagline: "Next.js · React · TypeScript",
    summary: [
      "Меня зовут Алекс, я frontend-разработчик с опытом в edtech, e-commerce, платформах аренды недвижимости и marketing automation. Работал в командах разного размера, люблю чистый и читаемый код, код-ревью, системный подход к дизайну и продуманные решения.",
      "Основной стек: Next.js, React, Apollo GraphQL и разные подходы к стилизации (Tailwind CSS, CSS Modules, CSS-in-JS). Но я не привязан к конкретным технологиям: легко осваиваю новое и люблю учиться.",
    ],
    availability: "✅ Активно ищу работу",
    location: "📍 Живу в Турции",
  },
  journey: {
    jobs: [
      {
        company: "Действующая FinTech-компания",
        role: "Frontend-инженер",
        period: "Май 2026 — Авг 2026",
        tags: ["Next.js", "React Native"],
        highlights: [
          "В рамках контрактного FinTech-проекта помог успешно довести до релиза две платформы онлайн-банкинга (Next.js) и два мобильных банковских приложения (React Native), работая в команде из трёх фронтенд-разработчиков в условиях сжатых сроков.",
          "Также занимался разработкой фич, связанных с флоу регистрации обычных пользователей и компаний, их верификацией личности через Sumsub (KYC/KYB), геймификацией и т.д.",
          "Активно использовали AI-инструменты (GitHub Copilot, Cursor и Claude Code) для ускорения работы.",
        ],
      },
      {
        company: "EdTech-стартап",
        role: "Frontend-инженер",
        period: "Мар 2024 — Апр 2026",
        tags: [
          "Next.js",
          "ESLint",
          "Github Actions",
          "Tailwind CSS",
          "FSD",
          "Apollo GraphQL",
          "TypeScript",
          "Vitest",
          "Storybook",
          "React.js",
        ],
        highlights: [
          "Работал в небольшой команде (7 человек) над многоязычной образовательной платформой: интеграции с AI-ассистентом, сервисом видеозвонков и собственным чатом на GetStream.",
          "Участвовал в продуктовых обсуждениях: разбивал задачи, расставлял приоритеты и оценивал сроки.",
          "Вместе с фронтенд-командой из трёх разработчиков собрал собственный UI-kit и внедрил Feature-Sliced Design (FSD) ради масштабируемости и удобства поддержки.",
          "Настроил монорепозиторий на Turborepo, вынес общие конфиги и модули в отдельные пакеты.",
          "Автоматизировал синхронизацию дизайн-токенов между Figma и фронтендом.",
          "Настроил CI/CD-пайплайны в GitHub (GitHub Actions) и GitLab.",
          "Внедрил юнит-тесты на Vitest.",
          "Разрабатывал и поддерживал маркетинговые лендинги.",
          "Помог наладить код-ревью в команде, участвовал в архитектурных решениях и подсказывал коллегам при проектировании частей системы.",
        ],
      },
      {
        company: "Self Studio",
        role: "Frontend-разработчик",
        period: "Апр 2022 — Дек 2023",
        location: "Великобритания",
        url: "https://www.selfstudio.se/",
        tags: [
          "Next.js",
          "ReactJS",
          "Styled Components",
          "Shopify Restyle",
          "JavaScript",
          "Tailwind CSS",
          "Vite.js",
          "React Native",
          "Apollo GraphQL",
          "Git",
        ],
        highlights: [
          "Вдвоём с другим фронтенд-разработчиком сделал приложение для астрологии на React Native. Оно работает и приносит клиенту прибыль.",
          "Быстро собрали корпоративный сайт с сильным дизайном, витрину наших работ для клиентов.",
          "Помогал с e-commerce-проектом на Next.js в велоиндустрии и со многим другим.",
        ],
      },
      {
        company: "Mashroom",
        role: "Frontend-разработчик",
        period: "Авг 2022 — Июл 2023",
        location: "Великобритания",
        url: "https://www.instagram.com/mashroomrent/",
        tags: [
          "Next.js",
          "Emotion",
          "CSS in JS",
          "ReactJS",
          "CSS Modules",
          "Apollo GraphQL",
          "Git",
        ],
        highlights: [
          "Ускорил сборку фронтенда в 5 раз.",
          "Отрефакторили код, доставшийся от другой фронтенд-команды: сделали его читаемее и удобнее в поддержке, а где могли, разгрузили фронтенд от лишней логики.",
          "Оптимизировал страницы и ключевые метрики Google.",
          "Убрали множество дублирующихся UI-компонентов и начали переходить на новый ui-kit.",
          "Почти везде убрали лишние зависимости и переписали Emotion-стили в публичной части на CSS Modules.",
          "Занимались поддержкой: исправляли накопившиеся баги и добавляли новые фичи, например такие как верификация личности арендодателя.",
          "Помогал с реализацией и структурой данных кастомных блоков статей блога, которые приходят из WordPress.",
          "Настроил внутренние процессы фронтенд-команды: код-ревью, работу с таск-трекерами, обмен опытом.",
        ],
      },
      {
        company: "Self-employed / Freelance",
        role: "Frontend Web Developer",
        period: "Мар 2013 — Мар 2022",
        tags: [
          "React",
          "TypeScript",
          "Next.js",
          "css3",
          "jQuery",
          "HTML",
          "CSS",
          "JavaScript",
          "HTML5",
          "AJAX",
          "Adobe Photoshop",
        ],
        highlights: [
          'Сотрудничал со студиями <a href="https://loo.ch/" target="_blank" rel="noopener noreferrer" class="underline decoration-line underline-offset-4 transition-colors hover:decoration-content">loo.ch</a>, <a href="https://m-a-x.online/" target="_blank" rel="noopener noreferrer" class="underline decoration-line underline-offset-4 transition-colors hover:decoration-content">m-a-x.design</a>, gorbach.co и другими.',
          "Собрал UI-kit для платформы marketing automation (React, TypeScript, Styled Components, RTL, Cypress).",
          'Фронтенд <a href="https://thelocals.ru/" target="_blank" rel="noopener noreferrer" class="underline decoration-line underline-offset-4 transition-colors hover:decoration-content">сайта аренды недвижимости</a> и универсальная админ-панель, которую переиспользовали в нескольких проектах (Next.js).',
          "E-commerce в вело- и обувной нишах с интеграцией Bitrix (Preact, Next.js, Redux).",
          "Лёгкие страницы, оптимизированные под медленный интернет, с простыми CSS-анимациями.",
        ],
      },
    ],
  },
  education: {
    items: [
      {
        institution: "Белорусская государственная академия связи",
        degree: "Высшее · Разработка ПО в телекоммуникациях",
        period: "2008 — 2011",
      },
    ],
  },
  skills: {
    groups: [
      {
        title: "Ядро",
        items: [
          "React",
          "Next.js",
          "React Native",
          "TypeScript",
          "JavaScript",
          "Preact",
        ],
      },
      {
        title: "Данные и состояние",
        items: ["Apollo GraphQL", "GraphQL", "Redux", "REST"],
      },
      {
        title: "Стилизация",
        items: [
          "Tailwind CSS",
          "CSS Modules",
          "CSS-in-JS",
          "Styled Components",
          "SCSS",
          "Emotion",
        ],
      },
      {
        title: "Архитектура и тулинг",
        items: [
          "Feature-Sliced Design",
          "Turborepo",
          "Vite",
          "Webpack",
          "Gulp",
        ],
      },
      {
        title: "Тестирование",
        items: ["Vitest", "React Testing Library", "Cypress", "Код-ревью"],
      },
      { title: "CI/CD", items: ["GitHub Actions", "GitLab CI"] },
      {
        title: "Интеграции",
        items: [
          "Sumsub (KYC/KYB)",
          "GetStream",
          "Figma Tokens",
          "Veriff",
          "WordPress",
          "Bitrix",
        ],
      },
      {
        title: "AI-инструменты",
        items: ["GitHub Copilot", "Cursor", "Claude Code"],
      },
    ],
  },
  contact: {
    subtitle:
      "Открыт к удалённой работе full-time или part-time над осмысленными продуктами. Самый быстрый способ связаться:",
    emailLabel: "Почта",
    linkedinLabel: "LinkedIn",
  },
  footer: {
    built: "Сделано на Astro и Tailwind",
    rights: "Все права защищены.",
  },
  theme: { toDark: "Тёмная тема", toLight: "Светлая тема" },
};

export const content: Record<Locale, Content> = { en, ru };

export function getContent(locale: Locale): Content {
  return content[locale] ?? content[DEFAULT_LOCALE];
}

/** Language-neutral contact links (labels come from the dictionary). */
export const CONTACT_LINKS = {
  email: "alessandro.kalinin@gmail.com",
  linkedin: "https://www.linkedin.com/in/alexander-kalinin-7576b3294",
};
