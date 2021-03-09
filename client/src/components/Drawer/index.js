import React from "react";
import { Link, useLocation } from 'react-router-dom'

import SwipeableDrawer from "@material-ui/core/SwipeableDrawer";
import { makeStyles } from "@material-ui/core/styles";
import { List, ListItem, ListItemIcon, ListItemText, Divider } from "@material-ui/core";
import HomeIcon from "@material-ui/icons/Home";
import CollectionIcon from "@material-ui/icons/Subscriptions";
import LogoutIcon from "@material-ui/icons/ExitToApp";

const useStyles = makeStyles((theme) => ({
    list: {
        width: 250
    },
    link: {
        textDecoration: "none",
        color: "inherit"
    }
}));

export default function Drawer({ open, toggleDrawer, selectedIndex, handleListItemClick }) {
    const classes = useStyles();
    const location = useLocation()

    return (
        <SwipeableDrawer anchor="right" open={open} onClose={toggleDrawer} color="inherit">
            <div className={classes.list} role="presentation" onClick={toggleDrawer} onKeyDown={toggleDrawer}>

                <List component="nav" aria-label="logged-out links">

                    {/* ONLY login/signup pages */}

                    <Link to="/login" className={classes.link}>
                        <ListItem selected={selectedIndex === 0} onClick={() => handleListItemClick(0)} button>
                            <ListItemText primary="Login" />
                        </ListItem>
                    </Link>

                    <Link to="/signup" className={classes.link}>
                        <ListItem selected={selectedIndex === 1} onClick={() => handleListItemClick(1)} button>
                            <ListItemText primary="Signup" />
                        </ListItem>
                    </Link>

                </List>

                <Divider />

                <List component="nav" aria-label="logged-in links">

                    {/* On all BUT login/signup pages */}

                    <Link to="/" className={classes.link}>
                        <ListItem selected={selectedIndex === 2} onClick={() => handleListItemClick(2)} button>
                            <ListItemIcon>
                                <HomeIcon />
                            </ListItemIcon>
                            <ListItemText primary="Home" />
                        </ListItem>
                    </Link>

                    <Link to="/collections" className={classes.link}>
                        <ListItem selected={selectedIndex === 3} onClick={() => handleListItemClick(3)} button>
                            <ListItemIcon>
                                <CollectionIcon />
                            </ListItemIcon>
                            <ListItemText primary="Collections" />
                        </ListItem>
                    </Link>

                    <ListItem selected={selectedIndex === 4} onClick={() => handleListItemClick(4)} button>
                        <ListItemIcon>
                            <LogoutIcon />
                        </ListItemIcon>
                        <ListItemText primary="Logout" />
                    </ListItem>

                </List>

            </div>
        </SwipeableDrawer>
    );
}
