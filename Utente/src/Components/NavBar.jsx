import { Menu } from "antd";
import { Link } from "react-router-dom";

const menuItems = [
    {
        key: "sinto",
        link: "/sinto-me",
        text: "Sinto-me ...",
    },
    {
        key: "precisoAjuda",
        link: "/preciso-ajuda",
        text: "Preciso de ajuda com ...",
    },
    {
        key: "queroChamar",
        link: "/chamar",
        text: "Quero chamar ...",
    },
    {
        key: "mensagem",
        link: "/management",
        text: "Escrever Mensagem",
    },

];

const listOfItems = menuItems?.map((item) => {
    return { ...item, label: <Link to={item.link}>{item.text}</Link> };
});

const NavBar = () => {
    return (
        <Menu
            mode="inline"
            className="menu-bar"
            items={listOfItems}
        />
    );
};

export default NavBar;
