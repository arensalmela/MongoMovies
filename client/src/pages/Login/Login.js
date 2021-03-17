// Referenced npm react-google-login
import "./Login.css";
import GoogleIcon from "../../assets/images/googleicon.svg";
import React from "react";
import { useGoogleLogin } from "react-google-login";
//import { refreshTokenSetup } from "react-google-login"
import API from "../../utils/API";
import LandingWelcome from "../../components/LandingWelcome";
import CssBaseline from "@material-ui/core/CssBaseline";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";

const clientId =
  "123454472770-80e9ibd1tkksfcqi1i7cv3u0gvfb0bqb.apps.googleusercontent.com";

const useStyles = makeStyles((theme) => ({
  root: {
    height: "100vh",
  },
  image: {
    backgroundImage:
      "url(https://images.unsplash.com/photo-1458053688450-eef5d21d43b3?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=752&q=80)",
    backgroundRepeat: "no-repeat",
    backgroundColor:
      theme.palette.type === "light"
        ? theme.palette.grey[50]
        : theme.palette.grey[900],
    backgroundSize: "cover",
    backgroundPosition: "center",
  },
  paper: {
    margin: theme.spacing(8, 4),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
}));

function Login({ setUser, type}) {
  const classes = useStyles();

  const onSuccess = (res) => {
    console.log("[Login Success] currentUser:", res.profileObj);
    //refreshTokenSetup(res);
    API.newUser(res.profileObj)
      .then((res) => setUser(res.data))
      .catch((err) => console.log(err));
  };

  const onFailure = (res) => {
    console.log("[Login Failed] res:", res);
  };

  const { signIn } = useGoogleLogin({
    onSuccess,
    onFailure,
    clientId,
    isSignedIn: true,
    accessType: "offline",
  });

  return (
    <>
      <Grid container component="main" className={classes.root}>
        <CssBaseline />
        <Grid item xs={false} sm={4} md={7} className={classes.image} />
        <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
          <div className={classes.paper}>
            <LandingWelcome/>
            <button onClick={signIn} className="button">
              <img src={GoogleIcon} alt="google icon" className="icon"></img>
              <span className="buttonText">{type} With Google</span>
            </button>
          </div>
        </Grid>
      </Grid>
      {/* 
      <PageTitle title={`${type} ${type === 'Login' ? 'to your' : 'for a new'} account`} />

      <button onClick={signIn} className="button">
        <img src={GoogleIcon} alt="google icon" className="icon"></img>
        <span className="buttonText">{type} With Google</span>
      </button> */}
    </>
  );
}

export default Login;
