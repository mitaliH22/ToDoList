import React from "react";
import Cards from "./Components/Cards";
import "././assets/App.css";
import "./assets/App.scss";
import {data} from "./helper/constants";


export default function App () {
 
    return (
        <div className="App">
          {data.map((item) => {
            return <Cards item={item} key={item.id} />;
          })}
        </div>
    );
}
