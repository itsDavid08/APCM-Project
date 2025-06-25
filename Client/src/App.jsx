import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ContextProvider } from "./ContextProvider";

import UtenteHome from "./Pages/UtenteHome.jsx";
import MainContent from "./Pages/MainContent";
import StaffHome from "./Pages/StaffHome.jsx";
import PedidosPendentes from "./Pages/PedidosPendentes.jsx";

import EditUtente from "./Components/EditUtente.jsx";
import NewUtente from "./Components/NewUtente.jsx";

import GerirBotoes from "./Components/GerirBotoes.jsx";
import Home from "./Pages/Home.jsx";

function App() {

    return (
        <Router>
            <ContextProvider>

                <div className="main-content-area">
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/utente" element={<UtenteHome />} />
                        <Route path="/main/:id" element={<MainContent />} />
                        <Route path="/edit-utente/:id" element={<EditUtente />} />
                        <Route path="/new-utente" element={<NewUtente />} />
                        <Route path="/staff" element={<StaffHome />} />
                        <Route path="/staff/pedidos" element={<PedidosPendentes />} />
                        <Route path="/gerirBotoes" element={<GerirBotoes />} />
                    </Routes>
                </div>


            </ContextProvider>
        </Router>
    );
}

export default App;

/*

<RequestListDrawer visible={isDrawerVisible} onClose={hideDrawer} />
<SuccessModal visible={isModalVisible} onClose={hideModal} />

*/