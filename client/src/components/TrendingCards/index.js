import React, {useEffect, useState} from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";
import CardActions from "@material-ui/core/CardActions";
import IconButton from "@material-ui/core/IconButton";
import FavoriteIcon from "@material-ui/icons/Favorite";
import AddIcon from "@material-ui/icons/Add";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import API from '../../utils/API';

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 345
  },
  media: {
    height: 0,
    paddingTop: "56.25%" // 16:9
  },
  expand: {
    transform: "rotate(0deg)",
    marginLeft: "auto",
    transition: theme.transitions.create("transform", {
      duration: theme.transitions.duration.shortest
    })
  }
}));

export default function TrendingCards() {
  const classes = useStyles();
  const [trending, setTrending] = useState([]);
  
  useEffect(() => {
    API.trending()
      .then(data => setTrending(data.results));
  })
  

  return (
    <>
    {/* Fix the formatting of the cards */}
      <Container>
        <Grid container margin = {2} spacing={3}>
              {
                trending?.map(movie => {
                return (
          <Grid item xs={6}>
            <Card className={classes.root} key={movie.id}>
              <CardHeader title={movie.results.title} subheader={movie.results.release_date} />
              <CardMedia
                className={classes.media}
                image={movie.results.poster_path}
                title="Movie poster"
              />
              <CardActions disableSpacing>
                <IconButton aria-label="add to favorites">
                  <FavoriteIcon />
                </IconButton>
                <IconButton aria-label="share">
                  <AddIcon />
                </IconButton>
              </CardActions>
            </Card>
          </Grid>
                )
              })
          }

            <Grid item xs={6}>
            <Card className={classes.root}>
              <CardHeader title="Title Here?" subheader="Released: XXDATEXX" />
              <CardMedia
                className={classes.media}
                image="../../assets/images/logo-red.svg"
                title="Paella dish"
              />
              <CardActions disableSpacing>
                <IconButton aria-label="add to favorites">
                  <FavoriteIcon />
                </IconButton>
                <IconButton aria-label="share">
                  <AddIcon />
                </IconButton>
              </CardActions>
            </Card>
          </Grid>
        </Grid>
      </Container>
    </>
  );
}
