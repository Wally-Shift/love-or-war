import "./styles/Home.css";
import War from "./styles/pictures/fight.gif";
import Love from "./styles/pictures/love.gif";
import { Link } from "react-router-dom";

function Home() {
  return (
    <>
      <div className="home_1">
        <img src={Love} className="love" alt="love" />
        <div className="titre">
          <h1 className="titre1">Love</h1>
          <h1 className="titre2">or</h1>
          <h1 className="titre3">WAR</h1>
        </div>
        <img src={War} className="war" alt="battle" />

      </div>
      <div className="Rules">
        <h2>LES RÈGLES</h2>
        <section>
          Episode 1<br />
          Dans une galaxie très lointaine...
          <br />
          Deux êtres que tout oppose,
          <br />
          Cherchent l'amour
          <br />
          Une solution se présente à eux: <br />
          Un jeu, avant de sombrer du côté obscure de la Force.
          <br />
          Le jeu est simple:
          <br />
          Retournes deux cartes,
          <br />
          si ça match c'est: LOVE
          <br />
          Sinon, ça c'est: WAR.
          <br />
          May the 4th be with you
          <br />
        </section>
      </div>
      <div>
        <Link to="/game">Got to Game</Link>
      </div>
    </>
  );
}

export default Home;
