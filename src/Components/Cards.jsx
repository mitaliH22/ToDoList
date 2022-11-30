import React,{useState} from 'react';
import "./Cards.scss";
import InputCard from './InputCard';
import List from './List';

function Card(props){
    const [display , setDisplay] = useState(false);
    const toggleCard = () => {
      setDisplay(!display)
    }

    return (
      <div className="container">
        <div className="card-container">
          <div className="card-header">
            <h1>{props.text}</h1>
            <button onClick={toggleCard}>New Task</button>
          </div>
        </div>
        <div className="input-container">
          {display && <InputCard toggleCard={toggleCard}/>} 
        </div>
        {/* <div>
          <List />
        </div> */}
      </div>
    );
}

export default Card;