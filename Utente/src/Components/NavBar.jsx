import { Link, useLocation } from "react-router-dom";
import {
    iconoSintoMe,
    iconoPrecisoAjuda,
    iconoQueroChamar,
    iconoMensagem,
    iconoSOS,
} from "../assets/icons";

const menuItems = [
    {
        key: "sinto",
        link: "/sinto-me",
        text: "Sinto-me...",
        icon: iconoSintoMe,
    },
    {
        key: "precisoAjuda",
        link: "/preciso-ajuda",
        text: "Preciso de ajuda com...",
        icon: iconoPrecisoAjuda,
    },
    {
        key: "queroChamar",
        link: "/chamar",
        text: "Quero chamar...",
        icon: iconoQueroChamar,
    },
    {
        key: "mensagem",
        link: "/management",
        text: "Escrever Mensagem",
        icon: iconoMensagem,
    },
];

const NavBar = ({ onOpenDrawer, onShowModal }) => {
    const location = useLocation();

    return (
        <div className="navbar-container">
            <div className="buttons-section">
                <button className="sos-button" onClick={onShowModal}>
                    <img
                        src={iconoSOS}
                        alt="Ícono SOS"
                        className="button-sos-icon"
                    />
                </button>
            </div>

            <div className="menu-section">
                <nav className="custom-menu">
                    <ul className="menu-list">
                        {menuItems.map((item) => (
                            <li 
                                key={item.key}
                                className={`menu-item ${location.pathname === item.link ? 'selected' : ''}`}
                            >
                                <Link to={item.link} className="menu-link">
                                    <div className="menu-item-content">
                                        <span className="menu-text">{item.text}</span>
                                        <img
                                            src={item.icon}
                                            alt={`Ícono ${item.text}`}
                                            className="menu-icon"
                                        />
                                    </div>
                                </Link>
                            </li>
                        ))}
                    </ul>
                </nav>
            </div>

            <div className="buttons-section">
                <button className="pedido-button" onClick={onOpenDrawer}>
                    Lista de Pedidos
                </button>
            </div>
        </div>
    );
};

export default NavBar;