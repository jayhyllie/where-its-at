import EventInfo from "../components/EventInfo";
import Headline from "../components/headlines/Headline";
import Subtitle from "../components/headlines/Subtitle";
import TicketFrame from "../components/TicketFrame";
import cart from '../assets/cartIcon.png';
import "../styles/EventPage.css";
import { useContext, useEffect, useState } from "react";
import { EventContext } from "../App";
import { Link, useParams } from "react-router-dom";

function EventPage() {
  const emptyEvent = {
    name: "",
    price: "",
    where: "",
    when: {
      date: "",
      from: "",
      to: "",
    },
  };

  const [events, setOrders, orders] = useContext(EventContext);
  const [chosenEvent, setChosenEvent] = useState(emptyEvent);

  let { name } = useParams();
  useEffect(() => {
    events.forEach((event) => {
      if (event.name === name) {
        setChosenEvent(event);
      }
    });
  }, []);

  return (
    <article className="singleEvent">
      <Link to={`/orders`}><img src={cart} alt="cart" className="cartIcon"/></Link>
      <Headline headline="Event" className="singleEvent--headline" />
      <section className="singleEvent__wrapper">
        <section className="singleEvent__wrapper--subtitle">
          <Subtitle
            subtitle="You're about to score some tickets to"
            className="singleEvent--subtitle"
          />
        </section>
        <EventInfo chosenEvent={chosenEvent} />
        <TicketFrame chosenEvent={chosenEvent} />
      </section>
    </article>
  );
}

export default EventPage;
