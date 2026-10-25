import { ArrowDownRight, ArrowUpRight, Github } from 'lucide-react'

function WorkflowPreview({ project }) {
  return (
    <div className={`project-artwork project-artwork--${project.id}`} aria-label={`${project.name} workflow preview`}>
      <div className="project-artwork__top"><span>{project.category}</span><span className="project-artwork__signal" aria-hidden="true" /></div>
      <div className="project-artwork__flow">
        {project.flow.slice(0, 3).map((step, index) => (
          <span className="project-artwork__step" key={`${project.id}-${step}`}>
            <small>0{index + 1}</small><strong>{step}</strong>
            {index < Math.min(project.flow.length, 3) - 1 && <i aria-hidden="true" />}
          </span>
        ))}
      </div>
      <span className="project-artwork__caption">Workflow preview · not a product screenshot</span>
    </div>
  )
}

export default function ProjectCard({ project, selected, onSelect }) {
  return (
    <article className={`project-card${selected ? ' is-selected' : ''}`}>
      <WorkflowPreview project={project} />
      <div className="project-card__content">
        <div className="project-card__meta"><span>{project.category}</span><span>{project.status}</span></div>
        <h3>{project.name}</h3>
        <p className="project-card__description">{project.description}</p>
        <p className="project-card__role">Role · {project.role}</p>
        <div className="project-card__stack" aria-label={`${project.name} technologies`}>
          {project.stack.slice(0, 4).map((technology) => <span key={technology}>{technology}</span>)}
          {project.stack.length > 4 && <span>+{project.stack.length - 4}</span>}
        </div>
        <div className="project-card__actions">
          <button type="button" className="project-card__case-link" aria-pressed={selected} onClick={onSelect}>
            {selected ? 'Case study selected' : 'View case study'} <ArrowDownRight size={15} aria-hidden="true" />
          </button>
          {project.demo && <a href={project.demo} target="_blank" rel="noreferrer" aria-label={`${project.name} live demo (opens in new tab)`}>Live demo <ArrowUpRight size={13} aria-hidden="true" /><span className="sr-only"> (opens in a new tab)</span></a>}
          {project.github && <a href={project.github} target="_blank" rel="noreferrer" aria-label={`${project.name} source code (opens in new tab)`}><Github size={14} aria-hidden="true" /> Source <span className="sr-only"> (opens in a new tab)</span></a>}
        </div>
      </div>
    </article>
  )
}
