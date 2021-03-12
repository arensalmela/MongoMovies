import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";
import CardActions from "@material-ui/core/CardActions";
import IconButton from "@material-ui/core/IconButton";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import API from '../../utils/API';
import { CardContent } from "@material-ui/core";
// import logoRed from "../../assets/images/logo-red.svg"
import VisibilityIcon from '@material-ui/icons/Visibility';
import ThumbUpIcon from '@material-ui/icons/ThumbUp';
import ThumbDownIcon from '@material-ui/icons/ThumbDown';

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 345
  },
  media: {
    height: "300px",
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

export default function CollectionCards() {
  const classes = useStyles();
  const [trending, setTrending] = useState([]);

  useEffect(() => {
    API.trending()
      .then(({ data }) => setTrending(data.results));
  }, [])


  return (
    <>
      {/* Fix the formatting of the cards */}
      <Container>
        <Grid container margin={2} spacing={3} align="center" justify="center">
          {
            trending.length && trending.map(movie => {
              return (
                <Grid item xs={6} key={movie.id}>
                  <Card className={classes.root}>
                    <CardHeader title={movie.title} subheader={movie.release_date} />
                    <CardMedia
                      className={classes.media}
                      image={`https://image.tmdb.org/t/p/original${movie.poster_path}`}
                      title="Movie poster"
                    />
                    <CardContent>
                      <details>
                        <summary>Overview</summary>
                        {movie.overview}
                      </details>
                    </CardContent>
                    <CardActions disableSpacing>
                      <IconButton aria-label="add to favorites">
                        <VisibilityIcon />
                      </IconButton>
                      
                    </CardActions>
                  </Card>
                </Grid>
              )
            })
          }
        </Grid>
      </Container>
    </>
  );
}
