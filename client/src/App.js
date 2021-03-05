import React from 'react';
import './App.css';
import LoginHooks from './components/Login/LoginHooks'
import LogoutHooks from './components/Logout/LogoutHooks'

function App() {
  return (
    <div className="App">
      <LoginHooks />
      <LogoutHooks />
    </div>
  );
}

export default App;
