import { useNavigate } from "react-router-dom";

function Home() {
    const navigate = useNavigate();

    return (
        <div className="home-screen">
            <h1>Selecione o modo de utilização</h1>
            <div className="mode-buttons">
                <button
                    className="mode-button utente-button"
                    onClick={() => navigate("/utente")}
                >
                    <span className="button-icon">👤</span>
                    <span className="button-text">Utente</span>
                </button>
                <button
                    className="mode-button staff-button"
                    onClick={() => navigate("/staff")}
                >
                    <span className="button-icon">🧑‍⚕️</span>
                    <span className="button-text">Staff</span>
                </button>
            </div>
        </div>
    );
}

export default Home;