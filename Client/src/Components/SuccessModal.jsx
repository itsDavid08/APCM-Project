import { Modal } from "antd";

const SuccessModal = ({ visible, onClose }) => {
    return (
        <Modal
            open={visible}
            onCancel={onClose}
            footer={null}
            centered
        >
            <div style={{ textAlign: "center" }}>
                <h2>✅ Pedido enviado com Sucesso</h2>
            </div>
        </Modal>
    );
};

export default SuccessModal;
