import React from 'react'
import { Link } from 'react-router-dom'
import './Navbar.scss'

function Navbar() {
  return (
    <div>
        <div className="navbar">
            <div className="navbar-container">
                <Link to="/" className="navbar-logo">
                Company
                </Link>
                <div className="navbar-search">
                    <input type="text" placeholder="Search..." />
                    <button type="button">Search</button>
                </div>  
                <div className="navbar-links">
                    <Link to="/settings" className="navbar-link">Settings</Link>
                    <Link to="/profile" className="navbar-link">Profile</Link>
                </div>
            </div>
        </div>    
    </div>
  )
}

export default Navbar
