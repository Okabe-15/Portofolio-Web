import { ArrowUpRight, Github } from 'lucide-react'
import ProjectArchitecture from '../architecture/ProjectArchitecture'

export default function ProjectCaseStudy({ project }) {
  return (
    <div className="project-case-study">
      <p className="project-case-study__intro">{project.description}</p>

      <div className="project-case-study__body">
        <div className="project-case-study__story" id={`project-${project.id}-details`}>
          <section className="project-story-block">
            <h4>Problem</h4>
            <p>{project.problem}</p>
          </section>
          <section className="project-story-block">
            <h4>My role</h4>
            <p>{project.role}</p>
          </section>
          <section className="project-story-block">
            <h4>What I built</h4>
            <ul>{project.built.map((item) => <li key={item}>{item}</li>)}</ul>
          </section>
        </div>

        {project.architecture && <ProjectArchitecture architecture={project.architecture} />}
      </div>

      <div className="project-case-study__footer">
        <div className="project-case-study__technology">
          <h4>Tech stack</h4>
          <p>{project.stack.join(' · ')}</p>
        </div>
        <nav className="project-project-actions" aria-label={`${project.name} links`}>
          {project.demo && <a className="project-action-secondary" href={project.demo} target="_blank" rel="noreferrer">Live Demo <ArrowUpRight size={14} aria-hidden="true" /><span className="sr-only"> (opens in a new tab)</span></a>}
          {project.github && <a className="project-action-source" href={project.github} target="_blank" rel="noreferrer"><Github size={15} aria-hidden="true" /> Source <span className="sr-only"> (opens in a new tab)</span></a>}
        </nav>
      </div>
    </div>
  )
}
