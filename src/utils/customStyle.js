import { CSS } from '@dnd-kit/utilities'

const styleListItem = {
  transform: CSS.Transform.toString(transform),
  transition,
  boxShadow: isDragging ? '0 8px 24px rgba(0,0,0,0.12)' : undefined,
  background: isDragging ? 'rgba(0,0,0,0.03)' : undefined,
  borderRadius: '12px',
}

export { styleListItem }
