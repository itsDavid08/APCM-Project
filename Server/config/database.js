const { Sequelize } = require('sequelize');

const sequelize = new Sequelize({
    dialect: 'sqlite',
    storage: './database/apcm.sqlite',
    logging: false
})

module.exports = sequelize;