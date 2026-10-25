import { ArrowUpRight, Database, Workflow } from 'lucide-react'
import { skills } from '../data/skills'
import { projects } from '../data/projects'
import SectionHeading from './SectionHeading'

export default function ToolkitSection({ selectedProjectId }) {
  const selectedProject = projects.find((project) => project.id === selectedProjectId)

  return (
    <section id="toolkit" className="toolkit-section shell" aria-labelledby="toolkit-title">
      <SectionHeading
        id="toolkit-title"
        eyebrow="Tech stack / services"
        title="Tools connected to shipped work."
        description="Technologies are listed with the projects that use them, rather than skill percentages."
      />
      <div className="toolkit-context"><Workflow size={15} aria-hidden="true" /><span>Highlighted for <strong>{selectedProject?.name ?? 'selected project'}</strong></span></div>
      <ul className="skill-grid">
        {skills.map((skill) => {
          const connected = skill.projects.includes(selectedProjectId)
          const linkedProjects = skill.projects.map((id) => projects.find((project) => project.id === id)?.name).filter(Boolean)
          return (
            <li className={`skill-row${connected ? ' is-connected' : ''}`} key={skill.name}>
              <span className="skill-row__icon" aria-hidden="true">{skill.group === 'Database' ? <Database size={17} /> : <Workflow size={17} />}</span>
              <span className="skill-row__copy"><strong>{skill.name}</strong><small>{skill.group}</small></span>
              <span className="skill-row__evidence" title={linkedProjects.join(', ')}>{linkedProjects.join(', ')}</span>
              <span className="skill-row__count">{linkedProjects.length} {linkedProjects.length === 1 ? 'project' : 'projects'}</span>
              <ArrowUpRight size={14} className="skill-row__arrow" aria-hidden="true" />
            </li>
          )
        })}
      </ul>
      <p className="skill-source-note">Project links reflect the repository’s recorded project descriptions and technology stacks.</p>
    </section>
  )
}
