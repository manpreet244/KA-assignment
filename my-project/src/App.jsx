import { useState } from 'react'
import { BrowserRouter ,Route, Routes } from 'react-router-dom'
import './App.css'
import Event from './components/Event'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <h1> Ticket booking</h1>
    <BrowserRouter>
       <Routes>
      <Route path="/events/:eventId" component={Event} />
     </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
