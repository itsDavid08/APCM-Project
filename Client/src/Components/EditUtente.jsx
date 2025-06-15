import { useContext, useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Context } from "../ContextProvider";

const EditUtente = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const { utentes, setUtentes, editUtente } = useContext(Context);
    const [utente, setUtente] = useState(null);
    const [formData, setFormData] = useState({ nome: '', quarto: '' });

    useEffect(() => {
        const foundUtente = utentes.find(u => u.id === parseInt(id));
        if (foundUtente) {
            setUtente(foundUtente);
            setFormData({
                nome: foundUtente.nome,
                quarto: foundUtente.quarto || ''
            });
        } else {
            navigate('/');
        }
    }, [id, utentes, navigate]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await editUtente({ ...utente, ...formData });
            navigate('/staff');
        } catch (error) {
            console.error("Error updating utente:", error);
        }
    };

    if (!utente) return <div>Loading...</div>;

    return (
        <div className="edit-container">
            <h1>Editar Utente</h1>
            <form onSubmit={handleSubmit}>
                <input
                    type="hidden"
                    value={utente.id}
                    readOnly
                />
                <label>
                    Nome:
                    <input
                        type="text"
                        value={formData.nome}
                        onChange={e => setFormData({ ...formData, nome: e.target.value })}
                        required
                    />
                </label>
                <label>
                    Quarto:
                    <input
                        type="text"
                        value={formData.quarto || ''}
                        onChange={e => setFormData({ ...formData, quarto: e.target.value })}
                    />
                </label>
                <button type="submit">Atualizar Utente</button>
                <button type="button" onClick={() => navigate('/staff')}>Cancelar</button>
            </form>
        </div>
    );
};

export default EditUtente;