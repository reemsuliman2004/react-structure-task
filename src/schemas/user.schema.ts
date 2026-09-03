export type UserSchema = {
  id: number
  name: string
  email: string
}

export function validateUser(user: Partial<UserSchema>) {
  const errors: string[] = []

  if (!user.name || user.name.trim().length < 2) {
    errors.push('Name must be at least 2 characters long.')
  }

  if (!user.email || !user.email.includes('@')) {
    errors.push('Email must be valid.')
  }

  return {
    isValid: errors.length === 0,
    errors,
  }
}
