# Wahab's Portfolio

### A Bilingual Developer Portfolio Built with React, TypeScript, and Tailwind CSS

A personal portfolio website showcasing my profile, technical skills, projects, experience, education, certifications, and contact information.

---

## Overview

Wahab's Portfolio is a responsive personal website designed to present my journey as a developer in one place. It combines a modern dark theme, an animated hero section, and organized portfolio sections to make professional information easy to explore.

The website supports English and Urdu, including right-to-left (RTL) layout for Urdu content. React components manage the interface, while TypeScript keeps the content and application logic structured and maintainable.

## Features

- **Bilingual Interface:** Switch between English and Urdu.
- **RTL Support:** The page direction changes when Urdu is selected.
- **Animated Hero Section:** Canvas-based artwork responds to scroll progress.
- **Projects Showcase:** Explore selected projects and switch between grid and list views.
- **Skills Section:** View technical skills in organized categories.
- **Professional Profile:** Includes experience, education, certifications, and achievements.
- **Contact Links:** Access configured email, phone, GitHub, and LinkedIn links.
- **Responsive Design:** Layout adapts to different screen sizes using Tailwind CSS.
- **Reusable Components:** React helps keep the interface organized and maintainable.

## Technologies Used

| Technology | Purpose |
|---|---|
| React 18 | Component-based user interface and state management |
| TypeScript | Typed application logic and portfolio data |
| Tailwind CSS 3 | Responsive styling and utility classes |
| Vite | Development server and production build |
| HTML5 | Website structure |
| CSS3 | Global styling and visual effects |
| Canvas API | Animated hero visual |
| Git & GitHub | Version control and source-code hosting |

## Project Structure

```text
Portfolio-Website/
├── index.html
├── package.json
├── postcss.config.js
├── tailwind.config.js
├── tsconfig.json
├── vite.config.ts
├── public/
│   ├── hands-mask.png
│   └── certificate-lumsx.png
└── src/
    ├── App.tsx
    ├── data.ts
    ├── index.css
    ├── main.tsx
    └── components/
        └── HandsHero.tsx
```

## How It Works

- **App.tsx:** Combines the navigation, hero, projects, skills, experience, education, certifications, and contact sections. It also manages language selection and project layout.
- **data.ts:** Stores structured portfolio information and bilingual content in TypeScript.
- **HandsHero.tsx:** Creates the animated hero artwork using the Canvas API and responds to scrolling and window resizing.
- **index.css:** Defines global styles and text treatments.
- **tailwind.config.js:** Contains the custom theme configuration, colors, and fonts.
- **public/:** Stores static image assets used by the website.

## Customization

To update portfolio content, edit the relevant entries in `src/data.ts`.

To change the visual theme, review `tailwind.config.js` and `src/index.css`.

To replace images, update the assets in the `public` directory and ensure their references remain correct.

## Future Improvements

- Add automated testing for interactive features.
- Improve accessibility and keyboard navigation.
- Add reduced-motion support for users who prefer less animation.
- Optimize images and other assets for faster loading.
- Configure automated deployment.
- Verify and maintain all project and social links.

## Author

**Wahab ur Rehman**

---

*Built with React, TypeScript, and Tailwind CSS.*
