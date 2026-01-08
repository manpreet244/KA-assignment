import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Event from "./components/Event";

function App() {
  return (
    <>
      <h1> Ticket booking</h1>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Event />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
