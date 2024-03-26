import { Outlet } from 'react-router-dom'
import Navbar from './components/Navbar/Navbar'

function App() {

  return (
    <>
      <Navbar></Navbar>
      <div className="w-11/12 mx-auto">
        <Outlet></Outlet>
      </div>
    </>
  )
}

export default App
