import React,{useEffect, useState} from 'react'
import "../assets/Signup.scss"
import signup from "./../assets/loginP.png";

function SignUp() {
const [firstName , setfirstName] = useState();
const [lastName , setlastName] = useState();
const [username , setusername] = useState();
const [password , setpassword] = useState("");
const [user , setuser] = useState(JSON.parse(localStorage.getItem('user')) || []);

const random = Math.floor(Math.random() * 100);

useEffect(() => {
  localStorage.setItem("user", JSON.stringify(user));
}, [user]);

const passwordValidate = (pwd) => {
  return (
    /[A-Z]/.test(pwd) && /[0-9]/.test(pwd) && /^[A-Za-z0-9]{7,13}$/.test(pwd)
  );
};

const setuserhandle = (data) =>{
  setuser([...user, data]);
}

const handleSubmit = (e) =>{
  e.preventDefault();
   var error = document.getElementById("errorMsg");
  if(firstName && lastName && username && password){
    if (passwordValidate(password)){

      setuserhandle({
        id: random,
        firstName: firstName,
        lastName: lastName,
        username: username
      });
      setfirstName("");
      setlastName("");
      setusername("");
      setpassword("");
      console.log(firstName, lastName, username);
    }else{
      error.textContent = "Please enter a valid password"
      error.style.color= "red"
    } 
  }
  else{
    alert("Please enter all the details")
    setfirstName("");
    setlastName("");
    setusername("");
    setpassword("");
  }
}
  return (
    <>
      <div className="signup-container">
        <div>
          <img src={signup} alt="SignupImg" />
        </div>
        <form action="" onSubmit={handleSubmit} id="signupForm">
          <h1>Create Account</h1>
          <div className="signup-form-groups">
            <label htmlFor="firstName">First Name</label>
            <input
              type="text"
              value={firstName}
              onChange={(e) => setfirstName(e.target.value)}
            />
          </div>
          <div className="signup-form-groups">
            <label htmlFor="lastName">Last Name</label>
            <input
              type="text"
              value={lastName}
              onChange={(e) => setlastName(e.target.value)}
            />
          </div>
          <div className="signup-form-groups">
            <label htmlFor="username">Username</label>
            <input
              type="text"
              value={username}
              onChange={(e) => setusername(e.target.value)}
            />
          </div>
          <div className="signup-form-groups">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              onChange={(e) => setpassword(e.target.value)}
            />
            <span id="errorMsg"></span>
          </div>
          <div className="signup-form-groups">
            <label htmlFor="password">Confirm Password</label>
            <input type="password"/>
          </div>
          <div className="signup-form-btn">
            <button>Create Account</button>
          </div>
        </form>
      </div>
    </>
  );
}

export default SignUp;