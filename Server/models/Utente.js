const { DataTypes } = require("sequelize");
const sequelize = require("../config/database");

const Utente = sequelize.define(
    "Utente",
    {
        nome: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: { notEmpty: true }
        },
        quarto: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: { notEmpty: true }
        }
    },
    {
        tableName: "Utentes",
        timestamps: true // Habilitado para consistencia
    }
);

Utente.associate = (models) => {
    Utente.belongsToMany(models.Botao, {
        through: "UtenteBotoes",
        foreignKey: "utenteId",
        as: "botoes",
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE'
    });

    Utente.hasMany(models.Pedido, {
        foreignKey: "utenteId",
        as: "pedidos",
        onDelete: 'CASCADE', // Elimina pedidos si se borra el utente
        onUpdate: 'CASCADE'
    });
};

module.exports = Utente;