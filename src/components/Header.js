import Logo from "../pictures/yodaheart.png";
import "./Header.css";
import { Link } from "react-router-dom";

function Header() {
  return (
    <div className="Header">
      <Link to="/" className="boutonHome">
        <img className="Yoda" src={Logo} alt="Yoda Baby" />
      </Link>
      <div className="vaisseau"></div>
    </div >
  );
}

export default Header;