import React from "react";
import Dashboard from "./Components/Dashboard";
import Login from "./Components/Login";
import { Routes, Route} from 'react-router-dom';
import "././assets/App.css";
import "./assets/App.scss";
import SignUp from "./Components/SignUp";

export default function App () {
 
    return (
      <Routes>
        <Route path='/' element={<Login />}></Route>
        <Route path='dashboard' element={<Dashboard />}></Route>
        <Route path='signup' element={<SignUp />}></Route>
      </Routes>
    );
}
