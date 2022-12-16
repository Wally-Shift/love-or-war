import Logo from "../pictures/yodaheart.png";
import "./Header.css";
import { Link } from "react-router-dom";

function Header() {
  return (
    <div className="Header">
      <Link to="/">
        <img class="Yoda" src={Logo} alt="Yoda Baby" />
      </Link>
      <div className="vaisseau"></div> {/*div vaisseau */}
    </div >
  );
}

export default Header;