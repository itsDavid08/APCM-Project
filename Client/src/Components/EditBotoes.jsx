import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Context } from "../ContextProvider";


const EditBotoes = () => {
    const navigate = useNavigate();
    const { botoes, editBotao, deleteBotao, postBotao, apiUrl } = useContext(Context);
    const [selectedBotao, setSelectedBotao] = useState(null);
    const [mode, setMode] = useState("list"); // 'list', 'edit', 'new'
    const [formData, setFormData] = useState({
        nome: '',
        mensagem: '',
        categoria: '',
        imagem: ''
    });
    const [imagensDisponiveis, setImagensDisponiveis] = useState([]);
    const [categoriasDisponiveis, setCategoriasDisponiveis] = useState([
        "Sinto-me",
        "Medicamentos",
        "Necessidades",
        "Tecnologias",
        "Chamar"
    ]);

    useEffect(() => {
        fetch(apiUrl + "/imagesBotoes")
            .then(res => res.json())
            .then(data => setImagensDisponiveis(data))
            .catch(err => {
                setImagensDisponiveis([]);
                console.error("Erro ao buscar imagens:", err);
            });
    }, []);

    const handleSelectBotao = (botao) => {
        setSelectedBotao(botao);
    };

    const handleEdit = () => {
        if (selectedBotao) {
            setFormData({
                nome: selectedBotao.nome,
                mensagem: selectedBotao.mensagem,
                categoria: selectedBotao.categoria,
                imagem: selectedBotao.imagem
            });
            setMode("edit");
        }
    };

    const handleNew = () => {
        setFormData({
            nome: '',
            mensagem: '',
            categoria: '',
            imagem: ''
        });
        setMode("new");
    };

    const handleDelete = async () => {
        if (selectedBotao) {
            if (window.confirm(`Tens certeza de eliminar o botão ${selectedBotao.nome}?`)) {
                await deleteBotao(selectedBotao.id);
                setSelectedBotao(null);
            }
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            if (mode === "edit") {
                await editBotao({ ...selectedBotao, ...formData });
            } else if (mode === "new") {
                await postBotao(formData);
            }
            setMode("list");
            setSelectedBotao(null);
        } catch (error) {
            console.error("Error saving botão:", error);
        }
    };

    const handleImageSelect = (img) => {
        setFormData({ ...formData, imagem: img });
    };

    const handleCancel = () => {
        setMode("list");
        setSelectedBotao(null);
    };

    if (mode === "edit" || mode === "new") {
        return (
            <div className="edit-container" style={{
                fontFamily: 'Arial, sans-serif',
                background: '#e0f7fa',
                padding: '20px',
                maxWidth: '800px',
                margin: '0 auto'
            }}>
                <h1 style={{ color: '#00796b' }}>{mode === "edit" ? "Editar Botão" : "Novo Botão"}</h1>

                <form onSubmit={handleSubmit} style={{
                    background: '#fff',
                    padding: '20px',
                    borderRadius: '10px',
                    marginTop: '20px'
                }}>
                    {mode === "edit" && <input type="hidden" value={selectedBotao.id} readOnly />}

                    <div style={{ marginBottom: '15px' }}>
                        <label style={{ display: 'block', marginBottom: '5px', fontWeight: 'bold' }}>
                            Nome:
                        </label>
                        <input
                            type="text"
                            value={formData.nome}
                            onChange={e => setFormData({ ...formData, nome: e.target.value })}
                            required
                            style={{
                                width: '100%',
                                padding: '8px',
                                borderRadius: '5px',
                                border: '1px solid #ddd'
                            }}
                        />
                    </div>

                    <div style={{ marginBottom: '15px' }}>
                        <label style={{ display: 'block', marginBottom: '5px', fontWeight: 'bold' }}>
                            Mensagem:
                        </label>
                        <input
                            type="text"
                            value={formData.mensagem}
                            onChange={e => setFormData({ ...formData, mensagem: e.target.value })}
                            required
                            style={{
                                width: '100%',
                                padding: '8px',
                                borderRadius: '5px',
                                border: '1px solid #ddd'
                            }}
                        />
                    </div>

                    <div style={{ marginBottom: '15px' }}>
                        <label style={{ display: 'block', marginBottom: '5px', fontWeight: 'bold' }}>
                            Categoria:
                        </label>
                        <input
                            type="text"
                            list="categorias-lista"
                            value={formData.categoria}
                            onChange={e => setFormData({ ...formData, categoria: e.target.value })}
                            required
                            style={{
                                width: '100%',
                                padding: '8px',
                                borderRadius: '5px',
                                border: '1px solid #ddd'
                            }}
                        />
                        <datalist id="categorias-lista">
                            {categoriasDisponiveis.map((cat, index) => (
                                <option key={index} value={cat} />
                            ))}
                        </datalist>
                    </div>

                    <div style={{ marginBottom: '15px' }}>
                        <label style={{ display: 'block', marginBottom: '5px', fontWeight: 'bold' }}>
                            Imagem:
                        </label>
                        <input
                            type="hidden"
                            value={formData.imagem}
                            required
                        />
                        <div style={{
                            display: 'grid',
                            gridTemplateColumns: 'repeat(auto-fill, minmax(80px, 1fr))',
                            gap: '10px',
                            marginTop: '10px'
                        }}>
                            {imagensDisponiveis.map((img, index) => (
                                <img
                                    key={index}
                                    src={apiUrl + img}
                                    alt={`Opção ${index}`}
                                    className="img-opcao"
                                    style={{
                                        width: '80px',
                                        height: '80px',
                                        margin: '5px',
                                        border: formData.imagem === img ? '2px solid #04D9D9' : '2px solid transparent',
                                        cursor: 'pointer',
                                        borderRadius: '8px',
                                        objectFit: 'cover'
                                    }}
                                    onClick={() => handleImageSelect(img)}
                                />
                            ))}
                        </div>
                    </div>

                    <div style={{ marginTop: '20px' }}>
                        <button
                            type="submit"
                            style={{
                                padding: '10px 15px',
                                backgroundColor: '#00796b',
                                color: 'white',
                                border: 'none',
                                borderRadius: '5px',
                                cursor: 'pointer',
                                marginRight: '10px'
                            }}
                        >
                            {mode === "edit" ? "Atualizar Botão" : "Criar Botão"}
                        </button>
                        <button
                            type="button"
                            onClick={handleCancel}
                            style={{
                                padding: '10px 15px',
                                backgroundColor: '#f44336',
                                color: 'white',
                                border: 'none',
                                borderRadius: '5px',
                                cursor: 'pointer'
                            }}
                        >
                            Cancelar
                        </button>
                    </div>
                </form>

                <div style={{ marginTop: '30px', background: '#fff', padding: '20px', borderRadius: '10px' }}>
                    <h2 style={{ color: '#00796b' }}>Pré-visualização</h2>
                    <div style={{
                        border: '1px solid #ddd',
                        borderRadius: '8px',
                        padding: '15px',
                        textAlign: 'center',
                        maxWidth: '200px',
                        margin: '0 auto'
                    }}>
                        <img
                            src={apiUrl+(formData.imagem || imagensDisponiveis[0] || "imagesBotoes/default.png")}
                            alt={formData.nome}
                            style={{
                                width: '100%',
                                height: '120px',
                                objectFit: 'cover',
                                borderRadius: '5px',
                                marginBottom: '10px'
                            }}
                        />
                        <h3 style={{ margin: '10px 0', color: '#00796b' }}>{formData.nome || "Nome do Botão"}</h3>
                        <p style={{ fontSize: '0.9em', color: '#555' }}>{formData.mensagem || "Mensagem do botão"}</p>
                        <span style={{ fontSize: '0.8em', color: '#888', display: 'block', marginTop: '5px' }}>
                            Categoria: {formData.categoria || 'N/A'}
                        </span>
                    </div>
                </div>
            </div>
        );
    }

    return (
        <div className="home-container staff">
            <h1>Selecione o Botão</h1>
            <div className="utentes-grid">
                {botoes.map((botao) => (
                    <div
                        key={botao.id}
                        className={`utente-card ${selectedBotao?.id === botao.id ? 'selected' : ''}`}
                        onClick={() => handleSelectBotao(botao)}
                    >
                        <div className={`initials-circle ${selectedBotao?.id === botao.id ? 'selected' : ''}`}>
                            <img
                                src={apiUrl + (botao.imagem || imagensDisponiveis[0] || "imagesBotoes/default.png")}
                                alt={botao.nome}
                                style={{ width: '60px', height: '60px', objectFit: 'cover' }}
                            />
                        </div>
                        <h3>{botao.nome}</h3>
                    </div>
                ))}
            </div>

            <div className="action-sidebar">
                <button
                    className={`sidebar-button ${!selectedBotao ? 'disabled' : ''}`}
                    onClick={handleEdit}
                    disabled={!selectedBotao}
                >
                    Editar
                </button>
                <button
                    className={`sidebar-button ${!selectedBotao ? 'disabled' : ''}`}
                    onClick={handleDelete}
                    disabled={!selectedBotao}
                >
                    Apagar
                </button>
                <button
                    className="sidebar-button"
                    onClick={handleNew}
                >
                    Novo
                </button>
                <button
                    className="sidebar-button"
                    onClick={() => navigate('/staff')}
                    style={{marginTop: "auto", marginBottom: "30px"}}
                >
                    Voltar Atrás
                </button>
            </div>
        </div>
    );
};

export default EditBotoes;