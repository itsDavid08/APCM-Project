import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Layout, theme, Button } from "antd";

import NavBar from "./Components/NavBar.jsx";
import Sider from "antd/es/layout/Sider.js";

const { Header, Content, Footer } = Layout;

function App() {
    return (
        <Router>
            <Layout style={{ minHeight: "100vh" }}>
                <Sider>
                    <NavBar />  
                </Sider>

                <Routes>
                    <Route path="/" element={<div>Home</div>} />
                    <Route path="/about" element={<div>About</div>} />
                    <Route path="/contact" element={<div>Contact</div>} />
                    <Route path="/products" element={<div>Products</div>} />
                </Routes>
            </Layout>
        </Router>
    );
}

export default App;
