import Headline from "./headlines/Headline";
import Subtitle from "./headlines/Subtitle";

function EventInfo({ chosenEvent }) {
  const { name, when, where } = chosenEvent;
  return (
    <section className="eventInfo">
      <Headline headline={name} className="eventInfo--name" />
      <p className="eventInfo--when">
        {when.date} kl {when.from} - {when.to}
      </p>
      <Subtitle subtitle={where} className="eventInfo--where" />
    </section>
  );
}

export default EventInfo;
