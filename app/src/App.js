import React from 'react';
import './App.css';
import Home from './container/Home';
import Bollywood from './container/Bollywood';
import Technology from './container/Technology';
import Sport from './container/Sport';
import Food from './container/Food';
import SignUp from './container/SignUp';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Hero from './components/Hero';
import Login from './container/SignUp/login';
import UserAuth from './components/auth/AuthState';
import AuthToken from './components/auth/tokenAuth';
 
  if(localStorage.token){
      AuthToken(localStorage.token);
  }

function App() {
  return (
  <UserAuth>
    <Router>
      <div className="App">
        <Hero />
        <Route path="/" exact component={Home} />
        <Route path="/bollywood"  component={Bollywood}/>
        <Route path="/technology" component={Technology} />
        <Route path="/sport" component={Sport} />
        <Route path="/food" component={Food} />
        <Route path="/signup" component={SignUp} />
        <Route path="/login" component={Login} />
      </div>
    </Router>
  </UserAuth>
  );
}

export default App;
