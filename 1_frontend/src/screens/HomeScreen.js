import React from 'react';
import './HomeScreen.css';

const HomeScreen = () => {
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

            <form className='logInForm form'>
              <div className='form-control'>
                <label className='form-label' htmlFor='loginEmail'>
                  Email
                </label>
                <input className='form-input' type='email' required />
              </div>

              <div className='form-control'>
                <label className='form-label' htmlFor='loginPassword'>
                  Password
                </label>
                <input className='form-input' type='password' required />
              </div>

              <div className='form-control'>
                <input
                  type='submit'
                  value='Log In'
                  className='btn btn-submit'
                />
              </div>
            </form>
            <p className='loginMessage form-message form-message-danger'></p>
          </section>
          <section className='signup card-shadow'>
            <h2 className='new-user-color'>
              <span>New user?</span> Sign Up!
            </h2>

            <form className='signUpForm form'>
              <div className='form-control'>
                <label className='form-label' htmlFor='signUpName'>
                  Name
                </label>
                <input className='form-input' type='text' required />
              </div>

              <div className='form-control'>
                <label className='form-label' htmlFor='signUpSurname'>
                  Surname
                </label>
                <input className='form-input' type='text' required />
              </div>

              <div className='form-control'>
                <label className='form-label' htmlFor='signUpEmail'>
                  Email
                </label>
                <input className='form-input' type='text' required />
              </div>

              <div className='form-control'>
                <label className='form-label' htmlFor='signUpPassword'>
                  Password
                </label>
                <input className='form-input' type='password' required />
              </div>

              <div className='form-control'>
                <label className='form-label' htmlFor='signUpConfirmPassword'>
                  Confirm Password
                </label>
                <input className='form-input' type='password' required />
              </div>

              <div className='form-control'>
                <input
                  type='submit'
                  value='Sign Up'
                  className='btn btn-submit'
                />
              </div>
            </form>
            <p className='signUpMessage form-message form-message-danger'></p>
          </section>
        </div>
      </div>
    </main>
  );
};

export default HomeScreen;
