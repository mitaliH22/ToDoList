import React from "react";
import Cards from "./Components/Cards";
import "./App.css";
import "./App.scss";

export default function App () {
    return (
      <div className="App">
        <Cards text={"ToDo-List"} />
        <Cards text={"Work-In"} />
        <Cards text={"Finished"} />
      </div>
    );
}
