import React from "react";

function CategoryFilter({ categories, selectedCategory, onSelectCategory }) {
  return (
    <div className="categories">
      <h5>Category filters</h5>
      {categories.map((category) => (
        <button
          // Whichever button was clicked should have a class of selected.
          // The other buttons should not have any class assigned.
          key={category}
          className={category === selectedCategory ? "selected" : ""}
          // If the button for "All" is selected, all the tasks should be displayed.
          onClick={() => onSelectCategory(category)}
        >
          {category}
        </button>
      ))}
    </div>
  );
}

export default CategoryFilter;
