import './App.css';
import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

// screens
import HomeScreen from './screens/HomeScreen';
import MyAccountScreen from './screens/MyAccountScreen';
import Header from './components/Header';
import Footer from './components/Footer';

function App() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route exact path='/' component={HomeScreen} />
        <Route path='/my-account' component={MyAccountScreen} />
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
