import React, { useContext, useEffect, useState } from "react";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Tooltip from '@material-ui/core/Tooltip';
import Typography from '@material-ui/core/Typography';

import API from "../../utils/API";
import UserContext from "../../utils/UserContext";
import MovieCard from "../MovieCard";
import goldBadge from '../../assets/images/gold-medal-svgrepo-com.svg'
import silverBadge from '../../assets/images/silver-medal-svgrepo-com.svg'
import bronzeBadge from '../../assets/images/bronze-medal-svgrepo-com.svg'

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    textAlign: "center",
    position: "relative"
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
    top: "-2rem",
    left: "50%",
    transform: "translate(-50%)"
  }
}));

const badgeTiers = [
  {
    name: "Gold",
    svg: goldBadge,
    color: "#efc75e",
    upper: Number.POSITIVE_INFINITY,
    lower: 50
  },
  {
    name: "Silver",
    svg: silverBadge,
    color: "#e4e7e7",
    upper: 50,
    lower: 20
  },
  {
    name: "Bronze",
    svg: bronzeBadge,
    color: "#ed9d5d",
    upper: 20,
    lower: 5
  },
  {
    name: "",
    svg: "",
    color: "",
    upper: 5,
    lower: 0
  }
]

export default function CollectionCardGrid() {
  const classes = useStyles();
  const user = useContext(UserContext);
  const [userMovies, setUserMovies] = useState([]);
  const [badgeStatus, setBadgeStatus] = useState({
    name: "",
    svg: "",
    color: "",
    upper: 0,
    lower: 0,
    currentTotal: 0
  });

  const updateUsers = () => {
    API.getUserProfile(user.googleID)
      .then(({ data }) => setUserMovies(data.movies));
  }

  // Get collections movies on mount
  useEffect(() => {
    updateUsers()
  }, [])

  useEffect(() => {
    // Sum watched movies
    const newTotal = userMovies.filter(m => m.watched).length
    // Get appropriate badge data based on total movies watched
    const newBadge = badgeTiers.find(tier => newTotal >= tier.lower)
    // Update user's badge status
    setBadgeStatus({ ...newBadge, currentTotal: newTotal })
  }, [userMovies])

  const BadgeTooltip = withStyles((theme) => ({
    tooltip: {
      backgroundColor: badgeStatus.color,
      textAlign: 'left',
      color: '#000000',
      maxWidth: 250,
      fontSize: theme.typography.pxToRem(12),
      border: '1px solid #333333',
      boxShadow: '1px 1px 2px #cccccc',
      paddingBottom: 0
    },
  }))(Tooltip);

  return (
    <>
      <div className={classes.root}>
        {
          badgeStatus.name &&
          // Tooltip with badge info
          <BadgeTooltip
            title={
              <>
                <Typography color="inherit">{`You've earned a ${badgeStatus.name} badge!`}</Typography>
                <hr />
                <b>{`${badgeStatus.currentTotal}`}</b> movies watched
                {
                  badgeStatus.name !== "Gold" ?
                    <p>
                      <b>{`${badgeStatus.upper - badgeStatus.currentTotal}`}</b>
                      {" more until "}
                      <b>{`${badgeTiers.find(tier => tier.lower === badgeStatus.upper).name}`}</b>
                    </p>
                    : <p>Congrats... celebrate with a movie? 😉</p>
                }
              </>
            }
            placement="right-start"
            enterTouchDelay={200}
          >
            {/* Badge Image */}
            <img
              alt="User Badge"
              src={badgeStatus.svg}
              className={classes.badge}
              width={48}
              height={48}
            />
          </BadgeTooltip>

        }
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
