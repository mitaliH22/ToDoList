import React from 'react';

function ListView (props){  
    return (
      <div className="list-view">
        <input
          type="checkbox"
          name="task-checkbox"
          className="task-checkbox"
        />
        <li className="todo-card">
          <div className="todo-card-top">
            <p className="task-description">{props.value.text}</p>
            <i className="bi bi-pencil-square" onClick={props.editTask}></i>
            <i
              className="bi bi-trash-fill"
              onClick={() => props.deletedTask(props.index)}
            ></i>
          </div>
          <div className="todo-card-data">
            <span>
              <div className="avatar"></div>
              <p>username</p>
            </span>
            <span>
              <div className="date"></div>
              <p>date</p>
            </span>
          </div>
        </li>
      </div>
    );

}

export default ListView;