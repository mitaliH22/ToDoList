import React from 'react'
import Cards from "./Cards";
import { data } from "../helper/constants";

function Dashboard() {
  return (
    <div className="App">
      {data.map((item) => {
        return <Cards item={item} key={item.id} />;
      })}
    </div>
  );
}

export default Dashboard