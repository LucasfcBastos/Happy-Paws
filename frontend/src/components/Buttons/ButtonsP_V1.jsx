import { useNavigate } from "react-router-dom";

import "../../styles/Buttons/ButtonsP.css"

function ButtonsP_V1() {
    const navigate = useNavigate();

    function login() {
        navigate("/login");
    }
    
    return (
        <button className="Navbar Login" onClick={login}>
            <p className="">Login</p>
        </button>
    );
}

export default ButtonsP_V1