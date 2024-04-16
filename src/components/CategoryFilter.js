import React from "react";

function CategoryFilter({categories, selectedCategory, setSelectedCategory}) {

  const handleSelect = e => {
    setSelectedCategory(e.target.textContent)
  }

  const displayCategories = categories.map(category => {
    return (
      <button 
        key={category} 
        onClick={handleSelect}
        className={category === selectedCategory ? 'selected' : ''}
      >
        {category}
      </button>
    )
  })
  return (
    <div className="categories">
      <h5>Category filters</h5>
      {displayCategories}
    </div>
  );
}

export default CategoryFilter;
