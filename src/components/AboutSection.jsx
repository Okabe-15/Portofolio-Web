import { GraduationCap, MapPin, Server } from 'lucide-react'
import { portfolio } from '../data/portfolio'
import SectionHeading from './SectionHeading'

const focusAreas = ['Backend workflows', 'Relational data', 'API integration']

export default function AboutSection() {
  return (
    <section id="about" className="about-section info-panel" aria-labelledby="about-title">
      <SectionHeading id="about-title" eyebrow="Developer profile" title="Build the system behind the screen." />
      <p className="about-copy">I’m {portfolio.name}, an Informatics Engineering graduate from Universitas Mercu Buana. I work across backend and full-stack projects, connecting APIs, databases, and user workflows into applications people can use.</p>
      <p className="about-copy about-copy--secondary">My project work includes marketplaces, booking flows, interview practice, learning tools, and real-time auction interfaces. I’m focused on a backend developer role where I can keep building reliable services and clearer data flows.</p>
      <ul className="about-focus-list" aria-label="Development focus">
        {focusAreas.map((area) => <li key={area}>{area}</li>)}
      </ul>
      <div className="about-education">
        <span className="about-education__icon"><GraduationCap size={18} aria-hidden="true" /></span>
        <span><strong>{portfolio.education.degree}</strong><small>{portfolio.education.institution} · {portfolio.education.period}</small></span>
      </div>
      <p className="about-location"><MapPin size={14} aria-hidden="true" />{portfolio.location}<span aria-hidden="true">·</span><Server size={14} aria-hidden="true" />Backend-focused</p>
    </section>
  )
}
