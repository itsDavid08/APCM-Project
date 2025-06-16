import { useParams, useNavigate } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import { Context } from "../ContextProvider";
import RequestListDrawer from "../Components/RequestListDrawer.jsx";
import SuccessModal from "../Components/SuccessModal.jsx";

const MainContentBootstrap = () => {
    const { id } = useParams();
    const { utente, setUtente, botoes, postPedido, utenteId, setUtenteId } = useContext(Context);

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

    const renderSection = (title, buttons, bgColor, borderColor, colClass) => (
        <div className="card mb-3" style={{ backgroundColor: bgColor, borderColor: borderColor, borderWidth: "2px" }}>
            <div className="card-header text-center fw-bold" style={{ borderColor }}>{title}</div>
            <div className={`card-body p-2`}>
                <div className="row g-2">
                    {buttons.map((button) => (
                        <div key={button.id} className={colClass}>
                            <button
                                className="btn btn-light w-100 h-100 d-flex flex-column align-items-center justify-content-center border border-secondary rounded"
                                onClick={() => handleButtonClick(button)}
                                aria-label={button.nome}
                            >
                                <img src={button.imagem} alt={button.nome} style={{ maxWidth: "60px", maxHeight: "60px" }} />
                                <span className="fw-bold mt-2 text-center">{button.nome}</span>
                            </button>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );

    return (
        <div className="container-fluid p-2">
            <div className="d-flex justify-content-between align-items-center mb-2">
                <button className="btn btn-outline-dark" onClick={showDrawer}>☰</button>
                <div className="flex-grow-1 mx-2">
                    {renderSection("Sinto-me", botoesSintoMe, "#FFF9C4", "#FFD700", "col-6 col-md-2")}
                </div>
                <button className="btn btn-outline-dark" onClick={() => navigate('/utente')}>🛠</button>
            </div>

            <div className="row g-2">
                <div className="col-12 col-lg-4">
                    {renderSection("Medicamentos", botoesMedicamentos, "#F3E5F5", "#D8BFD8", "col-6")}
                </div>
                <div className="col-12 col-lg-4">
                    {renderSection("Necessidades", botoesNecessidades, "#EFEBE9", "#D7CCC8", "col-4")}
                </div>
                <div className="col-12 col-lg-4">
                    {renderSection("Tecnologias", botoesTecnologias, "#E1F5FE", "#B3E5FC", "col-3")}
                </div>
            </div>

            <div className="d-flex justify-content-between align-items-center mt-3">
                <button
                    className="btn btn-danger fw-bold"
                    style={{ width: "100px", height: "100px", fontSize: "20px" }}
                    onClick={() => handleButtonClick(SOS_BUTTON)}
                >
                    SOS
                </button>

                <div className="flex-grow-1 mx-2">
                    {renderSection("Quero chamar...", botoesChamar, "#FFE0B2", "#FFCC80", "col-4 col-md-2")}
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

export default MainContentBootstrap;