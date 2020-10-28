import React from 'react';
import Header from "./Header.js";
import './App.css';
import Home from './Home'; 
import Checkout from './Checkout.js';
import Login from './Login.js';
import Payment from './Payment.js';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { useStateValue } from './StateProvider.js';
import { useEffect } from 'react';
import { auth } from './firebase.js';

function App() {

  const [{}, dispatch] = useStateValue();

  useEffect(() => {
    // will only run once when app component loads...

    auth.onAuthStateChanged(authUser => {
      console.log('User : ', authUser);

      if(authUser) {
        //user logged in
        dispatch({
          type: 'SET_USER',
          user: authUser
        })
      }else {
        //user logged out
        dispatch({
          type: 'SET_USER',
          user: null
        })
      }
    })
  }, [])

  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/checkout">
            <Header />
            <Checkout /> 
          </Route>
          <Route path="/payment">
            <Header />
            <Payment /> 
          </Route>
          <Route path="/">
            <Header />
            <Home />
          </Route>
        </Switch>
    </div>
    </Router>
  );
}

export default App;
