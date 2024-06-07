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
  console.log(data)

  return (
    <div className="infoDiv">
      <button onClick={() => logout()}>Log out</button>
      <h1>{data.data[1].name}</h1>
      <p>Sign: {data.data[1].sign}</p>
      <p>Element: {data.data[1].element}</p>
      <img src={`/${data.data[1].element}.png`} />
      <h1>{data.data[2].name}</h1>
      <p>Sign: {data.data[2].sign}</p>
      <p>Element: {data.data[2].element}</p>
      <img src={`/${data.data[2].element}.png`} />
      <h1>{data.data[0].name}</h1>
      <p>Sign: {data.data[0].sign}</p>
      <p>Element: {data.data[0].element}</p>
      <img src={`/${data.data[0].element}.png`} />
    </div>
  )
}
