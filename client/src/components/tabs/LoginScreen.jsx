import React, { Component } from "react";
import TopMenu from "../TopMenu";
import GoogleLogin from "react-google-login";
import "./LoginScreen.css";

class LoginScreen extends Component {
  render() {
    const responseGoogle = (res) => {
      console.log(res);
    };

    return (
      <div>
        <TopMenu isLogin="true" />
        <div className="google-login-button">
          <GoogleLogin
            clientId={process.env.REACT_APP_FIREBASE_CLIENT_ID}
            buttonText="Login with Google"
            onSuccess={responseGoogle}
            onFailure={responseGoogle}
            cookiePolicy={"single_host_origin"}
          />
        </div>
      </div>
    );
  }
}

export default LoginScreen;
