import { useEffect, useState } from "react"
import Cards from "./Cards"
import "./styles/Characters.css"
import logocoeur from '../pictures/logocoeur.png';
import logoeclair from '../pictures/logoeclair.png';
import { Link } from "react-router-dom";

const Characters = () => {
    const [characterInfos01, setCharacterInfos01] = useState([])
    const [characterInfos02, setCharacterInfos02] = useState([])
    function getRandomInt() {
        const min = Math.ceil(1);
        const max = Math.floor(87);
        return Math.floor(Math.random() * (87 - 1) + 1);
    }
    useEffect(() => {
        fetch(`https://miadil.github.io/starwars-api/api/id/${getRandomInt()}.json`)
            .then((res) => res.json())
            .then((res) => setCharacterInfos01(res))
        fetch(`https://miadil.github.io/starwars-api/api/id/${getRandomInt()}.json`)
            .then((res) => res.json())
            .then((res) => setCharacterInfos02(res))
    }, [])
    const sizeImage = {
        width: "200px"
    }
    return (
        <div>
            <h2> It is scientifically proven that 2 people of different species and with the different eye color can fall in love.  </h2>
            <section className="charac-Match">
                <div className="characters">
                    <div>
                        <Cards
                            name={characterInfos01.name}
                            image={characterInfos01.image}
                            gender={characterInfos01.gender}
                            species={characterInfos01.species}
                            homeworld={characterInfos01.homeworld}
                            eyeColor={characterInfos01.eyeColor}
                            hairColor={characterInfos01.hairColor}
                        />
                    </div>
                    {characterInfos01.species !== characterInfos02.species && characterInfos01.eyeColor !== characterInfos02.eyeColor ? <div className="charac-coeur-result"><img src={logocoeur} style={sizeImage} alt="logo-coeur" /> </div> : <div className="charac-eclair-result"><img src={logoeclair} style={sizeImage} alt="logo-eclair" /> </div>}
                    <div>
                        <Cards
                            name={characterInfos02.name}
                            image={characterInfos02.image}
                            gender={characterInfos02.gender}
                            species={characterInfos02.species}
                            homeworld={characterInfos02.homeworld}
                            eyeColor={characterInfos02.eyeColor}
                            hairColor={characterInfos02.hairColor}
                        />
                    </div>
                </div>
                <div><Link to="/game" className="grouk">Play Again</Link></div>
            </section>
        </div>
    )
}
export default Characters