import { useNatalChart } from '../apis/natalChart'
import { useLocation } from 'react-router-dom'
import { useAuth0 } from '@auth0/auth0-react'

export default function ZodiacInfo() {
  const { logout } = useAuth0()
  const location = useLocation()
  const { form } = location.state || {}
  console.log(form)

  const { data, isPending, isError } = useNatalChart(form)

  if (isPending || isError) {
    return (
      <div className="infoDiv">
        <p>pending</p>
      </div>
    )
  }
  return (
    <div className="infoDiv">
      <button onClick={() => logout()}>Log out</button>
      <pre>{JSON.stringify(data?.data, null, 2)}</pre>
    </div>
  )
}
