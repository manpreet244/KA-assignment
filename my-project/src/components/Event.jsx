import { useState ,useEffect} from "react";
import { useParams } from "react-router-dom";

export default function Event() {
     const { eventId } = useParams();
  const [events, setEvents] = useState();

  const [seats, setSeats] = useState(
    EVENTS.reduce((acc, event) => {
      acc[event.id] = event.totalSeats;
      return acc;
    }, {})
  );
  //backend api integration when user clicks book event call to create event api
  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const response = await fetch("http://localhost:4000/api/v1/events");
        const data = await response.json();
        setEvents(data);
        console.log(data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchEvents();
  }, []);


  const bookTicket = async (eventId) => {
    try {
      const response = await fetch(
        `http://localhost:4000/api/v1/events/${eventId}/book`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      const data = await response.json();
      console.log(data);
      //logic for seat reduction in frontend
      if (response.ok) {
        setSeats((prev) => ({
          ...prev,
          [eventId]: prev[eventId] > 0 ? prev[eventId] - 1 : 0,
        }));
      }
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-3xl font-bold text-center mb-8">
        Ticket Booking App
      </h1>

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
                ${
                  seats[event.id] === 0
                    ? "bg-gray-400 cursor-not-allowed text-white"
                    : "bg-blue-600 hover:bg-blue-700 text-white"
                }`}
            >
              {seats[event.id] === 0 ? "Sold Out" : "Book Ticket"}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
