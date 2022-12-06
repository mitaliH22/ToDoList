import React,{useState} from 'react';
import "./../assets/Cards.scss";
import InputCard from './InputCard';
import List from './List';
import { items } from "./../helper/constants";

function Card(props){
    const [display , setDisplay] = useState(false);
    const [cards, setCards] = useState(items);

    const toggleCard = () => {
      setDisplay(!display)

    }

    const setCardHandler = (data) =>{
      setCards([...cards, data]);
      
    }

    const updateCards = (cardList) =>{
      setCards(cardList);
    }

 
    return (
      <div className="container">
        <div className="card-container">
          <div className="card-header">
            <h1>{props.item.name}</h1>
            <button onClick={toggleCard} className="newTask-btn">
              New Task
            </button>
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
        />
      </div>
    );
}

export default Card;