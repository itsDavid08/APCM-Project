import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Context } from "../ContextProvider";

const UtenteHome = () => {
    const { utentes, setUtente, deleteUtente } = useContext(Context);
    const navigate = useNavigate();
    const [selectedUtente, setSelectedUtente] = useState(null);

    const handleSelectUtente = (utente) => {
    };

    const handleOpen = (utente) => {
        setUtente(utente);
        navigate("/main/" + utente.id);
    };
    const handleVoltar = () => {
        navigate("/");
    }


    return (
        <div className="home-container">
            <h1>Selecione o Utente</h1>
            <div className="utentes-grid">
                {utentes.map((utente) => (
                    <div
                        key={utente.id}
                        className={`utente-card ${selectedUtente?.id === utente.id ? 'selected' : ''}`}
                        onClick={() => handleOpen(utente)}
                    >
                        <div className={`initials-circle ${selectedUtente?.id === utente.id ? 'selected' : ''}`}>
                            {utente.nome.split(' ').map(name => name[0]).join('')}
                        </div>
                        <h3>{utente.nome}</h3>
                    </div>
                ))}
            </div>

            <div className="action-sidebar">

                <button
                    className= "sidebar-button"
                    onClick={handleVoltar}
                    style={{marginTop: "auto", marginBottom: "30px"}}
                >
                    Voltar Atrás
                </button>

            </div>
        </div>
    );
};

export default UtenteHome;