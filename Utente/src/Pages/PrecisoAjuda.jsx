const PrecisoAjuda = ({ onSend }) => {
    return (
        <div className="page-container">
            <h1>Preciso de ajuda com ...</h1>
            <button onClick={onSend}>Enviar</button>
        </div>
    );
};

export default PrecisoAjuda;
