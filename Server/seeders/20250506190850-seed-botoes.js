'use strict';

module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.bulkInsert('Botoes', [
            { id: 1, nome: 'SOS', mensagem: 'Emergência', imagem: '/imagesBotoes/urgent.png', categoria: 'SOS', createdAt: new Date(), updatedAt: new Date() },
            { id: 2, nome: 'Engasgado', mensagem: 'Sinto-me engasgado', imagem: '/imagesBotoes/sinto/engasgado.png', categoria: 'Sinto-me', createdAt: new Date(), updatedAt: new Date() },
            { id: 3, nome: 'Estonteado', mensagem: 'Sinto-me estonteado', imagem: '/imagesBotoes/sinto/estonteado.png', categoria: 'Sinto-me', createdAt: new Date(), updatedAt: new Date() },
            { id: 4, nome: 'Com falta de ar', mensagem: 'Sinto-me com falta de ar', imagem: '/imagesBotoes/sinto/com_falta_de_ar.png', categoria: 'Sinto-me', createdAt: new Date(), updatedAt: new Date() },
            { id: 5, nome: 'Com dores', mensagem: 'Sinto-me com dores', imagem: '/imagesBotoes/sinto/com_dor.png', categoria: 'Sinto-me', createdAt: new Date(), updatedAt: new Date() },
            { id: 6, nome: 'Doente', mensagem: 'Sinto-me doente', imagem: '/imagesBotoes/sinto/doente.png', categoria: 'Sinto-me', createdAt: new Date(), updatedAt: new Date() },
            { id: 7, nome: 'Com fome', mensagem: 'Sinto-me com fome', imagem: '/imagesBotoes/sinto/com_fome.png', categoria: 'Sinto-me', createdAt: new Date(), updatedAt: new Date() },
            { id: 8, nome: 'Com sede', mensagem: 'Sinto-me com sede', imagem: '/imagesBotoes/sinto/com_sede.png', categoria: 'Sinto-me', createdAt: new Date(), updatedAt: new Date() },
            { id: 9, nome: 'Zangado', mensagem: 'Estou zangado', imagem: '/imagesBotoes/sinto/zangado.png', categoria: 'Sinto-me', createdAt: new Date(), updatedAt: new Date() },
            { id: 10, nome: 'Com frio', mensagem: 'Estou com frio', imagem: '/imagesBotoes/sinto/com_frio.png', categoria: 'Sinto-me', createdAt: new Date(), updatedAt: new Date() },
            { id: 11, nome: 'Com Calor', mensagem: 'Estou com calor', imagem: '/imagesBotoes/sinto/com_calor.png', categoria: 'Sinto-me', createdAt: new Date(), updatedAt: new Date() },
            { id: 12, nome: 'Medicação', mensagem: 'Preciso de medicação', imagem: '/imagesBotoes/medicamentos/medicacao.png', categoria: 'Necessidades', createdAt: new Date(), updatedAt: new Date() },
            { id: 13, nome: 'Água', mensagem: 'Preciso de ajuda com a água', imagem: '/imagesBotoes/necesidades/agua.png', categoria: 'Necessidades', createdAt: new Date(), updatedAt: new Date() },
            { id: 14, nome: 'Café/Chá', mensagem: 'Preciso de um Café/Chá', imagem: '/imagesBotoes/necesidades/café chá.png', categoria: 'Necessidades', createdAt: new Date(), updatedAt: new Date() },
            { id: 15, nome: 'Roupa', mensagem: 'Preciso de ajuda com a minha roupa', imagem: '/imagesBotoes/necesidades/roupa.png', categoria: 'Necessidades', createdAt: new Date(), updatedAt: new Date() },
            { id: 16, nome: 'Óculos', mensagem: 'Preciso de ajuda com os meus óculos', imagem: '/imagesBotoes/tecnologia/oculos.png', categoria: 'Necessidades', createdAt: new Date(), updatedAt: new Date() },
            { id: 17, nome: 'Higiene/Limpar a cara', mensagem: 'Preciso ajuda para limpar a cara/higiene', imagem: '/imagesBotoes/necesidades/higiene.png', categoria: 'Necessidades', createdAt: new Date(), updatedAt: new Date() },
            { id: 18, nome: 'Aspirar secreções', mensagem: 'Preciso ajuda para Aspirar Secreções', imagem: '/imagesBotoes/necesidades/aspirador de secreções.png', categoria: 'Necessidades', createdAt: new Date(), updatedAt: new Date() },
            { id: 19, nome: 'Mudar de posição', mensagem: 'Preciso de ajuda para mudar de posição', imagem: '/imagesBotoes/necesidades/mudar_de_posicao.png', categoria: 'Necessidades', createdAt: new Date(), updatedAt: new Date() },
            { id: 20, nome: 'Almofada/Cobertor', mensagem: 'Preciso de uma Almofada/Cobertor', imagem: '/imagesBotoes/necesidades/almofada cobertor.png', categoria: 'Necessidades', createdAt: new Date(), updatedAt: new Date() },
            { id: 21, nome: 'Abrir/Fechar a Janela', mensagem: 'Preciso de ajuda para abrir/fechar a janela', imagem: '/imagesBotoes/necesidades/abrir fechar janela.png', categoria: 'Necessidades', createdAt: new Date(), updatedAt: new Date() },
            { id: 22, nome: 'Abrir/Fechar a porta', mensagem: 'Preciso ajuda para abrir/fechar a porta', imagem: '/imagesBotoes/necesidades/abrir_fechar_a_porta.png', categoria: 'Necessidades', createdAt: new Date(), updatedAt: new Date() },
            { id: 23, nome: 'Feses', mensagem: 'Necessidades Fisiológicas: Feses', imagem: '/imagesBotoes/necesidades/coco.png', categoria: 'Necessidades', createdAt: new Date(), updatedAt: new Date() },
            { id: 24, nome: 'Urina', mensagem: 'Necessidades Fisiológicas: Urina', imagem: '/imagesBotoes/necesidades/urina.png', categoria: 'Necessidades', createdAt: new Date(), updatedAt: new Date() },
            { id: 25, nome: 'Algália', mensagem: 'Preciso ajuda com a algália', imagem: '/imagesBotoes/medicamentos/algalia.png', categoria: 'Necessidades', createdAt: new Date(), updatedAt: new Date() },
            { id: 26, nome: 'Cadeira de Rodas', mensagem: 'Preciso de ajuda com a cadeira de rodas', imagem: '/imagesBotoes/tecnologia/cadeira_de_rodas.png', categoria: 'Tecnologias', createdAt: new Date(), updatedAt: new Date() },
            { id: 27, nome: 'Quha Zono', mensagem: 'Preciso de ajuda com o Quha Zono', imagem: '/imagesBotoes/tecnologia/quha_zono.jpg', categoria: 'Tecnologias', createdAt: new Date(), updatedAt: new Date() },
            { id: 28, nome: 'Chamada', mensagem: 'Preciso de ajuda para fazer uma chamada', imagem: '/imagesBotoes/tecnologia/fazer_uma_chamada.png', categoria: 'Tecnologias', createdAt: new Date(), updatedAt: new Date() },
            { id: 29, nome: 'PC/Tablet', mensagem: 'Preciso de ajuda com o PC/Tablet', imagem: '/imagesBotoes/tecnologia/computador.png', categoria: 'Tecnologias', createdAt: new Date(), updatedAt: new Date() },
            { id: 30, nome: 'Ligar/Desligar a luz', mensagem: 'Preciso de ajuda para Ligar/Desligar a luz', imagem: '/imagesBotoes/tecnologia/ligar_desligar_a_luz_do_quarto.png', categoria: 'Tecnologias', createdAt: new Date(), updatedAt: new Date() },
            { id: 31, nome: 'TV', mensagem: 'Preciso de ajuda com a tv', imagem: '/imagesBotoes/tecnologia/TV.png', categoria: 'Tecnologias', createdAt: new Date(), updatedAt: new Date() },
            { id: 32, nome: 'Telemóvel', mensagem: 'Preciso de ajuda com o telemóvel', imagem: '/imagesBotoes/tecnologia/telemovel.png', categoria: 'Tecnologias', createdAt: new Date(), updatedAt: new Date() },
            { id: 33, nome: 'Carregar', mensagem: 'Preciso de ajuda para carregar o meu dispositivo', imagem: '/imagesBotoes/tecnologia/carregar_o_telemovel.png', categoria: 'Tecnologias', createdAt: new Date(), updatedAt: new Date() },
            { id: 34, nome: 'Auriculares', mensagem: 'Preciso de ajuda com os auriculares', imagem: '/imagesBotoes/tecnologia/fones.png', categoria: 'Tecnologias', createdAt: new Date(), updatedAt: new Date() },
            { id: 35, nome: 'Switch', mensagem: 'Preciso de ajuda com o switch', imagem: '/imagesBotoes/tecnologia/switch.png', categoria: 'Tecnologias', createdAt: new Date(), updatedAt: new Date() },
            { id: 36, nome: 'Auxiliar', mensagem: 'Quero chamar um auxiliar', imagem: '/imagesBotoes/chamar/Auxiliar.png', categoria: 'Chamar', createdAt: new Date(), updatedAt: new Date() },
            { id: 37, nome: 'Enfermeiro', mensagem: 'Quero chamar um enfermeiro', imagem: '/imagesBotoes/chamar/Enfermeiro.png', categoria: 'Chamar', createdAt: new Date(), updatedAt: new Date() },
            { id: 38, nome: 'Fisioterapeuta', mensagem: 'Quero chamar um fisioterapeuta', imagem: '/imagesBotoes/chamar/Fisioterapeuta.png', categoria: 'Chamar', createdAt: new Date(), updatedAt: new Date() },
            { id: 39, nome: 'Psicólogo', mensagem: 'Quero chamar um psicólogo', imagem: '/imagesBotoes/chamar/Psicologa.png', categoria: 'Chamar', createdAt: new Date(), updatedAt: new Date() },
            { id: 40, nome: 'Técnico de Educação', mensagem: 'Quero chamar um técnico de educação', imagem: '/imagesBotoes/chamar/Tecnica_de_Educacao.png', categoria: 'Chamar', createdAt: new Date(), updatedAt: new Date() },
            { id: 41, nome: 'Terapeuta da fala', mensagem: 'Quero chamar um terapeuta da fala', imagem: '/imagesBotoes/chamar/Terapeuta_da_Fala.png', categoria: 'Chamar', createdAt: new Date(), updatedAt: new Date() },
            { id: 42, nome: 'Coordenadora', mensagem: 'Quero chamar a Coordinadora', imagem: '/imagesBotoes/chamar/coordenadora.png', categoria: 'Chamar', createdAt: new Date(), updatedAt: new Date() },
            { id: 43, nome: 'Diretora', mensagem: 'Quero chamar a Diretora', imagem: '/imagesBotoes/chamar/diretora técnica.png', categoria: 'Chamar', createdAt: new Date(), updatedAt: new Date() },
        ], {});
    },

    async down(queryInterface, Sequelize) {
        await queryInterface.bulkDelete('Botoes', null, {});
    }
};