const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Pedido = sequelize.define('Pedido', {
    estado: {
        type: DataTypes.ENUM('pendente', 'concluido', 'cancelado'),
        defaultValue: 'pendente',
        allowNull: false
    },
    emergencia: {
        type: DataTypes.BOOLEAN,
        defaultValue: false,
        allowNull: false
    },
    utenteId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: 'Utentes',
            key: 'id'
        },
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE'
    },
    botaoId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: 'Botoes',
            key: 'id'
        },
        onDelete: 'RESTRICT',
        onUpdate: 'CASCADE'
    }
}, {
    tableName: 'pedidos',
    timestamps: true, // Usando createdAt como hora
    createdAt: 'hora',
    updatedAt: false
});

Pedido.associate = (models) => {
    Pedido.belongsTo(models.Utente, {
        foreignKey: 'utenteId',
        as: 'utente'
    });
    
    Pedido.belongsTo(models.Botao, {
        foreignKey: 'botaoId',
        as: 'botao'
    });
};

module.exports = Pedido;