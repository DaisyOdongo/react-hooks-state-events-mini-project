import React from "react";
import Task from "./Task";

function TaskList({tasks, handleDeleteTasks}) {
  console.log ("My tasks Element", tasks)
  return (
    <div className="tasks">
      {tasks.map((task) =>(
        <Task 
          key={tasks.text} 
          text={tasks.text} 
          handleDeleteTasks={handleDeleteTasks} 
          category={tasks.category} 
        />
      ))}
    </div>
  );
}

export default TaskList;
