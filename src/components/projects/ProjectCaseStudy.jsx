import { AnimatePresence, motion, useReducedMotion } from 'framer-motion'
import { ArrowUpRight, Github } from 'lucide-react'
import ProjectArchitecture from '../architecture/ProjectArchitecture'

export default function ProjectCaseStudy({ project }) {
  const reduceMotion = useReducedMotion()

  return (
    <AnimatePresence mode="wait" initial={false}>
      <motion.article
        key={project.id}
        id="selected-project"
        className="project-case-study"
        aria-labelledby="project-case-title"
        initial={reduceMotion ? false : { opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        exit={reduceMotion ? undefined : { opacity: 0, y: -4 }}
        transition={{ duration: reduceMotion ? 0 : 0.22 }}
        aria-live="polite"
      >
        <header className="project-case-study__header">
          <div>
            <p className="section-kicker">Project case study · {project.date}</p>
            <span className="project-case-study__category">{project.category}</span>
            <h3 id="project-case-title">{project.name}</h3>
            <p>{project.description}</p>
          </div>
          <div className="project-case-study__links">
            {project.demo && <a href={project.demo} target="_blank" rel="noreferrer">Live demo <ArrowUpRight size={14} aria-hidden="true" /><span className="sr-only"> (opens in a new tab)</span></a>}
            {project.github && <a href={project.github} target="_blank" rel="noreferrer"><Github size={14} aria-hidden="true" /> Source code <ArrowUpRight size={14} aria-hidden="true" /><span className="sr-only"> (opens in a new tab)</span></a>}
          </div>
        </header>

        <div className="project-case-study__body">
          <div className="project-case-study__story">
            <div className="project-story-block"><h4>Problem</h4><p>{project.problem}</p></div>
            <div className="project-story-block"><h4>My role</h4><p>{project.role}</p></div>
            <div className="project-story-block"><h4>What I built</h4><ul>{project.built.map((item) => <li key={item}>{item}</li>)}</ul></div>
            <div className="project-story-block"><h4>Technology</h4><div className="project-case-study__stack">{project.stack.map((technology) => <span key={technology}>{technology}</span>)}</div></div>
          </div>
          <ProjectArchitecture architecture={project.architecture} />
        </div>
      </motion.article>
    </AnimatePresence>
  )
}
