import Headline from "../components/headlines/Headline";
import EventCard from "../components/EventCard";
import SearchInput from "../components/SearchInput";
import "../styles/Events.css";
import { useState, useContext, useMemo } from "react";
import { EventContext } from "../App";

function Events() {
  const [events, setOrders, orders] = useContext(EventContext);
  const [searchString, setSearchString] = useState("");

  const filteredEvents = useMemo(() => {
    if (!searchString) {
      return events;
    } else {
      return events.filter((event) => {
        let name = event.name;
        return name.toLowerCase().includes(searchString.toLowerCase());
      });
    }
  }, [events, searchString]);

  return (
    <main className="eventPage">
      <Headline headline="Events" className="eventPage--headline" />

      <SearchInput
        searchString={searchString}
        setSearchString={setSearchString}
      />

      <ul className="eventList">
        {filteredEvents.map((event, i) => <EventCard event={event} key={i} />)}
      </ul>
    </main>
  );
}

export default Events;
