import { useState } from "react";
import { useNavigate } from "react-router-dom";

const NewUtente = () => {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({ nome: '' });

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch('http://localhost:3000/utentes/create', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            if (response.ok) {
                navigate('/');
            }
        } catch (error) {
            console.error("Error creating utente:", error);
        }
    };

    return (
        <div className="new-container">
            <h1>Novo Utente</h1>
            <form onSubmit={handleSubmit}>
                <label>
                    Nome:
                    <input
                        type="text"
                        value={formData.nome}
                        onChange={(e) => setFormData({...formData, nome: e.target.value})}
                        required
                    />
                </label>
                <button type="submit">Crear</button>
                <button type="button" onClick={() => navigate('/')}>Cancelar</button>
            </form>
        </div>
    );
};

export default NewUtente;