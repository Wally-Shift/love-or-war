// import { Link } from "react-router-dom"
import "./Footer.css"
import miniYoda from "../pictures/miniyoda2.png"

const Footer = () => {
    return (
        <div className="footer">
            <p className="team">BY <img src={miniYoda} className="miniYoda" alt="min yoda" />CECILIA <img src={miniYoda} className="miniYoda" alt="min yoda" />HELENE <img src={miniYoda} className="miniYoda" alt="min yoda" />MARION <img src={miniYoda} className="miniYoda" alt="min yoda" />MOANA <img src={miniYoda} className="miniYoda" alt="min yoda" />RYAN <img src={miniYoda} className="miniYoda" alt="min yoda" />SOPHIE <img src={miniYoda} className="miniYoda" alt="min yoda" />VALTER</p>
            <p className="hackathon">HACKATHON WILD CODE SCHOOL 12-2022 Dev&Jerry's</p>

        </div>
    )
}

export default Footer


//<img src={imgFooter} className="imgFooter" alt="sabre laser" />