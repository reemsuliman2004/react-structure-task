export function LoadingSkeleton() {
  return (
    <div style={{ display: 'grid', gap: '0.75rem' }}>
      <div style={{ height: '1rem', width: '70%', background: '#e5e7eb', borderRadius: '999px' }} />
      <div style={{ height: '1rem', width: '90%', background: '#e5e7eb', borderRadius: '999px' }} />
      <div style={{ height: '1rem', width: '60%', background: '#e5e7eb', borderRadius: '999px' }} />
    </div>
  )
}
