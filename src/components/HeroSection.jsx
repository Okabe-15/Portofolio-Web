import { motion, useReducedMotion } from 'framer-motion'
import { ArrowDown, Github, Linkedin } from 'lucide-react'
import { portfolio } from '../data/portfolio'

export default function HeroSection() {
  const reduceMotion = useReducedMotion()

  return (
    <motion.section
      className="hero-column flex min-w-0 flex-col justify-center"
      initial={reduceMotion ? false : { opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: reduceMotion ? 0 : 0.42, ease: [0.22, 1, 0.36, 1] }}
      aria-labelledby="hero-title"
    >
      <p className="availability-line"><span className="status-dot" />{portfolio.availability}</p>
      <p className="hero-prelude">Hello, I’m</p>
      <h1 id="hero-title">Ali Hadi<br />Cherid</h1>
      <p className="hero-role">Full-Stack Developer</p>
      <p className="hero-summary">I build backend APIs and web apps with Node.js, Express, and PostgreSQL, focusing on clear data models and maintainable code.</p>

      <div className="hero-actions flex flex-wrap items-center gap-3">
        <a className="button button-primary inline-flex items-center justify-center gap-2" href="#projects">Explore projects <ArrowDown size={15} aria-hidden="true" /></a>
      </div>

      <div className="hero-links flex items-center gap-2" aria-label="Professional profiles">
        <a className="icon-link inline-flex items-center gap-2" href={portfolio.github} target="_blank" rel="noreferrer"><Github size={15} aria-hidden="true" />GitHub<span className="sr-only"> (opens in a new tab)</span></a>
        <span className="hero-link-divider" aria-hidden="true" />
        <a className="icon-link inline-flex items-center gap-2" href={portfolio.linkedin} target="_blank" rel="noreferrer"><Linkedin size={15} aria-hidden="true" />LinkedIn<span className="sr-only"> (opens in a new tab)</span></a>
      </div>

    </motion.section>
  )
}
