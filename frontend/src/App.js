import React, { useState, useEffect } from 'react';

function App() {
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState('');

  useEffect(() => {
    fetch('http://localhost:4000/todos')
      .then((res) => res.json())
      .then(res => {
        console.log('ikilo cok', res);
      })
      // .then((data) => setTodos(data))
      .catch(err => {
        console.log(err);
      });
  }, []);

  const handleInputChange = (e) => {
    setNewTodo(e.target.value);
  };

  const addTodo = () => {
    if (newTodo.trim() !== '') {
      fetch('http://localhost:4000/todos', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ title: newTodo }),
      })
        .then((res) => res.json())
        .then((data) => {
          setTodos([...todos, data]);
          setNewTodo('');
        });
    }
  };

  const showTodo = () => {
    if (todos.length !== 0) {
      return <ul>
        {todos.map((todo) => (
          <li key={todo.id}>{todo.title}</li>
        ))}
      </ul>;
    }
  }

  return (
    <div>
      <h1>TODO App</h1>
      <input type="text" value={newTodo} onChange={handleInputChange} />
      <button onClick={addTodo}>Add</button>

      {showTodo()}
    </div>
  );
}

export default App;
