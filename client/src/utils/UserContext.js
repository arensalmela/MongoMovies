import React from "react";

const UserContext = React.createContext({
  name: "",
  email: "",
  googleId: "",
  movies: [],
});

export default UserContext;
