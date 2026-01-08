import { useState } from 'react'

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
