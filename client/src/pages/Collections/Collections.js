import React from "react";
import CollectionCardGrid from "../../components/CollectionCardGrid";
// import CollectionCards from "../../components/CollectionCards";
import PageTitle from "../../components/PageTitle";
import Scroll from "../../components/ScrollTop/ScrollTop";

export default function Home() {

  return (
    <>
      <PageTitle title="Your Movie Collections" />
      <CollectionCardGrid />
      <Scroll showBelow={250} />
    </>
  );
};
