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
    skills: "🛠️ Skills",
    contact: "🤝 Contacts",
  },
  hero: {
    name: "Alexander Kalinin",
    role: "Senior Frontend Developer",
    tagline: "Next.js · React · TypeScript",
    summary: [
      "I'm Alex, a frontend developer with experience in edtech, e-commerce, real-estate rental and marketing automation platforms. I've worked in teams of different sizes and enjoy clean, readable code, code reviews, a systematic approach to design and thoughtful decision-making.",
      "Core stack: Next.js, React, React Native, Tailwind CSS, CSS Modules, CSS-in-JS and more. But I'm not tied to specific technologies: if a project needs something else, I'll figure it out.",
    ],
    availability: "✅ Open to new opportunities",
    location: "📍 Based in Türkiye · Remote · Open to relocation",
  },
  journey: {
    responsibilitiesLabel: "Key responsibilities",
    achievementsLabel: "Key tasks and achievements",
    jobs: [
      {
        company: "Established FinTech Company",
        role: "Senior Frontend Developer",
        period: "May 2026 – Aug 2026 · Contract",
        tags: [
          "Next.js",
          "React Native",
          "Expo",
          "Zustand",
          "React Query",
          "Sumsub",
          "HubSpot",
          "GitHub Copilot",
          "Cursor",
          "Claude Code",
        ],
        responsibilities: [
          "Building a white-label fintech platform on tight deadlines with React Native (Expo) and Next.js",
          "Building sign-up, KYC/KYB verification, transfers and other core banking features",
          "Adding gamification to boost customer engagement",
          "Breaking tasks down and setting priorities",
        ],
        highlights: [
          "Built two mobile apps and two web platforms, delivering them quickly",
          "Built sign-up for individuals and businesses, with lead capture and CRM sync in HubSpot",
          "Integrated Sumsub for KYC/KYB verification",
          "Implemented JWT access/refresh authentication and two-factor authentication (TOTP/SMS)",
          "Built transfers (internal, crypto and batch), currency exchange, vaults and cards",
          "Built the portfolio section with performance charts, allocation breakdown and top gainers and losers",
          "Built a gamification system with achievement badges and activity streaks to boost engagement",
        ],
      },
      {
        company: "EdTech Startup",
        role: "Senior Frontend Developer",
        period: "Mar 2024 – Apr 2026",
        tags: [
          "Next.js",
          "React",
          "Apollo GraphQL",
          "graphql-codegen",
          "gql.tada",
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
          "Built the frontend of an educational marketplace platform from scratch as part of the team",
          "Added multiple languages (next-intl)",
          "Set up a custom FSD structure and a monorepo with a separate packages layer (Turborepo)",
          "Improved development processes: Biome, Husky + commitlint, automated releases (release-it)",
          "Integrated and customized chat based on GetStream",
          "Introduced code review and unit testing (Vitest)",
          "Organized the design system and set up token syncing from Figma",
          "Set up CI/CD in GitHub (GitHub Actions) and GitLab to automate builds, testing and delivery",
        ],
      },
      {
        company: "Self Studio",
        role: "Frontend Developer",
        period: "Apr 2022 – Jul 2022, Aug 2023 – Dec 2023",
        location: "United Kingdom",
        url: "https://www.selfstudio.se/",
        tags: [
          "Next.js",
          "React",
          "Styled Components",
          "Shopify Restyle",
          "JavaScript",
          "Tailwind CSS",
          "Vite",
          "React Native",
          "Apollo GraphQL",
          "Git",
        ],
        highlights: [
          "Built a React Native astrology app together with another frontend developer, now live and generating revenue for the client (team of 5)",
          "Built the studio's project showcase on Next.js with an Airtable integration, used as a calling card in tender pitches",
          "Also helped develop an e-commerce startup in the cycling industry, using Next.js, GraphQL, Tailwind CSS and plenty of integrations, among many other things (team of 6)",
        ],
      },
      {
        company: "Mashroom",
        role: "Senior Frontend Developer",
        period: "Aug 2022 – Jul 2023 · Remote",
        location: "United Kingdom",
        url: "https://www.instagram.com/mashroomrent/",
        tags: [
          "Next.js",
          "Emotion",
          "CSS-in-JS",
          "React",
          "CSS Modules",
          "Apollo GraphQL",
          "Git",
        ],
        highlights: [
          "Sped up the frontend build 5× by reworking the configuration and adopting more efficient tools",
          "Set up frontend team processes alongside code review, task planning and knowledge sharing with colleagues",
          "Maintained and shipped new features (for example, landlord identity verification)",
          "Refactoring and architecture improvements: reworked significant parts of the codebase, improving readability and maintainability while reducing excessive load on the frontend",
          "UI performance: improved page load speed and Google Core Web Vitals",
          "Improved the existing UI kit and introduced a new one: removed many duplicate components, cutting bundle size and improving Google PageSpeed scores",
          "Styling: migrated the public part of the project from Emotion to CSS Modules, since Emotion added runtime overhead that bloated client-side code and slowed page loads",
          "WordPress integration: helped implement and structure the data for custom article blocks",
        ],
      },
      {
        company: "Self-employed",
        role: "Frontend Web Developer",
        period: "Mar 2013 – Mar 2022",
        tags: [
          "React",
          "TypeScript",
          "Next.js",
          "JavaScript",
          "HTML5",
          "CSS3",
          "jQuery",
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
        period: "2008 – 2011",
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
    skills: "🛠️ Навыки",
    contact: "🤝 Контакты",
  },
  hero: {
    name: "Александр Калинин",
    role: "Senior Frontend Developer",
    tagline: "Next.js · React · TypeScript",
    summary: [
      "Меня зовут Алекс, я frontend-разработчик с опытом в edtech, e-commerce, платформах аренды недвижимости и marketing automation. Работал в командах разного размера, люблю чистый и читаемый код, код-ревью, системный подход к дизайну и продуманные решения.",
      "Основной стек: Next.js, React, React Native, Tailwind CSS, CSS Modules, CSS-in-JS и другие. Но я не привязан к конкретным технологиям: если проекту нужно что-то другое, разберусь.",
    ],
    availability: "✅ Открыт к новым возможностям",
    location: "📍 Живу в Турции · Удалённо · Готов к релокации",
  },
  journey: {
    responsibilitiesLabel: "Основные задачи и ответственность",
    achievementsLabel: "Ключевые задачи и достижения",
    jobs: [
      {
        company: "Действующая FinTech-компания",
        role: "Senior Frontend-разработчик",
        period: "Май 2026 – Авг 2026 · Contract",
        tags: [
          "Next.js",
          "React Native",
          "Expo",
          "Zustand",
          "React Query",
          "Sumsub",
          "HubSpot",
          "GitHub Copilot",
          "Cursor",
          "Claude Code",
        ],
        responsibilities: [
          "Разработка white-label fintech-платформы в сжатые сроки на React Native (Expo) и Next.js",
          "Разработка фич, связанных с процессом регистрации, верификации KYC/KYB, переводов и других ключевых банковских операций",
          "Внедрение геймификации для повышения вовлечённости клиентов",
          "Декомпозиция задач и их приоритизация",
        ],
        highlights: [
          "Разработал два мобильных приложения и две веб-платформы, обеспечив быструю доставку",
          "Реализовал регистрацию физических лиц и компаний со сбором лидов и синхронизацией с CRM в HubSpot",
          "Интегрировал Sumsub для верификации KYC/KYB",
          "Реализовал JWT-аутентификацию с access/refresh-токенами и двухфакторную аутентификацию (TOTP/SMS)",
          "Реализовал функционал переводов (внутренние, крипто и пакетные), обмена валют, хранилищ и карт",
          "Собрал раздел портфеля с графиками доходности, распределением активов, лидерами роста и падения",
          "Внедрил систему геймификации с бейджами достижений и стриками активности для роста вовлечённости",
        ],
      },
      {
        company: "EdTech-стартап",
        role: "Senior Frontend-разработчик",
        period: "Мар 2024 – Апр 2026",
        tags: [
          "Next.js",
          "React",
          "Apollo GraphQL",
          "graphql-codegen",
          "gql.tada",
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
          "В составе команды с нуля разработал фронтенд образовательной marketplace-платформы",
          "Внедрил поддержку нескольких языков (next-intl)",
          "Внедрил кастомную FSD и монорепозиторий с отдельным слоем packages (Turborepo)",
          "Улучшил процессы разработки: Biome, Husky + commitlint, автоматические релизы (release-it)",
          "Интегрировал и кастомизировал чаты на основе GetStream",
          "Внедрил code review и юнит-тестирование (Vitest)",
          "Систематизировал дизайн-систему и настроил синхронизацию токенов из Figma",
          "Настроил CI/CD в GitHub (GitHub Actions) и GitLab для автоматизации сборки, тестирования и доставки изменений",
        ],
      },
      {
        company: "Self Studio",
        role: "Frontend-разработчик",
        period: "Апр 2022 – Июл 2022, Авг 2023 – Дек 2023",
        location: "Великобритания",
        url: "https://www.selfstudio.se/",
        tags: [
          "Next.js",
          "React",
          "Styled Components",
          "Shopify Restyle",
          "JavaScript",
          "Tailwind CSS",
          "Vite",
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
        role: "Senior Frontend-разработчик",
        period: "Авг 2022 – Июл 2023 · Remote",
        location: "Великобритания",
        url: "https://www.instagram.com/mashroomrent/",
        tags: [
          "Next.js",
          "Emotion",
          "CSS-in-JS",
          "React",
          "CSS Modules",
          "Apollo GraphQL",
          "Git",
        ],
        highlights: [
          "Ускорил сборку фронта в 5 раз за счёт пересмотра конфигурации и использования более эффективных инструментов",
          "Организовал процессы frontend-команды, а также занимался code review, участвовал в постановке задач и делился опытом с коллегами",
          "Поддержка и внедрение нового функционала (например, верификация владельцев недвижимости)",
          "Рефакторинг и улучшение архитектуры: переработал значительные участки кода, повысив читаемость, поддерживаемость и снизив избыточную нагрузку на фронтенд",
          "Оптимизация интерфейсов: занимался улучшением скорости загрузки страниц и показателей Google Core Web Vitals",
          "Улучшение существующего UI-кита и внедрение нового: удалил множество дублирующихся компонентов, что уменьшило размер бандла и улучшило показатели Google PageSpeed",
          "Работа со стилями: переписал публичную часть проекта с emotion на CSS-модули, поскольку emotion добавлял лишний код в runtime, что привело к избыточности кода на клиенте и более долгой загрузке страниц",
          "Интеграция с WordPress: участвовал в реализации и структурировании данных пользовательских блоков статей",
        ],
      },
      {
        company: "Self-employed",
        role: "Frontend Web Developer",
        period: "Мар 2013 – Мар 2022",
        tags: [
          "React",
          "TypeScript",
          "Next.js",
          "JavaScript",
          "HTML5",
          "CSS3",
          "jQuery",
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
        period: "2008 – 2011",
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
