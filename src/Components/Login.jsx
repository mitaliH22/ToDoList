import "../assets/Login.scss";
import loginImg from "./../assets/loginP.png";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

function Login() {
  const [username , setUsername] = useState("");
  const [password , setPassword] = useState("");


  const users = [{ username: "test", password: "testpassword" }];

  const navigate = useNavigate();
  const handleSubmit = (e) =>{
    e.preventDefault();
    const account = users.find((user) => user.username === username);
    if(account && account.password === password){
      localStorage.setItem("authenticated", true);
      navigate("dashboard");
    }else{
      alert("Please enter correct details")
    }
  }
  
  return (
    <div className="login-container">
      <form onSubmit={handleSubmit}>
        <div className="login-top-text">
          <h1>Welcome Back</h1>
          <p className="welcome">Please enter your details</p>
        </div>
        <div>
          <div className="entries">
            <label htmlFor="username">Username</label>
            <input
              type="text"
              placeholder="Enter your username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          <div className="entries">
            <label htmlFor="password">Password</label>
            <input type="password" placeholder="Enter your password" onChange={(e) => setPassword(e.target.value)}/>
          </div>
          <div className="entries">
            <a href="a" className="forget-pwd">
              Forget Password?
            </a>
            <button>Login</button>
          </div>
          <p className="entries register">
            Not registered yet?
            <Link to="/signup">
              Create an account<i class="bi bi-arrow-up-right"></i>
            </Link>
          </p>
        </div>
      </form>
      <div className="form-img">
        <img src={loginImg} alt="LoginImage" />
      </div>
     
    </div>
  );
}

export default Login;
