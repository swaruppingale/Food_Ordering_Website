import React, { useEffect } from "react";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { auth } from "./firebase.js";
import { useNavigate } from "react-router-dom";
import "./login.css"


const Login = () => {
  const navigate = useNavigate()
  const handleLogin = (e) => {

    e.preventDefault();
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider)
      .then((result) => {
        // This gives you a Google Access Token. You can use it to access the Google API.
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;
        // The signed-in user info.
        const user = result.user;
        navigate("/home")
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
    <div className="background">
    <div className="wrapper">
      <nav className="nav">
        <div className="nav-logo ">
        <img src="./images/logo11.png" width="100" height="60" alt="Logo" />
        </div>

        
        
        <div className="nav-menu-btn">
          <i className="bx bx-menu"></i>
        </div>
      </nav>

      <div className="form-box">
        <div className="login-container" id="login">
          <div className="top">
            <span>
               <a href="#"></a>
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
            <input
              type="password"
              className="input-field"
              placeholder="Password"
            />
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
              
              <label htmlFor="login-check"></label>
            </div>
            <div className="two">
              <label>
                <a href="#"></a>
              </label>
            </div>
          </div>
        </div>

        <div className="register-container" id="register">
          <div className="top">
            <span>
              Have an account? <a href="#">Login</a>
            </span>
            <header>Sign Up</header>
          </div>
          <div className="two-forms">
            <div className="input-box">
              <input
                type="text"
                className="input-field"
                placeholder="Firstname"
              />
              <i className="bx bx-user"></i>
            </div>
            <div className="input-box">
              <input
                type="text"
                className="input-field"
                placeholder="Lastname"
              />
              <i className="bx bx-user"></i>
            </div>
          </div>
          <div className="input-box">
            <input type="text" className="input-field" placeholder="Email" />
            <i className="bx bx-envelope"></i>
          </div>
          <div className="input-box">
            <input
              type="password"
              className="input-field"
              placeholder="Password"
            />
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
    </div>
    
  );
};
export default Login;
