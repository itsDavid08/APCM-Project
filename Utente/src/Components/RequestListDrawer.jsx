import { useEffect, useState } from "react";
import sintoMeIcons from "../assets/Sinto-me-Icons.js";
import precisoAjudaIcons from "../assets/Preciso-Ajuda-icons.js";
import queroChamarIcons from "../assets/Quero-chamar-icons.js";

const mockPedidos = [
    { id: 1, text: "Quero chamar a um auxiliar", icon: queroChamarIcons.Auxiliar },
    { id: 2, text: "Preciso ajuda com BiPAP", icon: precisoAjudaIcons.BiPAP },
    { id: 3, text: "Sinto-me doente", icon: sintoMeIcons.doente },
    {
        id: 4,
        text: "Preciso ajuda com fechar/abrir a porta",
        icon: precisoAjudaIcons.abrirFecharAPorta,
    },
];

const RequestListDrawer = ({ visible, onClose }) => {
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        setIsOpen(visible);
    }, [visible]);

    const handleClose = () => {
        setIsOpen(false);
        onClose();
    };

    return (
        <div className={`custom-drawer ${isOpen ? "open" : ""}`}>
            <div className="custom-drawer-wrapper">
                <div className="drawer-overlay" onClick={handleClose} />
                <div className="drawer-content">
                    <div className="drawer-header">
                        <h3>Lista de Pedidos</h3>
                        <button className="close-button" onClick={handleClose}>
                            ×
                        </button>
                    </div>
                    <div className="request-list">
                        {mockPedidos.map((item) => (
                            <div key={item.id} className="request-item">
                                <img
                                    src={item.icon}
                                    alt="Ícone do pedido"
                                    className="request-icon"
                                />

                                <span className="request-text">
                                    {item.text}
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
        </div>
    );
};

export default RequestListDrawer;
