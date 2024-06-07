import { createRoutesFromElements, Route } from 'react-router-dom'
import App from './components/App.tsx'
import ZodiacForm from './components/ZodiacForm.tsx'
import ZodiacInfo from './components/ZodiacInfo.tsx'
export default createRoutesFromElements(
  <Route path="/" element={<App />}>
    <Route index element={<ZodiacForm />} />
    <Route path="/info" element={<ZodiacInfo />} />
  </Route>,
)
