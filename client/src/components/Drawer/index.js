import React from "react";
import { Link, useLocation } from "react-router-dom";
import { useGoogleLogout } from "react-google-login";

import SwipeableDrawer from "@material-ui/core/SwipeableDrawer";
import { makeStyles } from "@material-ui/core/styles";
import { List, ListItem, ListItemIcon, ListItemText } from "@material-ui/core";
import HomeIcon from "@material-ui/icons/Home";
import CollectionIcon from "@material-ui/icons/Subscriptions";
import LogoutIcon from "@material-ui/icons/ExitToApp";

const clientId =
  "123454472770-7dr95o1f2blqnbvudd27d9g4tp592roi.apps.googleusercontent.com";

const useStyles = makeStyles((theme) => ({
  list: {
    width: 250,
    paddingTop: 0,
  },
  link: {
    textDecoration: "none",
    color: "inherit",
  },
}));

export default function Drawer({ open, toggleDrawer, setUser }) {
  const classes = useStyles();
  const location = useLocation();

  const onLogoutSuccess = (res) => {
    setUser({});
  };

  const onFailure = (res) => {
    console.log("[Logout failed] res:", res);
  };

  const { signOut } = useGoogleLogout({
    clientId,
    onLogoutSuccess,
    onFailure,
  });

  return (
    <SwipeableDrawer
      anchor="right"
      color="inherit"
      open={open}
      onOpen={toggleDrawer}
      onClose={toggleDrawer}
    >
      <div
        className={classes.list}
        role="presentation"
        onClick={toggleDrawer}
        onKeyDown={toggleDrawer}
      >
        <List component="nav" aria-label="nav links" className={classes.list}>
          {(location.pathname === "/login" ||
            location.pathname === "/signup") && (
            <>
              <Link to="/login" className={classes.link}>
                <ListItem selected={location.pathname === "/login"} button>
                  <ListItemText primary="Login" />
                </ListItem>
              </Link>
              <Link to="/signup" className={classes.link}>
                <ListItem selected={location.pathname === "/signup"} button>
                  <ListItemText primary="Signup" />
                </ListItem>
              </Link>
            </>
          )}
          {location.pathname !== "/login" && location.pathname !== "/signup" && (
            <>
              <Link to="/" className={classes.link}>
                <ListItem selected={location.pathname === "/"} button>
                  <ListItemIcon>
                    <HomeIcon />
                  </ListItemIcon>
                  <ListItemText primary="Home" />
                </ListItem>
              </Link>

              <Link to="/collections" className={classes.link}>
                <ListItem
                  selected={location.pathname === "/collections"}
                  button
                >
                  <ListItemIcon>
                    <CollectionIcon />
                  </ListItemIcon>
                  <ListItemText primary="Collections" />
                </ListItem>
              </Link>

              {/* <Link to="/logout" className={classes.link}> */}
              <ListItem button onClick={signOut}>
                <ListItemIcon>
                  <LogoutIcon />
                </ListItemIcon>
                <ListItemText primary="Logout" />
              </ListItem>
              {/* </Link> */}
            </>
          )}
        </List>
      </div>
    </SwipeableDrawer>
  );
}
