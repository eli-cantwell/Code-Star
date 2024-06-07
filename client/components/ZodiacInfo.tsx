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

  const info = (index: number) => {
    const newInfoArray = []
    for (let i = 0; i < 4; i++) {
      newInfoArray.push({
        name: data?.data[i].name,
        sign: data?.data[i].sign,
        element: data?.data[i].element,
      })
    }

    return newInfoArray[index]
  }
  return (
    <div className="infoDiv">
      <h1>{info(1).name}</h1>
      <p>{info(1).sign}</p>
      <p>{info(1).element}</p>
      <h1>{info(2).name}</h1>
      <p>{info(2).sign}</p>
      <p>{info(2).element}</p>
      <h1>{info(3).name}</h1>
      <p>{info(3).sign}</p>
      <p>{info(3).element}</p>
    </div>
  )
}
