import React, { useState } from "react";
import { fade, makeStyles } from "@material-ui/core/styles";
import SearchIcon from "@material-ui/icons/Search";
import './style.css'
import { TextField } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  search: {
    position: "relative",
    width: "75%",
    marginRight: "auto",
    marginLeft: "auto"
  },
  searchIcon: {
    padding: theme.spacing(0, 1, 0, 0),
    color: fade(theme.palette.common.black, 0.3)
  }
}));

export default function Search() {
  const classes = useStyles();
  const [query, setQuery] = useState("");

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
    <div>
      <TextField
        className={classes.search}
        label={query && "Search for movies"}
        variant="outlined"
        type="text"
        placeholder="Search for movies"
        onChange={handleInputChange}
        InputProps={{
          startAdornment: <SearchIcon className={classes.searchIcon} />
        }}
      />
    </div>
  );
}
