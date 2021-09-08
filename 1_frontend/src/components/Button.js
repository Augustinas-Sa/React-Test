import React, { useContext } from 'react';
import './Button.css';
import { useHistory } from 'react-router';
import { UserContext } from '../App';

const Button = () => {
  // hooks
  const { dispatch } = useContext(UserContext);

  const history = useHistory();

  const logoutUser = () => {
    dispatch({ type: 'LOGOUT', user: '' });
    localStorage.removeItem('user');
    history.push('/');
  };

  return (
    <button className='btn-blue' onClick={() => logoutUser()}>
      Logout
    </button>
  );
};

export default Button;
