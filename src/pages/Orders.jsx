import Headline from "../components/headlines/Headline";
import Order from "../components/Order";
import Button from "../components/Button";
import TotalPrice from "../components/TotalPrice";
import { Link } from "react-router-dom";
import { useContext, useState, useEffect } from "react";
import { EventContext } from "../App";
import "../styles/Orders.css";
import ticketImg from "../assets/tickets.png";

function Orders() {
  const [events, setOrders, orders] = useContext(EventContext);
  const [totalOrder, setTotalOrder] = useState(0);

  return (
    <>
      <section className="orderPage">
        <Link to={`/tickets`}>
          <img
            src={ticketImg}
            alt="ticket image"
            className="orderPage--image"
          />
        </Link>
        <Headline headline="Order" className="orderPage--headline" />

        {orders &&
          orders.map((order, i) => (
            <Order
              setTotalOrder={setTotalOrder}
              chosenEvent={order}
              key={order.name + i}
              index={i}
            />
          ))}
        <section>
          <TotalPrice totalOrder={totalOrder} />
          <Button title="Skicka order" className="orderPage--button" />
        </section>
      </section>
    </>
  );
}

export default Orders;
