const {Sequelize} = require('sequelize');

// Connecting to dB 
module.exports = new Sequelize('whatsApp', 'postgres', 'postgres', {
    host: 'localhost',
    dialect: 'postgres'
});