import React from "react";
import { auth } from "../firebase";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";

const Login = () => {
  const handleLogin = (e) => {
    e.preventDefault()
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider)
      .then((result) => {
        // This gives you a Google Access Token. You can use it to access the Google API.
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;
        // The signed-in user info.
        const user = result.user;
        // IdP data available using getAdditionalUserInfo(result)
        // ...
      })
      .catch((error) => {
        // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;
        // The email of the user's account used.
        const email = error.customData.email;
        // The AuthCredential type that was used.
        const credential = GoogleAuthProvider.credentialFromError(error);
        // ...
      });
  };
  return (
    <div className="wrapper">
      <nav className="nav">
        <div className="nav-logo ">
          <img src="good.svg" width="100" height="60" alt="Logo" />
        </div>

        <div className="nav-button">
          <button className="btn white-btn">Sign In</button>
          <button className="btn" id="registerBtn">
            Sign Up
          </button>
        </div>
        <div className="nav-menu-btn">
          <i className="bx bx-menu" ></i>
        </div>
      </nav>

      <div className="form-box">
        <div className="login-container" id="login">
          <div className="top">
            <span>
              Don't have an account?{" "}
              <a href="#">
                Sign Up
              </a>
            </span>
            <header>Login</header>
          </div>
          <div className="input-box">
            <input
              type="text"
              className="input-field"
              placeholder="Username or Email"
            />
            <i className="bx bx-user"></i>
          </div>
          <div className="input-box">
            <input type="password" className="input-field" placeholder="Password" />
            <i className="bx bx-lock-alt"></i>
          </div>
          <div className="input-box">
            <input
              type="submit"
              id="loginBtn"
              className="submit"
              onClick={handleLogin}
              value="Sign In"
            />
          </div>
          <div className="two-col">
            <div className="one">
              <input type="checkbox" id="login-check" />
              <label htmlFor="login-check"> Remember Me</label>
            </div>
            <div className="two">
              <label>
                <a href="#">Forgot password?</a>
              </label>
            </div>
          </div>
        </div>

        <div className="register-container" id="register">
          <div className="top">
            <span>
              Have an account?{" "}
              <a href="#" >
                Login
              </a>
            </span>
            <header>Sign Up</header>
          </div>
          <div className="two-forms">
            <div className="input-box">
              <input type="text" className="input-field" placeholder="Firstname" />
              <i className="bx bx-user"></i>
            </div>
            <div className="input-box">
              <input type="text" className="input-field" placeholder="Lastname" />
              <i className="bx bx-user"></i>
            </div>
          </div>
          <div className="input-box">
            <input type="text" className="input-field" placeholder="Email" />
            <i className="bx bx-envelope"></i>
          </div>
          <div className="input-box">
            <input type="password" className="input-field" placeholder="Password" />
            <i className="bx bx-lock-alt"></i>
          </div>
          <div className="input-box">
            <input type="submit" className="submit" value="Register" />
          </div>
          <div className="two-col">
            <div className="one">
              <input type="checkbox" id="register-check" />
              <label htmlFor="register-check"> Remember Me</label>
            </div>
            <div className="two">
              <label>
                <a href="#">Terms & conditions</a>
              </label>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
