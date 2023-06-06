import React from 'react'
import { Link } from 'react-router-dom'


function Navbar() {

    const logout = () =>{
        if(window.confirm('Are you sure you want to log out?')){
            localStorage.removeItem("authenticated");
             window.location.href = "/";
        }else{
            console.log("logout failed")
        }
    }
  return (
    <nav>
        <Link onClick={logout}>Logout</Link>
    </nav>
  )
}

export default Navbar