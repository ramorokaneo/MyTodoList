import React, { useState } from 'react';

function TodoList() {
  const [todos, setTodos] = useState([]);
  const [inputValue, setInputValue] = useState('');
  const [priority, setPriority] = useState('');
  const [editIndex, setEditIndex] = useState(-1);

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handlePriorityChange = (e) => {
    setPriority(e.target.value);
  };

  const getCurrentTime = () => {
    const date = new Date();
    const time = date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
    return time;
  };

  const handleAddTodo = () => {
    if (inputValue.trim() !== '') {
      const currentTime = getCurrentTime();
      const newTodo = { text: inputValue, priority, done: false, addedTime: currentTime, completedTime: null };
      if (editIndex !== -1) {
        // Edit existing todo
        const updatedTodos = [...todos];
        updatedTodos[editIndex] = newTodo;
        setTodos(updatedTodos);
        setEditIndex(-1);
      } else {
        // Add new todo
        setTodos([...todos, newTodo]);
      }
      setInputValue('');
      setPriority('');
    }
  };

  const handleEditTodo = (index) => {
    const todoToEdit = todos[index];
    setInputValue(todoToEdit.text);
    setPriority(todoToEdit.priority);
    setEditIndex(index);
  };

  const handleDeleteTodo = (index) => {
    const updatedTodos = [...todos];
    updatedTodos.splice(index, 1);
    setTodos(updatedTodos);
  };

  const handleToggleTodo = (index) => {
    const updatedTodos = [...todos];
    const currentTime = getCurrentTime();
    if (updatedTodos[index].done) {
      updatedTodos[index].done = false;
      updatedTodos[index].completedTime = null;
    } else {
      updatedTodos[index].done = true;
      updatedTodos[index].completedTime = currentTime;
    }
    setTodos(updatedTodos);
  };

  return (
    <div>
      <h1>Todo List</h1>
      <div>
        <input type="text" value={inputValue} onChange={handleInputChange} />
        <select value={priority} onChange={handlePriorityChange}>
          <option value="">Select Priority</option>
          <option value="red">Most Important</option>
          <option value="yellow">Important</option>
          <option value="green">Least Important</option>
        </select>
        <button onClick={handleAddTodo}>{editIndex !== -1 ? 'Update' : 'Add'}</button>
      </div>
      <ul>
        {todos.map((todo, index) => (
          <li key={index}>
            <span style={{ textDecoration: todo.done ? 'line-through' : 'none', color: todo.priority }}>
              {todo.text}
            </span>
            <br />
            <span>Added: {todo.addedTime}</span>
            <br />
            {todo.completedTime && <span>Completed: {todo.completedTime}</span>}
            <br />
            <button onClick={() => handleToggleTodo(index)}>{todo.done ? 'Undo' : 'Done'}</button>
            <button onClick={() => handleEditTodo(index)}>Edit</button>
            <button onClick={() => handleDeleteTodo(index)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TodoList;
