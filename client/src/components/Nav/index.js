import React, { useState } from 'react';

import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import IconButton from '@material-ui/core/IconButton'
import MenuIcon from '@material-ui/icons/Menu'
import Typography from '@material-ui/core/Typography'
import { makeStyles } from '@material-ui/core/styles'

import Drawer from '../Drawer';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        backgroundColor: "#cc3333"
    },
    menuButton: {
        marginLeft: theme.spacing(2),
    },
    title: {
        flexGrow: 1,
    },
}));

export default function Nav() {
    const classes = useStyles();

    const [open, setOpen] = useState(false);
    const [selectedIndex, setSelectedIndex] = useState(2);

    const handleListItemClick = (index) => {
        setSelectedIndex(index);
    };

    const toggleDrawer = (e) => {
        if (e.type === "keydown" && (e.key === "Tab" || e.key === "Shift")) {
            return;
        }
        setOpen(false);
    };

    const openDrawer = () => {
        setOpen(true);
    };

    return (
        <>
            <AppBar position="static" className={classes.root}>
                <Toolbar>
                    <Typography variant="h6" className={classes.title}>
                        MongoMovies
                    </Typography>

                    <IconButton edge="end" className={classes.menuButton} color="inherit" aria-label="openDrawer" onClick={openDrawer}>
                        <MenuIcon />
                    </IconButton>
                </Toolbar>
            </AppBar>
            <Drawer
                open={open}
                toggleDrawer={toggleDrawer}
                handleListItemClick={handleListItemClick}
                selectedIndex={selectedIndex}
            />
        </>
    )
}