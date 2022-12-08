import React, { useEffect } from "react";
import Test from "./Test";
import $ from "jquery";
import "jquery-ui-dist/jquery-ui";


function List(props) {

  useEffect(() => {
    $(".sortable").sortable(({
      connectWith: ".sortable"
    }));
  },[]);
 

  return (
    <div className="list-container ">
      <ul className="todo-list sortable">
        {props.cards
          .filter((item) => item.taskType === props.cardName)
          .map((task) => {
            return (
              <Test
                cards={props.cards}
                updateCards={props.updateCards}
                value={task}
                deleteSelected={props.deleteSelected}
                key={task.id}
              />
            );
          })}
      </ul>
    </div>
  );
}

export default List;
