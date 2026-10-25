import { Github, Linkedin, Network } from 'lucide-react'
import { portfolio } from '../data/portfolio'

export default function Footer() {
  return (
    <footer className="site-footer shell">
      <a className="footer-brand" href="#top"><Network size={16} aria-hidden="true" />{portfolio.name}</a>
      <p>{portfolio.role} · Jakarta Selatan, Indonesia</p>
      <nav className="footer-links" aria-label="Footer social links">
        <a href={portfolio.github} target="_blank" rel="noreferrer" aria-label="GitHub (opens in a new tab)"><Github size={16} /></a>
        <a href={portfolio.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn (opens in a new tab)"><Linkedin size={16} /></a>
        <a href={`mailto:${portfolio.email}`} aria-label="Send email"><span>@</span></a>
      </nav>
    </footer>
  )
}
