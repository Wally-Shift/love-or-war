// import Header from './screen/Header';
// import Card from './screen/Card';
import '../styles/Result.css';
import logocoeur from '../pictures/logocoeur.png';
import logoeclair from '../pictures/logoeclair.jpg';

const Result = () => {

    // const idRandom =getRandom()
// // function getRandomInt(1, 88) {
// //     min = Math.ceil(1);
// //     max = Math.floor(88);
// //     return Math.floor(Math.random() * (88 - 1) + 1);
// // }

    return (
        <div>
            <img src={logocoeur} className="coeur-result1" alt="logo-coeur" />
            <button>Return</button>
        </div>
    )
}




export default Result;