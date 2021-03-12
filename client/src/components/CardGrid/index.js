import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Search from "../Search/";
import TrendingCards from "../TrendingCards"
import API from "../../utils/API";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary
  }
}));

export default function CardGrid() {
  const classes = useStyles();
  const [query, setQuery] = useState("");
  const [trending, setTrending] = useState([]);

  // Get trending movies on mount
  useEffect(() => {
    API.trending()
      .then(({ data }) => setTrending(data.results));
  }, [])

  // Search for movie whenever query changes
  useEffect(() => {
    // Don't call API if query is empty (prevents firing on mount)
    query &&
      API.query(query)
        .then(({ data }) => setTrending(data.results))
  }, [query])

  return (
    <div className={classes.root} >
      <Grid container spacing={2} alignContent="center">
        <Grid item xs={12}>
          <Paper className={classes.paper}>
            <Search query={query} setQuery={setQuery} />
            <br></br>
            <TrendingCards trending={trending} />
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
}
