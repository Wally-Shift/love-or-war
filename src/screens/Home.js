import "./styles/Home.css";
import War from "./styles/pictures/fight.gif";
import Love from "./styles/pictures/love.gif";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div>
      <div className="home_1">
        <img src={Love} className="love" alt="love" />
        <div className="titre">
          <h1 className="titre1">Love</h1>
          <h1 className="titre2">or</h1>
          <h1 className="titre3">WAR</h1>
        </div>
        <img src={War} className="war" alt="battle" />
      </div>

      <div class="fade">
        <section class="star-wars">
          <div class="crawl">
            <p>Episode I</p>
            <p>A New Hope</p>
            <p> In a galaxy far away...</p>
            <p> Two people opposed in every way,</p>
            <p> Are searching for love </p>
            <p> We have a solution:</p>
            <p> A game, before they switch to the dark side of the force</p>
            <p> The game is simple</p>
            <p> Flip two cards,</p>
            <p> If they match, it's LOVE</p>
            <p> Else, it's WAR.</p>
            <p> May the 4th be with you</p>
            <p> But not necessarily in May</p>
          </div>
        </section >
        <Link to="/game" className="grouk">Go to Game</Link><br />
      </div>
    </div>
  );
}

export default Home;
