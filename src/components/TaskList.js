import React from "react";
import Task from "./Task";

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
