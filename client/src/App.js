import React, { useEffect, useState } from "react";
import LoginPage from "./pages/Login/Login";
import Home from "./pages/Home/Home";
import Collections from "./pages/Collections/Collections";
import Nav from "./components/Nav/index";
import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch,
} from "react-router-dom";
import UserContext from "./utils/UserContext";

export default function App() {
  const storedUser = JSON.parse(localStorage.getItem("id")) || {};
  const [user, setUser] = useState(storedUser);

  useEffect(() => {
    console.log(user);
  }, [user]);

  return (
    <Router>
      <UserContext.Provider value={user}>
        <div className="App">
          <Nav setUser={setUser} />
          <Switch>
            <Route exact path="/login">
              {user.googleId ? (
                <Redirect to="/" />
              ) : (
                <LoginPage user={user} setUser={setUser} type="Login" />
              )}
            </Route>

            <Route exact path="/signup">
              {user.googleId ? (
                <Redirect to="/" />
              ) : (
                <LoginPage user={user} setUser={setUser} type="Signup" />
              )}
            </Route>

            <Route exact path="/logout">
              <Redirect to="/login" />
            </Route>

            <Route exact path="/collections">
              {!user.googleId ? <Redirect to="/login" /> : <Collections />}
            </Route>

            <Route path="/">
              {!user.googleId ? <Redirect to="/login" /> : <Home />}
            </Route>
          </Switch>
        </div>
      </UserContext.Provider>
    </Router>
  );
}
