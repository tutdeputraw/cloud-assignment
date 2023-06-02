// module.exports = {
//     development: {
//         username: 'root', // Your MySQL username
//         password: 'password', // Your MySQL password
//         database: 'todo_app', // Your MySQL database name
//         host: 'db',
//         dialect: 'mysql',
//     },
//     production: {
//         // Configuration for production environment
//     },
// };

const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('todo_app', 'root', 'password', {
    host: 'db',
    dialect: 'mysql',
});

module.exports = sequelize;
