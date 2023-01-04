import React, { useEffect } from "react";
import Test from "./Test";
import $ from "jquery";
import "jquery-ui-dist/jquery-ui";


function List(props) {

  
  useEffect((props) => {
    $(".sortable").sortable({
      connectWith: ".sortable",
      start: function (event, ui) {
      ui.item.css("background", "#f3f3f3");
      ui.item.css("border", "3px solid #ccc"); 
      },
      stop: function (event, ui) {
        ui.item.css("background", "none");
        ui.item.css("border", "1px solid #ccc"); 
      },
    });
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
