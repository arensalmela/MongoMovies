import React, { useState } from 'react';
import './App.css';
import LoginHooks from './pages/Login/LoginHooks'
import LogoutHooks from './pages/Logout/LogoutHooks'
import Home from './pages/Home/Home'
import Collections from './pages/Collections/Collections';
import { BrowserRouter as Router, Route } from "react-router-dom";

export default function App() {
    // Random default user to work with in dev.
  const [user, setUser] = useState({
    name: "Jim",
    email: "jim@jim.com",
    googleID: "1234",
    watchedMovies: [
      {
        title: "Titanic",
        poster: "./assets/images/logo-red.svg",
        released: "Date",
        overview: "Movie overview goes here",
        apiID: "123456789"
      }
    ],
    unwatchedMovies: [
      {
        title: "Finding Nemo",
        poster: "./assets/images/logo-red.svg",
        released: "Date",
        overview: "Movie overview goes here",
        apiID: "123456781"
      }
    ]
  });

    return (
    <Router>
      <div className="App">
        <Route exact path="/login" render={() => (
          <LoginHooks setUser={setUser} />
        )} />
        <Route exact path="/logout" render={() => (
          <LogoutHooks setUser={setUser} />
        )} />
        <Route exact path="/" component={Home} />
        <Route exact path="/collections" component={Collections} />
      </div>
    </Router>
  );
}