
let io = null;

function setIO(ioInstance) {
    io = ioInstance;
}

function notificarAlteracaoBD() {
    if (io) {
        io.emit('bd_alterado');
    }
}

module.exports = { setIO, notificarAlteracaoBD };