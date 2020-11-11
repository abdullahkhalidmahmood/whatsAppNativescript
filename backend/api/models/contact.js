const Sequelize = require('sequelize');
const db = require('../config/database');

const Contacts = db.define('Contacts', {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
    },
    name: {
        type: Sequelize.STRING
    },
    number: {
        type: Sequelize.STRING
    },
    image: {
        type: Sequelize.STRING
    }
})

module.exports = Contacts;


