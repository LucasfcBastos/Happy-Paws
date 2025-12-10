import logotype from "../assets/img/Logotype.png"
import ButtonsLogin from "./ButtonsLogin";

import "../styles/navbar.css"

function NavbarLandingPage() {
    return (
        <div className="navbar">
            <div>
                <img src={logotype} />
                <h1>HAPPY PAWS</h1>
            </div>
            <ButtonsLogin />
        </div>
    );
}

export default NavbarLandingPage