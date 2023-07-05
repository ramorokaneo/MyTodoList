import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Dashboard from './components/Dashboard';
import Registration from './components/Forms/Registration';
import Login from './components/Forms/Login';
import TodoList from './components/Todo/TodoList';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/registration" element={<Registration />} />
        <Route path="/login" element={<Login />} />
        <Route path="/todo-list" element={<TodoList />} />
      </Routes>
    </Router>
  );
}

export default App;
