import {useContext, useState, useEffect} from "react";
import { Context } from "../ContextProvider";
import { useNavigate } from "react-router-dom";
import RequestListDrawer from "../Components/RequestListDrawer.jsx";
import SuccessModal from "../Components/SuccessModal.jsx";


const MainContent = () => {
    const { utente } = useContext(Context);
    const { botoes } = useContext(Context);
    const {postPedido} = useContext(Context);

    const [isDrawerVisible, setDrawerVisible] = useState(false);
    const [isModalVisible, setModalVisible] = useState(false);

    const showDrawer = () => setDrawerVisible(true);
    const hideDrawer = () => setDrawerVisible(false);
    const showModal = () => setModalVisible(true);
    const hideModal = () => setModalVisible(false);

    const SOS_BUTTON = {
        id: 1,
        nome: "SOS",
        imagem: ""
    };

    useEffect(() => {
        console.log("Utente:", utente);
        console.log("Botoes:", botoes);
    })

    const navigate = useNavigate();

    // Datos organizados según los requisitos
    const sections = [
        {
            title: "Sinto-me",
            borderColor: "#FFD700", // Amarillo
            backgroundColor: "#FFF9C4", // Amarillo claro
            gridClass: "single-row",
            buttons: [
                { id: 1, text: "Engasgado", image: "imagesBotoes/sinto/engasgado.png" },
                { id: 2, text: "Estonteado", image: "imagesBotoes/sinto/estonteado.png" },
                { id: 3, text: "Com falta de ar", image: "imagesBotoes/sinto/com_falta_de_ar.png" },
                { id: 4, text: "Com dores", image: "imagesBotoes/sinto/com_dor.png" },
                { id: 5, text: "Doente", image: "imagesBotoes/sinto/doente.png" },
                { id: 6, text: "Com fome", image: "imagesBotoes/sinto/com_fome.png" },
                { id: 7, text: "Com sede", image: "imagesBotoes/sinto/com_sede.png" },
                { id: 8, text: "Zangado", image: "imagesBotoes/sinto/zangado.png" },
                { id: 9, text: "Com frio", image: "imagesBotoes/sinto/com_frio.png" },
                { id: 10, text: "Com calor", image: "imagesBotoes/sinto/com_calor.png" },
            ]
        },
        {
            title: "Medicamentos",
            borderColor: "#D8BFD8", // Lila claro
            backgroundColor: "#F3E5F5", // Lila más claro
            gridClass: "grid-2x2",
            buttons: [
                { id: 11, text: "BiPAP", image: "imagesBotoes/medicamentos/BiPAP.png" },
                { id: 12, text: "Algália", image: "imagesBotoes/medicamentos/algalia.png" },
                { id: 13, text: "Medicamentos", image: "imagesBotoes/medicamentos/medicacao.png" },
                { id: 14, text: "Pensos", image: "imagesBotoes/medicamentos/penso.png" },
            ]
        },
        {
            title: "Necessidades",
            borderColor: "#D7CCC8", // Beige
            backgroundColor: "#EFEBE9", // Beige claro
            gridClass: "grid-4x2",
            buttons: [
                { id: 15, text: "Higiene", image: "imagesBotoes/necesidades/higiene.png" },
                { id: 16, text: "Água", image: "imagesBotoes/necesidades/agua.png" },
                { id: 17, text: "Roupa", image: "imagesBotoes/necesidades/roupa.png" },
                { id: 18, text: "Fazer Cocó", image: "imagesBotoes/necesidades/coco.png" },
                { id: 19, text: "Fechar/Abrir a porta", image: "imagesBotoes/necesidades/abrir_fechar_a_porta.png" },
                { id: 20, text: "Mudar de posição", image: "imagesBotoes/necesidades/mudar_de_posicao.png" },
                { id: 21, text: "Cobrir-me", image: "imagesBotoes/necesidades/cobrir-me.png" },
                { id: 22, text: "Fazer Xixi", image: "imagesBotoes/necesidades/urina.png" },
            ]
        },
        {
            title: "Tecnologias",
            borderColor: "#B3E5FC", // Azul claro
            backgroundColor: "#E1F5FE", // Azul más claro
            gridClass: "grid-6x2",
            buttons: [
                { id: 23, text: "Cadeira de Rodas", image: "imagesBotoes/tecnologia/cadeira_de_rodas.png" },
                { id: 24, text: "Quha Zono", image: "imagesBotoes/tecnologia/quha_zono.jpg" },
                { id: 25, text: "Chamada", image: "imagesBotoes/tecnologia/fazer_uma_chamada.png" },
                { id: 26, text: "PC", image: "imagesBotoes/tecnologia/computador.png" },
                { id: 27, text: "Carregar PC", image: "imagesBotoes/tecnologia/carregar_o_computador.png" },
                { id: 28, text: "Ligar a Luz", image: "imagesBotoes/tecnologia/ligar_desligar_a_luz_do_quarto.png" },
                { id: 29, text: "Óculos", image: "imagesBotoes/tecnologia/oculos.png" },
                { id: 30, text: "Switch", image: "imagesBotoes/tecnologia/switch.png" },
                { id: 31, text: "TV", image: "imagesBotoes/tecnologia/TV.png" },
                { id: 32, text: "Telemóvel", image: "imagesBotoes/tecnologia/telemovel.png" },
                { id: 33, text: "Carregar Telemóvel", image: "imagesBotoes/tecnologia/carregar_o_telemovel.png" },
                { id: 34, text: "Auriculares", image: "imagesBotoes/tecnologia/fones.png" },
            ]
        },
        {
            title: "Quero chamar...",
            borderColor: "#FFCC80", // Naranja
            backgroundColor: "#FFE0B2", // Naranja claro
            gridClass: "grid-3x2",
            buttons: [
                { id: 35, text: "Auxiliar", image: "imagesBotoes/chamar/Auxiliar.png" },
                { id: 36, text: "Enfermeiro", image: "imagesBotoes/chamar/Enfermeiro.png" },
                { id: 37, text: "Fisioterapeuta", image: "imagesBotoes/chamar/Fisioterapeuta.png" },
                { id: 38, text: "Psicólogo", image: "imagesBotoes/chamar/Psicologa.png" },
                { id: 39, text: "Técnico da Educação", image: "imagesBotoes/chamar/Tecnica_de_Educacao.png" },
                { id: 40, text: "Terapeuta da fala", image: "imagesBotoes/chamar/Terapeuta_da_Fala.png" },
            ]
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
                                onClick={() => handleButtonClick(button.text)}
                                aria-label={button.text}
                            >
                                <img src={button.image} alt={button.text} />
                                <span>{button.text}</span>
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
                                    onClick={() => handleButtonClick(button.text)}
                                    aria-label={button.text}
                                >
                                    <img src={button.image} alt={button.text} />
                                    <span>{button.text}</span>
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
                                    onClick={() => handleButtonClick(button.text)}
                                    aria-label={button.text}
                                >
                                    <img src={button.image} alt={button.text} />
                                    <span>{button.text}</span>
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
                                    onClick={() => handleButtonClick(button.text)}
                                    aria-label={button.text}
                                >
                                    <img src={button.image} alt={button.text} />
                                    <span>{button.text}</span>
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
                                onClick={() => handleButtonClick(button.text)}
                                aria-label={button.text}
                            >
                                <img src={button.image} alt={button.text} />
                                <span>{button.text}</span>
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

            <div>
                {botoes.map((button) => (
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

            <SuccessModal visible={isModalVisible} onClose={hideModal} />
            <RequestListDrawer visible={isDrawerVisible} onClose={hideDrawer} />
    </>

    );
};

export default MainContent;