import { useParams, useNavigate } from "react-router-dom";
import { useContext, useEffect, useState, useRef } from "react";
import { Context } from "../ContextProvider";
import RequestListDrawer from "../Components/RequestListDrawer.jsx";
import SuccessModal from "../Components/SuccessModal.jsx";

const MainContent = () => {
    const { id } = useParams();
    const { utente, setUtente, botoes, postPedido, utenteId, setUtenteId, apiUrl } = useContext(Context);
    const audioRef = useRef(null);

    const botoesSintoMe = botoes.filter(b => b.categoria === "Sinto-me");
    const botoesMedicamentos = botoes.filter(b => b.categoria === "Medicamentos");
    const botoesNecessidades = botoes.filter(b => b.categoria === "Necessidades");
    const botoesTecnologias = botoes.filter(b => b.categoria === "Tecnologias");
    const botoesChamar = botoes.filter(b => b.categoria === "Chamar");
    const SOS_BUTTON = botoes.find(b => b.nome === "SOS");

    const [isDrawerVisible, setDrawerVisible] = useState(false);
    const [isModalVisible, setModalVisible] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        if (!utente || utente.id !== id) setUtenteId(id);
    }, [id]);

    useEffect(() => {
        if (!audioRef.current) {
            audioRef.current = new Audio("/Warning-alarm-tone.mp3");
            audioRef.current.loop = true;
        }
        const existeEmergencia = utente?.pedidos?.some(p => p.emergencia);
        if (existeEmergencia) {
            audioRef.current.play().catch(() => {});
        } else {
            audioRef.current.pause();
            audioRef.current.currentTime = 0;
        }
        return () => {
            if (audioRef.current) {
                audioRef.current.pause();
                audioRef.current.currentTime = 0;
            }
        };
    });

    const handleButtonClick = (button) => {
        showModal();
        setTimeout(() => hideModal(), 1000);
        const novoPedido = {
            emergencia: button.nome === "SOS",
            utenteId: utente.id,
            botaoId: button.id,
        };
        postPedido(novoPedido);
    };

    const showDrawer = () => setDrawerVisible(true);
    const hideDrawer = () => setDrawerVisible(false);
    const showModal = () => setModalVisible(true);
    const hideModal = () => setModalVisible(false);

    // fixedHeight controla se a seção terá altura fixa ou não
    const renderSection = (title, buttons, bgColor, borderColor, fixedHeight = false) => (
        <div className="card mb-3 h-100" style={{ backgroundColor: bgColor, borderColor: borderColor, borderWidth: "2px" }}>
            <div className="card-header text-center fw-bold" style={{ borderColor }}>{title}</div>
            <div
                className="card-body p-2 d-flex flex-row flex-wrap gap-2 justify-content-center align-items-stretch"
                style={{ height: "auto" }}
            >
                {buttons.map((button) => (
                    <button
                        key={button.id}
                        className="btn btn-light d-flex flex-column align-items-center justify-content-center border border-secondary rounded"
                        onClick={() => handleButtonClick(button)}
                        aria-label={button.nome}
                        style={{ minWidth: 100, minHeight: 100, maxHeight: 120, flex: "1 1 0" }}
                    >
                        <img src={apiUrl + button.imagem} alt={button.nome} style={{ maxWidth: "60px", maxHeight: "60px" }} />
                        <span className="fw-bold mt-2 text-center">{button.nome}</span>
                    </button>
                ))}
            </div>
        </div>
    );

    return (
        <div className="container-fluid p-2">
            <div className="d-flex justify-content-between align-items-center mb-2">
                <button className="btn btn-outline-dark" onClick={showDrawer}>☰</button>
                <div className="flex-grow-1 mx-2">
                    {renderSection("Sinto-me", botoesSintoMe, "#FFF9C4", "#FFD700")}
                </div>
                <button className="btn btn-outline-dark" onClick={() => navigate('/utente')}>🛠</button>
            </div>

            <div className="d-flex gap-2 align-items-stretch">
                <div
                    className="d-flex flex-column h-100"
                    style={{ flexGrow: botoesMedicamentos.length, minWidth: 0 }}
                >
                    {renderSection("Medicamentos", botoesMedicamentos, "#F3E5F5", "#D8BFD8", false)}
                </div>
                <div
                    className="d-flex flex-column h-100"
                    style={{ flexGrow: botoesNecessidades.length, minWidth: 0 }}
                >
                    {renderSection("Necessidades", botoesNecessidades, "#EFEBE9", "#D7CCC8", false)}
                </div>
                <div
                    className="d-flex flex-column h-100"
                    style={{ flexGrow: botoesTecnologias.length, minWidth: 0 }}
                >
                    {renderSection("Tecnologias", botoesTecnologias, "#E1F5FE", "#B3E5FC", false)}
                </div>
            </div>

            <div className="d-flex justify-content-between align-items-center mt-1">
                <button
                    className="btn btn-danger fw-bold"
                    style={{ width: "100px", height: "100px", fontSize: "20px" }}
                    onClick={() => handleButtonClick(SOS_BUTTON)}
                >
                    SOS
                </button>

                <div className="flex-grow-1 mx-2">
                    {renderSection("Quero chamar...", botoesChamar, "#FFE0B2", "#FFCC80")}
                </div>

                <button
                    className="btn btn-danger fw-bold"
                    style={{ width: "100px", height: "100px", fontSize: "20px" }}
                    onClick={() => handleButtonClick(SOS_BUTTON)}
                >
                    SOS
                </button>
            </div>

            <SuccessModal visible={isModalVisible} onClose={hideModal} />
            <RequestListDrawer visible={isDrawerVisible} onClose={hideDrawer} utente={utente} />
        </div>
    );
};

export default MainContent;