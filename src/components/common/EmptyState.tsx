type EmptyStateProps = {
  title: string
  message?: string
}

export function EmptyState({ title, message = 'There is nothing to show yet.' }: EmptyStateProps) {
  return (
    <div style={{ padding: '2rem', border: '1px dashed #cbd5e1', borderRadius: '12px', textAlign: 'center', color: '#475569' }}>
      <h3 style={{ margin: '0 0 0.5rem' }}>{title}</h3>
      <p style={{ margin: 0 }}>{message}</p>
    </div>
  )
}
