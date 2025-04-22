import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Layout } from "antd";

import NavBar from "./Components/NavBar";
import MainContent from "./Components/MainContent";
import RequestListDrawer from "./Components/RequestListDrawer";
import SuccessModal from "./Components/SuccessModal";

const { Sider } = Layout;

function App() {
    const [isDrawerVisible, setDrawerVisible] = useState(false);
    const [isModalVisible, setModalVisible] = useState(false);

    const showDrawer = () => setDrawerVisible(true);
    const hideDrawer = () => setDrawerVisible(false);
    const showModal = () => setModalVisible(true);
    const hideModal = () => setModalVisible(false);

    return (
        <Router>
            <Layout className="app-layout">
                <Sider className="sidebar">
                    <NavBar onOpenDrawer={showDrawer} onShowModal={showModal} />
                </Sider>

                <MainContent onShowModal={showModal} />

                <RequestListDrawer visible={isDrawerVisible} onClose={hideDrawer} />
                <SuccessModal visible={isModalVisible} onClose={hideModal} />
            </Layout>
        </Router>
    );
}

export default App;
