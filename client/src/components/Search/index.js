import React, { useContext } from "react";
import { fade, makeStyles } from "@material-ui/core/styles";
import InputBase from "@material-ui/core/InputBase";
import SearchIcon from "@material-ui/icons/Search";
import UserContext from '../../utils/UserContext';
import Grid from "@material-ui/core/Grid";
import './style.css'

const useStyles = makeStyles((theme) => ({
  search: {
    border: "1px solid black",
    position: "relative",
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    "&:hover": {
      backgroundColor: fade(theme.palette.common.white, 0.25)
    },
    marginRight: theme.spacing(2),
    marginInline: "auto",
    width: "25px",
    [theme.breakpoints.up("sm")]: {
      marginLeft: theme.spacing(3),
      width: "auto"
    }
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
  },
  inputRoot: {
    color: "inherit"
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create("width"),
    width: "50%",
    [theme.breakpoints.up("md")]: {
      width: "20ch"
    }
  }
}));

export default function Search() {
  const classes = useStyles();
  const user = useContext(UserContext)

  return (
    <>
      <h1>Welcome, {user.name}!</h1>

      {/* Still need to fix the CSS on the search input */}
      <Grid item xs={6}>
      <div className={classes.search}>
        <div className={classes.searchIcon}>
          <SearchIcon />
        </div>
        <InputBase
          placeholder="Search…"
          classes={{
            root: classes.inputRoot,
            input: classes.inputInput
          }}
          inputProps={{ "aria-label": "search"}}
        />
      </div>
      </Grid>
    </>
  );
}
