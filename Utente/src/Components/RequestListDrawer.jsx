import { Drawer, List, Button } from "antd";

const mockPedidos = [
    { id: 1, text: "Quero chamar a um auxiliar" },
    { id: 2, text: "Preciso ajuda com BiPAP" },
    { id: 3, text: "Sinto-me doente" },
    { id: 4, text: "Preciso ajuda com fechar/abrir a porta" }
];

const RequestListDrawer = ({ visible, onClose }) => {
    return (
        <Drawer
            title="Lista de Pedidos"
            placement="right"
            onClose={onClose}
            open={visible}
        >
            <List
                dataSource={mockPedidos}
                renderItem={item => (
                    <List.Item
                        actions={[
                            <Button type="text" key="done">✔️</Button>,
                            <Button type="text" danger key="cancel">❌</Button>
                        ]}
                    >
                        {item.text}
                    </List.Item>
                )}
            />
        </Drawer>
    );
};

export default RequestListDrawer;
