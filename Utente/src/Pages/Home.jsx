import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Context } from "../ContextProvider";

const Home = () => {
    const { utentes, setUtente, deleteUtente } = useContext(Context);
    const navigate = useNavigate();
    const [selectedUtente, setSelectedUtente] = useState(null);

    const handleSelectUtente = (utente) => {
        setSelectedUtente(utente);
    };

    const handleOpen = () => {
        if (selectedUtente) {
            setUtente(selectedUtente);
            navigate("/main");
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
            if (window.confirm(`¿Estás seguro de eliminar a ${selectedUtente.nome}? Esta acción no se puede deshacer.`)) {
                const success = await deleteUtente(selectedUtente.id);
                if (success) {
                    setSelectedUtente(null);
                    // Mostrar mensaje de éxito
                    alert(`${selectedUtente.nome} ha sido eliminado correctamente`);
                } else {
                    alert(`Error al eliminar a ${selectedUtente.nome}`);
                }
            }
        }
    };

    const handleNew = () => {
        navigate("/new-utente");
    };

    return (
        <div className="home-container">
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
                    onClick={handleOpen}
                    disabled={!selectedUtente}
                >
                    Abrir
                </button>
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
            </div>
        </div>
    );
};

export default Home;