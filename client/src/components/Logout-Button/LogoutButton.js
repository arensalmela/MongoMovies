import "../../components/Login/Login.css";
import GoogleIcon from "../../assets/images/googleicon.svg";
import React from "react";
import { useGoogleLogout } from "react-google-login";

const clientId =
  "123454472770-7dr95o1f2blqnbvudd27d9g4tp592roi.apps.googleusercontent.com";

export default function LogoutButton() {
  const onLogoutSuccess = (res) => {
    alert("You have Logged Out");
  };

  

  const { signOut } = useGoogleLogout({
    clientId,
    onLogoutSuccess,
  });

  return (
    <button onClick={signOut} className="button">
      <img src={GoogleIcon} alt="google icon" className="icon"></img>
      <span className="buttonText">Logout</span>
    </button>
  );
}
