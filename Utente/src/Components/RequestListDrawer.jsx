import { useEffect, useState } from "react";
import { useContext } from "react";
import { Context } from "../ContextProvider";

const RequestListDrawer = ({ visible, onClose }) => {
    const [isOpen, setIsOpen] = useState(false);
    const { pedidosUtilizador } = useContext(Context);

    useEffect(() => {
        setIsOpen(visible);
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
                                    src={item.icon || "imagesBotoes/default.png"}
                                    alt="Ícone do pedido"
                                    className="request-icon"
                                />
                                <span className="request-text">
                                    {item.texto}
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