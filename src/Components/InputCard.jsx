import React,{ useState} from 'react';

function InputCard(props){
   const [visible , setVisible] = useState(false);

  // const newTask = () => {
  //     setVisible(true);
  //     props.toggleCard();
  // }
  const [task, setTask] = useState();

  const addTask = () => {
    
  }
  return (
    <>
      <div className="input-card">
        <div className="input-values">
          <input
            type="text"
            value={task}
            onChange={(e) => setVisible(e.target.value)}
          />
          <select name="category" id="">
            <option value="ToDo-List">ToDo-List</option>
            <option value="Work-In">Work-In</option>
            <option value="Finished">Finished</option>
          </select>
        </div>
        <div className="input-btn">
          <button>Add</button>
          <button onClick={props.toggleCard}>Cancel</button>
        </div>
      </div>
    </>
  );
}

export default InputCard;