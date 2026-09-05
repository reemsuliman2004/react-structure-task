import { Button } from '../components/ui/Button'
import { Card } from '../components/ui/Card'
import { Table } from '../components/ui/Table'

const products = [
  { name: 'Laptop Pro', category: 'Electronics', stock: 18, status: 'In Stock' },
  { name: 'Wireless Mouse', category: 'Accessories', stock: 42, status: 'In Stock' },
  { name: 'Office Chair', category: 'Furniture', stock: 7, status: 'Low Stock' },
  { name: 'Monitor 4K', category: 'Electronics', stock: 0, status: 'Out of Stock' },
]

export function Home() {
  return (
    <section className="home-page">
      <div className="page-header">
        <p className="eyebrow">Reusable Components</p>
        <h1>React UI Demo</h1>
        <p>This page shows how a few simple components can be reused in different situations.</p>
      </div>

      <div className="button-demo">
        <Button text="Primary Action" onClick={() => console.log('Primary clicked')} variant="primary" />
        <Button text="Secondary Action" onClick={() => console.log('Secondary clicked')} variant="secondary" />
        <Button text="Delete Item" onClick={() => console.log('Danger clicked')} variant="danger" />
        <Button text="Disabled" onClick={() => console.log('Disabled button')} variant="primary" disabled />
      </div>

      <div className="card-grid">
        <Card
          title="Design System"
          description="A consistent set of reusable UI pieces helps teams ship faster and more clearly."
          image="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=900&q=80"
        >
          <ul className="card-list">
            <li>Simple and readable interface</li>
            <li>Easy to update across the app</li>
            <li>Consistent styling and behavior</li>
          </ul>
        </Card>

        <Card
          title="Product Launch"
          description="This card demonstrates how content can vary while sharing the same layout and structure."
        >
          <div className="card-content-box">
            <span className="tag">New Feature</span>
            <p>Launch the campaign with a clear message and a strong call-to-action.</p>
            <Button text="View Details" onClick={() => console.log('Details clicked')} variant="secondary" />
          </div>
        </Card>
      </div>

      <div className="table-section">
        <h2>Products</h2>
        <Table columns={['name', 'category', 'stock', 'status']} data={products} striped />
      </div>
    </section>
  )
}
