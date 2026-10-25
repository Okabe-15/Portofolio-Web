import { GraduationCap } from 'lucide-react'
import { portfolio } from '../data/portfolio'
import SectionHeading from './SectionHeading'

export default function AboutSection() {
  return (
    <section id="about" className="about-section" aria-labelledby="about-title">
      <SectionHeading id="about-title" eyebrow="About" title="A little about me" />
      <div className="about-copy">
        <p>I’m {portfolio.name}, an Informatics Engineering graduate from Universitas Mercu Buana. My work spans backend development, APIs, databases, and web applications.</p>
        <p>I enjoy building maintainable systems with clear data flows and practical solutions to real problems.</p>
      </div>
      <div className="about-education">
        <GraduationCap size={19} aria-hidden="true" />
        <span>
          <strong>{portfolio.education.degree}</strong>
          <small>{portfolio.education.institution} · {portfolio.education.period} · GPA {portfolio.education.gpa}</small>
        </span>
      </div>
    </section>
  )
}
