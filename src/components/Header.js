import Logo from "../pictures/yodaheart.png";
import "./Header.css";

function Header() {
    return (
      <div className="Header">
        <img class="Yoda" src={Logo} />
        <h2 class="Titrepage">Love or War</h2>
            
      </div>
    );
  }

export default Header;