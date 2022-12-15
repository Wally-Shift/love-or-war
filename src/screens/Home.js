import "./styles/Home.css";
import War from "./styles/pictures/fight.gif";
import Love from "./styles/pictures/love.gif";

function Home() {
  return (
    <>
      <div className="home_1">
        <img src={Love} className="love" alt="love" />
        <h1>
          LOVE
          <br /> OR
          <br />
          WAR
        </h1>
        <img src={War} className="war" alt="battle" />
      </div>
    </>
  );
}

export default Home;
