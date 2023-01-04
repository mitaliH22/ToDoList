import React from 'react';
import user from "./../assets/user.webp"

function ListView (props){  
  let today = new Date();
  let date = today.getDate() + "/" + parseInt(today.getMonth()+1)+"/"+today.getFullYear();
  
  const handlecheckbox =(e,item)=>{
    props.deleteSelected(e,item)
   
  }

    return (
      <li className="todo-card" data-object={props.index}>
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
            <div className="avatar">
              <img src={user} alt="user" />
            </div>
            <p>username</p>
          </span>
          <span>
            <div className="date">
              <i className="bi bi-calendar-check"></i>
            </div>
            <p>{date}</p>
          </span>
        </div>
      </li>
    );

}

export default ListView;