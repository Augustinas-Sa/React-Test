import React, { useState, useContext, useRef } from 'react';
import { useHistory } from 'react-router-dom';
import axios from 'axios';
import { UserContext } from '../App';
import './HomeScreen.css';

const HomeScreen = () => {
  // hooks
  // - state
  // -- global
  const { dispatch } = useContext(UserContext);

  // -- local
  // --- login form
  const [loginEmail, setLoginEmail] = useState('');
  const [loginPassword, setLoginPassword] = useState('');
  const [loginErrorMessage, setLoginErrorMessage] = useState('');

  // --- signup form
  const [signupName, setSignupName] = useState('');
  const [signupSurname, setSignupSurname] = useState('');
  const [signupEmail, setSignupEmail] = useState('');
  const [signupPassword, setSignupPassword] = useState('');
  const [signupConfirmPassword, setSignupConfirmPassword] = useState('');
  const [signupErrorMessage, setSignupErrorMessage] = useState('');

  // refs
  const inputRef = useRef();
  const signupPasswordInputRef = useRef();
  const signupEmailInputRef = useRef();

  // redirects
  const history = useHistory();

  // custom functions
  const loginUser = (e) => {
    e.preventDefault();

    axios
      .post('http://localhost:5000/api/users/login', {
        email: loginEmail,
        password: loginPassword,
      })
      .then((response) => {
        const userId = response.data.userId;

        localStorage.setItem('user', userId);
        dispatch({ type: 'LOGIN', payload: userId });

        history.push('/my-account');
      })
      .catch((err) => {
        setLoginEmail('');
        setLoginPassword('');
        setLoginErrorMessage(err.response.data.message);

        inputRef.current.focus();
      });
  };

  const signupUser = (e) => {
    e.preventDefault();

    if (signupPassword !== signupConfirmPassword) {
      setSignupErrorMessage('Passwords do not match');

      setSignupPassword('');
      setSignupConfirmPassword('');

      signupPasswordInputRef.current.focus();

      return;
    }

    axios
      .post('http://localhost:5000/api/users/signup', {
        name: signupName,
        surname: signupSurname,
        email: signupEmail,
        password: signupPassword,
      })
      .then((response) => {
        if (response.data.registrationStatus === 'failed') {
          setSignupErrorMessage(response.data.message);

          setSignupEmail('');
          setSignupPassword('');
          setSignupConfirmPassword('');

          signupEmailInputRef.current.focus();
        } else if (response.data.registrationStatus === 'success') {
          localStorage.setItem('user', response.data.userId);
          dispatch({ type: 'REGISTER', payload: response.data.userId });

          history.push('/my-account');
        }
      })
      .catch((err) => console.log(err));
  };

  return (
    <main>
      <div className='main-container'>
        <section>
          <h1 className='headline'>Sign up/ Log In</h1>
        </section>

        <div className='login-signup-container'>
          <section className='login card-shadow'>
            <h2 className='signup-color'>
              <span>Have account?</span> Log In!
            </h2>

            <form className='logInForm form' onSubmit={loginUser}>
              <div className='form-control'>
                <label className='form-label' htmlFor='loginEmail'>
                  Email
                </label>
                <input
                  className='form-input'
                  type='email'
                  value={loginEmail}
                  onChange={(e) => setLoginEmail(e.target.value)}
                  required
                  ref={inputRef}
                />
              </div>

              <div className='form-control'>
                <label className='form-label' htmlFor='loginPassword'>
                  Password
                </label>
                <input
                  className='form-input'
                  type='password'
                  value={loginPassword}
                  onChange={(e) => setLoginPassword(e.target.value)}
                  required
                />
              </div>

              <div className='form-control'>
                <input
                  type='submit'
                  value='Log In'
                  className='btn btn-submit'
                />
              </div>
            </form>
            <p className='loginMessage form-message form-message-danger'>
              {loginErrorMessage}
            </p>
          </section>
          <section className='signup card-shadow'>
            <h2 className='new-user-color'>
              <span>New user?</span> Sign Up!
            </h2>

            <form className='signUpForm form' onSubmit={signupUser}>
              <div className='form-control'>
                <label className='form-label' htmlFor='signUpName'>
                  Name
                </label>
                <input
                  className='form-input'
                  type='text'
                  value={signupName}
                  onChange={(e) => setSignupName(e.target.value)}
                  required
                />
              </div>

              <div className='form-control'>
                <label className='form-label' htmlFor='signUpSurname'>
                  Surname
                </label>
                <input
                  className='form-input'
                  type='text'
                  value={signupSurname}
                  onChange={(e) => setSignupSurname(e.target.value)}
                  required
                />
              </div>

              <div className='form-control'>
                <label className='form-label' htmlFor='signUpEmail'>
                  Email
                </label>
                <input
                  className='form-input'
                  type='text'
                  value={signupEmail}
                  onChange={(e) => setSignupEmail(e.target.value)}
                  ref={signupEmailInputRef}
                  required
                />
              </div>

              <div className='form-control'>
                <label className='form-label' htmlFor='signUpPassword'>
                  Password
                </label>
                <input
                  className='form-input'
                  type='password'
                  value={signupPassword}
                  onChange={(e) => setSignupPassword(e.target.value)}
                  ref={signupPasswordInputRef}
                  required
                />
              </div>

              <div className='form-control'>
                <label className='form-label' htmlFor='signUpConfirmPassword'>
                  Confirm Password
                </label>
                <input
                  className='form-input'
                  type='password'
                  value={signupConfirmPassword}
                  onChange={(e) => setSignupConfirmPassword(e.target.value)}
                  required
                />
              </div>

              <div className='form-control'>
                <input
                  type='submit'
                  value='Sign Up'
                  className='btn btn-submit'
                />
              </div>
            </form>
            <p className='signUpMessage form-message form-message-danger'>
              {signupErrorMessage}
            </p>
          </section>
        </div>
      </div>
    </main>
  );
};

export default HomeScreen;
