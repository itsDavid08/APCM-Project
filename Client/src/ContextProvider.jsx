// ContextProvider.jsx
import { createContext, useState, useEffect, useRef } from "react";
import { io } from "socket.io-client";

export const Context = createContext(); // Exportación nombrada
const apiUrl = `${window.location.protocol}//${window.location.hostname}:3000/`;

export const ContextProvider = ({ children }) => {
    const [utenteId, setUtenteId] = useState(null);
    const [utente, setUtente] = useState(null);
    const [utentes, setUtentes] = useState([]);
    const [botoes, setBotoes] = useState([]);
    const [pedidosUtilizador, setPedidosUtilizador] = useState([]);
    const [pedidosPendentes, setPedidosPendentes] = useState([]);

    const utenteIdRef = useRef(utenteId);


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

    const fetchPedidosUtilizador = async (id) => {
        try {
            const response = await fetch(`${apiUrl}pedidos/utente/${id}`);
            const data = await response.json();
            setPedidosUtilizador(data);
        } catch (error) {
            console.error("Error fetching pedidos:", error);
        }
    }

    const fetchUtente = async (id) => {
        try {
            console.log("entrou no fetchUtente com id:", id);
            const response = await fetch(`${apiUrl}utentes/${id}`);
            if (!response.ok) {

                throw new Error("Utente not found");
            }
            const data = await response.json();
            setUtente(data);
        } catch (error) {
            console.error("Error fetching utente:", error);
        }
    }
    /**
     * Fetches pending requests for all patiens, thos requests are ordered by urgency.
     *
     * @returns {Promise<void>}
     */
    const fetchPedidosPendentesByEmergencia = async () => {
        try {
            const response = await fetch(apiUrl + "pedidos/ativos/emergencia");
            if (!response.ok) {
                throw new Error("Failed to fetch pending requests");
            }
            const data = await response.json();
            setPedidosPendentes(data);
        } catch (error) {
            console.error("Error fetching pending requests:", error);
        }
    }

    const postPedido = async (pedido) => {
        try {
            const response = await fetch(apiUrl + "pedidos", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(pedido),
            });
            if (!response.ok) {
                throw new Error("Failed to create pedido");
            }
        } catch (error) {
            console.error("Error creating pedido:", error);
        }
    }

    const updatePedido = async (pedido, novoEstado) => {
        try {
            console.log(`${apiUrl}pedidos/${pedido.id}`);
            const response = await fetch(`${apiUrl}pedidos/${pedido.id}`, {
                method: "PUT",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ ...pedido, estado: novoEstado }),
            });
            if (!response.ok) throw new Error("Erro ao atualizar pedido");
        } catch (error) {
            console.error(error);
        }
    };

    const deleteUtente = async (id) => {
        try {
            const response = await fetch(`${apiUrl}utentes/${id}`, {
                method: "DELETE",
            });
            if (!response.ok) {
                throw new Error("Failed to delete utente");
            }
        } catch (error) {
            console.error("Error deleting utente:", error);
        }
    }




    useEffect(() => {

        fetchUtentes();
        fetchBotoes();
        fetchPedidosPendentesByEmergencia();

    }, []);

    useEffect(() => {
        if (utenteId) {
            utenteIdRef.current = utenteId;
            fetchUtente(utenteId);
            if (utente) {
                fetchPedidosUtilizador(utenteId);
            }
        }
    }, [utenteId]);

    // Integração com socket.io
    useEffect(() => {
        const socket = io(apiUrl);

        socket.on('bd_alterado', () => {

            fetchUtentes();
            fetchBotoes();
            fetchPedidosPendentesByEmergencia();

            if (utenteIdRef.current) {
                fetchUtente(utenteIdRef.current);
                fetchPedidosUtilizador(utenteIdRef.current);
            }
        });

        return () => {
            socket.disconnect();
        };
    }, []);

    return (
        <Context.Provider
            value={{
                utenteId,
                setUtenteId,
                utente,
                setUtente,
                utentes,
                setUtentes,
                botoes,
                setBotoes,
                pedidosUtilizador,
                setPedidosUtilizador,
                pedidosPendentes,
                setPedidosPendentes,
                deleteUtente,
                postPedido,
                fetchUtente,
                fetchPedidosUtilizador,
                updatePedido,
                fetchPedidosPendentesByEmergencia,
            }}
        >
            {children}
        </Context.Provider>
    );
};

