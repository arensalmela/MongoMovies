import React, { useState } from 'react';
import './App.css';
import LoginPage from './pages/Login/Login'
import Home from './pages/Home/Home'
import Collections from './pages/Collections/Collections';
import Nav from './components/Nav/index';
import { BrowserRouter as Router, Redirect, Route } from "react-router-dom";

export default function App() {
  const [user, setUser] = useState(null);

  return (
    <Router>
      <div className="App">
        <Nav setUser={setUser} />
        <Route exact path="/login" >
          {user ? <Redirect to="/" /> : <LoginPage setUser={setUser} type="Login" />}
        </Route>

        <Route exact path="/signup">
          {user ? <Redirect to="/" /> : <LoginPage setUser={setUser} type="Signup" />}
        </Route>

        <Route exact path="/logout" >
          <Redirect to="/login" />
        </Route>

        <Route exact path="/collections">
          {!user ? <Redirect to="/login" /> : <Collections />}
        </Route>

        <Route path="/">
          {!user ? <Redirect to="/login" /> : <Home />}
        </Route>
      </div>
    </Router>
  );
}