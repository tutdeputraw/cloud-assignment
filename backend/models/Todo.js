const { DataTypes } = require('sequelize');
const sequelize = require('../config');

const Todo = sequelize.define('Todo', {
    title: {
        type: DataTypes.STRING,
        allowNull: false,
    },
});

module.exports = Todo;
