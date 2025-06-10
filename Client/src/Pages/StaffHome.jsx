import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Context } from "../ContextProvider";

const UtenteHome = () => {
    const { utentes, setUtente, deleteUtente } = useContext(Context);
    const navigate = useNavigate();
    const [selectedUtente, setSelectedUtente] = useState(null);

    const handleSelectUtente = (utente) => {
        setSelectedUtente(utente);
    };

    const handleOpen = () => {
        if (selectedUtente) {
            setUtente(selectedUtente);
            navigate("/main/" + selectedUtente.id);
        }
    };

    const handleEdit = () => {
        if (selectedUtente) {
            // Navegar a una página de edición con el ID del utente
            navigate(`/edit-utente/${selectedUtente.id}`);
        }
    };

    const handleDelete = async () => {
        if (selectedUtente) {
            if (window.confirm(`Tens certeza de eliminar a ${selectedUtente.nome}?`)) {
                const success = await deleteUtente(selectedUtente.id);
                if (success) {
                    setSelectedUtente(null);
                    // Mostrar mensaje de éxito
                    alert(`${selectedUtente.nome} foi eliminado corretamente`);
                } else {
                    alert(`Erro ao eliminar a ${selectedUtente.nome}`);
                }
            }
        }
    };

    const handleNew = () => {
        navigate("/new-utente");
    };

    const handlePendingRequests = () => {
        navigate("/staff/pedidos");
    }

    const handleVoltar = () => {
        navigate("/");
    }

    return (
        <div className="home-container staff">
            <h1>Selecione o Utente</h1>
            <div className="utentes-grid">
                {utentes.map((utente) => (
                    <div
                        key={utente.id}
                        className={`utente-card ${selectedUtente?.id === utente.id ? 'selected' : ''}`}
                        onClick={() => handleSelectUtente(utente)}
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
                    className={`sidebar-button ${!selectedUtente ? 'disabled' : ''}`}
                    onClick={handleEdit}
                    disabled={!selectedUtente}
                >
                    Editar
                </button>
                <button
                    className={`sidebar-button ${!selectedUtente ? 'disabled' : ''}`}
                    onClick={handleDelete}
                    disabled={!selectedUtente}
                >
                    Apagar
                </button>
                <button className="sidebar-button" onClick={handleNew}>
                    Novo
                </button>
                <button
                    className="sidebar-button"
                    onClick={handlePendingRequests}
                    style={{marginTop: "auto"}}
                >
                    Pedidos Pendentes
                </button>

                <button
                    className= "sidebar-button"
                    onClick={handleVoltar}
                    style={{marginBottom: "30px"}}
                >
                    Voltar Atrás
                </button>
            </div>
        </div>
    );
};

export default UtenteHome;