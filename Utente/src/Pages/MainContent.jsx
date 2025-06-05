import {useContext, useState, useEffect} from "react";
import { Context } from "../ContextProvider";
import { useNavigate } from "react-router-dom";
import RequestListDrawer from "../Components/RequestListDrawer.jsx";
import SuccessModal from "../Components/SuccessModal.jsx";


const MainContent = () => {
    const { utente } = useContext(Context);
    const { botoes } = useContext(Context);
    const {postPedido} = useContext(Context);

    const botoesSintoMe = botoes.filter(b => b.categoria === "Sinto-me");
    const botoesMedicamentos = botoes.filter(b => b.categoria === "Medicamentos");
    const botoesNecessidades = botoes.filter(b => b.categoria === "Necessidades");
    const botoesTecnologias = botoes.filter(b => b.categoria === "Tecnologias");
    const botoesChamar = botoes.filter(b => b.categoria === "Chamar");


    const [isDrawerVisible, setDrawerVisible] = useState(false);
    const [isModalVisible, setModalVisible] = useState(false);

    const showDrawer = () => setDrawerVisible(true);
    const hideDrawer = () => setDrawerVisible(false);
    const showModal = () => setModalVisible(true);
    const hideModal = () => setModalVisible(false);

    const SOS_BUTTON = botoes.find(b => b.nome === "SOS");

    useEffect(() => {
    })

    const navigate = useNavigate();

    // Datos organizados según los requisitos
    const sections = [
        {
            title: "Sinto-me",
            borderColor: "#FFD700", // Amarillo
            backgroundColor: "#FFF9C4", // Amarillo claro
            gridClass: "single-row",
            buttons: botoesSintoMe,
        },
        {
            title: "Medicamentos",
            borderColor: "#D8BFD8", // Lila claro
            backgroundColor: "#F3E5F5", // Lila más claro
            gridClass: "grid-2x2",
            buttons: botoesMedicamentos,
        },
        {
            title: "Necessidades",
            borderColor: "#D7CCC8", // Beige
            backgroundColor: "#EFEBE9", // Beige claro
            gridClass: "grid-4x2",
            buttons: botoesNecessidades,
        },
        {
            title: "Tecnologias",
            borderColor: "#B3E5FC", // Azul claro
            backgroundColor: "#E1F5FE", // Azul más claro
            gridClass: "grid-6x2",
            buttons: botoesTecnologias,
        },
        {
            title: "Quero chamar...",
            borderColor: "#FFCC80", // Naranja
            backgroundColor: "#FFE0B2", // Naranja claro
            gridClass: "grid-3x2",
            buttons: botoesChamar,
        }
    ];

    const handleButtonClick = (button) => {
        // Mostrar el modal
        showModal();

        // Ocultar el modal después de 3 segundos (3000 milisegundos)
        setTimeout(() => {
            hideModal();
        }, 1000);

        console.log(`Botón "${button.nome}" presionado`);

        var novoPedido = {
            emergencia: button.nome ==="SOS",
            utenteId: utente.id,
            botaoId: button.id
        };
        console.log("Novo pedido:");
        console.log(novoPedido);
        postPedido(novoPedido);

    };

    return (
        <>
        <div className="aac-container">
            <div className="first-line-section">
                <button
                    className="menu-button option-button"
                    onClick={showDrawer}
                >
                    <span className="hamburger-icon">☰</span>
                </button>


                {/* Línea 1 - Sinto-me */}
                <div
                    className="aac-section first-line fill-line"
                    style={{
                        borderColor: sections[0].borderColor,
                        backgroundColor: sections[0].backgroundColor
                    }}
                >
                    <h3>{sections[0].title}</h3>
                    <div className={`aac-buttons ${sections[0].gridClass}`}>
                        {sections[0].buttons.map((button) => (
                            <button
                                key={button.id}
                                className="aac-button"
                                onClick={() => handleButtonClick(button)}
                                aria-label={button.nome}
                            >
                                <img src={button.imagem} alt={button.nome} />
                                <span>{button.nome}</span>
                            </button>
                        ))}
                    </div>
                </div>

                <button
                    className="settings-button option-button"
                    onClick={() => navigate('/')}
                    aria-label="Menú principal"
                >
                    <span>🛠</span>
                </button>
            </div>

            {/* Contenido principal */}



                {/* Línea 2 - Tres secciones */}
                <div className="second-line-section">
                    {/* Medicamentos */}
                    <div
                        className="aac-section"
                        style={{
                            borderColor: sections[1].borderColor,
                            backgroundColor: sections[1].backgroundColor
                        }}
                    >
                        <h3>{sections[1].title}</h3>
                        <div className={`aac-buttons ${sections[1].gridClass}`}>
                            {sections[1].buttons.map((button) => (
                                <button
                                    key={button.id}
                                    className="aac-button"
                                    onClick={() => handleButtonClick(button)}
                                    aria-label={button.text}
                                >
                                    <img src={button.imagem} alt={button.nome} />
                                    <span>{button.nome}</span>
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* Necessidades */}
                    <div
                        className="aac-section"
                        style={{
                            borderColor: sections[2].borderColor,
                            backgroundColor: sections[2].backgroundColor
                        }}
                    >
                        <h3>{sections[2].title}</h3>
                        <div className={`aac-buttons ${sections[2].gridClass}`}>
                            {sections[2].buttons.map((button) => (
                                <button
                                    key={button.id}
                                    className="aac-button"
                                    onClick={() => handleButtonClick(button)}
                                    aria-label={button.nome}
                                >
                                    <img src={button.imagem} alt={button.nome} />
                                    <span>{button.nome}</span>
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* Tecnologias */}
                    <div
                        className="aac-section"
                        style={{
                            borderColor: sections[3].borderColor,
                            backgroundColor: sections[3].backgroundColor
                        }}
                    >
                        <h3>{sections[3].title}</h3>
                        <div className={`aac-buttons ${sections[3].gridClass}`}>
                            {sections[3].buttons.map((button) => (
                                <button
                                    key={button.id}
                                    className="aac-button"
                                    onClick={() => handleButtonClick(button)}
                                    aria-label={button.nome}
                                >
                                    <img src={button.imagem} alt={button.nome} />
                                    <span>{button.nome}</span>
                                </button>
                            ))}
                        </div>
                    </div>
                </div>

            <div className="last-line-section" style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
            <button
                className="sos-button"
                onClick={() => handleButtonClick(SOS_BUTTON)}
                aria-label="Botón de emergencia"
            >
                SOS
            </button>

                {/* Línea 3 - Quero chamar... */}
                <div
                    className="aac-section last-line fill-line"
                    style={{
                        borderColor: sections[4].borderColor,
                        backgroundColor: sections[4].backgroundColor
                    }}
                >


                    <h3>{sections[4].title}</h3>
                    <div className={`aac-buttons ${sections[4].gridClass}`}>
                        {sections[4].buttons.map((button) => (
                            <button
                                key={button.id}
                                className="aac-button"
                                onClick={() => handleButtonClick(button)}
                                aria-label={button.nome}
                            >
                                <img src={button.imagem} alt={button.nome} />
                                <span>{button.nome}</span>
                            </button>
                        ))}
                    </div>

                </div>
            <button
                className="sos-button"
                onClick={() => handleButtonClick(SOS_BUTTON)}
                aria-label="Botón de emergencia"
            >
                SOS
            </button>
            </div>
        </div>

            <SuccessModal visible={isModalVisible} onClose={hideModal} />
            <RequestListDrawer visible={isDrawerVisible} onClose={hideDrawer} />
    </>

    );
};

export default MainContent;