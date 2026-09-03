import type { User } from '../types/user.types'

export async function getUsers(): Promise<User[]> {
  await new Promise((resolve) => setTimeout(resolve, 400))

  return [
    {
      id: 1,
      name: 'Ada Lovelace',
      email: 'ada@example.com',
      createdAt: '2024-01-10T09:00:00.000Z',
    },
    {
      id: 2,
      name: 'Grace Hopper',
      email: 'grace@example.com',
      createdAt: '2024-02-12T14:30:00.000Z',
    },
    {
      id: 3,
      name: 'Linus Torvalds',
      email: 'linus@example.com',
      createdAt: '2024-03-18T17:15:00.000Z',
    },
  ]
}
