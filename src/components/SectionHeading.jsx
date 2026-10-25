export default function SectionHeading({ id, eyebrow, title, description, action, className = '' }) {
  return (
    <div className={`section-heading ${className}`.trim()}>
      <div className="section-heading__copy">
        {eyebrow && <p className="section-kicker">{eyebrow}</p>}
        <h2 id={id}>{title}</h2>
        {description && <p className="section-description">{description}</p>}
      </div>
      {action && <div className="section-heading__action">{action}</div>}
    </div>
  )
}
