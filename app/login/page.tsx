'use client'

import { useState } from 'react'
import { LoginWithEmailAndPassword } from './actions'

export default function LoginPage() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setError('')
    const result = await LoginWithEmailAndPassword(email, password)
    if (result?.success === false) {
      setError(result.message)
    }
  }

  return (
    <div style={{ maxWidth: 320, margin: '80px auto' }}>
      <h1>Login</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit">Log In</button>
      </form>
      {error && <p style={{ color: 'red' }}>{error}</p>}
    </div>
  )
}