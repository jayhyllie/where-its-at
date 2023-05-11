import "../styles/Ticket.css";

function Ticket({ orderInfo }) {

  let ticketList = [];
  for (let i = 0; i < orderInfo.tickets; i++) {
    ticketList.push(i);
  }
  return (
    <>
      {ticketList.map((i) => (
        <article className="ticket" key={i}>
          <section className="ticket__event">
            <span className="ticket__span">What</span>
            <h2 className="ticket__event--name">{orderInfo.name}</h2>
          </section>
          <section className="ticket__place">
            <span className="ticket__span">Where</span>
            <h3 className="ticket__place--where">{orderInfo.where}</h3>
            <p className="ticket__place--address">
              Göteborgs universitet. Pedagogen, hus A
            </p>
          </section>
          <section className="ticket__when">
            <section>
              <span className="ticket__span">When</span>
              <h3 className="ticket__when--date">{orderInfo.when.date}</h3>
            </section>
            <section>
              <span className="ticket__span">From</span>
              <h3 className="ticket__when--date">{orderInfo.when.from}</h3>
            </section>
            <section>
              <span className="ticket__span">To</span>
              <h3 className="ticket__when--date">{orderInfo.when.to}</h3>
            </section>
          </section>
          <section className="ticket__seating">
            <span className="ticket__span">Info</span>
            <p className="ticket__seating--seat">
              Section C - seat 233, bring umbrella
            </p>
          </section>
          <section className="ticket__scan">
            <img
              src="src\assets\barcode.png"
              alt="barcode"
              className="ticket__scan--bar"
            />
            <span className="ticket__scan--code">#A2ED7</span>
          </section>
        </article>
      ))}
    </>
  );
}

export default Ticket;
