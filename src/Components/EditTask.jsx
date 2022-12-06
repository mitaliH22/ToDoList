import React from 'react';
import { useState } from 'react';

function EditTask(props){
  const [editTask, seteditTask] = useState(props.value.text);

  const handleEditTask=(e)=>{
    seteditTask(e.target.value);
    props.value.text = e.target.value;
  }
  
    return (
      <div className="edit-container">
        <div className="edit-container-top">
          <textarea name="" defaultValue={editTask} onChange={handleEditTask}></textarea>
          <button onClick={props.editTask}>Save</button>
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
      </div>
    );
}

export default EditTask;