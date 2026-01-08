import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Event from './components/Event'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <h1> Ticket booking</h1>
     <Event/>
    </>
  )
}

export default App
