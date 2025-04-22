const QueroChamar = ({ onSend }) => {
    return (
        <div className="page-container">
            <h1>Quero chamar ...</h1>
            <button onClick={onSend}>Enviar</button>
        </div>
    );
};

export default QueroChamar;
