import { useState } from 'react'
import { ProjectCard } from '../components/ProjectCard.jsx'
import { sections } from '../data/projects.js'

const socialLinks = [
  {
    id: 'github',
    label: 'GitHub',
    href: 'https://github.com/TolomeoD',
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M12 .5a11.5 11.5 0 0 0-3.64 22.43c.57.1.78-.25.78-.56v-2c-3.18.7-3.85-1.54-3.85-1.54-.52-1.32-1.27-1.67-1.27-1.67-1.04-.71.08-.69.08-.69 1.15.08 1.75 1.19 1.75 1.19 1.02 1.75 2.67 1.24 3.32.94.1-.75.4-1.25.72-1.54-2.54-.29-5.21-1.28-5.21-5.69 0-1.26.45-2.28 1.19-3.09-.12-.29-.52-1.46.11-3.04 0 0 .97-.31 3.18 1.18a11 11 0 0 1 5.8 0c2.21-1.49 3.18-1.18 3.18-1.18.63 1.58.23 2.75.11 3.04.74.81 1.19 1.83 1.19 3.09 0 4.42-2.68 5.4-5.23 5.68.41.36.77 1.08.77 2.18v3.23c0 .31.21.67.78.56A11.5 11.5 0 0 0 12 .5Z" />
      </svg>
    ),
  },
  {
    id: 'email',
    label: 'Email Dominick',
    href: 'mailto:tolomeodom@gmail.com',
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M3 5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5Zm2-.5a.5.5 0 0 0-.5.5v.32l7.2 5.4 7.8-5.52V5a.5.5 0 0 0-.5-.5H5Zm15 3.05-6.93 4.92a1.5 1.5 0 0 1-1.77 0L4 7.54V19a.5.5 0 0 0 .5.5h15a.5.5 0 0 0 .5-.5V7.55Z" />
      </svg>
    ),
  },
  {
    id: 'itch',
    label: 'sploches.itch.io',
    href: 'https://sploches.itch.io',
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M3.3 5.07a2.7 2.7 0 0 1 2.62-2.07h12.16A2.7 2.7 0 0 1 20.7 5.07l.83 3.1c.07.27.1.55.1.83v7.33A2.57 2.57 0 0 1 19.06 19H4.94A2.57 2.57 0 0 1 2.37 16.33V9a2.7 2.7 0 0 1 .1-.83Zm3.7-.07c-.76 0-1.3.5-1.5 1.3l-.4 1.53c.66-.25 1.38-.38 2.13-.38h10.54c.75 0 1.47.13 2.13.38l-.4-1.53c-.2-.8-.74-1.3-1.5-1.3Zm11.06 5.75c-1.05-.4-2.17-.62-3.3-.62h-3.52c-1.13 0-2.25.21-3.3.62-.63.24-.98.86-.98 1.52v1.86c0 .66.35 1.28.98 1.52 1.05.41 2.17.62 3.3.62h3.52c1.13 0 2.25-.21 3.3-.62.63-.24.98-.86.98-1.52v-1.86c0-.66-.35-1.28-.98-1.52Zm-9.36.5c.48-.18.98-.27 1.5-.27h3.52c.52 0 1.02.09 1.5.27.26.1.43.35.43.63v1.86c0 .28-.17.52-.43.63-.48.18-.98.27-1.5.27h-3.52c-.52 0-1.02-.09-1.5-.27-.26-.1-.43-.35-.43-.63v-1.86c0-.28.17-.52.43-.63Z" />
      </svg>
    ),
  },
  {
    id: 'linkedin',
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/dominick-tolomeo-3ba890209/',
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M19 3a2 2 0 0 1 2 2v14c0 1.11-.9 2-2 2H5a2 2 0 0 1-2-2V5c0-1.1.9-2 2-2h14Zm-9.69 6.6H6.77V18h2.54V9.6Zm8 1.45A3.05 3.05 0 0 0 14.8 9c-1.18 0-1.92.65-2.25 1.18h-.04V9.6H9.98c.03.66 0 8.39 0 8.39h2.53v-4.69c0-.25.02-.5.09-.68.19-.5.63-1.01 1.37-1.01.97 0 1.35.76 1.35 1.87V18h2.53v-4.95c0-2.65-1.42-3.88-3.54-3.88ZM8.04 6a1.47 1.47 0 1 0 0 2.95 1.47 1.47 0 0 0 0-2.94Z" />
      </svg>
    ),
  },
]

const resumeHref = '/resume.pdf'

export function Home({ onNavigate }) {
  const [activeSection, setActiveSection] = useState('projects')
  const visibleProjects = sections[activeSection] ?? []
  const sectionLabel = activeSection === 'projects' ? 'Projects' : 'Games'

  return (
    <div className="page">
      <header className="hero" aria-labelledby="site-title">
        <h1 id="site-title">Dominick Tolomeo</h1>
        <p className="hero-role">Software Engineer</p>
        <nav aria-label="Primary social links">
          <ul className="hero-socials">
            {socialLinks.map((item) => (
              <li key={item.id}>
                <a
                  href={item.href}
                  target={item.href.startsWith('mailto:') ? undefined : '_blank'}
                  rel={item.href.startsWith('mailto:') ? undefined : 'noreferrer'}
                  aria-label={item.label}
                >
                  {item.icon}
                </a>
              </li>
            ))}
          </ul>
        </nav>
        <nav className="hero-sections" aria-label="Portfolio sections">
          <ul className="hero-tabs">
            <li>
              <button
                type="button"
                className={`hero-tab${activeSection === 'projects' ? ' is-active' : ''}`}
                onClick={() => setActiveSection('projects')}
                aria-pressed={activeSection === 'projects'}
              >
                Projects
              </button>
            </li>
            <li>
              <button
                type="button"
                className={`hero-tab${activeSection === 'games' ? ' is-active' : ''}`}
                onClick={() => setActiveSection('games')}
                aria-pressed={activeSection === 'games'}
              >
                Games
              </button>
            </li>
            <li>
              <a className="hero-tab hero-tab-link" href={resumeHref} target="_blank" rel="noreferrer">
                Resume
              </a>
            </li>
          </ul>
        </nav>
      </header>

      <main>
        <section className="projects" aria-label={`${sectionLabel} gallery`}>
          <h2 className="visually-hidden">{sectionLabel}</h2>
          <div className="projects-grid">
            {visibleProjects.map((project) => (
              <ProjectCard key={project.id} project={project} onNavigate={onNavigate} />
            ))}
          </div>
        </section>
      </main>

      <footer className="page-footer">
        <p>
          Built with React + Vite · <a href="https://github.com/TolomeoD" target="_blank" rel="noreferrer">@TolomeoD</a>
        </p>
      </footer>
    </div>
  )
}
