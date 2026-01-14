import logotype from "../assets/img/Logotype.png"
import ButtonsP_V1 from "./Buttons/ButtonsP_V1";

import "../styles/Pages/Navbar.css"
import "../styles/Logotype.css"

function NavbarLandingPage() {
    return (
        <div className="navbar">
            <div className="logotype">
                <img src={logotype} />
                <h1>HAPPY PAWS</h1>
            </div>
            <ButtonsP_V1 />
        </div>
    );
}

export default NavbarLandingPage