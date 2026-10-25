import { GraduationCap, BriefcaseBusiness, BookOpen } from 'lucide-react'
import { experience } from '../data/experience'
import SectionHeading from './SectionHeading'

const icons = { Education: GraduationCap, Internship: BriefcaseBusiness, Training: BookOpen }

export default function ExperienceSection() {
  return (
    <section id="experience" className="experience-section" aria-labelledby="experience-title">
      <SectionHeading
        id="experience-title"
        eyebrow="Experience & education"
        title="A timeline of systems and study."
        description="Education, enterprise workflow exposure, and full-stack training that inform the project work."
      />
      <ol className="experience-timeline">
        {experience.map((item) => {
          const Icon = icons[item.kind] ?? BriefcaseBusiness
          return (
            <li className="experience-item" key={item.id}>
              <span className="experience-item__marker" aria-hidden="true"><Icon size={15} /></span>
              <div className="experience-item__body">
                <div className="experience-item__meta"><span>{item.kind}</span><time>{item.date}</time></div>
                <h3>{item.title}</h3>
                <p className="experience-item__organization">{item.organization}{item.detail ? <span> · {item.detail}</span> : null}</p>
                <p className="experience-item__description">{item.description}</p>
                <ul className="experience-item__stack" aria-label={`${item.title} focus`}>{item.technologies.map((technology) => <li key={technology}>{technology}</li>)}</ul>
              </div>
            </li>
          )
        })}
      </ol>
    </section>
  )
}
