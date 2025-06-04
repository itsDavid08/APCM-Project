const express = require('express');
const fs = require('fs');
const path = require('path');
const router = express.Router();

// Função recursiva para buscar imagens em subpastas
function listarImagensRecursivo(dir, baseUrl = '/imagesBotoes') {
    let imagens = [];
    const arquivos = fs.readdirSync(dir, { withFileTypes: true });
    arquivos.forEach(arquivo => {
        const caminhoCompleto = path.join(dir, arquivo.name);
        const url = path.join(baseUrl, arquivo.name).replace(/\\/g, '/');
        if (arquivo.isDirectory()) {
            imagens = imagens.concat(listarImagensRecursivo(caminhoCompleto, url));
        } else if (/\.(png|jpg|jpeg|gif)$/i.test(arquivo.name)) {
            imagens.push(url);
        }
    });
    return imagens;
}

router.get('/imagesBotoes', (req, res) => {
    const dir = path.join(__dirname, '..', 'public', 'imagesBotoes');
    try {
        const imagens = listarImagensRecursivo(dir);
        res.json(imagens);
    } catch (err) {
        res.status(500).json({ error: 'Erro ao ler imagens' });
    }
});

module.exports = router;