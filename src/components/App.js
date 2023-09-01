import React, {useState} from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";

import { CATEGORIES, TASKS } from "../data";
console.log("Here's the data you're working with");
console.log({ CATEGORIES, TASKS });

function App() {
  const [tasks,setTasks] = useState(TASKS);
  const [selectedCategory, setCategories] = useState("All")
  function handleTaskSubmit(task) {
    setTasks((previousTask)=>[...previousTask, task])
  }
  function handleCategoriesSelect(category) {
    setCategories(category)
  }
  function filterTasks() {
    return selectedCategory === "All" 
      ? tasks 
      : tasks.filter(task => task.category === selectedCategory);
  }
  function handleDelete(text) {
 const updateTask = tasks.filter((task)=>task.text !== text) // give semantic meaning
setTasks(updateTask);
};
  return (
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter onSelectCategory={handleCategoriesSelect}
      selectedCategory={selectedCategory} categories={CATEGORIES}/>
      <NewTaskForm onTaskFormSubmit={handleTaskSubmit}/>
      <TaskList tasks={filterTasks()}
      
      onDelete={handleDelete}/>
    </div>
  );
}

export default App;
