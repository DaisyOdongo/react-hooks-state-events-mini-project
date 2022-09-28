import React, {useState} from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";

import { CATEGORIES, TASKS } from "../data";
console.log("Here's the data you're working with");
console.log({ CATEGORIES, TASKS });

function App() {
  const [tasks, setTasks] = useState(TASKS);
  const [selected, setSelected] = useState("All")
  const handleDeleteTasks = (tasks) =>{
    console.log(tasks);
    let newTasks =tasks.filter((t) => t.text !== tasks);
    setTasks(newTasks);
  };
  return (
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter categories={CATEGORIES} selected={selected} handleClick={setSelected} />
      <NewTaskForm categories={CATEGORIES} selected={selected} handleClick={setSelected} />
      <TaskList tasks={tasks} handleDeleteTasks={handleDeleteTasks} />
    </div>
  );
}

export default App;
