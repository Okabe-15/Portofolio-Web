import { ArrowUpRight } from 'lucide-react'
import { useState } from 'react'
import { projectOrderIds, projects } from '../data/projects'
import ProjectAccordionItem from './projects/ProjectAccordionItem'
import SectionHeading from './SectionHeading'

const orderedProjects = projectOrderIds
  .map((id) => projects.find((project) => project.id === id))
  .filter(Boolean)

export default function ProjectSection() {
  const [openProjectId, setOpenProjectId] = useState(null)

  function toggleProject(projectId) {
    const nextProjectId = openProjectId === projectId ? null : projectId
    setOpenProjectId(nextProjectId)
  }

  return (
    <section id="projects" className="projects-section shell" aria-labelledby="projects-title">
      <SectionHeading
        id="projects-title"
        eyebrow="Projects"
        title="Selected work"
        description="Marketplaces, real-time applications, and learning tools. Open a project to see what I built and how it works."
        action={<a className="text-link inline-flex items-center gap-2" href="https://github.com/Okabe-15" target="_blank" rel="noreferrer">All repositories <ArrowUpRight size={14} aria-hidden="true" /><span className="sr-only"> (opens in a new tab)</span></a>}
      />

      <div className="project-accordion" aria-label="Portfolio projects">
        {orderedProjects.map((project, index) => (
          <ProjectAccordionItem
            key={project.id}
            project={project}
            index={index}
            isOpen={openProjectId === project.id}
            onToggle={() => toggleProject(project.id)}
          />
        ))}
      </div>
    </section>
  )
}
