import React from "react";
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";
import MovieCard from "../MovieCard";
// import logoRed from "../../assets/images/logo-red.svg"

export default function TrendingCards({ trending }) {

  return (
    <>
      {/* Fix the formatting of the cards */}
      <Container>
        <Grid container margin={2} spacing={3} align="center" justify="center">
          {
            trending.length && trending.map(movie => (
              <MovieCard movie={movie} key={movie.id} />
            ))
          }
        </Grid>
      </Container>
    </>
  );
}
