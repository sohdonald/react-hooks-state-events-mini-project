import React, { useState } from "react";

function NewTaskForm({ categories, onTaskFormSubmit }) {
  
  const [formData, setFormData] = useState({
    text: "",
    category: categories[0],
  });

  function handleSubmit(event) {
    event.preventDefault();
    onTaskFormSubmit(formData);
    setFormData({
      text: "",
      category: categories[0],
    });
  }

  function handleChange(e) {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  }
  // what does handleSubmit suppose to do?

  // event passes the submit button

  // we know we are getting an object, the properties are the keys text and category

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

  return (
    <form className="new-task-form" onSubmit={handleSubmit}>
      {/* Next, update this form to be a controlled component, 
      so that all form inputs are captured in state. */}
      <label>
        Details
        <input
          type="text"
          name="text"
          onChange={handleChange}
          value={formData.text}
        />
      </label>
      <label>
        Category
        <select
          name="category"
          onChange={handleChange}
          value={formData.category}
        >
          {categories.map((category) => (
            <option key={category} value={category}>
              {category}
            </option>
          ))}
          {/* render <option> elements for each category here */}
        </select>
      </label>
      <input type="submit" value="Add task" />
    </form>
  );
}

export default NewTaskForm;
