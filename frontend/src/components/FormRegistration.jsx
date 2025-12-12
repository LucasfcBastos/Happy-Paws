import ButtonsH1V2 from "./ButtonsH1"

import "../styles/Forms.css";
import "../styles/Input.css";

function FormRegistration() {
    return (
        <>
            <div className="CampForms Left">
                <div>
                    <h1>Você está fazendo registro<br />da sua petshop.</h1>
                </div>
                <label>
                    Nome e Sobrenome *
                    <input
                        id="nome"
                        type="text"
                        label="nome"
                        placeholder="Lucas Bastos"
                        required
                    />
                </label>
                <label>
                    Clínica *
                    <input
                        id="clinica"
                        type="text"
                        label="clinica"
                        placeholder="Clínica PetShop"
                        required
                    />
                </label>
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
                <label>
                    Confirmar Senha *
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

export default FormRegistration