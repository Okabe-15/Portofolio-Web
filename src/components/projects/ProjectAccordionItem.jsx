import { AnimatePresence, motion, useReducedMotion } from 'framer-motion'
import { ChevronDown } from 'lucide-react'
import ProjectCaseStudy from './ProjectCaseStudy'

export default function ProjectAccordionItem({ project, index, isFeatured, isOpen, onToggle }) {
  const reduceMotion = useReducedMotion()
  const triggerId = `project-${project.id}-trigger`
  const panelId = `project-${project.id}-panel`
  const summary = project.description.length > 120
    ? `${project.description.slice(0, 117).replace(/\s+\S*$/, '').trimEnd()}…`
    : project.description

  return (
    <article className={`project-accordion-item${isOpen ? ' is-open' : ''}`}>
      <button
        id={triggerId}
        className="project-accordion-trigger"
        type="button"
        aria-expanded={isOpen}
        aria-controls={panelId}
        onClick={onToggle}
      >
        <span className="project-accordion-trigger__number" aria-hidden="true">{String(index + 1).padStart(2, '0')}</span>
        <span className="project-accordion-trigger__identity">
          <span className="project-accordion-trigger__title-line">
            <strong>{project.name}</strong>
            {isFeatured && <span className="project-featured-label">Featured</span>}
          </span>
          <span className="project-accordion-trigger__category">{project.category}</span>
        </span>
        <span className="project-accordion-trigger__summary">{summary}</span>
        <span className="project-accordion-trigger__technologies" aria-label={`Key technologies: ${project.stack.slice(0, 3).join(', ')}`}>
          {project.stack.slice(0, 3).map((technology, technologyIndex) => (
            <span key={technology}>{technology}{technologyIndex < Math.min(project.stack.length, 3) - 1 ? <span aria-hidden="true"> · </span> : null}</span>
          ))}
        </span>
        <span className="project-accordion-trigger__icon" aria-hidden="true"><ChevronDown size={19} /></span>
      </button>

      <motion.div
        id={panelId}
        role="region"
        aria-labelledby={triggerId}
        aria-hidden={!isOpen}
        inert={!isOpen}
        className="project-accordion-panel"
        initial={false}
        animate={{ height: isOpen ? 'auto' : 0, opacity: isOpen ? 1 : 0 }}
        transition={{ duration: reduceMotion ? 0 : 0.26, ease: 'easeOut' }}
      >
        <AnimatePresence initial={false}>
          {isOpen && (
            <motion.div
              key={project.id}
              className="project-accordion-panel__inner"
              initial={reduceMotion ? false : { opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={reduceMotion ? undefined : { opacity: 0, y: 4 }}
              transition={{ duration: reduceMotion ? 0 : 0.18, ease: 'easeOut' }}
            >
              <ProjectCaseStudy project={project} />
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </article>
  )
}
