import { useState } from "react";

const EscreverMensagem = () => {
    const [mensagem, setMensagem] = useState("");

    const handleEnviar = () => {
        alert(`Mensagem enviada: ${mensagem}`);
    };

    return (
        <div className="page-container">
            <h1>Escrever Mensagem</h1>
            <textarea
                value={mensagem}
                onChange={(e) => setMensagem(e.target.value)}
                placeholder="Digite sua mensagem aqui..."
                rows={5}
                style={{ width: "100%" }}
            />
            <button onClick={handleEnviar}>Enviar</button>
        </div>
    );
};

export default EscreverMensagem;
