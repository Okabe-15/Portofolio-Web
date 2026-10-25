import { useEffect, useState } from 'react'
import { Menu, Network, X } from 'lucide-react'
import { navigation, portfolio } from '../data/portfolio'

export default function Navbar() {
  const [activeSection, setActiveSection] = useState('')
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })

    const observer = new IntersectionObserver((entries) => {
      const active = entries.filter((entry) => entry.isIntersecting).sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0]
      if (active) setActiveSection(active.target.id)
    }, { rootMargin: '-28% 0px -62% 0px', threshold: [0, 0.2, 0.5, 0.8] })

    navigation.forEach(({ id }) => {
      const section = document.getElementById(id)
      if (section) observer.observe(section)
    })
    return () => {
      window.removeEventListener('scroll', onScroll)
      observer.disconnect()
    }
  }, [])

  useEffect(() => {
    if (!menuOpen) return undefined
    const onKeyDown = (event) => event.key === 'Escape' && setMenuOpen(false)
    window.addEventListener('keydown', onKeyDown)
    return () => window.removeEventListener('keydown', onKeyDown)
  }, [menuOpen])

  const closeMenu = () => setMenuOpen(false)

  return (
    <header className={`site-header sticky top-0 z-50${scrolled ? ' is-scrolled' : ''}`}>
      <div className="site-header__inner shell flex h-full items-center justify-between gap-4">
        <a className="brand-lockup flex min-w-0 items-center gap-3" href="#top" onClick={closeMenu} aria-label={`${portfolio.name}, back to top`}>
          <span className="brand-mark grid shrink-0 place-items-center" aria-hidden="true"><Network size={17} strokeWidth={1.8} /></span>
          <span className="brand-copy"><strong>Portfolio Network</strong><small>Living System Architecture</small></span>
        </a>

        <nav className="main-nav hidden items-center gap-5 lg:flex" aria-label="Main navigation">
          {navigation.map(({ id, label }) => <a key={id} href={`#${id}`} aria-current={activeSection === id ? 'location' : undefined}>{label}</a>)}
        </nav>

        <a className="availability-pill hidden items-center gap-2 sm:flex" href="#contact">
          <span className="status-dot" />{portfolio.availability}
        </a>

        <button
          className="mobile-menu-button grid shrink-0 place-items-center lg:hidden"
          type="button"
          aria-label={menuOpen ? 'Close navigation menu' : 'Open navigation menu'}
          aria-expanded={menuOpen}
          aria-controls="mobile-navigation"
          onClick={() => setMenuOpen((open) => !open)}
        >
          {menuOpen ? <X size={19} aria-hidden="true" /> : <Menu size={19} aria-hidden="true" />}
        </button>

        <nav className={`mobile-nav-panel${menuOpen ? ' is-open' : ''}`} id="mobile-navigation" aria-label="Mobile navigation" aria-hidden={!menuOpen}>
          {navigation.map(({ id, label }) => <a key={id} href={`#${id}`} aria-current={activeSection === id ? 'location' : undefined} onClick={closeMenu}>{label}</a>)}
          <a className="mobile-availability" href="#contact" onClick={closeMenu}><span className="status-dot" />{portfolio.availability}</a>
        </nav>
      </div>
    </header>
  )
}
