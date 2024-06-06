import { useState } from 'react'
import { FormData } from '../../models/formData'

export default function ZodiacForm() {
  const [name setName] = useState('')
  const [day, setDay] = useState('')
  const [month, setMonth] = useState('')
  const [year, setYear] = useState('')
  const [hour, setHour] = useState('')
  const [min, setMin] = useState('')
  const [sec, setSec] = useState('')
  const [gender, setGender] = useState('')
  const [place, setPlace] = useState('')
  const [lat, setLat] = useState('')
  const [lon, setName] = useState('')

  const [formObj, setFormObj] = useState('')

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    // Handle form submission logic will go here
    setFormObj({
      api_key: '{Your API Key}',
      full_name: 'Rahul Kumar',
      day: day,
      month: month,
      year: year,
      hour: hour,
      min: min,
      sec: sec,
      gender: 'male',
      place: 'New Delhi, India',
      lat: '28.7041',
      lon: '77.1025',
      tzone: '5.5',
    })

    console.log('Form submitted with values:')
  }

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    const { name, value } = e.target
    switch (name) {
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
      <pre>{JSON.stringify(formObj, null, 2)}</pre>
      <p>day: {day}</p>
      <p>month: {month}</p>
      <p>year: {year}</p>
      <p>hour: {hour}</p>
      <p>second: {sec}</p>
      <form onSubmit={handleSubmit}>
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
        <button type="submit">Submit</button>
      </form>
    </div>
  )
}
