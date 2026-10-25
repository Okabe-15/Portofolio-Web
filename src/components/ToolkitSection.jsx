import { skillGroups } from '../data/skills'
import SectionHeading from './SectionHeading'

export default function ToolkitSection() {
  return (
    <section id="toolkit" className="toolkit-section shell" aria-labelledby="toolkit-title">
      <SectionHeading
        id="toolkit-title"
        eyebrow="Tech stack"
        title="Technologies I use"
      />
      <div className="skill-groups">
        {skillGroups.map((group) => (
          <section className="skill-group" key={group.name} aria-labelledby={`skill-group-${group.id}`}>
            <h3 id={`skill-group-${group.id}`}>{group.name}</h3>
            <p>{group.technologies.join(' · ')}</p>
          </section>
        ))}
      </div>
    </section>
  )
}
