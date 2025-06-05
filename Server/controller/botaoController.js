const { Botao, Utente } = require('../models');

// Definir os métodos como propriedades do objeto botaoController
const botaoController = {
    // Obter todos os botões
    getAllBotoes: async (req, res) => {
        try {
            const botoes = await Botao.findAll();
            res.json(botoes);
        } catch (error) {
            res.status(500).json({ erro: 'Erro ao obter os botões' });
        }
    },

    // Procurar botões por ID de utente
    getBotoesByUtenteId: async (req, res) => {
        const utenteId = req.params.utenteId;
        try {
            const botoes = await Botao.findAll({
                where: { utenteId }
            });
            res.json(botoes);
        } catch (error) {
            res.status(500).json({ erro: 'Erro ao procurar os botões do utente' });
        }
    },

    // Criar um novo botão
    createBotao: async (req, res) => {
        try {

            const botao = await Botao.create(req.body);
            res.status(201).json(botao);
        } catch (error) {
            res.status(500).json({ erro: 'Erro ao criar o botão' });
        }
    },

    // Atualizar um botão
    updateBotao: async (req, res) => {
        const botaoId = req.params.id;
        try {
            const [updated] = await Botao.update(req.body, {
                where: { id: botaoId }
            });
            if (updated) {
                const botaoAtualizado = await Botao.findByPk(botaoId);
                res.json(botaoAtualizado);
            } else {
                res.status(404).json({ erro: 'Botão não encontrado' });
            }
        } catch (error) {
            res.status(500).json({ erro: 'Erro ao atualizar o botão' });
        }
    },

    // Eliminar um botão
    deleteBotao: async (req, res) => {
        const botaoId = req.params.id;
        console.log("Eliminando botão com ID:", botaoId);
        try {
            const deleted = await Botao.destroy({
                where: { id: botaoId }
            });
            if (deleted) {
                res.json({ mensagem: 'Botão eliminado com sucesso' });
            } else {
                res.status(404).json({ erro: 'Botão não encontrado' });
            }
        } catch (error) {
            res.status(500).json({ erro: 'Erro ao eliminar o botão' });
        }
    }
};

module.exports = botaoController;