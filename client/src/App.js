import React, {useState} from 'react';
import './App.css';
import LoginHooks from './components/Login/LoginHooks'
import LogoutHooks from './components/Logout/LogoutHooks'
import Home from './components/Home/Home'
import { BrowserRouter as Router, Route } from "react-router-dom";


function App() {
  const [user, setUser] = useState();


  return (
    <Router>
    <div className="App">
      <LoginHooks setUser={setUser}/>
      <LogoutHooks />
      <Route exact path="/home" component={Home}/>
    </div>

    </Router>
  );
}

export default App;
