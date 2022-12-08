import React from 'react';


function ListView (props){  
  const handlecheckbox =(e,item)=>{
    props.deleteSelected(e,item)
   
  }

    return (
      <li className="todo-card">
        <div className="todo-card-content">
          <input
            type="checkbox"
            name="task-checkbox"
            className="task-checkbox"
            onChange={(e) => handlecheckbox(e, props.value)}
          />
          <div className="todo-card-top">
            <p className="task-description">{props.value.text}</p>
            <i className="bi bi-pencil-square" onClick={props.editTask}></i>
            <i
              className="bi bi-trash-fill"
              onClick={() => props.deletedTask(props.index)}
            ></i>
          </div>
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
    );

}

export default ListView;