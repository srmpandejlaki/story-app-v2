import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { FaHome } from 'react-icons/fa';
 
function NavBar({ logout }) {
  return (
    <nav className="nav-bar">
      <ul className='nav-button'>
        <li><Link to="/"><FaHome size={24} /></Link></li>
        <li><button onClick={logout}>Logout</button></li>
      </ul>
    </nav>
  );
}

NavBar.propTypes = {
  logout: PropTypes.func.isRequired,
};
 
export default NavBar;