import React from 'react';
import { Link } from 'react-router-dom';
import './Sidebar.scss'

function Sidebar() {
  return (
    <div className="sidebar">
      <ul className="sidebar-menu">
        <li>
          <Link to="/dashboard">Dashboard</Link>
        </li>
        <li>
          <Link to="/create-feed">Create</Link>
        </li>
        <li>
          <Link to="/settings"></Link>
        </li>
      </ul>
    </div>
  );
}

export default Sidebar;
