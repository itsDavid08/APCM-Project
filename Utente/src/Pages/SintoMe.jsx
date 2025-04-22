const SintoMe = ({ onSend }) => {
    return (
        <div className="page-container">
            <h1>Sinto-me ...</h1>
            <button onClick={onSend}>Enviar</button>
        </div>
    );
};

export default SintoMe;
