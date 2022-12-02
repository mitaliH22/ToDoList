import React from "react";

function List(props) {
  var today = new Date(),
  date = today.getDate() + "/" + (today.getMonth()+1) + "/" + today.getFullYear();

  return (
    <div className="list-container">
      <ul>
        {props.cards
          .filter((item) => item.taskType === props.cardName)
          .map((task, i) => {
            return (
              <li className="todo-card" key={i}>
                <p className="task-description">{task.text}</p>
                <div className="todo-card-data">
                  <span>
                    <div className="avatar"></div>
                    <p>username</p>
                  </span>
                  <span>
                    <div className="date"></div>
                    <p>{date}</p>
                  </span>
                </div>
              </li>
            );
          })}
      </ul>
    </div>
  );
}

export default List;
