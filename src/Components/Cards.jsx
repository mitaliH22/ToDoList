import React,{useEffect, useState} from 'react';
import "./../assets/Cards.scss";
import InputCard from './InputCard';
import List from './List';

function Card(props){
  const [display, setDisplay] = useState(false);
  const [cards, setCards] = useState(JSON.parse(localStorage.getItem("tasks")) || []);
  const [deleteAll, setdeleteAll] = useState([]);

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(cards));
  }, [cards]);


  const toggleCard = () => {
    setDisplay(!display);
  };

  const setCardHandler = (data) => {
    setCards([...cards, data]);
  };

  const updateCards = (cardList) => {
    setCards(cardList);
  };

  const deleteSelected = (e, arr) => {
    const value = arr;
    const check = e.target.checked;
    const tasks = deleteAll;

    if (check) {
      setdeleteAll([...tasks, value]);
    } else {
      setdeleteAll(tasks.filter((e) => e !== value));
    }
  };

  const del = () => {
    const delTasks = cards.filter(
      (tasks) => !deleteAll.find((t) => tasks.id === t.id)
    );
    setCards(delTasks);
  };

  return (
    <div className="container">
      <div className="card-container">
        <div className="card-header">
          <h1>{props.item.name}</h1>
          <div className="card-header-btns">
            <button onClick={toggleCard} className="newTask-btn">
              New Task
            </button>
            <button className="deleteTask-btn" onClick={del}>
              Delete Selected
            </button>
          </div>
        </div>
      </div>
      <div className="input-container">
        {display && (
          <InputCard toggleCard={toggleCard} setCards={setCardHandler} />
        )}
      </div>
      <List
        cardName={props.item.name}
        cards={cards}
        updateCards={updateCards}
        deleteSelected={deleteSelected}
        del={del}
      />
    </div>
  );
}

export default Card;