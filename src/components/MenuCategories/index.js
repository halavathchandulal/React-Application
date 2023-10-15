import React from 'react'

const MenuCategories = ({categories, handleCategoryChange}) => (
  <div>
    {categories.map(category => (
      <button
        key={category.id}
        type="button" // Add type attribute
        onClick={() => handleCategoryChange(category)}
      >
        {category.menu_category}
      </button>
    ))}
  </div>
)

export default MenuCategories
