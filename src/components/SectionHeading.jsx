export default function SectionHeading({ index, eyebrow, title, accent, action }) {
  return (
    <div className="section-heading">
      <div>
        <p className="eyebrow">{index} / {eyebrow}</p>
        <h2>{title}<br /><em>{accent}</em></h2>
      </div>
      {action && <div>{action}</div>}
    </div>
  )
}
