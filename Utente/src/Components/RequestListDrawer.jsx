import { useEffect, useState } from "react";
import { useContext } from "react";
import { Context } from "../ContextProvider";

const RequestListDrawer = ({ visible, onClose }) => {
    const [isOpen, setIsOpen] = useState(false);
    const { pedidosUtilizador } = useContext(Context);
    const { botoes } = useContext(Context);

    useEffect(() => {
        setIsOpen(visible);
        console.log("Pedidos do utilizador:", pedidosUtilizador);
    }, [visible]);

    const handleClose = () => {
        setIsOpen(false);
        onClose();
    };

    return (
        <>
            <div className={`custom-drawer ${isOpen ? "open" : ""}`}>
                <div className="drawer-content">
                    <div className="drawer-header">
                        <h3>Lista de Pedidos</h3>
                        <button className="close-button" onClick={handleClose}>
                            ×
                        </button>
                    </div>
                    <div className="request-list">
                        {pedidosUtilizador.map((item) => (
                            <div key={item.id} className="request-item">
                                <img
                                    src={item.botao.imagem || "imagesBotoes/default.png"}
                                    alt={item.botao.nome}
                                    className="request-icon"
                                />
                                <span className="request-text">
                                    {item.botao.mensagem}
                                </span>
                                <div className="request-actions">
                                    <button className="action-button done">
                                        ✔️
                                    </button>
                                    <button className="action-button cancel">
                                        ❌
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            {isOpen && <div className="drawer-overlay" onClick={handleClose} />}
        </>
    );
};

export default RequestListDrawer;