// ContextProvider.jsx
import { createContext, useState, useEffect } from "react";

export const Context = createContext(); // Exportación nombrada
const apiUrl = "http://localhost:3000/";

export const ContextProvider = ({ children }) => {
    const [utente, setUtente] = useState(null);
    const [utentes, setUtentes] = useState([]);
    const [botoes, setBotoes] = useState([]);
    const [pedidosUtilizador, setPedidosUtilizador] = useState([]);

    useEffect(() => {
        const fetchUtentes = async () => {
            try {
                const response = await fetch(apiUrl + "utentes");
                const data = await response.json();
                setUtentes(data);
            } catch (error) {
                console.error("Error fetching utentes:", error);
            }
        };

        fetchUtentes();
    }, []);

    useEffect(() => {
        const fetchBotoes = async () => {
            if (utente) {
                try {
                    const response = await fetch(`${apiUrl}botoes?utenteId=${utente.id}`);
                    const data = await response.json();
                    setBotoes(data);
                } catch (error) {
                    console.error("Error fetching botoes:", error);
                }
            }
        };

        fetchBotoes();
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
            }}
        >
            {children}
        </Context.Provider>
    );
};

