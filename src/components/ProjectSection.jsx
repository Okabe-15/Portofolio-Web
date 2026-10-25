import { ArrowUpRight } from 'lucide-react'
import { useState } from 'react'
import { featuredProjectIds, projects } from '../data/projects'
import ProjectAccordionItem from './projects/ProjectAccordionItem'
import SectionHeading from './SectionHeading'

const orderedProjects = [
  ...featuredProjectIds.map((id) => projects.find((project) => project.id === id)).filter(Boolean),
  ...projects.filter((project) => !featuredProjectIds.includes(project.id)),
]

export default function ProjectSection() {
  const [openProjectId, setOpenProjectId] = useState(orderedProjects[0]?.id ?? null)

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
            isFeatured={project.id === featuredProjectIds[0]}
            isOpen={openProjectId === project.id}
            onToggle={() => toggleProject(project.id)}
          />
        ))}
      </div>
    </section>
  )
}
