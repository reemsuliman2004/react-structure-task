type ButtonProps = {
  children: React.ReactNode
  type?: 'button' | 'submit' | 'reset'
  onClick?: () => void
}

export function Button({ children, type = 'button', onClick }: ButtonProps) {
  return (
    <button type={type} onClick={onClick} style={{
      padding: '0.7rem 1.1rem',
      border: 'none',
      borderRadius: '8px',
      backgroundColor: '#2563eb',
      color: '#fff',
      cursor: 'pointer',
      fontSize: '0.95rem',
      fontWeight: 600,
    }}>
      {children}
    </button>
  )
}
