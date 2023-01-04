import React from "react";
import Cards from "./Components/Cards";
import Login from "./Components/Login";
import "././assets/App.css";
import "./assets/App.scss";
import { data} from "./helper/constants";
// import login from "./Components/Login";

export default function App () {
 
    return (

      <div className="wrapper">
        <Login />
      {/* <h1 className="App-heading">To Do List</h1>
        <div className="App">
          {data.map((item) => {
            return <Cards item={item} key={item.id} />;
          })}
        </div> */}
      </div>
    );
}
