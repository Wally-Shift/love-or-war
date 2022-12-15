import { useEffect, useState } from "react"
import Cards from "./Cards"
import "./styles/Characters.css"

const Characters = () => {
    const [characterInfos01, setCharacterInfos01] = useState([])
    const [characterInfos02, setCharacterInfos02] = useState([])
    useEffect(() => {
        fetch("https://miadil.github.io/starwars-api/api/id/87.json")
            .then((res) => res.json())
            .then((res) => setCharacterInfos01(res))
        fetch("https://miadil.github.io/starwars-api/api/id/25.json")
            .then((res) => res.json())
            .then((res) => setCharacterInfos02(res))
    }, [])

    return (
        <div>
            <section className="charac-Match">
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
            </section>
        </div>
    )
}
export default Characters