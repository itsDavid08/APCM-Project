import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ContextProvider } from "./ContextProvider";
import Config from "./Components/Config";
import Home from "./Pages/Home";
import MainContent from "./Pages/MainContent";

import EditUtente from "./Components/EditUtente.jsx";
import NewUtente from "./Components/NewUtente.jsx";

function App() {

    return (
        <Router>
            <ContextProvider>

                <div className="main-content-area">
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/main" element={<MainContent />} />
                        <Route path="/edit-utente/:id" element={<EditUtente />} />
                        <Route path="/new-utente" element={<NewUtente />} />
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