import React, { useEffect, useState } from 'react'
import Cards from "./Cards";
import { data } from "../helper/constants";
import { useNavigate } from 'react-router-dom';
import Navbar from './Navbar';
import InputCard from "./InputCard";

function Dashboard() {
  const [authenticated, setAuthenticated] = useState(null);
  const [display, setDisplay] = useState(false);
  const [cards, setCards] = useState(
    JSON.parse(localStorage.getItem("tasks")) || []
  );

  const navigate = useNavigate();
  useEffect(()=>{
    const loggedInUser = localStorage.getItem("authenticated") || false;
    setAuthenticated(loggedInUser);
  },[]);

  const toggleCard = () => {
    setDisplay(!display);
  };

  const setCardHandler = (data) => {
    setCards([...cards, data]);
    localStorage.setItem("tasks", JSON.stringify(cards));
    console.log("setCardHandler", data);
  };

  

  if(!authenticated){
    return navigate("/");
  }else{
    return (
      <div>
        <Navbar />
        <div className="header-container">
          <div className="header-top">
            <h2>Corporate TodoList</h2>
            <button onClick={toggleCard} className="newTask-btn">
              New Task
            </button>
          </div>
          <div className="input-container">
            {display && (
              <InputCard toggleCard={toggleCard} setCards={setCardHandler} />
            )}
          </div>
        </div>
        <div className="App">
          {data.map((item) => {
            return <Cards item={item} key={item.id} cards={cards}/>;
          })}
        </div>
      </div>
    );
  }
}

export default Dashboard