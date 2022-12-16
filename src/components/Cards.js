import avatar from '../pictures/avatar.png';
import "./styles/Cards.css"

const Cards = (props) => {
    return (
        <div className="Cards-item">

            <img className="Cards-photo"
                src={props.image}
                // === null ? <div><img src={avatar} alt={props.name} /> </div> : props.image}
                alt={props.name}
            />
            <marquee direction="up" scrollamount="2" scrolldelay="10">
                <h3>My name is {props.name}.</h3>
                <h4>I'm {props.species} {props.gender}.</h4>
                <h4>My eyes are {props.eyeColor}.</h4>
                <h4>{props.hairColor === undefined ? "I am bald." : `My hair is ${props.hairColor}`}</h4>
                <h4>{props.homeworld === undefined ? "I am SPF." : `I live in ${props.homeworld}`}</h4>
                <h4>I already love you.</h4>
            </marquee>
        </div >
    );
};

export default Cards