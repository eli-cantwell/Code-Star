import { useState } from 'react'

export default function ZodiacForm() {
  const [day, setDay] = useState('')
  const [month, setMonth] = useState('')
  const [year, setYear] = useState('')
  const [hour, setHour] = useState('')
  const [second, setSecond] = useState('')

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    // Handle form submission logic will go here
    console.log('Form submitted with values:', {
      day,
      month,
      year,
      hour,
      second,
    })
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
      case 'second':
        setSecond(value)
        break
      default:
        break
    }
  }

  return (
    <div>
      <p>day: {day}</p>
      <p>month: {month}</p>
      <p>year: {year}</p>
      <p>hour: {hour}</p>
      <p>second: {second}</p>
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
        <label htmlFor="second">Second: </label>
        <input
          type="text"
          id="second"
          name="second"
          value={second}
          onChange={handleChange}
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  )
}
