const Sequilize = require('sequelize');
const sequilize = Sequilize({
    dialect: 'sqlite',
    storage: './database.sqlite'
});

module.exports = sequelize;