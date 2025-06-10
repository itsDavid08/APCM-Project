import { Link, useLocation } from "react-router-dom";
import { iconoSOS } from "../assets/icons";

const Config = ({ onOpenDrawer, onShowModal }) => {
    const location = useLocation();

    return (
        <div className="sidebar">
            <div className="navbar-container">
                <div className="menu-section">
                    <nav className="custom-menu">
                        <ul className="menu-list">
                            {/* Aquí puedes agregar tus elementos de menú si los necesitas */}
                        </ul>
                    </nav>
                </div>

                <div className="buttons-section">
                    <button className="sos-button" onClick={onShowModal}>
                        <img
                            src={iconoSOS}
                            alt="Ícono SOS"
                            className="button-sos-icon"
                        />
                        <span>SOS</span>
                    </button>

                    <button className="pedido-button" onClick={onOpenDrawer}>
                        Lista de Pedidos
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Config;