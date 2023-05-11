import { useContext, useEffect, useState } from "react";
import { EventContext } from "../App";
import Button from "./Button";

function TicketFrame({ chosenEvent }) {
  const [events, setOrders, orders] = useContext(EventContext);
  const [tickets, setTickets] = useState(1);
  const [ticketPrice, setTicketPrice] = useState(0);

  function increment() {
    setTickets(tickets + 1);
  }
  function decrement() {
    setTickets(tickets - 1);
  }

  useEffect(() => {
    setTicketPrice(tickets * chosenEvent.price);
  }, [chosenEvent, tickets]);

  function addToCart() {
    let index = orders.findIndex((order) => order.name === chosenEvent.name);

    if (index !== -1) {
      let allTickets = orders[index].tickets + tickets;

      const updatedOrder = {
        ...chosenEvent,
        tickets: allTickets,
        ticketPrice: ticketPrice,
      };

      let newOrders = orders;
      orders[index] = updatedOrder;
      setOrders(newOrders);
    } else {
      const newOrder = {
        ...chosenEvent,
        tickets: tickets,
        ticketPrice: ticketPrice,
      };

      setOrders([...orders, newOrder]);
    }
  }

  return (
    <>
      <article className="ticketCount">
        <section className="ticketCount__frame">
          <h2 className="ticketCount__frame--price">{ticketPrice} sek</h2>
          <button
            className="ticketCount__frame--amount-btn"
            onClick={decrement}
          >
            -
          </button>
          <h3 className="ticketCount__frame--amount-number">{tickets}</h3>
          <button
            className="ticketCount__frame--amount-btn"
            onClick={increment}
          >
            +
          </button>
        </section>
        <Button
          title="Lägg i varukorgen"
          action={addToCart}
          className="ticketCount__addToCart"
          chosenEvent={chosenEvent}
        />
      </article>
    </>
  );
}

export default TicketFrame;
