import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
 
function NavBar({ logout }) {
  return (
    <nav className="nav-bar">
      <ul className='nav-button'>
        <li><Link to="/">Home</Link></li>
        <li><button onClick={logout}>Logout</button></li>
      </ul>
    </nav>
  );
}

NavBar.propTypes = {
  logout: PropTypes.func.isRequired,
};
 
export default NavBar;