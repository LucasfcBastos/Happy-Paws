import logotype from "../../assets/img/Logotype.png"
import Buttons from "../Buttons/ButtonsP_User";

import "../../styles/Pages/Navbar.css"
import "../../styles/Logotype.css"

function NavbarHome() {
    return (
        <div className="navbar">
            <div className="logotype">
                <img src={logotype} />
                <h1>HAPPY PAWS</h1>
            </div>
            <Buttons />
        </div>
    );
}

export default NavbarHome 