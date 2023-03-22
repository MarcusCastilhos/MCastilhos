const Sequelize = require('sequelize')

const sequelize = new Sequelize('postgres', 'postgres', 'postgres', {
    dialect: 'postgres',
    host: 'localhost',
    logging: (message) => (
      console.log(`Sequelize log: ${message}`)),
    port: 5432
})

sequelize.authenticate()
.then(() => {
  console.log('Connection has been established successfully.');
}).catch((err) => {
  console.error('Unable to connect to the database:', err);
});

module.exports = sequelize