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

  // Display trending movies when component mounts
  useEffect(() => {
    API.trending()
      .then(({ data }) => setTrending(data.results));
  }, [])

  return (
    <div className={classes.root} >
      <Grid container spacing={2} alignContent="center">
        <Grid item xs={12}>
          <Paper className={classes.paper}>
            <Search query={query} setQuery={setQuery} />
            <br></br>
            <TrendingCards />
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
}
