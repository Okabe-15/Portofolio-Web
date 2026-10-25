import { useEffect, useMemo, useState } from 'react'
import { useReducedMotion } from 'framer-motion'
import { Background, Controls, Handle, MiniMap, Position, ReactFlow, useEdgesState, useNodesState } from '@xyflow/react'
import '@xyflow/react/dist/style.css'

const modules = [
  ['about', 'ABOUT ME', 'PROFILE', 'cyan', 'Education, interests, and experience that shape how I approach software projects.'],
  ['skills', 'SKILLS', 'TECH STACK', 'yellow', 'Languages and tools used across frontend, backend, data, API testing, and AI integration.'],
  ['core', 'ALI HADI CHERID', 'FULL STACK DEVELOPER', 'green', 'Final-year Informatics Engineering student building full-stack applications and AI integrations.'],
  ['projects', 'PROJECTS', '6 SELECTED PROJECTS', 'green', 'Portfolio work across interview practice, marketplaces, learning, auctions, and booking.'],
  ['experience', 'EXPERIENCE', 'INTERNSHIP / EDUCATION', 'cyan', 'ERP consultant internship, Informatics Engineering degree, and full-stack bootcamp.'],
  ['api', 'API + AI', 'INTEGRATION LAYER', 'blue', 'REST APIs, relational data, generative AI, and speech services used across project work.'],
  ['contact', 'CONTACT', 'OPEN CHANNEL', 'green', 'Email, GitHub, and LinkedIn contact details.'],
].map(([id, label, meta, tone, description]) => ({ id, label, meta, tone, description }))

const projectNodes = [
  { id: 'intervue', projectId: 'intervue', label: 'INTERVUE', meta: 'AI INTERVIEW COACH', tone: 'blue', description: 'Interview simulations with text and voice sessions, AI evaluation, follow-up questions, and readiness reports.' },
  { id: 'toko', projectId: 'toko', label: 'TOKO NUSANTARA', meta: 'LOCAL MARKETPLACE', tone: 'green', description: 'A marketplace with seller and buyer workflows, product listings, filtering, and shopping cart.' },
  { id: 'badminton', projectId: 'badminton', label: 'BADMINTON RANKINGS', meta: 'WEB DIRECTORY', tone: 'yellow', description: 'A searchable directory of 30 Indonesian badminton players and their rankings.' },
  { id: 'comic', projectId: 'comic', label: 'COMIC ENGLISH', meta: 'AI LEARNING APP', tone: 'blue', description: 'An English learning application with AI-generated comics and student progress tracking.' },
  { id: 'smart-hammer', projectId: 'smart-hammer', label: 'SMART HAMMER', meta: 'AI AUCTION PLATFORM', tone: 'green', description: 'An auction frontend with real-time Socket.IO bidding, product Q&A, and AI auctioneer features.' },
  { id: 'homestay', projectId: 'homestay', label: 'HOMESTAY PULAU 1000', meta: 'BOOKING APP', tone: 'yellow', description: 'A booking application with user authentication, reservation workflows, and admin management.' },
]

const technologyNodes = ['React.js', 'JavaScript', 'Node.js', 'Express.js', 'PostgreSQL', 'Sequelize', 'REST API', 'Groq / Whisper', 'ElevenLabs'].map((label, index) => ({
  id: `technology-${index}`,
  label: label.toUpperCase(),
  meta: 'TECH STACK',
  tone: index % 2 ? 'blue' : 'yellow',
  description: `${label} is listed in the CV’s technical skills or project stack.`,
}))

const desktopPositions = { about: [420, 0], api: [40, 170], core: [420, 220], projects: [800, 170], skills: [40, 405], experience: [800, 405], contact: [420, 500] }
const mobilePositions = { about: [155, 0], skills: [8, 130], core: [155, 130], projects: [302, 130], experience: [155, 265], contact: [155, 400], api: [8, 265] }

function ArchitectureNode({ data, selected }) {
  return <div className={`architecture-node ${data.tone} ${data.core ? 'core' : ''} ${selected ? 'selected' : ''}`} title={data.description}>
    <Handle type="target" position={Position.Top} />
    <div className="node-symbol">{data.core ? 'AH' : '+'}</div>
    <strong>{data.label}</strong>
    <small>{data.meta}</small>
    <Handle type="source" position={Position.Bottom} />
  </div>
}

const nodeTypes = { architecture: ArchitectureNode }

export default function ArchitectureMap() {
  const shouldReduceMotion = useReducedMotion()
  const [isMobile, setIsMobile] = useState(() => window.innerWidth < 700)
  const [selectedId, setSelectedId] = useState('core')
  const [hoveredId, setHoveredId] = useState('')
  const [showProjects, setShowProjects] = useState(false)
  const [showSkills, setShowSkills] = useState(false)

  useEffect(() => {
    const onResize = () => setIsMobile(window.innerWidth < 700)
    window.addEventListener('resize', onResize)
    return () => window.removeEventListener('resize', onResize)
  }, [])

  useEffect(() => {
    const onProjectSelected = (event) => {
      setSelectedId(projectNodes.find(({ projectId }) => projectId === event.detail?.id)?.id ?? 'projects')
      setShowProjects(true)
      setShowSkills(false)
    }
    window.addEventListener('portfolio:project-selected', onProjectSelected)
    return () => window.removeEventListener('portfolio:project-selected', onProjectSelected)
  }, [])

  const baseNodes = useMemo(() => {
    const positions = isMobile ? mobilePositions : desktopPositions
    return modules.map((module) => {
      const [x, y] = positions[module.id]
      return { id: module.id, type: 'architecture', position: { x, y }, data: { ...module, core: module.id === 'core' } }
    })
  }, [isMobile])

  const childSource = showProjects ? projectNodes : showSkills ? technologyNodes : []
  const childNodes = childSource.map((node, index) => ({
    ...node,
    type: 'architecture',
    position: isMobile ? { x: 155, y: 515 + index * 84 } : { x: 1010, y: 20 + index * 84 },
    data: node,
  }))
  const [nodes, setNodes, onNodesChange] = useNodesState([...baseNodes, ...childNodes])
  const [edges, setEdges, onEdgesChange] = useEdgesState([])

  useEffect(() => {
    setNodes([...baseNodes, ...childNodes])
  }, [isMobile, showProjects, showSkills])

  const graphEdges = useMemo(() => {
    const links = [['about', 'core'], ['api', 'core'], ['core', 'projects'], ['core', 'skills'], ['core', 'experience'], ['core', 'contact']]
    if (showProjects) links.push(...projectNodes.map((project) => ['projects', project.id]))
    if (showSkills) links.push(...technologyNodes.map((technology) => ['skills', technology.id]))
    const activeId = hoveredId || selectedId
    return links.map(([source, target], index) => {
      const active = source === activeId || target === activeId
      return { id: `edge-${source}-${target}`, source, target, animated: !shouldReduceMotion, style: { stroke: index % 2 ? '#338cff' : '#35e7f5', strokeWidth: active ? 2.5 : 1.5, opacity: active ? 1 : .3 } }
    })
  }, [selectedId, hoveredId, showProjects, showSkills, shouldReduceMotion])

  const selectedNode = [...modules, ...projectNodes, ...technologyNodes].find(({ id }) => id === selectedId) ?? modules[2]
  const connected = new Set(graphEdges.filter(({ source, target }) => source === (hoveredId || selectedId) || target === (hoveredId || selectedId)).flatMap(({ source, target }) => [source, target]))

  const handleNodeClick = (_, node) => {
    setSelectedId(node.id)
    const project = projectNodes.find(({ id }) => id === node.id)
    if (project) {
      setShowProjects(true)
      setShowSkills(false)
      window.dispatchEvent(new CustomEvent('portfolio:select-project', { detail: { id: project.projectId } }))
      document.getElementById('projects')?.scrollIntoView({ behavior: shouldReduceMotion ? 'auto' : 'smooth' })
      return
    }
    if (node.id === 'projects') {
      setShowProjects((current) => !current)
      setShowSkills(false)
      document.getElementById('projects')?.scrollIntoView({ behavior: shouldReduceMotion ? 'auto' : 'smooth' })
      return
    }
    if (node.id === 'skills') {
      setShowSkills((current) => !current)
      setShowProjects(false)
      document.getElementById('toolkit')?.scrollIntoView({ behavior: shouldReduceMotion ? 'auto' : 'smooth' })
      return
    }
    const targetId = node.id === 'core' || node.id === 'about' ? 'about' : node.id === 'experience' ? 'experience' : node.id === 'contact' ? 'contact' : ''
    if (targetId) document.getElementById(targetId)?.scrollIntoView({ behavior: shouldReduceMotion ? 'auto' : 'smooth' })
  }

  const expanded = showProjects || showSkills
  const visibleNodes = nodes.map((node) => ({ ...node, style: { opacity: hoveredId && node.id !== hoveredId && !connected.has(node.id) ? .35 : 1 } }))
  const alternatives = [...modules, ...(showProjects ? projectNodes : []), ...(showSkills ? technologyNodes : [])]

  return <div className={`architecture-canvas ${isMobile ? 'mobile-graph' : ''} ${showProjects ? 'has-projects' : ''} ${showSkills ? 'has-skills' : ''}`} role="region" aria-label="Interactive system architecture map">
    <ReactFlow key={`${isMobile}-${showProjects}-${showSkills}`} nodes={visibleNodes} edges={graphEdges} nodeTypes={nodeTypes} onNodesChange={onNodesChange} onEdgesChange={onEdgesChange} onNodeClick={handleNodeClick} onNodeMouseEnter={(_, node) => setHoveredId(node.id)} onNodeMouseLeave={() => setHoveredId('')} fitView fitViewOptions={{ padding: .18 }} minZoom={isMobile ? .5 : .65} maxZoom={isMobile ? 1 : 1.25} zoomOnScroll={!isMobile} panOnDrag>
      <Background color="#244454" gap={28} size={1} />
      {!isMobile && <Controls showInteractive={false} />}
      {!isMobile && <MiniMap nodeColor={(node) => node.data.tone === 'green' ? '#37f5ae' : '#338cff'} maskColor="rgba(6,16,24,.78)" />}
    </ReactFlow>
    <ul className="sr-only" aria-label="Architecture map text alternative">{alternatives.map(({ id, label, description }) => <li key={id}>{label}: {description}</li>)}</ul>
    <div className="api-flow-card" aria-label="Illustrative API data flow"><span className="inspector-kicker">REQUEST FLOW</span><div><b>Request</b><i className="flow-packet" /><b>API</b><i className="flow-packet second" /><b>Service</b><i className="flow-packet third" /><b>Data</b><i className="flow-packet fourth" /><b>Response</b></div></div>
    <div className="architecture-inspector" aria-live="polite"><span className="inspector-kicker">ACTIVE MODULE</span><strong>{selectedNode.label}</strong><p>{selectedNode.description}</p>
      {selectedId === 'projects' && <button type="button" onClick={() => setShowProjects((current) => !current)}>{showProjects ? 'Collapse projects' : 'Inspect projects'}</button>}
      {selectedId === 'skills' && <button type="button" onClick={() => setShowSkills((current) => !current)}>{showSkills ? 'Hide technologies' : 'Show technologies'}</button>}
      {expanded && <button type="button" onClick={() => { setShowProjects(false); setShowSkills(false); setSelectedId('core') }}>Reset map</button>}
    </div>
  </div>
}
