import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import CollectionCards from "../CollectionCards";
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

export default function CollectionCardGrid() {
  const classes = useStyles();
  const [getUserProfile, setUserProfile] = useState("");

  const [addMovie, setAddMovie] = useState([]);

  // Get collections movies on mount
  useEffect(() => {
    API.addMovie()
      .then(({ data }) => setAddMovie(data.results));
  }, [])

  // Search for movie whenever query changes
  useEffect(() => {
  //   // Don't call API if query is empty (prevents firing on mount)
    getUserProfile &&
      API.getUserProfile()
        .then(({ data }) => setUserProfile(data.results))
  }, [getUserProfile])

  return (
    <div className={classes.root} >
      <Grid container spacing={2} alignContent="center">
        <Grid item xs={12}>
          <Paper className={classes.paper}>
            <CollectionCards addMovie={addMovie} />
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
}
