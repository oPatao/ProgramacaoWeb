const Sequilize = require('sequelize');
const db = require('../db');

const Usuario = db.define('usuario', {
    id: {
        type: Sequilize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    email: {
        type: Sequilize.STRING,
        autoIncrement: true,
        allowNull: false,
        unique: true
    },
    senha: {
        type: Sequilize.STRING,
        autoIncrement: true,
        allowNull: false
    },
    perfil: {
        type: Sequilize.INTEGER,
        autoIncrement: true,
        allowNull: false
    }
});

module.exports = Usuario;