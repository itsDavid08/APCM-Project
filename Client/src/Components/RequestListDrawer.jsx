import { useEffect, useState } from "react";
import { useContext } from "react";
import { Context } from "../ContextProvider";

const RequestListDrawer = ({ visible, onClose }) => {
    const [isOpen, setIsOpen] = useState(false);
    const { pedidosUtilizador } = useContext(Context);
    const { updatePedido } = useContext(Context);

    useEffect(() => {
        setIsOpen(visible);
    }, [visible]);

    const handleClose = () => {
        setIsOpen(false);
        onClose();
    };

    const handleCancel = (pedido) => {
        updatePedido(pedido, "cancelado");
    };
    const handleDone = (pedido) => {
        updatePedido(pedido, "concluido");
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
                                    <button className="action-button done" onClick={() => handleDone(item)}>
                                        ✔️
                                    </button>
                                    <button className="action-button cancel" onClick={() => handleCancel(item)}>
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