import React, { useContext } from "react";
import TrendingCardGrid from "../../components/TrendingCardGrid";
import PageTitle from "../../components/PageTitle/";
import UserContext from '../../utils/UserContext';
import Scroll from "../../components/ScrollTop/ScrollTop";

export default function Home() {
  const user = useContext(UserContext)

  return (
    <>
      <PageTitle title={`Welcome, ${user.name}!`} />
      <TrendingCardGrid />
      <Scroll showBelow={250}/>
    </>
  );
};
