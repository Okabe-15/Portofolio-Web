import { useCallback, useMemo, useState } from 'react'
import { Background, ReactFlow } from '@xyflow/react'
import '@xyflow/react/dist/style.css'
import { Network } from 'lucide-react'
import { portfolio } from '../../data/portfolio'
import LivingMapNode from './LivingMapNode'

const nodeTypes = { livingMap: LivingMapNode }
const nodes = [
  { id: 'developer', type: 'livingMap', position: { x: 270, y: 205 }, data: { label: 'Ali Hadi', meta: 'Backend Developer', description: 'Back to the top of Ali Hadi Cherid’s portfolio.' } },
  { id: 'about', type: 'livingMap', position: { x: 300, y: 28 }, data: { label: 'About', description: 'Go to About.' } },
  { id: 'skills', type: 'livingMap', position: { x: 26, y: 214 }, data: { label: 'Skills', description: 'Go to Skills.' } },
  { id: 'projects', type: 'livingMap', position: { x: 510, y: 214 }, data: { label: 'Projects', description: 'Go to Projects.' } },
  { id: 'experience', type: 'livingMap', position: { x: 280, y: 378 }, data: { label: 'Experience', description: 'Go to Experience.' } },
  { id: 'contact', type: 'livingMap', position: { x: 508, y: 390 }, data: { label: 'Contact', description: 'Go to Contact.' } },
]

const anchors = { developer: 'top', about: 'about', projects: 'projects', skills: 'toolkit', experience: 'experience', contact: 'contact' }
const edgeDefinitions = [
  { id: 'developer-about', source: 'developer', sourceHandle: 'source-top', target: 'about', targetHandle: 'target-bottom' },
  { id: 'developer-skills', source: 'developer', sourceHandle: 'source-left', target: 'skills', targetHandle: 'target-right' },
  { id: 'developer-projects', source: 'developer', sourceHandle: 'source-right', target: 'projects', targetHandle: 'target-left' },
  { id: 'developer-experience', source: 'developer', sourceHandle: 'source-bottom', target: 'experience', targetHandle: 'target-top' },
  { id: 'developer-contact', source: 'developer', sourceHandle: 'source-right-lower', target: 'contact', targetHandle: 'target-left' },
]

function jumpTo(id) {
  document.getElementById(anchors[id] ?? 'top')?.scrollIntoView({ behavior: 'smooth', block: 'start' })
}

export default function LivingMap() {
  const [activeId, setActiveId] = useState('developer')

  const mapNodes = useMemo(() => nodes.map((node) => ({
    ...node,
    data: {
      ...node.data,
      active: activeId === node.id,
      dimmed: activeId !== 'developer' && node.id !== 'developer' && activeId !== node.id,
      onActivate: () => {
        setActiveId(node.id)
        jumpTo(node.id)
      },
    },
  })), [activeId])

  const mapEdges = useMemo(() => edgeDefinitions.map((edge) => {
    const related = activeId === 'developer' || edge.source === activeId || edge.target === activeId
    return { ...edge, type: 'default', animated: false, style: { stroke: related ? '#35E7F5' : '#41606b', strokeWidth: related ? 1.7 : 1.1, opacity: related ? 0.66 : 0.24 } }
  }), [activeId])

  const handleNodeClick = useCallback((_, node) => setActiveId(node.id), [])
  const moduleList = [
    ['about', 'About'],
    ['skills', 'Skills'],
    ['projects', 'Projects'],
    ['experience', 'Experience'],
    ['contact', 'Contact'],
  ]

  return (
    <section className="living-map-section" aria-labelledby="living-map-title">
      <div className="living-map-heading">
        <p className="section-kicker">Living map</p>
        <h2 id="living-map-title">A connected way through my work.</h2>
      </div>

      <div className="living-map-canvas" role="region" aria-label="Simple map of portfolio sections">
        <ReactFlow
          nodes={mapNodes}
          edges={mapEdges}
          nodeTypes={nodeTypes}
          fitView
          fitViewOptions={{ padding: 0.08, minZoom: 0.8, maxZoom: 1 }}
          nodesDraggable={false}
          nodesConnectable={false}
          elementsSelectable={false}
          nodesFocusable
          edgesFocusable={false}
          panOnDrag={false}
          zoomOnScroll={false}
          zoomOnPinch={false}
          zoomOnDoubleClick={false}
          onNodeMouseEnter={(_, node) => setActiveId(node.id)}
          onNodeMouseLeave={() => setActiveId('developer')}
          onNodeClick={handleNodeClick}
        >
          <Background color="#2d5b68" gap={32} size={1} />
        </ReactFlow>
        <ul className="sr-only" aria-label="Portfolio map text alternative">
          <li>{portfolio.name}, {portfolio.role}</li>
          {moduleList.map(([id, label]) => <li key={id}>{label}: available in the page navigation.</li>)}
        </ul>
      </div>

      <div className="living-map-mobile" aria-label="Portfolio sections connected to the developer">
        <button type="button" className="living-map-mobile__center" onClick={() => jumpTo('developer')}>
          <span aria-hidden="true"><Network size={19} /></span>
          <span><strong>{portfolio.name}</strong><small>{portfolio.role}</small></span>
        </button>
        <div className="living-map-mobile__row">
          {moduleList.slice(0, 3).map(([id, label]) => <button type="button" key={id} onClick={() => jumpTo(id)}>{label}</button>)}
        </div>
        <div className="living-map-mobile__row living-map-mobile__row--lower">
          {moduleList.slice(3).map(([id, label]) => <button type="button" key={id} onClick={() => jumpTo(id)}>{label}</button>)}
        </div>
      </div>
    </section>
  )
}
