const { Utente } = require("../models");

// Corrigir a sintaxe dos métodos do objeto: usar propriedades, não atribuições
const utenteController = {
    // Obter todos os utentes
    getUtentes: async (req, res) => {
        try {
            const utentes = await Utente.findAll();
            res.json(utentes);
        } catch (erro) {
            res.status(500).json({ mensagem: erro.message });
        }
    },

    // Obter um utente por ID
    getUtenteById: async (req, res) => {
        try {
            const utente = await Utente.findByPk(req.params.id);
            if (!utente)
                return res
                    .status(404)
                    .json({ mensagem: "Utente não encontrado" });
            res.json(utente);
        } catch (erro) {
            res.status(500).json({ mensagem: erro.message });
        }
    },

    // Criar um novo utente
    createUtente: async (req, res) => {
        try {
            console.log(req.body);
            const novoUtente = await Utente.create(req.body);
            res.status(201).json(novoUtente);
        } catch (erro) {
            res.status(400).json({ mensagem: erro.message });
        }
    },

    // Atualizar um utente
    updateUtente: async (req, res) => {
        try {
            const [updated] = await Utente.update(req.body, {
                where: { id: req.params.id },
            });
            if (updated) {
                const utenteAtualizado = await Utente.findByPk(req.params.id);
                res.json(utenteAtualizado);
            } else {
                res.status(404).json({ mensagem: "Utente não encontrado" });
            }
        } catch (erro) {
            res.status(400).json({ mensagem: erro.message });
        }
    },

    // Eliminar um utente
    deleteUtente: async (req, res) => {
        try {
            const deleted = await Utente.destroy({
                where: { id: req.params.id },
            });
            if (deleted) {
                res.json({ mensagem: "Utente eliminado" });
            } else {
                res.status(404).json({ mensagem: "Utente não encontrado" });
            }
        } catch (erro) {
            res.status(500).json({ mensagem: erro.message });
        }
    },
    // Asociar botão a utente
    associarBotao: async (req, res) => {
        try {
            const utente = await Utente.findByPk(req.params.utenteId);
            const botao = await Botao.findByPk(req.params.botaoId);
            if (!utente || !botao)
                return res
                    .status(404)
                    .json({ mensagem: "Utente ou Botão não encontrado" });
            await utente.addBotoes(botao);
            res.json({ mensagem: "Botão associado ao utente com sucesso" });
        } catch (erro) {
            res.status(500).json({ mensagem: erro.message });
        }
    },

    // Desasociar botão de utente
    desassociarBotao: async (req, res) => {
        try {
            const utente = await Utente.findByPk(req.params.utenteId);
            const botao = await Botao.findByPk(req.params.botaoId);
            if (!utente || !botao)
                return res
                    .status(404)
                    .json({ mensagem: "Utente ou Botão não encontrado" });
            await utente.removeBotoes(botao);
            res.json({ mensagem: "Botão desassociado do utente com sucesso" });
        } catch (erro) {
            res.status(500).json({ mensagem: erro.message });
        }
    },
};

module.exports = utenteController;
