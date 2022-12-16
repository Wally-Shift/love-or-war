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
      <div>
        <Link to="/game">Got to Game</Link>
      </div>
    </>
  );
}

export default Home;
