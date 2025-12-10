import Footer from "../components/Footer";
import "../styles/home.css"

function Home() {
    return (
        <>
            <div className="centralize">
                <span>
                    O MELHOR SOFTWARE DE GESTÃO VETERINÁRIO PARA O SEU <a className="textColor">PETSHOPS</a>
                </span>

                <h1 className="textSecondary">
                    A plataforma completa para gestão veterinária. Gerencie sua empresa, equipe e pacientes em um único sistema.
                </h1>
            </div>

            <Footer />
        </>
    );
}

export default Home;
