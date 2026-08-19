export const LOCALES = ["en", "ru"] as const;
export type Locale = (typeof LOCALES)[number];
export const DEFAULT_LOCALE: Locale = "en";

export interface Job {
  company: string;
  role: string;
  period: string;
  location?: string;
  url?: string;
  responsibilities?: string[];
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
  journey: {
    jobs: Job[];
    responsibilitiesLabel: string;
    achievementsLabel: string;
  };
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
      "Core stack: Next.js, React, React Native, Tailwind CSS, CSS Modules, CSS-in-JS and more. But I'm not tied to specific technologies: if a project needs something else, I'll figure it out.",
    ],
    availability: "✅ Actively looking for work",
    location: "📍 Based in Türkiye",
  },
  journey: {
    responsibilitiesLabel: "Key responsibilities",
    achievementsLabel: "Key tasks and achievements",
    jobs: [
      {
        company: "Established FinTech Company",
        role: "Frontend Engineer",
        period: "May 2026 - Aug 2026",
        tags: [
          "React Native",
          "Expo",
          "Next.js",
          "Sumsub",
          "HubSpot",
          "GitHub Copilot",
          "Cursor",
          "Claude Code",
        ],
        responsibilities: [
          "Building two mobile banking apps with React Native (Expo) and two online banking web platforms with Next.js on tight deadlines",
          "Building features for sign-up and for verifying users and companies",
          "Adding gamification to boost customer engagement",
          "Discussing tasks, breaking them down and setting priorities",
        ],
        highlights: [
          "Built two apps and two online banking web platforms and shipped them quickly",
          "Built sign-up for regular users and companies, with lead capture in HubSpot",
          "Integrated Sumsub for KYC/KYB",
          "Added gamification",
        ],
      },
      {
        company: "EdTech Startup",
        role: "Frontend Engineer",
        period: "Mar 2024 - Apr 2026",
        tags: [
          "Next.js",
          "React",
          "Apollo GraphQL",
          "Tailwind CSS",
          "Vitest",
          "FSD",
          "Turborepo",
          "shadcn",
          "GetStream",
        ],
        responsibilities: [
          "Building a multilingual learning platform in a team of 7 developers (3 frontend developers)",
          "Taking part in business discussions: breaking tasks down, setting priorities and timelines",
          "Designing the frontend architecture",
          "Growing the design system and UI kit",
          "Integrating third-party services",
          "Setting up CI/CD processes",
          "Working with backend and product",
          "Code review",
          "Discussing architecture decisions",
          "Improving the development process and making the team more effective",
        ],
        highlights: [
          "Added multiple languages (next-intl)",
          "Set up a custom FSD structure and a monorepo with a separate packages layer (Turborepo)",
          "Integrated and customized chat based on GetStream",
          "Introduced code review and unit testing (Vitest)",
          "Organized the design system and set up token syncing from Figma",
          "Set up CI/CD in GitHub (GitHub Actions) and GitLab to automate builds, testing and delivery",
        ],
      },
      {
        company: "Self Studio",
        role: "Frontend Developer",
        period: "Apr 2022 - Dec 2023",
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
          "Built a React Native astrology app together with another frontend developer, and it's live and generating revenue for the client (team of 5)",
          "Built the studio's project showcase on Next.js with an Airtable integration, used as a calling card in tender pitches",
          "Also helped develop an e-commerce startup in the cycling industry, using Next.js, GraphQL, Tailwind CSS and plenty of integrations, among many other things (team of 6)",
        ],
      },
      {
        company: "Mashroom",
        role: "Frontend Developer",
        period: "Aug 2022 - Jul 2023",
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
          "Sped up the frontend build by 5×",
          "Refactored code previously written by another frontend team: improved readability and maintainability, and reduced frontend responsibility where possible",
          "Worked on optimizing pages and key Google metrics",
          "Removed a large number of duplicate UI components and assembled a new ui-kit, cutting bundle size and improving Google PageSpeed scores",
          "Removed unnecessary dependencies and migrated Emotion styles in the public part to CSS Modules, reducing bundle size and improving page performance",
          "Handled support: cleared accumulated bugs and shrank the team backlog, and shipped new features including landlord identity verification",
          "Helped with the implementation and data structure of custom blog article blocks provided by WordPress",
          "Set up internal frontend team processes: code review, working with task managers and sharing experience",
        ],
      },
      {
        company: "Self-employed / Freelance",
        role: "Frontend Web Developer",
        period: "Mar 2013 - Mar 2022",
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
          'Collaborated with studios like <a href="https://loo.ch/" target="_blank" rel="noopener noreferrer" class="underline decoration-line underline-offset-4 transition-colors hover:decoration-content">loo.ch</a>, <a href="https://m-a-x.online/" target="_blank" rel="noopener noreferrer" class="underline decoration-line underline-offset-4 transition-colors hover:decoration-content">m-a-x.design</a> and gorbach.co',
          "Built a UI kit for a marketing automation platform (React, TypeScript, Styled Components, RTL, Cypress)",
          'Frontend for a <a href="https://thelocals.ru/" target="_blank" rel="noopener noreferrer" class="underline decoration-line underline-offset-4 transition-colors hover:decoration-content">real-estate rental site</a> and a universal admin panel reused across projects (Next.js)',
          "E-commerce in cycling & footwear with Bitrix integration (Preact, Next.js, Redux)",
          "Lightweight webpages optimized for slower connections, enhanced with simple CSS animations",
        ],
      },
    ],
  },
  education: {
    items: [
      {
        institution: "Belarusian State Academy of Communications",
        degree: "Higher Education · Telecommunications software development",
        period: "2008 - 2011",
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
          "Astro",
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
      "Основной стек: Next.js, React, React Native, Tailwind CSS, CSS Modules, CSS-in-JS и другие. Но я не привязан к конкретным технологиям: если проекту нужно что-то другое, разберусь.",
    ],
    availability: "✅ Активно ищу работу",
    location: "📍 Живу в Турции",
  },
  journey: {
    responsibilitiesLabel: "Основные задачи и ответственность",
    achievementsLabel: "Ключевые задачи и достижения",
    jobs: [
      {
        company: "Действующая FinTech-компания",
        role: "Frontend-инженер",
        period: "Май 2026 - Авг 2026",
        tags: [
          "React Native",
          "Expo",
          "Next.js",
          "Sumsub",
          "HubSpot",
          "GitHub Copilot",
          "Cursor",
          "Claude Code",
        ],
        responsibilities: [
          "Разработка двух мобильных банковских приложений на React Native (Expo) и двух веб-платформ интернет-банкинга на Next.js в сжатые сроки",
          "Разработка фич, связанных с процессом регистрации, верификации пользователей и компаний",
          "Внедрение геймификации для повышения вовлечённости клиентов",
          "Обсуждение задач, декомпозиция и приоритизация",
        ],
        highlights: [
          "Разработал два приложения и две веб-платформы интернет-банкинга, обеспечив быструю доставку",
          "Реализовал функциональность регистрации обычных пользователей и компаний со сбором лидов в HubSpot",
          "Интегрировал Sumsub для процессов KYC/KYB",
          "Реализовал геймификацию",
        ],
      },
      {
        company: "EdTech-стартап",
        role: "Frontend-инженер",
        period: "Мар 2024 - Апр 2026",
        tags: [
          "Next.js",
          "React",
          "Apollo GraphQL",
          "Tailwind CSS",
          "Vitest",
          "FSD",
          "Turborepo",
          "shadcn",
          "GetStream",
        ],
        responsibilities: [
          "Разработка многоязычной образовательной платформы в составе команды из 7 разработчиков (3 frontend-разработчика)",
          "Участие в обсуждении бизнес-задач, их декомпозиции, определении приоритетов и сроков",
          "Проектирование frontend-архитектуры",
          "Развитие дизайн-системы и UI-кита",
          "Интеграция сторонних сервисов",
          "Настройка CI/CD процессов",
          "Взаимодействие с backend и product",
          "Code review",
          "Обсуждение архитектурных решений",
          "Улучшение процессов разработки и повышение эффективности команды",
        ],
        highlights: [
          "Реализовал мультиязычность (next-intl)",
          "Внедрил кастомную FSD и монорепозиторий с отдельным слоем packages (Turborepo)",
          "Интегрировал и кастомизировал чаты на основе GetStream",
          "Внедрил code review и юнит-тестирование (Vitest)",
          "Систематизировал дизайн-систему и настроил синхронизацию токенов из Figma",
          "Настроил CI/CD в GitHub (GitHub Actions) и GitLab для автоматизации сборки, тестирования и доставки изменений",
        ],
      },
      {
        company: "Self Studio",
        role: "Frontend-разработчик",
        period: "Апр 2022 - Дек 2023",
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
          "Занимался разработкой астрологического приложения на React Native, которое сейчас активно работает и приносит прибыль клиенту (команда из 5 человек)",
          "Собрал сайт проектов студии на Next.js с интеграцией Airtable. Использовали его как визитную карточку на тендерах",
          "Также участвовал в разработке e-commerce-стартапа в сфере велоиндустрии: Next.js, GraphQL, Tailwind CSS и множество интеграций. И многое другое (команда из 6 человек)",
        ],
      },
      {
        company: "Mashroom",
        role: "Frontend-разработчик",
        period: "Авг 2022 - Июл 2023",
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
          "Ускорил сборку фронтенда в 5 раз",
          "Провёл рефакторинг кода, доставшегося от другой фронтенд-команды: улучшил читаемость и поддерживаемость, а где мог, разгрузил фронтенд от лишней ответственности",
          "Занимался оптимизацией страниц и ключевых метрик Google",
          "Удалил множество дублирующихся UI-компонентов и собрал новый ui-kit, что уменьшило размер бандла и улучшило показатели Google PageSpeed",
          "Убрал лишние зависимости и перевёл Emotion-стили в публичной части на CSS Modules, что уменьшило размер бандла и повысило производительность страниц",
          "Сократил количество накопившихся багов и уменьшил бэклог команды, а также реализовал новые фичи, включая верификацию личности арендодателей",
          "Интеграция с WordPress: участвовал в реализации и структурировании данных кастомных блоков статей",
          "Настроил внутренние процессы фронтенд-команды: код-ревью, работу с таск-трекерами и обмен опытом",
        ],
      },
      {
        company: "Self-employed / Freelance",
        role: "Frontend Web Developer",
        period: "Мар 2013 - Мар 2022",
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
          'Сотрудничал со студиями <a href="https://loo.ch/" target="_blank" rel="noopener noreferrer" class="underline decoration-line underline-offset-4 transition-colors hover:decoration-content">loo.ch</a>, <a href="https://m-a-x.online/" target="_blank" rel="noopener noreferrer" class="underline decoration-line underline-offset-4 transition-colors hover:decoration-content">m-a-x.design</a>, gorbach.co и другими',
          "Собрал UI-kit для платформы marketing automation (React, TypeScript, Styled Components, RTL, Cypress)",
          'Фронтенд <a href="https://thelocals.ru/" target="_blank" rel="noopener noreferrer" class="underline decoration-line underline-offset-4 transition-colors hover:decoration-content">сайта аренды недвижимости</a> и универсальная админ-панель, которую переиспользовали в нескольких проектах (Next.js)',
          "E-commerce в вело- и обувной нишах с интеграцией Bitrix (Preact, Next.js, Redux)",
          "Лёгкие страницы, оптимизированные под медленный интернет, с простыми CSS-анимациями",
        ],
      },
    ],
  },
  education: {
    items: [
      {
        institution: "Белорусская государственная академия связи",
        degree: "Высшее · Разработка ПО в телекоммуникациях",
        period: "2008 - 2011",
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
          "Astro",
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
