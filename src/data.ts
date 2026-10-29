export type Lang = "en" | "ur";
export type L = Record<Lang, string>;

export const GH = "https://github.com/Wahaburrehman";

export const ui = {
  title: { en: "Wahab-ur-Rehman", ur: "وہاب الرحمان" } as L,
  nav: {
    home: { en: "Home", ur: "ہوم" }, projects: { en: "Projects", ur: "پروجیکٹس" },
    skills: { en: "Skills", ur: "مہارتیں" }, about: { en: "About", ur: "تعارف" },
    experience: { en: "Experience", ur: "تجربہ" }, certs: { en: "Certifications", ur: "سرٹیفکیٹس" },
    contact: { en: "Contact", ur: "رابطہ" },
  } as Record<string, L>,
  heroA: { en: "Responsive web", ur: "ریسپانسیو ویب" } as L,
  heroB: { en: "& mobile apps", ur: "اور موبائل ایپس" } as L,
  heroC: { en: "built with React.", ur: "ری ایکٹ کے ساتھ۔" } as L,
  heroP: {
    en: "Computer Science student & front-end developer in Karachi. I build clean, cross-browser interfaces with React, Tailwind CSS and a complete React Native app.",
    ur: "کراچی سے کمپیوٹر سائنس کا طالب علم اور فرنٹ اینڈ ڈیولپر۔ میں ری ایکٹ، ٹیل ونڈ سی ایس ایس اور ری ایکٹ نیٹو کے ساتھ صاف اور ہر براؤزر پر چلنے والے انٹرفیس بناتا ہوں۔",
  } as L,
  write: { en: "Write to me", ur: "مجھے لکھیں" } as L,
  seeProjects: { en: "See projects", ur: "پروجیکٹس دیکھیں" } as L,
  openToWork: { en: "Open to work", ur: "دستیاب" } as L,
  scrollHint: { en: "Scroll", ur: "نیچے سکرول کریں" } as L,
  summaryTitle: { en: "Professional Summary", ur: "پیشہ ورانہ خلاصہ" } as L,
  summary: {
    en: "Computer Science student (BS, DHA Suffa University) and Front-end Intern alumnus with strong JavaScript skills and working knowledge of React, Node.js, and Python. Experienced in building responsive, cross-browser web interfaces and a complete React Native mobile app. Eager to grow as a Junior Software Developer, with a strong learning mindset and problem-solving focus.",
    ur: "کمپیوٹر سائنس کا طالب علم (بی ایس، ڈی ایچ اے صفہ یونیورسٹی) اور فرنٹ اینڈ انٹرن، جاوا اسکرپٹ میں مضبوط مہارت کے ساتھ ری ایکٹ، نوڈ جے ایس اور پائتھن کا عملی علم رکھتا ہے۔ ریسپانسیو، کراس براؤزر ویب انٹرفیس اور مکمل ری ایکٹ نیٹو موبائل ایپ بنانے کا تجربہ ہے۔ جونیئر سافٹ ویئر ڈیولپر کے طور پر آگے بڑھنے کا خواہشمند، سیکھنے اور مسائل حل کرنے کا مضبوط جذبہ۔",
  } as L,
  skillsTitle: { en: "From interface to deployment.", ur: "انٹرفیس سے ڈیپلائمنٹ تک۔" } as L,
  projectsTitle: { en: "Selected projects", ur: "منتخب پروجیکٹس" } as L,
  grid: { en: "Grid", ur: "گرڈ" } as L, list: { en: "List", ur: "فہرست" } as L,
  viewCode: { en: "View on GitHub", ur: "گِٹ ہب پر دیکھیں" } as L,
  expTitle: { en: "Experience", ur: "تجربہ" } as L,
  eduTitle: { en: "Education", ur: "تعلیم" } as L,
  certTitle: { en: "Certifications & Workshops", ur: "سرٹیفکیٹس اور ورکشاپس" } as L,
  awardTitle: { en: "Awards & Achievements", ur: "ایوارڈز اور کامیابیاں" } as L,
  contactA: { en: "Let’s build something together.", ur: "آئیے مل کر کچھ بنائیں۔" } as L,
  based: { en: "Based in Karachi, Pakistan", ur: "کراچی، پاکستان میں مقیم" } as L,
  remote: { en: "Available remotely", ur: "ریموٹ کام کے لیے دستیاب" } as L,
  rights: { en: "All rights reserved", ur: "جملہ حقوق محفوظ ہیں" } as L,
};

export const email = "wahaburrehman327@gmail.com";
export const phone = "03323175401";
export const linkedin = "https://linkedin.com/in/wahab-ur-rehman";

export const skills: { title: L; items: string[] }[] = [
  { title: { en: "Languages", ur: "پروگرامنگ زبانیں" }, items: ["JavaScript (ES6+)", "Python", "C++", "C#", "HTML5", "CSS3"] },
  { title: { en: "Frameworks & Libraries", ur: "فریم ورکس اور لائبریریز" }, items: ["React", "React Native", "Node.js", "Bootstrap", "Tailwind CSS"] },
  { title: { en: "Databases", ur: "ڈیٹا بیس" }, items: ["MongoDB", "MySQL"] },
  { title: { en: "Tools", ur: "ٹولز" }, items: ["Git", "GitHub", "Figma", "Adobe Photoshop", "MS Office (Word, PowerPoint, Excel)"] },
  { title: { en: "Concepts", ur: "تصورات" }, items: ["Responsive Design", "Cross-Browser Compatibility", "State Management", "CRUD", "Version Control", "AI Agent Workflows (workshop-based)"] },
];

export const projects: { name: string; tech: string; url: string; desc: L }[] = [
  { name: "Personal Expense Tracker", tech: "React Native · JavaScript", url: GH + "/BO626--Wahab---Innovaxel---Mobile-App-Developer-",
    desc: { en: "A complete mobile expense-tracking app built end-to-end — UI, state management and CRUD logic — as a technical assessment for Innovaxel's Mobile App Developer role.",
            ur: "خرچ کا حساب رکھنے والی مکمل موبائل ایپ — یو آئی، اسٹیٹ مینجمنٹ اور CRUD لاجک سمیت — جو Innovaxel کے موبائل ایپ ڈیولپر رول کے ٹیکنیکل ٹیسٹ کے طور پر بنائی۔" } },
  { name: "Asset Management Dashboard", tech: "HTML · CSS · JavaScript", url: GH + "/technobeez-asset-dashboard",
    desc: { en: "A lightweight single-page dashboard to view, live-search, filter, sort, add, edit and delete asset records, with form validation, empty states and responsive layout.",
            ur: "اثاثوں کے ریکارڈ دیکھنے، لائیو سرچ، فلٹر، سورٹ، شامل، ایڈٹ اور ڈیلیٹ کرنے کے لیے ہلکا پھلکا سنگل پیج ڈیش بورڈ، فارم ویلیڈیشن اور ریسپانسیو لے آؤٹ کے ساتھ۔" } },
  { name: "Flappy Bird", tech: "HTML · CSS · JavaScript", url: GH + "/Flappy-Bird",
    desc: { en: "A browser-based Flappy Bird game with smooth gameplay and a responsive design.",
            ur: "براؤزر میں چلنے والی فلیپی برڈ گیم، ہموار گیم پلے اور ریسپانسیو ڈیزائن کے ساتھ۔" } },
  { name: "Auto Rental System", tech: "HTML · CSS · JavaScript", url: GH + "/Auto-Rental-System-",
    desc: { en: "A car rental website built with HTML, CSS and JavaScript.",
            ur: "ایچ ٹی ایم ایل، سی ایس ایس اور جاوا اسکرپٹ سے بنی کار رینٹل ویب سائٹ۔" } },
  { name: "Car Rental System", tech: "Python", url: GH + "/Car-Rental-System",
    desc: { en: "A car rental system built using Python.",
            ur: "پائتھن میں بنایا گیا کار رینٹل سسٹم۔" } },
];

export const experience = {
  role: { en: "Front-end Intern — HumanTek IT Services & Solutions", ur: "فرنٹ اینڈ انٹرن — HumanTek IT Services & Solutions" } as L,
  date: { en: "Aug 2025 – Sep 2025", ur: "اگست 2025 – ستمبر 2025" } as L,
  points: [
    { en: "Built and shipped responsive, cross-browser UI for client-facing web pages using HTML, CSS, JavaScript, Bootstrap, and Tailwind CSS.",
      ur: "ایچ ٹی ایم ایل، سی ایس ایس، جاوا اسکرپٹ، بوٹ اسٹریپ اور ٹیل ونڈ سی ایس ایس سے کلائنٹ کے ویب پیجز کے لیے ریسپانسیو اور کراس براؤزر یو آئی بنا کر ڈیلیور کیا۔" },
    { en: "Collaborated with the design team to implement modern UI/UX components and resolved rendering inconsistencies across Chrome, Firefox, and Safari.",
      ur: "ڈیزائن ٹیم کے ساتھ مل کر جدید یو آئی/یو ایکس کمپونینٹس بنائے اور کروم، فائر فاکس اور سفاری میں رینڈرنگ کے مسائل حل کیے۔" },
    { en: "Delivered all assigned tasks within the 6-week internship cycle while maintaining code review approval.",
      ur: "6 ہفتے کی انٹرن شپ میں تمام ٹاسکس بروقت مکمل کیے اور کوڈ ریویو کی منظوری برقرار رکھی۔" },
  ] as L[],
};

export const education: { name: L; date: string }[] = [
  { name: { en: "BS Computer Science — DHA Suffa University", ur: "بی ایس کمپیوٹر سائنس — ڈی ایچ اے صفہ یونیورسٹی" }, date: "2024 – 2028" },
  { name: { en: "Intermediate, Pre-Engineering — NCR College of Emerging Technology", ur: "انٹرمیڈیٹ، پری انجینئرنگ — این سی آر کالج آف ایمرجنگ ٹیکنالوجی" }, date: "2021 – 2023" },
];

export const certs: { name: L; org: string; date: L; text: L; image?: string; hidden?: boolean }[] = [
  { name: { en: "Build With AI Series", ur: "بلڈ وِد اے آئی سیریز" }, org: "DHA Suffa University & Google Developer Group", date: { en: "March 2026", ur: "مارچ 2026" },
    text: { en: "Workshops: The Agentic Revolution (AI agent architectures), High Speed Engineering (rapid development), The Deployment Masterclass (production deployment).",
            ur: "ورکشاپس: دی ایجنٹک ریولوشن (اے آئی ایجنٹ آرکیٹیکچرز)، ہائی اسپیڈ انجینئرنگ (تیز رفتار ڈیولپمنٹ)، دی ڈیپلائمنٹ ماسٹر کلاس (پروڈکشن ڈیپلائمنٹ)۔" } },
  { name: { en: "Mobile App Development", ur: "موبائل ایپ ڈیولپمنٹ" }, org: "NED University (PITP)", date: { en: "January 2026", ur: "جنوری 2026" },
    text: { en: "Android app development using Kotlin and Android Studio; built mobile apps with user-friendly UI.",
            ur: "کوٹلن اور اینڈرائیڈ اسٹوڈیو سے اینڈرائیڈ ایپ ڈیولپمنٹ؛ یوزر فرینڈلی یو آئی کے ساتھ موبائل ایپس بنائیں۔" } },
  { name: { en: "Big Data and Data Science", ur: "بگ ڈیٹا اور ڈیٹا سائنس" }, org: "NUST (PDC)", date: { en: "August 2023", ur: "اگست 2023" },
    text: { en: "Hands-on experience with big data technologies and data management using MongoDB.",
            ur: "بگ ڈیٹا ٹیکنالوجیز اور MongoDB کے ساتھ ڈیٹا مینجمنٹ کا عملی تجربہ۔" } },
  // NOTE: the uploaded certificate image is issued to "MUHAMMAD UMAR". Set hidden: false only if it is yours.
  { name: { en: "Business Communication and AI for Professionals", ur: "پروفیشنلز کے لیے بزنس کمیونیکیشن اور اے آئی" }, org: "LUMSx × Roshan Kal Academy × ilmX", date: { en: "October 2026", ur: "اکتوبر 2026" },
    text: { en: "Online non-credited course offered by LUMSx, in partnership with Roshan Kal Academy and ilmX, authorized by LUMS and PepsiCo.",
            ur: "LUMSx کا آن لائن نان کریڈٹ کورس، روشن کل اکیڈمی اور ilmX کے اشتراک سے، LUMS اور PepsiCo کی منظوری کے ساتھ۔" },
    image: "/certificate-lumsx.png", hidden: true },
];

export const award = {
  en: "HPSMUN 2018 (HPS): Represented in the Pak-India Summit; developed communication, diplomacy, and public speaking skills.",
  ur: "HPSMUN 2018 (HPS): پاک بھارت سمٹ میں نمائندگی کی؛ کمیونیکیشن، ڈپلومیسی اور پبلک اسپیکنگ کی مہارتیں نکھاریں۔",
} as L;

export const expertise = ["React", "Tailwind CSS", "React Native", "Node.js", "Python", "Responsive Design", "Cross-Browser", "State Management", "CRUD", "Git & GitHub", "Figma"];
