import React from "react";
import CollectionCards from "../../components/CollectionCards"
import PageTitle from "../../components/PageTitle";

export default function Home() {

  return (
    <>
      <PageTitle title="Your Movie Collections" />
      <CollectionCards />
    </>
  );
};
