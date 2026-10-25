import { experience } from '../data/experience'
import SectionHeading from './SectionHeading'

const roles = experience
  .filter((item) => item.kind !== 'Education')
  .slice()
  .sort((a, b) => Number(b.date.match(/\d{4}/)?.[0] ?? 0) - Number(a.date.match(/\d{4}/)?.[0] ?? 0))

export default function ExperienceSection() {
  return (
    <section id="experience" className="experience-section" aria-labelledby="experience-title">
      <SectionHeading id="experience-title" eyebrow="Experience" title="Where I’ve worked and learned" />
      <ol className="experience-timeline">
        {roles.map((item) => (
          <li className="experience-item" key={item.id}>
            <time className="experience-item__date">{item.date.match(/\d{4}/)?.[0]}</time>
            <div className="experience-item__body">
              <h3>{item.title}</h3>
              <p className="experience-item__organization">{item.organization}</p>
              <p className="experience-item__description">{item.description}</p>
            </div>
          </li>
        ))}
      </ol>
    </section>
  )
}
