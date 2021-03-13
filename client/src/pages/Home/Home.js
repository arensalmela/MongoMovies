import React, { useContext } from "react";
import CardGrid from "../../components/CardGrid";
import PageTitle from "../../components/PageTitle";
import UserContext from '../../utils/UserContext';
import Scroll from "../../components/ScrollTop/ScrollTop";

export default function Home() {
  const user = useContext(UserContext)

  return (
    <>
      <PageTitle title={`Welcome, ${user.name}!`} />
      <CardGrid />
      <Scroll showBelow={250}/>
    </>
  );
};
