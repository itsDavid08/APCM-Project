import { Menu } from "antd";
import { Link, useLocation } from "react-router-dom";

const menuItems = [
    { key: "sinto", link: "/sinto-me", text: "Sinto-me..." },
    { key: "precisoAjuda", link: "/preciso-ajuda", text: "Preciso de ajuda com..." },
    { key: "queroChamar", link: "/chamar", text: "Quero chamar..." },
    { key: "mensagem", link: "/management", text: "Escrever Mensagem" }
];

const NavBar = ({ onOpenDrawer, onShowModal }) => {
    const location = useLocation();

    return (
        <div className="navbar-container">
            <div className="buttons-section">
                <button 
                    className="sos-button"
                    onClick={onShowModal}
                >
                    SOS
                </button>
            </div>

            <div className="menu-section">
                <Menu
                    mode="vertical"
                    selectedKeys={[location.pathname]}
                    className="custom-menu"
                    style={{ borderInlineEnd: "none" }}
                    items={menuItems.map((item) => ({
                        ...item,
                        key: item.link,
                        label: (
                            <Link to={item.link} className="menu-link">
                                {item.text}
                            </Link>
                        ),
                    }))}
                />
            </div>

            <div className="buttons-section">
                <button 
                    className="pedido-button" 
                    onClick={onOpenDrawer}
                >
                    Lista de Pedidos
                </button>
            </div>
        </div>
    );
};

export default NavBar;