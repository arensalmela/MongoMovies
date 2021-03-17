import React, { useContext, useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import API from "../../utils/API";
import UserContext from "../../utils/UserContext";
import MovieCard from "../MovieCard";
import goldBadge from '../../assets/images/gold-medal-svgrepo-com.svg'
import silverBadge from '../../assets/images/silver-medal-svgrepo-com.svg'
import bronzeBadge from '../../assets/images/bronze-medal-svgrepo-com.svg'

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
  badge: {
    position: "absolute",
    top: "4rem",
    left: "50%",
    transform: "translate(-50%)"
  }
}));

export default function CollectionCardGrid() {
  const classes = useStyles();
  const user = useContext(UserContext);
  const [userMovies, setUserMovies] = useState([]);
  const [badge, setBadge] = useState("");

  const updateUsers = () => {
    API.getUserProfile(user.googleID)
      .then(({ data }) => setUserMovies(data.movies));
  }

  // Get collections movies on mount
  useEffect(() => {
    updateUsers()
  }, [])

  useEffect(() => {
    const totalWatched = userMovies.filter(m => m.watched).length
    const newBadge = totalWatched > 50 ? goldBadge
      : totalWatched > 20 ? silverBadge
        : totalWatched > 5 ? bronzeBadge
          : ""
    console.log(totalWatched)
    setBadge(newBadge)
  }, [userMovies])

  return (
    <>

      {
        badge &&
        <img src={badge} alt="User Badge" width={48} height={48} className={classes.badge} />
      }
      <div className={classes.root}>
        <Grid container>

          <Grid item xs={6} id="Unwatched">
            <h3>Unwatched</h3>
            <Paper className={classes.paper}>
              {
                userMovies.length
                  ? userMovies.map(movie => (
                    !movie.watched && <MovieCard movie={movie} key={movie.id} updateUsers={updateUsers} />
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
                  ? userMovies.map(movie => (
                    movie.watched && <MovieCard movie={movie} key={movie.id} updateUsers={updateUsers} />
                  ))
                  : <h2>You haven't added any movies yet!</h2>
              }
            </Paper>
          </Grid>
        </Grid>
      </div>
    </>
  );
}
