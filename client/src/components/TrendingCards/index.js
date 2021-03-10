import React from "react";
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

  return (
    <>
    {/* Fix the formatting of the cards */}
      <Container>
        <Grid container margin = {2} spacing={3}>
          <Grid item xs={6}>
            <Card className={classes.root}>
              <CardHeader title="Title Here?" subheader="Released: XXDATEXX" />
              <CardMedia
                className={classes.media}
                image="/static/images/cards/paella.jpg"
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

          <Grid item xs={6}>
            <Card className={classes.root}>
              <CardHeader title="Title Here?" subheader="Released: XXDATEXX" />
              <CardMedia
                className={classes.media}
                image="/static/images/cards/paella.jpg"
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

        <Grid container spacing={3}>
          <Grid item xs={6}>
            <Card className={classes.root}>
              <CardHeader title="Title Here?" subheader="Released: XXDATEXX" />
              <CardMedia
                className={classes.media}
                image="/static/images/cards/paella.jpg"
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

          <Grid item xs={6}>
            <Card className={classes.root}>
              <CardHeader title="Title Here?" subheader="Released: XXDATEXX" />
              <CardMedia
                className={classes.media}
                image="/static/images/cards/paella.jpg"
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

        <Grid container spacing={3}>
          <Grid item xs={6}>
            <Card className={classes.root}>
              <CardHeader title="Title Here?" subheader="Released: XXDATEXX" />
              <CardMedia
                className={classes.media}
                image="/static/images/cards/paella.jpg"
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

          <Grid item xs={6}>
            <Card className={classes.root}>
              <CardHeader title="Title Here?" subheader="Released: XXDATEXX" />
              <CardMedia
                className={classes.media}
                image="/static/images/cards/paella.jpg"
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

        <Grid container spacing={3}>
          <Grid item xs={6}>
            <Card className={classes.root}>
              <CardHeader title="Title Here?" subheader="Released: XXDATEXX" />
              <CardMedia
                className={classes.media}
                image="/static/images/cards/paella.jpg"
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

          <Grid item xs={6}>
            <Card className={classes.root}>
              <CardHeader title="Title Here?" subheader="Released: XXDATEXX" />
              <CardMedia
                className={classes.media}
                image="/static/images/cards/paella.jpg"
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

        <Grid container spacing={3}>
          <Grid item xs={6}>
            <Card className={classes.root}>
              <CardHeader title="Title Here?" subheader="Released: XXDATEXX" />
              <CardMedia
                className={classes.media}
                image="/static/images/cards/paella.jpg"
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

          <Grid item xs={6}>
            <Card className={classes.root}>
              <CardHeader title="Title Here?" subheader="Released: XXDATEXX" />
              <CardMedia
                className={classes.media}
                image="/static/images/cards/paella.jpg"
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
