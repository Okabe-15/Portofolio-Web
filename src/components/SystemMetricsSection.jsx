import { Github, Layers3, Sparkles } from 'lucide-react'
import { projects } from '../data/projects'
import SectionHeading from './SectionHeading'

const metrics = [
  { value: projects.length, label: 'Projects documented', detail: 'Across team, pair, and individual work', icon: Layers3 },
  { value: projects.filter((project) => project.github).length, label: 'Projects with source links', detail: 'Repository links are listed with each case file', icon: Github },
  { value: projects.filter((project) => project.ai).length, label: 'Projects with AI services', detail: 'Interview, learning, and auction projects', icon: Sparkles },
]

export default function SystemMetricsSection() {
  return (
    <section id="metrics" className="metrics-section info-panel" aria-labelledby="metrics-title">
      <SectionHeading id="metrics-title" eyebrow="Work evidence" title="A small system, clearly mapped." />
      <dl className="metrics-list">
        {metrics.map(({ value, label, detail, icon: Icon }) => (
          <div className="metric-line" key={label}>
            <dt><Icon size={15} aria-hidden="true" /><span>{label}</span></dt>
            <dd>{value}</dd>
            <p>{detail}</p>
          </div>
        ))}
      </dl>
      <p className="metric-source-note">Counts are derived from the project records shown on this page.</p>
    </section>
  )
}
