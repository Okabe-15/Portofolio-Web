import { Handle, Position } from '@xyflow/react'
import { Boxes, Braces, Database, FileJson2, Globe2, Radio, Server, Sparkles, UsersRound } from 'lucide-react'

const icons = {
  client: Globe2,
  service: Server,
  data: Database,
  user: UsersRound,
  output: Boxes,
  ai: Sparkles,
  events: Radio,
  dataset: FileJson2,
  api: Braces,
}

export default function ProjectArchitectureNode({ id, data }) {
  const Icon = icons[data.kind] ?? Server
  return (
    <div className={`project-architecture-node${data.active ? ' is-active' : ''}`}>
      <Handle id="target-left" type="target" position={Position.Left} />
      <Handle id="target-top" type="target" position={Position.Top} />
      <Handle id="source-right" type="source" position={Position.Right} />
      <Handle id="source-bottom" type="source" position={Position.Bottom} />
      <button type="button" className="project-architecture-node__button" onClick={() => data.onActivate(id)} aria-pressed={data.active} aria-label={`${data.label}: ${data.detail}`}>
        <span className="project-architecture-node__icon" aria-hidden="true"><Icon size={17} strokeWidth={1.7} /></span>
        <span><strong>{data.label}</strong><small>{data.kind === 'data' ? 'Data' : data.kind === 'client' ? 'Client' : data.kind === 'user' ? 'User flow' : data.kind === 'output' ? 'Outcome' : 'Service'}</small></span>
      </button>
    </div>
  )
}
