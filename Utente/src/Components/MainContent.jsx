import { Routes, Route } from "react-router-dom";
import SintoMe from "../Pages/SintoMe";
import PrecisoAjuda from "../Pages/PrecisoAjuda";
import QueroChamar from "../Pages/QueroChamar";
import EscreverMensagem from "../Pages/EscreverMensagem";
import { Layout } from "antd";

const { Content } = Layout;

const MainContent = ({ onShowModal }) => {
    return (
        <Content className="main-content">
            <Routes>
                <Route path="/sinto-me" element={<SintoMe onSend={onShowModal} />} />
                <Route path="/preciso-ajuda" element={<PrecisoAjuda onSend={onShowModal} />} />
                <Route path="/chamar" element={<QueroChamar onSend={onShowModal} />} />
                <Route path="/management" element={<EscreverMensagem />} />
                <Route path="*" element={<div>Escolha uma opção do menu</div>} />
            </Routes>
        </Content>
    );
};

export default MainContent;
