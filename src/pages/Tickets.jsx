import { useContext } from "react";
import { EventContext } from "../App";
import { Link } from "react-router-dom";
import Ticket from "../components/Ticket";
import Headline from "../components/headlines/Headline";
function Tickets() {
  const [events, setOrders, orders] = useContext(EventContext);
  return (
    <>
      <Link to={`/events`}>
        <Headline headline="Where It's @" />
      </Link>
      <section className="ticketPage">
      {orders.map((order, i) => <Ticket orderInfo={order} key={i}/>)}
      </section>
    </>
  );
}

export default Tickets;
