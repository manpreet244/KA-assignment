import { useState } from 'react'
import { BrowserRouter ,Route, Router } from 'react-router-dom'
import './App.css'
import Event from './components/Event'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <h1> Ticket booking</h1>
    <BrowserRouter>
       <Router>
      <Route path="/events/:eventId" component={Event} />
     </Router>
    </BrowserRouter>
    </>
  )
}

export default App
