import { useEffect, useState } from 'react'
import { Menu, X } from 'lucide-react'

const navigation = [
  ['architecture', 'System map'],
  ['projects', 'Projects'],
  ['toolkit', 'Skills'],
  ['about', 'About'],
    ['experience', 'Experience'],
  ['contact', 'Contact'],
]

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('')
  const [scrolled, setScrolled] = useState(false)

  const closeMenu = () => setMenuOpen(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 18)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })

    const observer = new IntersectionObserver((entries) => {
      const visible = entries.filter((entry) => entry.isIntersecting)
      if (visible.length) {
        const current = visible.sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0]
        setActiveSection(current.target.id)
      }
    }, { rootMargin: '-25% 0px -60% 0px', threshold: [0, .2, .5, .8] })

    navigation.forEach(([id]) => {
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
    const onKeyDown = (event) => {
      if (event.key === 'Escape') setMenuOpen(false)
    }
    window.addEventListener('keydown', onKeyDown)
    return () => window.removeEventListener('keydown', onKeyDown)
  }, [menuOpen])

  return <header className={`site-header shell flex items-center justify-between${scrolled ? ' is-scrolled' : ''}`}>
    <a className="brand" href="#top" onClick={closeMenu}><span className="brand-mark">AH</span> ALI HADI CHERID</a>
    <nav className="main-nav hidden items-center gap-8 md:flex" aria-label="Main navigation">
      {navigation.map(([id, label]) => <a href={`#${id}`} aria-current={activeSection === id ? 'location' : undefined} key={id}>{label}</a>)}
    </nav>
    <a className="availability" href="#contact"><span /> Seeking junior full-stack opportunities</a>
    <button
      className="mobile-menu-button"
      type="button"
      aria-label={menuOpen ? 'Close navigation menu' : 'Open navigation menu'}
      aria-expanded={menuOpen}
      aria-controls="mobile-navigation"
      onClick={() => setMenuOpen((open) => !open)}
    >
      {menuOpen ? <X size={20} aria-hidden="true" /> : <Menu size={20} aria-hidden="true" />}
    </button>
    <nav
      className={`mobile-nav-panel${menuOpen ? ' is-open' : ''}`}
      id="mobile-navigation"
      aria-label="Mobile navigation"
      aria-hidden={!menuOpen}
    >
      {navigation.map(([id, label]) => <a href={`#${id}`} onClick={closeMenu} aria-current={activeSection === id ? 'location' : undefined} key={id}>{label}</a>)}
    </nav>
  </header>
}
