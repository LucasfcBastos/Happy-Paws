import NavbarLandingPage from "../../components/NavbarLandingPage";
import ButtonImage from "../../components/Buttons/ButtonImage";
import Footer from "../../components/Footer";

import "../../styles/Pages/LandingPage.css"

function LandingPage() {
    return (
        <>
            <NavbarLandingPage />

            <div className="start">
                <div className="centralize">
                    <span>
                        O MELHOR SOFTWARE DE GESTÃO VETERINÁRIO PARA O SEU <a className="textColor">PETSHOPS</a>
                    </span>

                    <h1 className="third_quartile">
                        A plataforma completa para gestão veterinária. Gerencie sua empresa, equipe e pacientes em um único sistema.
                    </h1>

                    <ButtonImage />
                </div>
            </div>
            
            <Footer />
        </>
    );
}

export default LandingPage;
