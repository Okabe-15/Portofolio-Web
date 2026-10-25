import { useEffect, useState } from 'react'
import { ArrowUpRight } from 'lucide-react'
import SectionHeading from './SectionHeading'

const projects = [
  { id: 'intervue', name: 'Intervue', kind: 'Hacktiv8 team project', category: 'AI interview coach', date: 'October 2026', description: 'An AI interview practice platform for fresh graduates and junior professionals. It uses a candidate profile and job description to shape interview simulations and answer feedback.', role: 'Frontend development & AI API integration', stack: 'React · Vite · Node.js · Express · PostgreSQL · Groq · Whisper · ElevenLabs', focus: 'Voice and text interviews · evaluation · readiness reports', flow: 'Profile + job description → interview session → transcript and AI evaluation → readiness report', diagram: ['AI', 'VOICE', 'API', 'REPORT'], github: 'https://github.com/Okabe-15/hck-100-IP-Okabe-15', demo: 'https://interviu-client.issac.biz.id/' },
  { id: 'toko', name: 'Toko Nusantara', kind: 'Hacktiv8 pair project', category: 'Local products marketplace', date: 'August 2026', description: 'A marketplace for Indonesian artisans and small businesses, with separate buyer and seller workflows, product management, filtering, and shopping cart.', role: 'Full-stack developer', stack: 'JavaScript · Node.js · Express · EJS · PostgreSQL · Sequelize', focus: 'Role-based workflows · catalog · cart · image uploads', flow: 'Seller listings → product catalog → buyer cart → role-based workflows', diagram: ['SHOP', 'SELLER', 'CATALOG', 'CART'], github: 'https://github.com/Okabe-15/Toko-Nusantara' },
  { id: 'badminton', name: 'Badminton Rankings', kind: 'Hacktiv8 team hackathon', category: 'Sports directory', date: 'July 2026', description: 'A web application for exploring 30 Indonesian badminton players, separated into men’s and women’s singles and searchable by player.', role: 'Web developer', stack: 'HTML · CSS · JavaScript · JSON · Fetch API', focus: 'Data rendering · search · player profiles', flow: 'Player JSON → category lists → search → player detail modal', diagram: ['PLAYERS', 'JSON', 'SEARCH', 'PROFILE'], github: 'https://github.com/Okabe-15/hackaton-fase0-badminto--62' },
  { id: 'comic', name: 'Comic English', kind: 'Individual thesis project', category: 'AI learning application', date: '2025', description: 'An English learning application using generative-AI comics, with teacher and student workflows and learning progress tracking.', role: 'Full-stack developer', stack: 'React · Vite · SQLite · ComfyUI · SDXL · IP-Adapter', focus: 'Learning workflows · generated materials · progress tracking', flow: 'Teacher / student roles → generated comics → learning activities → progress tracking', diagram: ['LEARN', 'TEACHER', 'COMIC AI', 'PROGRESS'], github: 'https://github.com/Okabe-15/Aplikasi-TA' },
  { id: 'smart-hammer', name: 'Smart Hammer', kind: 'Team project', category: 'AI auction platform', date: 'October 2026', description: 'A web auction platform with real-time bidding, AI product Q&A, and an AI auctioneer to support buyer and seller interactions.', role: 'Frontend developer', stack: 'React · Vite · Tailwind CSS · Redux Toolkit · Socket.IO · React Router', focus: 'Real-time bids · auction status · AI product Q&A', flow: 'Auction listing → bid events → live status / winner → AI product assistance', diagram: ['AUCTION', 'SOCKET', 'AI Q&A', 'WINNER'], github: 'https://github.com/3-Sekawan-Bonte/Smart-Hammer-an-AI-powered-auction-site', demo: 'https://smart-hammer.ilham.bond/' },
  { id: 'homestay', name: 'Homestay Pulau 1000', kind: 'Team project', category: 'Booking application', date: 'September 2026', description: 'A homestay booking application with accommodation listings, reservation workflows, authentication, and administrative data management.', role: 'Backend developer', stack: 'Node.js · Express · Sequelize · PostgreSQL · EJS', focus: 'Authentication · booking workflows · relational data', flow: 'User session → homestay listings → booking workflows → admin management', diagram: ['STAY', 'USER', 'BOOKING', 'ADMIN'], github: 'https://github.com/muhamadyogasupratama-hash/dev-booking-homestay-pulau1000.git' },
]

export default function ProjectSection() {
  const [selectedId, setSelectedId] = useState('intervue')
  const project = projects.find(({ id }) => id === selectedId) ?? projects[0]
  const number = String(projects.findIndex(({ id }) => id === project.id) + 1).padStart(3, '0')

  useEffect(() => {
    const onSelect = (event) => setSelectedId(event.detail?.id ?? 'intervue')
    window.addEventListener('portfolio:select-project', onSelect)
    return () => window.removeEventListener('portfolio:select-project', onSelect)
  }, [])

  const selectProject = (id) => {
    setSelectedId(id)
    window.dispatchEvent(new CustomEvent('portfolio:project-selected', { detail: { id } }))
  }

  return (
    <section className="projects shell" id="projects">
      <SectionHeading index="02" eyebrow="Project work" title="Projects shaped by" accent="real product problems."
        action={<a className="text-link" href="https://github.com/Okabe-15" target="_blank" rel="noreferrer">GitHub profile <ArrowUpRight size={14} /></a>} />
      <div className="project-selector" role="group" aria-label="Choose a project">
        {projects.map((item, index) => <button className={`project-option${selectedId === item.id ? ' is-selected' : ''}`} type="button" key={item.id} aria-pressed={selectedId === item.id} onClick={() => selectProject(item.id)}>
          <span>0{index + 1} / {item.kind}</span><strong>{item.name}</strong>
        </button>)}
      </div>
      <article className="project-feature" aria-live="polite">
        <div className="project-visual"><span className="visual-label">PROJECT / {number}</span><div className="mini-graph" aria-hidden="true"><span className="mini-core">{project.diagram[0]}</span><b className="mini-node one">{project.diagram[1]}</b><b className="mini-node two">{project.diagram[2]}</b><b className="mini-node three">{project.diagram[3]}</b></div><div className="visual-footer"><span>{project.category}</span><span>{project.date}</span></div></div>
        <div className="project-detail"><p className="eyebrow">{project.kind} · {project.date}</p><h3>{project.name}</h3><p className="project-description">{project.description}</p>
          <dl className="project-facts"><div><dt>Role</dt><dd>{project.role}</dd></div><div><dt>What I built</dt><dd>{project.focus}</dd></div><div><dt>Architecture</dt><dd>{project.flow}</dd></div><div><dt>Stack</dt><dd>{project.stack}</dd></div></dl>
          <div className="project-links"><a className="button button-dark" href={project.github} target="_blank" rel="noreferrer">GitHub repository <ArrowUpRight size={15} /></a>{project.demo && <a className="text-link" href={project.demo} target="_blank" rel="noreferrer">Live demo <ArrowUpRight size={14} /></a>}</div>
        </div>
      </article>
    </section>
  )
}
