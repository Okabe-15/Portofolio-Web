import { Handle, Position } from '@xyflow/react'
import { BriefcaseBusiness, FolderKanban, Mail, Network, UserRound, Wrench } from 'lucide-react'

const icons = {
  developer: Network,
  about: UserRound,
  projects: FolderKanban,
  skills: Wrench,
  experience: BriefcaseBusiness,
  contact: Mail,
}

export default function LivingMapNode({ id, data }) {
  const Icon = icons[id] ?? Network

  return (
    <div className={`living-map-node${id === 'developer' ? ' living-map-node--developer' : ''}${data.active ? ' is-active' : ''}${data.dimmed ? ' is-dimmed' : ''}`}>
      {id === 'developer' ? (
        <>
          <Handle id="source-top" type="source" position={Position.Top} />
          <Handle id="source-left" type="source" position={Position.Left} />
          <Handle id="source-right" type="source" position={Position.Right} />
          <Handle id="source-bottom" type="source" position={Position.Bottom} />
          <Handle id="source-right-lower" type="source" position={Position.Right} style={{ top: '76%' }} />
        </>
      ) : (
        <>
          <Handle id="target-top" type="target" position={Position.Top} />
          <Handle id="target-bottom" type="target" position={Position.Bottom} />
          <Handle id="target-left" type="target" position={Position.Left} />
          <Handle id="target-right" type="target" position={Position.Right} />
        </>
      )}
      <button type="button" className="living-map-node__button" onClick={data.onActivate} aria-label={data.description}>
        <span className="living-map-node__icon" aria-hidden="true"><Icon size={id === 'developer' ? 21 : 17} strokeWidth={1.7} /></span>
        <span className="living-map-node__copy">
          <strong>{data.label}</strong>
          {id === 'developer' && <small>{data.meta}</small>}
        </span>
      </button>
    </div>
  )
}
