import "./styles/Game.css"
import "../components/HiddenCard"
import HiddenCard from "../components/HiddenCard"
import { Link } from "react-router-dom";

const Game = () => {
        return (
                <div className="page">
                        <div className="rowPic">{<HiddenCard />}{<HiddenCard />}{<HiddenCard />}{<HiddenCard />}{<HiddenCard />}</div>
                        <div className="rowPic">{<HiddenCard />}{<HiddenCard />}{<HiddenCard />}{<HiddenCard />}{<HiddenCard />}</div>
                        <div className="rowPic">{<HiddenCard />}{<HiddenCard />}{<HiddenCard />}{<HiddenCard />}{<HiddenCard />}</div>
                        <Link to="/characters" className="grouk">Shag Or Die</Link>
                </div>
        )
}

export default Game