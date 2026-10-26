import { ArrowUpRight, Github, Linkedin, Mail, MapPin, Phone } from 'lucide-react'
import { portfolio } from '../data/portfolio'
import SectionHeading from './SectionHeading'

export default function ContactSection() {
  const gmailComposeUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(portfolio.email)}&su=${encodeURIComponent('Portfolio contact')}`

  return (
    <section id="contact" className="contact-section shell" aria-labelledby="contact-title">
      <div className="contact-copy">
        <SectionHeading id="contact-title" eyebrow="Contact" title="Let’s build something useful." />
        <p>Open to backend developer opportunities and thoughtful product collaborations. Reach out by email or connect through a professional profile.</p>
        <a className="button button-primary inline-flex items-center justify-center gap-2" href={gmailComposeUrl} target="_blank" rel="noreferrer">Start a conversation <Mail size={15} aria-hidden="true" /><span className="sr-only"> (opens Gmail in a new tab)</span></a>
      </div>
      <address className="contact-endpoints">
        <span className="contact-endpoints__label">Contact channels</span>
        <a href={`mailto:${portfolio.email}`}><Mail size={16} aria-hidden="true" /><span>{portfolio.email}</span><ArrowUpRight size={13} aria-hidden="true" /></a>
        <a href={portfolio.phoneHref}><Phone size={16} aria-hidden="true" /><span>{portfolio.phone}</span><ArrowUpRight size={13} aria-hidden="true" /></a>
        <a href={portfolio.linkedin} target="_blank" rel="noreferrer"><Linkedin size={16} aria-hidden="true" /><span>LinkedIn</span><ArrowUpRight size={13} aria-hidden="true" /><span className="sr-only"> (opens in a new tab)</span></a>
        <a href={portfolio.github} target="_blank" rel="noreferrer"><Github size={16} aria-hidden="true" /><span>GitHub</span><ArrowUpRight size={13} aria-hidden="true" /><span className="sr-only"> (opens in a new tab)</span></a>
        <p><MapPin size={14} aria-hidden="true" />{portfolio.location}</p>
      </address>
    </section>
  )
}
