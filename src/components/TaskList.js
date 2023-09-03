import React from "react";
import Task from "./Task";

// First, we'll want to display all the tasks in our app

function TaskList({ tasks, onDelete }) {
  return (
    <div className="tasks">
      {tasks.map((tasks) => (
        <Task
          key={tasks.text}
          text={tasks.text}
          category={tasks.category}
          onDelete={onDelete}
        />
      ))}
    </div>
  );
}

export default TaskList;
