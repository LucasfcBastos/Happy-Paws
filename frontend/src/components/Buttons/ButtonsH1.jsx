import "../../styles/Buttons/ButtonsH1.css";

function ButtonsH1({ text, w }) {
    return (
        <button className={`btn ${w}`}>
            <h1>{text}</h1>
        </button>
    );
}

export default ButtonsH1;