type CardProps = {
  title: string
  description: string
  image?: string
  children: React.ReactNode
}

export function Card({ title, description, image, children }: CardProps) {
  return (
    <article className="card">
      {image ? <img src={image} alt={title} className="card-image" /> : null}

      <div className="card-body">
        <h3 className="card-title">{title}</h3>
        <p className="card-description">{description}</p>

        <div className="card-content">{children}</div>
      </div>
    </article>
  )
}
