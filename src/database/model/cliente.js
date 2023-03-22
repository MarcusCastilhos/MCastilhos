const Sequelize = require('sequelize')
const database = require('../../db')

const Cliente = database.define('clientes', {
    id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
      },
      nome: {
        type: Sequelize.STRING,
        allowNull: false
      },
      cpf: {
        type: Sequelize.STRING(11),
        allowNull: false
      },
      email: Sequelize.STRING,
      telefone: {
        type: Sequelize.STRING,
        allowNull: true
      }
})

module.exports = Produto