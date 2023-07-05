import React from 'react';
import { Link } from 'react-router-dom';

function Dashboard() {
  return (
    <div>
      <h1>My Todo List App</h1>
      <p>Don't have an account Register <Link to="/registration">Register</Link></p>
      
    </div>
  );
}

export default Dashboard;
