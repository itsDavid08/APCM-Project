import { useContext } from "react";
import { Context } from "../ContextProvider";

const MainContent = () => {
    const { utente } = useContext(Context);

    // Datos mockeados para los botones
    const sections = [
        {
            title: "Sinto-me",
            borderColor: "#FFD700", // Amarillo
            buttons: [
                { id: 1, text: "Engasgado", image: "./images/engasgado.png" },
                { id: 2, text: "Com fome", image: "./images/fome.png" },
                { id: 3, text: "Com frio", image: "./images/frio.png" },
                { id: 4, text: "Com calor", image: "./images/calor.png" },
                { id: 5, text: "Cansado", image: "./images/cansado.png" },
            ]
        },
        {
            title: "Medicamentos",
            borderColor: "#D8BFD8", // Lila claro
            buttons: [
                { id: 6, text: "Paracetamol", image: "./images/paracetamol.png" },
                { id: 7, text: "Ibuprofeno", image: "./images/ibuprofeno.png" },
                { id: 8, text: "Aspirina", image: "./images/aspirina.png" },
            ]
        },
        {
            title: "Necessidades",
            borderColor: "#F5F5DC", // Beige claro
            buttons: [
                { id: 9, text: "Água", image: "./images/agua.png" },
                { id: 10, text: "Comida", image: "./images/comida.png" },
                { id: 11, text: "Banheiro", image: "./images/banheiro.png" },
                { id: 12, text: "Roupa", image: "./images/roupa.png" },
            ]
        },
        {
            title: "Tecnologias",
            borderColor: "#ADD8E6", // Azul claro
            buttons: [
                { id: 13, text: "TV", image: "./images/tv.png" },
                { id: 14, text: "Música", image: "./images/musica.png" },
                { id: 15, text: "Tablet", image: "./images/tablet.png" },
            ]
        },
        {
            title: "Quero chamar...",
            borderColor: "#FFA07A", // Naranja
            buttons: [
                { id: 16, text: "Médico", image: "./images/medico.png" },
                { id: 17, text: "Enfermeiro", image: "./images/enfermeiro.png" },
                { id: 18, text: "Família", image: "./images/familia.png" },
            ]
        }
    ];

    return (
        <div className="aac-container">
            {/* Encabezado con botones de menú y ajustes */}
            <div className="aac-header">
                <button className="menu-button">
                    <span className="hamburger-icon">☰</span>
                    <span className="notification-bubble">4</span>
                </button>

                {utente && (
                    <div className="utente-info">
                        <h2>{utente.nome}</h2>
                        <p>ID: {utente.id}</p>
                    </div>
                )}

                <button className="settings-button">
                    <img src="./images/settings.png" alt="Ajustes" />
                </button>
            </div>

            {/* Secciones de botones */}
            <div className="aac-sections">
                {sections.map((section, index) => (
                    <div
                        key={index}
                        className="aac-section"
                        style={{ borderColor: section.borderColor }}
                    >
                        <h3>{section.title}</h3>
                        <div className="aac-buttons">
                            {section.buttons.map((button) => (
                                <button
                                    key={button.id}
                                    className="aac-button"
                                >
                                    <img src={button.image} alt={button.text} />
                                    <span>{button.text}</span>
                                </button>
                            ))}
                        </div>
                    </div>
                ))}
            </div>

            {/* Botones SOS */}
            <div className="sos-buttons">
                <button className="sos-button">SOS</button>
                <button className="sos-button">SOS</button>
            </div>
        </div>
    );
};

export default MainContent;