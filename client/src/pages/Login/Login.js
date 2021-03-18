// Referenced npm react-google-login
import "./Login.css"
import GoogleIcon from "../../assets/images/googleicon.svg"
import React, { useEffect } from "react";
import { useGoogleLogin } from "react-google-login";
//import { refreshTokenSetup } from "react-google-login"
import API from "../../utils/API";
import PageTitle from "../../components/PageTitle";

const clientId = "123454472770-80e9ibd1tkksfcqi1i7cv3u0gvfb0bqb.apps.googleusercontent.com";

function Login({ user, setUser, type }) {
  const onSuccess = (res) => {
    console.log("[Login Success] currentUser:", res.profileObj);
    //refreshTokenSetup(res);
    localStorage.setItem("id", JSON.stringify(res.profileObj))
      API.newUser(res.profileObj)
        .then((res) => setUser(res.data))
        .catch(err => console.log(err))
      
  };
  // useEffect(() => {
  //   console.log(user)
  // }, [user]);

  // const storeLocal = (res) => {
  //   localStorage.setItem("id", res.profileObj);
  // }

  const onFailure = (res) => {
    console.log("[Login Failed] res:", res);
  };

  const { signIn } = useGoogleLogin({
    onSuccess,
    onFailure,
    clientId,
    isSignedIn: true,
    accessType: "offline"
  });

  return (
    <>
      <PageTitle title={`${type} ${type === 'Login' ? 'to your' : 'for a new'} account`} />
      <button onClick={signIn} className="button">
        <img src={GoogleIcon} alt="google icon" className="icon"></img>
        <span className="buttonText">{type} With Google</span>
      </button>
    </>
  );
}

export default Login;