export type ButtonVariant = 'primary' | 'secondary' | 'danger'

export type ButtonProps = {
  text: string
  onClick: () => void
  variant: ButtonVariant
  disabled?: boolean
}

export function Button({ text, onClick, variant, disabled = false }: ButtonProps) {
  return (
    <button
      type="button"
      className={`btn btn-${variant}`}
      onClick={onClick}
      disabled={disabled}
    >
      {text}
    </button>
  )
}
