import { useEffect, useRef, useState } from "react";
import HandsHero from "./components/HandsHero";
import {
  Lang, ui, skills, projects, experience, education, certs, award, expertise,
  email, phone, linkedin, GH,
} from "./data";

const clamp = (v: number) => Math.min(1, Math.max(0, v));

export default function App() {
  const [lang, setLang] = useState<Lang>("en");
  const [view, setView] = useState<"grid" | "list">("grid");
  const [menu, setMenu] = useState(false);
  const [progress, setProgress] = useState(0);
  const heroRef = useRef<HTMLElement>(null);
  const t = (l: Record<Lang, string>) => l[lang];
  const rtl = lang === "ur";

  useEffect(() => {
    document.documentElement.lang = lang;
    document.documentElement.dir = rtl ? "rtl" : "ltr";
  }, [lang, rtl]);

  useEffect(() => {
    const onScroll = () => {
      const el = heroRef.current; if (!el) return;
      const total = el.offsetHeight - window.innerHeight;
      setProgress(clamp(-el.getBoundingClientRect().top / total));
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const links = ["projects", "skills", "about", "certs", "contact"] as const;
  const textFade = clamp(1 - progress / 0.22);

  return (
    <div className="min-h-screen bg-ink text-white">
      {/* NAV */}
      <header className="fixed inset-x-0 top-0 z-50 flex items-center justify-between px-6 py-4" dir="ltr">
        <a href="#home" className="flex h-10 w-10 items-center justify-center bg-black font-display text-2xl">W</a>
        <div className="hidden items-center gap-6 bg-black/70 px-6 py-3 backdrop-blur md:flex">
          <span className="font-mono text-[10px] uppercase tracking-widest">{ui.title.en}</span>
          <button aria-label="menu" onClick={() => setMenu(!menu)} className="flex flex-col gap-1">
            <i className="block h-px w-4 bg-white" /><i className="block h-px w-4 bg-white" />
          </button>
        </div>
        <div className="flex font-mono text-xs">
          {(["en", "ur"] as Lang[]).map((l) => (
            <button key={l} onClick={() => setLang(l)}
              className={`px-3 py-2 uppercase ${lang === l ? "bg-white text-black" : "bg-black/70 text-white/60"}`}>
              {l === "en" ? "EN" : "اردو"}
            </button>
          ))}
        </div>
      </header>
      {menu && (
        <nav className="fixed inset-0 z-40 flex flex-col items-center justify-center gap-6 bg-ink/95 font-display text-5xl" onClick={() => setMenu(false)}>
          {links.map((k) => <a key={k} href={`#${k}`}>{t(ui.nav[k])}</a>)}
        </nav>
      )}
      <a href="#contact" className="fixed right-0 top-[40%] z-40 hidden w-12 bg-mint py-6 text-center font-display text-3xl text-black md:block">
        W.<span className="mt-3 block font-mono text-[11px] [writing-mode:vertical-rl] mx-auto rotate-180">{t(ui.openToWork)}</span>
      </a>

      {/* HERO with ASCII hands */}
      <section id="home" ref={heroRef} className="relative h-[320vh]">
        <div className="sticky top-0 h-screen overflow-hidden">
          <HandsHero progress={progress} />
          <div className="relative z-10 flex h-full flex-col justify-center px-6 md:px-14" style={{ opacity: textFade, transform: `translateY(${-progress * 60}px)` }}>
            <h1 className="max-w-5xl font-display text-6xl leading-[1.02] md:text-8xl">
              {t(ui.heroA)} <span className="hl">{t(ui.heroB)}</span><br />
              <span className="hl">{t(ui.heroC)}</span>
            </h1>
            <p className="mt-8 max-w-xl text-sm text-white/70">{t(ui.heroP)}</p>
            <div className="mt-8 flex items-center gap-6 font-mono text-xs uppercase tracking-widest">
              <a href="#contact" className="border border-white px-6 py-3">{t(ui.write)}</a>
              <a href="#projects" className="border-b border-white pb-1">{t(ui.seeProjects)}</a>
            </div>
          </div>
        </div>
      </section>

      {/* SKILLS */}
      <section id="skills" className="px-6 py-28 md:px-14">
        <h2 className="max-w-4xl font-display text-5xl md:text-7xl"><span className="hl">{t(ui.skillsTitle)}</span></h2>
        <div className="mt-16 grid gap-10 md:grid-cols-3 lg:grid-cols-5">
          {skills.map((s) => (
            <div key={s.title.en} className="border-t border-white/20 pt-5">
              <h3 className="font-display text-2xl">{t(s.title)}</h3>
              <ul className="mt-4 space-y-2 font-mono text-[11px] uppercase text-white/60" dir="ltr">
                {s.items.map((i) => <li key={i}>{i}</li>)}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* PROJECTS */}
      <section id="projects" className="px-6 py-28 md:px-14">
        <div className="flex items-end justify-between">
          <h2 className="font-display text-5xl md:text-7xl">{t(ui.projectsTitle)}</h2>
          <div className="flex font-mono text-[11px] uppercase" dir="ltr">
            {(["grid", "list"] as const).map((v) => (
              <button key={v} onClick={() => setView(v)} className={`px-4 py-2 ${view === v ? "bg-brand" : "bg-white/10"}`}>{t(ui[v])}</button>
            ))}
          </div>
        </div>
        <div className={`mt-14 grid gap-8 ${view === "grid" ? "md:grid-cols-2" : "grid-cols-1"}`}>
          {projects.map((p, i) => (
            <a key={p.name} href={p.url} target="_blank" rel="noreferrer"
               className={`group border border-white/15 p-6 transition hover:border-brand hover:bg-brand/10 ${view === "list" ? "md:flex md:items-center md:gap-10" : ""}`}>
              <span className="font-mono text-xs text-brand">0{i + 1}</span>
              <div className="mt-3 md:mt-0 md:flex-1">
                <h3 className="font-display text-3xl">{p.name}</h3>
                <p className="mt-1 font-mono text-[11px] uppercase text-white/50" dir="ltr">{p.tech}</p>
                <p className="mt-4 text-sm text-white/70">{t(p.desc)}</p>
              </div>
              <span className="mt-5 inline-block border-b border-white font-mono text-[11px] uppercase">{t(ui.viewCode)} ↗</span>
            </a>
          ))}
        </div>
      </section>

      {/* ABOUT / EXPERIENCE / EDUCATION */}
      <section id="about" className="px-6 py-28 md:px-14">
        <h2 className="font-display text-4xl text-white/60">{t(ui.summaryTitle)}</h2>
        <p className="mt-6 max-w-4xl font-display text-3xl leading-snug md:text-4xl">{t(ui.summary)}</p>
        <div className="mt-20 grid gap-14 md:grid-cols-2">
          <div>
            <h3 className="font-display text-3xl">{t(ui.expTitle)}</h3>
            <div className="mt-6 border-t border-white/20 pt-5">
              <p className="text-lg">{t(experience.role)}</p>
              <p className="font-mono text-xs text-white/50">{t(experience.date)}</p>
              <ul className="mt-4 list-disc space-y-3 ps-5 text-sm text-white/70">
                {experience.points.map((x, i) => <li key={i}>{t(x)}</li>)}
              </ul>
            </div>
          </div>
          <div>
            <h3 className="font-display text-3xl">{t(ui.eduTitle)}</h3>
            {education.map((e) => (
              <div key={e.date} className="mt-6 border-t border-white/20 pt-5">
                <p className="text-lg">{t(e.name)}</p>
                <p className="font-mono text-xs text-white/50">{e.date}</p>
              </div>
            ))}
            <h3 className="mt-14 font-display text-3xl">{t(ui.awardTitle)}</h3>
            <p className="mt-4 border-t border-white/20 pt-5 text-sm text-white/70">{t(award)}</p>
          </div>
        </div>
      </section>

      {/* CERTIFICATIONS */}
      <section id="certs" className="px-6 py-28 md:px-14">
        <h2 className="font-display text-5xl md:text-7xl">{t(ui.certTitle)}</h2>
        <div className="mt-14 grid gap-8 md:grid-cols-2">
          {certs.filter((c) => !c.hidden).map((c) => (
            <article key={c.name.en} className="border border-white/15 p-6">
              {c.image && <img src={c.image} alt={c.name.en} className="mb-5 w-full" />}
              <h3 className="font-display text-3xl">{t(c.name)}</h3>
              <p className="mt-1 font-mono text-[11px] uppercase text-white/50" dir="ltr">{c.org} · {t(c.date)}</p>
              <p className="mt-4 text-sm text-white/70">{t(c.text)}</p>
            </article>
          ))}
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="px-6 pb-10 pt-28 md:px-14">
        <h2 className="font-display text-[18vw] leading-none text-brand md:text-[13vw]" dir="ltr">WAHAB</h2>
        <div className="mt-12 grid gap-12 md:grid-cols-2">
          <div className="space-y-2 font-display text-3xl md:text-5xl" dir="ltr">
            <a href={`mailto:${email}`} className="block break-all">{email}</a>
            <p dir={rtl ? "rtl" : "ltr"}>{t(ui.based)}</p>
            <p dir={rtl ? "rtl" : "ltr"}>{t(ui.remote)}</p>
          </div>
          <div>
            <h3 className="font-display text-3xl">{t(ui.contactA)}</h3>
            <div className="mt-6 flex flex-wrap gap-2" dir="ltr">
              {expertise.map((x) => <span key={x} className="bg-white px-3 py-2 font-mono text-[10px] uppercase text-black">{x}</span>)}
            </div>
          </div>
        </div>
        <footer className="mt-24 flex flex-wrap items-center justify-between gap-4 border-t border-white/15 pt-6 font-mono text-[11px] uppercase text-white/60" dir="ltr">
          <div className="flex gap-6">
            {links.map((k) => <a key={k} href={`#${k}`}>{ui.nav[k].en}</a>)}
          </div>
          <div className="flex gap-6">
            <a href={GH} target="_blank" rel="noreferrer">GitHub</a>
            <a href={linkedin} target="_blank" rel="noreferrer">LinkedIn</a>
            <a href={`tel:${phone}`}>{phone}</a>
          </div>
          <span>© 2026 Wahab-ur-Rehman · {t(ui.rights)}</span>
        </footer>
      </section>
    </div>
  );
}
