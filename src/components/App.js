import React, {useState} from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";

import { CATEGORIES, TASKS } from "../data";
console.log("Here's the data you're working with");
console.log({ CATEGORIES, TASKS });

function App() {
  const [tasks,setTasks] = useState(TASKS);
  const [categories, setCategories] = useState("All")
  function handleTaskSubmit()
  function handleCategoriesSelect()
  function filterTasks()
  function handleDelete(text) {
 const updateTask = tasks.filter((task)=>task.text !== text) // give semantic meaning
setTasks(updateTask);
};

  }
  return (
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter />
      <NewTaskForm />
      <TaskList key={TASKS}
      onDelete={handleDelete}/>
    </div>
  );
}

export default App;
