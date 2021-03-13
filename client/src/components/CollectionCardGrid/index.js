import React, { useContext, useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import API from "../../utils/API";
import UserContext from "../../utils/UserContext";
import MovieCard from "../MovieCard";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    textAlign: "center"
  },
  paper: {
    padding: theme.spacing(4),
    textAlign: "center",
    color: theme.palette.text.secondary,
    backgroundColor: "#cc3333",
    maxWidth: "22rem",
    marginLeft: "auto",
    marginRight: "auto",
    boxShadow: ".25rem .25rem 1rem #440000"
  },
  column: {

  }
}));

export default function CollectionCardGrid() {
  const classes = useStyles();
  const user = useContext(UserContext);
  const [userMovies, setUserMovies] = useState([]);

  const updateUsers = () => {
    API.getUserProfile(user.googleID)
      .then(({ data }) => setUserMovies(data.movies));
  }

  // Get collections movies on mount
  useEffect(() => {
    updateUsers()
  }, [])

  return (
    <div className={classes.root}>
      <Grid container>

        <Grid item xs={6} id="Unwatched">
          <h3>Unwatched</h3>
          <Paper className={classes.paper}>
            {
              userMovies.length
                ? userMovies.filter(m => !m.watched).map(movie => (
                  <>
                    <MovieCard movie={movie} key={movie.id} updateUsers={updateUsers} />
                    <br />
                    <br />
                  </>
                ))
                : <h2>You haven't added any movies yet!</h2>
            }
          </Paper>
        </Grid>

        <Grid item xs={6} id="Watched">
          <h3>Watched</h3>
          <Paper className={classes.paper}>
            {
              userMovies.length
                ? userMovies.filter(m => m.watched).map(movie => (
                  <>
                    <MovieCard movie={movie} key={movie.id} updateUsers={updateUsers} />
                    <br />
                    <br />
                  </>
                ))
                : <h2>You haven't added any movies yet!</h2>
            }
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
}
