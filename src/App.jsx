import "./App.css";
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import { useEffect, useState, createContext } from "react";
import Orders from "./pages/Orders";
import Start from "./pages/Start";
import Tickets from "./pages/Tickets";
import EventPage from "./pages/EventPage";
import Events from "./pages/Events";
import axios from "axios";

export const EventContext = createContext();

function App() {
  const [events, setEvents] = useState([]);
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    async function fetchEvents() {
      const URL = `https://majazocom.github.io/Data/events.json`;
      try {
        const res = await axios.get(URL);
        setEvents(res.data.events);
      } catch (error) {
        console.log(error);
      }
    }
    fetchEvents();
  }, []);

  return (
    <EventContext.Provider value={[events, setOrders, orders]}>
      <Router>
        <Routes>
          <Route>
            <Route path="/events" element={<Events />} />
            <Route path="/events/:name" element={<EventPage />} />
            <Route path="/tickets" element={<Tickets />} />
            <Route path="/orders" element={<Orders />} />
            <Route path="/" element={<Start />} />
          </Route>
        </Routes>
      </Router>
    </EventContext.Provider>
  );
}

export default App;
