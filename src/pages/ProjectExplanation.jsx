import { sections } from '../data/projects.js'
import { projectExplanations } from '../data/projectExplanations.js'

const supportedProjectIds = new Set(['hammerspace', 'csc-global'])

const supportedProjectsById = sections.projects.reduce((acc, project) => {
  if (supportedProjectIds.has(project.id)) {
    acc[project.id] = project
  }
  return acc
}, {})

export function ProjectExplanation({ projectId, onNavigate }) {
  const details = projectExplanations[projectId]
  const projectMeta = supportedProjectsById[projectId]

  const goHome = () => {
    if (onNavigate) {
      onNavigate('/')
    } else if (typeof window !== 'undefined') {
      window.location.assign('/')
    }
  }

  if (!supportedProjectIds.has(projectId) || !details || !projectMeta) {
    return (
      <div className="page detail-page">
        <main className="detail-body">
          <button type="button" className="back-link" onClick={goHome}>
            Back to portfolio
          </button>
          <h1 className="detail-title">Project not found</h1>
          <p className="detail-text">The project you are looking for does not exist. Return to the portfolio to explore other work.</p>
          <button type="button" className="primary-link" onClick={goHome}>
            Return home
          </button>
        </main>
      </div>
    )
  }

  const heroImage = details.heroImage
  const techList = projectMeta.tech?.join(', ') ?? 'N/A'
  const timeline = details.timeline ?? 'N/A'
  const externalHref = details.externalHref ?? projectMeta.externalHref
  const externalLabel = details.externalLabel ?? 'Visit live project'
  const contributions = Array.isArray(details.contributions) ? details.contributions : []

  return (
    <div className="page detail-page">
      <header className="detail-hero" aria-labelledby="detail-title">
        <button type="button" className="back-link" onClick={goHome}>
          Back to portfolio
        </button>
        <h1 id="detail-title" className="detail-title">{details.title}</h1>
        <p className="detail-role">{projectMeta.role}</p>
        <p className="detail-product">{details.product}</p>
        <dl className="detail-meta" aria-label="Project quick facts">
          <div>
            <dt>Timeline</dt>
            <dd>{timeline}</dd>
          </div>
          <div>
            <dt>Tech</dt>
            <dd>{techList}</dd>
          </div>
        </dl>
        {heroImage ? (
          <div className="detail-media" role="figure" aria-label={`${details.title} product preview`}>
            <img src={heroImage.src} alt={heroImage.alt} loading="lazy" />
          </div>
        ) : null}
      </header>

      <main className="detail-body">
        <section className="detail-section" aria-labelledby="detail-contributions">
          {contributions.map((item) => (
            <p key={item}>{item}</p>
          ))}
        </section>

        <section className="detail-section" aria-labelledby="detail-links">
          <div className="detail-actions">
            {externalHref ? (
              <a
                className="primary-link"
                href={externalHref}
                target="_blank"
                rel="noreferrer"
              >
                {externalLabel}
              </a>
            ) : null}
            <button type="button" className="secondary-link" onClick={goHome}>
              Back to portfolio
            </button>
          </div>
        </section>
      </main>
    </div>
  )
}
