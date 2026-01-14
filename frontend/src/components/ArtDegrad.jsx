import logotype from "../assets/img/LogotypeDark.png";
import imgVeterinary from "../assets/img/Veterinary.png";

import "../styles/Forms/Gradient.css";
import "../styles/Logotype.css";

function ArtDegrad({ type }) {
    return (
        <>
            <div className={`Degrad ${type}`}>
                <div className="logotype">
                    <img src={logotype} />
                    <h1>HAPPY PAWS</h1>
                </div>
                <div>
                    <h1>Gestão<br/>
                    Eficiência<br/>
                    Resultados<br/>
                    Crescimento</h1>
                </div>
                <div className="img">
                    <img src={imgVeterinary} />
                </div>
            </div>
        </>
    );
}

export default ArtDegrad