import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';
import { FaUsers } from 'react-icons/fa';

const Header = () => {
  return (
    <header>
      <div>
        <FaUsers className='header-icon' />
      </div>
      <nav>
        <ul>
          <li>
            <Link to='/' className='home-link'>
              Home
            </Link>
          </li>
          <li>
            <Link to='/my-account' className='account-link'>
              My Account
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
