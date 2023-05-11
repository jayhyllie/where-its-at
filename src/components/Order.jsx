import { useContext, useEffect, useState } from "react";
import { EventContext } from "../App";

function Order({ chosenEvent, setTotalOrder, index }) {
  const [events, setOrders, orders] = useContext(EventContext);
  const [tickets, setTickets] = useState(chosenEvent.tickets);
  const { name, when } = chosenEvent; 

  function increment() {
    setTickets(tickets + 1);
  }
  function decrement() {
    setTickets(tickets - 1);
  }
  function deleteOrder() {
    setOrders(orders.filter((order) => order.tickets > 0))
  }

  function totalPrice () {
    let cartTotal = 0;
    orders.forEach((order) => {
        cartTotal += order.ticketPrice
    });
    setTotalOrder(cartTotal);
  }

  useEffect(() => {
    orders[index].tickets = tickets;
    orders[index].ticketPrice = chosenEvent.price * tickets;
    tickets === 0 ? deleteOrder() : setOrders(orders);
    totalPrice();
  }, [tickets])

  return (
    <>
      <article className="order">
        <section className="order__frame">
          <section className="order__frame--info">
            <h2>{name}</h2> 
            <p>{when.date} kl {when.from} - {when.to}</p>
          </section>
          <button className="order__frame--amount-btn" onClick={decrement}>-</button>
          <h3 className="order__frame--amount-number">{tickets}</h3>
          <button className="order__frame--amount-btn" onClick={increment}>+</button>
        </section>
      </article>
    </>
  );
}

export default Order;
