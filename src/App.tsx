import { useEffect, useState, type ReactNode } from 'react'
import { Icons } from './components/Icons'
import { useReveal } from './hooks/useReveal'
import { competencies, education, experience, profile, projects, skills } from './data'

const navLinks = [
  { href: '#about', label: 'About' },
  { href: '#expertise', label: 'Expertise' },
  { href: '#experience', label: 'Experience' },
  { href: '#projects', label: 'Projects' },
  { href: '#skills', label: 'Skills' },
  { href: '#contact', label: 'Contact' },
]

function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled ? 'border-b border-white/5 bg-slate-950/80 backdrop-blur-lg' : 'bg-transparent'
      }`}
    >
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <a href="#top" className="group flex items-center gap-2 font-semibold text-white">
          <span className="grid h-9 w-9 place-items-center rounded-lg bg-brand-500 text-sm font-bold text-white shadow-lg shadow-brand-500/30">
            MD.
          </span>
          <span className="hidden text-sm tracking-wide sm:block">Nazmul Hossain</span>
        </a>

        <div className="hidden items-center gap-1 md:flex">
          {navLinks.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="rounded-md px-3 py-2 text-sm text-slate-400 transition-colors hover:text-white"
            >
              {l.label}
            </a>
          ))}
          <a
            href={`mailto:${profile.email}`}
            className="ml-2 inline-flex items-center gap-1.5 rounded-md bg-brand-500 px-4 py-2 text-sm font-medium text-white transition hover:bg-brand-400"
          >
            Hire me <Icons.arrow className="h-3.5 w-3.5" />
          </a>
        </div>

        <button
          onClick={() => setOpen((v) => !v)}
          className="grid h-10 w-10 place-items-center rounded-md text-slate-300 md:hidden"
          aria-label="Toggle menu"
        >
          <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round">
            {open ? <path d="M6 6l12 12M18 6 6 18" /> : <path d="M4 7h16M4 12h16M4 17h16" />}
          </svg>
        </button>
      </nav>

      {open && (
        <div className="border-t border-white/5 bg-slate-950/95 px-6 py-4 md:hidden">
          <div className="flex flex-col gap-1">
            {navLinks.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="rounded-md px-3 py-2.5 text-sm text-slate-300 hover:bg-white/5 hover:text-white"
              >
                {l.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </header>
  )
}

function Hero() {
  return (
    <section id="top" className="relative overflow-hidden pt-36 pb-24 sm:pt-44">
      <div className="grid-bg absolute inset-0" />
      <div className="absolute -top-32 -right-24 h-96 w-96 animate-float-slow rounded-full bg-brand-600/20 blur-3xl" />
      <div className="absolute top-40 -left-24 h-80 w-80 animate-float-slow rounded-full bg-indigo-600/10 blur-3xl [animation-delay:-6s]" />
      <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-b from-transparent to-slate-950" />

      <div className="relative mx-auto max-w-6xl px-6">
        <div className="reveal max-w-3xl">
          <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-xs font-medium text-brand-300">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
            </span>
            Available for new opportunities
          </span>

          <h1 className="mt-6 text-4xl font-bold leading-[1.05] tracking-tight text-white sm:text-6xl">
            {profile.name}
          </h1>
          <p className="mt-4 bg-gradient-to-r from-brand-300 to-indigo-300 bg-clip-text text-xl font-semibold text-transparent sm:text-2xl">
            {profile.title}
          </p>
          <p className="mt-6 max-w-2xl text-base leading-relaxed text-slate-400 sm:text-lg">
            I design, build, and scale end-to-end platforms — async Python backends, modern React frontends, cloud
            infrastructure, and production LLM workflows — for products serving 50K+ users.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a
              href="#projects"
              className="inline-flex items-center gap-2 rounded-lg bg-brand-500 px-5 py-3 text-sm font-medium text-white transition hover:bg-brand-400"
            >
              View my work <Icons.arrow />
            </a>
            <a
              href={`mailto:${profile.email}`}
              className="inline-flex items-center gap-2 rounded-lg border border-white/10 bg-white/5 px-5 py-3 text-sm font-medium text-white transition hover:bg-white/10"
            >
              <Icons.mail className="h-4 w-4" /> Get in touch
            </a>
            <div className="ml-1 flex items-center gap-1">
              <IconLink href={profile.github} label="GitHub">
                <Icons.github />
              </IconLink>
              <IconLink href={profile.linkedin} label="LinkedIn">
                <Icons.linkedin />
              </IconLink>
            </div>
          </div>
        </div>

        <div className="reveal mt-16 grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-white/10 bg-white/5 sm:grid-cols-4">
          {profile.stats.map((s) => (
            <div key={s.label} className="bg-slate-950/40 px-6 py-7 text-center">
              <div className="text-3xl font-bold text-white sm:text-4xl">{s.value}</div>
              <div className="mt-1 text-xs uppercase tracking-wider text-slate-500">{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function IconLink({ href, label, children }: { href: string; label: string; children: ReactNode }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      aria-label={label}
      className="grid h-11 w-11 place-items-center rounded-lg border border-white/10 bg-white/5 text-slate-300 transition hover:border-brand-400/40 hover:text-white"
    >
      {children}
    </a>
  )
}

function SectionHeading({ eyebrow, title, sub }: { eyebrow: string; title: string; sub?: string }) {
  return (
    <div className="reveal max-w-2xl">
      <p className="text-sm font-semibold uppercase tracking-[0.2em] text-brand-400">{eyebrow}</p>
      <h2 className="mt-3 text-3xl font-bold tracking-tight text-white sm:text-4xl">{title}</h2>
      {sub && <p className="mt-4 text-base leading-relaxed text-slate-400">{sub}</p>}
    </div>
  )
}

function About() {
  return (
    <section id="about" className="mx-auto max-w-6xl scroll-mt-20 px-6 py-24">
      <SectionHeading eyebrow="About" title="Full-stack engineering with high agency" />
      <div className="reveal mt-8 grid gap-8 lg:grid-cols-3">
        <p className="text-base leading-relaxed text-slate-400 lg:col-span-2">{profile.summary}</p>
        <ul className="space-y-3 text-sm">
          {[
            'Multi-tenant SaaS architecture',
            'Async Python at 8M+ req/month',
            'Component library across 12 teams',
            'Production LLM workflows',
            'Infrastructure-as-code on AWS/GCP',
          ].map((item) => (
            <li key={item} className="flex items-start gap-3 rounded-lg border border-white/5 bg-white/5 px-4 py-3 text-slate-300">
              <Icons.arrow className="mt-0.5 h-4 w-4 shrink-0 text-brand-400" />
              {item}
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}

function Expertise() {
  return (
    <section id="expertise" className="scroll-mt-20 border-y border-white/5 bg-white/[0.02] py-24">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading
          eyebrow="Core Competencies"
          title="What I bring to the table"
          sub="Six areas where I consistently ship measurable outcomes — from platform architecture down to production reliability."
        />
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {competencies.map((c) => {
            const Icon = Icons[c.icon]
            return (
              <div
                key={c.title}
                className="reveal group relative overflow-hidden rounded-2xl border border-white/10 bg-slate-900/40 p-6 transition duration-300 hover:-translate-y-1 hover:border-brand-400/30"
              >
                <div className="absolute inset-x-0 -top-px h-px bg-gradient-to-r from-transparent via-brand-400/60 to-transparent opacity-0 transition group-hover:opacity-100" />
                <div className="grid h-12 w-12 place-items-center rounded-xl bg-brand-500/10 text-brand-400 ring-1 ring-brand-500/20">
                  <Icon className="h-6 w-6" />
                </div>
                <h3 className="mt-5 text-lg font-semibold text-white">{c.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-400">{c.body}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

function Experience() {
  return (
    <section id="experience" className="mx-auto max-w-6xl scroll-mt-20 px-6 py-24">
      <SectionHeading eyebrow="Experience" title="Where I've made an impact" />
      <div className="mt-12 space-y-8">
        {experience.map((job) => (
          <div
            key={job.company}
            className="reveal relative rounded-2xl border border-white/10 bg-slate-900/40 p-6 sm:p-8"
          >
            <div className="flex flex-col gap-1 border-b border-white/5 pb-5 sm:flex-row sm:items-start sm:justify-between">
              <div>
                <h3 className="text-xl font-semibold text-white">{job.role}</h3>
                <p className="mt-1 text-brand-400">
                  {job.company} <span className="text-slate-600">·</span>{' '}
                  <span className="text-slate-500">{job.location}</span>
                </p>
              </div>
              <span className="shrink-0 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-medium text-slate-400">
                {job.period}
              </span>
            </div>
            <ul className="mt-5 space-y-3">
              {job.points.map((p, i) => (
                <li key={i} className="flex gap-3 text-sm leading-relaxed text-slate-400">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-brand-500" />
                  {p}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  )
}

function Projects() {
  return (
    <section id="projects" className="scroll-mt-20 border-y border-white/5 bg-white/[0.02] py-24">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading
          eyebrow="Selected Projects"
          title="Things I've built"
          sub="Platforms and tools spanning microservices, multi-tenant SaaS, AI developer tooling, and test automation."
        />
        <div className="mt-12 grid gap-5 md:grid-cols-2">
          {projects.map((p, i) => (
            <article
              key={p.name}
              className={`reveal group flex flex-col rounded-2xl border border-white/10 bg-slate-900/40 p-6 transition duration-300 hover:-translate-y-1 hover:border-brand-400/30 ${
                i === 0 ? 'md:col-span-2' : ''
              }`}
            >
              <div className="flex items-start justify-between gap-4">
                <h3 className="text-lg font-semibold text-white transition group-hover:text-brand-300">{p.name}</h3>
                <span className="text-slate-600 transition group-hover:text-brand-400">
                  <Icons.arrow className="h-5 w-5 -rotate-45" />
                </span>
              </div>
              <p className="mt-3 flex-1 text-sm leading-relaxed text-slate-400">{p.desc}</p>
              <div className="mt-5 flex flex-wrap gap-2">
                {p.tags.map((t) => (
                  <span
                    key={t}
                    className="rounded-md border border-white/10 bg-white/5 px-2.5 py-1 text-xs font-medium text-slate-300"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

function Skills() {
  return (
    <section id="skills" className="mx-auto max-w-6xl scroll-mt-20 px-6 py-24">
      <SectionHeading eyebrow="Technical Skills" title="My toolbox" />
      <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {skills.map((s) => (
          <div key={s.group} className="reveal rounded-2xl border border-white/10 bg-slate-900/40 p-5">
            <h3 className="text-sm font-semibold uppercase tracking-wider text-brand-400">{s.group}</h3>
            <div className="mt-3 flex flex-wrap gap-2">
              {s.items.map((item) => (
                <span
                  key={item}
                  className="rounded-md bg-white/5 px-2.5 py-1 text-xs text-slate-300 ring-1 ring-white/5"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className="reveal mt-8 rounded-2xl border border-white/10 bg-slate-900/40 p-6 sm:p-8">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="text-sm font-semibold uppercase tracking-wider text-brand-400">Education</p>
            <h3 className="mt-2 text-lg font-semibold text-white">{education.degree}</h3>
            <p className="mt-1 text-slate-400">{education.school}</p>
          </div>
          <span className="shrink-0 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-medium text-slate-400">
            {education.period}
          </span>
        </div>
      </div>
    </section>
  )
}

function Contact() {
  return (
    <section id="contact" className="scroll-mt-20 py-24">
      <div className="mx-auto max-w-4xl px-6">
        <div className="reveal relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-brand-600/20 via-slate-900 to-slate-950 p-8 text-center sm:p-14">
          <div className="grid-bg absolute inset-0 opacity-40" />
          <div className="relative">
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">Let's build something together</h2>
            <p className="mx-auto mt-4 max-w-xl text-slate-400">
              I'm open to senior full-stack, backend, and AI/LLM engineering roles. Reach out and let's talk about how I
              can help your team ship.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-3">
              <a
                href={`mailto:${profile.email}`}
                className="inline-flex items-center gap-2 rounded-lg bg-brand-500 px-6 py-3 text-sm font-medium text-white transition hover:bg-brand-400"
              >
                <Icons.mail className="h-4 w-4" /> {profile.email}
              </a>
              <a
                href={`tel:${profile.phone.replace(/\s/g, '')}`}
                className="inline-flex items-center gap-2 rounded-lg border border-white/10 bg-white/5 px-6 py-3 text-sm font-medium text-white transition hover:bg-white/10"
              >
                <Icons.phone className="h-4 w-4" /> {profile.phone}
              </a>
            </div>
            <div className="mt-6 flex items-center justify-center gap-2 text-sm text-slate-500">
              <Icons.pin className="h-4 w-4" /> {profile.location}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function Footer() {
  return (
    <footer className="border-t border-white/5 py-10">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-6 sm:flex-row">
        <p className="text-sm text-slate-500">
          © {new Date().getFullYear()} {profile.name}. Built with React & Tailwind CSS.
        </p>
        <div className="flex items-center gap-1">
          <IconLink href={profile.github} label="GitHub">
            <Icons.github />
          </IconLink>
          <IconLink href={profile.linkedin} label="LinkedIn">
            <Icons.linkedin />
          </IconLink>
          <IconLink href={`mailto:${profile.email}`} label="Email">
            <Icons.mail />
          </IconLink>
        </div>
      </div>
    </footer>
  )
}

export default function App() {
  useReveal()
  return (
    <div className="min-h-screen">
      <Nav />
      <main>
        <Hero />
        <About />
        <Expertise />
        <Experience />
        <Projects />
        <Skills />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}
