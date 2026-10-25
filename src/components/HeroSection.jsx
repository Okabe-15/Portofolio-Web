import { motion, useReducedMotion } from 'framer-motion'
import { ArrowUpRight, Download } from 'lucide-react'
import { useEffect, useState } from 'react'

export default function HeroSection() {
  const shouldReduceMotion = useReducedMotion()
  const [time, setTime] = useState('00:00:00 UTC')
  useEffect(() => {
    const tick = () => setTime(`${new Intl.DateTimeFormat('en-GB', { hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: false, timeZone: 'UTC' }).format(new Date())} UTC`)
    tick()
    const timer = setInterval(tick, 1000)
    return () => clearInterval(timer)
  }, [])
  return <section className="hero shell grid gap-12 lg:grid-cols-[1.15fr_.85fr]">
    <motion.div initial={shouldReduceMotion ? false : { opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: shouldReduceMotion ? 0 : .6 }} className="hero-copy">
      <p className="eyebrow"><span className="pulse-dot" /> Full Stack Developer</p>
      <h1>Ali Hadi Cherid<br /><em>Building useful web systems.</em></h1>
      <p className="hero-intro">Final-year Informatics Engineering student focused on full-stack web development, AI integrations, and user-centered applications.</p>
      <div className="hero-actions"><a className="button button-primary" href="#projects">Explore projects <ArrowUpRight size={15} /></a><a className="button button-outline" href="./cv/ali-hadi-cherid-cv.pdf" download>Download CV <Download size={15} /></a></div>
      <div className="hero-meta"><div><span>Focus</span><strong>Full-stack · AI integration</strong></div><div><span>Core stack</span><strong>React · Node.js · PostgreSQL</strong></div><div><span>Selected project</span><strong>Intervue · Smart Hammer</strong></div></div>
    </motion.div>
    <motion.div initial={shouldReduceMotion ? false : { opacity: 0, scale: .94 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: shouldReduceMotion ? 0 : .8 }} className="hero-signal"><div className="signal-top"><span>PROFILE SYSTEM</span><span>{time}</span></div><div className="signal-orbit"><div className="orbit-ring orbit-ring-one" /><div className="orbit-ring orbit-ring-two" /><div className="signal-core"><span>AH</span><small>ONLINE</small></div><i className="signal-node node-a" /><i className="signal-node node-b" /><i className="signal-node node-c" /></div><div className="signal-bottom"><span><b /> portfolio online</span><span>7 linked modules</span></div></motion.div>
  </section>
}
