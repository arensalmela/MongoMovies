import React from "react";
import API from "../../utils/API";
import Nav from "../../components/Nav/index";
import Search from "../../components/Search";
import CardGrid from '../../components/CardGrid'

export default function Collections({ user }) {
  return (
    <>
      <Nav />
      <CardGrid/>
    </>
  );
}
