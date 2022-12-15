import "./styles/Game.css"
import "../components/HiddenCard"
import HiddenCard from "../components/HiddenCard"

const Game = () => {

        

	return (

        <div className="page">

        <div className="rowPic">{<HiddenCard/>}{<HiddenCard/>}{<HiddenCard/>}{<HiddenCard/>}{<HiddenCard/>}</div>
        <div className="rowPic">{<HiddenCard/>}{<HiddenCard/>}{<HiddenCard/>}{<HiddenCard/>}{<HiddenCard/>}</div>
        <div className="rowPic">{<HiddenCard/>}{<HiddenCard/>}{<HiddenCard/>}{<HiddenCard/>}{<HiddenCard/>}</div>

        
        <a href="#">Make Love OR Make War</a>
        </div>
	)
}

export default Game