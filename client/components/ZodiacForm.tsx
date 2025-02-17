import { useState } from 'react'
import { FormData } from '../../models/formData'
import { useNavigate } from 'react-router-dom'
import { useAuth0 } from '@auth0/auth0-react'

export default function ZodiacForm() {
  const [name, setName] = useState('')
  const [day, setDay] = useState('')
  const [month, setMonth] = useState('')
  const [year, setYear] = useState('')

  const { isAuthenticated, logout, loginWithRedirect } = useAuth0()
  const navigate = useNavigate()

  const handleSignIn = () => {
    if (isAuthenticated) {
      logout()
    } else {
      loginWithRedirect()
    }
  }
  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    // Handle form submission logic will go here
    const form: FormData = {
      api_key: 'ad4cc1fb9b068faecfb70914acc63395',
      full_name: name,
      day: Number(day),
      month: Number(month),
      year: Number(year),
      hour: 12,
      min: 0,
      sec: 0,
      gender: 'male',
      place: 'Auckland, New Zealand',
      lat: 36.8509,
      lon: 174.7645,
      tzone: 12,
    }

    console.log('Form submitted with values:')
    navigate('/info', { state: { form } })
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
    }
  }

  return (
    <div>
      <div className="formDiv">
        <div className="buttonDiv">
          <button onClick={handleSignIn}>
            {isAuthenticated ? 'log-out' : 'Sign-Up'}
          </button>
        </div>
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
          <div className="buttonDiv">
            <button type="submit">Submit</button>
          </div>
        </form>
      </div>
    </div>
  )
}
