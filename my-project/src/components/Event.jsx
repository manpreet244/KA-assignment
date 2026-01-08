import { useState ,useEffect} from "react";

const EVENTS = [
  {
    id: 1,
    title: "Rock Concert Night",
    date: "March 22, 2026",
    location: "Madison Square Garden",
    totalSeats: 50,
  },
  {
    id: 2,
    title: "Tech Conference 2026",
    date: "April 10, 2026",
    location: "San Francisco Convention Center",
    totalSeats: 100,
  },
  {
    id: 3,
    title: "Stand-up Comedy Show",
    date: "May 5, 2026",
    location: "Chicago Theater",
    totalSeats: 40,
  },
];

export default function Event() {
    const [events, setEvents] = useState();

  const [seats, setSeats] = useState(
    EVENTS.reduce((acc, event) => {
      acc[event.id] = event.totalSeats;
      return acc;
    }, {})
  );
 //backend api integration when user clicks book event call to create event api
 useEffect(()=> {

    const fetchEvents = async ()=>{
        try{
            const response = await fetch("http://localhost:5000/api/v1/events");
            const data = await response.json();
            setEvents(data)
            console.log(data);
        }
        catch(err){
            console.log(err);
        }
    }
    fetchEvents();
 })

  const bookTicket = (eventId) => {
    setSeats((prev) => ({
      ...prev,
      [eventId]: prev[eventId] > 0 ? prev[eventId] - 1 : 0,
    }));
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-3xl font-bold text-center mb-8">🎟️ Ticket Booking App</h1>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
    
        {events?.map((event) => (
          <div
            key={event.id}
            className="bg-white rounded-xl shadow-md p-6 transition hover:shadow-lg"
          >
            <h2 className="text-xl font-semibold mb-1">{event.title}</h2>
            <p className="text-sm text-gray-500">📅 {event.date}</p>
            <p className="text-sm text-gray-500 mb-4">📍 {event.location}</p>

            <p className="mb-3">
              Seats Available:
              <span className="font-bold"> {seats[event.id]}</span>
            </p>

            <button
              onClick={() => bookTicket(event.id)}
              disabled={seats[event.id] === 0}
              className={`w-full py-2 rounded-lg font-medium transition 
                ${seats[event.id] === 0
                  ? "bg-gray-400 cursor-not-allowed text-white"
                  : "bg-blue-600 hover:bg-blue-700 text-white"}`}
            >
              {seats[event.id] === 0 ? "Sold Out" : "Book Ticket"}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
