import React, { useState } from "react";
import ListView from "./ListView";
import EditTask from "./EditTask";

function Test(props) {
  const [activeTab, setActiveTab] = useState(true);
  // const [checked , setCheckedTask] = useState(false);

  const editTask = () => {
    setActiveTab(!activeTab);
  };

  const deletedTask = (id) => {
    const removeItem = props.cards.filter((task) => {
      return task.id !== id;
    });

    console.log(removeItem);
    props.updateCards(removeItem);
  };

  // const handleChange=(e)=>{
  //   console.log(e.target)
  // }

  return activeTab ? (
    <>
      <ListView
        value={props.value}
        editTask={editTask}
        index={props.value.id}
        deletedTask={deletedTask}
        
      />
    </>
  ) : (
    <EditTask editTask={editTask} value={props.value} />
  );
}

export default Test;
