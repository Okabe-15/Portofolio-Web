import { useMemo, useState } from 'react'
import { Background, MarkerType, ReactFlow } from '@xyflow/react'
import ProjectArchitectureNode from './ProjectArchitectureNode'

const nodeTypes = { projectArchitecture: ProjectArchitectureNode }
const twoRowPositions = {
  client: { x: 20, y: 94 }, browser: { x: 20, y: 94 },
  api: { x: 215, y: 94 }, express: { x: 215, y: 94 }, mock: { x: 215, y: 94 },
  session: { x: 425, y: 8 }, auth: { x: 425, y: 8 },
  catalog: { x: 425, y: 125 }, booking: { x: 425, y: 125 }, events: { x: 425, y: 125 },
  db: { x: 645, y: 94 }, sequelize: { x: 645, y: 94 },
  images: { x: 425, y: 240 }, postgres: { x: 645, y: 240 },
}

export default function ProjectArchitecture({ architecture }) {
  const [activeNodeId, setActiveNodeId] = useState('')
  const positions = architecture.nodes.length > 4 ? twoRowPositions : null

  const nodes = useMemo(() => architecture.nodes.map((node, index) => ({
    id: node.id,
    type: 'projectArchitecture',
    position: node.position ?? positions?.[node.id] ?? { x: 30 + index * 190, y: 94 },
    data: { ...node, active: activeNodeId === node.id, onActivate: setActiveNodeId },
  })), [activeNodeId, architecture.nodes, positions])

  const edges = useMemo(() => architecture.edges.map(([source, target], index) => ({
    id: `${source}-${target}`,
    source,
    target,
    sourceHandle: positions ? (source === 'developer' ? 'source-right' : 'source-right') : 'source-right',
    targetHandle: positions ? 'target-left' : 'target-left',
    type: 'smoothstep',
    markerEnd: { type: MarkerType.ArrowClosed, color: activeNodeId && activeNodeId !== source && activeNodeId !== target ? '#38515b' : '#63d8e4', width: 13, height: 13 },
    style: { stroke: activeNodeId && activeNodeId !== source && activeNodeId !== target ? '#38515b' : (index % 2 ? '#52c6d6' : '#45d8c1'), strokeWidth: activeNodeId && activeNodeId !== source && activeNodeId !== target ? 1 : 1.6, opacity: activeNodeId && activeNodeId !== source && activeNodeId !== target ? 0.35 : 0.72 },
  })), [activeNodeId, architecture.edges, positions])

  const activeNode = architecture.nodes.find((node) => node.id === activeNodeId)

  return (
    <section className="project-architecture" aria-labelledby="project-architecture-title">
      <div className="project-architecture__heading">
        <div><p className="section-kicker">How it works</p><h3 id="project-architecture-title">{architecture.title}</h3></div>
        <span className={`architecture-type architecture-type--${architecture.type}`}>{architecture.type === 'system' ? 'System map' : 'Workflow map'}</span>
      </div>
      <p className="project-architecture__summary">{architecture.summary}</p>
      <div className="project-architecture__canvas" role="region" aria-label={`${architecture.title} diagram`}>
        <ReactFlow
          nodes={nodes}
          edges={edges}
          nodeTypes={nodeTypes}
          fitView
          fitViewOptions={{ padding: 0.12, minZoom: 0.55, maxZoom: 0.95 }}
          nodesDraggable={false}
          nodesConnectable={false}
          elementsSelectable={false}
          nodesFocusable
          edgesFocusable={false}
          panOnDrag={false}
          zoomOnScroll={false}
          zoomOnPinch={false}
          zoomOnDoubleClick={false}
        >
          <Background color="#2b5662" gap={28} size={1} />
        </ReactFlow>
      </div>
      <ol className="project-architecture__mobile" aria-label={`${architecture.title} steps`}>
        {architecture.nodes.map((node) => <li key={node.id}><span>{node.label}</span><small>{node.detail}</small></li>)}
      </ol>
      <p className="project-architecture__detail" aria-live="polite">{activeNode ? <><strong>{activeNode.label}</strong> — {activeNode.detail}</> : 'Select a node to read what it represents.'}</p>
      <ul className="sr-only" aria-label="Diagram text alternative">
        {architecture.nodes.map((node) => <li key={node.id}>{node.label}: {node.detail}</li>)}
      </ul>
    </section>
  )
}
