import { useState } from 'react'

export function ProjectCard({ project, onNavigate }) {
  const { title, role, summary, tech = [], images = [], href } = project
  const [index, setIndex] = useState(0)
  const hasGallery = images.length > 1
  const isInternalLink = typeof href === 'string' && href.startsWith('/')

  const showNext = (event) => {
    event.stopPropagation()
    if (images.length < 2) return
    setIndex((prev) => (prev + 1) % images.length)
  }

  const showPrev = (event) => {
    event.stopPropagation()
    if (images.length < 2) return
    setIndex((prev) => (prev - 1 + images.length) % images.length)
  }

  const handleCardClick = () => {
    if (!href) return

    if (isInternalLink) {
      if (onNavigate) {
        onNavigate(href)
      } else if (typeof window !== 'undefined') {
        window.location.assign(href)
      }
      return
    }

    if (typeof window !== 'undefined') {
      window.open(href, '_blank', 'noreferrer')
    }
  }

  const handleKeyDown = (event) => {
    if (!href) return
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault()
      if (isInternalLink && onNavigate) {
        onNavigate(href)
        return
      }
      handleCardClick()
    }
  }

  const currentImage = images[index] ?? images[0]

  return (
    <article
      className={`project-card${href ? ' is-clickable' : ''}`}
      aria-labelledby={`${project.id}-title`}
      onClick={handleCardClick}
      onKeyDown={handleKeyDown}
      tabIndex={href ? 0 : undefined}
      role={href ? 'link' : undefined}
    >
      <div className="project-media" role="group" aria-label={`Screenshots for ${title}`}>
        {currentImage ? (
          <img src={currentImage.src} alt={currentImage.alt} loading="lazy" />
        ) : (
          <div className="project-media-fallback">Screenshots coming soon</div>
        )}
        {hasGallery && (
          <div className="project-media-controls">
            <button type="button" onClick={showPrev} aria-label={`Show previous screenshot for ${title}`}>
              Prev
            </button>
            <span className="project-media-status">{index + 1} / {images.length}</span>
            <button type="button" onClick={showNext} aria-label={`Show next screenshot for ${title}`}>
              Next
            </button>
          </div>
        )}
      </div>
      <div className="project-content">
        <header className="project-header">
          <h3 id={`${project.id}-title`}>{title}</h3>
          <p className="project-role">{role}</p>
        </header>
        <p className="project-summary">{summary}</p>
        <ul className="project-tech" aria-label="Technologies used">
          {tech.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </div>
    </article>
  )
}
