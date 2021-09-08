import React, { useEffect, useContext } from 'react';
import { Link } from 'react-router-dom';
import './Header.css';
import { FaUsers } from 'react-icons/fa';
import { UserContext } from '../App';

const Header = () => {
  // hooks
  // - state
  const { state, dispatch } = useContext(UserContext);

  // - side effects
  useEffect(() => {
    if (localStorage.getItem('user')) {
      dispatch({
        type: 'LOGIN',
        payload: localStorage.getItem('user'),
      });
    } else {
      console.log('user not founded');
    }
  }, [dispatch]);

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
          {state.user ? (
            <li>
              <Link to='/my-account' className='account-link'>
                My Account
              </Link>
            </li>
          ) : (
            <li>
              <Link to='/' className='home-link'></Link>
            </li>
          )}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
