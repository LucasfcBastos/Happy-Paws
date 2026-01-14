import "../../styles/Buttons/ButtonsP.css"

function ButtonsP_User({ nome }) {
    return (
        <button className="Navbar Login">
            <p>{nome ? nome : "USUARIO"}</p>
        </button>
    );
}

export default ButtonsP_User