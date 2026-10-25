import SectionHeading from './SectionHeading'

const metrics = [
  ['06', 'Portfolio projects', 'Full-stack, AI, marketplace, booking, and learning apps'],
  ['20+', 'Technologies & tools', 'Web development, databases, testing, and AI integration'],
  ['03', 'AI-enabled projects', 'Interview practice, English learning, and auction assistance'],
]

export default function SystemMetricsSection() {
  return (
    <section className="system-metrics shell" id="metrics">
      <SectionHeading
        index="05"
        eyebrow="System metrics"
        title="A focused"
        accent="engineering toolkit."
      />
      <dl className="metrics-grid">
        {metrics.map(([value, label, detail]) => (
          <div className="metric-card" key={label}>
            <dt>{label}</dt>
            <dd>{value}</dd>
            <p>{detail}</p>
          </div>
        ))}
      </dl>
    </section>
  )
}
