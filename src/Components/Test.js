import React, { useState } from "react";
import ListView from "./ListView";
import EditTask from "./EditTask";

function Test(props) {
  const [activeTab, setActiveTab] = useState(true);

  const editTask = () => {
    setActiveTab(!activeTab);
  };

  const deletedTask = (id) => {
    const removeItem = props.cards.filter((task) => {
      return task.id !== id;
    });
    props.updateCards(removeItem);
  };


  return activeTab ? (
    <>
      <ListView
        value={props.value}
        editTask={editTask}
        index={props.value.id}
        deletedTask={deletedTask}
        deleteSelected={props.deleteSelected}
      />
    </>
  ) : (
    <EditTask editTask={editTask} value={props.value} />
  );
}

export default Test;
