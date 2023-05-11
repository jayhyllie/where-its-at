import Headline from "../components/headlines/Headline";
import Subtitle from "../components/headlines/Subtitle";
import logo from "../assets/logo.png";
import "../styles/Start.css";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

function Start() {
  const navigate = useNavigate();

  useEffect(() => {
    setTimeout(() => {
      navigate('/events')
    }, 2000)
  })
  return (
    <>
      <section className="main__start">
        <img src={logo} alt="logo" className="main__start--image" />
        <Headline headline="Where It's @" className="main__start--headline" />
        <Subtitle
          subtitle="Ticketing made easy"
          className="main__start--subtitle"
        />
      </section>
    </>
  );
}

export default Start;
