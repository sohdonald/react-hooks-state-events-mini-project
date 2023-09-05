import React, { useState } from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";

import { CATEGORIES, TASKS } from "../data";
console.log("Here's the data you're working with");
console.log({ CATEGORIES, TASKS });

function App() {
  // pass down the task data from App to TaskList
  const [tasks, setTasks] = useState(TASKS);

  // Pass the list of categories to this component from App
  const [selectedCategory, setCategories] = useState("All");
  // If the button for "All" is selected, all the tasks should be displayed.

  function handleTaskSubmit(task) {
    setTasks((previousTask) => [...previousTask, task]);
  }

  function handleCategoriesSelect(category) {
    setCategories(category);
  }
  function filterTasks() {
    // The list of tasks being displayed should be filtered,
    // so that only tasks that match the category that was clicked are displayed.
    return selectedCategory === "All"
      ? tasks
      : tasks.filter((task) => task.category === selectedCategory);
  }
  function handleDelete(text) {
    const updateTask = tasks.filter((task) => task.text !== text); // give semantic meaning
    setTasks(updateTask);
  }
  return (
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter
        onSelectCategory={handleCategoriesSelect}
        // onSelectCategory is a prop from CategoryFilter, it is given the value of handleCategoriesSelect
        // handleCategoriesSelect controls the STATE from the category array being displayed
        selectedCategory={selectedCategory}
        categories={CATEGORIES}
        // selectedCategory is a prop from CategoryFilter, {selectedCategory} is the state being displayed
        // what we see on the screen is the CURRENT STATE
      />

      <NewTaskForm
        onTaskFormSubmit={handleTaskSubmit}
        categories={CATEGORIES.filter((category) => category !== "All")}
        // this makes select elements out of all the elements in CATEGORIES array except for "All"
      />
      <TaskList tasks={filterTasks()} onDelete={handleDelete} />
    </div>
  );
}

export default App;
