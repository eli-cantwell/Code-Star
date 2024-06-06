import Nav from './Nav'
import { Outlet } from 'react-router-dom'

function App() {
  return (
    <>
      <Nav />
      <main>
        <Outlet />
      </main>
      <footer></footer>
    </>
  )
}

export default App
