import { useState } from 'react'

export default function ZodiacForm() {
  const [name, setName] = useState('')
  const [day, setDay] = useState('')
  const [month, setMonth] = useState('')
  const [year, setYear] = useState('')
  const [hour, setHour] = useState('')
  const [min, setMin] = useState('')
  const [sec, setSec] = useState('')

  const [formObj, setFormObj] = useState('')

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    // Handle form submission logic will go here
    setFormObj({
      api_key: '{ad4cc1fb9b068faecfb70914acc63395}',
      full_name: name,
      day: day,
      month: month,
      year: year,
      hour: hour,
      min: min,
      sec: sec,
      gender: 'male',
      place: 'Auckland, New Zealand',
      lat: '36.8509',
      lon: '174.7645',
      tzone: '12',
    })

    console.log('Form submitted with values:')
  }

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    const { name, value } = e.target
    switch (name) {
      case 'name':
        setName(value)
        break
      case 'day':
        setDay(value)
        break
      case 'month':
        setMonth(value)
        break
      case 'year':
        setYear(value)
        break
      case 'hour':
        setHour(value)
        break
      case 'min':
        setMin(value)
        break
      case 'sec':
        setSec(value)
        break
      default:
        break
    }
  }

  return (
    <div>
      <div className="formDiv">
        <form onSubmit={handleSubmit}>
          <label htmlFor="name">Full Name: </label>
          <input
            type="text"
            id="name"
            name="name"
            value={name}
            onChange={handleChange}
          />
          <label htmlFor="day">Day: </label>
          <input
            type="text"
            id="day"
            name="day"
            value={day}
            onChange={handleChange}
          />
          <label htmlFor="month">Month: </label>
          <input
            type="text"
            id="month"
            name="month"
            value={month}
            onChange={handleChange}
          />
          <label htmlFor="year">Year: </label>
          <input
            type="text"
            id="year"
            name="year"
            value={year}
            onChange={handleChange}
          />
          <label htmlFor="hour">Hour: </label>
          <input
            type="text"
            id="hour"
            name="hour"
            value={hour}
            onChange={handleChange}
          />
          <label htmlFor="min">Minute: </label>
          <input
            type="text"
            id="min"
            name="min"
            value={min}
            onChange={handleChange}
          />
          <label htmlFor="sec">Second: </label>
          <input
            type="text"
            id="sec"
            name="sec"
            value={sec}
            onChange={handleChange}
          />
          <div className="buttonDiv">
            <button type="submit">Submit</button>
          </div>
        </form>
      </div>
      <div className="objDiv">
        <pre>{JSON.stringify(formObj, null, 2)}</pre>
      </div>
    </div>
  )
}
