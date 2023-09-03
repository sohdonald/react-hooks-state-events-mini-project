import React, { useState } from "react";

function NewTaskForm({ category, selectedCategory, onSelectCategory }) {
  const [formData, setFormData] = useState({
    text: "",
    category: categories[0],
  });
  function handleSubmit(category) {
    category.preventDefault();
    setFormData([category.option !== "All"]);
    // what does handleSubmit suppose to do?   
    // update this component to display <option> elements 
    // for each category inside of the <select> element 
    // except the "All" category, so that the user can select a category 
    // when adding a new task.
    // When the form is submitted, 
    // add a new task to the list 
    // with the text and category from the form. 
    // For the tests for this feature to pass, 
    // you'll need a callback prop named onTaskFormSubmit 
    // that takes a task object as an argument.
  }

  return (
    <form className="new-task-form">
      {/* Next, update this form to be a controlled component, 
      so that all form inputs are captured in state. */}
      <label>
        Details
        <input type="text" name="text" />
      </label>
      <label>
        Category
        <select name="category">
          {/* render <option> elements for each category here */}
        </select>
      </label>
      <input type="submit" value="Add task" />
    </form>
  );
}

export default NewTaskForm;
