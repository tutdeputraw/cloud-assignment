const sequelize = require('./config');
// const cors = require('cors');

const Todo = require('./models/Todo');

sequelize.sync().then(() => {
    console.log('Database synchronized');
});

const express = require('express');
const app = express();

app.use(express.static('public'));

// app.use(cors());
app.use(express.json());

app.get('/', async (req, res) => {
    res.json({ status: 'OK' });
});

app.get('/dashboard', async (req, res) => {
    res.sendFile(__dirname + '/pages/dashboard.html');
});

app.get('/todos', async (req, res) => {
    const todos = await Todo.findAll();
    res.json(todos);
});

app.post('/todos', async (req, res) => {
    const { title } = req.body;
    const newTodo = await Todo.create({ title });
    res.json(newTodo);
});

// let todos = [];
// app.get('/todos', (req, res) => {
//     res.json(todos);
// });
// app.post('/todos', (req, res) => {
//     const { title } = req.body;
//     const newTodo = {
//         id: todos.length + 1,
//         title,
//     };
//     todos.push(newTodo);
//     res.json(newTodo);
// });

app.listen(4000, () => {
    console.log('Backend server is running on port 4000');
});
