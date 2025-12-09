import { useTheme } from "../hooks/useTheme";

function Home() {
    const { theme } = useTheme();

    return (
        <div>
            <h1>Dashboard</h1>
            <p>Tema atual: {theme}</p>
        </div>
    );
}

export default Home