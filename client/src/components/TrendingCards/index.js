import React, { useEffect, useState } from "react";
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";
import API from '../../utils/API';
import MovieCard from "../MovieCard";
// import logoRed from "../../assets/images/logo-red.svg"

export default function TrendingCards() {
  const [trending, setTrending] = useState([]);

  useEffect(() => {
    API.trending()
      .then(({ data }) => setTrending(data.results));
  }, [])

  return (
    <>
      {/* Fix the formatting of the cards */}
      <Container>
        <Grid container margin={2} spacing={3}>
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
