import { useNatalChart } from '../apis/natalChart'
import { useLocation } from 'react-router-dom'

export default function ZodiacInfo() {
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
      <pre>{JSON.stringify(data?.data, null, 2)}</pre>
    </div>
  )
}
