import { ArrowUpRight } from 'lucide-react'
import { featuredProjectIds, projects } from '../data/projects'
import ProjectCard from './projects/ProjectCard'
import ProjectCaseStudy from './projects/ProjectCaseStudy'
import SectionHeading from './SectionHeading'

export default function ProjectSection({ selectedProjectId, onSelectProject }) {
  const orderedProjects = [
    ...featuredProjectIds.map((id) => projects.find((project) => project.id === id)).filter(Boolean),
    ...projects.filter((project) => !featuredProjectIds.includes(project.id)),
  ]
  const selectedProject = projects.find((project) => project.id === selectedProjectId) ?? projects[0]

  const selectProject = (projectId) => {
    onSelectProject(projectId)
    window.setTimeout(() => document.getElementById('selected-project')?.scrollIntoView({ behavior: 'smooth', block: 'start' }), 50)
  }

  return (
    <section id="projects" className="projects-section shell" aria-labelledby="projects-title">
      <SectionHeading
        id="projects-title"
        eyebrow="Selected work"
        title="Projects built for real workflows."
        description="A selection of team, individual, and product work. Open a case study to see the problem, my contribution, and how the pieces fit together."
        action={<a className="text-link inline-flex items-center gap-2" href="https://github.com/Okabe-15" target="_blank" rel="noreferrer">All repositories <ArrowUpRight size={14} aria-hidden="true" /><span className="sr-only"> (opens in a new tab)</span></a>}
      />

      <div className="project-card-grid" aria-label="Portfolio projects">
        {orderedProjects.map((project) => <ProjectCard key={project.id} project={project} selected={selectedProjectId === project.id} onSelect={() => selectProject(project.id)} />)}
      </div>

      <ProjectCaseStudy project={selectedProject} />
    </section>
  )
}
