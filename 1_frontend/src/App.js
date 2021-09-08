import './App.css';
import React, { useReducer } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

// screens
import HomeScreen from './screens/HomeScreen';

// components
import Header from './components/Header';
import Footer from './components/Footer';
import ProtectedRoute from './ProtectedRoute';

// context
export const UserContext = React.createContext();

// state management
// - global
const initialState = { user: '' };
const reducer = (state, action) => {
  switch (action.type) {
    case 'REGISTER':
      return { user: action.payload };
    case 'LOGIN':
      return { user: action.payload };
    case 'LOGOUT':
      return { user: '' };
    default:
      return state;
  }
};

function App() {
  // hooks
  // - state
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <>
      <UserContext.Provider value={{ state, dispatch }}>
        <Router>
          <Header />
          <Switch>
            <Route exact path='/' component={HomeScreen} />
            <Route path='/my-account' component={ProtectedRoute} />
          </Switch>
          <Footer />
        </Router>
      </UserContext.Provider>
    </>
  );
}

export default App;
