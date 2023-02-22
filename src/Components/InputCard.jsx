import React,{ useState} from 'react';

function InputCard(props){
  const [task, setTask] = useState("");
  const [category, setCategory] = useState("Work-In");

  const random = Math.floor(Math.random() * 100);

  const selectTask = (e) => {
     setTask(e.target.value);
  }
  const selectCategory = (e) =>{
    setCategory(e.target.value);
  }

  const addTask =()=>{
    props.setCards({id:random, text: task, taskType: category }); 
    setTask("");
    setCategory("select");
    props.toggleCard();
  }

  return (
    <>
      <div className="input-card">
          <input
            type="text"
            value={task}
            onChange={selectTask}
            className="input-values-field"
          />
          <select
            name="category"
            id=""
            onChange={selectCategory}
            className="input-values-field"
          >
            <option value="select">--Select--</option>
            <option value="ToDo-List">ToDo-List</option>
            <option value="Work-In">Work-In</option>
            <option value="Finished">Finished</option>
          </select>
        
        <div className="input-btn">
          <button onClick={addTask} className="addTask">
            Add
          </button>
          <button onClick={props.toggleCard} className="cancelTask">
            Cancel
          </button>
        </div>
      </div>
    </>
  );
}

export default InputCard;