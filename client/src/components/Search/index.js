import React from "react";
import { fade, makeStyles } from "@material-ui/core/styles";
import SearchIcon from "@material-ui/icons/Search";
import './style.css'
import { Grid, TextField, Button } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  search: {
    position: "relative",
    width: "45%",
    marginRight: "auto",
    marginLeft: "auto"
  },
  searchIcon: {
    padding: theme.spacing(0, 1, 0, 0),
    color: fade(theme.palette.common.black, 0.3)
  }
}));

export default function Search({ query, setQuery }) {
  const classes = useStyles();

  let timeout;

  const handleInputChange = (e) => {
    clearTimeout(timeout);
    search(e);
  };

  const search = (e) => {
    const currQuery = e.target.value
    timeout = setTimeout(() => setQuery(currQuery), 1000);
  };

  return (
    <>
    <Grid container justify="
    center" alignItems="center" direction="column">
      <TextField
        className={classes.search}
        label={query && "Search for movies"}
        variant="outlined"
        type="text"
        placeholder="Search for movies"
        onChange={handleInputChange}
        InputProps={{
          startAdornment: <Button onClick={search}><SearchIcon className={classes.searchIcon} /></Button>
        }}
      />
    </Grid>
    </>
  );
}
