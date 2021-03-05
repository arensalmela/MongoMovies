import React from 'react';
import './App.css';
import LoginHooks from './components/Login/LoginHooks'
import LogoutHooks from './components/Logout/LogoutHooks'
import Home from './components/Home/Home'

function App() {
  return (
    <div className="App">
      <LoginHooks />
      <LogoutHooks />
      <Home />
    </div>
  );
}

export default App;
