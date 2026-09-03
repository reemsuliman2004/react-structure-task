import { useEffect, useState } from 'react'
import { Button } from '../components/ui/Button'
import { Input } from '../components/ui/Input'
import { LoadingSkeleton } from '../components/skeleton/LoadingSkeleton'
import { EmptyState } from '../components/common/EmptyState'
import { getUsers } from '../api/users.api'
import type { User } from '../types/user.types'
import { formatDate } from '../utils/formatDate'

export function Home() {
  const [search, setSearch] = useState('')
  const [users, setUsers] = useState<User[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    getUsers().then((data) => {
      setUsers(data)
      setLoading(false)
    })
  }, [])

  const filteredUsers = users.filter((user) =>
    user.name.toLowerCase().includes(search.toLowerCase()),
  )

  return (
    <section className="page-box">
      <h1>Home</h1>
      <p>This is a simple example of a homepage.</p>

      <div className="search-box">
        <Input label="Search" value={search} placeholder="Type a name" onChange={setSearch} />
      </div>

      {loading ? (
        <LoadingSkeleton />
      ) : filteredUsers.length > 0 ? (
        <div className="user-list">
          {filteredUsers.map((user) => (
            <div key={user.id} className="user-card">
              <strong>{user.name}</strong>
              <span>{user.email}</span>
              <small>{formatDate(user.createdAt)}</small>
            </div>
          ))}
        </div>
      ) : (
        <EmptyState title="No users found" message="Please try another name." />
      )}

      <div className="button-row">
        <Button onClick={() => setSearch('')}>Reset</Button>
      </div>
    </section>
  )
}
