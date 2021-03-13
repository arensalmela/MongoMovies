import React from "react";
import CollectionCards from "../../components/CollectionCards"
import PageTitle from "../../components/PageTitle";
import Scroll from "../../components/ScrollTop/ScrollTop"

export default function Home() {

  return (
    <>
      <PageTitle title="Your Movie Collections" />
      <CollectionCards />
      <Scroll showBelow={250}/>
    </>
  );
};
