import React from "react";
import Test from "./Test";

function List(props) {

  return (
    <div className="list-container">
      
      <ul className="todo-list">
        {props.cards
          .filter((item) => item.taskType === props.cardName)
          .map((task) => {
            return (
              <Test
                cards={props.cards}
                updateCards={props.updateCards}
                value={task}
              />
            );
          })}
      </ul>
    </div>
  );
}

export default List;
