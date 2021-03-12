import { Container } from "@material-ui/core";
import React from "react";
import CollectionCards from "../../components/CollectionCards"
// import API from "../../utils/API";

export default function Home() {

  return (
    <>
      <h1>Your Movie Collections</h1>
        <CollectionCards />
    </>
  );
};
