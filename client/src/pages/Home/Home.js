import React, { useContext } from "react";
import CardGrid from "../../components/CardGrid";
// import API from "../../utils/API";
import UserContext from '../../utils/UserContext';

export default function Home() {
  const user = useContext(UserContext)

  return (
    <>
      <h1>Welcome, {user.name}!</h1>
      <CardGrid />
    </>
  );
};
