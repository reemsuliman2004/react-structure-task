type InputProps = {
  label: string
  value: string
  placeholder?: string
  onChange: (value: string) => void
}

export function Input({ label, value, placeholder, onChange }: InputProps) {
  return (
    <label style={{ display: 'flex', flexDirection: 'column', gap: '0.4rem', fontWeight: 500 }}>
      {label}
      <input
        value={value}
        placeholder={placeholder}
        onChange={(event) => onChange(event.target.value)}
        style={{
          padding: '0.7rem 0.8rem',
          borderRadius: '8px',
          border: '1px solid #d1d5db',
          fontSize: '1rem',
        }}
      />
    </label>
  )
}
