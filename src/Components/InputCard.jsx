import React,{ useState} from 'react';

function InputCard(props){
  const [task, setTask] = useState("");
  const [category, setCategory] = useState("Work-In");

  const selectTask = (e) => {
     setTask(e.target.value);
  }
  const selectCategory = (e) =>{
    setCategory(e.target.value);
  }


  const addTask =()=>{
    props.setCards({ text: task, taskType: category }); 
    setTask("");
    setCategory("Work-In");
  }

  return (
    <>
      <div className="input-card">
        <div className="input-values">
          <input type="text" value={task} onChange={selectTask} />
          <select name="category" id="" onChange={selectCategory}>
            <option value="select">--Select--</option>
            <option value="ToDo-List">ToDo-List</option>
            <option value="Work-In">Work-In</option>
            <option value="Finished">Finished</option>
          </select>
        </div>
        <div className="input-btn">
          <button onClick={addTask}>Add</button>
          <button onClick={props.toggleCard}>Cancel</button>
        </div>
      </div>
    </>
  );
}

export default InputCard;