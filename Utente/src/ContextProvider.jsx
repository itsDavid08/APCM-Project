// ContextProvider.jsx
import { createContext, useState, useEffect } from "react";

export const Context = createContext(); // Exportación nombrada
const apiUrl = `${window.location.protocol}//${window.location.hostname}:3000/`;

export const ContextProvider = ({ children }) => {
    const [utente, setUtente] = useState(null);
    const [utentes, setUtentes] = useState([]);
    const [botoes, setBotoes] = useState([]);
    const [pedidosUtilizador, setPedidosUtilizador] = useState([]);


    const fetchUtentes = async () => {
        try {
            const response = await fetch(apiUrl + "utentes");
            const data = await response.json();
            setUtentes(data);
        } catch (error) {
            console.error("Error fetching utentes:", error);
        }
    };


    const fetchBotoes = async () => {

        try {
            const response = await fetch(apiUrl + "botoes");
            const data = await response.json();
            setBotoes(data);
        } catch (error) {
            console.error("Error fetching botoes:", error);
        }

    };

    const fetchPedidosUtilizador = async (utenteId) => {
        try {
            const response = await fetch(`${apiUrl}pedidos/utente/${utenteId}`);
            const data = await response.json();
            setPedidosUtilizador(data);
        } catch (error) {
            console.error("Error fetching pedidos:", error);
        }
    }

    const postPedido = async (pedido) => {
        try {
            const response = await fetch(apiUrl + "pedidos/ativos/hora", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(pedido),
            });
            if (!response.ok) {
                throw new Error("Failed to create pedido");
            }
            const data = await response.json();
            setPedidosUtilizador((prev) => [...prev, data]);
        } catch (error) {
            console.error("Error creating pedido:", error);
        }
    }

    useEffect(() => {

        fetchUtentes();
        fetchBotoes();

    }, []);

    useEffect(() => {

        if (utente) {
            fetchPedidosUtilizador(utente.id);
        }

    }, [utente]);

    return (
        <Context.Provider
            value={{
                utente,
                setUtente,
                utentes,
                setUtentes,
                botoes,
                setBotoes,
                pedidosUtilizador,
                setPedidosUtilizador,
                postPedido,
            }}
        >
            {children}
        </Context.Provider>
    );
};

