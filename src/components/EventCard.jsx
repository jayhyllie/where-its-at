import { Link } from "react-router-dom";
import "../styles/EventCard.css";

function EventCard({ event }) {
  const { name, price, where, when } = event;
  return (
    <Link to={`/events/${name}`}>
      <li className="event__card">
        <section className="event__card--date">
          <p>{when.date}</p>
        </section>
        <section className="event__card--info">
          <h2 className="event__card--artist">{name}</h2>
          <p className="event__card--location">{where}</p>
          <p className="event__card--time">
            {when.from} - {when.to}
          </p>
        </section>
        <span className="event__card--price">{price} SEK</span>
      </li>
    </Link>
  );
}

export default EventCard;
