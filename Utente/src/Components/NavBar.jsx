import { Menu, Button } from "antd";
import { Link, useLocation } from "react-router-dom";


const menuItems = [
    { key: "sinto", link: "/sinto-me", text: "Sinto-me ..." },
    { key: "precisoAjuda", link: "/preciso-ajuda", text: "Preciso de ajuda com ..." },
    { key: "queroChamar", link: "/chamar", text: "Quero chamar ..." },
    { key: "mensagem", link: "/management", text: "Escrever Mensagem" }
];

const NavBar = ({ onOpenDrawer, onShowModal }) => {
    const location = useLocation();

    return (
        <div className="navbar">
            <Button type="primary" danger className="sos-button" onClick={onShowModal}>SOS</Button>
            <Menu
                mode="inline"
                selectedKeys={[location.pathname]}
                items={menuItems.map(item => ({
                    ...item,
                    key: item.link,
                    label: <Link to={item.link}>{item.text}</Link>
                }))}
            />
            <Button className="pedido-button" onClick={onOpenDrawer}>Lista de Pedidos</Button>
        </div>
    );
};

export default NavBar;
