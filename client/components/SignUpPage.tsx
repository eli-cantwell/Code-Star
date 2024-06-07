import { useAuth0 } from '@auth0/auth0-react'
import { useNavigate } from 'react-router-dom'

export default function SignUpPage() {
  const { loginWithRedirect, isAuthenticated, logout } = useAuth0()
  const navigate = useNavigate()

  const handleSignIn = async () => {
    try {
      loginWithRedirect()
      if (isAuthenticated) {
        navigate('/form')
      }
    } catch (error) {
      console.error('Login failed:', error)
    }
  }

  return (
    <div>
      <button onClick={handleSignIn}>Sign-in</button>
      <button onClick={() => logout()}>Sign out</button>
    </div>
  )
}
