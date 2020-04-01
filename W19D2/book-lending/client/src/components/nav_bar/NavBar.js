import React from 'react';
import { Link } from 'react-router-dom';
import '../../styles/navbar.css';
import LogOutButton from '../users/LogOutButton';

export default () => {
  return(
  <div className="nav-bar-main">
    <div className="books-link">
        <i className="fas fa-book"></i>&nbsp;&nbsp;<Link to="/"> Books </Link>
    </div>
    <h2> The Library </h2>
    <div className="authors-link">
        <i className="fas fa-user-edit"></i>&nbsp;<Link to="/authors"> Authors </Link>
    </div>
    <LogOutButton/>
  </div>
  )
}