import React from "react";
import "../assets/Login.scss"
import loginImg from "./../assets/loginP.png";

function login() {
  return (
    <div className="login-container">
      <form action="">
        <div className="login-top-text">
          <h1>Welcome Back</h1>
          <p className="welcome">Please enter your details</p>
        </div>
        <div className="entries">
          <label htmlFor="Email">Email</label>
          <input type="email" placeholder="johndoe@email.com" />
        </div>
        <div className="entries">
          <label htmlFor="password">Password</label>
          <input type="password" placeholder="Enter your password" />
        </div>
        <div className="entries">
          <a href="a" className="forget-pwd">Forget Password?</a>
          <button>Login</button>
        </div>
        <p className="entries register">
          Not registered yet?
          <a href="a">
            Create an account<i class="bi bi-arrow-up-right"></i>
          </a>
        </p>
      </form>
      <div className="form-img">
        <img src={loginImg} alt="LoginImage" />
      </div>
    </div>
  );
}

export default login;
