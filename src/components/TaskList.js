import React from "react";
import Task from "./Task";

function TaskList({tasks, onHandleDelete}) {

  console.log('Tasks:', tasks)

  const displayTasks = tasks.map(task => {
    return (
      <Task 
        key={task.id} 
        id={task.id}
        category={task.category}
        text={task.text}
        onHandleDelete={onHandleDelete}
      />
    )
  })
  return (
    <div className="tasks">
      {displayTasks}
    </div>
  );
}

export default TaskList;
