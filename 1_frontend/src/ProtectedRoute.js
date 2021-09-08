import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom';

// screens pages
import MyAccountScreen from './screens/MyAccountScreen';

const ProtectedRoute = () => {
  // hooks

  // - redirects
  const history = useHistory();

  // - side effects
  useEffect(() => {
    // if user not exists - redirecting to login
    if (!localStorage.getItem('user')) history.push('/login');
  });

  return <MyAccountScreen />;
};

export default ProtectedRoute;
