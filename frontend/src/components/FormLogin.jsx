import ButtonsH1V2 from "./ButtonsH1"

import "../styles/Forms.css";
import "../styles/Input.css";

function FormLogin() {
    return (
        <>
            <div className="CampForms Right">
                <div>
                    <h1>Você está fazendo login<br />da sua petshop.</h1>
                </div>
                <label>
                    Email *
                    <input
                        id="email"
                        type="email"
                        label="email"
                        placeholder="seu@gmail.com"
                        required
                    />
                </label>
                <label>
                    Senha *
                    <input
                        id="password"
                        type="password"
                        label="password"
                        placeholder="••••••••"
                        required
                    />
                </label>
                <ButtonsH1V2 text="Fazer Login" w="W100" />
            </div>
        </>
    );
}

export default FormLogin