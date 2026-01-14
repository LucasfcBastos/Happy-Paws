import Navbar from "../../components/Bar/NavbarHome";
import Sidebar from "../../components/Bar/Sidebar";

function HomePage() {
    return (
        <>
            <Navbar />
            <Sidebar select="Home" />
        </>
    );
}

export default HomePage