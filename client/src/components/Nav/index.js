import React, { useState } from 'react';

import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import IconButton from '@material-ui/core/IconButton'
import MenuIcon from '@material-ui/icons/Menu'
import Typography from '@material-ui/core/Typography'
import { makeStyles } from '@material-ui/core/styles'

import Drawer from '../Drawer';
import logo from '../../assets/images/logo-white.svg'

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        backgroundColor: "#cc3333"
    },
    menuButton: {
        marginLeft: "auto"
    },
    title: {
        display: "none",
        [theme.breakpoints.up("sm")]: {
            flexGrow: 1,
            display: "block",
            marginLeft: "1rem"
        }
    }
}));

export default function Nav() {
    const classes = useStyles();

    const [open, setOpen] = useState(false);

    const toggleDrawer = (e) => {
        if (e.type === "keydown" && (e.key === "Tab" || e.key === "Shift")) {
            return;
        }
        setOpen(!open);
    };

    return (
        <>
            <AppBar position="static" className={classes.root}>
                <Toolbar>
                    <img src={logo} alt="mongo movies logo" width={28} height={28} />
                    <Typography variant="h6" className={classes.title}>
                        MongoMovies
                    </Typography>
                    <IconButton
                        edge="end"
                        className={classes.menuButton}
                        color="inherit"
                        aria-label="open drawer"
                        onClick={toggleDrawer}
                    >
                        <MenuIcon />
                    </IconButton>
                </Toolbar>
            </AppBar>
            <Drawer
                open={open}
                toggleDrawer={toggleDrawer}
            />
        </>
    )
}