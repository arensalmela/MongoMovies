import React, { useEffect, useState } from "react";
import API from "../../utils/API";
import LoginHooks from "../Login/LoginHooks";

function Home({ user }) {
  const [trending, setTrending] = useState();
  //When user logs in, show them trending movies
  useEffect(() => {
    API.trending().then((response) => setTrending(response));
  });

  return (
    <>
      <div>{JSON.stringify(trending)}</div>
    </>
  );
}

export default Home;
